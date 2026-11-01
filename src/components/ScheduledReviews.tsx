import { useEffect, useRef, useState } from 'react'
import type { Question } from '../hooks/useQuestions'
import { loadReviewQuestion } from '../lib/reviewQuestions'
import type { DueReview, ReviewConfidence, ReviewSchedules } from '../lib/scheduledReviews'
import { conciseSource } from '../lib/utils'
import { QuestionCard } from './QuestionCard'

type AnswerResult = { selectedOption: number; correctOption: number; explanation: string | null }
type ScheduledReviewsProps = {
  today: string
  dueReviews: DueReview[]
  schedules: ReviewSchedules
  isOnline: boolean
  favorites: string[]
  setFavorites: (value: string[]) => void
  answerErrors: Record<string, string>
  onAnswer: (question: Question, option: number, attemptId: string) => Promise<AnswerResult | null>
  onRate: (questionId: string, confidence: ReviewConfidence) => void
  onClose: () => void
}

export function ScheduledReviews({ today, dueReviews, schedules, isOnline, favorites, setFavorites, answerErrors, onAnswer, onRate, onClose }: ScheduledReviewsProps) {
  const [examFilter, setExamFilter] = useState('Todos')
  const [subjectFilter, setSubjectFilter] = useState('Todos')
  const [visibleCount, setVisibleCount] = useState(20)
  const [activeReview, setActiveReview] = useState<DueReview | null>(null)
  const [question, setQuestion] = useState<Question | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const attemptId = useRef('')

  const exams = [...new Set([...dueReviews.map((review) => review.snapshot.exam), ...(examFilter === 'Todos' ? [] : [examFilter])])].sort()
  const subjects = [...new Set([
    ...dueReviews.filter((review) => examFilter === 'Todos' || review.snapshot.exam === examFilter).map((review) => review.snapshot.subject),
    ...(subjectFilter === 'Todos' ? [] : [subjectFilter]),
  ])].sort()
  const filtered = dueReviews.filter((review) =>
    (examFilter === 'Todos' || review.snapshot.exam === examFilter) && (subjectFilter === 'Todos' || review.snapshot.subject === subjectFilter))
  const overdue = dueReviews.filter((review) => review.schedule.dueDate < today).length

  useEffect(() => {
    if (!activeReview) return
    let active = true
    void loadReviewQuestion(activeReview.questionId, activeReview.snapshot, isOnline)
      .then((loaded) => {
        if (!active) return
        setError('')
        setQuestion((current) => current?.id === loaded.id && current.answer !== null
          ? { ...loaded, answer: current.answer, explanation: current.explanation }
          : loaded)
      })
      .catch((loadError: unknown) => {
        if (active) setError(loadError instanceof Error ? loadError.message : 'Não foi possível abrir esta revisão.')
      })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [activeReview, isOnline])

  function startReview(review: DueReview) {
    attemptId.current = crypto.randomUUID()
    setQuestion(null)
    setAnswers({})
    setRevealed([])
    setSubmitting(false)
    setLoading(true)
    setError('')
    setActiveReview(review)
  }

  function backToQueue() {
    attemptId.current = ''
    setActiveReview(null)
    setQuestion(null)
    setError('')
  }

  async function answerQuestion(_id: string, option: number) {
    if (!question || submitting) return
    const currentAttempt = attemptId.current
    setSubmitting(true)
    setError('')
    try {
      const result = await onAnswer(question, option, currentAttempt)
      if (!result || attemptId.current !== currentAttempt) return
      setAnswers({ [question.id]: result.selectedOption })
      setQuestion({ ...question, answer: result.correctOption, explanation: result.explanation })
    } catch {
      if (attemptId.current === currentAttempt) setError('Não foi possível corrigir esta resposta. Tente novamente.')
    } finally {
      if (attemptId.current === currentAttempt) setSubmitting(false)
    }
  }

  return (
    <section className="mt-8" aria-labelledby="scheduled-reviews-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Um pouco por dia</p><h2 id="scheduled-reviews-title" className="mt-1 font-display text-2xl font-extrabold">Revisões de hoje</h2></div>
        <button type="button" onClick={onClose} className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold hover:border-sea hover:text-sea">Voltar aos estudos</button>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">Responda novamente antes de consultar o gabarito. Depois, indique se sabia, ficou em dúvida ou chutou para ajustar a próxima revisão.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ['Para revisar', dueReviews.length],
          ['Atrasadas', overdue],
          ['Agendadas para depois', Object.values(schedules).filter((schedule) => schedule.dueDate > today).length],
        ].map(([label, value]) => <article key={label} className="rounded-xl border border-line bg-white p-4"><p className="text-xs font-bold uppercase text-muted">{label}</p><p className="mt-2 font-display text-2xl font-extrabold">{value}</p></article>)}
      </div>
      {activeReview ? (
        <div className="mt-5 space-y-4">
          <button type="button" onClick={backToQueue} className="text-sm font-bold text-sea underline">Voltar à fila de revisões</button>
          {loading && <p role="status" className="rounded-xl border border-line bg-white p-6 text-muted">Carregando revisão…</p>}
          {error && <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">{error}</p>}
          {!loading && question && <QuestionCard
            question={question} answerState={answers} isAnswerPending={submitting} answerError={answerErrors[question.id] ?? null}
            revealedState={revealed} favorites={favorites} setRevealed={setRevealed} setFavorites={setFavorites}
            submitAnswer={answerQuestion} conciseSource={conciseSource}
            reviewSchedule={schedules[question.id]} onReviewConfidence={(confidence) => onRate(question.id, confidence)}
          />}
          {question && answers[question.id] !== undefined && <button type="button" onClick={backToQueue} className="rounded-lg bg-sea px-5 py-3 text-sm font-extrabold text-white hover:bg-ink">Concluir revisão</button>}
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="text-xs font-bold text-muted">Concurso<select value={examFilter} onChange={(event) => { setExamFilter(event.target.value); setSubjectFilter('Todos'); setVisibleCount(20) }} className="mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink"><option>Todos</option>{exams.map((exam) => <option key={exam}>{exam}</option>)}</select></label>
            <label className="text-xs font-bold text-muted">Matéria<select value={subjectFilter} onChange={(event) => { setSubjectFilter(event.target.value); setVisibleCount(20) }} className="mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink"><option>Todos</option>{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
          </div>
          {!dueReviews.length ? <div className="mt-5 rounded-xl border border-dashed border-line bg-white p-8 text-center"><h3 className="font-display text-xl font-extrabold">Tudo em dia!</h3><p className="mt-2 text-sm leading-6 text-muted">Suas próximas revisões aparecerão aqui na data marcada. Responda questões e avalie sua confiança para alimentar a fila.</p></div>
            : !filtered.length ? <p className="mt-5 rounded-xl border border-line bg-white p-6 text-sm text-muted">Nenhuma revisão pendente neste filtro.</p>
              : <div className="mt-5 space-y-3">{filtered.slice(0, visibleCount).map((review) => <button key={review.questionId} type="button" onClick={() => startReview(review)} className="block w-full rounded-xl border border-line bg-white p-4 text-left transition hover:border-sea">
                <span className="block text-xs font-bold text-sea">{review.snapshot.exam} · {review.snapshot.subject}{review.snapshot.topic ? ` · ${review.snapshot.topic}` : ''}</span>
                <span className="mt-2 block text-sm leading-6 text-ink">{review.snapshot.prompt}</span>
                <span className="mt-2 block text-xs font-bold text-muted">{review.schedule.dueDate < today ? `Atrasada desde ${review.schedule.dueDate.split('-').reverse().join('/')}` : 'Para hoje'} · Revisar questão →</span>
              </button>)}{filtered.length > visibleCount && <button type="button" className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold text-sea" onClick={() => setVisibleCount((count) => count + 20)}>Mostrar mais revisões</button>}</div>}
        </>
      )}
    </section>
  )
}
