import { useEffect, useMemo, useState } from 'react'
import { getSaoPauloDateKey } from '../lib/offensiveDates'
import { getDueReviews, type ReviewSchedules } from '../lib/scheduledReviews'
import type { StudyQuestionSnapshot } from '../lib/localDatabaseTypes'

export function useReviewQueue(schedules: ReviewSchedules, snapshots: Record<string, StudyQuestionSnapshot>) {
  const [today, setToday] = useState(() => getSaoPauloDateKey())
  useEffect(() => {
    const refresh = () => setToday(getSaoPauloDateKey())
    const timer = window.setInterval(refresh, 60_000)
    window.addEventListener('focus', refresh)
    document.addEventListener('visibilitychange', refresh)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('focus', refresh)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [])
  const dueReviews = useMemo(() => getDueReviews(schedules, snapshots, today), [schedules, snapshots, today])
  return { today, dueReviews }
}
