import type { StudyQuestionSnapshot } from './localDatabaseTypes'
import { getSaoPauloDateKey } from './offensiveDates'

export type ReviewConfidence = 'sure' | 'unsure' | 'guess'
export type ReviewSchedule = {
  dueDate: string
  intervalDays: number
  streak: number
  previousStreak: number
  confidence: ReviewConfidence | null
  lastCorrect: boolean
  lastAttemptId: string
  lastReviewedAt: string
  updatedAt: string
}
export type ReviewSchedules = Record<string, ReviewSchedule>
export type DueReview = { questionId: string; schedule: ReviewSchedule; snapshot: StudyQuestionSnapshot }

const INTERVALS = [1, 3, 7, 15, 30, 60]

export function scheduleReview(previous: ReviewSchedule | undefined, correct: boolean, confidence: ReviewConfidence | null, attemptId: string, reviewedAt = new Date().toISOString(), updatedAt = reviewedAt): ReviewSchedule {
  const day = getSaoPauloDateKey(new Date(reviewedAt))
  const sameDay = previous && getSaoPauloDateKey(new Date(previous.lastReviewedAt)) === day
  let previousStreak = previous?.streak ?? 0
  if (previous?.lastAttemptId === attemptId) previousStreak = previous.previousStreak
  else if (sameDay) previousStreak = previous.confidence === 'sure' && previous.lastCorrect ? previous.previousStreak : 0
  const streak = correct && confidence === 'sure' ? Math.min(previousStreak + 1, INTERVALS.length) : 0
  const intervalDays = streak ? INTERVALS[streak - 1] : 1
  const dueDate = new Date(Date.parse(`${day}T00:00:00Z`) + intervalDays * 86_400_000).toISOString().slice(0, 10)
  return { dueDate, intervalDays, streak, previousStreak, confidence, lastCorrect: correct, lastAttemptId: attemptId, lastReviewedAt: reviewedAt, updatedAt }
}

export function seedReviewSchedules(schedules: ReviewSchedules, answers: Record<string, number>, snapshots: Record<string, StudyQuestionSnapshot>, timestamps: Record<string, string>, now = new Date().toISOString()): ReviewSchedules {
  const next = { ...schedules }
  for (const [id, answer] of Object.entries(answers)) {
    const snapshot = snapshots[id]
    if (next[id] || !snapshot || snapshot.correctOption == null) continue
    const reviewedAt = Number.isFinite(Date.parse(timestamps[id])) ? timestamps[id] : now
    next[id] = scheduleReview(undefined, answer === snapshot.correctOption, null, `legacy-${id}-${reviewedAt}`, reviewedAt)
  }
  return next
}

export function getDueReviews(schedules: ReviewSchedules, snapshots: Record<string, StudyQuestionSnapshot>, today = getSaoPauloDateKey()): DueReview[] {
  return Object.entries(schedules)
    .filter(([id, schedule]) => snapshots[id] && schedule.dueDate <= today)
    .map(([questionId, schedule]) => ({ questionId, schedule, snapshot: snapshots[questionId] }))
    .sort((a, b) => a.schedule.dueDate.localeCompare(b.schedule.dueDate) || a.questionId.localeCompare(b.questionId))
}
