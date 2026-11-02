import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import type { SavedSimulation } from '../lib/localDatabaseTypes'

type Submission = (isCurrent: () => boolean) => Promise<{ selectedOption: number } | null>

export function useSimulationSession(setSavedSimulation: Dispatch<SetStateAction<SavedSimulation | null>>) {
  const [simulationIds, updateIds] = useState<string[] | null>(null)
  const [simulationAnswers, setSimulationAnswers] = useState<Record<string, number>>({})
  const activeSession = useRef<{ pending: Set<string> } | null>(null)
  useEffect(() => () => { activeSession.current = null }, [])

  const setSimulationIds = useCallback((ids: string[] | null) => {
    activeSession.current = ids === null ? null : { pending: new Set() }
    updateIds(ids)
  }, [])

  async function recordAnswer(questionId: string, simulationId: string, submit: Submission) {
    const session = activeSession.current
    if (!session || session.pending.has(questionId)) return
    session.pending.add(questionId)
    const isCurrent = () => activeSession.current === session
    try {
      const result = await submit(isCurrent)
      if (!result || !isCurrent()) return
      const updatedAt = new Date().toISOString()
      setSimulationAnswers((current) => ({ ...current, [questionId]: result.selectedOption }))
      setSavedSimulation((current) => {
        if (!current || !isCurrent()) return current
        const currentId = current.id ?? `${current.examId}-${current.updatedAt}`
        if (currentId !== simulationId) return current
        return { ...current, id: current.id ?? simulationId, answers: { ...current.answers, [questionId]: result.selectedOption }, lastQuestionId: questionId, updatedAt }
      })
    } finally {
      session.pending.delete(questionId)
    }
  }

  return { simulationIds, setSimulationIds, simulationAnswers, setSimulationAnswers, recordAnswer }
}
