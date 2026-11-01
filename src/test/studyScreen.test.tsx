import type { ComponentProps } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { StudyScreen } from '../components/StudyScreen'
import { getSimulationResult } from '../lib/simulationResults'
import type { Question } from '../hooks/useQuestions'

const questions: Question[] = Array.from({ length: 10 }, (_, index) => ({
  id: `q${index}`, year: '2024', questionNumber: index + 1, questionType: 'exam', subject: 'Informática',
  topic: null, difficulty: null, exam: 'CP-T', prompt: `Questão ${index}`, promptAfterImage: null,
  imageUrl: null, imageAlt: null, options: ['A', 'B'], answer: 0, explanation: null, source: null,
}))
const ids = questions.map((question) => question.id)
const answers = Object.fromEntries(ids.map((id, index) => [id, index < 8 ? 0 : 1]))

function props(): ComponentProps<typeof StudyScreen> {
  return {
    examTitle: 'CP-T', onChangeExam: vi.fn(), questions, loading: false, loadError: '', usingOfflineCache: false, showQuestionList: true,
    filters: {
      questionSearch: '', setQuestionSearch: vi.fn(), topic: 'Todos', setTopic: vi.fn(), year: 'Todos', setYear: vi.fn(),
      bibliographySource: 'Todos', setBibliographySource: vi.fn(), topics: ['Todos'], years: ['Todos'], bibliographySources: ['Todos'],
      selectedStudyMode: null, filteredQuestionsLength: 1500, simulationIds: ids, startSimulation: vi.fn(), exitSimulation: vi.fn(),
      simulationSize: 50, startQuickSimulation: vi.fn(), quickSimulationSize: 10, performanceCorrectCount: 8, performanceAnsweredCount: 10,
    },
    simulation: { simulationAnswers: answers, simulationRevealed: [], pendingAnswerIds: [], answerErrors: {}, recordSimulationAnswer: vi.fn(), recordSimulationReveal: vi.fn() },
    questionList: {
      hasQuestions: true, reviewQuestionId: null, reviewingFromDashboard: false, answerState: {}, revealedState: [], favorites: [],
      setRevealed: vi.fn(), setFavorites: vi.fn(), submitAnswer: vi.fn(), pendingAnswerIds: [], answerErrors: {},
      onBackToReviewList: vi.fn(), onBackToDashboard: vi.fn(), onMissingQuestion: vi.fn(),
    },
  }
}

afterEach(cleanup)

describe('simulation completion summary', () => {
  it('renders a single summary using the quick simulation size rather than the bank size', async () => {
    render(<StudyScreen {...props()} />)
    expect(await screen.findByText('8 de 10 questões corretas')).not.toBeNull()
    expect(screen.getAllByText('Simulado concluído')).toHaveLength(1)
    expect(screen.queryByText('8 de 1500 questões corretas')).toBeNull()
    expect(getSimulationResult(questions, ids, answers)).toMatchObject({ total: 10, correctCount: 8, score: 80, complete: true })
  })

  it('does not mark the simulation as finished if a saved question is unavailable', async () => {
    const screenProps = { ...props(), questions: questions.slice(0, 9) }
    render(<StudyScreen {...screenProps} />)
    await screen.findByText('Questão 0')
    expect(screen.queryByText('Simulado concluído')).toBeNull()
    expect(getSimulationResult(screenProps.questions, ids, answers)).toMatchObject({ total: 10, answeredCount: 9, complete: false })
  })
})
