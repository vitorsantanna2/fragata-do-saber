import { useEffect, useRef, useState, type FormEvent } from 'react'
import { adminSupabase } from '../lib/adminSupabase'
import AdminMindMapsPanel from './AdminMindMapsPanel'

type QuestionType = 'exam' | 'bibliography'
type QuestionRecord = {
  id: string
  year: number | null
  question_number: number | null
  question_type: QuestionType
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  exam_color: string | null
  statement: string
  statement_after_image: string | null
  image_url: string | null
  image_alt: string | null
  options: string[]
  correct_option: number | null
  explanation: string | null
  source: string | null
  is_annulled: boolean
  is_published: boolean
  created_at: string
}

type QuestionDraft = Omit<QuestionRecord, 'id' | 'created_at' | 'year' | 'question_number' | 'correct_option' | 'options' | 'topic' | 'difficulty' | 'exam_color' | 'statement_after_image' | 'image_url' | 'image_alt' | 'explanation' | 'source'> & {
  id: string | null
  year: string
  question_number: string
  correct_option: number
  options: string[]
  topic: string
  difficulty: string
  exam_color: string
  statement_after_image: string
  image_url: string
  image_alt: string
  explanation: string
  source: string
}

const PAGE_SIZE = 30
const questionColumns = 'id, year, question_number, question_type, subject, topic, difficulty, exam, exam_color, statement, statement_after_image, image_url, image_alt, options, correct_option, explanation, source, is_annulled, is_published, created_at'

function emptyDraft(): QuestionDraft {
  return {
    id: null,
    year: '',
    question_number: '',
    question_type: 'exam',
    subject: 'Informática',
    topic: '',
    difficulty: '',
    exam: 'CP-T',
    exam_color: '',
    statement: '',
    statement_after_image: '',
    image_url: '',
    image_alt: '',
    options: ['', ''],
    correct_option: 0,
    explanation: '',
    source: '',
    is_annulled: false,
    is_published: false,
  }
}

function toDraft(question: QuestionRecord): QuestionDraft {
  return {
    ...question,
    year: question.year === null ? '' : String(question.year),
    question_number: question.question_number === null ? '' : String(question.question_number),
    topic: question.topic ?? '',
    difficulty: question.difficulty ?? '',
    exam_color: question.exam_color ?? '',
    statement_after_image: question.statement_after_image ?? '',
    image_url: question.image_url ?? '',
    image_alt: question.image_alt ?? '',
    options: question.options ?? ['', ''],
    correct_option: question.correct_option ?? 0,
    explanation: question.explanation ?? '',
    source: question.source ?? '',
  }
}

