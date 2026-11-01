import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react'
import { useAdminRoute } from '../hooks/useAdminRoute'

beforeEach(() => window.history.replaceState(null, '', '#inicio'))
afterEach(() => { cleanup(); window.history.replaceState(null, '', '#inicio') })

describe('administrative URL', () => {
  it('opens the panel directly and keeps it open when the app mounts again', () => {
    window.history.replaceState(null, '', '#admin')
    const firstVisit = renderHook(() => useAdminRoute())
    expect(firstVisit.result.current.adminMode).toBe(true)
    firstVisit.unmount()
    const reload = renderHook(() => useAdminRoute())
    expect(reload.result.current.adminMode).toBe(true)
  })

  it('follows navigation to the link and the browser back and forward buttons', async () => {
    const { result } = renderHook(() => useAdminRoute())
    expect(result.current.adminMode).toBe(false)
    act(() => { window.location.hash = 'admin' })
    await waitFor(() => expect(result.current.adminMode).toBe(true))
    act(() => window.history.back())
    await waitFor(() => expect(result.current.adminMode).toBe(false))
    act(() => window.history.forward())
    await waitFor(() => expect(result.current.adminMode).toBe(true))
  })

  it('returns to the app and removes the administrative URL when the panel closes', async () => {
    window.history.replaceState(null, '', '#admin')
    const { result } = renderHook(() => useAdminRoute())
    act(() => result.current.closeAdmin())
    await waitFor(() => expect(result.current.adminMode).toBe(false))
    expect(window.location.hash).toBe('#inicio')
  })
})
