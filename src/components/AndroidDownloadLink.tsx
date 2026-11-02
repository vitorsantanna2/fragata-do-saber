import { Capacitor } from '@capacitor/core'
import { useEffect, useState } from 'react'
import { androidReleasesUrl, loadAndroidRelease, type AndroidRelease } from '../lib/androidRelease'

function WebAndroidDownloadLink() {
  const [release, setRelease] = useState<AndroidRelease | null>(null)
  useEffect(() => {
    let active = true
    const refresh = () => { void loadAndroidRelease().then((value) => { if (active) setRelease(value) }) }
    const onVisible = () => { if (document.visibilityState === 'visible') refresh() }
    refresh()
    window.addEventListener('focus', refresh)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      active = false
      window.removeEventListener('focus', refresh)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])
  return <a href={release?.apkUrl ?? androidReleasesUrl} className="inline-flex items-center justify-center rounded-lg border border-sea bg-sea-light px-3 py-2 text-sm font-bold text-sea transition hover:bg-sea hover:text-white" title={release ? `Versão ${release.version}` : 'Ver versões disponíveis no GitHub'} aria-label={release ? `Baixar aplicativo Android (APK ${release.version})` : 'Ver downloads do aplicativo Android'}>{release ? `Baixar para Android${release.beta ? ' · Beta' : ''}` : 'Downloads para Android'}</a>
}

export function AndroidDownloadLink() {
  if (Capacitor.isNativePlatform()) return null
  return <WebAndroidDownloadLink />
}
