import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import {
  loadStudyProgress,
  saveStudyProgress,
  loadOffensiveState,
  type StudyQuestionSnapshot,
  type SavedSimulation,
  type CompletedSimulation,
  type OffensiveState,
} from '../lib/localDatabase'
import { loadValidatedAnswers, syncStudyProgress, syncOffensiveState, type SyncedProgress } from '../lib/progressSync'
import { mergeCompletedSimulations } from '../lib/simulationHistory'
import { scheduleReview, seedReviewSchedules, type ReviewConfidence, type ReviewSchedules } from '../lib/scheduledReviews'
import type { Question } from './useQuestions'

function progressFingerprint(userId: string, progress: SyncedProgress) {
  return JSON.stringify({
    userId,
    answers: Object.entries(progress.answers).sort(([a], [b]) => a.localeCompare(b)),
    favorites: [...progress.favorites].sort(),
    revealed: [...progress.revealed].sort(),
    progressUpdatedAt: Object.entries(progress.progressUpdatedAt).sort(([a], [b]) => a.localeCompare(b)),
    questionSnapshots: Object.entries(progress.questionSnapshots).sort(([a], [b]) => a.localeCompare(b)),
    completedSimulations: [...progress.completedSimulations].sort((a, b) => a.id.localeCompare(b.id)),
    reviewSchedules: Object.entries(progress.reviewSchedules ?? {}).sort(([a], [b]) => a.localeCompare(b)),
  })
}

