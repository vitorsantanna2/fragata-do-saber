import { Fragment, useEffect, useMemo, useRef, useState, type FormEvent, type TouchEvent } from 'react'
import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import AdminQuestionsPanel from './components/AdminQuestionsPanel'
import { supabase } from './lib/supabase'
import { downloadMindMap, getMindMapUrl, loadMindMaps, openMindMapPdf, type MindMap } from './lib/mindMaps'
import {
  cacheQuestions,
  getLocalDatabase,
  getLocalMetadata,
  hasCachedMindMaps,
  hasCachedQuestions,
  isNativeApp,
  loadStudyProgress,
  readCachedQuestions,
  saveStudyProgress,
  setLocalMetadata,
  type CachedQuestionRow,
} from './lib/localDatabase'

type Question = {
  id: string
  year: string
  questionNumber: number | null
  questionType: 'exam' | 'bibliography'
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  prompt: string
  promptAfterImage: string | null
  imageUrl: string | null
  imageAlt: string | null
  options: string[]
  answer: number
  explanation: string | null
  source: string | null
}

type QuestionRow = CachedQuestionRow

const examChoices = [
  {
    id: 'ea-hsg',
    group: 'Concursos',
    title: 'EA-HSG',
    description: 'Questões e provas anteriores do concurso EA-HSG.',
    exam: 'EA-HSG',
    subject: null,
    image: 'hsg-emblema.png',
  },
  {
    id: 'cp-t-informatica',
    group: 'Concursos',
    title: 'Quadro Técnico - Informática',
    description: 'Conhecimentos profissionais de Informática do Quadro Técnico.',
    exam: 'CP-T',
    subject: 'Informática',
    image: 'qt-emblema.png',
  },
  {
    id: 'prisoc',
    group: 'Cursos expeditos',
    title: 'Primeiros Socorros',
    description: 'Curso Expedito de Primeiros Socorros',
    exam: 'PRISOC',
    subject: 'Primeiros Socorros',
    image: 'PRISOC.jpg',
  },
  {
    id: 'opmicro',
    group: 'Cursos expeditos',
    title: 'Operador de Microcomputadores',
    description: 'Curso Expedito de Operador de Microcomputadores',
    exam: 'Operador de Microcomputadores - CIAA',
    subject: 'Informática',
    image: 'OPMICRO.jpg',
  },
  {
    id: 'manmicro',
    group: 'Cursos expeditos',
    title: 'Montagem e Manutenção de Microcomputadores',
    description: 'Curso Expedito de Montagem e Manutenção de Microcomputadores',
    exam: 'MANMICRO',
    subject: 'MANMICRO',
    image: 'MANMICRO.jpeg',
  },
  {
    id: 'opredes',
    group: 'Cursos expeditos',
    title: 'Operador de Redes',
    description: 'Curso Expedito de Operador de Redes',
    exam: 'OpRedes',
    subject: 'OpRedes',
    image: 'OpRedes.jpg',
  },
    {
    id: 'cbinc',
    group: 'Cursos expeditos',
    title: 'Combate a Incêndio',
    description: 'Curso Expedito de Combate a Incêndio',
    exam: 'cbinc',
    subject: 'Combate a Incêndio',
    image: 'cbinc.jpg',
  },
]

const examGroups = ['Concursos', 'Cursos expeditos']
const SIMULATION_SIZE = 50
const OFFLINE_ACCESS_GRACE_MS = 30 * 24 * 60 * 60 * 1000

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

function toQuestion(row: QuestionRow): Question {
  return {
    id: row.id,
    year: row.question_type === 'bibliography' ? 'Bibliografia' : String(row.year ?? ''),
    questionNumber: row.question_type === 'bibliography' || row.question_number === 0 ? null : row.question_number,
    questionType: row.question_type,
    subject: row.subject,
    topic: row.topic,
    difficulty: row.difficulty,
    exam: row.exam,
    prompt: row.statement,
    promptAfterImage: row.statement_after_image,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    options: row.options,
    answer: row.correct_option,
    explanation: row.explanation,
    source: row.source,
  }
}

