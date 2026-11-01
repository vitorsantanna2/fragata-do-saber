import { cacheReviewQuestion, isNativeApp, readCachedQuestions } from './localDatabase'
import type { CachedQuestionRow, StudyQuestionSnapshot } from './localDatabaseTypes'
import { toStudyQuestion } from './questionCatalog'
import { loadOfflineQuestionAnswers } from './questionAnswers'
import { supabase } from './supabase'

export async function loadReviewQuestion(questionId: string, snapshot: StudyQuestionSnapshot, isOnline: boolean) {
  const cached = await readCachedQuestions(snapshot.exam, snapshot.subject, snapshot.questionType)
  const saved = cached.find((question) => question.id === questionId)
  if (saved && (saved.correct_option != null && saved.correct_option >= 0 || !isOnline)) return toStudyQuestion(saved)
  if (!isOnline || !supabase) throw new Error('Esta questão ainda não está disponível offline. Abra o concurso com internet para baixá-la e depois volte às revisões.')
  const { data, error } = await supabase.from('questions')
    .select('id,year,question_number,question_type,subject,topic,difficulty,exam,statement,statement_after_image,image_url,image_alt,options,source')
    .eq('id', questionId).eq('is_published', true).eq('is_annulled', false).maybeSingle()
  if (error) throw new Error('Não foi possível abrir a questão. Verifique sua conexão e tente novamente.', { cause: error })
  if (!data) throw new Error('Esta questão não está mais disponível no catálogo. As demais revisões continuam disponíveis.')
  const native = isNativeApp()
  const answer = native ? (await loadOfflineQuestionAnswers([questionId])).get(questionId) : null
  if (native && !answer) throw new Error('Não foi possível baixar o gabarito desta questão. Tente novamente com internet.')
  const row: CachedQuestionRow = { ...data, correct_option: answer?.correct_option ?? snapshot.correctOption ?? -1, explanation: answer?.explanation ?? snapshot.explanation }
  if (native) await cacheReviewQuestion(row)
  return toStudyQuestion(row)
}
