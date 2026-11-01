import { describe, expect, it } from 'vitest'
import {
  getDaysAboard,
  getPreviousOffensiveDate,
  getSaoPauloDateKey,
  normalizeOffensiveDate,
  normalizeOffensiveStateForToday,
  recordOffensiveForDate,
} from '../lib/offensiveDates'
import type { OffensiveState } from '../lib/localDatabase'

const initialState: OffensiveState = {
  totalOffensives: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastOffensiveDate: null,
  offensiveLoggedToday: false,
  joinedAt: null,
}

describe('offensive date calculations', () => {
  it('counts account creation day through today using Sao Paulo calendar dates', () => {
    expect(getDaysAboard('2026-10-31T03:30:00.000Z', new Date('2026-11-01T02:30:00.000Z'))).toBe(1)
    expect(getDaysAboard('2026-10-31T03:30:00.000Z', new Date('2026-11-01T03:30:00.000Z'))).toBe(2)
  })

  it('counts the signup date as day one and ignores future or invalid dates', () => {
    const today = new Date('2026-11-01T18:00:00.000Z')
    expect(getDaysAboard('2026-11-01T12:00:00.000Z', today)).toBe(1)
    expect(getDaysAboard('2026-11-02T12:00:00.000Z', today)).toBe(0)
    expect(getDaysAboard('invalid', today)).toBe(0)
  })

  it('normalizes dates returned from the legacy timestamptz column', () => {
    expect(normalizeOffensiveDate('2026-11-01T00:00:00+00:00')).toBe('2026-11-01')
    expect(normalizeOffensiveDate('01/11/2026')).toBe('2026-11-01')
    expect(getSaoPauloDateKey(new Date('2026-11-01T02:30:00.000Z'))).toBe('2026-10-31')
    expect(getPreviousOffensiveDate(new Date('2026-11-01T12:00:00.000Z'))).toBe('2026-10-31')
  })

  it('records at most one offensive for the same date', () => {
    const first = recordOffensiveForDate(initialState, '2026-11-01')
    const second = recordOffensiveForDate(first, '2026-11-01')

    expect(first.totalOffensives).toBe(1)
    expect(second.totalOffensives).toBe(1)
    expect(second.currentStreak).toBe(1)
  })

  it('extends consecutive days and resets after a missed day', () => {
    const first = recordOffensiveForDate(initialState, '2026-11-01')
    const consecutive = recordOffensiveForDate(first, '2026-11-02')
    const afterGap = recordOffensiveForDate(consecutive, '2026-11-04')

    expect(consecutive.currentStreak).toBe(2)
    expect(consecutive.bestStreak).toBe(2)
    expect(afterGap.currentStreak).toBe(1)
    expect(afterGap.bestStreak).toBe(2)
  })

  it('clears today status and expires a streak after a full missed day', () => {
    const state = {
      ...initialState,
      currentStreak: 3,
      bestStreak: 3,
      lastOffensiveDate: '2026-10-29',
      offensiveLoggedToday: true,
    }

    expect(normalizeOffensiveStateForToday(state, '2026-10-31')).toMatchObject({
      currentStreak: 0,
      bestStreak: 3,
      offensiveLoggedToday: false,
    })
  })
})