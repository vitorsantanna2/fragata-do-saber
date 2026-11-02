import { useState } from 'react'
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useSimulationSession } from '../hooks/useSimulationSession'
import { getSimulationResult } from '../lib/simulationResults'
import type { SavedSimulation } from '../lib/localDatabaseTypes'

const simulation = (id: string): SavedSimulation => ({ id, ids: ['q1', 'q2'], answers: {}, revealed: [], examId: 'cp-t-informatica', studyMode: 'exam-questions', lastQuestionId: null, updatedAt: '2026-11-02T12:00:00Z' })
function deferred() {
  let resolve!: (value: { selectedOption: number } | null) => void
  const promise = new Promise<{ selectedOption: number } | null>((done) => { resolve = done })
  return { promise, resolve }
}
function useHarness() {
  const [saved, setSaved] = useState<SavedSimulation | null>(null)
  const session = useSimulationSession(setSaved)
  function start(id: string) {
    const next = simulation(id)
    setSaved(next)
    session.setSimulationAnswers({})
    session.setSimulationIds(next.ids)
  }
  return { ...session, saved, start }
}
afterEach(cleanup)

describe('concurrent simulation answers', () => {
  it('keeps both rapid answers in memory and the saved attempt when responses arrive in reverse order', async () => {
    const view = renderHook(useHarness)
    act(() => view.result.current.start('first'))
    const q1 = deferred(), q2 = deferred()
    let first!: Promise<void>, second!: Promise<void>
    act(() => {
      first = view.result.current.recordAnswer('q1', 'first', () => q1.promise)
      second = view.result.current.recordAnswer('q2', 'first', () => q2.promise)
    })
    await act(async () => { q2.resolve({ selectedOption: 1 }); await second })
    await act(async () => { q1.resolve({ selectedOption: 0 }); await first })
    expect(view.result.current.simulationAnswers).toEqual({ q1: 0, q2: 1 })
    expect(view.result.current.saved?.answers).toEqual({ q1: 0, q2: 1 })
    expect(getSimulationResult([{ id: 'q1', answer: 0 }, { id: 'q2', answer: 0 }], view.result.current.simulationIds, view.result.current.simulationAnswers)).toMatchObject({ complete: true, answeredCount: 2, correctCount: 1, score: 50 })
  })

  it('invalidates a pending answer before a new simulation uses the same question', async () => {
    const view = renderHook(useHarness)
    act(() => view.result.current.start('old'))
    const old = deferred()
    let isOldCurrent!: () => boolean
    let pending!: Promise<void>
    act(() => { pending = view.result.current.recordAnswer('q1', 'old', (valid) => { isOldCurrent = valid; return old.promise }) })
    act(() => view.result.current.start('new'))
    expect(isOldCurrent()).toBe(false)
    await act(async () => { await view.result.current.recordAnswer('q1', 'new', async () => ({ selectedOption: 1 })) })
    await act(async () => { old.resolve({ selectedOption: 0 }); await pending })
    expect(view.result.current.simulationAnswers).toEqual({ q1: 1 })
    expect(view.result.current.saved?.id).toBe('new')
    expect(view.result.current.saved?.answers).toEqual({ q1: 1 })
  })

  it('ignores validation after leaving the simulation', async () => {
    const view = renderHook(useHarness)
    act(() => view.result.current.start('attempt'))
    const old = deferred()
    let pending!: Promise<void>
    act(() => { pending = view.result.current.recordAnswer('q1', 'attempt', () => old.promise) })
    act(() => view.result.current.setSimulationIds(null))
    await act(async () => { old.resolve({ selectedOption: 0 }); await pending })
    expect(view.result.current.simulationAnswers).toEqual({})
    expect(view.result.current.saved?.answers).toEqual({})
  })

  it('allows concurrent different questions while blocking repeated clicks on the same pending question', async () => {
    const view = renderHook(useHarness)
    act(() => view.result.current.start('attempt'))
    const q1 = deferred()
    const submit = vi.fn(() => q1.promise)
    let first!: Promise<void>, duplicate!: Promise<void>
    act(() => {
      first = view.result.current.recordAnswer('q1', 'attempt', submit)
      duplicate = view.result.current.recordAnswer('q1', 'attempt', submit)
    })
    expect(submit).toHaveBeenCalledTimes(1)
    await act(async () => { q1.resolve(null); await first; await duplicate })
    await act(async () => { await view.result.current.recordAnswer('q1', 'attempt', async () => ({ selectedOption: 1 })) })
    expect(view.result.current.saved?.answers).toEqual({ q1: 1 })
  })
})
