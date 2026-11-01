import { describe, expect, it } from 'vitest'
import { getDueReviews, scheduleReview, seedReviewSchedules, type ReviewSchedule } from '../lib/scheduledReviews'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

const snapshot: StudyQuestionSnapshot = { exam: 'CP-T', subject: 'Informática', topic: 'Redes', year: '2024', questionType: 'exam', prompt: 'Questão', correctOption: 0, explanation: null }
const initialTime = '2026-11-01T15:00:00.000Z'

describe('scheduled review intervals', () => {
  it('uses the calendar date in Sao Paulo when a response is recorded after UTC midnight', () => {
    expect(scheduleReview(undefined, true, 'sure', 'a1', '2026-11-02T01:00:00.000Z').dueDate).toBe('2026-11-02')
  })

  it('progresses through the initial intervals after confident correct reviews on different days', () => {
    let previous: ReviewSchedule | undefined
    let reviewedAt = initialTime
    const intervals: number[] = []
    for (let index = 0; index < 7; index++) {
      previous = scheduleReview(previous, true, 'sure', `attempt-${index}`, reviewedAt)
      intervals.push(previous.intervalDays)
      reviewedAt = `${previous.dueDate}T15:00:00.000Z`
    }
    expect(intervals).toEqual([1, 3, 7, 15, 30, 60, 60])
  })

  it('returns errors, guesses and doubts to the next day regardless of the previous streak', () => {
    const previous = { ...scheduleReview(undefined, true, 'sure', 'a1', initialTime), streak: 5 }
    for (const [correct, confidence] of [[false, 'sure'], [true, 'guess'], [true, 'unsure']] as const) {
      expect(scheduleReview(previous, correct, confidence, 'a2', '2026-11-02T15:00:00Z')).toMatchObject({ intervalDays: 1, streak: 0, dueDate: '2026-11-03' })
    }
  })

  it('does not advance the streak twice when the confidence for one response is changed', () => {
    const pending = scheduleReview(undefined, true, null, 'a1', initialTime)
    const sure = scheduleReview(pending, true, 'sure', 'a1', initialTime)
    const guess = scheduleReview(sure, true, 'guess', 'a1', initialTime)
    expect(scheduleReview(guess, true, 'sure', 'a1', initialTime)).toMatchObject({ streak: 1, intervalDays: 1 })
  })

  it('does not inflate intervals through repeated correct answers on the same day', () => {
    const first = scheduleReview(undefined, true, 'sure', 'a1', initialTime)
    const repeated = scheduleReview(first, true, 'sure', 'a2', '2026-11-01T19:00:00Z')
    expect(repeated).toMatchObject({ streak: 1, intervalDays: 1 })
    expect(scheduleReview(repeated, true, 'sure', 'a3', '2026-11-02T15:00:00Z')).toMatchObject({ streak: 2, intervalDays: 3 })
  })

  it('includes overdue and today reviews in date order but excludes future reviews', () => {
    const state = scheduleReview(undefined, true, null, 'a1', initialTime)
    const schedules = { late: { ...state, dueDate: '2026-10-31' }, today: { ...state, dueDate: '2026-11-01' }, future: { ...state, dueDate: '2026-11-02' } }
    const snapshots = Object.fromEntries(Object.keys(schedules).map((id) => [id, snapshot]))
    expect(getDueReviews(schedules, snapshots, '2026-11-01').map((review) => review.questionId)).toEqual(['late', 'today'])
  })

  it('seeds old validated answers without discarding an existing review schedule', () => {
    const existing = scheduleReview(undefined, true, 'sure', 'current', initialTime)
    const reviews = seedReviewSchedules({ q1: existing }, { q1: 0, q2: 1, q3: 0 }, { q1: snapshot, q2: snapshot, q3: { ...snapshot, correctOption: null } }, { q2: initialTime })
    expect(reviews.q1).toEqual(existing)
    expect(reviews.q2).toMatchObject({ lastCorrect: false, dueDate: '2026-11-02', confidence: null })
    expect(reviews.q3).toBeUndefined()
  })
})
