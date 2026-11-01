import { beforeEach, describe, expect, it, vi } from 'vitest'
import { changeTrackEntry, mergeTrackEntries, parseTrackEntries, visibleTrackProgress } from '../lib/trackProgress'

const mock = vi.hoisted(() => ({ rows: [] as any[], upserts: [] as any[], getUser: vi.fn(), fail: false, afterUpload: null as null | (() => void) }))
vi.mock('../lib/supabase', () => ({ supabase: {
  auth: { getUser: mock.getUser },
  from: () => ({
    select: () => {
      const query = { eq: vi.fn(() => query), order: vi.fn(() => query), range: vi.fn(async (from: number, to: number) => ({ data: mock.rows.slice(from, to + 1), error: mock.fail ? new Error('schema missing') : null })) }
      return query
    },
    upsert: async (rows: any[]) => {
      mock.upserts.push(...rows)
      for (const row of rows) {
        const index = mock.rows.findIndex((item) => item.track_id === row.track_id && item.step_id === row.step_id)
        if (index < 0) mock.rows.push(row)
        else mock.rows[index] = row
      }
      mock.afterUpload?.()
      return { error: null }
    },
  }),
} }))
import { syncTrackProgress } from '../lib/trackProgressSync'

const key = 'cpt-2026-infra/so'
const oldDate = '2026-11-01T10:00:00.000Z'
const newDate = '2026-11-01T11:00:00.000Z'
const row = (status: string, updated_at: string) => ({ user_id: 'student', track_id: 'cpt-2026-infra', step_id: 'so', status, updated_at })

beforeEach(() => {
  mock.rows = []; mock.upserts = []; mock.fail = false; mock.afterUpload = null
  mock.getUser.mockResolvedValue({ data: { user: { id: 'student', is_anonymous: false } }, error: null })
})

describe('synchronization of track progress', () => {
  it('migrates legacy statuses without making them newer than existing cloud edits', () => {
    const migrated = parseTrackEntries({ [key]: 'completed', 'cpt-2026-infra/linux': 'studying' })
    expect(migrated[key]).toEqual({ status: 'studying', updatedAt: '1970-01-01T00:00:00.000Z' })
    expect(mergeTrackEntries(migrated, { [key]: { status: 'not-started', updatedAt: newDate } })[key].status).toBe('not-started')
  })

  it('uploads an offline reopening and prevents an older completion from returning', async () => {
    mock.rows = [row('completed', oldDate)]
    const reset = { [key]: { status: 'not-started' as const, updatedAt: newDate } }
    expect(await syncTrackProgress('student', reset)).toEqual(reset)
    expect(mock.upserts[0].status).toBe('not-started')
    mock.upserts = []
    const otherDevice = await syncTrackProgress('student', { [key]: { status: 'completed', updatedAt: oldDate } })
    expect(visibleTrackProgress(otherDevice)).toEqual({})
    expect(mock.upserts).toEqual([])
  })

  it('reads remote changes made during an upload', async () => {
    mock.afterUpload = () => { mock.rows = [row('not-started', newDate)] }
    const merged = await syncTrackProgress('student', { [key]: { status: 'completed', updatedAt: oldDate } })
    expect(merged[key]).toEqual({ status: 'not-started', updatedAt: newDate })
  })

  it('resolves timestamp ties consistently and uses monotonic timestamps for local actions', () => {
    const a = { [key]: { status: 'completed' as const, updatedAt: oldDate } }
    const b = { [key]: { status: 'not-started' as const, updatedAt: oldDate } }
    expect(mergeTrackEntries(a, b)).toEqual(mergeTrackEntries(b, a))
    const future = { [key]: { status: 'completed' as const, updatedAt: '2099-01-01T00:00:00.000Z' } }
    expect(Date.parse(changeTrackEntry(future, key, null)[key].updatedAt)).toBe(Date.parse(future[key].updatedAt) + 1)
  })

  it('does not upload on schema failure or while authenticated as another account', async () => {
    mock.fail = true
    await expect(syncTrackProgress('student', {})).rejects.toThrow('schema missing')
    mock.fail = false
    await expect(syncTrackProgress('other-account', {})).rejects.toThrow('mesma conta')
    expect(mock.upserts).toEqual([])
  })

  it('paginates remote progress rather than stopping at the first page', async () => {
    mock.rows = [...Array.from({ length: 500 }, (_, i) => ({ ...row('studying', oldDate), track_id: `old-${i}` })), row('completed', newDate)]
    expect((await syncTrackProgress('student', {}))[key].status).toBe('completed')
  })
})
