import type { ReviewConfidence, ReviewSchedule } from '../lib/scheduledReviews'

export function ReviewConfidencePicker({ schedule, onRate }: { schedule: ReviewSchedule; onRate: (confidence: ReviewConfidence) => void }) {
  const date = schedule.dueDate.split('-').reverse().join('/')
  return (
    <div className="mt-4 rounded-lg border border-line bg-paper p-3">
      <p className="text-sm font-bold text-ink">Como foi responder?</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Confiança na resposta">
        {([['sure', 'Sabia'], ['unsure', 'Fiquei em dúvida'], ['guess', 'Chutei']] as const).map(([value, label]) => (
          <button key={value} type="button" aria-pressed={schedule.confidence === value} onClick={() => onRate(value)}
            className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${schedule.confidence === value ? 'border-sea bg-sea text-white' : 'border-line bg-white text-ink hover:border-sea'}`}>
            {label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs leading-5 text-muted" aria-live="polite">Próxima revisão: {date}. {schedule.lastCorrect ? 'Acertos com segurança aumentam o intervalo.' : 'Questões erradas voltam no dia seguinte.'}</p>
    </div>
  )
}
