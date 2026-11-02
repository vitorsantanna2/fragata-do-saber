import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
const mock = vi.hoisted(() => ({ load: vi.fn(), native: false }))
vi.mock('@capacitor/core', () => ({ Capacitor: { isNativePlatform: () => mock.native } }))
vi.mock('../lib/androidRelease', () => ({ loadAndroidRelease: mock.load, androidReleasesUrl: 'https://github.com/vitorsantanna2/fragata-do-saber/releases' }))
import { AndroidDownloadLink } from '../components/AndroidDownloadLink'
const release = { version: 'v1.1.0-beta.2', apkUrl: 'https://github.com/vitorsantanna2/fragata-do-saber/releases/download/v1.1.0-beta.2/fragata-do-saber-v1.1.0-beta.2.apk', beta: true, publishedAt: '2026-11-02T12:00:00Z' }
beforeEach(() => { vi.clearAllMocks(); mock.native = false; mock.load.mockResolvedValue(release) })
afterEach(cleanup)

it('links to the published APK and updates after returning to the page', async () => {
  render(<AndroidDownloadLink />)
  expect((await screen.findByRole('link', { name: /APK v1.1.0-beta.2/ })).getAttribute('href')).toBe(release.apkUrl)
  mock.load.mockResolvedValue({ ...release, version: 'v1.1.0', beta: false })
  fireEvent.focus(window)
  expect(await screen.findByRole('link', { name: 'Baixar aplicativo Android (APK v1.1.0)' })).toBeTruthy()
  expect(screen.queryByText(/Beta/)).toBeNull()
})

it('offers the releases page if automatic detection is unavailable', async () => {
  mock.load.mockResolvedValue(null)
  render(<AndroidDownloadLink />)
  expect((await screen.findByRole('link', { name: 'Ver downloads do aplicativo Android' })).getAttribute('href')).toBe('https://github.com/vitorsantanna2/fragata-do-saber/releases')
})

it('does not request a download link inside the installed Android app', () => {
  mock.native = true
  render(<AndroidDownloadLink />)
  expect(screen.queryByRole('link')).toBeNull()
  expect(mock.load).not.toHaveBeenCalled()
})
