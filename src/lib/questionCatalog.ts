import { supabase } from './supabase'
import type { CachedQuestionRow } from './localDatabaseTypes'
import type { Question } from '../hooks/useQuestions'

type CatalogQuestion = Omit<CachedQuestionRow, 'correct_option' | 'explanation'>
const PAGE_SIZE = 500

export function toStudyQuestion(row: CachedQuestionRow): Question {
  return {
    id: row.id, year: row.question_type === 'bibliography' ? 'Bibliografia' : String(row.year ?? ''),
    questionNumber: row.question_type === 'bibliography' || row.question_number === 0 ? null : row.question_number,
    questionType: row.question_type, subject: row.subject, topic: row.topic, difficulty: row.difficulty, exam: row.exam,
    prompt: row.statement, promptAfterImage: row.statement_after_image, imageUrl: row.image_url, imageAlt: row.image_alt,
    options: row.options, answer: row.correct_option != null && row.correct_option >= 0 ? row.correct_option : null,
    explanation: row.explanation ?? null, source: row.source,
  }
}

export async function loadQuestionCatalog(exam: string, subject: string | null, questionType: 'exam' | 'bibliography', isActive = () => true) {
  if (!supabase) throw new Error('A conexão com o catálogo não está disponível.')
  const questions: CatalogQuestion[] = []
  for (let offset = 0; ; ) {
    let query = supabase
      .from('questions')
      .select('id, year, question_number, question_type, subject, topic, difficulty, exam, statement, statement_after_image, image_url, image_alt, options, source', { count: 'exact' })
      .eq('is_published', true)
      .eq('is_annulled', false)
      .eq('exam', exam)
      .eq('question_type', questionType)
    if (subject) query = query.eq('subject', subject)
    const { data, error, count } = await query
      .order('year', { ascending: false })
      .order('id', { ascending: true })
      .range(offset, offset + PAGE_SIZE - 1)
    if (!isActive()) return null
    if (error) throw new Error('Não foi possível atualizar as questões. Verifique sua conexão e tente novamente.', { cause: error })
    const batch = (data ?? []) as CatalogQuestion[]
    questions.push(...batch)
    if (count != null && questions.length >= count) return questions
    if (!batch.length) {
      if (count != null && questions.length < count) throw new Error('O download das questões ficou incompleto. Tente novamente antes de estudar offline.')
      return questions
    }
    offset += batch.length
  }
}
