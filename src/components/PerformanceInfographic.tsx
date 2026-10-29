import { useMemo, useState } from 'react'

type StudyQuestionSnapshot = {
  exam: string
  subject: string
  topic: string | null
  year: string
  questionType: 'exam' | 'bibliography'
  prompt: string
  correctOption: number
}

type PerformanceInfographicProps = {
  snapshots: Record<string, StudyQuestionSnapshot>
  answers: Record<string, number>
}

function PerformanceInfographic({
  snapshots,
  answers,
}: PerformanceInfographicProps) {
  const allQuestions = Object.entries(snapshots)
  const [groupBy, setGroupBy] = useState<'subject' | 'topic'>('subject')

  const groups = useMemo(() => {
    const map = new Map<string, { answered: number; correct: number; wrong: number }>()
    for (const [id, question] of allQuestions) {
      if (answers[id] === undefined) continue
      const label = groupBy === 'subject' ? question.subject : (question.topic ?? 'Sem tópico')
      const g = map.get(label) ?? { answered: 0, correct: 0, wrong: 0 }
      g.answered += 1
      if (answers[id] === question.correctOption) g.correct += 1
      else g.wrong += 1
      map.set(label, g)
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], 'pt-BR'))
  }, [allQuestions, answers, groupBy])

  const maxCorrect = Math.max(0, ...groups.map(([, g]) => g.correct))
  const maxWrong = Math.max(0, ...groups.map(([, g]) => g.wrong))
  const maxBar = Math.max(maxCorrect, maxWrong, 1)

  const byCorrect = [...groups].sort((a, b) => b[1].correct - a[1].correct || a[0].localeCompare(b[0], 'pt-BR'))
  const byWrong = [...groups].sort((a, b) => b[1].wrong - a[1].wrong || a[0].localeCompare(b[0], 'pt-BR'))

  const hasData = groups.length > 0

  return (
    <section className="mt-6 rounded-xl border border-line bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Concentração de desempenho</p>
          <h3 className="mt-1 font-display text-lg font-extrabold">Acertos e erros por {groupBy === 'subject' ? 'matéria' : 'tópico'}</h3>
        </div>
        <div className="flex gap-1 rounded-lg border border-line bg-white p-0.5">
          <button
            onClick={() => setGroupBy('subject')}
            className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${groupBy === 'subject' ? 'bg-sea text-white' : 'text-ink hover:bg-paper'}`}
            type="button"
          >
            Matéria
          </button>
          <button
            onClick={() => setGroupBy('topic')}
            className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${groupBy === 'topic' ? 'bg-sea text-white' : 'text-ink hover:bg-paper'}`}
            type="button"
          >
            Tópico
          </button>
        </div>
      </div>

      {!hasData ? (
        <p className="mt-3 text-sm leading-6 text-muted text-center">Responda algumas questões para ver a concentração de acertos e erros.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border border-[#d1fae5] bg-[#f0fdf4]/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-[#065f46]">Maiores acertos</h4>
              <span className="text-[10px] font-bold bg-[#065f46]/10 text-[#065f46] px-2 py-0.5 rounded">{maxCorrect}</span>
            </div>
            <div className="space-y-2">
              {byCorrect.slice(0, 8).map(([label, g]) => {
                const pct = maxBar ? Math.round((g.correct / maxBar) * 100) : 0
                return (
                  <div key={label} className="flex items-center gap-2">
                    <span className="shrink-0 w-[110px] text-[11px] font-semibold text-ink truncate" title={label}>{label}</span>
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-[#d1fae5]">
                      <div className={`h-full rounded-full bg-sea ${pct > 0 ? 'transition-all duration-500' : ''}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="shrink-0 w-[20px] text-[11px] font-bold text-[#065f46] text-right">{g.correct}</span>
                  </div>
                )
              })}
            </div>
          </section>
          <section className="rounded-lg border border-[#fecaca] bg-[#fff1f2]/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-[#991b1b]">Maiores erros</h4>
              <span className="text-[10px] font-bold bg-[#991b1b]/10 text-[#991b1b] px-2 py-0.5 rounded">{maxWrong}</span>
            </div>
            <div className="space-y-2">
              {byWrong.slice(0, 8).map(([label, g]) => {
                const pct = maxBar ? Math.round((g.wrong / maxBar) * 100) : 0
                return (
                  <div key={label} className="flex items-center gap-2">
                    <span className="shrink-0 w-[110px] text-[11px] font-semibold text-ink truncate" title={label}>{label}</span>
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-[#fecaca]">
                      <div className={`h-full rounded-full bg-coral ${pct > 0 ? 'transition-all duration-500' : ''}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="shrink-0 w-[20px] text-[11px] font-bold text-[#991b1b] text-right">{g.wrong}</span>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

export { PerformanceInfographic }
