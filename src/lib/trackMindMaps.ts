import { normalizeSearchText } from './utils'
import { canonicalTrackStepKey, trackProgressKey, type StudyTrack, type TrackStep } from './studyTracks'

export function matchesStepMindMap(map: { subject: string; track_steps?: string[] }, track: StudyTrack, step: TrackStep) {
  if (map.track_steps?.length) return map.track_steps.some((key) => canonicalTrackStepKey(key) === trackProgressKey(track.id, step.id))
  // Compatibilidade com mapas antigos, sem inferir por trechos do título.
  const subject = normalizeSearchText(map.subject.trim())
  return !!subject && [step.title, ...step.topics].some((topic) => normalizeSearchText(topic.trim()) === subject)
}
