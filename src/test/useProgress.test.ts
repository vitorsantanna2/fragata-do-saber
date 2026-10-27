import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useProgress } from '../hooks/useProgress'

function renderUseProgress({
  questions = [],
  accountUser = null,
  isOnline = false,
}: any = {}) {
  return renderHook(() => useProgress({ questions, accountUser, isOnline }))
}

describe('useProgress', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    window.localStorage.clear()
  })

  it('setAnswers updates answers', () => {
    const { result } = renderUseProgress()
    act(() => {
      result.current.setAnswers({ q1: 0, q2: 1 })
    })
    expect(result.current.answers).toEqual({ q1: 0, q2: 1 })
  })

  it('setRevealed updates revealed', () => {
    const { result } = renderUseProgress()
    act(() => {
      result.current.setRevealed(['q1'])
    })
    expect(result.current.revealed).toEqual(['q1'])
  })

  it('setFavorites updates favorites', () => {
    const { result } = renderUseProgress()
    act(() => {
      result.current.setFavorites(['q1'])
    })
    expect(result.current.favorites).toEqual(['q1'])
  })

  it('setSavedSimulation updates saved simulation', () => {
    const simulation = { ids: ['q1', 'q2'], answers: {}, revealed: [], examId: 'cp-t-informatica', studyMode: 'exam-questions' as const, lastQuestionId: null, updatedAt: '2024-01-01' }
    const { result } = renderUseProgress()
    act(() => {
      result.current.setSavedSimulation(simulation)
    })
    expect(result.current.savedSimulation).toEqual(simulation)
  })

  it('setSimulationRevealed updates simulation revealed', () => {
    const { result } = renderUseProgress()
    act(() => {
      result.current.setSimulationRevealed(['q1'])
    })
    expect(result.current.simulationRevealed).toEqual(['q1'])
  })

  it('setProgressRestored updates progressRestored', () => {
    const { result } = renderUseProgress()
    expect(result.current.progressRestored).toBe(false)
    act(() => {
      result.current.setProgressRestored(true)
    })
    expect(result.current.progressRestored).toBe(true)
  })

  it('setSyncStatus updates sync status', () => {
    const { result } = renderUseProgress()
    act(() => {
      result.current.setSyncStatus('synced')
    })
    expect(result.current.syncStatus).toBe('synced')
  })

  it('default syncStatus is local when no account user', () => {
    const { result } = renderUseProgress({ accountUser: null, isOnline: false })
    expect(result.current.syncStatus).toBe('local')
  })

  it('syncStatus is offline when no internet', async () => {
    const { result } = renderUseProgress({
      accountUser: { id: 'u1', email: 'a@b.com', is_anonymous: false },
      isOnline: false,
    })
    await act(async () => {
      await Promise.resolve()
    })
    expect(result.current.syncStatus).toBe('offline')
  })

  it('populates question snapshots from questions prop', () => {
    const questions = [
      { id: 'q1', exam: 'E', subject: 'S', topic: 'T', year: '2020', questionType: 'exam', prompt: 'P', answer: 0 },
    ]
    const { result } = renderUseProgress({ questions })
    const snapshot = result.current.questionSnapshots.q1
    expect(snapshot).toMatchObject({
      exam: 'E',
      subject: 'S',
      topic: 'T',
      year: '2020',
      questionType: 'exam',
      prompt: 'P',
      correctOption: 0,
    })
  })
})
