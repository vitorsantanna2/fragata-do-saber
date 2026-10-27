import { supabase } from './supabase'
import type { StudyProgress, StudyQuestionSnapshot } from './localDatabase'

type CloudProgressRow = {
  user_id: string
  question_id: string
  selected_option: number | null
  is_favorite: boolean
  is_revealed: boolean
  updated_at: string
}

type SyncInput = Pick<StudyProgress, 'answers' | 'favorites' | 'revealed' | 'progressUpdatedAt' | 'questionSnapshots'>

export type SyncedProgress = Omit<SyncInput, 'questionSnapshots'> & {
  questionSnapshots: Record<string, StudyQuestionSnapshot>
}

export async function syncStudyProgress(progress: SyncInput): Promise<SyncedProgress | null> {
  if (!supabase || !navigator.onLine) return null
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
  if (sessionError) throw sessionError
  const user = sessionData.session?.user
  if (!user || user.is_anonymous) return null

  const remoteRows: CloudProgressRow[] = []
  for (let page = 0; ; page += 1) {
    const { data, error } = await supabase
      .from('user_question_progress')
      .select('user_id,question_id,selected_option,is_favorite,is_revealed,updated_at')
      .eq('user_id', user.id)
      .order('question_id')
      .range(page * 500, page * 500 + 499)
    if (error) throw error
    const batch = (data ?? []) as CloudProgressRow[]
    remoteRows.push(...batch)
    if (batch.length < 500) break
  }

  const remoteById = new Map(remoteRows.map((row) => [row.question_id, row]))
  const localIds = new Set([
    ...Object.keys(progress.answers),
    ...progress.favorites,
    ...progress.revealed,
    ...Object.keys(progress.progressUpdatedAt),
  ])
  const winners = new Map<string, CloudProgressRow>()
  const uploads: CloudProgressRow[] = []
  const now = new Date().toISOString()

  for (const id of localIds) {
    const timestamp = progress.progressUpdatedAt[id] ?? now
    const localRow: CloudProgressRow = {
      user_id: user.id,
      question_id: id,
      selected_option: progress.answers[id] ?? null,
      is_favorite: progress.favorites.includes(id),
      is_revealed: progress.revealed.includes(id),
      updated_at: timestamp,
    }
    const remote = remoteById.get(id)
    if (!remote || Date.parse(timestamp) > Date.parse(remote.updated_at)) {
      uploads.push(localRow)
      winners.set(id, localRow)
    } else {
      winners.set(id, remote)
    }
    remoteById.delete(id)
  }
  for (const remote of remoteById.values()) winners.set(remote.question_id, remote)

  for (let offset = 0; offset < uploads.length; offset += 100) {
    const { error } = await supabase.from('user_question_progress').upsert(uploads.slice(offset, offset + 100), { onConflict: 'user_id,question_id' })
    if (error) throw error
  }

  const answers: Record<string, number> = {}
  const favorites: string[] = []
  const revealed: string[] = []
  const progressUpdatedAt: Record<string, string> = {}
  const questionIds: string[] = []
  for (const [id, row] of winners) {
    if (row.selected_option !== null) answers[id] = row.selected_option
    if (row.is_favorite) favorites.push(id)
    if (row.is_revealed) revealed.push(id)
    progressUpdatedAt[id] = row.updated_at
    questionIds.push(id)
  }

  const questionSnapshots = { ...progress.questionSnapshots }
  for (let offset = 0; offset < questionIds.length; offset += 100) {
    const { data, error } = await supabase
      .from('questions')
      .select('id,exam,subject,topic,year,question_type,statement,correct_option')
      .in('id', questionIds.slice(offset, offset + 100))
    if (error) throw error
    for (const row of data ?? []) {
      questionSnapshots[row.id] = {
        exam: row.exam,
        subject: row.subject,
        topic: row.topic,
        year: row.question_type === 'bibliography' ? 'Bibliografia' : String(row.year ?? ''),
        questionType: row.question_type,
        prompt: row.statement.slice(0, 400),
        correctOption: row.correct_option,
      }
    }
  }

  return { answers, favorites, revealed, progressUpdatedAt, questionSnapshots }
}
