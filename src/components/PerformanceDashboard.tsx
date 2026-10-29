import { useState } from 'react'

type StudyQuestionSnapshot = {
  exam: string
  subject: string
  topic: string | null
  year: string
  questionType: 'exam' | 'bibliography'
  prompt: string
  correctOption: number
}

type CompletedSimulation = {
  id: string
  examId: string
  examTitle: string | null
  studyMode: 'exam-questions' | 'bibliography-questions'
  totalQuestions: number
  correctAnswers: number
  wrongAnswers: number
  score: number
  completedAt: string
}

type PerformanceDashboardProps = {
  snapshots: Record<string, StudyQuestionSnapshot>
  answers: Record<string, number>
  completedSimulations: CompletedSimulation[]
  onClose: () => void
  onReview: (questionId: string, question: StudyQuestionSnapshot) => void
}

export function PerformanceDashboard({
  snapshots,
  answers,
  completedSimulations,
  onClose,
  onReview,
}: PerformanceDashboardProps) {
  const [examFilter, setExamFilter] = useState('Todos')
  const [subjectFilter, setSubjectFilter] = useState('Todos')
  const allQuestions = Object.entries(snapshots)
  const exams = [...new Set(allQuestions.map(([, question]) => question.exam))].sort()
  const subjects = [...new Set(allQuestions
    .filter(([, question]) => examFilter === 'Todos' || question.exam === examFilter)
    .map(([, question]) => question.subject))].sort()
  const questions = allQuestions.filter(([, question]) =>
    (examFilter === 'Todos' || question.exam === examFilter) &&
    (subjectFilter === 'Todos' || question.subject === subjectFilter))
  const answered = questions.filter(([id]) => answers[id] !== undefined)
  const correct = answered.filter(([id, question]) => answers[id] === question.correctOption)
  const wrong = answered.filter(([id, question]) => answers[id] !== question.correctOption)
  const accuracy = answered.length ? Math.round((correct.length / answered.length) * 100) : 0

  function makeGroups(key: 'exam' | 'subject') {
    const groups = new Map<string, { answered: number; correct: number }>()
    for (const [id, question] of questions) {
      if (answers[id] === undefined) continue
      const label = question[key]
      const group = groups.get(label) ?? { answered: 0, correct: 0 }
      group.answered += 1
      if (answers[id] === question.correctOption) group.correct += 1
      groups.set(label, group)
    }
    return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0], 'pt-BR'))
  }

  const groupings = examFilter === 'Todos' ? makeGroups('exam') : makeGroups('subject')

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  return (
    <section className="mt-8" aria-labelledby="performance-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Seu progresso no aparelho</p>
          <h2 id="performance-title" className="mt-1 font-display text-2xl font-extrabold">Painel de desempenho</h2>
        </div>
        <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold hover:border-sea hover:text-sea" type="button" onClick={onClose}>Voltar aos concursos</button>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-bold text-muted">Concurso<select className="mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-semibold text-ink" value={examFilter} onChange={(event) => { setExamFilter(event.target.value); setSubjectFilter('Todos') }}><option>Todos</option>{exams.map((exam) => <option key={exam}>{exam}</option>)}</select></label>
        <label className="text-xs font-bold text-muted">Matéria<select className="mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-semibold text-ink" value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)}><option>Todos</option>{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Respondidas', value: answered.length },
          { label: 'Acertos', value: correct.length },
          { label: 'Erros', value: wrong.length },
          { label: 'Aproveitamento', value: `${accuracy}%` },
        ].map((item) => <article key={item.label} className="rounded-xl border border-line bg-white p-4"><p className="text-xs font-bold uppercase tracking-wide text-muted">{item.label}</p><p className="mt-2 font-display text-3xl font-extrabold text-ink">{item.value}</p></article>)}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <section className="rounded-xl border border-line bg-white p-4 sm:p-5"><h3 className="font-display text-lg font-extrabold">{examFilter === 'Todos' ? 'Por concurso' : 'Por matéria'}</h3>
          {groupings.length ? <div className="mt-3 space-y-3">{groupings.map(([label, values]) => { const percent = values.answered ? Math.round(values.correct / values.answered * 100) : 0; return <div key={label}><div className="flex justify-between gap-3 text-sm"><span className="font-semibold">{label}</span><span className="shrink-0 text-muted">{values.correct}/{values.answered} · {percent}%</span></div><div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper"><div className="h-full rounded-full bg-sea" style={{ width: `${percent}%` }} /></div></div> })}</div> : <p className="mt-3 text-sm leading-6 text-muted">Responda algumas questões para ver seu desempenho por grupo.</p>}
        </section>
        <section className="rounded-xl border border-line bg-white p-4 sm:p-5"><div className="flex items-center justify-between gap-2"><h3 className="font-display text-lg font-extrabold">Questões para revisar</h3><span className="rounded-full bg-[#fff2e8] px-2.5 py-1 text-xs font-bold text-[#9b5734]">{wrong.length} erradas</span></div>
          {wrong.length ? <div className="mt-3 max-h-80 space-y-2 overflow-y-auto">{wrong.slice(0, 30).map(([id, question]) => <button key={id} type="button" className="w-full rounded-lg border border-line p-3 text-left hover:border-sea" onClick={() => onReview(id, question)}><span className="block text-xs font-bold text-sea">{question.exam} · {question.subject}{question.topic ? ` · ${question.topic}` : ''}</span><span className="mt-1 block text-sm leading-5">{question.prompt}</span><span className="mt-1 block text-xs font-bold text-muted">Toque para revisar</span></button>)}</div> : <p className="mt-3 text-sm leading-6 text-muted">Nenhuma questão errada neste filtro. Questões respondidas são guardadas neste aparelho.</p>}
        </section>
      </div>
      <section className="mt-6 rounded-xl border border-line bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="font-display text-lg font-extrabold">Simulados concluídos</h3>
          <span className="rounded-full bg-sea-light px-2.5 py-1 text-xs font-bold text-sea">{completedSimulations.length}</span>
        </div>
        {completedSimulations.length ? (
          <div className="space-y-2">
            {completedSimulations.map((sim) => {
              const percent = sim.totalQuestions ? Math.round(sim.correctAnswers / sim.totalQuestions * 100) : 0
              return (
                <article key={sim.id} className="rounded-lg border border-line p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <div>
                      <p className="text-xs font-bold text-sea">{sim.examTitle ?? sim.examId}</p>
                      <p className="text-[10px] text-muted">{sim.studyMode === 'bibliography-questions' ? 'Bibliografia' : 'Prova'}{sim.totalQuestions ? ` · ${sim.totalQuestions} questões` : ''}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-extrabold text-ink">{sim.score.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                      <p className="text-[10px] font-bold text-muted">{percent}%</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 text-xs text-muted">
                    <span>{sim.correctAnswers} acertos</span>
                    <span>{sim.wrongAnswers} erros</span>
                    <span>{formatDate(sim.completedAt)}</span>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-muted">Nenhum simulado concluído ainda. Os simulados que você finalizar aparecerão aqui com a nota e a data.</p>
        )}
      </section>
    </section>
  )
}
