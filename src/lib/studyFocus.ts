import type { ExamChoice } from './exams'
import type { StudyProgress } from './localDatabaseTypes'
import type { ReviewSchedules } from './scheduledReviews'

export type FocusResource = 'exam-questions' | 'bibliography-questions' | 'mind-maps' | 'scheduled-reviews' | 'performance'
type FocusResourceInfo = { id: FocusResource; title: string; description: string; icon: string }
type FocusData = Pick<StudyProgress, 'answers' | 'questionSnapshots' | 'progressUpdatedAt' | 'completedSimulations'> & { reviewSchedules: ReviewSchedules }

export function scopeStudyData(exam: ExamChoice | null, data: FocusData): FocusData {
  if (!exam) return data
  const questionSnapshots = Object.fromEntries(Object.entries(data.questionSnapshots)
    .filter(([, question]) => question.exam === exam.exam && (!exam.subject || question.subject === exam.subject)))
  const ids = new Set(Object.keys(questionSnapshots))
  return {
    questionSnapshots,
    answers: Object.fromEntries(Object.entries(data.answers).filter(([id]) => ids.has(id))),
    progressUpdatedAt: Object.fromEntries(Object.entries(data.progressUpdatedAt).filter(([id]) => ids.has(id))),
    reviewSchedules: Object.fromEntries(Object.entries(data.reviewSchedules).filter(([id]) => ids.has(id))),
    completedSimulations: data.completedSimulations.filter((simulation) => simulation.examId === exam.id),
  }
}

export function getFocusResources(exam: ExamChoice): FocusResourceInfo[] {
  const resources: FocusResourceInfo[] = [
    { id: 'exam-questions', title: 'Questões de provas', description: 'Pratique as matérias deste concurso e monte seus simulados.', icon: '✓' },
  ]
  if (exam.id === 'cp-t-informatica') resources.push(
    { id: 'bibliography-questions', title: 'Apostilas e livros', description: 'Questões baseadas na bibliografia do CP-T de Informática.', icon: '▤' },
    { id: 'mind-maps', title: 'Mapas mentais', description: 'Consulte os mapas do Quadro Técnico e baixe-os para estudar offline.', icon: '✦' },
  )
  resources.push(
    { id: 'scheduled-reviews', title: 'Revisões programadas', description: 'Revise as questões deste concurso previstas para hoje e as atrasadas.', icon: '↻' },
    { id: 'performance', title: 'Meu desempenho', description: 'Acompanhe seus acertos, erros, simulados e questões para revisar.', icon: '▥' },
  )
  return resources
}
