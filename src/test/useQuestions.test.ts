import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'

const mockCachedRows = [
  {
    id: 'q1',
    year: 2020,
    question_number: 1,
    question_type: 'exam' as const,
    subject: 'Informática',
    topic: 'Redes',
    difficulty: 'Média',
    exam: 'cp-t-informatica',
    statement: 'Questão sobre redes',
    statement_after_image: null,
    image_url: null,
    image_alt: null,
    options: ['A', 'B', 'C', 'D'],
    correct_option: 0,
    explanation: null,
    source: null,
  },
  {
    id: 'q2',
    year: 2021,
    question_number: 2,
    question_type: 'exam' as const,
    subject: 'Informática',
    topic: 'Banco de Dados',
    difficulty: 'Fácil',
    exam: 'cp-t-informatica',
    statement: 'Questão sobre banco de dados',
    statement_after_image: null,
    image_url: null,
    image_alt: null,
    options: ['A', 'B', 'C', 'D'],
    correct_option: 1,
    explanation: null,
    source: null,
  },
]

vi.mock('../lib/supabase', () => ({
  supabase: null,
}))

vi.mock('../lib/localDatabase', () => ({
  readCachedQuestions: vi.fn(),
  cacheQuestions: vi.fn(),
  isNativeApp: vi.fn(() => false),
}))

import { useQuestions } from '../hooks/useQuestions'
import { readCachedQuestions } from '../lib/localDatabase'
import { studyTracks } from '../lib/studyTracks'

function renderUseQuestions({
  selectedExamId = 'cp-t-informatica',
  selectedStudyMode = 'exam-questions',
  examChoices = [
    { id: 'cp-t-informatica', group: 'Informática', title: 'CP-T Informática', description: '', exam: 'cp-t-informatica', subject: 'Informática', image: '' },
  ],
}: any = {}) {
  return renderHook(() =>
    useQuestions({ selectedExamId, selectedStudyMode, examChoices }),
  )
}

describe('useQuestions', () => {
  it.each(['exam-questions', 'bibliography-questions'] as const)('loads the correct sources for the old exams area and the general simulator (%s)', async (mode) => {
    vi.mocked(readCachedQuestions).mockImplementation(async (_exam, _subject, type) => type === 'exam'
      ? mockCachedRows.map((row) => ({ ...row, exam: 'CP-T' }))
      : [{ ...mockCachedRows[0], id: 'book', exam: 'CP-T', topic: 'Sistemas operacionais', question_type: 'bibliography' }])
    const { result } = renderUseQuestions({ selectedStudyMode: mode })
    await waitFor(() => expect(result.current.loading).toBe(false))
    if (mode === 'bibliography-questions') {
      expect(result.current.filteredQuestions.map((question) => question.id)).toEqual(['q1', 'q2', 'book'])
      expect(result.current.topics).toContain('Sistemas operacionais')
      expect(result.current.topics).toContain('Banco de Dados')
      expect(readCachedQuestions).toHaveBeenCalledTimes(2)
    } else {
      expect(result.current.filteredQuestions.map((question) => question.id)).toEqual(['q1', 'q2'])
      expect(readCachedQuestions).toHaveBeenCalledTimes(1)
      expect(readCachedQuestions).not.toHaveBeenCalledWith(expect.anything(), expect.anything(), 'bibliography')
    }
  })
  it('restricts track practice and filter options to mapped topics from the correct contest', async () => {
    vi.mocked(readCachedQuestions).mockImplementation(async (_exam, _subject, type) => type === 'exam'
      ? mockCachedRows.map((row, index) => ({ ...row, exam: 'CP-T', topic: index === 0 ? 'Memória cache' : 'SQL / consultas' }))
      : [{ ...mockCachedRows[0], id: 'book1', exam: 'CP-T', topic: 'Memória cache', question_type: 'bibliography' }])
    const choices = [{ id: 'cp-t-informatica', group: 'Concursos', title: 'CP-T', description: '', exam: 'CP-T', subject: 'Informática', image: '' }]
    const { result } = renderHook(() => useQuestions({ selectedExamId: 'cp-t-informatica', selectedStudyMode: 'exam-questions', examChoices: choices, trackStep: studyTracks[0].steps[0] }))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.filteredQuestions.map((question) => question.id)).toEqual(['q1', 'book1'])
    expect(readCachedQuestions).toHaveBeenCalledWith('CP-T', 'Informática', 'exam')
    expect(readCachedQuestions).toHaveBeenCalledWith('CP-T', 'Informática', 'bibliography')
    expect(result.current.topics).toEqual(['Todos', 'Memória cache'])
    expect(result.current.years).toEqual(['Todos', '2020', 'Bibliografia'])
    act(() => result.current.setQuestionSearch('banco de dados'))
    expect(result.current.filteredQuestions).toEqual([])
    expect(result.current.questions).toHaveLength(3)
  })
  it('waits for a study resource to be chosen in every contest focus home', () => {
    const { result } = renderUseQuestions({
      selectedExamId: 'ea-hsg', selectedStudyMode: null,
      examChoices: [{ id: 'ea-hsg', group: 'Concursos', title: 'EA-HSG', description: '', exam: 'EA-HSG', subject: null, image: '' }],
    })
    expect(result.current.questions).toEqual([])
    expect(result.current.loading).toBe(false)
    expect(readCachedQuestions).not.toHaveBeenCalled()
  })

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('returns empty questions when no exam is selected', () => {
    const { result } = renderUseQuestions({ selectedExamId: null })
    expect(result.current.questions).toEqual([])
    expect(result.current.loading).toBe(false)
    expect(result.current.loadError).toBe('')
  })

  it('returns empty questions when no study mode is selected for cp-t-informatica', () => {
    const { result } = renderUseQuestions({ selectedStudyMode: null })
    expect(result.current.questions).toEqual([])
    expect(result.current.loading).toBe(false)
  })

  it('filters questions by topic after load', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    act(() => {
      result.current.setTopic('Redes')
    })
    const filtered = result.current.filteredQuestions
    expect(filtered).toHaveLength(1)
    expect(filtered[0].topic).toBe('Redes')
  })

  it('filters questions by year after load', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    act(() => {
      result.current.setYear('2020')
    })
    const filtered = result.current.filteredQuestions
    expect(filtered).toHaveLength(1)
    expect(filtered[0].year).toBe('2020')
  })

  it('filters questions by search text after load', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    act(() => {
      result.current.setQuestionSearch('redes')
    })
    const filtered = result.current.filteredQuestions
    expect(filtered).toHaveLength(1)
    expect(filtered[0].prompt).toBe('Questão sobre redes')
  })

  it('returns empty filtered questions when search matches nothing', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    act(() => {
      result.current.setQuestionSearch('inexistente')
    })
    expect(result.current.filteredQuestions).toHaveLength(0)
  })

  it('topics include unique topics plus Todos after load', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    expect(result.current.topics).toContain('Todos')
    expect(result.current.topics).toContain('Redes')
    expect(result.current.topics).toContain('Banco de Dados')
  })

  it('years include unique years plus Todos after load', async () => {
    vi.mocked(readCachedQuestions).mockResolvedValue(mockCachedRows)
    const { result } = renderUseQuestions()
    await waitFor(() => expect(result.current.questions).toHaveLength(2))
    expect(result.current.years).toContain('Todos')
    expect(result.current.years).toContain('2020')
    expect(result.current.years).toContain('2021')
  })
})
