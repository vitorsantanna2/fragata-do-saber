import type { ComponentProps } from 'react'
import type { Question } from '../hooks/useQuestions'
import { conciseSource } from '../lib/utils'
import { QuestionCard } from './QuestionCard'
import type { ReviewConfidence, ReviewSchedules } from '../lib/scheduledReviews'

export type StudyQuestionListProps = Pick<
  ComponentProps<typeof QuestionCard>,
  'answerState' | 'revealedState' | 'favorites' | 'setRevealed' | 'setFavorites' | 'submitAnswer'
> & {
  questions: Question[]
  hasQuestions: boolean
  reviewQuestionId: string | null
  reviewingFromDashboard: boolean
  pendingAnswerIds: string[]
  answerErrors: Record<string, string>
  onBackToReviewList: () => void
  onBackToDashboard: () => void
  onMissingQuestion: () => void
  reviewSchedules?: ReviewSchedules
  onReviewConfidence?: (questionId: string, confidence: ReviewConfidence) => void
}

export function StudyQuestionList({
  questions,
  hasQuestions,
  reviewQuestionId,
  reviewingFromDashboard,
  answerState,
  revealedState,
  favorites,
  setRevealed,
  setFavorites,
  submitAnswer,
  pendingAnswerIds,
  answerErrors,
  onBackToReviewList,
  onBackToDashboard,
  onMissingQuestion,
  reviewSchedules,
  onReviewConfidence,
}: StudyQuestionListProps) {
  const questionsToShow = reviewQuestionId
    ? questions.filter((question) => question.id === reviewQuestionId)
    : reviewingFromDashboard
      ? questions.filter((question) => question.answer !== null && answerState[question.id] !== undefined && answerState[question.id] !== question.answer)
      : questions

  if (questionsToShow.length === 0) {
    if (reviewQuestionId) {
      return (
        <div className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
          <p className="font-bold">Questão não encontrada</p>
          <p className="mt-2 text-muted">Esta questão não está mais disponível nos filtros atuais.</p>
          <button type="button" className="mt-3 w-full rounded-lg border border-sea bg-white px-4 py-2.5 text-xs font-bold text-sea disabled:opacity-60" onClick={onMissingQuestion}>Voltar ao painel</button>
        </div>
      )
    }

    if (reviewingFromDashboard) {
      return (
        <div className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
          <p className="font-bold">Nenhuma questão para revisar</p>
          <p className="mt-2 text-muted">Não há questões erradas com esses filtros.</p>
          <button type="button" className="mt-3 w-full rounded-lg border border-sea bg-white px-4 py-2.5 text-xs font-bold text-sea disabled:opacity-60" onClick={onBackToDashboard}>Voltar ao painel de desempenho</button>
        </div>
      )
    }

    return (
      <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
        {hasQuestions ? 'Nenhuma questão encontrada com esses filtros.' : 'Ainda não há questões publicadas no banco.'}
      </p>
    )
  }

  return questionsToShow.map((question) => (
    <div key={question.id} id={`question-${question.id}`} className={reviewQuestionId === question.id ? 'ring-2 ring-sea rounded-lg' : ''}>
      <QuestionCard
        question={question}
        answerState={answerState}
        isAnswerPending={pendingAnswerIds.includes(question.id)}
        answerError={answerErrors[question.id] ?? null}
        revealedState={revealedState}
        favorites={favorites}
        setRevealed={setRevealed}
        setFavorites={setFavorites}
        submitAnswer={submitAnswer}
        conciseSource={conciseSource}
        reviewSchedule={reviewSchedules?.[question.id]}
        onReviewConfidence={onReviewConfidence ? (confidence) => onReviewConfidence(question.id, confidence) : undefined}
      />
      {reviewQuestionId ? <button type="button" className="mt-3 w-full rounded-lg border border-sea bg-white px-4 py-2.5 text-xs font-bold text-sea disabled:opacity-60" onClick={onBackToReviewList}>Voltar à lista de questões para revisar</button> : null}
      {!reviewQuestionId && reviewingFromDashboard ? <button type="button" className="mt-3 w-full rounded-lg border border-sea bg-white px-4 py-2.5 text-xs font-bold text-sea disabled:opacity-60" onClick={onBackToDashboard}>Voltar ao painel de desempenho</button> : null}
    </div>
  ))
}
