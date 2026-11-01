import { supabase } from './supabase'
import type { CachedQuestionRow } from './localDatabaseTypes'

type CatalogQuestion = Omit<CachedQuestionRow, 'correct_option' | 'explanation'>
const PAGE_SIZE = 500

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
