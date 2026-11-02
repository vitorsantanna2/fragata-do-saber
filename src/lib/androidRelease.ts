export const androidReleasesUrl = 'https://github.com/vitorsantanna2/fragata-do-saber/releases'
const endpoint = 'https://api.github.com/repos/vitorsantanna2/fragata-do-saber/releases?per_page=100'
const downloadPrefix = '/vitorsantanna2/fragata-do-saber/releases/download/'
export type AndroidRelease = { version: string; apkUrl: string; beta: boolean; publishedAt: string }

export function pickAndroidRelease(data: unknown): AndroidRelease | null {
  if (!Array.isArray(data)) return null
  const candidates: AndroidRelease[] = []
  for (const release of data) {
    if (!release || release.draft !== false || typeof release.tag_name !== 'string' || !release.tag_name.trim()
      || typeof release.published_at !== 'string' || !Number.isFinite(Date.parse(release.published_at)) || !Array.isArray(release.assets)) continue
    for (const asset of release.assets) {
      if (!asset || asset.state !== 'uploaded' || !(asset.size > 0) || typeof asset.name !== 'string'
        || !/^fragata-do-saber-.*\.apk$/i.test(asset.name) || typeof asset.browser_download_url !== 'string') continue
      try {
        const url = new URL(asset.browser_download_url)
        if (url.protocol !== 'https:' || url.hostname !== 'github.com' || url.username || url.password
          || !url.pathname.startsWith(downloadPrefix) || !url.pathname.endsWith('.apk')) continue
        candidates.push({ version: release.tag_name, apkUrl: url.href, beta: release.prerelease === true, publishedAt: release.published_at })
        break
      } catch { /* Resposta inválida não pode alterar o destino do botão. */ }
    }
  }
  return candidates.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))[0] ?? null
}

export function createAndroidReleaseLoader(request: typeof fetch) {
  let cached: AndroidRelease | null = null
  let checkedAt: number | null = null
  let pending: Promise<AndroidRelease | null> | null = null
  return function load(): Promise<AndroidRelease | null> {
    if (pending) return pending
    if (checkedAt !== null && Date.now() - checkedAt < 5 * 60_000) return Promise.resolve(cached)
    pending = (async () => {
      const controller = new AbortController()
      const timer = window.setTimeout(() => controller.abort(), 5000)
      try {
        const response = await request(endpoint, { headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal })
        if (!response.ok) throw new Error('Catálogo de releases indisponível.')
        cached = pickAndroidRelease(await response.json())
      } catch { /* Mantém o último link válido ou oferece a página de releases. */ }
      finally { window.clearTimeout(timer); checkedAt = Date.now(); pending = null }
      return cached
    })()
    return pending
  }
}

export const loadAndroidRelease = createAndroidReleaseLoader((...args) => fetch(...args))
