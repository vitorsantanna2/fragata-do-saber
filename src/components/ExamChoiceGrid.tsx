import { useState, type ChangeEvent } from 'react'

export type ExamChoice = {
  id: string
  group: string
  title: string
  description: string
  exam: string
  subject: string | null
  image: string
}

export const examGroups = ['Concursos', 'Cursos expeditos']

export const examChoices: ExamChoice[] = [
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

type ExamChoiceGridProps = {
  onSelect: (examId: string) => void
  publicAsset: (path: string) => string
}

export function ExamChoiceGrid({ onSelect, publicAsset }: ExamChoiceGridProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChoices = examChoices.filter((choice) =>
    choice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    choice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    choice.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    choice.exam.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredGroups = examGroups.filter((group) =>
    filteredChoices.some((choice) => choice.group === group)
  )

  return (
    <>
      <input
        className="mb-4 block w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition focus:border-sea focus:ring-2 focus:ring-sea/10"
        type="search"
        value={searchTerm}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
        placeholder="Buscar concurso ou curso..."
        aria-label="Buscar concursos e cursos"
      />
      {filteredGroups.map((group) => (
        <div className="mt-5" key={group}>
          <h3 className="mb-3 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-muted">{group}</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {filteredChoices
              .filter((choice) => choice.group === group)
              .map((choice) => (
                <button
                  className="group flex items-center gap-4 rounded-2xl border-2 border-line bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-sea hover:shadow-xl hover:shadow-ink/10"
                  key={choice.id}
                  type="button"
                  onClick={() => onSelect(choice.id)}
                >
                  <span className="block min-w-0 flex-1">
                    <span className="block font-display text-xl font-extrabold text-ink">{choice.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{choice.description}</span>
                  </span>
                  <img
                    alt=""
                    aria-hidden="true"
                    className="size-28 shrink-0 object-contain mix-blend-multiply sm:size-32"
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
      {filteredChoices.length === 0 && (
        <p className="mt-8 rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">Nenhum concurso ou curso encontrado.</p>
      )}
    </>
  )
}
