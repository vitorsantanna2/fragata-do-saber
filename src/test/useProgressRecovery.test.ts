import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react'
import { useProgress } from '../hooks/useProgress'
import { loadValidatedAnswers, syncOffensiveState, syncStudyProgress } from '../lib/progressSync'
import type { CompletedSimulation, StudyProgress } from '../lib/localDatabaseTypes'

vi.mock('../lib/progressSync', () => ({
  loadValidatedAnswers: vi.fn(), syncStudyProgress: vi.fn(), syncOffensiveState: vi.fn(),
}))

const noQuestions: [] = []
const user = { id: 'user-1', email: 'user@example.com', is_anonymous: false, created_at: '2026-01-01T00:00:00.000Z' }
const snapshot = { exam: 'CP-T', subject: 'Informática', topic: null, year: '2024', questionType: 'exam' as const, prompt: 'Questão', correctOption: 0, explanation: 'Explicação validada' }
const simulation: CompletedSimulation = { id: 'sim-1', examId: 'cp-t-informatica', examTitle: 'CP-T', studyMode: 'exam-questions', totalQuestions: 10, correctAnswers: 8, wrongAnswers: 2, score: 80, completedAt: '2026-11-01T12:00:00.000Z', isSimulation: true }

function storedProgress(): StudyProgress {
  return {
    answers: { q1: 0 }, revealed: [], favorites: [], progressUpdatedAt: { q1: simulation.completedAt },
    questionSnapshots: { q1: snapshot }, savedSimulation: null, completedSimulations: [],
    selectedExamId: null, selectedStudyMode: null, topic: 'Todos', year: 'Todos', bibliographySource: 'Todos', questionSearch: '',
  }
}

beforeEach(() => {
  vi.useFakeTimers()
  window.localStorage.clear()
  vi.mocked(loadValidatedAnswers).mockResolvedValue([])
  vi.mocked(syncStudyProgress).mockImplementation(async (progress) => progress)
  vi.mocked(syncOffensiveState).mockResolvedValue(null)
})

afterEach(() => { cleanup(); vi.useRealTimers(); vi.clearAllMocks(); window.localStorage.clear() })

describe('progress recovery', () => {
  it('keeps the validated result and explanation after restarting offline', async () => {
    window.localStorage.setItem('study_progress_v1', JSON.stringify(storedProgress()))
    const { result } = renderHook(() => useProgress({ questions: noQuestions, accountUser: null, isOnline: false }))
    await act(async () => {})
    expect(result.current.progressRestored).toBe(true)
    expect(result.current.answers).toEqual({ q1: 0 })
    expect(result.current.questionSnapshots.q1).toEqual(snapshot)
    await act(async () => { await vi.advanceTimersByTimeAsync(250) })
    expect(JSON.parse(window.localStorage.getItem('study_progress_v1')!).questionSnapshots.q1.correctOption).toBe(0)
  })

  it('records different attempts with identical scores once each and restores both', async () => {
    const { result, unmount } = renderHook(() => useProgress({ questions: noQuestions, accountUser: null, isOnline: false }))
    await act(async () => {})
    act(() => {
      result.current.recordCompletedSimulation(simulation)
      result.current.recordCompletedSimulation({ ...simulation, id: 'sim-2', completedAt: '2026-11-01T13:00:00.000Z' })
      result.current.recordCompletedSimulation(simulation)
    })
    expect(result.current.completedSimulations.map((entry) => entry.id)).toEqual(['sim-2', 'sim-1'])
    await act(async () => { await vi.advanceTimersByTimeAsync(250) })
    unmount()
    const restored = renderHook(() => useProgress({ questions: noQuestions, accountUser: null, isOnline: false }))
    await act(async () => {})
    expect(restored.result.current.completedSimulations).toHaveLength(2)
  })

  it('does not restart synchronization indefinitely after merging completed simulations', async () => {
    window.localStorage.setItem('study_progress_v1', JSON.stringify({ ...storedProgress(), completedSimulations: [simulation] }))
    const { result } = renderHook(() => useProgress({ questions: noQuestions, accountUser: user, isOnline: true }))
    await act(async () => {})
    await act(async () => { await vi.advanceTimersByTimeAsync(500) })
    expect(result.current.syncStatus).toBe('synced')
    await act(async () => { await vi.advanceTimersByTimeAsync(2000) })
    expect(syncStudyProgress).toHaveBeenCalledTimes(1)
    expect(result.current.questionSnapshots.q1.correctOption).toBe(0)
  })

  it('recovers previously cleared results for anonymous sessions from their own attempts', async () => {
    const progress = storedProgress()
    progress.questionSnapshots.q1 = { ...snapshot, correctOption: null, explanation: null }
    window.localStorage.setItem('study_progress_v1', JSON.stringify(progress))
    vi.mocked(loadValidatedAnswers).mockResolvedValue([{ question_id: 'q1', selected_option: 0, correct_option: 0, explanation: snapshot.explanation, submitted_at: simulation.completedAt }])
    const anonymousUser = { ...user, email: null, is_anonymous: true }
    const { result } = renderHook(() => useProgress({ questions: noQuestions, accountUser: anonymousUser, isOnline: true }))
    await act(async () => {})
    expect(loadValidatedAnswers).toHaveBeenCalledWith(user.id)
    expect(result.current.questionSnapshots.q1).toEqual(snapshot)
  })

  it('preserves a newer offline choice when restoring an older server attempt', async () => {
    const progress = storedProgress()
    progress.answers = { q1: 1 }
    window.localStorage.setItem('study_progress_v1', JSON.stringify(progress))
    vi.mocked(loadValidatedAnswers).mockResolvedValue([{ question_id: 'q1', selected_option: 0, correct_option: 0, explanation: snapshot.explanation, submitted_at: simulation.completedAt }])
    const anonymousUser = { ...user, email: null, is_anonymous: true }
    const { result } = renderHook(() => useProgress({ questions: noQuestions, accountUser: anonymousUser, isOnline: true }))
    await act(async () => {})
    expect(result.current.answers.q1).toBe(1)
  })
})
