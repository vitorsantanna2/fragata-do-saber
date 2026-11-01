type QuestionResult = { id: string; answer: number | null }

export function getSimulationResult(questions: QuestionResult[], simulationIds: string[] | null, answers: Record<string, number>) {
  const byId = new Map(questions.map((question) => [question.id, question]))
  const ids = simulationIds ?? questions.map((question) => question.id)
  let answeredCount = 0
  let correctCount = 0
  for (const id of ids) {
    const question = byId.get(id)
    if (!question || question.answer === null || answers[id] === undefined) continue
    answeredCount += 1
    if (answers[id] === question.answer) correctCount += 1
  }
  const total = ids.length
  const complete = total > 0 && answeredCount === total
  return {
    total,
    answeredCount,
    correctCount,
    complete,
    pointsPerQuestion: total ? 100 / total : 0,
    score: complete ? correctCount / total * 100 : 0,
  }
}
