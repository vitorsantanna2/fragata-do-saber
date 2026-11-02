import { useEffect, useState } from 'react'

export function useSyncRefresh(enabled: boolean) {
  const [revision, setRevision] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let active = true
    const refresh = () => setRevision((value) => value + 1)
    // Força leitura remota também ao entrar na conta ou reconectar sem edições locais.
    void Promise.resolve().then(() => { if (active) refresh() })
    const visible = () => { if (document.visibilityState === 'visible') refresh() }
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') refresh()
    }, 30_000)
    window.addEventListener('focus', refresh)
    window.addEventListener('online', refresh)
    document.addEventListener('visibilitychange', visible)
    return () => {
      active = false
      window.clearInterval(timer)
      window.removeEventListener('focus', refresh)
      window.removeEventListener('online', refresh)
      document.removeEventListener('visibilitychange', visible)
    }
  }, [enabled])
  return revision
}
