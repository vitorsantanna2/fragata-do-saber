import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useProgress } from '../hooks/useProgress'
import { loadStudyProgress } from '../lib/localDatabase'
const mock = vi.hoisted(() => ({ sync: vi.fn() }))
vi.mock('../lib/progressSync', () => ({ syncStudyProgress: mock.sync, syncOffensiveState: vi.fn(async () => null), loadValidatedAnswers: vi.fn(async () => []) }))
const user = { id: 'student', email: 'test@example.com', is_anonymous: false, created_at: '2026-01-01T00:00:00Z' }
const questions: [] = []
const key = 'study_progress_v1:student'
const flush = async () => { await act(async () => {}); await act(async () => { await vi.advanceTimersByTimeAsync(600) }) }
beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); vi.clearAllMocks(); mock.sync.mockImplementation(async (value) => value) })
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers(); localStorage.clear() })

describe('safe progress recovery', () => {
  it.each(['', '{"answers":', 'null', '[]', '{"answers":"invalid"}', '{"answers":{"q1":"bad"}}', '{"savedSimulation":true}'])('preserves invalid stored data and blocks writes and cloud synchronization (%s)', async (raw) => {
    localStorage.setItem(key, raw)
    await expect(loadStudyProgress(user.id)).rejects.toThrow('preservados')
    const view = renderHook(() => useProgress({ questions, accountUser: user, isOnline: true }))
    await flush()
    expect(view.result.current.progressRestored).toBe(false)
    expect(view.result.current.progressStorageError).toContain('preservados')
    act(() => view.result.current.setAnswers({ q1: 0 }))
    await flush()
    expect(localStorage.getItem(key)).toBe(raw)
    expect(mock.sync).not.toHaveBeenCalled()
  })

  it('retries a transient read error without replacing existing progress with empty data', async () => {
    const raw = JSON.stringify({ answers: { q1: 1 }, favorites: ['q1'] })
    localStorage.setItem(key, raw)
    const original = Storage.prototype.getItem
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(function (this: Storage, name) {
      if (name === key) throw new Error('storage temporarily unavailable')
      return original.call(this, name)
    })
    const view = renderHook(() => useProgress({ questions, accountUser: user, isOnline: false }))
    await flush()
    expect(view.result.current.progressRestored).toBe(false)
    expect(original.call(localStorage, key)).toBe(raw)
    spy.mockRestore()
    act(() => view.result.current.retryProgressLoad())
    await flush()
    expect(view.result.current.answers).toEqual({ q1: 1 })
    expect(view.result.current.favorites).toEqual(['q1'])
    expect(view.result.current.progressStorageError).toBe('')
  })

  it('retries failed saves using the current answers rather than reloading old data', async () => {
    localStorage.setItem(key, JSON.stringify({ answers: { old: 1 } }))
    const original = Storage.prototype.setItem
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(function (this: Storage, name, value) {
      if (name === key) throw new Error('disk full')
      original.call(this, name, value)
    })
    const view = renderHook(() => useProgress({ questions, accountUser: user, isOnline: false }))
    await flush()
    act(() => view.result.current.setAnswers({ newest: 0 }))
    await flush()
    expect(view.result.current.progressStorageError).toContain('salvar')
    expect(JSON.parse(localStorage.getItem(key)!).answers).toEqual({ old: 1 })
    spy.mockRestore()
    act(() => view.result.current.retryProgressLoad())
    await flush()
    expect(JSON.parse(localStorage.getItem(key)!).answers).toEqual({ newest: 0 })
    expect(view.result.current.progressStorageError).toBe('')
  })
})
