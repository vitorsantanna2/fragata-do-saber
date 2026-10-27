import { describe, expect, it } from 'vitest'
import { shuffle, normalizeSearchText, conciseSource } from '../lib/utils'

describe('shuffle', () => {
  it('returns a new array with the same elements', () => {
    const items = [1, 2, 3, 4, 5]
    const result = shuffle(items)
    expect(result).not.toBe(items)
    expect(result.sort()).toEqual(items.sort())
  })

  it('does not mutate the original array', () => {
    const items = [1, 2, 3, 4, 5]
    const original = [...items]
    shuffle(items)
    expect(items).toEqual(original)
  })

  it('returns an empty array for empty input', () => {
    expect(shuffle([])).toEqual([])
  })

  it('returns a single-element array unchanged', () => {
    expect(shuffle([42])).toEqual([42])
  })
})

describe('normalizeSearchText', () => {
  it('removes accents', () => {
    expect(normalizeSearchText('áéíóú âêîôû')).toBe('aeiou aeiou')
  })

  it('converts to lowercase', () => {
    expect(normalizeSearchText('ABC')).toBe('abc')
  })

  it('collapses whitespace', () => {
    expect(normalizeSearchText('  hello   world  ')).toBe('  hello   world  ')
  })

  it('handles empty string', () => {
    expect(normalizeSearchText('')).toBe('')
  })
})

describe('conciseSource', () => {
  it('truncates at edition marker', () => {
    expect(conciseSource('Livro de Informática. 2ª ed. Editora X.')).toBe('Livro de Informática. 2ª ed.')
  })

  it('returns unchanged when no edition marker', () => {
    expect(conciseSource('Livro de Informática sem edição')).toBe('Livro de Informática sem edição')
  })

  it('handles 1st edition', () => {
    expect(conciseSource('Livro. 1ed. 2020.')).toBe('Livro. 1ed.')
  })
})
