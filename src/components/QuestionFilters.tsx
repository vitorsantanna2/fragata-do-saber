import type { Dispatch, SetStateAction } from 'react'
import { FilterSelect } from './FilterSelect'

type QuestionFiltersProps = {
  questionSearch: string
  setQuestionSearch: Dispatch<SetStateAction<string>>
  topic: string
  setTopic: Dispatch<SetStateAction<string>>
  year: string
  setYear: Dispatch<SetStateAction<string>>
  bibliographySource: string
  setBibliographySource: Dispatch<SetStateAction<string>>
  topics: string[]
  years: string[]
  bibliographySources: string[]
  selectedStudyMode: 'exam-questions' | 'bibliography-questions' | null
  filteredQuestionsLength: number
  simulationIds: string[] | null
  startSimulation: () => void
  exitSimulation: () => void
  simulationSize: number
  startQuickSimulation: () => void
  quickSimulationSize: number
  performanceCorrectCount: number
  performanceAnsweredCount: number
}

export function QuestionFilters({
  questionSearch,
  setQuestionSearch,
  topic,
  setTopic,
  year,
  setYear,
  bibliographySource,
  setBibliographySource,
  topics,
  years,
  bibliographySources,
  selectedStudyMode,
  filteredQuestionsLength,
  simulationIds,
  startSimulation,
  exitSimulation,
  simulationSize,
  startQuickSimulation,
  quickSimulationSize,
  performanceCorrectCount,
  performanceAnsweredCount,
}: QuestionFiltersProps) {
  return (
    <aside className="h-fit rounded-xl border border-line bg-white p-5" aria-label="Filtros de questões">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-base font-extrabold">Filtrar questões</h2>
      </div>
      <label className="mb-4 block rounded-xl border border-line bg-white p-4">
        <span className="mb-2 block text-xs font-bold text-ink">Buscar questões</span>
        <input
          className="block min-h-11 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-sea focus:ring-2 focus:ring-sea/10 disabled:cursor-not-allowed disabled:opacity-60"
          type="search"
          value={questionSearch}
          onChange={(event) => setQuestionSearch(event.target.value)}
          placeholder="Enunciado, alternativa, tópico, livro ou explicação"
          aria-label="Buscar questões por texto"
          disabled={simulationIds !== null}
        />
        {simulationIds !== null && <span className="mt-2 block text-xs text-muted">Saia do simulado para buscar na lista de questões.</span>}
      </label>

      <div className="space-y-4">
        <FilterSelect label="Tópico" value={topic} options={topics} onChange={setTopic} />
        {selectedStudyMode === 'bibliography-questions' && (
          <FilterSelect label="Apostila ou livro" value={bibliographySource} options={bibliographySources} onChange={setBibliographySource} />
        )}
        {selectedStudyMode !== 'bibliography-questions' && (
          <FilterSelect label="Ano da prova" value={year} options={years} onChange={setYear} />
        )}
        <div className="mt-5 space-y-2">
          <button
            className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white transition hover:bg-ink disabled:opacity-50"
            type="button"
            disabled={filteredQuestionsLength === 0}
            onClick={startSimulation}
          >
            {simulationIds ? 'Gerar novo simulado' : `Gerar simulado (${Math.min(simulationSize, filteredQuestionsLength)} questões)`}
          </button>
          <button
            className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-bold transition hover:border-sea hover:text-sea disabled:opacity-50"
            type="button"
            disabled={filteredQuestionsLength === 0}
            onClick={startQuickSimulation}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-1.5 inline-block text-sea">
              <path d="M13 2L3 14h9l-1 7 7-7h-9l1-7z" />
            </svg>
            Simulado rápido ({Math.min(quickSimulationSize, filteredQuestionsLength)} questões)
          </button>
          {simulationIds && (
            <button
              className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-bold transition hover:border-sea hover:text-sea"
              type="button"
              onClick={exitSimulation}
            >
              Sair do simulado
            </button>
          )}
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-sea-light p-4" id="desempenho">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-sea">Seu desempenho</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="font-display text-2xl font-extrabold">{performanceCorrectCount}<span className="text-base font-semibold text-muted">/{performanceAnsweredCount}</span></p>
          <p className="pb-1 text-xs font-semibold text-muted">{simulationIds !== null ? 'neste simulado' : 'acertos'}</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-sea transition-all" style={{ width: performanceAnsweredCount ? (performanceCorrectCount / performanceAnsweredCount) * 100 : 0 }} />
        </div>
      </div>
    </aside>
  )
}
