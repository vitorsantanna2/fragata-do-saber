import type { OffensiveState } from './localDatabase'

const TIME_ZONE = 'America/Sao_Paulo'
const DAY_MS = 24 * 60 * 60 * 1000

export function getSaoPauloDateKey(date = new Date()): string {
  return date.toLocaleDateString('sv-SE', { timeZone: TIME_ZONE })
}

export function normalizeOffensiveDate(value: string | null): string | null {
  if (!value) return null

  const isoDate = /^(\d{4}-\d{2}-\d{2})/.exec(value)
  if (isoDate) return isoDate[1]

  const brazilianDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value)
  if (brazilianDate) return `${brazilianDate[3]}-${brazilianDate[2]}-${brazilianDate[1]}`

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : getSaoPauloDateKey(parsed)
}

export function getPreviousOffensiveDate(date = new Date()): string {
  const dateKey = getSaoPauloDateKey(date)
  const previousDate = new Date(Date.parse(`${dateKey}T00:00:00Z`) - DAY_MS)
  return previousDate.toISOString().slice(0, 10)
}

export function getDaysAboard(joinedAt: string | null, today = new Date()): number {
  const joinedDate = normalizeOffensiveDate(joinedAt)
  if (!joinedDate) return 0

  const todayKey = getSaoPauloDateKey(today)
  const joinedDay = Date.parse(`${joinedDate}T00:00:00Z`)
  const todayDay = Date.parse(`${todayKey}T00:00:00Z`)
  const difference = Math.floor((todayDay - joinedDay) / DAY_MS)

  return Math.max(0, difference + 1)
}

export function normalizeOffensiveStateForToday(state: OffensiveState, today: string): OffensiveState {
  const lastDate = normalizeOffensiveDate(state.lastOffensiveDate)
  const remainsCurrent = lastDate === today || lastDate === getPreviousOffensiveDate(new Date(`${today}T12:00:00Z`))
  const currentStreak = remainsCurrent ? state.currentStreak : 0

  return {
    ...state,
    currentStreak,
    bestStreak: Math.max(state.bestStreak, currentStreak),
    lastOffensiveDate: lastDate,
    offensiveLoggedToday: lastDate === today,
  }
}

export function recordOffensiveForDate(state: OffensiveState, today: string): OffensiveState {
  const lastDate = normalizeOffensiveDate(state.lastOffensiveDate)
  if (lastDate === today) {
    const currentStreak = Math.max(1, state.currentStreak)
    return {
      ...state,
      currentStreak,
      bestStreak: Math.max(state.bestStreak, currentStreak),
      lastOffensiveDate: today,
      offensiveLoggedToday: true,
    }
  }

  const currentStreak = lastDate === getPreviousOffensiveDate(new Date(`${today}T12:00:00Z`))
    ? state.currentStreak + 1
    : 1

  return {
    ...state,
    totalOffensives: state.totalOffensives + 1,
    currentStreak,
    bestStreak: Math.max(state.bestStreak, currentStreak),
    lastOffensiveDate: today,
    offensiveLoggedToday: true,
  }
}

export function mergeOffensiveStates(local: OffensiveState, remote: OffensiveState, today: string): OffensiveState {
  const localDate = normalizeOffensiveDate(local.lastOffensiveDate)
  const remoteDate = normalizeOffensiveDate(remote.lastOffensiveDate)
  const [older, newer] = (localDate ?? '') > (remoteDate ?? '') ? [remote, local] : [local, remote]
  const olderDate = normalizeOffensiveDate(older.lastOffensiveDate)
  const newerDate = normalizeOffensiveDate(newer.lastOffensiveDate)
  const differentDays = olderDate !== null && newerDate !== null && olderDate !== newerDate
  const consecutive = differentDays && olderDate === getPreviousOffensiveDate(new Date(`${newerDate}T12:00:00Z`))
  const currentStreak = Math.max(
    newer.currentStreak,
    localDate === remoteDate ? older.currentStreak : 0,
    consecutive ? older.currentStreak + 1 : 0,
  )
  return normalizeOffensiveStateForToday({
    ...newer,
    totalOffensives: Math.max(newer.totalOffensives, older.totalOffensives + (differentDays ? 1 : 0)),
    currentStreak,
    bestStreak: Math.max(local.bestStreak, remote.bestStreak, currentStreak),
    lastOffensiveDate: newerDate,
  }, today)
}
