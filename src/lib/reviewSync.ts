import { supabase } from './supabase'
import type { ReviewSchedule, ReviewSchedules } from './scheduledReviews'

type ReviewRow = { user_id: string; question_id: string; due_date: string; state: ReviewSchedule; updated_at: string }

function scheduleKey(schedule: ReviewSchedule) {
  return JSON.stringify([schedule.dueDate, schedule.intervalDays, schedule.streak, schedule.previousStreak, schedule.confidence, schedule.lastCorrect, schedule.lastAttemptId, schedule.lastReviewedAt, schedule.updatedAt])
}

export async function syncReviewSchedules(userId: string, local: ReviewSchedules): Promise<ReviewSchedules> {
  if (!supabase) return local
  const remote = new Map<string, ReviewRow>()
  for (let page = 0; ; page++) {
    const { data, error } = await supabase.from('user_review_schedules')
      .select('user_id,question_id,due_date,state,updated_at')
      .eq('user_id', userId).order('question_id').range(page * 500, page * 500 + 499)
    if (error) throw error
    const batch = (data ?? []) as ReviewRow[]
    for (const row of batch) remote.set(row.question_id, row)
    if (batch.length < 500) break
  }
  const merged: ReviewSchedules = {}
  const uploads: ReviewRow[] = []
  for (const [id, schedule] of Object.entries(local)) {
    const row = remote.get(id)
    const newer = !row || Date.parse(schedule.updatedAt) > Date.parse(row.updated_at)
    const winsTie = row && Date.parse(schedule.updatedAt) === Date.parse(row.updated_at) && scheduleKey(schedule) > scheduleKey(row.state)
    if (newer || winsTie) {
      merged[id] = schedule
      uploads.push({ user_id: userId, question_id: id, due_date: schedule.dueDate, state: schedule, updated_at: schedule.updatedAt })
    } else {
      merged[id] = row.state
    }
    remote.delete(id)
  }
  for (const [id, row] of remote) merged[id] = row.state
  for (let offset = 0; offset < uploads.length; offset += 100) {
    const { error } = await supabase.from('user_review_schedules').upsert(uploads.slice(offset, offset + 100), { onConflict: 'user_id,question_id' })
    if (error) throw error
  }
  return merged
}
