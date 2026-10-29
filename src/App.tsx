import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type TouchEvent } from 'react'
import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'
import { supabase } from './lib/supabase'
import {
  downloadMindMap,
  getMindMapUrl,
  loadMindMaps,
  openMindMapPdf,
  type MindMap,
} from './lib/mindMaps'
import {
  getLocalDatabase,
  getLocalMetadata,
  hasCachedMindMaps,
  hasCachedQuestions,
  isNativeApp,
  setLocalMetadata,
  type SavedSimulation,
  type StudyQuestionSnapshot,
  type CompletedSimulation,
} from './lib/localDatabase'
import { Skeleton, SkeletonText } from './components/Skeleton'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ExamChoiceGrid, examChoices } from './components/ExamChoiceGrid'
import { QuestionFilters } from './components/QuestionFilters'
import { QuestionCard } from './components/QuestionCard'
import { shuffle, conciseSource } from './lib/utils'
import { useQuestions } from './hooks/useQuestions'
import { useProgress } from './hooks/useProgress'

const AdminQuestionsPanel = lazy(() => import('./components/AdminQuestionsPanel').then((mod) => ({ default: mod.default })))
const Simulation = lazy(() => import('./components/Simulation').then((mod) => ({ default: mod.Simulation })))
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard').then((mod) => ({ default: mod.PerformanceDashboard })))

const SIMULATION_SIZE = 50
const OFFLINE_ACCESS_GRACE_MS = 30 * 24 * 60 * 60 * 1000

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const gesture = useRef<{ distance: number; scale: number; x: number; y: number; clientX: number; clientY: number } | null>(null)

  function zoom(nextScale: number) {
    const boundedScale = Math.min(5, Math.max(1, nextScale))
    setScale(boundedScale)
    if (boundedScale === 1) setOffset({ x: 0, y: 0 })
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === '+' || event.key === '=') zoom(scale + 0.5)
      else if (event.key === '-') zoom(scale - 0.5)
      else if (event.key === '0') zoom(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [scale])

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      gesture.current = {
        distance: Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY),
        scale,
        x: offset.x,
        y: offset.y,
        clientX: (first.clientX + second.clientX) / 2,
        clientY: (first.clientY + second.clientY) / 2,
      }
    } else {
      const touch = event.touches[0]
      gesture.current = { distance: 0, scale, x: offset.x, y: offset.y, clientX: touch.clientX, clientY: touch.clientY }
    }
  }

  function onTouchMove(event: TouchEvent<HTMLDivElement>) {
    const start = gesture.current
    if (!start) return
    event.preventDefault()
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY)
      const centerX = (first.clientX + second.clientX) / 2
      const centerY = (first.clientY + second.clientY) / 2
      zoom(start.scale * distance / Math.max(start.distance, 1))
      setOffset({ x: start.x + centerX - start.clientX, y: start.y + centerY - start.clientY })
    } else if (start.scale > 1) {
      const touch = event.touches[0]
      setOffset({ x: start.x + touch.clientX - start.clientX, y: start.y + touch.clientY - start.clientY })
    }
  }

  function onTouchEnd() {
    gesture.current = null
  }

  function onMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    if (scale <= 1) return
    gesture.current = { distance: 0, scale, x: offset.x, y: offset.y, clientX: event.clientX, clientY: event.clientY }
  }

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const start = gesture.current
    if (!start) return
    setOffset({ x: start.x + event.clientX - start.clientX, y: start.y + event.clientY - start.clientY })
  }

  function onMouseUp() {
    gesture.current = null
  }

  function onDoubleClick() {
    if (scale === 1) zoom(2)
    else zoom(1)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        className="grid min-h-[50vh] flex-1 place-items-center overflow-auto sm:min-h-[65vh]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onDoubleClick={onDoubleClick}
        onWheel={(event) => { if (event.ctrlKey || event.metaKey) { event.preventDefault(); zoom(scale + (event.deltaY < 0 ? 0.2 : -0.2)) } }}
      >
        <img
          className="select-none"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, transformOrigin: 'center' }}
          src={src}
          alt={alt}
          draggable={false}
        />
      </div>
    </div>
  )
}

