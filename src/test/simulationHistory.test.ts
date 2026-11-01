import { afterEach, describe, expect, it } from 'vitest'
import { loadStudyProgress, saveStudyProgress } from '../lib/localDatabase'
import type { CompletedSimulation, StudyProgress } from '../lib/localDatabaseTypes'
import { mergeCompletedSimulations } from '../lib/simulationHistory'

const first: CompletedSimulation = {
  id: 'attempt-1', examId: 'cp-t-informatica', examTitle: 'CP-T', studyMode: 'exam-questions',
  totalQuestions: 10, correctAnswers: 8, wrongAnswers: 2, score: 80,
  completedAt: '2026-11-01T12:00:00.000Z', isSimulation: true,
}
const second = { ...first, id: 'attempt-2', completedAt: '2026-11-01T13:00:00.000Z' }

afterEach(() => window.localStorage.clear())

describe('simulation history', () => {
  it('keeps separate attempts with identical results on the same day', () => {
    expect(mergeCompletedSimulations([first, second])).toEqual([second, first])
  })

  it('deduplicates the same attempt by ID and excludes ordinary study records', () => {
    expect(mergeCompletedSimulations([first, { ...first, completedAt: second.completedAt }, { ...second, isSimulation: false }]))
      .toEqual([{ ...first, completedAt: second.completedAt }])
  })

  it('restores every distinct attempt after saving and reopening the app', async () => {
    const progress: StudyProgress = {
      answers: {}, revealed: [], favorites: [], progressUpdatedAt: {}, questionSnapshots: {},
      selectedExamId: null, selectedStudyMode: null, topic: 'Todos', year: 'Todos',
      bibliographySource: 'Todos', questionSearch: '', savedSimulation: null,
      completedSimulations: [first, second],
    }
    await saveStudyProgress(progress)
    expect((await loadStudyProgress())?.completedSimulations).toEqual([second, first])
  })

  it('assigns a stable ID when restoring a simulation created before this update', async () => {
    window.localStorage.setItem('study_progress_v1', JSON.stringify({
      savedSimulation: {
        ids: ['q1'], answers: {}, revealed: [], examId: first.examId,
        studyMode: first.studyMode, lastQuestionId: 'q1', updatedAt: first.completedAt,
      },
    }))
    expect((await loadStudyProgress())?.savedSimulation?.id).toBe(`${first.examId}-${first.completedAt}`)
  })
})
