import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { examChoices } from '../lib/exams'
import { getFocusResources, scopeStudyData } from '../lib/studyFocus'
import { scheduleReview } from '../lib/scheduledReviews'
import type { CompletedSimulation, StudyQuestionSnapshot } from '../lib/localDatabaseTypes'
import { ExamFocusHome } from '../components/ExamFocusHome'
import { PerformanceDashboard } from '../components/PerformanceDashboard'

const cpt = examChoices.find((exam) => exam.id === 'cp-t-informatica')!
const hsg = examChoices.find((exam) => exam.id === 'ea-hsg')!
const timestamp = '2026-11-01T12:00:00Z'
const cptQuestion: StudyQuestionSnapshot = { exam: 'CP-T', subject: 'Informática', topic: 'Redes', year: '2024', questionType: 'exam', prompt: 'Questão CP-T', correctOption: 0, explanation: null }
const snapshots = {
  cpt: cptQuestion,
  hsg: { ...cptQuestion, exam: 'EA-HSG', subject: 'Português', prompt: 'Questão EA-HSG' },
  anotherSubject: { ...cptQuestion, subject: 'Matemática', prompt: 'Outra especialidade' },
}
const simulation: CompletedSimulation = { id: 'sim-cpt', examId: cpt.id, examTitle: cpt.title, studyMode: 'exam-questions', totalQuestions: 10, correctAnswers: 8, wrongAnswers: 2, score: 80, completedAt: timestamp, isSimulation: true }
const data = {
  questionSnapshots: snapshots,
  answers: { cpt: 0, hsg: 1, anotherSubject: 1 },
  progressUpdatedAt: { cpt: timestamp, hsg: timestamp, anotherSubject: timestamp },
  completedSimulations: [simulation, { ...simulation, id: 'sim-hsg', examId: hsg.id, examTitle: hsg.title }],
  reviewSchedules: Object.fromEntries(Object.keys(snapshots).map((id) => [id, scheduleReview(undefined, true, null, id, timestamp)])),
}

afterEach(cleanup)

describe('contest study focus', () => {
  it('isolates questions, answers, review schedules and simulation history by contest and specialty', () => {
    const scoped = scopeStudyData(cpt, data)
    expect(Object.keys(scoped.questionSnapshots)).toEqual(['cpt'])
    expect(scoped.answers).toEqual({ cpt: 0 })
    expect(Object.keys(scoped.progressUpdatedAt)).toEqual(['cpt'])
    expect(Object.keys(scoped.reviewSchedules)).toEqual(['cpt'])
    expect(scoped.completedSimulations).toEqual([simulation])
    expect(scopeStudyData(hsg, data).answers).toEqual({ hsg: 1 })
    expect(Object.keys(data.answers)).toHaveLength(3)
  })

  it('keeps the global selection view available when there is no chosen focus', () => {
    expect(scopeStudyData(null, data)).toBe(data)
  })

  it('offers only resources that are available for the chosen contest', () => {
    expect(getFocusResources(cpt).map((resource) => resource.id)).toEqual(['exam-questions', 'bibliography-questions', 'mind-maps', 'scheduled-reviews', 'performance'])
    expect(getFocusResources(hsg).map((resource) => resource.id)).toEqual(['exam-questions', 'scheduled-reviews', 'performance'])
  })

  it('shows a personalized home with scoped metrics and functioning resource shortcuts', async () => {
    const scoped = scopeStudyData(cpt, data)
    const onSelect = vi.fn()
    render(<ExamFocusHome exam={cpt} snapshots={scoped.questionSnapshots} answers={scoped.answers} dueCount={1} publicAsset={(path) => `/${path}`} onSelect={onSelect} />)
    expect(screen.getByRole('heading', { name: cpt.title })).not.toBeNull()
    expect(within(screen.getByText('Questões respondidas').closest('article')!).getByText('1')).not.toBeNull()
    expect(within(screen.getByText('Aproveitamento').closest('article')!).getByText('100%')).not.toBeNull()
    expect(screen.queryByText('EA-HSG')).toBeNull()
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /Revisões programadas/ }))
    expect(onSelect).toHaveBeenCalledWith('scheduled-reviews')
  })

  it('keeps performance charts and completed simulations inside the current focus', () => {
    const scoped = scopeStudyData(cpt, data)
    render(<PerformanceDashboard focusExam={cpt.exam} snapshots={scoped.questionSnapshots} answers={scoped.answers} completedSimulations={scoped.completedSimulations} onClose={vi.fn()} onReview={vi.fn()} offensiveState={null} offensiveLoaded={false} />)
    expect(screen.queryByLabelText('Concurso')).toBeNull()
    expect(screen.queryByText('EA-HSG')).toBeNull()
    expect(screen.queryByText('Português')).toBeNull()
    expect(screen.queryByText('Matemática')).toBeNull()
    expect(screen.getByText('Seu progresso em CP-T')).not.toBeNull()
    expect(screen.getByText(cpt.title)).not.toBeNull()
  })
})
