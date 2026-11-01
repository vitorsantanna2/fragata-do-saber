import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Question } from '../hooks/useQuestions'

const mocks = vi.hoisted(() => ({ native: vi.fn(), rpc: vi.fn() }))
vi.mock('../lib/localDatabase', () => ({ isNativeApp: mocks.native }))
vi.mock('../lib/supabase', () => ({ supabase: { rpc: mocks.rpc } }))
import { loadOfflineQuestionAnswers, resolveQuestionAnswer } from '../lib/questionAnswers'

const question: Question = {
  id: 'q1', year: '2024', questionNumber: 1, questionType: 'exam', subject: 'Informática', topic: null,
  difficulty: null, exam: 'CP-T', prompt: 'Questão', promptAfterImage: null, imageUrl: null,
  imageAlt: null, options: ['A', 'B', 'C'], answer: 0, explanation: 'Explicação offline', source: null,
}

beforeEach(() => { vi.clearAllMocks(); mocks.native.mockReturnValue(true) })

describe('question correction', () => {
  it('validates repeated web questions independently for each simulation', async () => {
    mocks.native.mockReturnValue(false)
    mocks.rpc.mockImplementation(async (_name: string, params: { p_selected_option: number }) => ({
      data: [{ selected_option: params.p_selected_option, correct_option: 0, explanation: 'Servidor' }], error: null,
    }))
    const first = await resolveQuestionAnswer(question, 1, true, 'sim-1')
    const second = await resolveQuestionAnswer(question, 0, true, 'sim-2')
    expect(first.selectedOption).toBe(1)
    expect(second.selectedOption).toBe(0)
    expect(mocks.rpc).toHaveBeenNthCalledWith(1, 'submit_simulation_answer', { p_question_id: 'q1', p_selected_option: 1, p_simulation_id: 'sim-1' })
    expect(mocks.rpc).toHaveBeenNthCalledWith(2, 'submit_simulation_answer', { p_question_id: 'q1', p_selected_option: 0, p_simulation_id: 'sim-2' })
  })

  it('corrects a native answer offline without calling Supabase, including alternative zero', async () => {
    expect(await resolveQuestionAnswer(question, 0, false)).toEqual({ selectedOption: 0, correctOption: 0, explanation: question.explanation })
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('allows a different choice in a later simulation and corrects it locally while online', async () => {
    expect(await resolveQuestionAnswer(question, 2, true)).toEqual({ selectedOption: 2, correctOption: 0, explanation: question.explanation })
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('explains how to prepare old cached questions that have no answer key', async () => {
    await expect(resolveQuestionAnswer({ ...question, answer: null }, 0, false)).rejects.toThrow('ainda não foi baixado')
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('rejects invalid alternatives without saving or calling Supabase', async () => {
    await expect(resolveQuestionAnswer(question, 5, false)).rejects.toThrow('alternativa válida')
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('keeps server validation for the web even when a previous result is known', async () => {
    mocks.native.mockReturnValue(false)
    mocks.rpc.mockResolvedValue({ data: [{ selected_option: 1, correct_option: 0, explanation: 'Servidor' }], error: null })
    expect(await resolveQuestionAnswer(question, 1, true)).toEqual({ selectedOption: 1, correctOption: 0, explanation: 'Servidor' })
    expect(mocks.rpc).toHaveBeenCalledWith('submit_question_answer', { p_question_id: 'q1', p_selected_option: 1 })
  })

  it('downloads answer keys in batches supported by the SQL function', async () => {
    mocks.rpc.mockImplementation(async (_name: string, { p_question_ids }: { p_question_ids: string[] }) => ({
      data: p_question_ids.map((id) => ({ question_id: id, correct_option: 0, explanation: null })), error: null,
    }))
    const result = await loadOfflineQuestionAnswers(Array.from({ length: 101 }, (_, index) => `q${index}`))
    expect(result.size).toBe(101)
    expect(mocks.rpc).toHaveBeenCalledTimes(2)
    expect(mocks.rpc.mock.calls[0][1].p_question_ids).toHaveLength(100)
    expect(mocks.rpc.mock.calls[1][1].p_question_ids).toHaveLength(1)
  })
})
