import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import { PerformanceDashboard } from '../components/PerformanceDashboard'
import type { StudyProgress } from '../lib/localDatabaseTypes'

const client = vi.hoisted(() => ({ from: vi.fn(), rpc: vi.fn(), getSession: vi.fn() }))
vi.mock('../lib/supabase', () => ({ supabase: { from: client.from, rpc: client.rpc, auth: { getSession: client.getSession } } }))
import { syncStudyProgress, syncOffensiveState } from '../lib/progressSync'

type Row = Record<string, unknown>
let rows: Record<string, Row[]>
let selections: Record<string, string[]>
let uploads: Record<string, Row[]>
const timestamp = '2026-11-01T12:00:00.000Z'

function emptyProgress(): Pick<StudyProgress, 'answers' | 'favorites' | 'revealed' | 'progressUpdatedAt' | 'questionSnapshots' | 'completedSimulations'> {
  return { answers: {}, favorites: [], revealed: [], progressUpdatedAt: {}, questionSnapshots: {}, completedSimulations: [] }
}

beforeEach(() => {
  rows = { user_question_progress: [], question_answer_attempts: [], questions: [], user_simulation_results: [], user_review_schedules: [] }
  selections = {}
  uploads = {}
  client.getSession.mockResolvedValue({ data: { session: { user: { id: 'user-1', is_anonymous: false } } }, error: null })
  client.from.mockImplementation((table: string) => {
    const filters: Array<[string, unknown]> = []
    const response = () => ({ data: rows[table].filter((row) => filters.every(([key, value]) => row[key] === value)), error: null })
    const query = {
      select: vi.fn((columns: string) => {
        (selections[table] ??= []).push(columns)
        // Match the column restrictions on public.questions in Supabase.
        if (table === 'questions' && columns.split(',').includes('correct_option')) throw new Error('permission denied for table questions')
        return query
      }),
      eq: vi.fn((key: string, value: unknown) => { filters.push([key, value]); return query }),
      order: vi.fn(() => query),
      range: vi.fn(async (start: number, end: number) => ({ ...response(), data: response().data.slice(start, end + 1) })),
      in: vi.fn(async (_column: string, ids: string[]) => ({ ...response(), data: response().data.filter((row) => ids.includes(String(row.id))) })),
      upsert: vi.fn(async (batch: Row[]) => { (uploads[table] ??= []).push(...batch); return { error: null } }),
    }
    return query
  })
})

afterEach(() => { cleanup(); vi.clearAllMocks() })

describe('performance synchronization', () => {
  it('refuses to synchronize a payload when the authenticated account changed', async () => {
    expect(await syncStudyProgress(emptyProgress(), 'another-user')).toBeNull()
    expect(await syncOffensiveState({ totalOffensives: 1, currentStreak: 1, bestStreak: 1, lastOffensiveDate: null, offensiveLoggedToday: false, joinedAt: null }, 'another-user')).toBeNull()
    expect(client.from).not.toHaveBeenCalled()
  })
  it('recovers the correction of offline answers on another device after their progress is synchronized', async () => {
    rows.user_question_progress = [{ user_id: 'user-1', question_id: 'q1', selected_option: 0, is_favorite: true, is_revealed: false, updated_at: timestamp }]
    rows.questions = [{ id: 'q1', exam: 'CP-T', subject: 'Informática', topic: null, year: 2024, question_type: 'exam', statement: 'Questão' }]
    client.rpc.mockResolvedValue({ data: [{ question_id: 'q1', correct_option: 0, explanation: 'Correção offline' }], error: null })
    const merged = await syncStudyProgress(emptyProgress())
    expect(merged?.answers).toEqual({ q1: 0 })
    expect(merged?.favorites).toEqual(['q1'])
    expect(merged?.questionSnapshots.q1).toMatchObject({ correctOption: 0, explanation: 'Correção offline' })
    expect(client.rpc).toHaveBeenCalledWith('get_offline_question_answers', { p_question_ids: ['q1'] })
  })

  it('recovers validated answers and displays the correct totals on a new device', async () => {
    rows.question_answer_attempts = [
      { user_id: 'user-1', question_id: 'q1', selected_option: 0, correct_option: 0, explanation: 'Correta', submitted_at: timestamp },
      { user_id: 'user-1', question_id: 'q2', selected_option: 1, correct_option: 2, explanation: 'Revisar', submitted_at: timestamp },
    ]
    rows.questions = ['q1', 'q2'].map((id) => ({ id, exam: 'CP-T', subject: 'Informática', topic: 'Redes', year: 2024, question_type: 'exam', statement: id }))
    const merged = await syncStudyProgress(emptyProgress())
    expect(merged?.answers).toEqual({ q1: 0, q2: 1 })
    expect(merged?.questionSnapshots.q1.correctOption).toBe(0)
    expect(merged?.questionSnapshots.q2.correctOption).toBe(2)
    expect(uploads.user_question_progress).toHaveLength(2)
    expect(selections.questions).toEqual(['id,exam,subject,topic,year,question_type,statement'])

    render(<PerformanceDashboard snapshots={merged!.questionSnapshots} answers={merged!.answers} completedSimulations={[]} onClose={vi.fn()} onReview={vi.fn()} offensiveState={null} offensiveLoaded={false} />)
    for (const [label, value] of [['Respondidas', '2'], ['Acertos', '1'], ['Erros', '1'], ['Aproveitamento', '50%']]) {
      expect(within(screen.getByText(label).closest('article')!).getByText(value)).not.toBeNull()
    }
  })

  it('preserves locally validated results when there is no matching server attempt', async () => {
    const progress = emptyProgress()
    progress.answers = { q1: 1 }
    progress.progressUpdatedAt = { q1: timestamp }
    progress.questionSnapshots = { q1: { exam: 'CP-T', subject: 'Informática', topic: null, year: '2024', questionType: 'exam', prompt: 'Questão', correctOption: 1, explanation: 'Explicação salva' } }
    rows.questions = [{ id: 'q1', exam: 'CP-T', subject: 'Informática', topic: null, year: 2024, question_type: 'exam', statement: 'Questão' }]
    const merged = await syncStudyProgress(progress)
    expect(merged?.questionSnapshots.q1).toMatchObject({ correctOption: 1, explanation: 'Explicação salva' })
  })

  it('keeps two completed simulations with the same score and retains their simulation flag', async () => {
    rows.user_simulation_results = ['sim-1', 'sim-2'].map((id, index) => ({
      user_id: 'user-1', simulation_id: id, exam_id: 'cp-t-informatica', exam_title: 'CP-T', study_mode: 'exam-questions',
      total_questions: 10, correct_answers: 8, wrong_answers: 2, score: 80,
      completed_at: `2026-11-01T1${index}:00:00.000Z`, updated_at: timestamp, is_simulation: true,
    }))
    const merged = await syncStudyProgress(emptyProgress())
    expect(merged?.completedSimulations.map((simulation) => simulation.id)).toEqual(['sim-2', 'sim-1'])
    expect(merged?.completedSimulations.every((simulation) => simulation.isSimulation)).toBe(true)
    expect(selections.user_simulation_results[0]).toContain('is_simulation')
  })
})
