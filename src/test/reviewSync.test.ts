import { beforeEach, describe, expect, it, vi } from 'vitest'
import { scheduleReview } from '../lib/scheduledReviews'

const mocks = vi.hoisted(() => ({ from: vi.fn(), range: vi.fn(), upsert: vi.fn() }))
vi.mock('../lib/supabase', () => ({ supabase: { from: mocks.from } }))
import { syncReviewSchedules } from '../lib/reviewSync'

beforeEach(() => {
  vi.clearAllMocks()
  const query = { select: vi.fn(() => query), eq: vi.fn(() => query), order: vi.fn(() => query), range: mocks.range, upsert: mocks.upsert }
  mocks.from.mockReturnValue(query)
  mocks.range.mockResolvedValue({ data: [], error: null })
  mocks.upsert.mockResolvedValue({ error: null })
})

describe('review schedule synchronization', () => {
  it('uploads offline changes and retains a newer schedule from another device', async () => {
    const old = scheduleReview(undefined, false, null, 'a1', '2026-11-01T12:00:00Z')
    const newer = scheduleReview(old, true, 'sure', 'a2', '2026-11-02T12:00:00Z')
    mocks.range.mockResolvedValue({ data: [{ user_id: 'u1', question_id: 'remote', due_date: newer.dueDate, state: newer, updated_at: newer.updatedAt }], error: null })
    const merged = await syncReviewSchedules('u1', { local: newer, remote: old })
    expect(merged).toEqual({ local: newer, remote: newer })
    expect(mocks.upsert).toHaveBeenCalledWith([{ user_id: 'u1', question_id: 'local', due_date: newer.dueDate, state: newer, updated_at: newer.updatedAt }], { onConflict: 'user_id,question_id' })
  })

  it('does not overwrite an equal schedule or upload it again', async () => {
    const schedule = scheduleReview(undefined, true, 'sure', 'a1', '2026-11-01T12:00:00Z')
    const reordered = Object.fromEntries(Object.entries(schedule).reverse())
    mocks.range.mockResolvedValue({ data: [{ user_id: 'u1', question_id: 'q1', due_date: schedule.dueDate, state: reordered, updated_at: schedule.updatedAt }], error: null })
    expect(await syncReviewSchedules('u1', { q1: schedule })).toEqual({ q1: schedule })
    expect(mocks.upsert).not.toHaveBeenCalled()
  })
})