function conciseSource(source: string) {
  const normalized = source.replace(/\s+/g, ' ').trim()
  const edition = /\b\d+\s*(?:[ªaºo])?\s*\.?\s*(?:ed\.?|edição)(?![\p{L}])/iu.exec(normalized)
  if (!edition || edition.index === undefined) return normalized

  const end = edition.index + edition[0].length
  return `${normalized.slice(0, end).replace(/[\s.,;:]+$/, '')}.`
}

function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
}

// Fisher-Yates: sorteio realmente uniforme (evite sort(() => Math.random() - 0.5))
function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const mathSegmentPattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+\$)/g

type RichTextProps = {
  text: string
  className?: string
}

function RichText({ text, className }: RichTextProps) {
  return (
    <span className={className}>
      {text.split(mathSegmentPattern).map((segment, index) => {
        const isBlockMath = segment.startsWith('$$') && segment.endsWith('$$')
        const isInlineMath = segment.startsWith('$') && segment.endsWith('$')

        if (!isBlockMath && !isInlineMath) {
          return <Fragment key={index}>{segment}</Fragment>
        }

        const delimiters = isBlockMath ? 2 : 1
        const math = segment.slice(delimiters, -delimiters)

        return (
          <span
            key={index}
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(math, {
                displayMode: isBlockMath,
                throwOnError: false,
              }),
            }}
          />
        )
      })}
    </span>
  )
}

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const gesture = useRef<{ distance: number; scale: number; x: number; y: number; touchX: number; touchY: number } | null>(null)

  function zoom(nextScale: number) {
    const boundedScale = Math.min(5, Math.max(1, nextScale))
    setScale(boundedScale)
    if (boundedScale === 1) setOffset({ x: 0, y: 0 })
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      gesture.current = {
        distance: Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY),
        scale,
        x: offset.x,
        y: offset.y,
        touchX: (first.clientX + second.clientX) / 2,
        touchY: (first.clientY + second.clientY) / 2,
      }
    } else {
      const touch = event.touches[0]
      gesture.current = { distance: 0, scale, x: offset.x, y: offset.y, touchX: touch.clientX, touchY: touch.clientY }
    }
  }

  function onTouchMove(event: TouchEvent<HTMLDivElement>) {
    const start = gesture.current
    if (!start) return
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY)
      const centerX = (first.clientX + second.clientX) / 2
      const centerY = (first.clientY + second.clientY) / 2
      zoom(start.scale * distance / Math.max(start.distance, 1))
      setOffset({ x: start.x + centerX - start.touchX, y: start.y + centerY - start.touchY })
    } else if (start.scale > 1) {
      const touch = event.touches[0]
      setOffset({ x: start.x + touch.clientX - start.touchX, y: start.y + touch.clientY - start.touchY })
    }
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    gesture.current = null
    if (event.touches.length === 1) {
      const touch = event.touches[0]
      gesture.current = { distance: 0, scale, x: offset.x, y: offset.y, touchX: touch.clientX, touchY: touch.clientY }
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-center gap-2 border-b border-line p-2" aria-label="Controles de zoom">
        <button className="grid size-10 place-items-center rounded-lg border border-line text-xl font-bold disabled:opacity-40" type="button" aria-label="Aumentar zoom" disabled={scale >= 5} onClick={() => zoom(scale + 0.5)}>+</button>
        <span className="min-w-14 text-center text-sm font-bold tabular-nums">{Math.round(scale * 100)}%</span>
        <button className="grid size-10 place-items-center rounded-lg border border-line text-xl font-bold disabled:opacity-40" type="button" aria-label="Diminuir zoom" disabled={scale <= 1} onClick={() => zoom(scale - 0.5)}>−</button>
        <button className="rounded-lg border border-line px-3 py-2 text-sm font-bold" type="button" onClick={() => { zoom(1); setOffset({ x: 0, y: 0 }) }}>Ajustar</button>
      </div>
      <div
        className="grid min-h-[50vh] flex-1 touch-none place-items-center overflow-hidden bg-slate-100 sm:min-h-[65vh]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onWheel={(event) => { if (event.ctrlKey || event.metaKey) { event.preventDefault(); zoom(scale + (event.deltaY < 0 ? 0.2 : -0.2)) } }}
      >
        <img
          className="max-h-[70vh] max-w-full select-none object-contain sm:max-h-[75vh]"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, transformOrigin: 'center' }}
          src={src}
          alt={alt}
          draggable={false}
        />
      </div>
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
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [usingOfflineCache, setUsingOfflineCache] = useState(false)
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null)
  const [selectedStudyMode, setSelectedStudyMode] = useState<'exam-questions' | 'bibliography-questions' | 'mind-maps' | null>(null)
  const [topic, setTopic] = useState('Todos')
  const [year, setYear] = useState('Todos')
  const [bibliographySource, setBibliographySource] = useState('Todos')
  const [questionSearch, setQuestionSearch] = useState('')
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [simulationIds, setSimulationIds] = useState<string[] | null>(null)
  const [mindMaps, setMindMaps] = useState<MindMap[]>([])
  const [mindMapsLoading, setMindMapsLoading] = useState(false)
  const [mindMapsError, setMindMapsError] = useState('')
  const [mindMapAction, setMindMapAction] = useState<string | null>(null)
  const [showDownloadedMindMapsOnly, setShowDownloadedMindMapsOnly] = useState(false)
  const [openImageMap, setOpenImageMap] = useState<{ map: MindMap; url: string } | null>(null)
  const [progressRestored, setProgressRestored] = useState(false)
  const skipSelectionReset = useRef(false)

  useEffect(() => {
    let active = true
    void loadStudyProgress().then((progress) => {
      if (!active) return
      if (progress) {
        skipSelectionReset.current = true
        setAnswers(progress.answers)
        setRevealed(progress.revealed)
        setFavorites(progress.favorites)
        setSelectedExamId(progress.selectedExamId)
        setSelectedStudyMode(progress.selectedStudyMode)
        setTopic(progress.topic)
        setYear(progress.year)
        setBibliographySource(progress.bibliographySource)
        setQuestionSearch(progress.questionSearch)
      }
      setProgressRestored(true)
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (!progressRestored) return
    const timeout = window.setTimeout(() => {
      void saveStudyProgress({
        answers, revealed, favorites, selectedExamId, selectedStudyMode,
        topic, year, bibliographySource, questionSearch,
      })
    }, 200)
    return () => window.clearTimeout(timeout)
  }, [progressRestored, answers, revealed, favorites, selectedExamId, selectedStudyMode, topic, year, bibliographySource, questionSearch])

  useEffect(() => {
    if (Capacitor.getPlatform() !== 'android') return

    const listener = CapacitorApp.addListener('backButton', () => {
      if (adminMode) {
        setAdminMode(false)
      } else if (openImageMap) {
        setOpenImageMap(null)
      } else if (simulationIds !== null) {
        exitSimulation()
      } else if (selectedExamId === 'cp-t-informatica' && selectedStudyMode !== null) {
        setSelectedStudyMode(null)
      } else if (selectedExamId !== null) {
        returnToHome()
      } else {
        void CapacitorApp.exitApp()
      }
    })

    return () => { void listener.then((handle) => handle.remove()) }
  }, [adminMode, openImageMap, simulationIds, selectedExamId, selectedStudyMode])

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

  useEffect(() => {
    let active = true

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

      if (!active) return

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

      if (!active) return

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

    void checkAccess()

    return () => {
      active = false
    }
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

      const { data, error } = await supabase.rpc('redeem_access_code', {
        p_code: accessCode.trim(),
      })

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

  useEffect(() => {
    let active = true

    async function loadQuestions() {
      const selectedExam = examChoices.find((choice) => choice.id === selectedExamId)

      if (!selectedExam) {
        setQuestions([])
        setLoading(false)
        return
      }

      if (selectedExam.id === 'cp-t-informatica' && selectedStudyMode !== 'exam-questions' && selectedStudyMode !== 'bibliography-questions') {
        setQuestions([])
        setLoading(false)
        setLoadError('')
        return
      }

      const questionType: 'exam' | 'bibliography' = selectedExam.id === 'cp-t-informatica' && selectedStudyMode === 'bibliography-questions'
        ? 'bibliography'
        : 'exam'

      setLoading(true)
      setLoadError('')
      setUsingOfflineCache(false)

      let cachedRows: QuestionRow[] = []
      try {
        cachedRows = await readCachedQuestions(selectedExam.exam, selectedExam.subject, questionType)
        if (!active) return
        if (cachedRows.length > 0) {
          setQuestions(cachedRows.map(toQuestion))
          setUsingOfflineCache(true)
          setLoading(false)
        }
      } catch (error) {
        console.warn('Não foi possível ler as questões salvas no aparelho.', error)
      }

      if (!supabase) {
        setLoadError('Configure VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY no arquivo .env.local.')
        setLoading(false)
        return
      }

      let query = supabase
        .from('questions')
        .select('id, year, question_number, question_type, subject, topic, difficulty, exam, statement, statement_after_image, image_url, image_alt, options, correct_option, explanation, source')
        .eq('is_published', true)
        .eq('is_annulled', false)
        .eq('exam', selectedExam.exam)
        .eq('question_type', questionType)

      if (selectedExam.subject) {
        query = query.eq('subject', selectedExam.subject)
      }

      const { data, error } = await query.order('year', { ascending: false })

      if (!active) return

      if (error) {
        if (cachedRows.length > 0) {
          setLoadError('')
          setLoading(false)
          return
        }
        setLoadError(`Não foi possível carregar as questões. Confira se a tabela public.questions e a política de leitura estão configuradas. (${error.message})`)
      } else {
        const questionRows = data as QuestionRow[]
        setUsingOfflineCache(false)
        void cacheQuestions(questionRows, selectedExam.exam, selectedExam.subject, questionType).catch((cacheError) => {
          console.warn('Não foi possível atualizar o cache local de questões.', cacheError)
        })
        setQuestions((data as QuestionRow[]).map((row) => ({
          id: row.id,
          year: row.question_type === 'bibliography' ? 'Bibliografia' : String(row.year ?? ''),
          questionNumber: row.question_number,
          questionType: row.question_type,
          subject: row.subject,
          topic: row.topic,
          difficulty: row.difficulty,
          exam: row.exam,
          prompt: row.statement,
          promptAfterImage: row.statement_after_image,
          imageUrl: row.image_url,
          imageAlt: row.image_alt,
          options: row.options,
          answer: row.correct_option,
          explanation: row.explanation,
          source: row.source,
        })))
      }

      setLoading(false)
    }

    void loadQuestions()

    return () => {
      active = false
    }
  }, [selectedExamId, selectedStudyMode])

  useEffect(() => {
    if (!progressRestored) return
    if (skipSelectionReset.current) {
      skipSelectionReset.current = false
      return
    }
    setTopic('Todos')
    setYear('Todos')
    setBibliographySource('Todos')
    setQuestionSearch('')
    setSimulationIds(null)
  }, [progressRestored, selectedExamId, selectedStudyMode])

  const topics = useMemo(
    () => ['Todos', ...new Set(questions.flatMap((question) => question.topic ? [question.topic] : []))],
    [questions],
  )
  const years = useMemo(
    () => ['Todos', ...new Set(questions.map((question) => question.year).filter(Boolean))],
    [questions],
  )
  const bibliographySources = useMemo(
    () => ['Todos', ...new Set(questions.flatMap((question) => question.source ? [conciseSource(question.source)] : []))],
    [questions],
  )

  const filteredQuestions = useMemo(() => {
    const normalizedSearch = normalizeSearchText(questionSearch.trim())
    return questions.filter((question) => {
      const searchableText = [
        question.prompt,
        question.promptAfterImage,
        question.options.join(' '),
        question.explanation,
        question.source,
        question.subject,
        question.topic,
        question.exam,
        question.year,
      ].filter(Boolean).join(' ')
      const matchesSearch = !normalizedSearch || normalizeSearchText(searchableText).includes(normalizedSearch)

      return matchesSearch &&
        (topic === 'Todos' || question.topic === topic) &&
        (selectedStudyMode !== 'bibliography-questions' || bibliographySource === 'Todos' || (question.source !== null && conciseSource(question.source) === bibliographySource)) &&
        (year === 'Todos' || question.year === year)
    })
  }, [questions, topic, year, bibliographySource, selectedStudyMode, questionSearch])

  const visibleQuestions = useMemo(() => {
    if (!simulationIds) return filteredQuestions
    const byId = new Map(questions.map((q) => [q.id, q]))
    return simulationIds.flatMap((id) => {
      const q = byId.get(id)
      return q ? [q] : []
    })
  }, [simulationIds, filteredQuestions, questions])

  const downloadedMindMapsCount = mindMaps.filter((map) => map.local_path).length
  const visibleMindMaps = showDownloadedMindMapsOnly
    ? mindMaps.filter((map) => map.local_path)
    : mindMaps

  const simulationAnsweredCount = visibleQuestions.filter(
  (question) => answers[question.id] !== undefined,
).length
  const simulationCorrectCount = visibleQuestions.filter(
  (question) => answers[question.id] === question.answer,
).length
  const simulationComplete =
  visibleQuestions.length > 0 && simulationAnsweredCount === visibleQuestions.length
  const pointsPerQuestion = visibleQuestions.length ? 100 / visibleQuestions.length : 0
  const simulationScore = simulationComplete
  ? (simulationCorrectCount / visibleQuestions.length) * 100
  : 0

  const correctCount = questions.filter(
    (question) => answers[question.id] === question.answer,
  ).length

  const examCount = new Set(questions.map((question) => question.exam)).size
  const topicCount = new Set(questions.map((question) => question.topic).filter(Boolean)).size

  function startSimulation() {
  // Sorteia entre as questões que passam pelos filtros atuais.
  // Para ignorar os filtros e sortear de toda a prova, use `questions` no lugar de `filteredQuestions`.
  const picked = shuffle(filteredQuestions).slice(0, SIMULATION_SIZE)
  setAnswers({})
  setRevealed([])
  setSimulationIds(picked.map((q) => q.id))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function exitSimulation() {
  setSimulationIds(null)
}

function changeTopic(value: string) {
  setTopic(value)
  setSimulationIds(null)
}

function changeYear(value: string) {
  setYear(value)
  setSimulationIds(null)
}

  function selectExam(examId: string) {
    setQuestions([])
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(examId)
    setSelectedStudyMode(examId === 'cp-t-informatica' ? null : 'exam-questions')
    setSimulationIds(null)
  }

  function returnToHome() {
    setQuestions([])
    setTopic('Todos')
    setYear('Todos')
    setLoadError('')
    setSelectedExamId(null)
    setSelectedStudyMode(null)
    setSimulationIds(null)
  }

  function toggleInList(list: string[], id: string, update: (value: string[]) => void) {
    update(list.includes(id) ? list.filter((item) => item !== id) : [...list, id])
  }

  if (adminMode) {
    return <AdminQuestionsPanel onClose={() => setAdminMode(false)} />
  }

  if (accessState === 'checking' || !splashElapsed) {
    return (
      <main className="fixed inset-0 z-50 overflow-hidden bg-[#011a32]">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
          src={publicAsset('splash-screen.jpg')}
        />
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
          <button className="mt-5 w-full rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-muted transition hover:border-sea hover:text-sea" type="button" onClick={() => setAdminMode(true)}>
            Acesso administrativo
          </button>
        </section>
      </main>
    )
  }

  return (
    <div className="min-h-screen text-ink">
      <header className="border-b border-line bg-paper/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="flex items-center gap-3" href="#inicio" aria-label="Fragata do Saber, início" onClick={returnToHome}>
            <img className="h-12 w-[72px] rounded-md object-contain" src={publicAsset('logo.png')} alt="" />
            <span>
              <span className="block font-display text-base font-extrabold tracking-normal">Fragata do Saber</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Rumo à aprovação</span>
            </span>
          </a>
        </div>
      </header>

      <main id="inicio" className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <section className="relative overflow-hidden rounded-2xl bg-ink px-6 py-8 text-white shadow-xl shadow-ink/10 sm:px-10 sm:py-10" id="simulados">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-200">
                <span className="size-2 rounded-full bg-coral" /> Preparação para concursos navais
              </p>
              <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">Conhecimento é o seu melhor rumo.</h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">Treine com questões de provas anteriores, acompanhe sua evolução e chegue mais preparado para o próximo desafio.</p>
              <a className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#d7815e] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#c76e4c]" href="#questoes">
                Escolher concurso <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-center lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <img
                className="mx-auto w-full max-w-[220px] rounded-xl border border-white/10 shadow-lg shadow-black/20"
                src={publicAsset('logo.png')}
                alt="Logo Fragata do Saber"
              />
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

        {!selectedExamId ? (
         <section className="mt-10" id="questoes">
  <div className="mb-2">
    <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Comece por aqui</p>
    <h2 className="mt-1 font-display text-2xl font-extrabold">O que você vai estudar?</h2>
  </div>

  {examGroups.map((group) => (
    <div className="mt-8" key={group}>
      <h3 className="mb-3 font-display text-lg font-extrabold text-ink">{group}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {examChoices
          .filter((choice) => choice.group === group)
          .map((choice) => (
            <button
              className="group flex items-center gap-4 rounded-xl border border-line bg-white p-5 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5"
              key={choice.id}
              type="button"
              onClick={() => selectExam(choice.id)}
            >
              <span className="block min-w-0 flex-1">
                <span className="block font-display text-xl font-extrabold text-ink">{choice.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted">{choice.description}</span>
              </span>
              <img
                alt=""
                aria-hidden="true"
                className="size-24 shrink-0 object-contain mix-blend-multiply sm:size-28"
                src={publicAsset(choice.image)}
              />
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-sea-light text-lg font-bold text-sea transition group-hover:bg-sea group-hover:text-white"
              >
                →
              </span>
            </button>
          ))}
      </div>
    </div>
  ))}
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
              <div className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-3 sm:p-8" role="dialog" aria-modal="true" aria-label={openImageMap.map.title}>
                <div className="flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white">
                  <div className="flex items-center justify-between gap-3 border-b border-line p-4">
                    <h3 className="font-display font-extrabold">{openImageMap.map.title}</h3>
                    <button className="rounded-lg border border-line px-3 py-2 text-sm font-bold" type="button" onClick={() => setOpenImageMap(null)}>Fechar</button>
                  </div>
                  <ZoomableImage key={openImageMap.map.id} src={openImageMap.url} alt={openImageMap.map.title} />
                </div>
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
          <aside className="h-fit rounded-xl border border-line bg-white p-5" aria-label="Filtros de questões">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-base font-extrabold">Filtrar questões</h2>
            </div>
            <label className="mb-4 block rounded-xl border border-line bg-white p-4">
              <span className="mb-2 block text-xs font-bold text-ink">Buscar questões</span>
              <input
                className="block min-h-11 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-sea focus:ring-2 focus:ring-sea/10 disabled:cursor-not-allowed disabled:opacity-60"
                type="search"
                value={questionSearch}
                onChange={(event) => setQuestionSearch(event.target.value)}
                placeholder="Enunciado, alternativa, tópico, livro ou explicação"
                aria-label="Buscar questões por texto"
                disabled={simulationIds !== null}
              />
              {simulationIds !== null && <span className="mt-2 block text-xs text-muted">Saia do simulado para buscar na lista de questões.</span>}
            </label>

            <div className="space-y-4">
              <FilterSelect label="Tópico" value={topic} options={topics} onChange={changeTopic} />
              {selectedStudyMode === 'bibliography-questions' && <FilterSelect label="Apostila ou livro" value={bibliographySource} options={bibliographySources} onChange={setBibliographySource} />}
              {selectedStudyMode !== 'bibliography-questions' && <FilterSelect label="Ano da prova" value={year} options={years} onChange={changeYear} />}
            <div className="mt-5 space-y-2">
              <button
                className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white transition hover:bg-ink disabled:opacity-50"
                type="button"
                disabled={filteredQuestions.length === 0}
                onClick={startSimulation}
              >
                {simulationIds ? 'Gerar novo simulado' : `Gerar simulado (${Math.min(SIMULATION_SIZE, filteredQuestions.length)} questões)`}
              </button>
              {simulationIds && (
              <button
                  className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-bold transition hover:border-sea hover:text-sea"
                  type="button"
                  onClick={exitSimulation}
                >
                  Sair do simulado
              </button>
            )}
          </div>
            </div>
            <div className="mt-6 rounded-lg bg-sea-light p-4" id="desempenho">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-sea">Seu desempenho</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="font-display text-2xl font-extrabold">{correctCount}<span className="text-base font-semibold text-muted">/{Object.keys(answers).length}</span></p>
                <p className="pb-1 text-xs font-semibold text-muted">acertos</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-sea transition-all" style={{ width: `${Object.keys(answers).length ? (correctCount / Object.keys(answers).length) * 100 : 0}%` }} />
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Banco de questões</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold">{selectedStudyMode === 'bibliography-questions' ? 'Questões baseadas na bibliografia' : 'Continue sua preparação'}</h2>
              </div>
              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted ring-1 ring-line">{visibleQuestions.length} {simulationIds ? 'no simulado' : 'disponíveis'}</span>
            </div>

            <div className="space-y-4">
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
                        {simulationCorrectCount} de {visibleQuestions.length} questões corretas
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
              {!loading && !loadError && visibleQuestions.map((question) => {
                const isRevealed = revealed.includes(question.id)
                const selectedAnswer = answers[question.id]
                const hasAnswered = selectedAnswer !== undefined
                const answerIsCorrect = selectedAnswer === question.answer

                return (
                  <article className="rounded-xl border border-line bg-white p-5 sm:p-6" key={question.id}>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      {question.questionType === 'bibliography' ? (
                        <span className="rounded-md bg-sea-light px-2.5 py-1 text-sea">Bibliografia</span>
                      ) : (
                        <>
                          <span className="rounded-md bg-sea-light px-2.5 py-1 text-sea">{question.questionNumber === null ? 'Questão' : `Q${String(question.questionNumber).padStart(2, '0')}`}</span>
                          {question.year && <span className="text-muted">{question.year}</span>}
                        </>
                      )}
                      <span className="text-muted">{question.subject}</span>
                      {question.topic && <span className="rounded-full bg-sea-light px-2.5 py-1 text-sea">{question.topic}</span>}
                      {question.difficulty && <span className="rounded-full bg-[#fff2e8] px-2.5 py-1 text-[#9b5734]">{question.difficulty}</span>}
                      <button className={`ml-1 grid size-8 place-items-center rounded-md transition hover:bg-paper ${favorites.includes(question.id) ? 'text-coral' : 'text-muted'}`} type="button" aria-label={favorites.includes(question.id) ? 'Remover dos favoritos' : 'Salvar nos favoritos'} onClick={() => toggleInList(favorites, question.id, setFavorites)}>
                        {favorites.includes(question.id) ? '★' : '☆'}
                      </button>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-muted">{question.exam}</p>
                    {question.source && <p className="mt-2 text-sm text-muted" title={question.source}><strong>Referência:</strong> {conciseSource(question.source)}</p>}
                    <RichText className="mt-2 block whitespace-pre-wrap font-semibold leading-6 text-ink" text={question.prompt} />
                    {question.imageUrl && (
                      <img
                        className="mt-4 max-h-[28rem] w-full rounded-lg border border-line bg-white object-contain"
                        src={question.imageUrl}
                        alt={question.imageAlt || `Imagem da questão ${question.questionNumber}`}
                        loading="lazy"
                      />
                    )}
                    {question.promptAfterImage && (
                      <RichText className="mt-4 block whitespace-pre-wrap leading-6 text-ink" text={question.promptAfterImage} />
                    )}
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedAnswer === optionIndex
                        const isCorrect = question.answer === optionIndex
                        const optionStyle = hasAnswered && isCorrect
                          ? 'border-sea bg-sea-light text-sea'
                          : hasAnswered && isSelected
                            ? 'border-red-300 bg-red-50 text-red-700'
                            : 'border-line bg-white text-ink'

                        return (
                          <button className={`flex min-h-12 items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition ${optionStyle} ${hasAnswered ? 'cursor-default' : 'hover:border-sea/50 hover:bg-paper'}`} key={option} type="button" disabled={hasAnswered} aria-pressed={isSelected} onClick={() => setAnswers({ ...answers, [question.id]: optionIndex })}>
                            <span className="grid size-5 shrink-0 place-items-center rounded-full border border-current text-[10px] font-extrabold">{String.fromCharCode(65 + optionIndex)}</span>
                            <RichText className="whitespace-pre-wrap leading-5" text={option} />
                          </button>
                        )
                      })}
                    </div>
                    {isRevealed && <p className="mt-4 rounded-lg bg-sea-light/70 p-3 text-sm leading-6 text-ink"><strong className="text-sea">Comentário: </strong>{question.explanation}</p>}
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                      <span className={`text-xs font-bold ${hasAnswered ? answerIsCorrect ? 'text-sea' : 'text-red-700' : 'text-muted'}`}>{!hasAnswered ? 'Escolha uma alternativa' : answerIsCorrect ? 'Resposta correta' : 'Resposta incorreta'}</span>
                      <button className="text-sm font-bold text-sea transition hover:text-ink disabled:cursor-not-allowed disabled:text-muted/60" type="button" disabled={selectedAnswer === undefined && !isRevealed} onClick={() => toggleInList(revealed, question.id, setRevealed)}>
                        {isRevealed ? 'Ocultar gabarito' : 'Ver gabarito'}
                      </button>
                    </div>
                  </article>
                )
              })}
              {!loading && !loadError && visibleQuestions.length === 0 && <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">{questions.length === 0 ? 'Ainda não há questões publicadas no banco.' : 'Nenhuma questão encontrada com esses filtros.'}</p>}
            </div>
          </div>
        </section>
        </>
        )}
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-2 border-t border-line bg-white/70 px-5 py-6 text-xs text-muted"><span>Fragata do Saber <span className="px-1 text-coral">·</span> Preparação feita com propósito</span><button className="font-semibold transition hover:text-sea" type="button" onClick={() => setAdminMode(true)}>Painel administrativo</button></footer>
    </div>
  )
}

type FilterSelectProps = {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="block text-xs font-bold text-ink">
      {label}
      <select className="mt-2 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-muted outline-none transition focus:border-sea focus:ring-2 focus:ring-sea/10" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

export default App
