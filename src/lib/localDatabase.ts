import { getLocalDatabase, setLocalMetadata } from './sqliteDatabase'
export {
  getLocalDatabase,
  isNativeApp,
  loadStudyProgress,
  saveStudyProgress,
  loadOffensiveState,
  saveOffensiveState,
  registerOffensiveAccess,
  registerOffensiveSimulation,
  getLocalMetadata,
  setLocalMetadata,
} from './sqliteDatabase'
import type { CachedQuestionRow, CachedMindMap } from './localDatabaseTypes'
export type { CachedQuestionRow, CachedMindMap, StudyProgress, SavedSimulation, CompletedSimulation, OffensiveState, StudyQuestionSnapshot } from './localDatabaseTypes'
export async function readCachedMindMaps() {
  const database = await getLocalDatabase()
  if (!database) return []
  const result = await database.query('SELECT * FROM mind_maps ORDER BY subject, sort_order, title')
  return (result.values ?? []).map((row) => ({
    ...row,
    sort_order: Number(row.sort_order),
  })) as CachedMindMap[]
}

export async function cacheMindMaps(rows: Omit<CachedMindMap, 'local_path'>[]) {
  const database = await getLocalDatabase()
  if (!database) return
  const statements = rows.map((row) => ({
    statement: `INSERT INTO mind_maps (id, title, subject, description, storage_path, content_type, sort_order, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET title = excluded.title, subject = excluded.subject,
      description = excluded.description, storage_path = excluded.storage_path,
      content_type = excluded.content_type, sort_order = excluded.sort_order,
      local_path = CASE WHEN mind_maps.storage_path != excluded.storage_path OR mind_maps.updated_at != excluded.updated_at THEN NULL ELSE mind_maps.local_path END,
      updated_at = excluded.updated_at`,
    values: [row.id, row.title, row.subject, row.description, row.storage_path, row.content_type, row.sort_order, row.updated_at],
  }))
  if (statements.length) await database.executeSet(statements, true)
}

export async function setMindMapLocalPath(id: string, path: string | null) {
  const database = await getLocalDatabase()
  if (!database) return
  await database.run('UPDATE mind_maps SET local_path = ? WHERE id = ?', [path, id])
}

export async function hasCachedMindMaps() {
  const database = await getLocalDatabase()
  if (!database) return false
  const result = await database.query('SELECT id FROM mind_maps WHERE local_path IS NOT NULL LIMIT 1')
  return (result.values?.length ?? 0) > 0
}

export async function readCachedQuestions(exam: string, subject: string | null, questionType: 'exam' | 'bibliography' = 'exam') {
  const database = await getLocalDatabase()
  if (!database) return []

  const result = subject
    ? await database.query(
        'SELECT * FROM questions WHERE exam = ? AND subject = ? AND question_type = ? ORDER BY year DESC, question_number ASC',
        [exam, subject, questionType],
      )
    : await database.query(
        'SELECT * FROM questions WHERE exam = ? AND question_type = ? ORDER BY year DESC, question_number ASC',
        [exam, questionType],
      )

  return (result.values ?? []).map((row) => ({
    ...row,
    year: Number(row.year),
    question_number: Number(row.question_number),
    correct_option: -1,
    explanation: null,
    options: typeof row.options === 'string' ? JSON.parse(row.options) as string[] : row.options as string[],
  })) as CachedQuestionRow[]
}

export async function cacheQuestions(rows: CachedQuestionRow[], exam: string, subject: string | null, questionType: 'exam' | 'bibliography' = 'exam') {
  const database = await getLocalDatabase()
  if (!database) return

  const deleteStatement = subject
    ? { statement: 'DELETE FROM questions WHERE exam = ? AND subject = ? AND question_type = ?', values: [exam, subject, questionType] }
    : { statement: 'DELETE FROM questions WHERE exam = ? AND question_type = ?', values: [exam, questionType] }

  const questionStatements = rows.map((row) => ({
    statement: `
      INSERT INTO questions (
        id, year, question_number, question_type, subject, topic, difficulty, exam, statement,
        statement_after_image, image_url, image_alt, options, correct_option, explanation, source
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        year = excluded.year,
        question_number = excluded.question_number,
        question_type = excluded.question_type,
        subject = excluded.subject,
        topic = excluded.topic,
        difficulty = excluded.difficulty,
        exam = excluded.exam,
        statement = excluded.statement,
        statement_after_image = excluded.statement_after_image,
        image_url = excluded.image_url,
        image_alt = excluded.image_alt,
        options = excluded.options,
          correct_option = excluded.correct_option ?? -1,
          explanation = excluded.explanation ?? null,
        source = excluded.source
    `,
    values: [
      row.id,
      row.year ?? 0,
      row.question_number ?? 0,
      questionType,
      row.subject,
      row.topic,
      row.difficulty,
      row.exam,
      row.statement,
      row.statement_after_image,
      row.image_url,
      row.image_alt,
      JSON.stringify(row.options),
      -1,
      null,
      row.source,
    ],
  }))

  await database.executeSet([deleteStatement, ...questionStatements], true)
  await setLocalMetadata('questions_last_synced_at', new Date().toISOString())
}

export async function hasCachedQuestions() {
  const database = await getLocalDatabase()
  if (!database) return false

  const result = await database.query('SELECT id FROM questions LIMIT 1')
  return (result.values?.length ?? 0) > 0
}
