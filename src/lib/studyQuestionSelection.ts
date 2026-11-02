import type { Question } from '../hooks/useQuestions'
import type { StudyQuestionSnapshot } from './localDatabaseTypes'

export function selectStudyQuestions(questions: Question[], filtered: Question[], simulationIds: string[] | null, snapshots: Record<string, StudyQuestionSnapshot>): Question[] {
  const byId = new Map(questions.map((question) => [question.id, question]))
  // Os filtros controlam apenas a lista; o simulado mantém os IDs sorteados.
  const selected = simulationIds === null ? filtered : simulationIds.flatMap((id) => byId.has(id) ? [byId.get(id)!] : [])
  return selected.map((question) => {
    const result = snapshots[question.id]
    return result?.correctOption != null ? { ...question, answer: result.correctOption, explanation: result.explanation } : question
  })
}
