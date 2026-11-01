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
