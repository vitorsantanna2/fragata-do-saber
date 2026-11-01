import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { CachedQuestionRow, StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

const mocks = vi.hoisted(() => ({ read: vi.fn(), cache: vi.fn(), from: vi.fn(), rpc: vi.fn() }))
vi.mock('../lib/localDatabase', () => ({ readCachedQuestions: mocks.read, cacheReviewQuestion: mocks.cache, isNativeApp: () => true }))
vi.mock('../lib/supabase', () => ({ supabase: { from: mocks.from, rpc: mocks.rpc } }))
import { loadReviewQuestion } from '../lib/reviewQuestions'

const snapshot: StudyQuestionSnapshot = { exam: 'CP-T', subject: 'Informática', topic: null, year: '2024', questionType: 'exam', prompt: 'Questão', correctOption: 0, explanation: 'Explicação' }
const row: CachedQuestionRow = { id: 'q1', year: 2024, question_number: 1, question_type: 'exam', subject: 'Informática', topic: null, difficulty: null, exam: 'CP-T', statement: 'Questão', statement_after_image: null, image_url: null, image_alt: null, options: ['A', 'B'], correct_option: 0, explanation: 'Explicação', source: null }

beforeEach(() => { vi.clearAllMocks(); mocks.read.mockResolvedValue([]); mocks.cache.mockResolvedValue(undefined) })

describe('review question loading', () => {
  it('loads the full downloaded question and its correction without any network request', async () => {
    mocks.read.mockResolvedValue([row])
    expect(await loadReviewQuestion('q1', snapshot, false)).toMatchObject({ id: 'q1', options: ['A', 'B'], answer: 0, explanation: 'Explicação' })
    expect(mocks.from).not.toHaveBeenCalled()
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('does not request the server when an offline question is unavailable', async () => {
    await expect(loadReviewQuestion('q1', snapshot, false)).rejects.toThrow('não está disponível offline')
    expect(mocks.from).not.toHaveBeenCalled()
  })

  it('downloads a missing review question and caches it individually', async () => {
    const query = { select: vi.fn(() => query), eq: vi.fn(() => query), maybeSingle: vi.fn(async () => ({ data: row, error: null })) }
    mocks.from.mockReturnValue(query)
    mocks.rpc.mockResolvedValue({ data: [{ question_id: 'q1', correct_option: 0, explanation: 'Explicação' }], error: null })
    expect(await loadReviewQuestion('q1', snapshot, true)).toMatchObject({ id: 'q1', answer: 0 })
    expect(mocks.cache).toHaveBeenCalledWith(row)
  })
})
