import { useMemo } from 'react'

import shipImage from '/logo_embarque.png'
import waveImage from '/logo_mar.png'

type OffensiveCounterProps = {
  totalOffensives: number
  currentStreak: number
  bestStreak: number
  offensiveLoggedToday: boolean
  joinedAt: string | null
}

export function OffensiveCounter({
  totalOffensives,
  currentStreak,
  bestStreak,
  offensiveLoggedToday,
  joinedAt,
}: OffensiveCounterProps) {
  const daysSinceJoin = useMemo(() => {
    if (!joinedAt) return 0
    return Math.max(0, Math.ceil((Date.now() - Date.parse(joinedAt)) / (1000 * 60 * 60 * 24)))
  }, [joinedAt])

  return (
    <section className="rounded-xl border border-line bg-white p-4 sm:p-5">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea mb-3">Progresso nos mares</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <article className="rounded-lg border border-line bg-white p-3 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sea-light flex items-center justify-center">
            <img src={shipImage} alt="Navio" className="w-6 h-6 object-contain" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Dias a bordo</p>
          <p className="font-display text-2xl font-extrabold text-ink">{daysSinceJoin}</p>
        </article>
        <article className="rounded-lg border border-line bg-white p-3 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#fff2e8] flex items-center justify-center">
            <img src={waveImage} alt="Mar" className="w-6 h-6 object-contain" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Ofensivas</p>
          <p className="font-display text-2xl font-extrabold text-ink">{totalOffensives}</p>
        </article>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <article className="rounded-lg border border-line bg-white p-3 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Sequência atual</p>
          <p className="mt-1 font-display text-lg font-extrabold text-sea">{currentStreak}</p>
          <p className="mt-0 text-[10px] text-muted">{currentStreak === 1 ? 'dia' : 'dias'} seguidos</p>
        </article>
        <article className="rounded-lg border border-line bg-white p-3 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Melhor sequência</p>
          <p className="mt-1 font-display text-lg font-extrabold text-ink">{bestStreak}</p>
          <p className="mt-0 text-[10px] text-muted">{bestStreak === 1 ? 'dia' : 'dias'}</p>
        </article>
      </div>
      {!offensiveLoggedToday && (
        <p className="mt-3 text-sm leading-6 text-muted text-center">
          Complete um simulado hoje para iniciar sua ofensiva de estudos.
        </p>
      )}
    </section>
  )
}
