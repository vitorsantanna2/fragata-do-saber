import { useCallback, useState } from 'react'
import { examChoices } from '../lib/exams'

const STORAGE_KEY = 'fragata-study-focus-v1'

function restoreFocus() {
  try {
    const id = window.localStorage.getItem(STORAGE_KEY)
    return examChoices.some((exam) => exam.id === id) ? id : null
  } catch {
    return null
  }
}

export function useStudyFocus() {
  const [selectedExamId, setSelected] = useState<string | null>(restoreFocus)
  const setSelectedExamId = useCallback((id: string | null) => {
    const selected = examChoices.some((exam) => exam.id === id) ? id : null
    setSelected(selected)
    try {
      if (selected) window.localStorage.setItem(STORAGE_KEY, selected)
      else window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // A navegação continua disponível se o aparelho impedir a persistência.
    }
  }, [])
  return { selectedExamId, setSelectedExamId }
}
