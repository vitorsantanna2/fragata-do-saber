import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StudyTracks as StudyTracksView } from '../components/StudyTracks'
import { useTrackProgress } from '../hooks/useTrackProgress'
import { matchesTrackStep, parseTrackProgress, studyTracks, trackProgressKey } from '../lib/studyTracks'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

const storage = vi.hoisted(() => ({ native: false, read: vi.fn(), write: vi.fn() }))
vi.mock('../lib/localDatabase', () => ({ isNativeApp: () => storage.native, getLocalMetadata: storage.read, setLocalMetadata: storage.write }))

const track = studyTracks[0]
const step = track.steps[0]
const key = trackProgressKey(track.id, step.id)
const question: StudyQuestionSnapshot = { exam: 'CP-T', subject: 'Informática', topic: 'Memória cache', correctOption: 1, year: '2021', questionType: 'exam', prompt: 'Teste', explanation: null }
const props = { examId: 'cp-t-informatica', userId: 'student-a', initialTrackId: track.id, snapshots: { q: question }, answers: { q: 0 }, onClose: vi.fn(), onPractice: vi.fn() }
function StudyTracks(input: typeof props) {
  const progressState = useTrackProgress(input.userId)
  return <StudyTracksView {...input} progressState={progressState} />
}

beforeEach(() => { localStorage.clear(); storage.native = false; vi.clearAllMocks(); storage.read.mockResolvedValue(null); storage.write.mockResolvedValue(undefined) })
afterEach(cleanup)

