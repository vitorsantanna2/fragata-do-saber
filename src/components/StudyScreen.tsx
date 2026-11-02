import { lazy, Suspense, type ComponentProps } from 'react'
import type { Question } from '../hooks/useQuestions'
import { QuestionFilters } from './QuestionFilters'
import { Skeleton, SkeletonText } from './Skeleton'
import { StudyQuestionList, type StudyQuestionListProps } from './StudyQuestionList'

const Simulation = lazy(() => import('./Simulation').then((mod) => ({ default: mod.Simulation })))

type StudyScreenProps = {
  examTitle: string | undefined
  onChangeExam?: () => void
  onChooseStudyMode?: () => void
  filters: ComponentProps<typeof QuestionFilters>
  questions: Question[]
  loading: boolean
  loadError: string
  usingOfflineCache: boolean
  showQuestionList: boolean
  simulation: Omit<ComponentProps<typeof Simulation>, 'questions' | 'simulationIds'>
  questionList: Omit<StudyQuestionListProps, 'questions'>
}

export function StudyScreen({
  examTitle,
  onChangeExam,
  onChooseStudyMode,
  filters,
  questions,
  loading,
  loadError,
  usingOfflineCache,
  showQuestionList,
  simulation,
  questionList,
}: StudyScreenProps) {
  const { simulationIds, selectedStudyMode, filteredQuestionsLength } = filters

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-extrabold">{examTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {onChooseStudyMode && (
            <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={onChooseStudyMode}>
              Voltar às opções
            </button>
          )}
          {onChangeExam && <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold transition hover:border-sea hover:text-sea" type="button" onClick={onChangeExam}>
            Trocar concurso
          </button>}
        </div>
      </div>
      <section className="mt-4 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]" id="questoes">
        <QuestionFilters {...filters} />
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Banco de questões</p>
              <h2 className="mt-1 font-display text-2xl font-extrabold">{selectedStudyMode === 'mixed' ? 'Provas antigas e bibliografia' : selectedStudyMode === 'bibliography-questions' ? 'Questões baseadas na bibliografia' : 'Continue sua preparação'}</h2>
            </div>
            <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted ring-1 ring-line">{simulationIds ? simulationIds.length : filteredQuestionsLength} {simulationIds ? 'no simulado' : 'disponíveis'}</span>
          </div>
          <div className="space-y-4">
            {simulationIds !== null && (
              <Suspense fallback={<div className="mt-4 p-8 text-center"><Skeleton className="w-32 mx-auto mb-2" /><SkeletonText className="w-64 mx-auto" /></div>}>
                <Simulation {...simulation} questions={questions} simulationIds={simulationIds} />
              </Suspense>
            )}
            {loading && <p className="rounded-xl border border-line bg-white p-8 text-center text-sm text-muted">Carregando questões...</p>}
            {!loading && usingOfflineCache && <p className="rounded-xl border border-[#ead7be] bg-[#fff8ed] p-4 text-sm leading-6 text-[#805b2d]">Sem conexão: estas questões foram carregadas do aparelho. O conteúdo será atualizado quando a internet voltar.</p>}
            {!loading && loadError && <p className="rounded-xl border border-red-200 bg-white p-5 text-sm leading-6 text-red-800">{loadError}</p>}
            {showQuestionList && simulationIds === null && !loading && !loadError && (
              <StudyQuestionList {...questionList} questions={questions} />
            )}
            {!showQuestionList && simulationIds === null && !loading && !loadError && (
              <div className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
                <p className="font-bold">Escolha como praticar</p>
                <p className="mt-2 text-muted">Gere um simulado rápido ou completo, ou use a busca e os filtros para encontrar questões.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