function AccountSyncPanel({
  onClose,
  onSync,
  onUseExistingAccount,
  syncStatus,
}: {
  onClose: () => void
  onSync: () => void
  onUseExistingAccount: (email: string) => void
  syncStatus: 'local' | 'offline' | 'syncing' | 'synced' | 'error'
}) {
  const [user, setUser] = useState<{ email: string | null; is_anonymous: boolean; email_confirmed_at?: string | null } | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [step, setStep] = useState<'email' | 'confirm' | 'password' | 'complete'>('email')
  const [passwordSetupRequired, setPasswordSetupRequired] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let active = true
    void supabase?.auth.getUser().then(({ data }) => {
      if (!active || !data.user) return
      setUser({ email: data.user.email ?? null, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      const setupKey = `fragata-password-setup:${data.user.id}`
      const pendingPassword = window.localStorage.getItem(setupKey) === 'true'
      if (pendingPassword) {
        setPasswordSetupRequired(true)
        setEmail(window.localStorage.getItem(`fragata-link-email:${data.user.id}`) ?? data.user.email ?? '')
        setStep(data.user.email_confirmed_at ? 'password' : 'confirm')
      } else if (!data.user.is_anonymous && data.user.email) {
        setEmail(data.user.email)
        setStep('complete')
      }
    })
    return () => { active = false }
  }, [])

  async function sendConfirmation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { data, error: updateError } = await supabase.auth.updateUser({ email: email.trim() })
    if (updateError) setError(`Não foi possível vincular o e-mail: ${updateError.message}`)
    else if (data.user?.email_confirmed_at) {
      if (data.user.id) window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      if (data.user.id) window.localStorage.setItem(`fragata-link-email:${data.user.id}`, email.trim())
      setPasswordSetupRequired(true)
      setStep('password')
      setNotice('E-mail confirmado. Agora crie uma senha para entrar em outros aparelhos.')
    } else {
      if (data.user?.id) window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      if (data.user?.id) window.localStorage.setItem(`fragata-link-email:${data.user.id}`, email.trim())
      setStep('confirm')
      setNotice(`Enviamos a confirmação para ${email.trim()}. Confirme o endereço e volte a esta tela.`)
    }
    setBusy(false)
  }

  async function confirmEmail() {
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { error: refreshError } = await supabase.auth.refreshSession()
    const { data, error: userError } = await supabase.auth.getUser()
    if (refreshError || userError || !data.user?.email_confirmed_at) {
      setError('Ainda não conseguimos confirmar o e-mail. Abra o link enviado e tente novamente.')
    } else {
      setUser({ email: data.user.email ?? null, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      window.localStorage.removeItem(`fragata-link-email:${data.user.id}`)
      setPasswordSetupRequired(true)
      setEmail(data.user.email ?? email)
      setStep('password')
      setNotice('E-mail confirmado. Agora crie uma senha para entrar em outros aparelhos.')
    }
    setBusy(false)
  }

  async function createPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { data, error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) setError(`Não foi possível criar a senha: ${updateError.message}`)
    else {
      setUser({ email: data.user.email ?? email, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      window.localStorage.removeItem(`fragata-password-setup:${data.user.id}`)
      window.localStorage.removeItem(`fragata-link-email:${data.user.id}`)
      setPasswordSetupRequired(false)
      setStep('complete')
      setNotice('Conta pronta. Seu progresso será sincronizado quando houver conexão.')
      setPassword('')
      onSync()
    }
    setBusy(false)
  }

  async function switchToExistingAccount() {
    if (!supabase) return
    setBusy(true); setError('')
    const { error: signOutError } = await supabase.auth.signOut()
    if (signOutError) setError(`Não foi possível sair da sessão atual: ${signOutError.message}`)
    else onUseExistingAccount(email.trim())
    setBusy(false)
  }

  const permanentUser = user !== null && !user.is_anonymous && !passwordSetupRequired && step === 'complete'

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="w-full max-w-lg rounded-2xl bg-white p-6 text-ink shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="account-sync-title">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Conta opcional</p><h2 id="account-sync-title" className="mt-1 font-display text-2xl font-extrabold">Sincronizar progresso</h2></div><button className="rounded-lg border border-line px-3 py-2 text-sm font-bold" type="button" onClick={onClose}>Fechar</button></div>
        <p className="mt-3 text-sm leading-6 text-muted">Seu acesso por código continua funcionando sem conta. Vincule um e-mail e uma senha para levar respostas e favoritos a outros aparelhos.</p>
        {permanentUser ? <div className="mt-5 rounded-xl bg-sea-light p-4"><p className="text-sm font-bold">Conta vinculada: {user.email}</p><p className="mt-1 text-xs leading-5 text-muted">O progresso é salvo localmente e sincronizado quando há conexão.</p><button className="mt-3 rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="button" disabled={syncStatus === 'syncing' || syncStatus === 'offline'} onClick={onSync}>{syncStatus === 'syncing' ? 'Sincronizando…' : 'Sincronizar agora'}</button><p className="mt-2 text-xs text-muted" aria-live="polite">{syncStatus === 'synced' ? 'Tudo sincronizado.' : syncStatus === 'offline' ? 'Sem conexão. O progresso será enviado quando a internet voltar.' : syncStatus === 'error' ? 'Falha na sincronização. Tente novamente.' : ''}</p></div>
          : step === 'email' ? <form className="mt-5 space-y-3" onSubmit={(event) => void sendConfirmation(event)}><label className="block text-sm font-bold">Seu e-mail<input autoComplete="email" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><button className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? 'Enviando…' : 'Enviar confirmação do e-mail'}</button></form>
          : step === 'confirm' ? <div className="mt-5"><p className="rounded-lg bg-sea-light p-3 text-sm leading-6">{notice}</p><button className="mt-3 w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="button" disabled={busy} onClick={() => void confirmEmail()}>{busy ? 'Conferindo…' : 'Já confirmei o e-mail'}</button><button className="mt-3 w-full text-sm font-bold text-muted underline" type="button" onClick={() => setStep('email')}>Usar outro e-mail</button></div>
          : <form className="mt-5 space-y-3" onSubmit={(event) => void createPassword(event)}><p className="text-sm text-muted">E-mail confirmado: <strong>{user?.email ?? email}</strong></p><label className="block text-sm font-bold">Crie uma senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required /></label><button className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? 'Salvando…' : 'Criar senha e ativar sincronização'}</button></form>}
        {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm leading-5 text-red-800" role="alert">{error}</p>}
        {notice && step !== 'confirm' && <p className="mt-3 rounded-lg bg-green-50 p-3 text-sm leading-5 text-green-800" role="status">{notice}</p>}
        {user?.is_anonymous && <button className="mt-3 text-sm font-bold text-sea underline disabled:opacity-60" type="button" disabled={busy} onClick={() => void switchToExistingAccount()}>Já tenho uma conta: sair e entrar nela</button>}
        <p className="mt-5 text-xs leading-5 text-muted">Se você entrar numa conta já existente, o progresso local e o da conta serão mesclados por questão, priorizando a alteração mais recente.</p>
      </section>
    </div>
  )
}

