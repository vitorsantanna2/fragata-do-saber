// @vitest-environment node
/// <reference types="node" />
import { DatabaseSync, type SQLInputValue } from 'node:sqlite'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { CachedQuestionRow } from '../lib/localDatabaseTypes'

const mocks = vi.hoisted(() => ({ connection: vi.fn() }))
vi.mock('@capacitor/core', () => ({ Capacitor: { isNativePlatform: () => true } }))
vi.mock('@capacitor-community/sqlite', () => ({
  CapacitorSQLite: {},
  SQLiteConnection: class {
    async checkConnectionsConsistency() {}
    async isConnection() { return { result: false } }
    async createConnection() { return mocks.connection() }
  },
}))

let sqlite: DatabaseSync
const question: CachedQuestionRow = {
  id: 'q1', year: 2024, question_number: 1, question_type: 'exam', subject: 'Informática', topic: null,
  difficulty: null, exam: 'CP-T', statement: 'Questão', statement_after_image: null, image_url: null,
  image_alt: null, options: ['A', 'B'], correct_option: 0, explanation: 'Explicação baixada', source: null,
}

beforeEach(() => {
  vi.resetModules()
  sqlite = new DatabaseSync(':memory:')
  mocks.connection.mockReturnValue({
    isDBOpen: async () => ({ result: true }),
    execute: async (sql: string) => { sqlite.exec(sql) },
    query: async (sql: string, values: SQLInputValue[] = []) => ({ values: sqlite.prepare(sql).all(...values) }),
    run: async (sql: string, values: SQLInputValue[] = []) => sqlite.prepare(sql).run(...values),
    executeSet: async (statements: Array<{ statement: string; values: SQLInputValue[] }>) => {
      sqlite.exec('BEGIN')
      try {
        for (const { statement, values } of statements) sqlite.prepare(statement).run(...values)
        sqlite.exec('COMMIT')
      } catch (error) {
        sqlite.exec('ROLLBACK')
        throw error
      }
    },
  })
})

afterEach(() => sqlite.close())

describe('native SQLite question cache', () => {
  it('keeps step links offline and preserves the downloaded file when only metadata changes', async () => {
    const cache = await import('../lib/localDatabase')
    const map = { id: 'map1', title: 'Linux', subject: 'Informática', description: null, storage_path: 'map1.png', content_type: 'image/png', sort_order: 0, updated_at: '2026-11-01T12:00:00Z', track_steps: ['cpt-2026-infra/so'] }
    await cache.cacheMindMaps([map])
    await cache.setMindMapLocalPath(map.id, 'mind-maps/map1.png')
    await cache.cacheMindMaps([{ ...map, updated_at: '2026-11-02T12:00:00Z', track_steps: ['cpt-2026-infra/so', 'cpt-2026-infra/seguranca'] }])
    vi.resetModules()
    const reopened = await import('../lib/localDatabase')
    expect((await reopened.readCachedMindMaps())[0]).toMatchObject({ track_steps: ['cpt-2026-infra/so', 'cpt-2026-infra/seguranca'], local_path: 'mind-maps/map1.png' })
    await reopened.cacheMindMaps([{ ...map, storage_path: 'replacement.png' }])
    expect((await reopened.readCachedMindMaps())[0].local_path).toBeNull()
  })
  it('isolates native progress and offensive counters by account without adopting legacy data', async () => {
    const storage = await import('../lib/localDatabase')
    await storage.setLocalMetadata('study_progress_v1', JSON.stringify({ answers: { legacy: 1 } }))
    const legacy = await storage.loadStudyProgress()
    expect(legacy?.answers).toEqual({ legacy: 1 })
    expect(await storage.loadStudyProgress('student-a')).toBeNull()
    await storage.saveStudyProgress({ ...legacy!, answers: { onlyA: 0 } }, 'student-a')
    expect(await storage.loadStudyProgress('student-b')).toBeNull()
    await storage.saveOffensiveState({ totalOffensives: 7, currentStreak: 0, bestStreak: 7, lastOffensiveDate: null, offensiveLoggedToday: false, joinedAt: null }, 'student-a')
    expect((await storage.loadOffensiveState('student-b')).totalOffensives).toBe(0)
    vi.resetModules()
    const reopened = await import('../lib/localDatabase')
    expect((await reopened.loadStudyProgress('student-a'))?.answers).toEqual({ onlyA: 0 })
    expect((await reopened.loadStudyProgress())?.answers).toEqual({ legacy: 1 })
  })
  it('updates an individual review question without deleting the other downloaded questions', async () => {
    const cache = await import('../lib/localDatabase')
    const second = { ...question, id: 'q2' }
    await cache.cacheQuestions([question, second], 'CP-T', 'Informática')
    await cache.cacheReviewQuestion({ ...question, explanation: 'Revisão atualizada' })
    const restored = await cache.readCachedQuestions('CP-T', 'Informática')
    expect(restored).toHaveLength(2)
    expect(restored.find((row) => row.id === 'q1')?.explanation).toBe('Revisão atualizada')
    expect(restored.find((row) => row.id === 'q2')).toEqual(second)
  })

  it('saves questions with their answer keys and keeps the keys after reopening the database', async () => {
    const firstSession = await import('../lib/localDatabase')
    await firstSession.cacheQuestions([question], 'CP-T', 'Informática')
    expect(await firstSession.readCachedQuestions('CP-T', 'Informática')).toEqual([question])
    vi.resetModules()
    const secondSession = await import('../lib/localDatabase')
    expect(await secondSession.readCachedQuestions('CP-T', 'Informática')).toEqual([question])
  })

  it('atomically replaces the cached keys when an updated question is downloaded', async () => {
    const cache = await import('../lib/localDatabase')
    await cache.cacheQuestions([question], 'CP-T', 'Informática')
    const updated = { ...question, correct_option: 1, explanation: 'Explicação atualizada' }
    await cache.cacheQuestions([updated], 'CP-T', 'Informática')
    expect(await cache.readCachedQuestions('CP-T', 'Informática')).toEqual([updated])
    expect(await cache.getLocalMetadata('questions_last_synced_at')).toBeTruthy()
  })
})
