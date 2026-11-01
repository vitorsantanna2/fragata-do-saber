import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AccountSyncPanel } from './components/AccountSyncPanel'
import { AccessGate } from './components/AccessGate'
import type { FormEvent } from 'react'
import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'
import { supabase } from './lib/supabase'
import {
  downloadMindMap,
  getMindMapUrl,
  loadMindMaps,
  type MindMap,
} from './lib/mindMaps'
import {
  getLocalDatabase,
  getLocalMetadata,
  hasCachedMindMaps,
  hasCachedQuestions,
  isNativeApp,
  registerOffensiveSimulation,
  saveOffensiveState,
  setLocalMetadata,
  type SavedSimulation,
  type StudyQuestionSnapshot,
  type CompletedSimulation,
  type OffensiveState,
} from './lib/localDatabase'
import { getDaysAboard } from './lib/offensiveDates'
import { Skeleton, SkeletonText } from './components/Skeleton'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ExamChoiceGrid, examChoices } from './components/ExamChoiceGrid'
import { StudyScreen } from './components/StudyScreen'
import { MindMapViewer } from './components/MindMapViewer'
import { shuffle, conciseTopic } from './lib/utils'
import { useQuestions, type Question } from './hooks/useQuestions'
import { useProgress } from './hooks/useProgress'
import { useAdminRoute } from './hooks/useAdminRoute'
import { resolveQuestionAnswer } from './lib/questionAnswers'
import { getSimulationResult } from './lib/simulationResults'
import { useReviewQueue } from './hooks/useReviewQueue'
import { ScheduledReviews } from './components/ScheduledReviews'

const AdminQuestionsPanel = lazy(() => import('./components/AdminQuestionsPanel').then((mod) => ({ default: mod.default })))
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard').then((mod) => ({ default: mod.PerformanceDashboard })))

