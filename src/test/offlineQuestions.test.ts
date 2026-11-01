import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import type { CachedQuestionRow } from '../lib/localDatabaseTypes'

const mocks = vi.hoisted(() => ({ read: vi.fn(), cache: vi.fn(), from: vi.fn(), rpc: vi.fn() }))
vi.mock('../lib/localDatabase', () => ({ readCachedQuestions: mocks.read, cacheQuestions: mocks.cache, isNativeApp: () => true }))
vi.mock('../lib/supabase', () => ({ supabase: { from: mocks.from, rpc: mocks.rpc } }))
import { useQuestions } from '../hooks/useQuestions'

const row: CachedQuestionRow = {
  id: 'q1', year: 2024, question_number: 1, question_type: 'exam', subject: 'Informática', topic: null,
  difficulty: null, exam: 'CP-T', statement: 'Questão offline', statement_after_image: null,
  image_url: null, image_alt: null, options: ['A', 'B'], correct_option: 0, explanation: 'Explicação local', source: null,
}
const examChoices = [{ id: 'cp-t-informatica', group: 'CP-T', title: 'CP-T', description: '', exam: 'CP-T', subject: 'Informática', image: '' }]
const props = { selectedExamId: 'cp-t-informatica', selectedStudyMode: 'exam-questions' as const, examChoices }

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true)
  mocks.read.mockResolvedValue([])
  mocks.cache.mockResolvedValue(undefined)
  const { correct_option: _correctOption, explanation: _explanation, ...publicRow } = row
  const query = {
    select: vi.fn(() => query), eq: vi.fn(() => query),
    order: vi.fn(async () => ({ data: [publicRow], error: null })),
  }
  mocks.from.mockReturnValue(query)
  mocks.rpc.mockResolvedValue({ data: [{ question_id: row.id, correct_option: row.correct_option, explanation: row.explanation }], error: null })
})

afterEach(() => { cleanup(); vi.restoreAllMocks() })

describe('native offline question loading', () => {
  it('loads cached questions and keys without any network request in airplane mode', async () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false)
    mocks.read.mockResolvedValue([row])
    const { result } = renderHook(() => useQuestions(props))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.questions[0]).toMatchObject({ answer: 0, explanation: row.explanation })
    expect(result.current.loadError).toBe('')
    expect(result.current.usingOfflineCache).toBe(true)
    expect(mocks.from).not.toHaveBeenCalled()
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('downloads keys for unanswered questions and persists them with the questions', async () => {
    const { result } = renderHook(() => useQuestions(props))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(mocks.rpc).toHaveBeenCalledWith('get_offline_question_answers', { p_question_ids: ['q1'] })
    expect(mocks.cache).toHaveBeenCalledWith([row], 'CP-T', 'Informática', 'exam')
    expect(result.current.questions[0].answer).toBe(0)
  })

  it('preserves the downloaded content when the server cannot update the keys', async () => {
    mocks.read.mockResolvedValue([row])
    mocks.rpc.mockResolvedValue({ data: null, error: { message: 'Failed to fetch' } })
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { result } = renderHook(() => useQuestions(props))
    await waitFor(() => expect(result.current.usingOfflineCache).toBe(true))
    await waitFor(() => expect(mocks.rpc).toHaveBeenCalled())
    expect(result.current.questions[0].answer).toBe(0)
    expect(mocks.cache).not.toHaveBeenCalled()
  })

  it('does not replace the cache with an incomplete download that lacks answer keys', async () => {
    mocks.rpc.mockResolvedValue({ data: [], error: null })
    const { result } = renderHook(() => useQuestions(props))
    await waitFor(() => expect(result.current.loadError).toContain('incompleto'))
    expect(mocks.cache).not.toHaveBeenCalled()
    expect(result.current.questions).toEqual([])
  })
})
