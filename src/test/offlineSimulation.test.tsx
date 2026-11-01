import { useState } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Simulation } from '../components/Simulation'
import type { Question } from '../hooks/useQuestions'

const mocks = vi.hoisted(() => ({ rpc: vi.fn() }))
vi.mock('../lib/localDatabase', () => ({ isNativeApp: () => true }))
vi.mock('../lib/supabase', () => ({ supabase: { rpc: mocks.rpc } }))
import { resolveQuestionAnswer } from '../lib/questionAnswers'

const first: Question = {
  id: 'q1', year: '2024', questionNumber: 1, questionType: 'exam', subject: 'Informática', topic: null,
  difficulty: null, exam: 'CP-T', prompt: 'Primeira questão', promptAfterImage: null, imageUrl: null,
  imageAlt: null, options: ['Primeira correta', 'Primeira errada'], answer: 0, explanation: 'Explicação baixada', source: null,
}
const questions = [first, { ...first, id: 'q2', questionNumber: 2, prompt: 'Segunda questão', options: ['Segunda errada', 'Segunda correta'], answer: 1 }]

function OfflineSimulation() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <Simulation
      questions={questions}
      simulationIds={['q1', 'q2']}
      simulationAnswers={answers}
      simulationRevealed={revealed}
      pendingAnswerIds={[]}
      answerErrors={{}}
      recordSimulationAnswer={async (id, option) => {
        const result = await resolveQuestionAnswer(questions.find((question) => question.id === id)!, option, false, 'sim-offline')
        setAnswers((current) => ({ ...current, [id]: result.selectedOption }))
      }}
      recordSimulationReveal={(id) => setRevealed((current) => [...current, id])}
    />
  )
}

afterEach(() => { cleanup(); vi.clearAllMocks() })

describe('offline simulation', () => {
  it('finishes, calculates the score and shows downloaded explanations without network requests', async () => {
    const user = userEvent.setup()
    render(<OfflineSimulation />)
    await user.click(screen.getByRole('button', { name: /Primeira correta/ }))
    await user.click(screen.getByRole('button', { name: /Segunda errada/ }))
    const summary = screen.getByText('Simulado concluído').closest('section')!
    expect(within(summary).getByText('1 de 2 questões corretas')).not.toBeNull()
    expect(summary.textContent).toContain('50')
    await user.click(screen.getAllByRole('button', { name: 'Ver gabarito' })[0])
    expect(screen.getByText('Explicação baixada')).not.toBeNull()
    expect(mocks.rpc).not.toHaveBeenCalled()
  })
})
