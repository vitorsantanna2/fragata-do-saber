export type QuestionType = 'exam' | 'bibliography'
export type QuestionRecord = {
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

export type QuestionDraft = Omit<QuestionRecord, 'id' | 'created_at' | 'year' | 'question_number' | 'correct_option' | 'options' | 'topic' | 'difficulty' | 'exam_color' | 'statement_after_image' | 'image_url' | 'image_alt' | 'explanation' | 'source'> & {
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

export const PAGE_SIZE = 30
export const questionColumns = 'id, year, question_number, question_type, subject, topic, difficulty, exam, exam_color, statement, statement_after_image, image_url, image_alt, options, source, is_annulled, is_published, created_at'

export function emptyDraft(): QuestionDraft {
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

export function toDraft(question: QuestionRecord): QuestionDraft {
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
