type OffensiveCounterProps = {
  totalOffensives: number
  currentStreak: number
  bestStreak: number
  offensiveLoggedToday: boolean
}

export function OffensiveCounter({
  totalOffensives,
  currentStreak,
  bestStreak,
  offensiveLoggedToday,
}: OffensiveCounterProps) {
  return (
    <section className="rounded-xl border border-line bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Ofensiva de estudos</p>
          <h3 className="mt-1 font-display text-lg font-extrabold">Mantenha a sequência</h3>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${offensiveLoggedToday ? 'bg-sea text-white' : 'bg-paper text-ink'}`}>
          {offensiveLoggedToday ? 'Ofensiva feita hoje' : 'Ofensiva pendente'}
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <article className="rounded-lg border border-line bg-white p-3 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Ofensivas</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-ink">{totalOffensives}</p>
        </article>
        <article className="rounded-lg border border-line bg-white p-3 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Sequência atual</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-sea">{currentStreak}</p>
          <p className="mt-1 text-[10px] text-muted">{currentStreak === 1 ? 'dia' : 'dias'} seguidos</p>
        </article>
        <article className="rounded-lg border border-line bg-white p-3 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Melhor sequência</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-ink">{bestStreak}</p>
          <p className="mt-1 text-[10px] text-muted">{bestStreak === 1 ? 'dia' : 'dias'}</p>
        </article>
      </div>
      {!offensiveLoggedToday && (
        <p className="mt-3 text-sm leading-6 text-muted text-center">
          Acesse a plataforma ou complete um simulado hoje para iniciar sua ofensiva de estudos.
        </p>
      )}
    </section>
  )
}