export default function AdminQuestionsPanel({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<'checking' | 'login' | 'denied' | 'admin'>('checking')
  const [contentTab, setContentTab] = useState<'questions' | 'mind-maps'>('questions')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [questions, setQuestions] = useState<QuestionRecord[]>([])
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [listError, setListError] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published'>('all')
  const [typeFilter, setTypeFilter] = useState<'all' | QuestionType>('all')
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [refreshToken, setRefreshToken] = useState(0)
  const [draft, setDraft] = useState<QuestionDraft | null>(null)
  const [notice, setNotice] = useState('')
  const imageFileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let active = true

    async function checkExistingSession() {
      if (!adminSupabase) {
        setErrorMessage('As variáveis do Supabase não estão configuradas.')
        setScreen('login')
        return
      }
      const { data, error } = await adminSupabase.auth.getSession()
      if (!active) return
      if (error) {
        setErrorMessage(error.message)
        setScreen('login')
      } else if (!data.session) {
        setScreen('login')
      } else {
        await verifyAdminAccess(active)
      }
    }

    async function verifyAdminAccess(isActive = true) {
      if (!adminSupabase) return
      const { data, error } = await adminSupabase.rpc('is_admin')
      if (!active || !isActive) return
      if (error) {
        setErrorMessage(`Não foi possível verificar o perfil administrativo: ${error.message}`)
        setScreen('denied')
      } else if (!data) {
        setErrorMessage('Esta conta não está cadastrada como administradora.')
        setScreen('denied')
      } else {
        setErrorMessage('')
        setScreen('admin')
      }
    }

    void checkExistingSession()
    return () => { active = false }
  }, [])

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSearchTerm(searchInput.trim())
      setPage(0)
    }, 250)
    return () => window.clearTimeout(timeout)
  }, [searchInput])

  useEffect(() => {
    if (screen !== 'admin' || !adminSupabase) return
    const client = adminSupabase
    let active = true
    setLoadingQuestions(true)
    setListError('')

    async function fetchQuestions() {
      let query = client
        .from('questions')
        .select(questionColumns, { count: 'exact' })
        .order('created_at', { ascending: false })

      if (statusFilter === 'draft') query = query.eq('is_published', false)
      if (statusFilter === 'published') query = query.eq('is_published', true)
      if (typeFilter !== 'all') query = query.eq('question_type', typeFilter)
      if (searchTerm) query = query.ilike('statement', `%${searchTerm}%`)

      const from = page * PAGE_SIZE
      const { data, count, error } = await query.range(from, from + PAGE_SIZE - 1)
      if (!active) return
      if (error) {
        setListError(`Não foi possível carregar as questões: ${error.message}`)
      } else {
        setQuestions((data ?? []) as QuestionRecord[])
        setTotalCount(count ?? 0)
      }
      setLoadingQuestions(false)
    }

    void fetchQuestions()
    return () => { active = false }
  }, [screen, statusFilter, typeFilter, searchTerm, page, refreshToken])

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!adminSupabase) return
    setBusy(true)
    setErrorMessage('')
    const { error } = await adminSupabase.auth.signInWithPassword({ email: email.trim(), password })
    if (error) {
      setErrorMessage(`Não foi possível entrar: ${error.message}`)
      setBusy(false)
      return
    }
    const { data, error: adminError } = await adminSupabase.rpc('is_admin')
    if (adminError) {
      setErrorMessage(`Não foi possível verificar o perfil: ${adminError.message}`)
      setScreen('denied')
    } else if (!data) {
      setErrorMessage('Esta conta não está cadastrada como administradora.')
      setScreen('denied')
    } else {
      setScreen('admin')
      setPassword('')
    }
    setBusy(false)
  }

  async function handleSignOut() {
    await adminSupabase?.auth.signOut()
    setQuestions([])
    setDraft(null)
    setErrorMessage('')
    setScreen('login')
  }

  function openQuestion(question: QuestionRecord) {
    setNotice('')
    setDraft(toDraft(question))
  }

  function changeDraft<K extends keyof QuestionDraft>(key: K, value: QuestionDraft[K]) {
    setDraft((current) => current ? { ...current, [key]: value } : current)
  }

  async function uploadQuestionImage(file: File) {
    if (!adminSupabase || !draft) return
    const extensionByType: Record<string, string> = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp',
    }
    const extension = extensionByType[file.type]
    if (!extension) {
      setListError('Escolha uma imagem PNG, JPG ou WebP.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setListError('A imagem deve ter no máximo 10 MB.')
      return
    }

    setBusy(true)
    setListError('')
    setNotice('')
    const storagePath = `questions/${crypto.randomUUID()}.${extension}`
    try {
      const { error } = await adminSupabase.storage
        .from('question-images')
        .upload(storagePath, file, { contentType: file.type, cacheControl: '3600', upsert: false })
      if (error) throw error

      const { data } = adminSupabase.storage.from('question-images').getPublicUrl(storagePath)
      changeDraft('image_url', data.publicUrl)
      if (!draft.image_alt.trim()) changeDraft('image_alt', file.name.replace(/\.[^.]+$/, ''))
      setNotice('Imagem enviada ao Storage. Salve a questão para gravar a URL no banco.')
    } catch (error) {
      setListError(`Não foi possível enviar a imagem: ${error instanceof Error ? error.message : 'verifique sua conexão e as permissões do Storage.'}`)
    } finally {
      setBusy(false)
    }
  }

  async function saveDraft(action: 'keep' | 'draft' | 'publish') {
    if (!adminSupabase || !draft) return
    setBusy(true)
    setListError('')
    setNotice('')
    try {
      const options = draft.options.map((option) => option.trim())
      if (!draft.statement.trim()) throw new Error('Preencha o enunciado da questão.')
      if (options.length < 2 || options.length > 5 || options.some((option) => !option)) {
        throw new Error('Informe de 2 a 5 alternativas e preencha todas.')
      }
      if (!Number.isInteger(draft.correct_option) || draft.correct_option < 0 || draft.correct_option >= options.length) {
        throw new Error('Selecione a alternativa correta.')
      }

      const isPublished = action === 'publish' ? true : action === 'draft' ? false : draft.is_published
      if (isPublished && draft.is_annulled) throw new Error('Uma questão anulada não pode ser publicada.')
      if (isPublished && draft.question_type === 'bibliography' && !draft.source.trim()) {
        throw new Error('Informe a referência bibliográfica antes de publicar.')
      }

      const payload = {
        year: draft.year.trim() ? Number(draft.year) : null,
        question_number: draft.question_number.trim() ? Number(draft.question_number) : null,
        question_type: draft.question_type,
        subject: draft.subject.trim(),
        topic: draft.topic.trim() || null,
        difficulty: draft.difficulty.trim() || null,
        exam: draft.exam.trim(),
        exam_color: draft.exam_color.trim() || null,
        statement: draft.statement.trim(),
        statement_after_image: draft.statement_after_image.trim() || null,
        image_url: draft.image_url.trim() || null,
        image_alt: draft.image_alt.trim() || null,
        options,
        correct_option: draft.correct_option,
        explanation: draft.explanation.trim() || null,
        source: draft.source.trim() || null,
        is_annulled: draft.is_annulled,
        is_published: isPublished,
      }
      if (!payload.subject || !payload.exam) throw new Error('Preencha concurso e matéria.')
      if (payload.year !== null && (!Number.isInteger(payload.year) || payload.year < 1900 || payload.year > 2200)) {
        throw new Error('O ano precisa ser válido ou ficar vazio.')
      }
      if (payload.question_number !== null && (!Number.isInteger(payload.question_number) || payload.question_number < 1)) {
        throw new Error('O número da questão precisa ser positivo ou ficar vazio.')
      }

      let result
      if (draft.id) {
        result = await adminSupabase.from('questions').update(payload).eq('id', draft.id).select(questionColumns).single()
      } else {
        result = await adminSupabase.from('questions').insert(payload).select(questionColumns).single()
      }
      if (result.error) throw result.error

      const saved = result.data as QuestionRecord
      setDraft(toDraft(saved))
      setNotice(saved.is_published ? 'Questão salva e publicada.' : 'Rascunho salvo. A questão ainda não aparece para os estudantes.')
      setRefreshToken((value) => value + 1)
    } catch (error) {
      setListError(error instanceof Error ? error.message : 'Não foi possível salvar a questão.')
    } finally {
      setBusy(false)
    }
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Fragata do Saber</p>
            <h1 className="font-display text-xl font-extrabold">Gerenciamento de questões</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {screen === 'admin' && <><button className={`rounded-lg border px-4 py-2 text-sm font-bold ${contentTab === 'questions' ? 'border-sea bg-sea text-white' : 'border-line hover:border-sea hover:text-sea'}`} type="button" onClick={() => setContentTab('questions')}>Questões</button><button className={`rounded-lg border px-4 py-2 text-sm font-bold ${contentTab === 'mind-maps' ? 'border-sea bg-sea text-white' : 'border-line hover:border-sea hover:text-sea'}`} type="button" onClick={() => setContentTab('mind-maps')}>Mapas mentais</button></>}
            {screen === 'admin' && <button className="rounded-lg border border-line px-4 py-2 text-sm font-bold hover:border-sea hover:text-sea" type="button" onClick={() => void handleSignOut()}>Sair do painel</button>}
            <button className="rounded-lg border border-line px-4 py-2 text-sm font-bold hover:border-sea hover:text-sea" type="button" onClick={onClose}>Voltar ao app</button>
          </div>
        </div>
      </header>

      {screen === 'checking' ? (
        <p className="mx-auto mt-12 max-w-md rounded-xl border border-line bg-white p-6 text-center text-sm text-muted">Verificando acesso administrativo…</p>
      ) : screen === 'login' ? (
        <section className="mx-auto mt-10 w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
          <h2 className="font-display text-xl font-extrabold">Entrar como administrador</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Use a conta administrativa cadastrada no Supabase.</p>
          <form className="mt-6 space-y-4" onSubmit={(event) => void handleLogin(event)}>
            <label className="block text-sm font-bold" htmlFor="admin-email">E-mail
              <input id="admin-email" className="mt-2 block w-full rounded-lg border border-line px-3 py-3 font-medium outline-none focus:border-sea focus:ring-2 focus:ring-sea/10" autoComplete="username" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label className="block text-sm font-bold" htmlFor="admin-password">Senha
              <input id="admin-password" className="mt-2 block w-full rounded-lg border border-line px-3 py-3 font-medium outline-none focus:border-sea focus:ring-2 focus:ring-sea/10" autoComplete="current-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>
            {errorMessage && <p className="text-sm leading-5 text-red-700" role="alert">{errorMessage}</p>}
            <button className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white hover:bg-ink disabled:opacity-60" type="submit" disabled={busy || !adminSupabase}>{busy ? 'Verificando…' : 'Entrar'}</button>
          </form>
        </section>
      ) : screen === 'denied' ? (
        <section className="mx-auto mt-10 w-full max-w-md rounded-2xl border border-line bg-white p-6 text-center shadow-xl shadow-ink/5 sm:p-8">
          <h2 className="font-display text-xl font-extrabold">Acesso não autorizado</h2>
          <p className="mt-3 text-sm leading-6 text-red-700" role="alert">{errorMessage}</p>
          <button className="mt-5 rounded-lg border border-line px-4 py-2 text-sm font-bold hover:border-sea hover:text-sea" type="button" onClick={() => void handleSignOut()}>Usar outra conta</button>
        </section>
      ) : contentTab === 'mind-maps' ? (
        <AdminMindMapsPanel />
      ) : (
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.6fr)]">
          <section className="h-fit rounded-xl border border-line bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-extrabold">Questões</h2>
              <button className="rounded-lg bg-sea px-3 py-2 text-xs font-extrabold text-white hover:bg-ink" type="button" onClick={() => { setDraft(emptyDraft()); setNotice(''); setListError('') }}>Nova questão</button>
            </div>
            <label className="mt-4 block text-xs font-bold">Buscar no enunciado
              <input className="mt-2 block w-full rounded-lg border border-line px-3 py-2.5 text-sm font-medium outline-none focus:border-sea focus:ring-2 focus:ring-sea/10" type="search" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Digite um trecho…" />
            </label>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <select className="rounded-lg border border-line bg-white px-2 py-2 text-xs font-semibold" value={statusFilter} onChange={(event) => { setStatusFilter(event.target.value as typeof statusFilter); setPage(0) }} aria-label="Filtrar por publicação">
                <option value="all">Todos os status</option><option value="draft">Rascunhos</option><option value="published">Publicadas</option>
              </select>
              <select className="rounded-lg border border-line bg-white px-2 py-2 text-xs font-semibold" value={typeFilter} onChange={(event) => { setTypeFilter(event.target.value as typeof typeFilter); setPage(0) }} aria-label="Filtrar por tipo">
                <option value="all">Todos os tipos</option><option value="exam">Prova</option><option value="bibliography">Bibliografia</option>
              </select>
            </div>
            <p className="mt-3 text-xs text-muted">{totalCount} questões · página {page + 1} de {totalPages}</p>
            {listError && <p className="mt-3 rounded-lg bg-red-50 p-3 text-xs leading-5 text-red-800" role="alert">{listError}</p>}
            <div className="mt-3 max-h-[55vh] space-y-2 overflow-y-auto pr-1">
              {loadingQuestions && <p className="p-3 text-sm text-muted">Carregando…</p>}
              {!loadingQuestions && questions.map((question) => (
                <button key={question.id} className={`w-full rounded-lg border p-3 text-left transition ${draft?.id === question.id ? 'border-sea bg-sea-light' : 'border-line hover:border-sea'}`} type="button" onClick={() => openQuestion(question)}>
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-sea">{question.question_type === 'exam' ? 'Prova' : 'Bibliografia'}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${question.is_published ? 'bg-sea-light text-sea' : 'bg-amber-50 text-amber-800'}`}>{question.is_published ? 'Publicada' : 'Rascunho'}</span>
                  </span>
                  <span className="mt-1 block line-clamp-3 text-sm font-semibold leading-5">{question.statement || 'Sem enunciado'}</span>
                  <span className="mt-2 block text-[11px] text-muted">{question.subject} · {question.exam}{question.source ? ` · ${question.source}` : ''}</span>
                </button>
              ))}
              {!loadingQuestions && questions.length === 0 && !listError && <p className="rounded-lg border border-dashed border-line p-5 text-center text-sm text-muted">Nenhuma questão encontrada.</p>}
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold disabled:opacity-40" type="button" disabled={page === 0 || loadingQuestions} onClick={() => setPage((current) => current - 1)}>Anterior</button>
              <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold disabled:opacity-40" type="button" disabled={page + 1 >= totalPages || loadingQuestions} onClick={() => setPage((current) => current + 1)}>Próxima</button>
            </div>
          </section>

          <section className="rounded-xl border border-line bg-white p-4 sm:p-6">
            {!draft ? (
              <div className="grid min-h-72 place-items-center text-center text-sm text-muted">Selecione uma questão para revisar ou crie uma nova.</div>
            ) : (
              <>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">{draft.id ? 'Revisão e edição' : 'Nova questão'}</p>
                    <h2 className="mt-1 font-display text-xl font-extrabold">{draft.is_published ? 'Questão publicada' : 'Rascunho'}</h2>
                  </div>
                  {draft.id && <button className="text-sm font-bold text-red-700 hover:underline" type="button" onClick={() => setDraft(null)}>Fechar edição</button>}
                </div>

                {notice && <p className="mb-4 rounded-lg bg-sea-light p-3 text-sm font-semibold text-sea" role="status">{notice}</p>}
                {listError && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">{listError}</p>}

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Concurso" value={draft.exam} onChange={(value) => changeDraft('exam', value)} required />
                  <Field label="Matéria" value={draft.subject} onChange={(value) => changeDraft('subject', value)} required />
                  <label className="block text-xs font-bold">Tipo
                    <select className="mt-2 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium" value={draft.question_type} onChange={(event) => changeDraft('question_type', event.target.value as QuestionType)}>
                      <option value="exam">Questão de prova</option><option value="bibliography">Apostila ou bibliografia</option>
                    </select>
                  </label>
                  <Field label="Tópico" value={draft.topic} onChange={(value) => changeDraft('topic', value)} />
                  <Field label="Ano (opcional)" type="number" value={draft.year} onChange={(value) => changeDraft('year', value)} />
                  <Field label="Número (opcional)" type="number" value={draft.question_number} onChange={(value) => changeDraft('question_number', value)} />
                  <Field label="Dificuldade" value={draft.difficulty} onChange={(value) => changeDraft('difficulty', value)} />
                  <Field label="Cor da prova" value={draft.exam_color} onChange={(value) => changeDraft('exam_color', value)} />
                </div>

                <TextArea label="Enunciado" value={draft.statement} onChange={(value) => changeDraft('statement', value)} rows={5} required />
                <TextArea label="Texto após imagem (opcional)" value={draft.statement_after_image} onChange={(value) => changeDraft('statement_after_image', value)} rows={2} />
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <Field label="URL da imagem (opcional)" value={draft.image_url} onChange={(value) => changeDraft('image_url', value)} />
                    <input ref={imageFileInput} className="sr-only" type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => {
                      const file = event.currentTarget.files?.[0]
                      event.currentTarget.value = ''
                      if (file) void uploadQuestionImage(file)
                    }} />
                    <button className="mt-2 rounded-lg border border-line px-3 py-2 text-xs font-bold hover:border-sea hover:text-sea disabled:opacity-50" type="button" disabled={busy} onClick={() => imageFileInput.current?.click()}>
                      {busy ? 'Enviando…' : 'Selecionar e enviar imagem'}
                    </button>
                  </div>
                  <Field label="Descrição da imagem" value={draft.image_alt} onChange={(value) => changeDraft('image_alt', value)} />
                </div>
                {draft.image_url && <img className="mt-3 max-h-64 max-w-full rounded-lg border border-line object-contain" src={draft.image_url} alt={draft.image_alt || 'Prévia da imagem da questão'} />}

                <fieldset className="mt-5 rounded-xl border border-line p-4">
                  <legend className="px-1 text-sm font-extrabold">Alternativas e gabarito</legend>
                  <div className="space-y-2">
                    {draft.options.map((option, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="mt-3 grid size-7 shrink-0 place-items-center rounded-full bg-paper text-xs font-extrabold">{String.fromCharCode(65 + index)}</span>
                        <textarea className="min-h-11 flex-1 rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-sea" rows={2} value={option} onChange={(event) => changeDraft('options', draft.options.map((current, optionIndex) => optionIndex === index ? event.target.value : current))} aria-label={`Alternativa ${String.fromCharCode(65 + index)}`} />
                        {draft.options.length > 2 && <button className="mt-2 rounded px-2 py-1 text-xs font-bold text-red-700 hover:bg-red-50" type="button" onClick={() => { const options = draft.options.filter((_, optionIndex) => optionIndex !== index); changeDraft('options', options); if (draft.correct_option >= options.length) changeDraft('correct_option', options.length - 1); else if (draft.correct_option > index) changeDraft('correct_option', draft.correct_option - 1) }}>Remover</button>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap items-end gap-3">
                    {draft.options.length < 5 && <button className="rounded-lg border border-line px-3 py-2 text-xs font-bold hover:border-sea hover:text-sea" type="button" onClick={() => changeDraft('options', [...draft.options, ''])}>Adicionar alternativa</button>}
                    <label className="text-xs font-bold">Resposta correta
                      <select className="ml-2 rounded-lg border border-line bg-white px-3 py-2 text-sm" value={draft.correct_option} onChange={(event) => changeDraft('correct_option', Number(event.target.value))}>
                        {draft.options.map((_, index) => <option key={index} value={index}>{String.fromCharCode(65 + index)}</option>)}
                      </select>
                    </label>
                  </div>
                </fieldset>

                <TextArea label="Comentário do gabarito" value={draft.explanation} onChange={(value) => changeDraft('explanation', value)} rows={3} />
                <TextArea label={draft.question_type === 'bibliography' ? 'Referência bibliográfica (obrigatória para publicar)' : 'Fonte / referência (opcional)'} value={draft.source} onChange={(value) => changeDraft('source', value)} rows={2} />

                <label className="mt-4 flex items-center gap-2 text-sm font-semibold text-red-800">
                  <input type="checkbox" checked={draft.is_annulled} onChange={(event) => changeDraft('is_annulled', event.target.checked)} />
                  Questão anulada
                </label>

                <section className="mt-5 rounded-xl border border-line bg-paper p-4" aria-label="Prévia da questão">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-sea">Prévia</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6">{draft.statement || 'O enunciado aparecerá aqui.'}</p>
                  <ol className="mt-3 space-y-2 text-sm" type="A">
                    {draft.options.map((option, index) => <li key={index} className={draft.correct_option === index ? 'font-bold text-sea' : 'text-muted'}>{option || `Alternativa ${String.fromCharCode(65 + index)}`}{draft.correct_option === index ? ' ✓' : ''}</li>)}
                  </ol>
                  {draft.source && <p className="mt-3 text-xs text-muted">Referência: {draft.source}</p>}
                </section>

                <div className="mt-5 flex flex-wrap justify-end gap-2 border-t border-line pt-4">
                  <button className="rounded-lg border border-line px-4 py-2.5 text-sm font-bold hover:border-sea hover:text-sea disabled:opacity-50" type="button" disabled={busy} onClick={() => void saveDraft('draft')}>Salvar sem publicar</button>
                  {draft.is_published && <button className="rounded-lg border border-line px-4 py-2.5 text-sm font-bold hover:border-sea hover:text-sea disabled:opacity-50" type="button" disabled={busy} onClick={() => void saveDraft('keep')}>Salvar mantendo publicação</button>}
                  <button className="rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white hover:bg-ink disabled:opacity-50" type="button" disabled={busy} onClick={() => void saveDraft('publish')}>{busy ? 'Salvando…' : draft.is_published ? 'Salvar e publicar' : 'Publicar questão'}</button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  )
}

function Field({ label, value, onChange, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block text-xs font-bold">{label}
      <input className="mt-2 block w-full rounded-lg border border-line px-3 py-2.5 text-sm font-medium outline-none focus:border-sea focus:ring-2 focus:ring-sea/10" type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} />
    </label>
  )
}

function TextArea({ label, value, onChange, rows, required = false }: { label: string; value: string; onChange: (value: string) => void; rows: number; required?: boolean }) {
  return (
    <label className="mt-4 block text-xs font-bold">{label}
      <textarea className="mt-2 block w-full rounded-lg border border-line px-3 py-2.5 text-sm font-medium leading-6 outline-none focus:border-sea focus:ring-2 focus:ring-sea/10" rows={rows} value={value} onChange={(event) => onChange(event.target.value)} required={required} />
    </label>
  )
}
