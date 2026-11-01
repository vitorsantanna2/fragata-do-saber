import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react'
import { useStudyFocus } from '../hooks/useStudyFocus'

beforeEach(() => window.localStorage.clear())
afterEach(() => { cleanup(); window.localStorage.clear() })

describe('persistent study focus', () => {
  it('restores the chosen contest when the app is opened again', () => {
    const first = renderHook(() => useStudyFocus())
    act(() => first.result.current.setSelectedExamId('cp-t-informatica'))
    first.unmount()
    expect(renderHook(() => useStudyFocus()).result.current.selectedExamId).toBe('cp-t-informatica')
  })

  it('saves an explicitly changed contest and clears it when returning to the chooser', () => {
    const { result } = renderHook(() => useStudyFocus())
    act(() => result.current.setSelectedExamId('cp-t-informatica'))
    act(() => result.current.setSelectedExamId('ea-hsg'))
    const changed = renderHook(() => useStudyFocus())
    expect(changed.result.current.selectedExamId).toBe('ea-hsg')
    act(() => changed.result.current.setSelectedExamId(null))
    expect(renderHook(() => useStudyFocus()).result.current.selectedExamId).toBeNull()
  })

  it('ignores a saved contest that is not in the catalog', () => {
    window.localStorage.setItem('fragata-study-focus-v1', 'removed-course')
    expect(renderHook(() => useStudyFocus()).result.current.selectedExamId).toBeNull()
  })
})
