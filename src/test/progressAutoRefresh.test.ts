import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useProgress } from '../hooks/useProgress'
const mock = vi.hoisted(() => ({ sync: vi.fn() }))
vi.mock('../lib/progressSync', () => ({ syncStudyProgress: mock.sync, syncOffensiveState: vi.fn(async () => null), loadValidatedAnswers: vi.fn(async () => []) }))
const user = { id: 'student', email: 'test@example.com', is_anonymous: false, created_at: '2026-01-01T00:00:00Z' }
const questions: [] = []
const advance = async (ms = 600) => {
  await act(async () => {})
  await act(async () => { await vi.advanceTimersByTimeAsync(ms) })
  await act(async () => { await vi.advanceTimersByTimeAsync(500) })
}
beforeEach(() => {
  vi.useFakeTimers(); localStorage.clear(); vi.clearAllMocks()
  mock.sync.mockImplementation(async (progress) => progress)
  vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible')
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers(); localStorage.clear() })

describe('automatic general progress refresh', () => {
  it('receives changes from another device periodically even without local edits, without an infinite loop', async () => {
    const view = renderHook(() => useProgress({ questions, accountUser: user, isOnline: true }))
    await advance()
    expect(mock.sync).toHaveBeenCalledTimes(1)
    mock.sync.mockImplementation(async (progress) => ({ ...progress, favorites: ['from-other-device'] }))
    await advance(30_600)
    expect(view.result.current.favorites).toEqual(['from-other-device'])
    expect(mock.sync).toHaveBeenCalledTimes(2)
    await advance(2000)
    expect(mock.sync).toHaveBeenCalledTimes(2)
    expect(JSON.parse(localStorage.getItem('study_progress_v1:student')!).favorites).toEqual(['from-other-device'])
  })

  it('refreshes when returning to the page and reconnecting with unchanged local data', async () => {
    const view = renderHook(({ online }) => useProgress({ questions, accountUser: user, isOnline: online }), { initialProps: { online: true } })
    await advance()
    act(() => window.dispatchEvent(new Event('focus')))
    await advance()
    expect(mock.sync).toHaveBeenCalledTimes(2)
    view.rerender({ online: false })
    await advance(31_000)
    expect(mock.sync).toHaveBeenCalledTimes(2)
    view.rerender({ online: true })
    await advance()
    expect(mock.sync).toHaveBeenCalledTimes(3)
  })

  it('retries network failures automatically', async () => {
    mock.sync.mockRejectedValueOnce(new Error('network failure'))
    const view = renderHook(() => useProgress({ questions, accountUser: user, isOnline: true }))
    await advance()
    expect(view.result.current.syncStatus).toBe('error')
    await advance(30_600)
    expect(view.result.current.syncStatus).toBe('synced')
    expect(mock.sync).toHaveBeenCalledTimes(2)
  })

  it('pauses checks in the background and refreshes on visibility change', async () => {
    renderHook(() => useProgress({ questions, accountUser: user, isOnline: true }))
    await advance()
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden')
    await advance(61_000)
    expect(mock.sync).toHaveBeenCalledTimes(1)
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible')
    act(() => document.dispatchEvent(new Event('visibilitychange')))
    await advance()
    expect(mock.sync).toHaveBeenCalledTimes(2)
  })
})
