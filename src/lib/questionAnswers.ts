import type { Question } from '../hooks/useQuestions'
import { isNativeApp } from './localDatabase'
import { supabase } from './supabase'

type OfflineAnswer = { question_id: string; correct_option: number; explanation: string | null }

export async function loadOfflineQuestionAnswers(questionIds: string[]) {
  if (!supabase) throw new Error('A conexão com o catálogo não está disponível.')
  const answers = new Map<string, OfflineAnswer>()
  for (let offset = 0; offset < questionIds.length; offset += 100) {
    const { data, error } = await supabase.rpc('get_offline_question_answers', {
      p_question_ids: questionIds.slice(offset, offset + 100),
    })
    if (error) throw new Error('Não foi possível preparar as questões para uso offline. Verifique a conexão e a validade do código de acesso. Se o problema persistir, entre em contato com o suporte.', { cause: error })
    for (const answer of (data ?? []) as OfflineAnswer[]) answers.set(answer.question_id, answer)
  }
  return answers
}

export async function resolveQuestionAnswer(question: Question, optionIndex: number, isOnline: boolean) {
  if (!Number.isInteger(optionIndex) || optionIndex < 0 || optionIndex >= question.options.length) {
    throw new Error('Selecione uma alternativa válida.')
  }
  const hasAnswer = question.answer !== null && Number.isInteger(question.answer)
    && question.answer >= 0 && question.answer < question.options.length
  if (isNativeApp() && hasAnswer) {
    return { selectedOption: optionIndex, correctOption: question.answer!, explanation: question.explanation }
  }
  if (!isOnline) {
    throw new Error(isNativeApp()
      ? 'O gabarito desta questão ainda não foi baixado. Abra este concurso com internet para preparar o estudo offline.'
      : 'Conecte-se à internet para validar esta resposta.')
  }
  if (!supabase) throw new Error('A validação online da resposta não está disponível.')
  const { data, error } = await supabase.rpc('submit_question_answer', {
    p_question_id: question.id,
    p_selected_option: optionIndex,
  })
  if (error) throw error
  const attempt = Array.isArray(data) ? data[0] : data
  if (!attempt) throw new Error('O servidor não retornou o resultado da resposta.')
  return {
    selectedOption: Number(attempt.selected_option),
    correctOption: Number(attempt.correct_option),
    explanation: (attempt.explanation ?? null) as string | null,
  }
}