describe('trilhas CP-T', () => {
  it('combines governance and service management topics in a single step', () => {
    const management = studyTracks.find((item) => item.id === 'cpt-2026-gestao')!
    const governance = management.steps.find((item) => item.id === 'governanca-servicos')!
    expect(management.steps.some((item) => item.id === 'governanca' || item.id === 'servicos')).toBe(false)
    for (const topic of ['Governança de TI', 'COBIT 5', 'Estruturas organizacionais', 'ITIL / gerenciamento de serviços', 'Gerenciamento de serviços', 'ITIL']) {
      expect(matchesTrackStep({ ...question, topic }, governance)).toBe(true)
    }
  })
  it('combines relational modeling, SQL, transactions and recovery in a single step', () => {
    const dataTrack = studyTracks.find((item) => item.id === 'cpt-2026-dados')!
    const database = dataTrack.steps.find((item) => item.id === 'relacional-transacoes')!
    expect(dataTrack.steps.some((item) => item.id === 'relacional' || item.id === 'transacoes')).toBe(false)
    for (const topic of ['Banco de Dados', 'SQL / consultas', 'Álgebra relacional', 'Banco de dados / recuperação', 'Controle de concorrência']) {
      expect(matchesTrackStep({ ...question, topic }, database)).toBe(true)
    }
  })
  it('combines engineering, UML, design patterns and REST practice in a single step', () => {
    const development = studyTracks.find((item) => item.id === 'cpt-2026-dev')!
    const engineering = development.steps.find((item) => item.id === 'engenharia-software')!
    expect(engineering.title).toBe('Engenharia de Software')
    expect(development.steps.some((item) => ['apis', 'engenharia', 'engenharia-rest', 'uml'].includes(item.id))).toBe(false)
    for (const topic of ['UML', 'Modelagem UML / classes', 'Padrões de Projeto']) {
      expect(matchesTrackStep({ ...question, topic }, engineering)).toBe(true)
    }
    expect(engineering.references.some((reference) => reference.startsWith('Guedes'))).toBe(true)
    expect(engineering.references.some((reference) => reference.startsWith('Guerra'))).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Engenharia de Software' }, engineering)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'APIs REST' }, engineering)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Serviços web' }, engineering)).toBe(true)
  })
  it('combines Java and Python under the programming topic used in the database', () => {
    const programming = studyTracks.find((item) => item.id === 'cpt-2026-dev')!.steps.find((item) => item.id === 'programacao')!
    expect(matchesTrackStep({ ...question, topic: 'Linguagem de Programação' }, programming)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Linguagens de programação' }, programming)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'linguagem de programacao' }, programming)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Redes de computadores' }, programming)).toBe(false)
    expect(matchesTrackStep({ ...question, exam: 'EA-HSG', topic: 'Linguagem de Programação' }, programming)).toBe(false)
    expect(matchesTrackStep({ ...question, topic: 'Java / orientação a objetos' }, programming)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Python / strings' }, programming)).toBe(true)
  })
  it('matches exact normalized bank topics only within the contest and specialty', () => {
    expect(matchesTrackStep({ ...question, topic: 'Memoria cache' }, step)).toBe(true)
    expect(matchesTrackStep({ ...question, exam: 'EA-HSG' }, step)).toBe(false)
    expect(matchesTrackStep({ ...question, subject: 'Outra' }, step)).toBe(false)
    expect(matchesTrackStep({ ...question, topic: 'Memória cache e redes' }, step)).toBe(false)
    expect(matchesTrackStep({ ...question, topic: null }, step)).toBe(false)
    expect(matchesTrackStep(question, { ...step, topics: [] })).toBe(false)
  })

  it('ignores invalid persisted statuses and unknown steps', () => {
    expect(parseTrackProgress({ [key]: 'completed', unknown: 'completed' })).toEqual({ [key]: 'completed' })
    expect(parseTrackProgress({ [key]: 'wrong' })).toEqual({})
    expect(parseTrackProgress(null)).toEqual({})
    expect(new Set(studyTracks.flatMap((item) => item.steps.map((entry) => trackProgressKey(item.id, entry.id)))).size).toBe(12)
  })

  it('merges previous Linux progress and keeps questions from both subjects in the unified step', () => {
    const so = trackProgressKey(track.id, 'so')
    const linux = trackProgressKey(track.id, 'linux')
    expect(parseTrackProgress({ [so]: 'completed', [linux]: 'completed' })).toEqual({ [so]: 'completed' })
    expect(parseTrackProgress({ [so]: 'completed', [linux]: 'studying' })).toEqual({ [so]: 'studying' })
    expect(parseTrackProgress({ [linux]: 'completed' })).toEqual({ [so]: 'studying' })
    const merged = track.steps.find((item) => item.id === 'so')!
    expect(matchesTrackStep({ ...question, topic: 'Linux / umask' }, merged)).toBe(true)
    expect(matchesTrackStep({ ...question, topic: 'Exclusão mútua' }, merged)).toBe(true)
  })

  it('saves and restores study status without changing wrong-answer metrics, and allows reopening', async () => {
    const user = userEvent.setup()
    const view = render(<StudyTracks {...props} />)
    await waitFor(() => expect(screen.queryByText('Carregando seu progresso…')).toBeNull())
    const card = screen.getByRole('heading', { name: step.title }).closest('li')!
    expect(within(card).getByText(/1 questões · 0 acertos/)).toBeTruthy()
    await user.click(within(card).getByRole('button', { name: 'Começar estudo' }))
    await user.click(within(card).getByRole('button', { name: 'Marcar como estudado' }))
    expect(JSON.parse(localStorage.getItem('study_tracks_v1:student-a')!).entries[key].status).toBe('completed')
    expect(within(card).getByText(/1 questões · 0 acertos/)).toBeTruthy()
    view.unmount()
    render(<StudyTracks {...props} />)
    await screen.findByText('Etapa 1 · Estudado')
    await user.click(within(screen.getByRole('heading', { name: step.title }).closest('li')!).getByRole('button', { name: 'Reabrir etapa' }))
    expect(JSON.parse(localStorage.getItem('study_tracks_v1:student-a')!).entries[key].status).toBe('not-started')
  })

  it('keeps accounts isolated and opens the requested step practice', async () => {
    localStorage.setItem('study_tracks_v1:student-a', JSON.stringify({ [key]: 'completed' }))
    const view = render(<StudyTracks {...props} />)
    await screen.findByText('Etapa 1 · Estudado')
    view.rerender(<StudyTracks {...props} userId="student-b" />)
    await screen.findByText('Etapa 1 · Não iniciada')
    const card = screen.getByRole('heading', { name: step.title }).closest('li')!
    await userEvent.click(within(card).getByRole('button', { name: 'Prática' }))
    expect(props.onPractice).toHaveBeenCalledWith(track, step)
    expect(localStorage.getItem('study_tracks_v1:student-b')).toBeNull()
  })

  it('persists native progress in SQLite and reports write failure without marking the step', async () => {
    storage.native = true
    storage.read.mockResolvedValue(JSON.stringify({ [key]: 'studying' }))
    storage.write.mockRejectedValue(new Error('disk full'))
    render(<StudyTracks {...props} />)
    await screen.findByText('Etapa 1 · Em estudo')
    const card = screen.getByRole('heading', { name: step.title }).closest('li')!
    await userEvent.click(within(card).getByRole('button', { name: 'Marcar como estudado' }))
    expect((await screen.findByRole('alert')).textContent).toContain('Não foi possível salvar')
    expect(within(card).getByText('Etapa 1 · Em estudo')).toBeTruthy()
    expect(storage.write).toHaveBeenCalledWith('study_tracks_v1:student-a', expect.any(String))
    expect(JSON.parse(storage.write.mock.calls[0][1]).entries[key].status).toBe('completed')
    expect(localStorage.length).toBe(0)
  })
})
