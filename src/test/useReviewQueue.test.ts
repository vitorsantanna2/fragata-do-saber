import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react'
import { useReviewQueue } from '../hooks/useReviewQueue'
import { scheduleReview } from '../lib/scheduledReviews'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('daily review queue', () => {
  it('updates the due count when midnight passes in Sao Paulo while the app is open', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-11-02T02:59:30Z'))
    const schedules = { q1: scheduleReview(undefined, true, 'sure', 'a1', '2026-11-01T15:00:00Z') }
    const snapshots: Record<string, StudyQuestionSnapshot> = { q1: { exam: 'CP-T', subject: 'Informática', topic: null, year: '2024', questionType: 'exam', prompt: 'Questão', correctOption: 0, explanation: null } }
    const { result } = renderHook(() => useReviewQueue(schedules, snapshots))
    expect(result.current.today).toBe('2026-11-01')
    expect(result.current.dueReviews).toHaveLength(0)
    act(() => vi.advanceTimersByTime(60_000))
    expect(result.current.today).toBe('2026-11-02')
    expect(result.current.dueReviews).toHaveLength(1)
  })
})