const SIMULATION_SIZE = 50
const QUICK_SIMULATION_SIZE = 10
const OFFLINE_ACCESS_GRACE_MS = 30 * 24 * 60 * 60 * 1000

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const { adminMode, closeAdmin } = useAdminRoute()
  const [accessState, setAccessState] = useState<'checking' | 'locked' | 'granted'>('checking')
  const [splashElapsed, setSplashElapsed] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [accessError, setAccessError] = useState('')
  const [checkingCode, setCheckingCode] = useState(false)
  const [showAccountLogin, setShowAccountLogin] = useState(false)
  const [accountLoginEmail, setAccountLoginEmail] = useState('')
  const [accountLoginPassword, setAccountLoginPassword] = useState('')
  const [showAccountCreate, setShowAccountCreate] = useState(false)
  const [accountCreateEmail, setAccountCreateEmail] = useState('')
  const [accountCreatePassword, setAccountCreatePassword] = useState('')
  const [accountCreateConfirmPassword, setAccountCreateConfirmPassword] = useState('')
  const [creatingAccount, setCreatingAccount] = useState(false)
  const [showAccountSync, setShowAccountSync] = useState(false)
  const [isOnline, setIsOnline] = useState(() => typeof navigator === 'undefined' || navigator.onLine)
  const [showPerformance, setShowPerformance] = useState(false)
  const [showScheduledReviews, setShowScheduledReviews] = useState(false)
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null)
  const [selectedStudyMode, setSelectedStudyMode] = useState<'exam-questions' | 'bibliography-questions' | 'mind-maps' | null>(null)
  const [simulationIds, setSimulationIds] = useState<string[] | null>(null)
  const [showQuestionList, setShowQuestionList] = useState(false)
  const [reviewQuestionId, setReviewQuestionId] = useState<string | null>(null)
  const [reviewingFromDashboard, setReviewingFromDashboard] = useState(false)
  const [simulationAnswers, setSimulationAnswers] = useState<Record<string, number>>({})
  const [pendingAnswerIds, setPendingAnswerIds] = useState<string[]>([])
  const [answerErrors, setAnswerErrors] = useState<Record<string, string>>({})
  const reviewQuestionIdRef = useRef<string | null>(null)
  const lastCompletedSimulationRef = useRef<string | null>(null)
  const [mindMaps, setMindMaps] = useState<MindMap[]>([])
  const [mindMapsLoading, setMindMapsLoading] = useState(false)
  const [mindMapsError, setMindMapsError] = useState('')
  const [mindMapAction, setMindMapAction] = useState<string | null>(null)
  const [showDownloadedMindMapsOnly, setShowDownloadedMindMapsOnly] = useState(false)
  const [openMindMap, setOpenMindMap] = useState<{ map: MindMap; url: string } | null>(null)
  const [accountUser, setAccountUser] = useState<{ id: string; email: string | null; is_anonymous: boolean; created_at: string } | null>(null)
  const [logoutError, setLogoutError] = useState('')

  const {
    questions,
    loading,
    loadError,
    usingOfflineCache,
    topics,
    years,
    bibliographySources,
    filteredQuestions,
    setTopic,
    setYear,
    setBibliographySource,
    setQuestionSearch,
    setQuestionAnswerResult,
    topic,
    year,
    bibliographySource,
    questionSearch,
  } = useQuestions({
    selectedExamId,
    selectedStudyMode: selectedStudyMode === 'mind-maps' ? null : selectedStudyMode,
    examChoices,
  })

  const filteredQuestionsRef = useRef(filteredQuestions)

  useEffect(() => {
    filteredQuestionsRef.current = filteredQuestions
  }, [filteredQuestions])

  const {
    answers,
    revealed,
    favorites,
    progressUpdatedAt,
    questionSnapshots,
    setQuestionSnapshots,
    savedSimulation,
    setSavedSimulation,
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
    setTheme,
    setOffensiveState,
    setAnswers,
    setRevealed,
    setFavorites,
    setManualSyncRevision,
    skipSelectionReset,
  } = useProgress({
    questions,
    accountUser,
    isOnline,
  })
  const { today: reviewToday, dueReviews } = useReviewQueue(reviewSchedules, questionSnapshots)

  useEffect(() => {
    if (!supabase) return
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user
      setAccountUser(user ? { id: user.id, email: user.email ?? null, is_anonymous: Boolean(user.is_anonymous), created_at: user.created_at } : null)
    })
    void supabase.auth.getSession().then(({ data }) => {
      const user = data.session?.user
      setAccountUser(user ? { id: user.id, email: user.email ?? null, is_anonymous: Boolean(user.is_anonymous), created_at: user.created_at } : null)
    })
    return () => subscription.unsubscribe()
  }, [])

  async function handleLogout() {
    if (!supabase) return
    setLogoutError('')
    const { error } = await supabase.auth.signOut()
    if (error) setLogoutError(`Não foi possível sair: ${error.message}`)
  }

  useEffect(() => {
    const online = () => setIsOnline(true)
    const offline = () => setIsOnline(false)
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    return () => { window.removeEventListener('online', online); window.removeEventListener('offline', offline) }
  }, [])

  async function canContinueOffline() {
    if (!isNativeApp()) return false
    try {
      const lastValidatedAt = await getLocalMetadata('access_last_validated_at')
      if (!lastValidatedAt || (!(await hasCachedQuestions()) && !(await hasCachedMindMaps()))) return false
      const elapsed = Date.now() - Date.parse(lastValidatedAt)
      return elapsed >= 0 && elapsed <= OFFLINE_ACCESS_GRACE_MS
    } catch {
      return false
    }
  }

  async function checkAccess() {
    try {
      await getLocalDatabase()
    } catch (error) {
      console.warn('Não foi possível iniciar o banco local.', error)
    }

    if (!navigator.onLine) {
      if (await canContinueOffline()) {
        setAccessState('granted')
      } else {
        setAccessError('Conecte-se à internet para validar o acesso e baixar as questões antes de estudar offline.')
        setAccessState('locked')
      }
      return
    }

    if (!supabase) {
      if (await canContinueOffline()) {
        setAccessState('granted')
        return
      }
      setAccessError('Configure as variáveis do Supabase no arquivo .env.local.')
      setAccessState('locked')
      return
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    if (sessionError) {
      if (await canContinueOffline()) {
        setAccessState('granted')
        return
      }
      setAccessError('Não foi possível verificar sua sessão. Tente recarregar a página.')
      setAccessState('locked')
      return
    }

    if (!sessionData.session) {
      if (await canContinueOffline()) {
        setAccessState('granted')
        return
      }
      setAccessState('locked')
      return
    }

    const { data, error } = await supabase.rpc('has_active_access')
    if (error) {
      if (await canContinueOffline()) {
        setAccessState('granted')
        return
      }
      setAccessError('Não foi possível validar o acesso. Confira se o script de acesso foi executado no Supabase e se o login anônimo está habilitado.')
      setAccessState('locked')
      return
    }

    if (data) {
      void setLocalMetadata('access_last_validated_at', new Date().toISOString())
      setAccessState('granted')
    } else {
      setAccessState('locked')
    }
  }

  useEffect(() => {
    void checkAccess()
  }, [])

  async function handleAccessSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAccessError('')
    if (!supabase) {
      setAccessError('Configure as variáveis do Supabase no arquivo .env.local.')
      return
    }
    setCheckingCode(true)
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      if (sessionError) throw sessionError
      if (!sessionData.session) {
        const { error } = await supabase.auth.signInAnonymously()
        if (error) throw error
      }
      const { data, error } = await supabase.rpc('redeem_access_code', { p_code: accessCode.trim() })
      if (error) throw error
      if (!data) {
        setAccessError('Código inválido ou expirado. Confira o código recebido e tente novamente.')
        return
      }
      void setLocalMetadata('access_last_validated_at', new Date().toISOString())
      setAccessCode('')
      setAccessState('granted')
    } catch {
      setAccessError('Não foi possível validar o código. Confira se o login anônimo está habilitado e tente novamente.')
    } finally {
      setCheckingCode(false)
    }
  }

  async function handleAccountLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setCheckingCode(true)
    setAccessError('')
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email: accountLoginEmail.trim(), password: accountLoginPassword })
      if (signInError) throw signInError
      const { data, error } = await supabase.rpc('has_active_access')
      if (error) throw error
      if (data) {
        void setLocalMetadata('access_last_validated_at', new Date().toISOString())
        setAccessState('granted')
        setAccessError('')
      } else {
        setAccessError('Conta conectada. Para liberar os estudos, informe um código de acesso válido acima.')
      }
      setAccountLoginPassword('')
    } catch (error) {
      setAccessError(`Não foi possível entrar: ${error instanceof Error ? error.message : 'Confira o e-mail e a senha.'}`)
    } finally {
      setCheckingCode(false)
    }
  }

  async function handleAccountCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setAccessError('')
    if (accountCreatePassword !== accountCreateConfirmPassword) {
      setAccessError('A senha e a confirmação não coincidem.')
      return
    }
    if (accountCreatePassword.length < 8) {
      setAccessError('A senha deve ter pelo menos 8 caracteres.')
      return
    }
    setCreatingAccount(true)
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: accountCreateEmail.trim(),
        password: accountCreatePassword,
      })
      if (signUpError) throw signUpError
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: accountCreateEmail.trim(),
        password: accountCreatePassword,
      })
      if (signInError) throw signInError
      const { data, error } = await supabase.rpc('redeem_access_code', { p_code: accessCode.trim() })
      if (error) throw error
      if (!data) {
        setAccessError('Conta criada, mas o código de acesso é inválido ou expirado. Informe um código válido.')
        return
      }
      void setLocalMetadata('access_last_validated_at', new Date().toISOString())
      setAccessState('granted')
      setAccessError('')
      setAccountCreateEmail('')
      setAccountCreatePassword('')
      setAccountCreateConfirmPassword('')
    } catch (error) {
      setAccessError(`Não foi possível criar a conta: ${error instanceof Error ? error.message : 'Confira os dados e tente novamente.'}`)
    } finally {
      setCreatingAccount(false)
    }
  }

  const returnToHome = useCallback(() => {
    setShowScheduledReviews(false)
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(null)
    setSelectedStudyMode(null)
    setSimulationIds(null)
    setShowQuestionList(false)
    setReviewingFromDashboard(false)
    setShowPerformance(false)
  }, [setTopic, setYear, setSelectedExamId, setSelectedStudyMode, setSimulationIds, setShowQuestionList, setReviewingFromDashboard, setShowPerformance])

  useEffect(() => {
    if (!reviewQuestionId) return
    setTopic('Todos')
    setYear('Todos')
    setQuestionSearch('')
    setBibliographySource('Todos')
    const element = document.getElementById(`question-${reviewQuestionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [reviewQuestionId, filteredQuestions, setTopic, setYear, setQuestionSearch, setBibliographySource])



  useEffect(() => {
    if (topic !== 'Todos' || year !== 'Todos' || questionSearch !== '' || bibliographySource !== 'Todos') {
      setShowQuestionList(true)
    }
  }, [topic, year, questionSearch, bibliographySource, setShowQuestionList])

  useEffect(() => {
    if (Capacitor.getPlatform() !== 'android') return
    const listener = CapacitorApp.addListener('backButton', () => {
      if (adminMode) {
        closeAdmin()
      } else if (showAccountSync) {
        setShowAccountSync(false)
      } else if (showScheduledReviews) {
        setShowScheduledReviews(false)
      } else if (showPerformance) {
        setShowPerformance(false)
      } else if (openMindMap) {
        setOpenMindMap(null)
      } else if (simulationIds !== null) {
        setSimulationIds(null)
      } else if (selectedExamId === 'cp-t-informatica' && selectedStudyMode !== null) {
        setSelectedStudyMode(null)
      } else if (selectedExamId !== null) {
        returnToHome()
      } else {
        void CapacitorApp.exitApp()
      }
    })
    return () => { void listener.then((handle) => handle.remove()) }
  }, [adminMode, closeAdmin, showAccountSync, showScheduledReviews, showPerformance, openMindMap, simulationIds, selectedExamId, selectedStudyMode, returnToHome])

  useEffect(() => {
    const timeout = window.setTimeout(() => setSplashElapsed(true), 900)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (selectedStudyMode !== 'mind-maps' || selectedExamId !== 'cp-t-informatica') return
    let active = true
    setMindMapsLoading(true)
    setMindMapsError('')
    void loadMindMaps()
      .then((maps) => { if (active) setMindMaps(maps) })
      .catch((error: unknown) => {
        if (active) setMindMapsError(`Não foi possível carregar o catálogo de mapas. Confira a configuração do Supabase. ${error instanceof Error ? error.message : ''}`)
      })
      .finally(() => { if (active) setMindMapsLoading(false) })
    return () => { active = false }
  }, [selectedExamId, selectedStudyMode])

  async function handleMindMapAction(map: MindMap) {
    setMindMapAction(map.id)
    setMindMapsError('')
    try {
      let currentMap = map
      if (!map.local_path && isNativeApp()) {
        const localPath = await downloadMindMap(map)
        currentMap = { ...map, local_path: localPath }
        setMindMaps((items) => items.map((item) => item.id === map.id ? currentMap : item))
      }
      const url = await getMindMapUrl(currentMap)
      setOpenMindMap({ map: currentMap, url })
    } catch (error) {
      setMindMapsError(`Não foi possível abrir “${map.title}”. ${error instanceof Error ? error.message : 'Verifique sua conexão e tente novamente.'}`)
    } finally {
      setMindMapAction(null)
    }
  }

  async function handleMindMapDownload(map: MindMap) {
    setMindMapAction(map.id)
    setMindMapsError('')
    try {
      const localPath = await downloadMindMap(map)
      setMindMaps((items) => items.map((item) => item.id === map.id ? { ...item, local_path: localPath } : item))
    } catch (error) {
      setMindMapsError(`Não foi possível baixar “${map.title}”. ${error instanceof Error ? error.message : 'Verifique sua conexão e tente novamente.'}`)
    } finally {
      setMindMapAction(null)
    }
  }

  const downloadedMindMapsCount = mindMaps.filter((map) => map.local_path).length
  const visibleMindMaps = showDownloadedMindMapsOnly
    ? mindMaps.filter((map) => map.local_path)
    : mindMaps

  const questionsWithResults = useMemo(
    () => filteredQuestions.map((question) => {
      const savedResult = questionSnapshots[question.id]
      return savedResult?.correctOption !== null && savedResult?.correctOption !== undefined
        ? { ...question, answer: savedResult.correctOption, explanation: savedResult.explanation }
        : question
    }),
    [filteredQuestions, questionSnapshots],
  )

  const {
    total: simulationTotal,
    answeredCount: simulationAnsweredCount,
    correctCount: simulationCorrectCount,
    complete: simulationComplete,
    score: simulationScore,
  } = getSimulationResult(questionsWithResults, simulationIds, simulationIds !== null ? simulationAnswers : answers)

  const correctCount = questions.filter(
    (question) => question.answer !== null && answers[question.id] === question.answer,
  ).length
  const performanceCorrectCount = simulationIds !== null ? simulationCorrectCount : correctCount
  const performanceAnsweredCount = simulationIds !== null
    ? simulationAnsweredCount
    : questions.filter((question) => question.answer !== null && answers[question.id] !== undefined).length

  const lastStudiedQuestion = useMemo(() => {
    const latest = Object.entries(progressUpdatedAt)
      .filter(([questionId]) => questionSnapshots[questionId])
      .sort((left, right) => Date.parse(right[1]) - Date.parse(left[1]))[0]
    if (!latest) return null
    const [questionId] = latest
    const snapshot = questionSnapshots[questionId]
    const examChoice = examChoices.find((choice) => choice.exam === snapshot.exam)
    return examChoice ? { questionId, snapshot, examChoice } : null
  }, [progressUpdatedAt, questionSnapshots])

  const daysSinceJoin = useMemo(() => {
    return getDaysAboard(accountUser?.created_at ?? offensiveState?.joinedAt ?? null)
  }, [accountUser?.created_at, offensiveState?.joinedAt])

  const resumeSavedSimulation = Boolean(savedSimulation && (
    !lastStudiedQuestion || Date.parse(savedSimulation.updatedAt) >= Date.parse(progressUpdatedAt[lastStudiedQuestion.questionId] ?? '')
  ))

  function selectExam(examId: string) {
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(examId)
    setSelectedStudyMode(examId === 'cp-t-informatica' ? null : 'exam-questions')
    setSimulationIds(null)
    setShowQuestionList(false)
    setReviewingFromDashboard(false)
  }

  function continueStudying() {
    if (resumeSavedSimulation && savedSimulation && savedSimulation.ids.length > 0) {
      const examChoice = examChoices.find((choice) => choice.id === savedSimulation.examId)
      if (examChoice) {
        skipSelectionReset.current = true
        setTopic('Todos')
        setYear('Todos')
        setBibliographySource('Todos')
        setQuestionSearch('')
        setSelectedExamId(examChoice.id)
        setSelectedStudyMode(savedSimulation.studyMode)
        setSimulationIds(savedSimulation.ids)
        setSimulationAnswers(savedSimulation.answers)
        setSimulationRevealed(savedSimulation.revealed)
        setSimulationIds(savedSimulation.ids)
        reviewQuestionIdRef.current = savedSimulation.lastQuestionId ?? savedSimulation.ids[0] ?? null
        return
      }
    }
    if (!lastStudiedQuestion) return
    const { questionId, snapshot, examChoice } = lastStudiedQuestion
    setTopic('Todos')
    setYear('Todos')
    setBibliographySource('Todos')
    setQuestionSearch('')
    setSelectedExamId(examChoice.id)
    setSelectedStudyMode(examChoice.id === 'cp-t-informatica' && snapshot.questionType === 'bibliography'
      ? 'bibliography-questions'
      : 'exam-questions')
    setSimulationIds(null)
    setShowQuestionList(true)
    reviewQuestionIdRef.current = questionId
    setReviewQuestionId(questionId)
  }

  function reviewQuestion(questionId: string, snapshot: StudyQuestionSnapshot) {
    const examChoice = examChoices.find((choice) => choice.exam === snapshot.exam)
    if (!examChoice) return
    const nextMode = examChoice.id === 'cp-t-informatica'
      ? snapshot.questionType === 'bibliography' ? 'bibliography-questions' : 'exam-questions'
      : 'exam-questions'
    const sameSection = selectedExamId === examChoice.id && selectedStudyMode === nextMode
    if (!sameSection) {
      setSelectedExamId(examChoice.id)
      setSelectedStudyMode(nextMode)
    }
    setSimulationIds(null)
    setShowQuestionList(true)
    setReviewQuestionId(questionId)
    setReviewingFromDashboard(true)
    setShowPerformance(false)
  }

  function startSimulation() {
    lastCompletedSimulationRef.current = null
    const picked = shuffle(filteredQuestionsRef.current).slice(0, SIMULATION_SIZE)
    const ids = picked.map((question) => question.id)
    const simulation: SavedSimulation = {
      id: crypto.randomUUID(),
      ids,
      answers: {},
      revealed: [],
      examId: selectedExamId ?? '',
      studyMode: selectedStudyMode === 'bibliography-questions' ? 'bibliography-questions' : 'exam-questions',
      lastQuestionId: ids[0] ?? null,
      updatedAt: new Date().toISOString(),
    }
    setSimulationAnswers(simulation.answers)
    setSimulationRevealed(simulation.revealed)
    setSimulationIds(ids)
    setShowQuestionList(true)
    setSavedSimulation(simulation)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function startQuickSimulation() {
    lastCompletedSimulationRef.current = null
    const picked = shuffle(filteredQuestionsRef.current).slice(0, QUICK_SIMULATION_SIZE)
    const ids = picked.map((question) => question.id)
    const simulation: SavedSimulation = {
      id: crypto.randomUUID(),
      ids,
      answers: {},
      revealed: [],
      examId: selectedExamId ?? '',
      studyMode: selectedStudyMode === 'bibliography-questions' ? 'bibliography-questions' : 'exam-questions',
      lastQuestionId: ids[0] ?? null,
      updatedAt: new Date().toISOString(),
    }
    setSimulationAnswers(simulation.answers)
    setSimulationRevealed(simulation.revealed)
    setSimulationIds(ids)
    setShowQuestionList(true)
    setSavedSimulation(simulation)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function submitQuestionAnswer(questionId: string, optionIndex: number, simulationId?: string, reviewQuestion?: Question): Promise<Awaited<ReturnType<typeof resolveQuestionAnswer>> | null> {
    if (pendingAnswerIds.includes(questionId)) return null

    setPendingAnswerIds((current) => current.includes(questionId) ? current : [...current, questionId])
    setAnswerErrors((current) => {
      const next = { ...current }
      delete next[questionId]
      return next
    })

    try {
      const question = reviewQuestion ?? questions.find((item) => item.id === questionId)
      if (!question) throw new Error('Questão não encontrada.')
      const savedResult = questionSnapshots[questionId]
      const { selectedOption, correctOption, explanation } = await resolveQuestionAnswer({
        ...question,
        answer: question.answer ?? savedResult?.correctOption ?? null,
        explanation: question.explanation ?? savedResult?.explanation ?? null,
      }, optionIndex, isOnline, simulationId)

      setQuestionAnswerResult(questionId, { correctOption, explanation })
      setAnswers((current) => ({ ...current, [questionId]: selectedOption }))
      recordReviewAnswer(questionId, selectedOption === correctOption, `${simulationId ?? crypto.randomUUID()}:${questionId}`)
      if (question) {
        setQuestionSnapshots((current) => ({
          ...current,
          [questionId]: {
            ...(current[questionId] ?? {
              exam: question.exam,
              subject: question.subject,
              topic: question.topic,
              year: question.year,
              questionType: question.questionType,
              prompt: question.prompt.slice(0, 400),
              correctOption: null,
              explanation: null,
            }),
            correctOption,
            explanation,
          },
        }))
      }
      return { selectedOption, correctOption, explanation }
    } catch (error) {
      setAnswerErrors((current) => ({
        ...current,
        [questionId]: error instanceof Error ? error.message : 'Não foi possível validar a resposta. Tente novamente.',
      }))
      return null
    } finally {
      setPendingAnswerIds((current) => current.filter((id) => id !== questionId))
    }
  }

  async function recordQuestionAnswer(questionId: string, optionIndex: number) {
    await submitQuestionAnswer(questionId, optionIndex)
  }

  const recordCompletedOffensive = useCallback(async () => {
    const accountCreatedAt = accountUser?.created_at ?? null

    if (supabase && accountUser && !accountUser.is_anonymous && isOnline) {
      try {
        const { data, error } = await supabase.rpc('record_simulation_offensive')
        if (error) throw error

        const row = Array.isArray(data) ? data[0] : data
        if (row) {
          const syncedState: OffensiveState = {
            totalOffensives: row.total_offensives,
            currentStreak: row.current_streak,
            bestStreak: row.best_streak,
            lastOffensiveDate: row.last_offensive_date,
            offensiveLoggedToday: row.offensive_logged_today,
            joinedAt: accountCreatedAt ?? row.joined_at,
          }
          await saveOffensiveState(syncedState)
          setOffensiveState(syncedState)
          return
        }
      } catch (error) {
        console.warn('Não foi possível registrar a ofensiva no servidor; usando o estado local.', error)
      }
    }

    const localState = await registerOffensiveSimulation(accountCreatedAt)
    setOffensiveState(localState)
  }, [accountUser, isOnline, setOffensiveState])

  useEffect(() => {
    if (!simulationComplete || !savedSimulation || simulationIds === null) return

    const simulationId = `completed-${savedSimulation.id ?? `${savedSimulation.examId}-${savedSimulation.updatedAt}`}`
    if (lastCompletedSimulationRef.current === simulationId || completedSimulations.some((simulation) => simulation.id === simulationId)) return

    const examChoice = examChoices.find((choice) => choice.id === savedSimulation.examId)
    const completed: CompletedSimulation = {
      id: simulationId,
      examId: savedSimulation.examId,
      examTitle: examChoice?.title ?? null,
      studyMode: savedSimulation.studyMode,
      totalQuestions: simulationTotal,
      correctAnswers: simulationCorrectCount,
      wrongAnswers: simulationAnsweredCount - simulationCorrectCount,
      score: simulationScore,
      completedAt: new Date().toISOString(),
      isSimulation: true,
    }
    lastCompletedSimulationRef.current = simulationId
    recordCompletedSimulation(completed)
    void recordCompletedOffensive()
    setAnswers((current) => ({ ...current, ...simulationAnswers }))
  }, [simulationComplete, savedSimulation, simulationIds, simulationTotal, simulationCorrectCount, simulationAnsweredCount, simulationScore, completedSimulations, recordCompletedSimulation, recordCompletedOffensive, simulationAnswers, setAnswers])

  async function recordSimulationAnswer(questionId: string, optionIndex: number) {
    if (!savedSimulation) return
    const simulationId = savedSimulation.id ?? `${savedSimulation.examId}-${savedSimulation.updatedAt}`
    const result = await submitQuestionAnswer(questionId, optionIndex, simulationId)
    if (result === null) return
    const nextAnswers = { ...simulationAnswers, [questionId]: result.selectedOption }
    const updatedAt = new Date().toISOString()
    setSimulationAnswers(nextAnswers)
    setSavedSimulation((current) => current ? { ...current, answers: nextAnswers, lastQuestionId: questionId, updatedAt } : current)
  }

  function recordSimulationReveal(questionId: string) {
    const nextRevealed = simulationRevealed.includes(questionId)
      ? simulationRevealed.filter((id) => id !== questionId)
      : [...simulationRevealed, questionId]
    const updatedAt = new Date().toISOString()
    setSimulationRevealed(nextRevealed)
    setSavedSimulation((current) => current ? { ...current, revealed: nextRevealed, lastQuestionId: questionId, updatedAt } : current)
  }

  if (adminMode) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-paper text-ink">
          <Suspense fallback={<div className="mx-auto mt-20 p-8 text-center text-muted">Carregando painel administrativo…</div>}>
            <AdminQuestionsPanel onClose={closeAdmin} />
          </Suspense>
        </div>
      </ErrorBoundary>
    )
  }

  if (accessState === 'checking' || !splashElapsed) {
    return (
      <main className="fixed inset-0 z-50 overflow-hidden bg-[#011a32]">
        <img alt="" aria-hidden="true" className="h-full w-full object-contain" src={publicAsset('splash-screen.jpg')} />
        <span className="sr-only">Carregando o Fragata do Saber...</span>
      </main>
    )
  }

  if (accessState === 'locked') {
    return (
      <AccessGate
        accessCode={accessCode}
        setAccessCode={setAccessCode}
        accessError={accessError}
        checkingCode={checkingCode}
        supabaseConfigured={Boolean(supabase)}
        onAccessSubmit={handleAccessSubmit}
        showAccountCreate={showAccountCreate}
        setShowAccountCreate={setShowAccountCreate}
        showAccountLogin={showAccountLogin}
        setShowAccountLogin={setShowAccountLogin}
        accountCreateEmail={accountCreateEmail}
        setAccountCreateEmail={setAccountCreateEmail}
        accountCreatePassword={accountCreatePassword}
        setAccountCreatePassword={setAccountCreatePassword}
        accountCreateConfirmPassword={accountCreateConfirmPassword}
        setAccountCreateConfirmPassword={setAccountCreateConfirmPassword}
        creatingAccount={creatingAccount}
        onAccountCreate={handleAccountCreate}
        accountLoginEmail={accountLoginEmail}
        setAccountLoginEmail={setAccountLoginEmail}
        accountLoginPassword={accountLoginPassword}
        setAccountLoginPassword={setAccountLoginPassword}
        onAccountLogin={handleAccountLogin}
        publicAsset={publicAsset}
      />
    )
  }
  return (
    <ErrorBoundary>
      <div className="min-h-screen text-ink">
        <header className="border-b border-line bg-paper/95">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
            <a className="flex items-center gap-3" href="#inicio" aria-label="Fragata do Saber, início" onClick={returnToHome}>
              <img className="h-12 w-[72px] rounded-md object-contain" src={publicAsset('logo.png')} alt="" />
              <span>
                <span className="block font-display text-base font-extrabold tracking-normal">Fragata do Saber</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Rumo à aprovação</span>
              </span>
            </a>
            {offensiveLoaded && offensiveState && (
              <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-lg border border-line bg-white">
                <div className="flex items-center gap-1.5">
                  <img className="size-4" src={publicAsset('logo_embarque.png')} alt="Navio" />
                  <span className="text-xs font-bold text-sea">{daysSinceJoin}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img className="size-4" src={publicAsset('logo_mar.png')} alt="Mar" />
                  <span className="text-xs font-bold text-ink">{offensiveState.totalOffensives}</span>
                </div>
              </div>
            )}
            <button className="rounded-lg border border-line bg-white px-2 py-2 text-xs font-bold transition hover:border-sea hover:text-sea sm:px-3 sm:text-sm" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="rounded-lg border border-sea bg-sea-light px-3 py-2 text-xs font-bold text-sea hover:bg-sea hover:text-white sm:text-sm" type="button" onClick={() => { setShowPerformance(false); setShowScheduledReviews(true) }}>Revisões ({dueReviews.length})</button>
            <div className="flex w-full gap-2 sm:w-auto"><button className="flex-1 whitespace-nowrap rounded-lg border border-sea bg-white px-2 py-2 text-xs font-bold text-sea transition hover:bg-sea hover:text-white sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={() => { setShowScheduledReviews(false); setShowPerformance(true) }}>Meu desempenho</button><button className="flex-1 whitespace-nowrap rounded-lg border border-line bg-white px-2 py-2 text-xs font-bold transition hover:border-sea hover:text-sea sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={() => setShowAccountSync(true)}>{accountUser && !accountUser.is_anonymous ? 'Conta' : 'Sincronizar'}</button>{accountUser && !accountUser.is_anonymous ? <button className="flex-1 whitespace-nowrap rounded-lg border border-line bg-white px-2 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50 hover:text-red-700 sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={handleLogout}>Sair</button> : null}</div>
          </div>
        </header>
        {logoutError && <div className="mx-auto max-w-7xl px-5 py-3"><p className="rounded-lg bg-red-50 p-3 text-sm leading-5 text-red-800" role="alert">{logoutError}</p></div>}

        <main id="inicio" className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
          {!selectedExamId && !showScheduledReviews && (
            <section className="relative overflow-hidden rounded-2xl bg-ink px-5 py-5 text-white shadow-lg shadow-ink/10 sm:px-8 sm:py-6" id="simulados">
              <div className="relative grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
                <div className="max-w-2xl">
                  <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-200">
                    <span className="size-2 rounded-full bg-coral" /> Preparação para concursos navais
                  </p>
                  <h1 className="max-w-xl font-display text-2xl font-extrabold leading-tight sm:text-3xl">Conhecimento é o seu melhor rumo.</h1>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">Treine com questões de provas anteriores, acompanhe sua evolução e chegue mais preparado para o próximo desafio.</p>
                  <a className="mt-4 inline-flex items-center gap-3 rounded-lg bg-[#d7815e] px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#c76e4c]" href="#questoes">
                    Escolher concurso <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="grid gap-3 border-t border-white/15 pt-4 sm:grid-cols-[minmax(0,140px)_minmax(0,1fr)] sm:items-center lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div className="grid gap-4 grid-cols-2">
                    <div>
                      <p className="font-display text-2xl font-extrabold sm:text-3xl">{String(examChoices.length).padStart(2, '0')}</p>
                      <p className="mt-1 text-xs text-white/60">cursos e concursos</p>
                    </div>
                    <div className="self-center">
                      <p className="font-display text-base font-extrabold leading-5 sm:text-lg">Provas anteriores</p>
                      <p className="mt-1 text-xs leading-5 text-white/60">Questões organizadas por concurso</p>
                    </div>
                  </div>
                  <img className="mx-auto w-full max-w-[140px] rounded-lg border border-white/10 shadow-md shadow-black/20" src={publicAsset('logo.png')} alt="Logo Fragata do Saber" />
                </div>
              </div>
            </section>
          )}
          {showScheduledReviews ? (
            <ScheduledReviews
              today={reviewToday} dueReviews={dueReviews} schedules={reviewSchedules} isOnline={isOnline}
              favorites={favorites} setFavorites={setFavorites} answerErrors={answerErrors}
              onAnswer={(question, option, attemptId) => submitQuestionAnswer(question.id, option, attemptId, question)}
              onRate={rateReview} onClose={() => setShowScheduledReviews(false)}
            />
          ) : showPerformance ? (
            <Suspense fallback={<div className="mt-8 p-8 text-center"><Skeleton className="w-32 mx-auto mb-2" /><SkeletonText className="w-48 mx-auto" /></div>}>
              <PerformanceDashboard
                snapshots={questionSnapshots}
                answers={answers}
                completedSimulations={completedSimulations}
                onClose={() => setShowPerformance(false)}
                onReview={reviewQuestion}
                offensiveState={offensiveState ? { ...offensiveState, joinedAt: accountUser?.created_at ?? offensiveState.joinedAt } : null}
                offensiveLoaded={offensiveLoaded}
              />
            </Suspense>
          ) : !selectedExamId ? (
            <section className="mt-7" id="questoes">
              {((resumeSavedSimulation && savedSimulation?.ids.length) || lastStudiedQuestion) && (
                <button
                  className="mb-7 flex w-full items-center gap-4 rounded-2xl border border-sea/20 bg-sea-light/60 p-4 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5 sm:p-5"
                  type="button"
                  onClick={continueStudying}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-sea text-xl text-white" aria-hidden="true">▶</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-sea">Continue estudando</span>
                    <span className="mt-1 block truncate font-display text-lg font-extrabold text-ink">{resumeSavedSimulation && savedSimulation ? examChoices.find((choice) => choice.id === savedSimulation.examId)?.title ?? 'Seu simulado' : lastStudiedQuestion?.examChoice.title}</span>
                    <span className="mt-1 block truncate text-sm text-muted">{resumeSavedSimulation && savedSimulation ? `${savedSimulation.ids.length} questões no último simulado · retome de onde parou` : `${lastStudiedQuestion?.snapshot.subject} · ${lastStudiedQuestion?.snapshot.topic ? conciseTopic(lastStudiedQuestion.snapshot.topic) : 'Última questão estudada'}`}</span>
                  </span>
                  <span className="hidden shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-bold text-sea sm:block">Retomar →</span>
                </button>
              )}
              <div className="mb-2">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Comece por aqui</p>
                <h2 className="mt-1 font-display text-3xl font-extrabold">Escolha seu concurso</h2>
              </div>
              <ExamChoiceGrid onSelect={selectExam} publicAsset={publicAsset} />
            </section>
          ) : selectedExamId === 'cp-t-informatica' && selectedStudyMode === null ? (
            <section className="mt-10" id="questoes">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Quadro Técnico - Informática</p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold">Como você quer estudar?</h2>
                </div>
                <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={returnToHome}>
                  Trocar concurso
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <button className="group rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5" type="button" onClick={() => setSelectedStudyMode('mind-maps')}>
                  <span className="grid size-12 place-items-center rounded-xl bg-[#fff2e8] text-2xl text-sea" aria-hidden="true">✦</span>
                  <span className="mt-5 block font-display text-xl font-extrabold text-ink">Mapas mentais</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">Revise os conteúdos do Quadro Técnico com mapas mentais.</span>
                  <span className="mt-5 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar mapas <span aria-hidden="true">→</span></span>
                </button>
                <button className="group rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5" type="button" onClick={() => setSelectedStudyMode('exam-questions')}>
                  <span className="grid size-12 place-items-center rounded-xl bg-sea-light text-2xl text-sea" aria-hidden="true">✓</span>
                  <span className="mt-5 block font-display text-xl font-extrabold text-ink">Questões de provas</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">Pratique com questões de provas anteriores e simulados.</span>
                  <span className="mt-5 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar questões de provas <span aria-hidden="true">→</span></span>
                </button>
                <button className="group rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5" type="button" onClick={() => setSelectedStudyMode('bibliography-questions')}>
                  <span className="grid size-12 place-items-center rounded-xl bg-[#eef3f5] text-2xl text-sea" aria-hidden="true">▤</span>
                  <span className="mt-5 block font-display text-xl font-extrabold text-ink">Questões de apostilas e livros</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">Estude com questões elaboradas a partir das apostilas e livros do edital.</span>
                  <span className="mt-5 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar questões de bibliografia <span aria-hidden="true">→</span></span>
                </button>
              </div>
            </section>
          ) : selectedExamId === 'cp-t-informatica' && selectedStudyMode === 'mind-maps' ? (
            <section className="mt-10" id="mapas-mentais">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Quadro Técnico - Informática</p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold">Mapas mentais</h2>
                </div>
                <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={() => setSelectedStudyMode(null)}>
                  Voltar às opções
                </button>
              </div>
              {mindMaps.length > 0 && (
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-white p-4 sm:p-5">
                  <div className="min-w-52 flex-1">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-bold text-ink">Disponibilidade offline</span>
                      <span className="font-extrabold text-sea">{downloadedMindMapsCount}/{mindMaps.length}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper" role="progressbar" aria-label="Mapas disponíveis offline" aria-valuemin={0} aria-valuemax={mindMaps.length} aria-valuenow={downloadedMindMapsCount}>
                      <div className="h-full rounded-full bg-sea transition-all" style={{ width: `${mindMaps.length ? downloadedMindMapsCount / mindMaps.length * 100 : 0}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted">{downloadedMindMapsCount === 0 ? 'Nenhum mapa baixado neste aparelho.' : `${downloadedMindMapsCount} ${downloadedMindMapsCount === 1 ? 'mapa pronto' : 'mapas prontos'} para estudar sem internet.`}</p>
                  </div>
                  <button
                    className={`rounded-lg border px-4 py-2.5 text-sm font-bold transition ${showDownloadedMindMapsOnly ? 'border-sea bg-sea-light text-sea' : 'border-line bg-white text-ink hover:border-sea hover:text-sea'}`}
                    type="button"
                    aria-pressed={showDownloadedMindMapsOnly}
                    onClick={() => setShowDownloadedMindMapsOnly((show) => !show)}
                  >
                    {showDownloadedMindMapsOnly ? 'Mostrar todos os mapas' : `Ver mapas baixados (${downloadedMindMapsCount})`}
                  </button>
                </div>
              )}
              {mindMapsError && <p className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800" role="alert">{mindMapsError}</p>}
              {mindMapsLoading ? (
                <p className="rounded-xl border border-line bg-white p-8 text-center text-sm text-muted">Carregando mapas mentais…</p>
              ) : mindMaps.length === 0 ? (
                <div className="rounded-xl border border-dashed border-line bg-white p-8 text-center sm:p-12">
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#fff2e8] text-2xl" aria-hidden="true">✦</span>
                  <h3 className="mt-4 font-display text-xl font-extrabold">Nenhum mapa publicado ainda</h3>
                  <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted">Os mapas publicados para o Quadro Técnico aparecerão aqui. Quando estiver online, baixe cada mapa para consultá-lo sem internet.</p>
                </div>
              ) : visibleMindMaps.length === 0 ? (
                <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">Nenhum mapa foi baixado neste aparelho ainda. Volte a mostrar todos e baixe mapas quando estiver online.</p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleMindMaps.map((map) => (
                    <article key={map.id} className="rounded-xl border border-line bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-sea">{map.subject}</p>
                      <h3 className="mt-2 font-display font-extrabold">{map.title}</h3>
                      {map.description && <p className="mt-2 text-sm leading-6 text-muted">{map.description}</p>}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-muted">{map.content_type === 'application/pdf' ? 'PDF' : 'Imagem'}</span>
                        {map.local_path ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-sea-light px-2.5 py-1 text-xs font-bold text-sea"><span aria-hidden="true">✓</span> Disponível offline</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-paper px-2.5 py-1 text-xs font-bold text-muted"><span aria-hidden="true">⇩</span> Ainda não baixado</span>
                        )}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button className="rounded-lg bg-sea px-4 py-2 text-sm font-bold text-white transition hover:bg-ink disabled:opacity-60" type="button" disabled={mindMapAction === map.id} onClick={() => void handleMindMapAction(map)}>
                          {mindMapAction === map.id ? 'Preparando…' : 'Abrir mapa'}
                        </button>
                        {isNativeApp() && !map.local_path && (
                          <button className="rounded-lg border border-line px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea disabled:opacity-60" type="button" disabled={mindMapAction === map.id} onClick={() => void handleMindMapDownload(map)}>
                            Baixar para offline
                          </button>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
              {openMindMap && (
                <MindMapViewer map={openMindMap.map} url={openMindMap.url} onClose={() => setOpenMindMap(null)} />
              )}
            </section>
          ) : (
            <StudyScreen
              examTitle={examChoices.find((choice) => choice.id === selectedExamId)?.title}
              onChangeExam={returnToHome}
              onChooseStudyMode={selectedExamId === 'cp-t-informatica' ? () => setSelectedStudyMode(null) : undefined}
              filters={{
                questionSearch,
                setQuestionSearch,
                topic,
                setTopic,
                year,
                setYear,
                bibliographySource,
                setBibliographySource,
                topics,
                years,
                bibliographySources,
                selectedStudyMode: selectedStudyMode === 'bibliography-questions' ? 'bibliography-questions' : null,
                filteredQuestionsLength: filteredQuestions.length,
                simulationIds,
                startSimulation,
                exitSimulation: () => setSimulationIds(null),
                simulationSize: SIMULATION_SIZE,
                startQuickSimulation,
                quickSimulationSize: QUICK_SIMULATION_SIZE,
                performanceCorrectCount,
                performanceAnsweredCount,
              }}
              questions={questionsWithResults}
              loading={loading}
              loadError={loadError}
              usingOfflineCache={usingOfflineCache}
              showQuestionList={showQuestionList}
              simulation={{
                simulationAnswers,
                simulationRevealed,
                pendingAnswerIds,
                answerErrors,
                recordSimulationAnswer,
                recordSimulationReveal,
                reviewSchedules,
                onReviewConfidence: rateReview,
              }}
              questionList={{
                hasQuestions: questions.length > 0,
                reviewQuestionId,
                reviewingFromDashboard,
                answerState: answers,
                pendingAnswerIds,
                answerErrors,
                revealedState: revealed,
                favorites,
                setRevealed,
                setFavorites,
                submitAnswer: recordQuestionAnswer,
                reviewSchedules,
                onReviewConfidence: rateReview,
                onBackToReviewList: () => { setReviewQuestionId(null); setShowQuestionList(true); setReviewingFromDashboard(true) },
                onBackToDashboard: () => setReviewingFromDashboard(false),
                onMissingQuestion: () => { setReviewQuestionId(null); setShowQuestionList(false); setReviewingFromDashboard(false) },
              }}
            />
          )}
        </main>
        {showAccountSync && <AccountSyncPanel onClose={() => setShowAccountSync(false)} onSync={() => setManualSyncRevision((revision) => revision + 1)} onUseExistingAccount={(email) => { setAccountLoginEmail(email); setShowAccountLogin(true); setAccessState('locked'); setShowAccountSync(false) }} syncStatus={syncStatus} />}
        <footer className="flex flex-wrap items-center justify-center gap-2 border-t border-line bg-white/70 px-5 py-6 text-xs text-muted"><span>Fragata do Saber <span className="px-1 text-coral">·</span> Preparação feita com propósito</span><span className="px-1 text-coral">·</span><span>@vitorsantanna2</span></footer>
      </div>
    </ErrorBoundary>
  )
}

export default App
