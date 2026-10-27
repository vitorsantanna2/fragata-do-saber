import katex from 'katex'
import 'katex/dist/katex.min.css'
import { Fragment } from 'react'

type Question = {
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
  answer: number
  explanation: string | null
  source: string | null
}

type QuestionCardProps = {
  question: Question
  answerState: Record<string, number>
  revealedState: string[]
  favorites: string[]
  setAnswers: (value: Record<string, number>) => void
  setRevealed: (value: string[]) => void
  setFavorites: (value: string[]) => void
  simulationIds: string[] | null
  recordSimulationAnswer: (questionId: string, optionIndex: number) => void
  recordSimulationReveal: (questionId: string) => void
  conciseSource: (source: string) => string
}

function RichText({ text, className }: { text: string; className?: string }) {
  const mathSegmentPattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+\$)/g
  return (
    <span className={className}>
      {text.split(mathSegmentPattern).map((segment, index) => {
        const isBlockMath = segment.startsWith('$$') && segment.endsWith('$$')
        const isInlineMath = segment.startsWith('$') && segment.endsWith('$')
        if (!isBlockMath && !isInlineMath) {
          return <Fragment key={index}>{segment}</Fragment>
        }
        const delimiters = isBlockMath ? 2 : 1
        const math = segment.slice(delimiters, -delimiters)
        return (
          <span
            key={index}
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(math, {
                displayMode: isBlockMath,
                throwOnError: false,
              }),
            }}
          />
        )
      })}
    </span>
  )
}

export function QuestionCard({
  question,
  answerState,
  revealedState,
  favorites,
  setAnswers,
  setRevealed,
  setFavorites,
  simulationIds,
  recordSimulationAnswer,
  recordSimulationReveal,
  conciseSource,
}: QuestionCardProps) {
  const isRevealed = revealedState.includes(question.id)
  const selectedAnswer = answerState[question.id]
  const hasAnswered = selectedAnswer !== undefined
  const answerIsCorrect = selectedAnswer === question.answer

  function toggleInList(list: string[], id: string, update: (value: string[]) => void) {
    update(list.includes(id) ? list.filter((item) => item !== id) : [...list, id])
  }

  return (
    <article id={`question-${question.id}`} className="scroll-mt-6 rounded-xl border border-line bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        {question.questionType === 'bibliography' ? (
          <span className="rounded-md bg-sea-light px-2.5 py-1 text-sea">Bibliografia</span>
        ) : (
          <>
            <span className="rounded-md bg-sea-light px-2.5 py-1 text-sea">{question.questionNumber === null ? 'Questão' : `Q${String(question.questionNumber).padStart(2, '0')}`}</span>
            {question.year && <span className="text-muted">{question.year}</span>}
          </>
        )}
        <span className="text-muted">{question.subject}</span>
        {question.topic && <span className="rounded-full bg-sea-light px-2.5 py-1 text-sea">{question.topic}</span>}
        {question.difficulty && <span className="rounded-full bg-[#fff2e8] px-2.5 py-1 text-[#9b5734]">{question.difficulty}</span>}
        <button
          className={`ml-1 grid size-8 place-items-center rounded-md transition hover:bg-paper ${favorites.includes(question.id) ? 'text-coral' : 'text-muted'}`}
          type="button"
          aria-label={favorites.includes(question.id) ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
          onClick={() => toggleInList(favorites, question.id, setFavorites)}
        >
          {favorites.includes(question.id) ? '★' : '☆'}
        </button>
      </div>
      <p className="mt-4 text-xs font-semibold text-muted">{question.exam}</p>
      {question.source && <p className="mt-2 text-sm text-muted" title={question.source}><strong>Referência:</strong> {conciseSource(question.source)}</p>}
      <RichText className="mt-2 block whitespace-pre-wrap font-semibold leading-6 text-ink" text={question.prompt} />
      {question.imageUrl && (
        <img
          className="mt-4 max-h-[28rem] w-full rounded-lg border border-line bg-white object-contain"
          src={question.imageUrl}
          alt={question.imageAlt || `Imagem da questão ${question.questionNumber}`}
          loading="lazy"
        />
      )}
      {question.promptAfterImage && (
        <RichText className="mt-4 block whitespace-pre-wrap leading-6 text-ink" text={question.promptAfterImage} />
      )}
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {question.options.map((option, optionIndex) => {
          const isSelected = selectedAnswer === optionIndex
          const isCorrect = question.answer === optionIndex
          const optionStyle = hasAnswered && isCorrect
            ? 'border-sea bg-sea-light text-sea'
            : hasAnswered && isSelected
              ? 'border-red-300 bg-red-50 text-red-700'
              : 'border-line bg-white text-ink'

          return (
            <button
              className={`flex min-h-12 items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition ${optionStyle} ${hasAnswered ? 'cursor-default' : 'hover:border-sea/50 hover:bg-paper'}`}
              key={String(optionIndex) + option}
              type="button"
              disabled={hasAnswered}
              aria-pressed={isSelected}
              onClick={() => (simulationIds !== null ? recordSimulationAnswer(question.id, optionIndex) : setAnswers({ ...answerState, [question.id]: optionIndex }))}
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full border border-current text-[10px] font-extrabold">{String.fromCharCode(65 + optionIndex)}</span>
              <RichText className="whitespace-pre-wrap leading-5" text={option} />
            </button>
          )
        })}
      </div>
      {isRevealed && (
        <p className="mt-4 rounded-lg bg-sea-light/70 p-3 text-sm leading-6 text-ink"><strong className="text-sea">Comentário: </strong>{question.explanation}</p>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span className={`text-xs font-bold ${hasAnswered ? answerIsCorrect ? 'text-sea' : 'text-red-700' : 'text-muted'}`}>{!hasAnswered ? 'Escolha uma alternativa' : answerIsCorrect ? 'Resposta correta' : 'Resposta incorreta'}</span>
        <button
          className="text-sm font-bold text-sea transition hover:text-ink disabled:cursor-not-allowed disabled:text-muted/60"
          type="button"
          disabled={selectedAnswer === undefined && !isRevealed}
          onClick={() => (simulationIds !== null ? recordSimulationReveal(question.id) : toggleInList(revealedState, question.id, setRevealed))}
        >
          {isRevealed ? 'Ocultar gabarito' : 'Ver gabarito'}
        </button>
      </div>
    </article>
  )
}

