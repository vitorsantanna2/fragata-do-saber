import { supabase } from './supabase'
import type { StudyProgress, StudyQuestionSnapshot, CompletedSimulation } from './localDatabase'

type CloudProgressRow = {
  user_id: string
  question_id: string
  selected_option: number | null
  is_favorite: boolean
  is_revealed: boolean
  updated_at: string
}

type CloudSimulationRow = {
  user_id: string
  simulation_id: string
  exam_id: string
  exam_title: string | null
  study_mode: string
  total_questions: number
  correct_answers: number
  wrong_answers: number
  score: number
  completed_at: string
  updated_at: string
}

type SyncInput = Pick<StudyProgress, 'answers' | 'favorites' | 'revealed' | 'progressUpdatedAt' | 'questionSnapshots' | 'completedSimulations'>

export type SyncedProgress = Omit<SyncInput, 'questionSnapshots' | 'completedSimulations'> & {
  questionSnapshots: Record<string, StudyQuestionSnapshot>
  completedSimulations: StudyProgress['completedSimulations']
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

  // ---- Simulações concluídas ----
  const remoteSims: CloudSimulationRow[] = []
  for (let page = 0; ; page += 1) {
    const { data, error } = await supabase
      .from('user_simulation_results')
      .select('user_id,simulation_id,exam_id,exam_title,study_mode,total_questions,correct_answers,wrong_answers,score,completed_at,updated_at')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
      .range(page * 500, page * 500 + 499)
    if (error) throw error
    const batch = (data ?? []) as CloudSimulationRow[]
    remoteSims.push(...batch)
    if (batch.length < 500) break
  }

  const remoteSimsById = new Map(remoteSims.map((row) => [row.simulation_id, row]))
  const simWinners = new Map<string, CloudSimulationRow>()
  const simUploads: CloudSimulationRow[] = []

  for (const sim of progress.completedSimulations) {
    const localRow: CloudSimulationRow = {
      user_id: user.id,
      simulation_id: sim.id,
      exam_id: sim.examId,
      exam_title: sim.examTitle ?? null,
      study_mode: sim.studyMode,
      total_questions: sim.totalQuestions,
      correct_answers: sim.correctAnswers,
      wrong_answers: sim.wrongAnswers,
      score: sim.score,
      completed_at: sim.completedAt,
      updated_at: sim.completedAt,
    }
    const remote = remoteSimsById.get(sim.id)
    if (!remote || Date.parse(sim.completedAt) > Date.parse(remote.completed_at)) {
      simUploads.push(localRow)
      simWinners.set(sim.id, localRow)
    } else {
      simWinners.set(sim.id, remote)
    }
    remoteSimsById.delete(sim.id)
  }
  for (const remote of remoteSimsById.values()) simWinners.set(remote.simulation_id, remote)

  for (let offset = 0; offset < simUploads.length; offset += 100) {
    const { error } = await supabase.from('user_simulation_results').upsert(simUploads.slice(offset, offset + 100), { onConflict: 'user_id,simulation_id' })
    if (error) throw error
  }

  const completedSimulations = [...simWinners.values()].map((row) => ({
    id: row.simulation_id,
    examId: row.exam_id,
    examTitle: row.exam_title ?? null,
    studyMode: row.study_mode as 'exam-questions' | 'bibliography-questions',
    totalQuestions: row.total_questions,
    correctAnswers: row.correct_answers,
    wrongAnswers: row.wrong_answers,
    score: Number(row.score),
    completedAt: row.completed_at,
  })).sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt))

  return { answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations: deduplicateCompletedSimulations(completedSimulations) }
}

function deduplicateCompletedSimulations(simulations: CompletedSimulation[]): CompletedSimulation[] {
  const seen = new Map<string, CompletedSimulation>()
  for (const sim of simulations) {
    const key = `${sim.examId}|${sim.examTitle ?? ''}|${sim.studyMode}|${sim.totalQuestions}|${sim.correctAnswers}|${sim.wrongAnswers}|${sim.score}`
    const existing = seen.get(key)
    if (!existing || Date.parse(sim.completedAt) > Date.parse(existing.completedAt)) {
      seen.set(key, sim)
    }
  }
  return [...seen.values()].sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt))
}
