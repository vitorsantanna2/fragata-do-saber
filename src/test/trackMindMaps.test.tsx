import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepMindMaps } from '../components/StepMindMaps'
import { matchesStepMindMap } from '../lib/trackMindMaps'
import { studyTracks, trackProgressKey } from '../lib/studyTracks'
import type { MindMap } from '../lib/mindMaps'

const track = studyTracks[0]
const step = track.steps.find((item) => item.id === 'so')!
const stepKey = trackProgressKey(track.id, step.id)
const map: MindMap = { id: 'map-so', title: 'Resumo de processos', subject: 'Informática', track_steps: [stepKey], description: null, storage_path: 'map.png', content_type: 'image/png', sort_order: 0, updated_at: '2026-11-02T12:00:00Z', local_path: null }
afterEach(cleanup)

describe('mind maps within study steps', () => {
  it.each([
    ['cpt-2026-dev', 'programacao', ['java', 'python']],
    ['cpt-2026-dev', 'engenharia-software', ['engenharia', 'apis', 'engenharia-rest', 'uml']],
    ['cpt-2026-dados', 'relacional-transacoes', ['relacional', 'transacoes']],
    ['cpt-2026-gestao', 'governanca-servicos', ['governanca', 'servicos']],
  ] as const)('keeps old map links available in %s/%s', (trackId, target, previous) => {
    const programmingTrack = studyTracks.find((item) => item.id === trackId)!
    const programming = programmingTrack.steps.find((item) => item.id === target)!
    for (const id of previous) {
      expect(matchesStepMindMap({ subject: 'Informática', track_steps: [`${trackId}/${id}`] }, programmingTrack, programming)).toBe(true)
    }
  })
  it('uses explicit links and exact legacy subjects without guessing by title', () => {
    expect(matchesStepMindMap(map, track, step)).toBe(true)
    expect(matchesStepMindMap({ ...map, track_steps: ['cpt-2026-infra/redes'], subject: 'Linux' }, track, step)).toBe(false)
    expect(matchesStepMindMap({ ...map, track_steps: [], subject: 'Sistemas operacionais' }, track, step)).toBe(true)
    expect(matchesStepMindMap({ ...map, track_steps: [], subject: 'Linux' }, track, step)).toBe(true)
    expect(matchesStepMindMap({ ...map, track_steps: [], subject: 'Informática' }, track, step)).toBe(false)
    expect(matchesStepMindMap({ ...map, track_steps: [], subject: 'Linux e Redes' }, track, step)).toBe(false)
  })

  it('opens and downloads only related maps from the step', async () => {
    const onOpen = vi.fn(), onDownload = vi.fn()
    render(<StepMindMaps track={track} step={step} items={[map, { ...map, id: 'other', title: 'Mapa de redes', track_steps: ['cpt-2026-infra/redes'] }]} loading={false} busyId={null} native onOpen={onOpen} onDownload={onDownload} />)
    expect(screen.queryByText('Mapa de redes')).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: 'Abrir mapa' }))
    expect(onOpen).toHaveBeenCalledWith(map)
    await userEvent.click(screen.getByRole('button', { name: 'Baixar para usar offline' }))
    expect(onDownload).toHaveBeenCalledWith(map)
  })

  it('shows downloaded files offline and does not request a second download', async () => {
    const downloaded = { ...map, local_path: 'mind-maps/map-so.png' }
    const onOpen = vi.fn()
    render(<StepMindMaps track={track} step={step} items={[downloaded]} loading={false} busyId={null} native onOpen={onOpen} onDownload={vi.fn()} />)
    expect(screen.getByText(/Disponível offline/)).toBeTruthy()
    expect(screen.queryByRole('button', { name: /Baixar/ })).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: 'Abrir mapa' }))
    expect(onOpen).toHaveBeenCalledWith(downloaded)
  })
})
