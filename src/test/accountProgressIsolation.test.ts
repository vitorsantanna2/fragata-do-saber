import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useProgress } from '../hooks/useProgress'
import { loadStudyProgress, loadOffensiveState, saveOffensiveState } from '../lib/localDatabase'

const mocks = vi.hoisted(() => ({ sync: vi.fn(), offensive: vi.fn() }))
vi.mock('../lib/progressSync', () => ({ syncStudyProgress: mocks.sync, syncOffensiveState: mocks.offensive, loadValidatedAnswers: vi.fn(async () => []) }))
const a = { id: 'student-a', email: 'a@example.com', is_anonymous: false, created_at: '2026-01-01T00:00:00Z' }
const b = { ...a, id: 'student-b' }
const questions: [] = []
const snapshot = { exam: 'CP-T', subject: 'Informática', topic: null, year: '2021', questionType: 'exam' as const, prompt: 'Teste', correctOption: 0, explanation: null }
const flush = async () => {
  await act(async () => {})
  await act(async () => { await vi.advanceTimersByTimeAsync(600) })
}

beforeEach(() => {
  vi.useFakeTimers(); localStorage.clear(); vi.clearAllMocks()
  mocks.sync.mockImplementation(async (progress) => progress)
  mocks.offensive.mockResolvedValue(null)
})
afterEach(() => { cleanup(); vi.useRealTimers(); localStorage.clear() })

describe('isolation of study progress between accounts', () => {
  it('clears account A data before syncing B and restores A after switching back', async () => {
    const view = renderHook(({ user }) => useProgress({ questions, accountUser: user, isOnline: true }), { initialProps: { user: a } })
    await flush()
    act(() => {
      view.result.current.setAnswers({ q1: 0 })
      view.result.current.setFavorites(['q1'])
      view.result.current.setQuestionSnapshots({ q1: snapshot })
      view.result.current.recordReviewAnswer('q1', true, 'attempt-a')
      view.result.current.setSavedSimulation({ ids: ['q1'], answers: { q1: 0 }, revealed: [], examId: 'cp-t-informatica', studyMode: 'exam-questions', lastQuestionId: 'q1', updatedAt: new Date().toISOString() })
    })
    // Troca imediatamente, antes de qualquer debounce de rede.
    view.rerender({ user: b })
    expect(view.result.current.answers).toEqual({})
    expect(view.result.current.favorites).toEqual([])
    expect(view.result.current.reviewSchedules).toEqual({})
    expect(view.result.current.savedSimulation).toBeNull()
    await flush()
    const bUploads = mocks.sync.mock.calls.filter(([, owner]) => owner === b.id)
    expect(bUploads.length).toBeGreaterThan(0)
    expect(bUploads.every(([progress]) => !Object.keys(progress.answers).length && !progress.favorites.length && !Object.keys(progress.reviewSchedules).length)).toBe(true)
    expect((await loadStudyProgress(a.id))?.answers).toEqual({ q1: 0 })
    view.rerender({ user: a })
    await flush()
    expect(view.result.current.answers).toEqual({ q1: 0 })
    expect(view.result.current.savedSimulation?.answers).toEqual({ q1: 0 })
  })

  it('ignores an old cloud response after a change of account', async () => {
    let resolve!: (value: unknown) => void
    mocks.sync.mockImplementation((_progress, owner) => owner === a.id ? new Promise((done) => { resolve = done }) : Promise.resolve(_progress))
    const view = renderHook(({ user }) => useProgress({ questions, accountUser: user, isOnline: true }), { initialProps: { user: a } })
    await flush()
    view.rerender({ user: b })
    await act(async () => {
      resolve({ answers: { old: 1 }, favorites: ['old'], revealed: [], questionSnapshots: {}, progressUpdatedAt: {}, completedSimulations: [], reviewSchedules: {} })
      await Promise.resolve()
    })
    await flush()
    expect(view.result.current.answers).toEqual({})
    expect((await loadStudyProgress(b.id))?.favorites).toEqual([])
  })

  it('does not assign unowned legacy data to a signed-in account or the guest', async () => {
    const raw = JSON.stringify({ answers: { legacy: 1 }, favorites: ['legacy'] })
    localStorage.setItem('study_progress_v1', raw)
    expect(await loadStudyProgress(a.id)).toBeNull()
    expect(await loadStudyProgress('guest')).toBeNull()
    const view = renderHook(() => useProgress({ questions, accountUser: a, isOnline: true }))
    await flush()
    expect(view.result.current.answers).toEqual({})
    expect(localStorage.getItem('study_progress_v1')).toBe(raw)
  })

  it('keeps guest progress separate and restores account data offline after a restart', async () => {
    const view = renderHook(({ user }: { user: typeof a | null }) => useProgress({ questions, accountUser: user, isOnline: false }), { initialProps: { user: a as typeof a | null } })
    await flush()
    act(() => view.result.current.setAnswers({ private: 1 }))
    view.rerender({ user: null })
    await flush()
    expect(view.result.current.answers).toEqual({})
    act(() => view.result.current.setAnswers({ guest: 0 }))
    view.unmount()
    const restored = renderHook(() => useProgress({ questions, accountUser: a, isOnline: false }))
    await flush()
    expect(restored.result.current.answers).toEqual({ private: 1 })
    expect((await loadStudyProgress('guest'))?.answers).toEqual({ guest: 0 })
  })

  it('also separates offensive counters by account and preserves old unowned backups', async () => {
    const state = { totalOffensives: 9, currentStreak: 0, bestStreak: 9, lastOffensiveDate: null, offensiveLoggedToday: false, joinedAt: a.created_at }
    localStorage.setItem('offensive_state_v1', JSON.stringify(state))
    await saveOffensiveState(state, a.id)
    expect((await loadOffensiveState(b.id)).totalOffensives).toBe(0)
    expect((await loadOffensiveState(a.id)).totalOffensives).toBe(9)
    expect(JSON.parse(localStorage.getItem('offensive_state_v1')!).totalOffensives).toBe(9)
  })
})
