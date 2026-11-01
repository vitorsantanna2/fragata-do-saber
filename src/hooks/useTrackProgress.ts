import { useEffect, useRef, useState } from 'react'
import { getLocalMetadata, isNativeApp, setLocalMetadata } from '../lib/localDatabase'
import { trackProgressKey, type TrackStatus } from '../lib/studyTracks'
import { changeTrackEntry, mergeTrackEntries, parseTrackEntries, serializeTrackEntries, visibleTrackProgress, type TrackEntries } from '../lib/trackProgress'
import { syncTrackProgress } from '../lib/trackProgressSync'

type Session = { key: string; entries: TrackEntries; active: boolean; queue: Promise<unknown> }
type SyncStatus = 'local' | 'offline' | 'syncing' | 'synced' | 'error'

async function persist(key: string, entries: TrackEntries) {
  const serialized = serializeTrackEntries(entries)
  if (isNativeApp()) await setLocalMetadata(key, serialized)
  else localStorage.setItem(key, serialized)
}

// Mantido no App para enviar alterações mesmo depois que o aluno sair da trilha.
export function useTrackProgress(userId: string | null, canSync = false, isOnline = true) {
  const storageKey = `study_tracks_v1:${userId ?? 'guest'}`
  const sessionRef = useRef<Session | null>(null)
  const [saved, setSaved] = useState<{ key: string; entries: TrackEntries } | null>(null)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [syncState, setSyncState] = useState<SyncStatus>('syncing')
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    const session: Session = { key: storageKey, entries: {}, active: true, queue: Promise.resolve() }
    sessionRef.current = session
    session.queue = (async () => {
      try {
        const raw = isNativeApp() ? await getLocalMetadata(storageKey) : localStorage.getItem(storageKey)
        session.entries = raw ? parseTrackEntries(JSON.parse(raw)) : {}
        if (session.active) {
          setSaved({ key: storageKey, entries: session.entries })
          setError('')
          setSaving(false)
          setSyncState('syncing')
        }
      } catch {
        if (session.active) setError('Não foi possível ler o progresso das trilhas. Reabra o aplicativo para tentar novamente.')
      }
    })()
    return () => { session.active = false }
  }, [storageKey])

  useEffect(() => {
    const retry = () => setRevision((value) => value + 1)
    const onVisible = () => { if (document.visibilityState === 'visible') retry() }
    window.addEventListener('focus', retry)
    document.addEventListener('visibilitychange', onVisible)
    const timer = window.setInterval(retry, 30_000)
    return () => {
      window.removeEventListener('focus', retry)
      document.removeEventListener('visibilitychange', onVisible)
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (!canSync || !userId || !isOnline || saved?.key !== storageKey) return
    const session = sessionRef.current
    if (!session || session.key !== storageKey) return
    let active = true
    const timer = window.setTimeout(() => {
      setSyncState('syncing')
      void syncTrackProgress(userId, saved.entries).then(async (remote) => {
        if (!active || !session.active) return
        // Serializa gravações sem bloquear alterações locais durante a rede.
        const commit = session.queue.then(async () => {
          if (!active || !session.active) return
          const merged = mergeTrackEntries(session.entries, remote)
          if (serializeTrackEntries(merged) !== serializeTrackEntries(session.entries)) {
            await persist(session.key, merged)
            session.entries = merged
            if (session.active) setSaved({ key: session.key, entries: merged })
          }
          if (active && session.active) setSyncState('synced')
        })
        session.queue = commit.catch(() => {})
        await commit
      }).catch((cause: unknown) => {
        if (!active || !session.active) return
        setSyncState('error')
        console.warn('Não foi possível sincronizar as trilhas.', cause)
      })
    }, 450)
    return () => { active = false; window.clearTimeout(timer) }
  }, [storageKey, userId, canSync, isOnline, saved, revision])

  async function setStatus(trackId: string, stepId: string, status: TrackStatus | null) {
    const session = sessionRef.current
    if (!session?.active || session.key !== storageKey || saved?.key !== storageKey || saving) return
    setSaving(true)
    const commit = session.queue.then(async () => {
      if (!session.active) return
      const entries = changeTrackEntry(session.entries, trackProgressKey(trackId, stepId), status)
      await persist(session.key, entries)
      session.entries = entries
      if (session.active) {
        setSaved({ key: session.key, entries })
        setError('')
      }
    })
    session.queue = commit.catch(() => {})
    try { await commit }
    catch { if (session.active) setError('Não foi possível salvar esta alteração. Tente novamente.') }
    finally { if (session.active) setSaving(false) }
  }

  return {
    progress: visibleTrackProgress(saved?.key === storageKey ? saved.entries : {}),
    ready: saved?.key === storageKey, saving, error, setStatus,
    syncStatus: !canSync ? 'local' as const : !isOnline ? 'offline' as const : syncState,
    retrySync: () => setRevision((value) => value + 1),
  }
}
