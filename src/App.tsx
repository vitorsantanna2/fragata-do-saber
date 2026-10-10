import { Fragment, useEffect, useMemo, useState, type FormEvent } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { supabase } from './lib/supabase'

type Question = {
  id: string
  year: string
  questionNumber: number
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
}

type QuestionRow = {
  id: string
  year: number
  question_number: number
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  statement: string
  statement_after_image: string | null
  image_url: string | null
  image_alt: string | null
  options: string[]
  correct_option: number
  explanation: string | null
}

const examChoices = [
  {
    id: 'ea-hsg',
    title: 'EA-HSG',
    description: 'Questões e provas anteriores do concurso EA-HSG.',
    exam: 'EA-HSG',
    subject: null,
  },
  {
    id: 'cp-t-informatica',
    title: 'Quadro Técnico - Informática',
    description: 'Conhecimentos profissionais de Informática do Quadro Técnico.',
    exam: 'CP-T',
    subject: 'Informática',
  },
]

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

function App() {
  const [accessState, setAccessState] = useState<'checking' | 'locked' | 'granted'>('checking')
  const [accessCode, setAccessCode] = useState('')
  const [accessError, setAccessError] = useState('')
  const [checkingCode, setCheckingCode] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null)
  const [topic, setTopic] = useState('Todos')
  const [year, setYear] = useState('Todos')
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    let active = true

    async function checkAccess() {
      if (!supabase) {
        setAccessError('Configure as variáveis do Supabase no arquivo .env.local.')
        setAccessState('locked')
        return
      }

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

      if (!active) return

      if (sessionError) {
        setAccessError('Não foi possível verificar sua sessão. Tente recarregar a página.')
        setAccessState('locked')
        return
      }

      if (!sessionData.session) {
        setAccessState('locked')
        return
      }

      const { data, error } = await supabase.rpc('has_active_access')

      if (!active) return

      if (error) {
        setAccessError('Não foi possível validar o acesso. Confira se o script de acesso foi executado no Supabase e se o login anônimo está habilitado.')
        setAccessState('locked')
        return
      }

      setAccessState(data ? 'granted' : 'locked')
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

      setLoading(true)
      setLoadError('')

      if (!supabase) {
        setLoadError('Configure VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY no arquivo .env.local.')
        setLoading(false)
        return
      }

      let query = supabase
        .from('questions')
        .select('id, year, question_number, subject, topic, difficulty, exam, statement, statement_after_image, image_url, image_alt, options, correct_option, explanation')
        .eq('is_published', true)
        .eq('exam', selectedExam.exam)

      if (selectedExam.subject) {
        query = query.eq('subject', selectedExam.subject)
      }

      const { data, error } = await query.order('year', { ascending: false })

      if (!active) return

      if (error) {
        setLoadError(`Não foi possível carregar as questões. Confira se a tabela public.questions e a política de leitura estão configuradas. (${error.message})`)
      } else {
        setQuestions((data as QuestionRow[]).map((row) => ({
          id: row.id,
          year: String(row.year),
          questionNumber: row.question_number,
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
        })))
      }

      setLoading(false)
    }

    void loadQuestions()

    return () => {
      active = false
    }
  }, [selectedExamId])

  const topics = useMemo(
    () => ['Todos', ...new Set(questions.flatMap((question) => question.topic ? [question.topic] : []))],
    [questions],
  )
  const years = useMemo(
    () => ['Todos', ...new Set(questions.map((question) => question.year))],
    [questions],
  )

  const filteredQuestions = useMemo(
    () =>
      questions.filter(
        (question) =>
          (topic === 'Todos' || question.topic === topic) &&
          (year === 'Todos' || question.year === year),
      ),
    [questions, topic, year],
  )

  const simulationAnsweredCount = filteredQuestions.filter(
    (question) => answers[question.id] !== undefined,
  ).length
  const simulationCorrectCount = filteredQuestions.filter(
    (question) => answers[question.id] === question.answer,
  ).length
  const simulationComplete =
    filteredQuestions.length > 0 && simulationAnsweredCount === filteredQuestions.length
  const pointsPerQuestion = filteredQuestions.length ? 100 / filteredQuestions.length : 0
  const simulationScore = simulationComplete
    ? (simulationCorrectCount / filteredQuestions.length) * 100
    : 0

  const correctCount = questions.filter(
    (question) => answers[question.id] === question.answer,
  ).length

  const examCount = new Set(questions.map((question) => question.exam)).size
  const topicCount = new Set(questions.map((question) => question.topic).filter(Boolean)).size

  function selectExam(examId: string) {
    setQuestions([])
    setAnswers({})
    setRevealed([])
    setTopic('Todos')
    setYear('Todos')
    setSelectedExamId(examId)
  }

  function returnToHome() {
    setQuestions([])
    setAnswers({})
    setRevealed([])
    setTopic('Todos')
    setYear('Todos')
    setLoadError('')
    setSelectedExamId(null)
  }

  function toggleInList(list: string[], id: string, update: (value: string[]) => void) {
    update(list.includes(id) ? list.filter((item) => item !== id) : [...list, id])
  }

  if (accessState === 'checking') {
    return (
      <main className="grid min-h-screen place-items-center bg-paper px-5 text-sm font-semibold text-muted">
        Verificando acesso...
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
                    <div><p className="font-display text-2xl font-extrabold sm:text-3xl">02</p><p className="mt-1 text-xs text-white/60">concursos</p></div>
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
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Comece por aqui</p>
              <h2 className="mt-1 font-display text-2xl font-extrabold">Qual concurso você vai estudar?</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {examChoices.map((choice) => (
                <button
                  className="group relative flex min-h-40 items-center justify-between overflow-hidden rounded-xl border border-line bg-white p-6 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5"
                  key={choice.id}
                  type="button"
                  onClick={() => selectExam(choice.id)}
                >
                  {choice.id === 'ea-hsg' && (
                    <img
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-contain object-center"
                      src={publicAsset('hsg-emblema.png')}
                    />
                  )}
                  {choice.id === 'cp-t-informatica' && (
                    <img
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-contain object-center"
                      src={publicAsset('qt-emblema.png')}
                    />
                  )}
                  <span className="relative z-10 block max-w-[62%]">
                    <span className="block font-display text-xl font-extrabold text-ink">{choice.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{choice.description}</span>
                  </span>
                  <span aria-hidden="true" className="relative z-10 ml-4 grid size-10 shrink-0 place-items-center rounded-full bg-sea-light text-lg font-bold text-sea transition group-hover:bg-sea group-hover:text-white">→</span>
                </button>
              ))}
            </div>
          </section>
        ) : (
        <>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-extrabold">{examChoices.find((choice) => choice.id === selectedExamId)?.title}</h2>
          <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={returnToHome}>
            Trocar concurso
          </button>
        </div>
        <section className="mt-4 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]" id="questoes">
          <aside className="h-fit rounded-xl border border-line bg-white p-5" aria-label="Filtros de questões">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-base font-extrabold">Filtrar questões</h2>
            </div>
            <div className="space-y-4">
              <FilterSelect label="Tópico" value={topic} options={topics} onChange={setTopic} />
              <FilterSelect label="Ano da prova" value={year} options={years} onChange={setYear} />
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
                <h2 className="mt-1 font-display text-2xl font-extrabold">Continue sua preparação</h2>
              </div>
              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted ring-1 ring-line">{filteredQuestions.length} disponíveis</span>
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
              {!loading && loadError && <p className="rounded-xl border border-red-200 bg-white p-5 text-sm leading-6 text-red-800">{loadError}</p>}
              {!loading && !loadError && filteredQuestions.map((question) => {
                const isRevealed = revealed.includes(question.id)
                const selectedAnswer = answers[question.id]
                const hasAnswered = selectedAnswer !== undefined
                const answerIsCorrect = selectedAnswer === question.answer

                return (
                  <article className="rounded-xl border border-line bg-white p-5 sm:p-6" key={question.id}>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="rounded-md bg-sea-light px-2.5 py-1 text-sea">Q{String(question.questionNumber).padStart(2, '0')}</span>
                      <span className="text-muted">{question.year}</span><span className="text-line">/</span>
                      <span className="text-muted">{question.subject}</span>
                      {question.topic && <span className="rounded-full bg-sea-light px-2.5 py-1 text-sea">{question.topic}</span>}
                      {question.difficulty && <span className="rounded-full bg-[#fff2e8] px-2.5 py-1 text-[#9b5734]">{question.difficulty}</span>}
                      <span className="ml-auto rounded-full bg-paper px-2.5 py-1 text-muted">{question.year}</span>
                      <button className={`ml-1 grid size-8 place-items-center rounded-md transition hover:bg-paper ${favorites.includes(question.id) ? 'text-coral' : 'text-muted'}`} type="button" aria-label={favorites.includes(question.id) ? 'Remover dos favoritos' : 'Salvar nos favoritos'} onClick={() => toggleInList(favorites, question.id, setFavorites)}>
                        {favorites.includes(question.id) ? '★' : '☆'}
                      </button>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-muted">{question.exam}</p>
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
              {!loading && !loadError && filteredQuestions.length === 0 && <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">{questions.length === 0 ? 'Ainda não há questões publicadas no banco.' : 'Nenhuma questão encontrada com esses filtros.'}</p>}
            </div>
          </div>
        </section>
        </>
        )}
      </main>
      <footer className="border-t border-line bg-white/70 px-5 py-6 text-center text-xs text-muted">Fragata do Saber <span className="px-1 text-coral">·</span> Preparação feita com propósito</footer>
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
