import { useState } from 'react'
import type { useTrackProgress } from '../hooks/useTrackProgress'
import { matchesTrackStep, studyTracks, trackProgressKey, type StudyTrack, type TrackStep } from '../lib/studyTracks'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'
import { StepMindMaps, type StepMapResources } from './StepMindMaps'

type Props = {
  mapResources?: StepMapResources
  mapsError?: string
  examId: string
  progressState: ReturnType<typeof useTrackProgress>
  initialTrackId: string | null
  snapshots: Record<string, StudyQuestionSnapshot>
  answers: Record<string, number>
  onClose: () => void
  onPractice: (track: StudyTrack, step: TrackStep) => void
}

const button = 'rounded-lg border border-line bg-white px-3 py-2 text-sm font-bold text-sea hover:border-sea disabled:opacity-50'

export function StudyTracks({ examId, progressState, initialTrackId, snapshots, answers, onClose, onPractice, mapResources, mapsError }: Props) {
  const tracks = studyTracks.filter((track) => track.examId === examId)
  const [selectedId, setSelectedId] = useState(initialTrackId)
  const track = tracks.find((item) => item.id === selectedId)
  const { progress, ready, saving, error, setStatus, syncStatus, retrySync } = progressState
  const doneCount = (item: StudyTrack) => item.steps.filter((step) => progress[trackProgressKey(item.id, step.id)] === 'completed').length
  const nextStep = track?.steps.find((step) => progress[trackProgressKey(track.id, step.id)] !== 'completed')

  return <section className="mt-6" aria-labelledby="tracks-title">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><p className="text-xs font-bold uppercase text-sea">CP-T · Informática · 2026</p><h2 id="tracks-title" className="mt-1 font-display text-2xl font-extrabold">{track?.title ?? 'Trilhas de estudo'}</h2></div>
      <button type="button" className={button} onClick={track ? () => setSelectedId(null) : onClose}>{track ? 'Todas as trilhas' : 'Voltar às opções'}</button>
    </div>
    <p className="mt-3 text-sm leading-6 text-muted">Organização de estudo baseada na bibliografia enviada do CP-T/2026 (páginas 113–114). A sequência é uma sugestão pedagógica e não substitui a conferência do programa completo do edital.</p>
    <p className="mt-2 text-sm text-muted">A prática mista reúne questões de provas e da bibliografia dos assuntos de cada etapa. Para usar as duas origens offline no aplicativo, baixe-as antes com internet. “Estudado” registra sua leitura; acertos são medidos separadamente.</p>
    <div className="mt-3 text-sm text-muted" role="status">{syncStatus === 'local' ? 'Progresso salvo neste dispositivo. Entre em uma conta para sincronizar entre aparelhos.' : syncStatus === 'offline' ? 'Sem internet. Suas alterações ficam no dispositivo e serão sincronizadas ao reconectar.' : syncStatus === 'syncing' ? 'Sincronizando progresso das trilhas…' : syncStatus === 'synced' ? 'Progresso das trilhas sincronizado com sua conta.' : 'Não foi possível sincronizar as trilhas. Suas alterações locais foram mantidas.'}{syncStatus === 'error' && <button type="button" className="ml-2 font-bold text-sea" onClick={retrySync}>Tentar novamente</button>}</div>
    {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>}
    {mapsError && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{mapsError}</p>}
    {!ready && !error && <p role="status" className="mt-4">Carregando seu progresso…</p>}
    {!track ? <div className="mt-5 grid gap-4 md:grid-cols-2">{tracks.map((item) => <button key={item.id} type="button" className="rounded-xl border border-line bg-white p-5 text-left hover:border-sea" onClick={() => setSelectedId(item.id)}>
      <h3 className="font-display text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm text-muted">{item.description}</p>
      <p className="mt-4 text-sm font-bold text-sea">{ready ? `${doneCount(item)} de ${item.steps.length} etapas estudadas` : `${item.steps.length} etapas`}</p>
      {ready && <progress className="mt-2 h-2 w-full accent-emerald-600" value={doneCount(item)} max={item.steps.length} aria-label={`Progresso de ${item.title}`} />}
      <span className="mt-3 block text-sm font-bold text-sea">Abrir trilha →</span>
    </button>)}</div> : <>
      {ready && <div className="mt-5 rounded-xl bg-sea-light p-4"><p className="font-bold text-sea">{doneCount(track)} de {track.steps.length} etapas estudadas</p><progress className="mt-2 h-2 w-full accent-emerald-600" value={doneCount(track)} max={track.steps.length} aria-label="Progresso da trilha" />{nextStep ? <a href={`#track-step-${nextStep.id}`} className="mt-2 block text-sm font-bold text-sea">Continuar: {nextStep.title} →</a> : <p className="mt-2 text-sm">Todas as etapas marcadas como estudadas. Continue praticando e revisando seus erros.</p>}</div>}
      <ol className="mt-5 space-y-4">{track.steps.map((step, index) => {
        const status = progress[trackProgressKey(track.id, step.id)]
        const attempted = Object.entries(snapshots).filter(([id, question]) => matchesTrackStep(question, step) && answers[id] !== undefined && question.correctOption !== null)
        const correct = attempted.filter(([id, question]) => answers[id] === question.correctOption).length
        return <li key={step.id} id={`track-step-${step.id}`} className="scroll-mt-8 rounded-xl border border-line bg-white p-5">
          <p className="text-xs font-bold uppercase text-sea">Etapa {index + 1} · {status === 'completed' ? 'Estudado' : status === 'studying' ? 'Em estudo' : 'Não iniciada'}</p>
          <h3 className="mt-2 font-display text-lg font-extrabold">{step.title}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">{step.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
          <p className="mt-4 text-xs font-bold uppercase text-muted">Referências para esta etapa</p><ul className="mt-2 space-y-1 text-sm text-muted">{step.references.map((reference) => <li key={reference}>{reference}</li>)}</ul>
          {mapResources && <StepMindMaps {...mapResources} track={track} step={step} />}
          <p className="mt-4 text-sm text-muted">Prática registrada: {attempted.length} questões · {correct} acertos{attempted.length ? ` · ${Math.round(correct / attempted.length * 100)}% de aproveitamento` : ''}.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {status !== 'completed' && <button type="button" className={button} disabled={!ready || saving} onClick={() => void setStatus(track.id, step.id, status === 'studying' ? 'completed' : 'studying')}>{status === 'studying' ? 'Marcar como estudado' : 'Começar estudo'}</button>}
            {status && <button type="button" className={button} disabled={!ready || saving} onClick={() => void setStatus(track.id, step.id, null)}>Reabrir etapa</button>}
            <button type="button" className={button} onClick={() => onPractice(track, step)}>Prática</button>
          </div>
        </li>
      })}</ol>
    </>}
  </section>
}
