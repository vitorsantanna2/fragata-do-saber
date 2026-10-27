import { Capacitor } from '@capacitor/core'
import { FileOpener } from '@capacitor-community/file-opener'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { cacheMindMaps, readCachedMindMaps, setMindMapLocalPath, type CachedMindMap } from './localDatabase'
import { supabase } from './supabase'

export type MindMap = CachedMindMap

const MAPS_DIRECTORY = 'mind-maps'

export async function loadMindMaps(): Promise<MindMap[]> {
  const localMaps = await readCachedMindMaps()
  if (typeof navigator !== 'undefined' && !navigator.onLine) return localMaps
  if (!supabase) return localMaps

  const { data, error } = await supabase
    .from('mind_maps')
    .select('id, title, subject, description, storage_path, content_type, sort_order, updated_at')
    .eq('is_published', true)
    .order('subject')
    .order('sort_order')
    .order('title')

  if (error) {
    if (localMaps.length) return localMaps
    throw error
  }

  const maps = (data ?? []) as Omit<MindMap, 'local_path'>[]
  await cacheMindMaps(maps)
  const syncedMaps = await readCachedMindMaps()
  const downloadedPaths = new Map(syncedMaps.filter((map) => map.local_path).map((map) => [map.id, map.local_path]))
  return maps.map((map) => ({ ...map, local_path: downloadedPaths.get(map.id) ?? null }))
}

function extensionFor(map: MindMap) {
  if (map.content_type === 'application/pdf') return 'pdf'
  if (map.content_type === 'image/png') return 'png'
  if (map.content_type === 'image/webp') return 'webp'
  return 'jpg'
}

export async function downloadMindMap(map: MindMap) {
  if (!supabase) throw new Error('A conexão com o catálogo não está disponível.')
  const { data, error } = await supabase.storage.from('mind-maps').download(map.storage_path)
  if (error) throw error

  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '')
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(data)
  })
  const localPath = `${MAPS_DIRECTORY}/${map.id}.${extensionFor(map)}`
  await Filesystem.writeFile({ path: localPath, directory: Directory.Data, data: dataUrl, recursive: true })
  await setMindMapLocalPath(map.id, localPath)
  return localPath
}

export async function getMindMapUrl(map: MindMap) {
  if (map.local_path && Capacitor.isNativePlatform()) {
    const { uri } = await Filesystem.getUri({ path: map.local_path, directory: Directory.Data })
    return Capacitor.convertFileSrc(uri)
  }
  if (!supabase) throw new Error('Este mapa ainda não foi baixado para uso offline.')
  const { data, error } = await supabase.storage.from('mind-maps').createSignedUrl(map.storage_path, 60 * 60)
  if (error) throw error
  return data.signedUrl
}

export async function openMindMapPdf(map: MindMap) {
  if (map.local_path && Capacitor.isNativePlatform()) {
    const { uri } = await Filesystem.getUri({ path: map.local_path, directory: Directory.Data })
    await FileOpener.open({ filePath: uri, contentType: 'application/pdf' })
    return
  }
  if (!supabase) throw new Error('Este mapa ainda não foi baixado para uso offline.')
  const { data, error } = await supabase.storage.from('mind-maps').createSignedUrl(map.storage_path, 60 * 60)
  if (error) throw error
  window.open(data.signedUrl, '_blank', 'noopener,noreferrer')
}
