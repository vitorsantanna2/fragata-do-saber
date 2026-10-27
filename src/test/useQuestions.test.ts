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
}))

import { useQuestions } from '../hooks/useQuestions'
import { readCachedQuestions } from '../lib/localDatabase'

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
