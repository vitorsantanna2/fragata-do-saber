import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import {
  loadStudyProgress,
  saveStudyProgress,
  loadOffensiveState,
  type StudyQuestionSnapshot,
  type SavedSimulation,
  type CompletedSimulation,
  type OffensiveState,
} from '../lib/localDatabase'
import { syncStudyProgress, syncOffensiveState } from '../lib/progressSync'

type UseProgressProps = {
  questions: any[]
  accountUser: { id: string; email: string | null; is_anonymous: boolean } | null
  isOnline: boolean
}

type UseProgressReturn = {
  answers: Record<string, number>
  revealed: string[]
  favorites: string[]
  progressUpdatedAt: Record<string, string>
  questionSnapshots: Record<string, StudyQuestionSnapshot>
  savedSimulation: SavedSimulation | null
  completedSimulations: CompletedSimulation[]
  recordCompletedSimulation: (simulation: CompletedSimulation) => void
  syncStatus: 'local' | 'offline' | 'syncing' | 'synced' | 'error'
  offensiveState: OffensiveState | null
  offensiveLoaded: boolean
  setOffensiveState: (value: OffensiveState | null) => void
  setAnswers: (value: Record<string, number>) => void
  setRevealed: (value: string[]) => void
  setFavorites: (value: string[]) => void
  setProgressUpdatedAt: (value: Record<string, string>) => void
  setQuestionSnapshots: (value: Record<string, StudyQuestionSnapshot>) => void
  setSavedSimulation: Dispatch<SetStateAction<SavedSimulation | null>>
  setSyncStatus: (value: 'local' | 'offline' | 'syncing' | 'synced' | 'error') => void
  setManualSyncRevision: Dispatch<SetStateAction<number>>
  manualSyncRevision: number
  simulationRevealed: string[]
  setSimulationRevealed: Dispatch<SetStateAction<string[]>>
  lastManualSyncRevision: React.MutableRefObject<number>
  lastSyncedProgressFingerprint: React.MutableRefObject<string | null>
  suppressProgressTimestamp: React.MutableRefObject<boolean>
  previousQuestionProgress: React.MutableRefObject<{
    answers: Record<string, number>
    revealed: string[]
    favorites: string[]
  }>
  progressRestored: boolean
  setProgressRestored: (value: boolean) => void
  skipSelectionReset: React.MutableRefObject<boolean>
}

