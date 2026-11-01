import type { CompletedSimulation } from './localDatabaseTypes'

export function mergeCompletedSimulations(simulations: CompletedSimulation[]): CompletedSimulation[] {
  const byId = new Map<string, CompletedSimulation>()
  for (const simulation of simulations) {
    if (!simulation.isSimulation) continue
    const existing = byId.get(simulation.id)
    if (!existing || Date.parse(simulation.completedAt) > Date.parse(existing.completedAt)) {
      byId.set(simulation.id, simulation)
    }
  }
  return [...byId.values()].sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt))
}
