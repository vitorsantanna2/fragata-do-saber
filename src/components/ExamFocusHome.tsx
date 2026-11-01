import type { ExamChoice } from '../lib/exams'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'
import { getFocusResources, type FocusResource } from '../lib/studyFocus'

type ExamFocusHomeProps = {
  exam: ExamChoice
  snapshots: Record<string, StudyQuestionSnapshot>
  answers: Record<string, number>
  dueCount: number
  publicAsset: (path: string) => string
  onSelect: (resource: FocusResource) => void
  onContinue?: () => void
  continueLabel?: string
}

export function ExamFocusHome({ exam, snapshots, answers, dueCount, publicAsset, onSelect, onContinue, continueLabel }: ExamFocusHomeProps) {
  const answered = Object.entries(snapshots).filter(([id, question]) => answers[id] !== undefined && question.correctOption !== null)
  const correct = answered.filter(([id, question]) => answers[id] === question.correctOption).length
  const accuracy = answered.length ? Math.round(correct / answered.length * 100) : 0
  return (
    <section className="mt-6" id="questoes" aria-labelledby="focus-home-title">
      <div className="flex items-center gap-4 rounded-2xl bg-ink p-5 text-white sm:p-7">
        <img className="h-20 w-20 shrink-0 rounded-xl bg-white object-contain p-2" src={publicAsset(exam.image)} alt="" />
        <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-200">Sua área de estudos</p><h2 id="focus-home-title" className="mt-2 font-display text-2xl font-extrabold">{exam.title}</h2><p className="mt-2 text-sm leading-6 text-white/75">Seus materiais, revisões e resultados reunidos para estudar com foco em {exam.exam}.</p></div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          ['Questões respondidas', answered.length],
          ['Aproveitamento', `${accuracy}%`],
          ['Revisões pendentes', dueCount],
        ].map(([label, value]) => <article key={label} className="rounded-xl border border-line bg-white p-4"><p className="text-xs font-bold uppercase text-muted">{label}</p><p className="mt-2 font-display text-2xl font-extrabold">{value}</p></article>)}
      </div>
      {onContinue && <button type="button" onClick={onContinue} className="mt-5 w-full rounded-xl border border-sea/25 bg-sea-light p-4 text-left text-sea hover:border-sea"><span className="block text-sm font-extrabold">Continuar de onde parei →</span>{continueLabel && <span className="mt-1 block text-sm">{continueLabel}</span>}</button>}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {getFocusResources(exam).map((resource) => <button key={resource.id} type="button" onClick={() => onSelect(resource.id)} className="group rounded-xl border border-line bg-white p-5 text-left transition hover:border-sea hover:shadow-lg hover:shadow-ink/5 sm:p-6">
          <span aria-hidden="true" className="grid size-11 place-items-center rounded-xl bg-sea-light text-2xl text-sea">{resource.icon}</span>
          <span className="mt-4 block font-display text-lg font-extrabold text-ink">{resource.title}{resource.id === 'scheduled-reviews' ? ` (${dueCount})` : ''}</span>
          <span className="mt-2 block text-sm leading-6 text-muted">{resource.description}</span>
          <span className="mt-4 block text-sm font-extrabold text-sea group-hover:text-ink">Acessar →</span>
        </button>)}
      </div>
    </section>
  )
}
