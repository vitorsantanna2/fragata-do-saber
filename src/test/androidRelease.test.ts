import { afterEach, describe, expect, it, vi } from 'vitest'
import { createAndroidReleaseLoader, pickAndroidRelease } from '../lib/androidRelease'

const release = (version: string, publishedAt: string, beta = true) => ({
  tag_name: version, draft: false, prerelease: beta, published_at: publishedAt,
  assets: [{ state: 'uploaded', size: 1000, name: `fragata-do-saber-${version}.apk`, browser_download_url: `https://github.com/vitorsantanna2/fragata-do-saber/releases/download/${version}/fragata-do-saber-${version}.apk` }],
})
const old = release('v1.1.0-beta.1', '2026-11-01T12:00:00Z')
const next = release('v1.1.0-beta.2', '2026-11-02T12:00:00Z')
const response = (data: unknown) => ({ ok: true, json: async () => data }) as Response
afterEach(() => vi.useRealTimers())

describe('automatic APK release selection', () => {
  it('selects the most recently published APK including beta releases and ignores drafts', () => {
    const draft = { ...release('v2.0.0', '2026-11-03T12:00:00Z'), draft: true }
    expect(pickAndroidRelease([old, draft, next])).toMatchObject({ version: next.tag_name, beta: true, apkUrl: next.assets[0].browser_download_url })
  })

  it('keeps the previous APK while a new release has no completed upload', () => {
    expect(pickAndroidRelease([old, { ...next, assets: [] }])?.version).toBe(old.tag_name)
    expect(pickAndroidRelease([old, { ...next, assets: [{ ...next.assets[0], state: 'new' }] }])?.version).toBe(old.tag_name)
    expect(pickAndroidRelease([old, { ...next, assets: [{ ...next.assets[0], size: 0 }] }])?.version).toBe(old.tag_name)
  })

  it('rejects unrelated or unsafe links and malformed responses', () => {
    for (const url of ['javascript:alert(1)', 'https://evil.example/app.apk', 'https://github.com/other/project/releases/download/v1/app.apk']) {
      expect(pickAndroidRelease([{ ...next, assets: [{ ...next.assets[0], browser_download_url: url }] }])).toBeNull()
    }
    expect(pickAndroidRelease({ error: 'rate limit' })).toBeNull()
    expect(pickAndroidRelease([null, {}])).toBeNull()
  })

  it('shares requests, caches briefly and picks up a new publication after cache expiration', async () => {
    vi.useFakeTimers()
    const request = vi.fn<typeof fetch>().mockResolvedValue(response([old]))
    const load = createAndroidReleaseLoader(request)
    const first = load(), second = load()
    expect(first).toBe(second)
    expect((await first)?.version).toBe(old.tag_name)
    await load()
    expect(request).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(5 * 60_000 + 1)
    request.mockResolvedValue(response([old, next]))
    expect((await load())?.version).toBe(next.tag_name)
    expect(request).toHaveBeenCalledTimes(2)
  })

  it('preserves a known valid link during API errors and falls back safely without one', async () => {
    vi.useFakeTimers()
    const request = vi.fn<typeof fetch>().mockResolvedValue(response([old]))
    const load = createAndroidReleaseLoader(request)
    await load()
    await vi.advanceTimersByTimeAsync(5 * 60_000 + 1)
    request.mockResolvedValue({ ok: false } as Response)
    expect((await load())?.version).toBe(old.tag_name)
    expect(await createAndroidReleaseLoader(request)()).toBeNull()
  })

  it('times out instead of leaving a hanging request', async () => {
    vi.useFakeTimers()
    const request = vi.fn<typeof fetch>().mockImplementation((_url, init) => new Promise((_resolve, reject) => {
      init?.signal?.addEventListener('abort', () => reject(new Error('aborted')))
    }))
    const pending = createAndroidReleaseLoader(request)()
    await vi.advanceTimersByTimeAsync(5000)
    expect(await pending).toBeNull()
  })
})
