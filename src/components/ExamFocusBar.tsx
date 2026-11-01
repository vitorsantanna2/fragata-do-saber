import type { ExamChoice } from '../lib/exams'

export function ExamFocusBar({ exam, onHome, onChange }: { exam: ExamChoice; onHome: () => void; onChange: () => void }) {
  return (
    <nav aria-label="Concurso em foco" className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sea/20 bg-sea-light/60 px-4 py-3">
      <div><p className="text-xs font-extrabold uppercase tracking-wide text-sea">Em foco: {exam.exam}</p><p className="mt-1 text-sm font-semibold text-ink">{exam.title}</p></div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={onHome} className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-bold text-sea hover:border-sea">Minha área</button>
        <button type="button" onClick={onChange} className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-bold text-muted hover:border-sea hover:text-sea">Trocar concurso</button>
      </div>
    </nav>
  )
}
