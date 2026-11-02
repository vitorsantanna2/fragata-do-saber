import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScheduledReviews } from '../components/ScheduledReviews'
import { useProgress } from '../hooks/useProgress'
import { useReviewQueue } from '../hooks/useReviewQueue'
import { loadReviewQuestion } from '../lib/reviewQuestions'
import { scheduleReview } from '../lib/scheduledReviews'
import { getSaoPauloDateKey } from '../lib/offensiveDates'
import type { Question } from '../hooks/useQuestions'
import type { StudyProgress, StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

vi.mock('../lib/reviewQuestions', () => ({ loadReviewQuestion: vi.fn() }))
vi.mock('../lib/progressSync', () => ({ loadValidatedAnswers: vi.fn(), syncStudyProgress: vi.fn(), syncOffensiveState: vi.fn() }))

const noQuestions: [] = []
const question: Question = { id: 'q1', year: '2024', questionNumber: 1, questionType: 'exam', subject: 'Informática', topic: 'Redes', difficulty: null, exam: 'CP-T', prompt: 'Questão de revisão', promptAfterImage: null, imageUrl: null, imageAlt: null, options: ['Alternativa correta', 'Alternativa errada'], answer: 0, explanation: 'Explicação da questão', source: null }
const snapshot: StudyQuestionSnapshot = { exam: question.exam, subject: question.subject, topic: question.topic, year: question.year, questionType: question.questionType, prompt: question.prompt, correctOption: 0, explanation: question.explanation }

function Harness() {
  const progress = useProgress({ questions: noQuestions, accountUser: null, isOnline: false })
  const { today, dueReviews } = useReviewQueue(progress.reviewSchedules, progress.questionSnapshots)
  return <ScheduledReviews today={today} dueReviews={dueReviews} schedules={progress.reviewSchedules} isOnline={false}
    favorites={progress.favorites} setFavorites={progress.setFavorites} answerErrors={{}} onRate={progress.rateReview} onClose={vi.fn()}
    onAnswer={async (loaded, option, attemptId) => {
      progress.setAnswers((current) => ({ ...current, [loaded.id]: option }))
      progress.recordReviewAnswer(loaded.id, option === loaded.answer, `${attemptId}:${loaded.id}`)
      return { selectedOption: option, correctOption: loaded.answer!, explanation: loaded.explanation }
    }} />
}

beforeEach(() => {
  window.localStorage.clear()
  vi.mocked(loadReviewQuestion).mockResolvedValue(question)
  const today = getSaoPauloDateKey()
  const yesterday = new Date(Date.parse(`${today}T15:00:00Z`) - 86_400_000).toISOString()
  const progress: StudyProgress = {
    answers: { q1: 0 }, revealed: [], favorites: [], questionSnapshots: { q1: snapshot }, progressUpdatedAt: { q1: yesterday },
    selectedExamId: null, selectedStudyMode: null, topic: 'Todos', year: 'Todos', bibliographySource: 'Todos', questionSearch: '',
    savedSimulation: null, completedSimulations: [], reviewSchedules: { q1: scheduleReview(undefined, true, 'sure', 'old-attempt', yesterday) },
  }
  window.localStorage.setItem('study_progress_v1:guest', JSON.stringify(progress))
})

afterEach(() => { cleanup(); vi.clearAllMocks(); window.localStorage.clear() })

describe('scheduled review session', () => {
  it('lets an already answered question be tried again offline, rated and restored after reopening', async () => {
    const user = userEvent.setup()
    const view = render(<Harness />)
    await user.click(await screen.findByRole('button', { name: /Revisar questão/ }))
    const answer = await screen.findByRole('button', { name: /Alternativa errada/ })
    expect(answer.hasAttribute('disabled')).toBe(false)
    expect(screen.queryByText('Resposta correta')).toBeNull()
    await user.click(answer)
    expect(await screen.findByText('Resposta incorreta')).not.toBeNull()
    await user.click(screen.getByRole('button', { name: 'Chutei' }))
    expect(screen.getByRole('button', { name: 'Chutei' }).getAttribute('aria-pressed')).toBe('true')
    await user.click(screen.getByRole('button', { name: 'Concluir revisão' }))
    expect(screen.getByText('Tudo em dia!')).not.toBeNull()
    await waitFor(() => {
      const saved = JSON.parse(window.localStorage.getItem('study_progress_v1:guest')!) as StudyProgress
      expect(saved.answers.q1).toBe(1)
      expect(saved.reviewSchedules?.q1).toMatchObject({ confidence: 'guess', lastCorrect: false, intervalDays: 1 })
      expect(saved.reviewSchedules!.q1.dueDate > getSaoPauloDateKey()).toBe(true)
    })
    view.unmount()
    render(<Harness />)
    await waitFor(() => expect(screen.queryByRole('button', { name: /Revisar questão/ })).toBeNull())
    expect(screen.getByText('Tudo em dia!')).not.toBeNull()
  })

  it('shows an actionable message when a due question has not been downloaded', async () => {
    vi.mocked(loadReviewQuestion).mockRejectedValue(new Error('Esta questão ainda não está disponível offline.'))
    const user = userEvent.setup()
    render(<Harness />)
    await user.click(await screen.findByRole('button', { name: /Revisar questão/ }))
    expect((await screen.findByRole('alert')).textContent).toContain('não está disponível offline')
    expect(screen.queryByRole('button', { name: /Alternativa correta/ })).toBeNull()
  })
})
