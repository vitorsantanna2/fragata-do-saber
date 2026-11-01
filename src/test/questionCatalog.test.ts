import { beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({ from: vi.fn(), range: vi.fn(), order: vi.fn() }))
vi.mock('../lib/supabase', () => ({ supabase: { from: mocks.from } }))
import { loadQuestionCatalog } from '../lib/questionCatalog'

beforeEach(() => {
  vi.clearAllMocks()
  const query = { select: vi.fn(() => query), eq: vi.fn(() => query), order: mocks.order, range: mocks.range }
  mocks.order.mockReturnValue(query)
  mocks.from.mockReturnValue(query)
})

describe('question catalog pagination', () => {
  it('keeps downloading if the server caps responses below the requested page size', async () => {
    const rows = Array.from({ length: 205 }, (_, index) => ({ id: `q${index}` }))
    mocks.range.mockImplementation(async (offset: number) => ({ data: rows.slice(offset, offset + 100), error: null, count: 205 }))
    expect(await loadQuestionCatalog('CP-T', null, 'exam')).toHaveLength(205)
    expect(mocks.range.mock.calls).toEqual([[0, 499], [100, 599], [200, 699]])
    expect(mocks.order).toHaveBeenCalledWith('id', { ascending: true })
  })

  it('rejects an incomplete catalog instead of treating it as a complete download', async () => {
    mocks.range.mockResolvedValueOnce({ data: [{ id: 'q1' }], error: null, count: 2 })
      .mockResolvedValueOnce({ data: [], error: null, count: 2 })
    await expect(loadQuestionCatalog('CP-T', null, 'exam')).rejects.toThrow('incompleto')
  })

  it('stops fetching pages when the selected exam changes during a request', async () => {
    mocks.range.mockResolvedValue({ data: [{ id: 'q1' }], error: null, count: 1000 })
    expect(await loadQuestionCatalog('CP-T', null, 'exam', () => false)).toBeNull()
    expect(mocks.range).toHaveBeenCalledTimes(1)
  })
})
