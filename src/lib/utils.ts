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
  const withoutChapter = normalized.replace(/^cap[íi]tulo\s*\d+[^a-zA-Záàâãéèêíìîóòôõúùûç]*(?:[-:–—]\s*)?/iu, '')
  const cleaned = withoutChapter.replace(/^[\s:;-]+/, '').trim() || normalized

  const metaMatch = /\b(?:versão|cap\.?|capítulo)\b\s*[\d.,–—]/iu.exec(cleaned)
  let result = cleaned
  if (metaMatch && metaMatch.index !== undefined) {
    result = cleaned.slice(0, metaMatch.index).replace(/[\s.,;:]+$/, '').trim()
  }

  const edition = /\b\d+\s*(?:[ªaºo])?\s*\.?\s*(?:ed\.?|edição)(?![\p{L}])/iu.exec(result)
  if (!edition || edition.index === undefined) return result

  const end = edition.index + edition[0].length
  return `${result.slice(0, end).replace(/[\s.,;:]+$/, '')}.`
}

export function conciseTopic(topic: string) {
  const normalized = topic.replace(/\s+/g, ' ').trim()
  const chapter = /^cap[íi]tulo\s*\d+[^a-zA-Záàâãéèêíìîóòôõúùûç]*(?:[-:–—]\s*)?/iu.exec(normalized)
  if (!chapter || chapter.index === undefined) return normalized

  const after = normalized.slice(chapter[0].length).replace(/^[\s:;-]+/, '')
  return after || normalized
}