function App() {
  const [adminMode, setAdminMode] = useState(false)
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
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null)
  const [selectedStudyMode, setSelectedStudyMode] = useState<'exam-questions' | 'bibliography-questions' | 'mind-maps' | null>(null)
  const [simulationIds, setSimulationIds] = useState<string[] | null>(null)
  const [showQuestionList, setShowQuestionList] = useState(false)
  const [simulationAnswers, setSimulationAnswers] = useState<Record<string, number>>({})
  const reviewQuestionIdRef = useRef<string | null>(null)
  const lastCompletedSimulationRef = useRef<{ examId: string; updatedAt: string } | null>(null)
  const [mindMaps, setMindMaps] = useState<MindMap[]>([])
  const [mindMapsLoading, setMindMapsLoading] = useState(false)
  const [mindMapsError, setMindMapsError] = useState('')
  const [mindMapAction, setMindMapAction] = useState<string | null>(null)
  const [showDownloadedMindMapsOnly, setShowDownloadedMindMapsOnly] = useState(false)
  const [openImageMap, setOpenImageMap] = useState<{ map: MindMap; url: string } | null>(null)
  const [accountUser, setAccountUser] = useState<{ id: string; email: string | null; is_anonymous: boolean } | null>(null)
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
    savedSimulation,
    setSavedSimulation,
    completedSimulations,
    recordCompletedSimulation,
    simulationRevealed,
    setSimulationRevealed,
    syncStatus,
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

  useEffect(() => {
    if (!supabase) return
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user
      setAccountUser(user ? { id: user.id, email: user.email ?? null, is_anonymous: Boolean(user.is_anonymous) } : null)
    })
    void supabase.auth.getSession().then(({ data }) => {
      const user = data.session?.user
      setAccountUser(user ? { id: user.id, email: user.email ?? null, is_anonymous: Boolean(user.is_anonymous) } : null)
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
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(null)
    setSelectedStudyMode(null)
    setSimulationIds(null)
    setShowQuestionList(false)
    setShowPerformance(false)
  }, [setTopic, setYear, setSelectedExamId, setSelectedStudyMode, setSimulationIds, setShowQuestionList, setShowPerformance])

  useEffect(() => {
    setShowQuestionList(false)
  }, [selectedExamId])

  useEffect(() => {
    if (topic !== 'Todos' || year !== 'Todos' || questionSearch !== '' || bibliographySource !== 'Todos') {
      setShowQuestionList(true)
    }
  }, [topic, year, questionSearch, bibliographySource, setShowQuestionList])

  useEffect(() => {
    if (Capacitor.getPlatform() !== 'android') return
    const listener = CapacitorApp.addListener('backButton', () => {
      if (adminMode) {
        setAdminMode(false)
      } else if (showAccountSync) {
        setShowAccountSync(false)
      } else if (showPerformance) {
        setShowPerformance(false)
      } else if (openImageMap) {
        setOpenImageMap(null)
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
  }, [adminMode, showAccountSync, showPerformance, openImageMap, simulationIds, selectedExamId, selectedStudyMode, returnToHome])

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
      if (map.content_type === 'application/pdf') {
        await openMindMapPdf(currentMap)
      } else {
        const url = await getMindMapUrl(currentMap)
        setOpenImageMap({ map: currentMap, url })
      }
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

  const simulationTotal = simulationIds !== null ? simulationIds.length : filteredQuestions.length
  const simulationAnsweredCount = simulationIds !== null
    ? simulationIds.filter((id) => simulationAnswers[id] !== undefined).length
    : filteredQuestions.filter((question) => simulationAnswers[question.id] !== undefined).length
  const simulationCorrectCount = simulationIds !== null
    ? simulationIds.filter((id) => simulationAnswers[id] !== undefined && simulationAnswers[id] === filteredQuestions.find((q) => q.id === id)?.answer).length
    : filteredQuestions.filter((question) => simulationAnswers[question.id] === question.answer).length
  const simulationComplete = simulationTotal > 0 && simulationAnsweredCount === simulationTotal
  const pointsPerQuestion = simulationTotal ? 100 / simulationTotal : 0
  const simulationScore = simulationComplete ? (simulationCorrectCount / simulationTotal) * 100 : 0

  const correctCount = questions.filter(
    (question) => answers[question.id] === question.answer,
  ).length
  const performanceCorrectCount = simulationIds !== null ? simulationCorrectCount : correctCount
  const performanceAnsweredCount = simulationIds !== null ? simulationAnsweredCount : Object.keys(answers).length

  const examCount = new Set(questions.map((question) => question.exam)).size
  const topicCount = new Set(questions.map((question) => question.topic).filter(Boolean)).size

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

  const resumeSavedSimulation = Boolean(savedSimulation && (
    !lastStudiedQuestion || Date.parse(savedSimulation.updatedAt) >= Date.parse(progressUpdatedAt[lastStudiedQuestion.questionId] ?? '')
  ))

  function selectExam(examId: string) {
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(examId)
    setSelectedStudyMode(examId === 'cp-t-informatica' ? null : 'exam-questions')
    setSimulationIds(null)
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
    reviewQuestionIdRef.current = questionId
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
    reviewQuestionIdRef.current = questionId
    setShowPerformance(false)
  }

  function startSimulation() {
    lastCompletedSimulationRef.current = null
    const picked = shuffle(filteredQuestionsRef.current).slice(0, SIMULATION_SIZE)
    const ids = picked.map((question) => question.id)
    const simulation: SavedSimulation = {
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

  useEffect(() => {
    if (!simulationComplete || !savedSimulation || simulationIds === null) return

    const currentKey = { examId: savedSimulation.examId, updatedAt: savedSimulation.updatedAt }
    if (
      lastCompletedSimulationRef.current?.examId === currentKey.examId &&
      lastCompletedSimulationRef.current?.updatedAt === currentKey.updatedAt
    ) {
      return
    }

    const examChoice = examChoices.find((choice) => choice.id === savedSimulation.examId)
    const completed: CompletedSimulation = {
      id: `completed-${savedSimulation.examId}-${savedSimulation.updatedAt}`,
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
    lastCompletedSimulationRef.current = currentKey
    recordCompletedSimulation(completed)
  }, [simulationComplete, savedSimulation, simulationIds, simulationTotal, simulationCorrectCount, simulationAnsweredCount, simulationScore, examChoices, recordCompletedSimulation])

  function recordSimulationAnswer(questionId: string, optionIndex: number) {
    const nextAnswers = { ...simulationAnswers, [questionId]: optionIndex }
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
            <AdminQuestionsPanel onClose={() => setAdminMode(false)} />
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
      <main className="grid min-h-screen place-items-center bg-paper px-5 py-10 text-ink">
        <section className="w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
          <img className="mb-6 h-14 w-24 rounded-md object-contain" src={publicAsset('logo.png')} alt="Fragata do Saber" />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Acesso restrito</p>
          <h1 className="mt-2 font-display text-2xl font-extrabold">Digite seu código de acesso</h1>
          <p className="mt-2 text-sm leading-6 text-muted">Use o código recebido para acessar os concursos e simulados.</p>
          <form className="mt-6 space-y-4" onSubmit={handleAccessSubmit}>
            <label className="block text-sm font-bold text-ink" htmlFor="access-code">
              Código de acesso
              <input
                autoCapitalize="characters"
                autoComplete="one-time-code"
                className="mt-2 block w-full rounded-lg border border-line px-3 py-3 font-medium outline-none transition placeholder:text-muted/60 focus:border-sea focus:ring-2 focus:ring-sea/10"
                id="access-code"
                onChange={(event) => setAccessCode(event.target.value)}
                placeholder="Digite o código"
                required
                value={accessCode}
              />
            </label>
            {accessError && <p className="text-sm leading-5 text-red-700" role="alert">{accessError}</p>}
            <button
              className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-60"
              disabled={checkingCode || !accessCode.trim() || !supabase}
              type="submit"
            >
              {checkingCode ? 'Validando...' : 'Acessar'}
            </button>
          </form>
          {showAccountCreate ? <form className="mt-5 space-y-3 rounded-xl border border-line p-4" onSubmit={(event) => void handleAccountCreate(event)}>
            <p className="text-xs leading-5 text-muted">Crie sua conta para sincronizar o progresso entre aparelhos.</p>
            <label className="block text-sm font-bold">E-mail<input autoComplete="username" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={accountCreateEmail} onChange={(event) => setAccountCreateEmail(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountCreatePassword} onChange={(event) => setAccountCreatePassword(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Confirme a senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountCreateConfirmPassword} onChange={(event) => setAccountCreateConfirmPassword(event.target.value)} required /></label>
            <button className="w-full rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={creatingAccount}>{creatingAccount ? 'Criando…' : 'Criar conta'}</button>
            <p className="text-xs leading-5 text-muted">Depois de criar, informe seu código de acesso acima para liberar os estudos.</p>
            <button className="mt-3 w-full text-sm font-bold text-muted underline" type="button" onClick={() => { setShowAccountCreate(false); setShowAccountLogin(false) }}>Voltar</button>
          </form> : showAccountLogin ? <form className="mt-5 space-y-3 rounded-xl border border-line p-4" onSubmit={(event) => void handleAccountLogin(event)}>
            <p className="text-xs leading-5 text-muted">Ao entrar, o progresso salvo neste aparelho será mesclado à conta.</p>
            <p className="text-sm font-bold">Entrar na conta de sincronização</p>
            <label className="block text-sm font-bold">E-mail<input autoComplete="username" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={accountLoginEmail} onChange={(event) => setAccountLoginEmail(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Senha<input autoComplete="current-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountLoginPassword} onChange={(event) => setAccountLoginPassword(event.target.value)} required /></label>
            <button className="w-full rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={checkingCode}>{checkingCode ? 'Entrando…' : 'Entrar e sincronizar'}</button>
            <p className="text-xs leading-5 text-muted">O acesso por código continua independente. Se a conta ainda não tiver autorização ativa, informe seu código acima.</p>
          </form> : <div className="mt-4 space-y-2"><button className="w-full rounded-lg border border-sea px-4 py-2.5 text-sm font-bold text-sea hover:bg-sea-light" type="button" onClick={() => setShowAccountLogin(true)}>Já tenho conta · entrar e sincronizar</button><button className="w-full rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-sea hover:bg-sea-light" type="button" onClick={() => setShowAccountCreate(true)}>Não tem conta? Criar conta</button></div>}
          <button className="mt-5 w-full rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-muted transition hover:border-sea hover:text-sea" type="button" onClick={() => setAdminMode(true)}>
            Acesso administrativo
          </button>
        </section>
      </main>
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
            <div className="flex w-full gap-2 sm:w-auto"><button className="flex-1 whitespace-nowrap rounded-lg border border-sea bg-white px-2 py-2 text-xs font-bold text-sea transition hover:bg-sea hover:text-white sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={() => setShowPerformance(true)}>Meu desempenho</button><button className="flex-1 whitespace-nowrap rounded-lg border border-line bg-white px-2 py-2 text-xs font-bold transition hover:border-sea hover:text-sea sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={() => setShowAccountSync(true)}>{accountUser && !accountUser.is_anonymous ? 'Conta' : 'Sincronizar'}</button>{accountUser && !accountUser.is_anonymous ? <button className="flex-1 whitespace-nowrap rounded-lg border border-line bg-white px-2 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50 hover:text-red-700 sm:flex-none sm:px-3 sm:text-sm" type="button" onClick={handleLogout}>Sair</button> : null}</div>
          </div>
        </header>
        {logoutError && <div className="mx-auto max-w-7xl px-5 py-3"><p className="rounded-lg bg-red-50 p-3 text-sm leading-5 text-red-800" role="alert">{logoutError}</p></div>}

        <main id="inicio" className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
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
                <img className="mx-auto w-full max-w-[140px] rounded-lg border border-white/10 shadow-md shadow-black/20" src={publicAsset('logo.png')} alt="Logo Fragata do Saber" />
                <div className={`grid gap-4 ${selectedExamId ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {selectedExamId ? (
                    <>
                      <div><p className="font-display text-2xl font-extrabold sm:text-3xl">{questions.length}</p><p className="mt-1 text-xs text-white/60">questões</p></div>
                      <div><p className="font-display text-2xl font-extrabold sm:text-3xl">{examCount}</p><p className="mt-1 text-xs text-white/60">provas</p></div>
                      <div><p className="font-display text-2xl font-extrabold sm:text-3xl">{topicCount}</p><p className="mt-1 text-xs text-white/60">assuntos</p></div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="font-display text-2xl font-extrabold sm:text-3xl">{String(examChoices.length).padStart(2, '0')}</p>
                        <p className="mt-1 text-xs text-white/60">cursos e concursos</p>
                      </div>
                      <div className="self-center">
                        <p className="font-display text-base font-extrabold leading-5 sm:text-lg">Provas anteriores</p>
                        <p className="mt-1 text-xs leading-5 text-white/60">Questões organizadas por concurso</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {showPerformance ? (
            <Suspense fallback={<div className="mt-8 p-8 text-center"><Skeleton className="w-32 mx-auto mb-2" /><SkeletonText className="w-48 mx-auto" /></div>}>
              <PerformanceDashboard
                snapshots={questionSnapshots}
                answers={answers}
                completedSimulations={completedSimulations}
                onClose={() => setShowPerformance(false)}
                onReview={reviewQuestion}
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
                    <span className="mt-1 block truncate text-sm text-muted">{resumeSavedSimulation && savedSimulation ? `${savedSimulation.ids.length} questões no último simulado · retome de onde parou` : `${lastStudiedQuestion?.snapshot.subject} · ${lastStudiedQuestion?.snapshot.topic || 'Última questão estudada'}`}</span>
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
                  <span className="grid size-12 place-items-center rounded-xl bg-[#fff2e8] text-2xl" aria-hidden="true">✦</span>
                  <span className="mt-5 block font-display text-xl font-extrabold text-ink">Mapas mentais</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">Revise os conteúdos do Quadro Técnico com mapas mentais.</span>
                  <span className="mt-5 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar mapas <span aria-hidden="true">→</span></span>
                </button>
                <button className="group rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5" type="button" onClick={() => setSelectedStudyMode('exam-questions')}>
                  <span className="grid size-12 place-items-center rounded-xl bg-sea-light text-2xl" aria-hidden="true">✓</span>
                  <span className="mt-5 block font-display text-xl font-extrabold text-ink">Questões de provas</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">Pratique com questões de provas anteriores e simulados.</span>
                  <span className="mt-5 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar questões de provas <span aria-hidden="true">→</span></span>
                </button>
                <button className="group rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5" type="button" onClick={() => setSelectedStudyMode('bibliography-questions')}>
                  <span className="grid size-12 place-items-center rounded-xl bg-[#eef3f5] text-2xl" aria-hidden="true">▤</span>
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
              {openImageMap && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-1" role="dialog" aria-modal="true" aria-label={openImageMap.map.title} onClick={(event) => { if (event.target === event.currentTarget) setOpenImageMap(null) }}>
                  <button className="absolute top-1 right-1 z-10 rounded-lg border border-line bg-white px-2 py-1 text-xs font-bold" type="button" onClick={() => setOpenImageMap(null)}>×</button>
                  <ZoomableImage key={openImageMap.map.id} src={openImageMap.url} alt={openImageMap.map.title} />
                </div>
              )}
            </section>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-xl font-extrabold">{examChoices.find((choice) => choice.id === selectedExamId)?.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedExamId === 'cp-t-informatica' && (
                    <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={() => setSelectedStudyMode(null)}>
                      Voltar às opções
                    </button>
                  )}
                  <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={returnToHome}>
                    Trocar concurso
                  </button>
                </div>
              </div>
              <section className="mt-4 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]" id="questoes">
                <QuestionFilters
                  questionSearch={questionSearch}
                  setQuestionSearch={setQuestionSearch}
                  topic={topic}
                  setTopic={setTopic}
                  year={year}
                  setYear={setYear}
                  bibliographySource={bibliographySource}
                  setBibliographySource={setBibliographySource}
                  topics={topics}
                  years={years}
                  bibliographySources={bibliographySources}
                  selectedStudyMode={selectedStudyMode === 'bibliography-questions' ? 'bibliography-questions' : null}
                  filteredQuestionsLength={filteredQuestions.length}
                  simulationIds={simulationIds}
                  startSimulation={startSimulation}
                  exitSimulation={() => setSimulationIds(null)}
                  simulationSize={SIMULATION_SIZE}
                  performanceCorrectCount={performanceCorrectCount}
                  performanceAnsweredCount={performanceAnsweredCount}
                />
                <div>
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Banco de questões</p>
                      <h2 className="mt-1 font-display text-2xl font-extrabold">{selectedStudyMode === 'bibliography-questions' ? 'Questões baseadas na bibliografia' : 'Continue sua preparação'}</h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted ring-1 ring-line">{simulationIds ? simulationIds.length : filteredQuestions.length} {simulationIds ? 'no simulado' : 'disponíveis'}</span>
                  </div>
                  <div className="space-y-4">
                    {simulationIds !== null && (
                      <Suspense fallback={<div className="mt-4 p-8 text-center"><Skeleton className="w-32 mx-auto mb-2" /><SkeletonText className="w-64 mx-auto" /></div>}>
                        <Simulation
                          questions={filteredQuestions}
                          simulationIds={simulationIds}
                          simulationAnswers={simulationAnswers}
                          simulationRevealed={simulationRevealed}
                          recordSimulationAnswer={recordSimulationAnswer}
                          recordSimulationReveal={recordSimulationReveal}
                        />
                      </Suspense>
                    )}
                    {simulationComplete && (
                      <section className="rounded-xl border border-sea/20 bg-sea-light p-5" aria-live="polite">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Simulado concluído</p>
                        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                          <div>
                            <p className="font-display text-3xl font-extrabold text-ink">
                              {simulationScore.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                              <span className="ml-1 text-base font-bold text-muted">/ 100 pontos</span>
                            </p>
                            <p className="mt-1 text-sm text-muted">
                              {simulationCorrectCount} de {filteredQuestions.length} questões corretas
                            </p>
                          </div>
                          <p className="text-xs font-medium text-muted">
                            Cada questão vale {pointsPerQuestion.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} pontos
                          </p>
                        </div>
                      </section>
                    )}
                    {loading && <p className="rounded-xl border border-line bg-white p-8 text-center text-sm text-muted">Carregando questões...</p>}
                    {!loading && usingOfflineCache && <p className="rounded-xl border border-[#ead7be] bg-[#fff8ed] p-4 text-sm leading-6 text-[#805b2d]">Sem conexão: estas questões foram carregadas do aparelho. O conteúdo será atualizado quando a internet voltar.</p>}
                    {!loading && loadError && <p className="rounded-xl border border-red-200 bg-white p-5 text-sm leading-6 text-red-800">{loadError}</p>}
                    {showQuestionList && simulationIds === null && !loading && !loadError && filteredQuestions.map((question) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        answerState={answers}
                        revealedState={revealed}
                        favorites={favorites}
                        setAnswers={(value) => setAnswers(value)}
                        setRevealed={(value) => setRevealed(value)}
                        setFavorites={(value) => setFavorites(value)}
                        simulationIds={null}
                        recordSimulationAnswer={recordSimulationAnswer}
                        recordSimulationReveal={recordSimulationReveal}
                        conciseSource={conciseSource}
                      />
                    ))}
                    {showQuestionList && simulationIds === null && !loading && !loadError && filteredQuestions.length === 0 && <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">{questions.length === 0 ? 'Ainda não há questões publicadas no banco.' : 'Nenhuma questão encontrada com esses filtros.'}</p>}
                    {!showQuestionList && simulationIds === null && !loading && !loadError && <div className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
                      <p className="font-bold">Questões ainda não carregadas</p>
                      <p className="mt-2 text-muted">Use os filtros acima para selecionar concurso, matéria, tópico e ano, depois toque em "Gerar simulado" para começar a estudar.</p>
                    </div>}
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
        {showAccountSync && <AccountSyncPanel onClose={() => setShowAccountSync(false)} onSync={() => setManualSyncRevision((revision) => revision + 1)} onUseExistingAccount={(email) => { setAccountLoginEmail(email); setShowAccountLogin(true); setAccessState('locked'); setShowAccountSync(false) }} syncStatus={syncStatus} />}
        <footer className="flex flex-wrap items-center justify-center gap-2 border-t border-line bg-white/70 px-5 py-6 text-xs text-muted"><span>Fragata do Saber <span className="px-1 text-coral">·</span> Preparação feita com propósito</span><button className="font-semibold transition hover:text-sea" type="button" onClick={() => setAdminMode(true)}>Painel administrativo</button></footer>
      </div>
    </ErrorBoundary>
  )
}

export default App
