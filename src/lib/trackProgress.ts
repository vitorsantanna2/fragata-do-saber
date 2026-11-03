import { parseTrackProgress, studyTracks, trackProgressKey, mergedTrackSteps, type TrackProgress, type TrackStatus } from './studyTracks'

export type TrackEntry = { status: TrackStatus | 'not-started'; updatedAt: string }
export type TrackEntries = Record<string, TrackEntry>
const legacyDate = '1970-01-01T00:00:00.000Z'
const knownKeys = new Set(studyTracks.flatMap((track) => track.steps.map((step) => trackProgressKey(track.id, step.id))))
const previousKeys = new Set(mergedTrackSteps.flatMap((group) => group.previousKeys))

export function parseTrackEntries(value: unknown): TrackEntries {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const data = value as Record<string, unknown>
  if (data.version !== 2) {
    return Object.fromEntries(Object.entries(parseTrackProgress(value)).map(([key, status]) => [key, { status, updatedAt: legacyDate }]))
  }
  if (!data.entries || typeof data.entries !== 'object' || Array.isArray(data.entries)) return {}
  const entries: TrackEntries = {}
  for (const [key, raw] of Object.entries(data.entries)) {
    if ((!knownKeys.has(key) && !previousKeys.has(key)) || !raw || typeof raw !== 'object') continue
    const entry = raw as TrackEntry
    if (!['studying', 'completed', 'not-started'].includes(entry.status) || typeof entry.updatedAt !== 'string' || !Number.isFinite(Date.parse(entry.updatedAt))) continue
    entries[key] = { status: entry.status, updatedAt: new Date(entry.updatedAt).toISOString() }
  }
  for (const group of mergedTrackSteps) {
    const previous = group.previousKeys.map((key) => entries[key])
    const latest = Math.max(...previous.map((entry) => entry ? Date.parse(entry.updatedAt) : Number.NEGATIVE_INFINITY))
    if (Number.isFinite(latest) && (!entries[group.key] || Date.parse(entries[group.key].updatedAt) < latest)) {
      const status = previous.every((entry) => entry?.status === 'completed') ? 'completed'
        : previous.some((entry) => entry && entry.status !== 'not-started') ? 'studying' : 'not-started'
      entries[group.key] = { status, updatedAt: new Date(latest + 1).toISOString() }
    }
    for (const key of group.previousKeys) delete entries[key]
  }
  return entries
}

export function mergeTrackEntries(local: TrackEntries, remote: TrackEntries): TrackEntries {
  const merged = { ...local }
  for (const [key, entry] of Object.entries(remote)) {
    const previous = merged[key]
    const difference = previous ? Date.parse(entry.updatedAt) - Date.parse(previous.updatedAt) : 1
    // Mesmo desempate ASCII do trigger SQL, independente da ordem de chegada.
    if (!previous || difference > 0 || (difference === 0 && entry.status > previous.status)) merged[key] = entry
  }
  return merged
}

export function visibleTrackProgress(entries: TrackEntries): TrackProgress {
  return Object.fromEntries(Object.entries(entries).flatMap(([key, entry]) => entry.status === 'not-started' ? [] : [[key, entry.status]])) as TrackProgress
}

export function serializeTrackEntries(entries: TrackEntries) {
  return JSON.stringify({ version: 2, entries: Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b))) })
}

export function changeTrackEntry(entries: TrackEntries, key: string, status: TrackStatus | null): TrackEntries {
  if (!knownKeys.has(key)) return entries
  const updatedAt = new Date(Math.max(Date.now(), (Date.parse(entries[key]?.updatedAt ?? '') || 0) + 1)).toISOString()
  return { ...entries, [key]: { status: status ?? 'not-started', updatedAt } }
}
