import { useCallback, useEffect, useMemo, useState, type Dispatch, type SetStateAction } from 'react'
import { supabase } from '../lib/supabase'
import {
  cacheQuestions,
  readCachedQuestions,
  type CachedQuestionRow,
} from '../lib/localDatabase'
import { normalizeSearchText, conciseSource, conciseTopic } from '../lib/utils'

export type Question = {
  id: string
  year: string
  questionNumber: number | null
  questionType: 'exam' | 'bibliography'
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  prompt: string
  promptAfterImage: string | null
  imageUrl: string | null
  imageAlt: string | null
  options: string[]
  answer: number | null
  explanation: string | null
  source: string | null
}

type ExamChoice = {
  id: string
  group: string
  title: string
  description: string
  exam: string
  subject: string | null
  image: string
}

type UseQuestionsProps = {
  selectedExamId: string | null
  selectedStudyMode: 'exam-questions' | 'bibliography-questions' | null
  examChoices: ExamChoice[]
}

type UseQuestionsReturn = {
  questions: Question[]
  loading: boolean
  loadError: string
  usingOfflineCache: boolean
  topics: string[]
  years: string[]
  bibliographySources: string[]
  filteredQuestions: Question[]
  setTopic: Dispatch<SetStateAction<string>>
  setYear: Dispatch<SetStateAction<string>>
  setBibliographySource: Dispatch<SetStateAction<string>>
  setQuestionSearch: Dispatch<SetStateAction<string>>
  setQuestionAnswerResult: (questionId: string, result: { correctOption: number; explanation: string | null }) => void
  topic: string
  year: string
  bibliographySource: string
  questionSearch: string
}