type UseProgressProps = {
  questions: Question[]
  accountUser: { id: string; email: string | null; is_anonymous: boolean; created_at: string } | null
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
  reviewSchedules: ReviewSchedules
  recordReviewAnswer: (questionId: string, correct: boolean, attemptId: string) => void
  rateReview: (questionId: string, confidence: ReviewConfidence) => void
  syncStatus: 'local' | 'offline' | 'syncing' | 'synced' | 'error'
  offensiveState: OffensiveState | null
  offensiveLoaded: boolean
  setOffensiveState: (value: OffensiveState | null) => void
  theme: 'light' | 'dark'
  setTheme: (value: 'light' | 'dark') => void
  themeLoaded: boolean
  setAnswers: Dispatch<SetStateAction<Record<string, number>>>
  setRevealed: (value: string[]) => void
  setFavorites: (value: string[]) => void
  setProgressUpdatedAt: (value: Record<string, string>) => void
  setQuestionSnapshots: Dispatch<SetStateAction<Record<string, StudyQuestionSnapshot>>>
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
  const ownerId = accountUser?.id ?? 'guest'
  const [loadedOwner, setLoadedOwner] = useState(ownerId)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [progressUpdatedAt, setProgressUpdatedAt] = useState<Record<string, string>>({})
  const [questionSnapshots, setQuestionSnapshots] = useState<Record<string, StudyQuestionSnapshot>>({})
  const [savedSimulation, setSavedSimulation] = useState<SavedSimulation | null>(null)
  const [completedSimulations, setCompletedSimulations] = useState<CompletedSimulation[]>([])
  const [reviewSchedules, setReviewSchedules] = useState<ReviewSchedules>({})
  const recordReviewAnswer = useCallback((questionId: string, correct: boolean, attemptId: string) => {
    const now = new Date().toISOString()
    setReviewSchedules((current) => {
      if (current[questionId]?.lastAttemptId === attemptId) return current
      return { ...current, [questionId]: scheduleReview(current[questionId], correct, null, attemptId, now) }
    })
  }, [])
  const rateReview = useCallback((questionId: string, confidence: ReviewConfidence) => {
    const now = new Date().toISOString()
    setReviewSchedules((current) => {
      const previous = current[questionId]
      if (!previous || previous.confidence === confidence) return current
      return { ...current, [questionId]: scheduleReview(previous, previous.lastCorrect, confidence, previous.lastAttemptId, previous.lastReviewedAt, now) }
    })
  }, [])
  const [simulationRevealed, setSimulationRevealed] = useState<string[]>([])
  const [syncStatus, setSyncStatus] = useState<'local' | 'offline' | 'syncing' | 'synced' | 'error'>('local')
  const [offensiveState, setOffensiveState] = useState<OffensiveState | null>(null)
  const [offensiveLoaded, setOffensiveLoaded] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [themeLoaded, setThemeLoaded] = useState(false)

  function recordCompletedSimulation(simulation: CompletedSimulation) {
    setCompletedSimulations((current) => mergeCompletedSimulations([simulation, ...current]))
  }
  const [manualSyncRevision, setManualSyncRevision] = useState(0)
  const [progressRestored, setProgressRestored] = useState(false)

  const skipSelectionReset = useRef(false)
  const suppressProgressTimestamp = useRef(false)
  const previousQuestionProgress = useRef({ answers: {} as Record<string, number>, revealed: [] as string[], favorites: [] as string[] })
  const lastSyncedProgressFingerprint = useRef<string | null>(null)
  const lastManualSyncRevision = useRef(0)

  // Reinicia antes de renderizar/rodar efeitos da nova conta.
  if (loadedOwner !== ownerId) {
    setLoadedOwner(ownerId)
    setProgressRestored(false)
    setAnswers({})
    setRevealed([])
    setFavorites([])
    setProgressUpdatedAt({})
    setQuestionSnapshots({})
    setSavedSimulation(null)
    setCompletedSimulations([])
    setReviewSchedules({})
    setSimulationRevealed([])
    setOffensiveState(null)
    setOffensiveLoaded(false)
    setSyncStatus('local')
  }

  useEffect(() => {
    let active = true
    lastSyncedProgressFingerprint.current = null
    previousQuestionProgress.current = { answers: {}, revealed: [], favorites: [] }
    void loadStudyProgress(ownerId).then((progress) => {
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
        setReviewSchedules(seedReviewSchedules(progress.reviewSchedules ?? {}, progress.answers, progress.questionSnapshots, progress.progressUpdatedAt))
      }
      setProgressRestored(true)
    })
    void loadOffensiveState(ownerId).then((state) => {
      if (!active) return
      setOffensiveState(state)
      setOffensiveLoaded(true)
    })
    void loadTheme().then((savedTheme) => {
      if (!active) return
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
      setThemeLoaded(true)
    })
    return () => { active = false }
  }, [ownerId])

  useEffect(() => {
    if (!progressRestored) return
    void saveStudyProgress({
      answers, revealed, favorites, selectedExamId: null, selectedStudyMode: null,
      topic: '', year: '', bibliographySource: '', questionSearch: '', questionSnapshots, progressUpdatedAt,
      savedSimulation, completedSimulations, reviewSchedules,
    }, ownerId)
  }, [ownerId, progressRestored, answers, revealed, favorites, questionSnapshots, progressUpdatedAt, savedSimulation, completedSimulations, reviewSchedules])

  useEffect(() => {
    if (!progressRestored) return
    setReviewSchedules((current) => {
      const seeded = seedReviewSchedules(current, answers, questionSnapshots, progressUpdatedAt)
      return Object.keys(seeded).length === Object.keys(current).length ? current : seeded
    })
  }, [progressRestored, answers, questionSnapshots, progressUpdatedAt])

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

    const fingerprint = progressFingerprint(accountUser.id, { answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations, reviewSchedules })
    const isManualSync = manualSyncRevision > lastManualSyncRevision.current
    if (!isManualSync && fingerprint === lastSyncedProgressFingerprint.current) return
    let active = true
    const timer = window.setTimeout(() => {
      setSyncStatus('syncing')
      void syncStudyProgress({ answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations, reviewSchedules }, accountUser.id)
        .then((merged) => {
          if (!active) return
          lastManualSyncRevision.current = manualSyncRevision
          if (!merged) { setSyncStatus('offline'); return }
          const mergedFingerprint = progressFingerprint(accountUser.id, merged)
          lastSyncedProgressFingerprint.current = mergedFingerprint
          suppressProgressTimestamp.current = true
          setAnswers(merged.answers)
          setFavorites(merged.favorites)
          setRevealed(merged.revealed)
          setProgressUpdatedAt(merged.progressUpdatedAt)
          setQuestionSnapshots(merged.questionSnapshots)
          setCompletedSimulations(merged.completedSimulations)
          setReviewSchedules(merged.reviewSchedules ?? {})
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
  }, [progressRestored, accountUser, isOnline, answers, favorites, revealed, progressUpdatedAt, questionSnapshots, completedSimulations, reviewSchedules, manualSyncRevision])

  useEffect(() => {
    if (!progressRestored || !isOnline || !accountUser?.is_anonymous) return
    let active = true
    void loadValidatedAnswers(accountUser.id).then((attempts) => {
      if (!active || !attempts.length) return
      setQuestionSnapshots((current) => {
        const next = { ...current }
        for (const attempt of attempts) {
          if (!next[attempt.question_id]) continue
          next[attempt.question_id] = {
            ...next[attempt.question_id],
            correctOption: attempt.correct_option,
            explanation: attempt.explanation,
          }
        }
        return next
      })
      setAnswers((current) => ({ ...Object.fromEntries(attempts.map((attempt) => [attempt.question_id, attempt.selected_option])), ...current }))
    }).catch((error: unknown) => {
      if (active) console.warn('Não foi possível recuperar as respostas validadas.', error)
    })
    return () => { active = false }
  }, [progressRestored, isOnline, accountUser])

  useEffect(() => {
    if (!progressRestored || !accountUser || accountUser.is_anonymous) return
    if (!isOnline) return
    if (!offensiveState) return

    let active = true
    const timer = window.setTimeout(() => {
      void syncOffensiveState(offensiveState, accountUser.id)
        .then((synced) => {
          if (!active) return
          if (synced) {
            setOffensiveState((current) => {
              if (current
                && current.totalOffensives === synced.totalOffensives
                && current.currentStreak === synced.currentStreak
                && current.bestStreak === synced.bestStreak
                && current.lastOffensiveDate === synced.lastOffensiveDate
                && current.offensiveLoggedToday === synced.offensiveLoggedToday
                && current.joinedAt === synced.joinedAt) return current
              return synced
            })
          }
        })
        .catch((error: unknown) => {
          if (!active) return
          console.warn('Falha ao sincronizar ofensiva.', error)
        })
    }, 450)
    return () => { active = false; window.clearTimeout(timer) }
  }, [progressRestored, accountUser, isOnline, offensiveState, manualSyncRevision])

  useEffect(() => {
    if (!questions.length) return
    setQuestionSnapshots((current) => {
      const next = { ...current }
      for (const question of questions) {
        const existing = next[question.id]
        next[question.id] = {
          exam: question.exam,
          subject: question.subject,
          topic: question.topic,
          year: question.year,
          questionType: question.questionType,
          prompt: question.prompt.slice(0, 400),
          correctOption: question.answer ?? existing?.correctOption ?? null,
          explanation: question.explanation ?? existing?.explanation ?? null,
        }
      }
      return next
    })
  }, [questions])

  function loadTheme(): Promise<'light' | 'dark'> {
    return Promise.resolve(
      (window.localStorage.getItem('theme') as 'light' | 'dark' | null) ?? 'light',
    )
  }

  function saveTheme(next: 'light' | 'dark') {
    try {
      window.localStorage.setItem('theme', next)
    } catch {
      // ignorar falha de storage
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    saveTheme(theme)
  }, [theme])

  return {
    answers,
    revealed,
    favorites,
    progressUpdatedAt,
    questionSnapshots,
    savedSimulation,
    completedSimulations,
    recordCompletedSimulation,
    reviewSchedules,
    recordReviewAnswer,
    rateReview,
    simulationRevealed,
    setSimulationRevealed,
    syncStatus,
    offensiveState,
    offensiveLoaded,
    theme,
    themeLoaded,
    setTheme,
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
