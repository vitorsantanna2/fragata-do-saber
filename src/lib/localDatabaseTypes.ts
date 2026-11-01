import type { ReviewSchedules } from './scheduledReviews'

export type CachedQuestionRow = {
  id: string
  year: number | null
  question_number: number | null
  question_type: 'exam' | 'bibliography'
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  statement: string
  statement_after_image: string | null
  image_url: string | null
  image_alt: string | null
  options: string[]
  correct_option?: number
  explanation?: string | null
  source: string | null
}

export type CachedMindMap = {
  id: string
  title: string
  subject: string
  description: string | null
  storage_path: string
  content_type: string
  sort_order: number
  updated_at: string
  local_path: string | null
}

export type StudyProgress = {
  answers: Record<string, number>
  revealed: string[]
  favorites: string[]
  selectedExamId: string | null
  selectedStudyMode: 'exam-questions' | 'bibliography-questions' | 'mind-maps' | null
  topic: string
  year: string
  bibliographySource: string
  questionSearch: string
  questionSnapshots: Record<string, StudyQuestionSnapshot>
  progressUpdatedAt: Record<string, string>
  savedSimulation: SavedSimulation | null
  completedSimulations: CompletedSimulation[]
  reviewSchedules?: ReviewSchedules
}

export type SavedSimulation = {
  trackId?: string
  trackStepId?: string
  id?: string
  ids: string[]
  answers: Record<string, number>
  revealed: string[]
  examId: string
  studyMode: 'exam-questions' | 'bibliography-questions'
  lastQuestionId: string | null
  updatedAt: string
}

export type CompletedSimulation = {
  id: string
  examId: string
  examTitle: string | null
  studyMode: 'exam-questions' | 'bibliography-questions'
  totalQuestions: number
  correctAnswers: number
  wrongAnswers: number
  score: number
  completedAt: string
  isSimulation: boolean
}

export type OffensiveState = {
  totalOffensives: number
  currentStreak: number
  bestStreak: number
  lastOffensiveDate: string | null
  offensiveLoggedToday: boolean
  joinedAt: string | null
}

export type StudyQuestionSnapshot = {
  exam: string
  subject: string
  topic: string | null
  year: string
  questionType: 'exam' | 'bibliography'
  prompt: string
  correctOption: number | null
  explanation: string | null
}
