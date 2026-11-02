import { useCallback, useEffect, useMemo, useState, type Dispatch, type SetStateAction } from 'react'
import { supabase } from '../lib/supabase'
import {
  cacheQuestions,
  readCachedQuestions,
  isNativeApp,
  type CachedQuestionRow,
} from '../lib/localDatabase'
import { normalizeSearchText, conciseSource, conciseTopic } from '../lib/utils'
import { loadOfflineQuestionAnswers } from '../lib/questionAnswers'
import { loadQuestionCatalog, toStudyQuestion } from '../lib/questionCatalog'
import type { ExamChoice } from '../lib/exams'
import { matchesTrackStep, type TrackStep } from '../lib/studyTracks'

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

type UseQuestionsProps = {
  trackStep?: TrackStep | null
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
  trackStep,
  selectedExamId,
  selectedStudyMode,
  examChoices,
}: UseQuestionsProps): UseQuestionsReturn {
  // O ID histórico bibliography-questions agora representa o simulador geral.
  const mixedPractice = !!trackStep || selectedStudyMode === 'bibliography-questions'
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [usingOfflineCache, setUsingOfflineCache] = useState(false)
  const [topic, setTopic] = useState('Todos')
  const [year, setYear] = useState('Todos')
  const [bibliographySource, setBibliographySource] = useState('Todos')
  const [questionSearch, setQuestionSearch] = useState('')

  const toQuestion = toStudyQuestion

  useEffect(() => {
    if (!selectedExamId) {
      setQuestions([])
      setLoading(false)
      setLoadError('')
      return
    }

    if (selectedStudyMode !== 'exam-questions' && selectedStudyMode !== 'bibliography-questions') {
      setQuestions([])
      setLoading(false)
      setLoadError('')
      return
    }

    const questionType: 'exam' | 'bibliography' = selectedStudyMode === 'bibliography-questions'
      ? 'bibliography'
      : 'exam'
    const questionTypes: ('exam' | 'bibliography')[] = mixedPractice ? ['exam', 'bibliography'] : [questionType]

    const selectedExam = examChoices.find((choice) => choice.id === selectedExamId)
    if (!selectedExam) {
      setQuestions([])
      setLoading(false)
      return
    }
    const exam = selectedExam

    let active = true
    let cachedRows: CachedQuestionRow[] = []

    async function loadQuestions() {
      setLoading(true)
      setLoadError('')
      setUsingOfflineCache(false)

      try {
        cachedRows = (await Promise.all(questionTypes.map((type) => readCachedQuestions(exam.exam, exam.subject, type)))).flat()
        if (!active) return
        if (cachedRows.length > 0) {
          setQuestions(cachedRows.map(toQuestion))
          setUsingOfflineCache(true)
          setLoading(false)
        }
      } catch (error) {
        console.warn('Não foi possível ler as questões salvas no aparelho.', error)
      }

      if (!navigator.onLine) {
        setLoadError(cachedRows.length ? '' : 'Nenhuma questão foi baixada para este concurso. Abra-o com internet antes de estudar offline.')
        setLoading(false)
        return
      }

      if (!supabase) {
        setLoadError(cachedRows.length ? '' : 'Configure VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY no arquivo .env.local.')
        setLoading(false)
        return
      }

      const catalogs = await Promise.all(questionTypes.map((type) => loadQuestionCatalog(exam.exam, exam.subject, type, () => active)))
      if (!active || catalogs.some((catalog) => !catalog)) return
      const questionRows = catalogs.flatMap((catalog) => catalog ?? [])
      const questionIds = questionRows.map((question) => question.id)
      const native = isNativeApp()
      let attemptsByQuestionId = new Map<string, { correct_option: number; explanation: string | null }>()
      if (native && questionIds.length > 0) {
        attemptsByQuestionId = await loadOfflineQuestionAnswers(questionIds)
        if (!active) return
      } else if (questionIds.length > 0) {
        // Busca as correções em lotes para evitar limites de URL e de resposta.
        for (let offset = 0; offset < questionIds.length; offset += 100) {
          const { data: attempts, error: attemptsError } = await supabase
            .from('question_answer_attempts')
            .select('question_id,correct_option,explanation')
            .in('question_id', questionIds.slice(offset, offset + 100))

          if (!active) return
          if (attemptsError) {
            console.warn('Não foi possível restaurar as respostas já corrigidas.', attemptsError)
          } else {
            for (const attempt of attempts ?? []) {
              attemptsByQuestionId.set(attempt.question_id, { correct_option: attempt.correct_option, explanation: attempt.explanation })
            }
          }
        }
      }

      const safeQuestionRows = questionRows.map((question) => {
        const attempt = attemptsByQuestionId.get(question.id)
        if (native && (!attempt || !Number.isInteger(attempt.correct_option) || attempt.correct_option < 0 || attempt.correct_option >= question.options.length)) {
          throw new Error('O download das questões ficou incompleto. Conecte-se novamente para baixar os gabaritos antes de estudar offline.')
        }
        return {
          ...question,
          correct_option: attempt?.correct_option ?? -1,
          explanation: attempt?.explanation ?? null,
        }
      }) as CachedQuestionRow[]
      if (native) {
        for (const type of questionTypes) {
          await cacheQuestions(safeQuestionRows.filter((row) => row.question_type === type), exam.exam, exam.subject, type)
        }
        if (!active) return
      }
      setUsingOfflineCache(false)
      setQuestions(safeQuestionRows.map(toQuestion))

      setLoading(false)
    }

    void loadQuestions().catch((error: unknown) => {
      if (!active) return
      if (cachedRows.length) {
        setQuestions(cachedRows.map(toQuestion))
        setUsingOfflineCache(true)
        setLoadError('')
        console.warn('Não foi possível atualizar as questões; usando o conteúdo baixado.', error)
      } else {
        setLoadError(error instanceof Error ? error.message : 'Não foi possível carregar as questões. Verifique sua conexão.')
      }
      setLoading(false)
    })

    return () => { active = false }
  }, [selectedExamId, selectedStudyMode, examChoices, toQuestion, mixedPractice])

  const trackQuestions = useMemo(() => trackStep ? questions.filter((question) => matchesTrackStep(question, trackStep)) : questions, [questions, trackStep])
  const topics = useMemo(
    () => ['Todos', ...new Set(trackQuestions.flatMap((question) => question.topic ? [conciseTopic(question.topic)] : []))],
    [trackQuestions],
  )
  const years = useMemo(
    () => ['Todos', ...new Set(trackQuestions.map((question) => question.year).filter(Boolean))],
    [trackQuestions],
  )
  const bibliographySources = useMemo(
    () => ['Todos', ...new Set(trackQuestions.flatMap((question) => question.source ? [conciseSource(question.source)] : []))],
    [trackQuestions],
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
        (!trackStep || matchesTrackStep(question, trackStep)) &&
        (topic === 'Todos' || conciseTopic(question.topic ?? '') === topic) &&
        (selectedStudyMode !== 'bibliography-questions' || bibliographySource === 'Todos' || (question.source !== null && conciseSource(question.source) === bibliographySource)) &&
        (year === 'Todos' || question.year === year)
    })
  }, [questions, topic, year, bibliographySource, selectedStudyMode, questionSearch, trackStep])

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
