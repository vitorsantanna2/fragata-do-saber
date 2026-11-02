import type { MindMap } from '../lib/mindMaps'
import { matchesStepMindMap } from '../lib/trackMindMaps'
import type { StudyTrack, TrackStep } from '../lib/studyTracks'

export type StepMapResources = {
  items: MindMap[]
  loading: boolean
  busyId: string | null
  native: boolean
  onOpen: (map: MindMap) => void
  onDownload: (map: MindMap) => void
}

export function StepMindMaps({ track, step, items, loading, busyId, native, onOpen, onDownload }: StepMapResources & { track: StudyTrack; step: TrackStep }) {
  const maps = items.filter((map) => matchesStepMindMap(map, track, step))
  return <div className="mt-4 rounded-lg border border-line p-3" aria-label={`Mapas de ${step.title}`}>
    <h4 className="text-sm font-bold text-sea">Mapas mentais da etapa</h4>
    {loading && <p className="mt-2 text-xs text-muted">Atualizando mapas…</p>}
    {!loading && maps.length === 0 && <p className="mt-2 text-xs text-muted">Ainda não há mapas disponíveis para esta etapa neste catálogo.</p>}
    <ul className="space-y-3">{maps.map((map) => <li key={map.id} className="mt-3">
      <p className="text-sm font-bold">{map.title}</p>
      <p className="mt-1 text-xs text-muted">{map.content_type === 'application/pdf' ? 'PDF' : 'Imagem'} · {map.local_path ? 'Disponível offline' : 'Ainda não baixado'}</p>
      <div className="mt-2 flex flex-wrap gap-2"><button type="button" disabled={busyId === map.id} onClick={() => onOpen(map)} className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-sea disabled:opacity-50">{busyId === map.id ? 'Preparando…' : 'Abrir mapa'}</button>{native && !map.local_path && <button type="button" disabled={busyId === map.id} onClick={() => onDownload(map)} className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-sea disabled:opacity-50">Baixar para usar offline</button>}</div>
    </li>)}</ul>
  </div>
}
