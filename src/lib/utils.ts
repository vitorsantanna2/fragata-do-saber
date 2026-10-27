export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
}

export function conciseSource(source: string) {
  const normalized = source.replace(/\s+/g, ' ').trim()
  const edition = /\b\d+\s*(?:[ªaºo])?\s*\.?\s*(?:ed\.?|edição)(?![\p{L}])/iu.exec(normalized)
  if (!edition || edition.index === undefined) return normalized

  const end = edition.index + edition[0].length
  return `${normalized.slice(0, end).replace(/[\s.,;:]+$/, '')}.`
}
