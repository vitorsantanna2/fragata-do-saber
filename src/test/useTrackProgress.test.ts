import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mock = vi.hoisted(() => ({ sync: vi.fn() }))
vi.mock('../lib/trackProgressSync', () => ({ syncTrackProgress: mock.sync }))
vi.mock('../lib/localDatabase', () => ({ isNativeApp: () => false, getLocalMetadata: vi.fn(), setLocalMetadata: vi.fn() }))
import { useTrackProgress } from '../hooks/useTrackProgress'

const key = 'cpt-2026-infra/so'
const storageKey = 'study_tracks_v1:student'
beforeEach(() => {
  vi.useFakeTimers(); localStorage.clear(); vi.clearAllMocks()
  mock.sync.mockImplementation(async (_id, entries) => entries)
})
afterEach(() => { cleanup(); vi.useRealTimers() })
const tick = () => act(async () => { await vi.advanceTimersByTimeAsync(500) })

describe('offline track progress and reconnection', () => {
  it('saves offline, uploads after reconnecting and restores a remote reopening', async () => {
    const view = renderHook(({ online }) => useTrackProgress('student', true, online), { initialProps: { online: false } })
    await act(async () => { await view.result.current.setStatus('cpt-2026-infra', 'so', 'completed') })
    expect(view.result.current.progress[key]).toBe('completed')
    expect(mock.sync).not.toHaveBeenCalled()
    expect(JSON.parse(localStorage.getItem(storageKey)!).entries[key].status).toBe('completed')
    view.rerender({ online: true })
    await tick()
    expect(mock.sync).toHaveBeenCalledWith('student', expect.objectContaining({ [key]: expect.objectContaining({ status: 'completed' }) }))
    expect(view.result.current.syncStatus).toBe('synced')
    mock.sync.mockResolvedValue({ [key]: { status: 'not-started', updatedAt: '2099-01-01T00:00:00.000Z' } })
    act(() => view.result.current.retrySync())
    await tick()
    expect(view.result.current.progress[key]).toBeUndefined()
    expect(JSON.parse(localStorage.getItem(storageKey)!).entries[key].status).toBe('not-started')
  })

  it('keeps local edits when a network response arrives late', async () => {
    let resolve!: (value: unknown) => void
    mock.sync.mockReturnValue(new Promise((done) => { resolve = done }))
    const view = renderHook(() => useTrackProgress('student', true, true))
    await tick()
    await act(async () => { await view.result.current.setStatus('cpt-2026-infra', 'so', null) })
    await act(async () => { resolve({ [key]: { status: 'completed', updatedAt: '1970-01-01T00:00:00.000Z' } }); await Promise.resolve() })
    expect(view.result.current.progress[key]).toBeUndefined()
    expect(JSON.parse(localStorage.getItem(storageKey)!).entries[key].status).toBe('not-started')
  })

  it('ignores pending responses after switching accounts', async () => {
    let resolve!: (value: unknown) => void
    mock.sync.mockReturnValue(new Promise((done) => { resolve = done }))
    const view = renderHook(({ id }) => useTrackProgress(id, true, true), { initialProps: { id: 'student' } })
    await tick()
    view.rerender({ id: 'other' })
    await act(async () => { resolve({ [key]: { status: 'completed', updatedAt: new Date().toISOString() } }); await Promise.resolve() })
    expect(view.result.current.progress).toEqual({})
    expect(localStorage.getItem('study_tracks_v1:other')).toBeNull()
  })

  it('does not send anonymous progress and retains offline changes after network errors', async () => {
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => {})
    try {
      const view = renderHook(({ allowed }) => useTrackProgress('student', allowed, true), { initialProps: { allowed: false } })
      await tick()
      expect(mock.sync).not.toHaveBeenCalled()
      await act(async () => { await view.result.current.setStatus('cpt-2026-infra', 'so', 'studying') })
      mock.sync.mockRejectedValue(new Error('offline'))
      view.rerender({ allowed: true })
      await tick()
      expect(view.result.current.syncStatus).toBe('error')
      expect(view.result.current.progress[key]).toBe('studying')
      mock.sync.mockImplementation(async (_id, entries) => entries)
      act(() => view.result.current.retrySync())
      await tick()
      expect(view.result.current.syncStatus).toBe('synced')
    } finally { warning.mockRestore() }
  })
})