export function useProgress({ questions, accountUser, isOnline }: UseProgressProps): UseProgressReturn {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [progressUpdatedAt, setProgressUpdatedAt] = useState<Record<string, string>>({})
  const [questionSnapshots, setQuestionSnapshots] = useState<Record<string, StudyQuestionSnapshot>>({})
  const [savedSimulation, setSavedSimulation] = useState<SavedSimulation | null>(null)
  const [completedSimulations, setCompletedSimulations] = useState<CompletedSimulation[]>([])
  const [simulationRevealed, setSimulationRevealed] = useState<string[]>([])
  const [syncStatus, setSyncStatus] = useState<'local' | 'offline' | 'syncing' | 'synced' | 'error'>('local')
  const [offensiveState, setOffensiveState] = useState<OffensiveState | null>(null)
  const [offensiveLoaded, setOffensiveLoaded] = useState(false)

  function recordCompletedSimulation(simulation: CompletedSimulation) {
    setCompletedSimulations((current) => {
      const key = `${simulation.examId}|${simulation.examTitle ?? ''}|${simulation.studyMode}|${simulation.totalQuestions}|${simulation.correctAnswers}|${simulation.wrongAnswers}|${simulation.score}`
      const alreadyExists = current.some((s) => {
        const existingKey = `${s.examId}|${s.examTitle ?? ''}|${s.studyMode}|${s.totalQuestions}|${s.correctAnswers}|${s.wrongAnswers}|${s.score}`
        return existingKey === key
      })
      if (alreadyExists) return current
      return [simulation, ...current].slice(0, 50)
    })
  }
  const [manualSyncRevision, setManualSyncRevision] = useState(0)
  const [progressRestored, setProgressRestored] = useState(false)

  const skipSelectionReset = useRef(false)
  const suppressProgressTimestamp = useRef(false)
  const previousQuestionProgress = useRef({ answers: {} as Record<string, number>, revealed: [] as string[], favorites: [] as string[] })
  const lastSyncedProgressFingerprint = useRef<string | null>(null)
  const lastManualSyncRevision = useRef(0)

  useEffect(() => {
    let active = true
    void loadStudyProgress().then((progress) => {
      if (!active) return
      if (progress) {
        skipSelectionReset.current = true
        suppressProgressTimestamp.current = true
        setAnswers(progress.answers)
        setRevealed(progress.revealed)
        setFavorites(progress.favorites)
        setProgressUpdatedAt(progress.progressUpdatedAt)
        setQuestionSnapshots(progress.questionSnapshots)
        setSavedSimulation(progress.savedSimulation)
        setCompletedSimulations(progress.completedSimulations)
      }
      setProgressRestored(true)
    })
    void loadOffensiveState().then((state) => {
      if (!active) return
      setOffensiveState(state)
      setOffensiveLoaded(true)
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (!progressRestored) return
    const timeout = window.setTimeout(() => {
      void saveStudyProgress({
        answers, revealed, favorites, selectedExamId: null as any, selectedStudyMode: null as any,
        topic: '', year: '', bibliographySource: '', questionSearch: '', questionSnapshots, progressUpdatedAt,
        savedSimulation, completedSimulations,
      })
    }, 200)
    return () => window.clearTimeout(timeout)
    }, [progressRestored, answers, revealed, favorites, questionSnapshots, progressUpdatedAt, savedSimulation, completedSimulations])

  useEffect(() => {
    if (!progressRestored) return
    const current = { answers, revealed, favorites }
    if (suppressProgressTimestamp.current) {
      suppressProgressTimestamp.current = false
      previousQuestionProgress.current = current
      return
    }
    const previous = previousQuestionProgress.current
    const ids = new Set([...Object.keys(previous.answers), ...Object.keys(answers), ...previous.revealed, ...revealed, ...previous.favorites, ...favorites])
    const changed = [...ids].filter((id) =>
      previous.answers[id] !== answers[id] ||
      previous.revealed.includes(id) !== revealed.includes(id) ||
      previous.favorites.includes(id) !== favorites.includes(id))
    previousQuestionProgress.current = current
    if (changed.length) {
      const updatedAt = new Date().toISOString()
      setProgressUpdatedAt((existing) => ({ ...existing, ...Object.fromEntries(changed.map((id) => [id, updatedAt])) }))
    }
  }, [progressRestored, answers, revealed, favorites])

  useEffect(() => {
    if (!progressRestored || !accountUser || accountUser.is_anonymous) {
      setSyncStatus('local')
      return
    }
    if (!isOnline) {
      setSyncStatus('offline')
      return
    }

    const fingerprint = JSON.stringify({ userId: accountUser.id, answers, favorites: [...favorites].sort(), revealed: [...revealed].sort(), progressUpdatedAt, completedSimulations: [...completedSimulations].sort((a, b) => a.id.localeCompare(b.id)) })
    const isManualSync = manualSyncRevision > lastManualSyncRevision.current
    if (!isManualSync && fingerprint === lastSyncedProgressFingerprint.current) return
    let active = true
    const timer = window.setTimeout(() => {
      setSyncStatus('syncing')
      void syncStudyProgress({ answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations })
        .then((merged) => {
          if (!active) return
          lastManualSyncRevision.current = manualSyncRevision
          if (!merged) { setSyncStatus('offline'); return }
          const mergedFingerprint = JSON.stringify({ userId: accountUser.id, answers: merged.answers, favorites: [...merged.favorites].sort(), revealed: [...merged.revealed].sort(), progressUpdatedAt: merged.progressUpdatedAt })
          lastSyncedProgressFingerprint.current = mergedFingerprint
          suppressProgressTimestamp.current = true
          setAnswers(merged.answers)
          setFavorites(merged.favorites)
          setRevealed(merged.revealed)
          setProgressUpdatedAt(merged.progressUpdatedAt)
          setQuestionSnapshots(merged.questionSnapshots)
          setCompletedSimulations(merged.completedSimulations)
          setSyncStatus('synced')
        })
        .catch((error: unknown) => {
          if (!active) return
          lastSyncedProgressFingerprint.current = null
          setSyncStatus('error')
          console.warn('Falha ao sincronizar progresso.', error)
        })
    }, 450)
    return () => { active = false; window.clearTimeout(timer) }
  }, [progressRestored, accountUser, isOnline, answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations, manualSyncRevision])

  useEffect(() => {
    if (!progressRestored || !accountUser || accountUser.is_anonymous) return
    if (!isOnline) return
    if (!offensiveState) return

    let active = true
    const timer = window.setTimeout(() => {
      void syncOffensiveState(offensiveState)
        .then((synced) => {
          if (!active) return
          if (synced) {
            setOffensiveState(synced as OffensiveState)
          }
        })
        .catch((error: unknown) => {
          if (!active) return
          console.warn('Falha ao sincronizar ofensiva.', error)
        })
    }, 450)
    return () => { active = false; window.clearTimeout(timer) }
  }, [progressRestored, accountUser, isOnline, offensiveState])

  useEffect(() => {
    if (!questions.length) return
    setQuestionSnapshots((current) => {
      const next = { ...current }
      for (const question of questions) {
        next[question.id] = {
          exam: question.exam,
          subject: question.subject,
          topic: question.topic,
          year: question.year,
          questionType: question.questionType,
          prompt: question.prompt.slice(0, 400),
          correctOption: question.answer,
        }
      }
      return next
    })
  }, [questions])

  return {
    answers,
    revealed,
    favorites,
    progressUpdatedAt,
    questionSnapshots,
    savedSimulation,
    completedSimulations,
    recordCompletedSimulation,
    simulationRevealed,
    setSimulationRevealed,
    syncStatus,
    offensiveState,
    offensiveLoaded,
    setOffensiveState,
    setAnswers,
    setRevealed,
    setFavorites,
    setProgressUpdatedAt,
    setQuestionSnapshots,
    setSavedSimulation,
    setSyncStatus,
    setManualSyncRevision,
    manualSyncRevision,
    lastManualSyncRevision,
    lastSyncedProgressFingerprint,
    suppressProgressTimestamp,
    previousQuestionProgress,
    progressRestored,
    setProgressRestored,
    skipSelectionReset,
  }
}
