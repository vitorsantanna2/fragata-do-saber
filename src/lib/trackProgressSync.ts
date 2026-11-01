import { supabase } from './supabase'
import { mergeTrackEntries, parseTrackEntries, type TrackEntries, type TrackEntry } from './trackProgress'

type Row = { user_id: string; track_id: string; step_id: string; status: TrackEntry['status']; updated_at: string }

export async function syncTrackProgress(userId: string, local: TrackEntries): Promise<TrackEntries> {
  if (!supabase) throw new Error('Supabase não configurado.')
  const { data: auth, error: authError } = await supabase.auth.getUser()
  if (authError) throw authError
  if (!auth.user || auth.user.id !== userId || auth.user.is_anonymous) throw new Error('Entre na mesma conta para sincronizar as trilhas.')
  async function readRemote() {
    const entries: TrackEntries = {}
    for (let page = 0; ; page++) {
      const { data, error } = await supabase!.from('user_track_progress')
        .select('user_id,track_id,step_id,status,updated_at').eq('user_id', userId)
        .order('track_id').order('step_id').range(page * 500, page * 500 + 499)
      if (error) throw error
      const rows = (data ?? []) as Row[]
      for (const row of rows) entries[`${row.track_id}/${row.step_id}`] = { status: row.status, updatedAt: row.updated_at }
      if (rows.length < 500) break
    }
    return parseTrackEntries({ version: 2, entries })
  }
  const remote = await readRemote()
  const merged = mergeTrackEntries(local, remote)
  const uploads = Object.entries(merged).flatMap(([key, entry]) => {
    if (remote[key]?.status === entry.status && remote[key]?.updatedAt === entry.updatedAt) return []
    const [track_id, step_id] = key.split('/')
    return [{ user_id: userId, track_id, step_id, status: entry.status, updated_at: entry.updatedAt }]
  })
  for (let offset = 0; offset < uploads.length; offset += 100) {
    const { error } = await supabase.from('user_track_progress').upsert(uploads.slice(offset, offset + 100), { onConflict: 'user_id,track_id,step_id' })
    if (error) throw error
  }
  // Outro aparelho pode ter gravado durante o envio; leia o que o trigger manteve.
  return uploads.length ? mergeTrackEntries(merged, await readRemote()) : merged
}