export function useQuestions({
  selectedExamId,
  selectedStudyMode,
  examChoices,
}: UseQuestionsProps): UseQuestionsReturn {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [usingOfflineCache, setUsingOfflineCache] = useState(false)
  const [topic, setTopic] = useState('Todos')
  const [year, setYear] = useState('Todos')
  const [bibliographySource, setBibliographySource] = useState('Todos')
  const [questionSearch, setQuestionSearch] = useState('')

  const toQuestion = useCallback((row: CachedQuestionRow): Question => ({
    id: row.id,
    year: row.question_type === 'bibliography' ? 'Bibliografia' : String(row.year ?? ''),
    questionNumber: row.question_type === 'bibliography' || row.question_number === 0 ? null : row.question_number,
    questionType: row.question_type,
    subject: row.subject,
    topic: row.topic,
    difficulty: row.difficulty,
    exam: row.exam,
    prompt: row.statement,
    promptAfterImage: row.statement_after_image,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    options: row.options,
    answer: row.correct_option != null && row.correct_option >= 0 ? row.correct_option : null,
    explanation: row.explanation ?? null,
    source: row.source,
  }), [])

  useEffect(() => {
    if (!selectedExamId) {
      setQuestions([])
      setLoading(false)
      setLoadError('')
      return
    }

    if (selectedExamId === 'cp-t-informatica' && selectedStudyMode !== 'exam-questions' && selectedStudyMode !== 'bibliography-questions') {
      setQuestions([])
      setLoading(false)
      setLoadError('')
      return
    }

    const questionType: 'exam' | 'bibliography' = selectedExamId === 'cp-t-informatica' && selectedStudyMode === 'bibliography-questions'
      ? 'bibliography'
      : 'exam'

    const selectedExam = examChoices.find((choice) => choice.id === selectedExamId)
    if (!selectedExam) {
      setQuestions([])
      setLoading(false)
      return
    }
    const exam = selectedExam

    let active = true

    async function loadQuestions() {
      setLoading(true)
      setLoadError('')
      setUsingOfflineCache(false)

      let cachedRows: CachedQuestionRow[] = []
      try {
        cachedRows = await readCachedQuestions(exam.exam, exam.subject, questionType)
        if (!active) return
        if (cachedRows.length > 0) {
          setQuestions(cachedRows.map(toQuestion))
          setUsingOfflineCache(true)
          setLoading(false)
        }
      } catch (error) {
        console.warn('Não foi possível ler as questões salvas no aparelho.', error)
      }

      if (!supabase) {
        setLoadError('Configure VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY no arquivo .env.local.')
        setLoading(false)
        return
      }

      let query = supabase
        .from('questions')
        .select('id, year, question_number, question_type, subject, topic, difficulty, exam, statement, statement_after_image, image_url, image_alt, options, source')
        .eq('is_published', true)
        .eq('is_annulled', false)
        .eq('exam', exam.exam)
        .eq('question_type', questionType)

      if (exam.subject) {
        query = query.eq('subject', exam.subject)
      }

      const { data, error } = await query.order('year', { ascending: false })

      if (!active) return

      if (error) {
        if (cachedRows.length > 0) {
          setLoadError('')
          setLoading(false)
          return
        }
        setLoadError(`Não foi possível carregar as questões. Confira se a tabela public.questions e a política de leitura estão configuradas. (${error.message})`)
      } else {
        const questionRows = data as Omit<CachedQuestionRow, 'correct_option' | 'explanation'>[]
        const questionIds = questionRows.map((question) => question.id)
        let attemptsByQuestionId = new Map<string, { correct_option: number; explanation: string | null }>()
        if (questionIds.length > 0) {
          const { data: attempts, error: attemptsError } = await supabase
            .from('question_answer_attempts')
            .select('question_id,correct_option,explanation')
            .in('question_id', questionIds)

          if (!active) return
          if (attemptsError) {
            console.warn('Não foi possível restaurar as respostas já corrigidas.', attemptsError)
          } else {
            attemptsByQuestionId = new Map((attempts ?? []).map((attempt) => [
              attempt.question_id,
              { correct_option: attempt.correct_option, explanation: attempt.explanation },
            ]))
          }
        }

        const safeQuestionRows = questionRows.map((question) => {
          const attempt = attemptsByQuestionId.get(question.id)
          return {
            ...question,
            correct_option: attempt?.correct_option ?? -1,
            explanation: attempt?.explanation ?? null,
          }
        }) as CachedQuestionRow[]
        setUsingOfflineCache(false)
        void cacheQuestions(questionRows, exam.exam, exam.subject, questionType).catch((cacheError) => {
          console.warn('Não foi possível atualizar o cache local de questões.', cacheError)
        })
        setQuestions(safeQuestionRows.map(toQuestion))
      }

      setLoading(false)
    }

    void loadQuestions()

    return () => { active = false }
  }, [selectedExamId, selectedStudyMode, examChoices, toQuestion])

  const topics = useMemo(
    () => ['Todos', ...new Set(questions.flatMap((question) => question.topic ? [conciseTopic(question.topic)] : []))],
    [questions],
  )
  const years = useMemo(
    () => ['Todos', ...new Set(questions.map((question) => question.year).filter(Boolean))],
    [questions],
  )
  const bibliographySources = useMemo(
    () => ['Todos', ...new Set(questions.flatMap((question) => question.source ? [conciseSource(question.source)] : []))],
    [questions],
  )

  const filteredQuestions = useMemo(() => {
    const normalizedSearch = normalizeSearchText(questionSearch.trim())
    return questions.filter((question) => {
      const searchableText = [
        question.prompt,
        question.promptAfterImage,
        question.options.join(' '),
        question.explanation,
        question.source,
        question.subject,
        question.topic,
        question.exam,
        question.year,
      ].filter(Boolean).join(' ')
      const matchesSearch = !normalizedSearch || normalizeSearchText(searchableText).includes(normalizedSearch)

      return matchesSearch &&
        (topic === 'Todos' || conciseTopic(question.topic ?? '') === topic) &&
        (selectedStudyMode !== 'bibliography-questions' || bibliographySource === 'Todos' || (question.source !== null && conciseSource(question.source) === bibliographySource)) &&
        (year === 'Todos' || question.year === year)
    })
  }, [questions, topic, year, bibliographySource, selectedStudyMode, questionSearch])

  const setQuestionAnswerResult = useCallback((questionId: string, result: { correctOption: number; explanation: string | null }) => {
    setQuestions((current) => current.map((question) => question.id === questionId
      ? { ...question, answer: result.correctOption, explanation: result.explanation }
      : question))
  }, [])

  return {
    questions,
    loading,
    loadError,
    usingOfflineCache,
    topics,
    years,
    bibliographySources,
    filteredQuestions,
    setTopic,
    setYear,
    setBibliographySource,
    setQuestionSearch,
    setQuestionAnswerResult,
    topic,
    year,
    bibliographySource,
    questionSearch,
  }
}
