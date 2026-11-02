import { beforeEach, describe, expect, it, vi } from 'vitest'
const mock = vi.hoisted(() => ({ cached: vi.fn(), save: vi.fn(), range: vi.fn(), pages: [] as any[] }))
vi.mock('../lib/localDatabase', () => ({ cacheMindMaps: mock.save, readCachedMindMaps: mock.cached, setMindMapLocalPath: vi.fn() }))
vi.mock('../lib/supabase', () => ({ supabase: { from: () => {
  const query = { select: () => query, eq: () => query, order: () => query, range: mock.range }
  return query
} } }))
import { loadMindMaps } from '../lib/mindMaps'
const map = { id: 'map1', title: 'Linux', subject: 'Linux', content_type: 'image/png', storage_path: 'map.png', local_path: 'mind-maps/map.png', sort_order: 0, updated_at: '2026-11-02T12:00:00Z', description: null }
beforeEach(() => {
  vi.clearAllMocks()
  mock.cached.mockResolvedValue([map])
  mock.save.mockResolvedValue(undefined)
  mock.range.mockImplementation(async () => mock.pages.shift())
})
describe('published mind map catalog', () => {
  it('reconciles an empty published catalog instead of keeping old maps', async () => {
    mock.pages = [{ data: [], count: 0, error: null }]
    expect(await loadMindMaps()).toEqual([])
    expect(mock.save).toHaveBeenCalledWith([], true)
  })
  it('downloads all pages before replacing the catalog', async () => {
    mock.pages = [{ data: [map], count: 2, error: null }, { data: [{ ...map, id: 'map2' }], count: 2, error: null }]
    expect(await loadMindMaps()).toHaveLength(2)
    expect(mock.range.mock.calls).toEqual([[0, 499], [1, 500]])
    expect(mock.save).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({ id: 'map1' }), expect.objectContaining({ id: 'map2' })]), true)
  })
  it('preserves the previous cache if a later page fails or the catalog is incomplete', async () => {
    mock.pages = [{ data: [map], count: 2, error: null }, { data: [], count: 2, error: null }]
    expect(await loadMindMaps()).toEqual([map])
    expect(mock.save).not.toHaveBeenCalled()
    mock.pages = [{ data: [map], count: 2, error: null }, { data: null, error: new Error('network failure') }]
    expect(await loadMindMaps()).toEqual([map])
    expect(mock.save).not.toHaveBeenCalled()
  })
})
