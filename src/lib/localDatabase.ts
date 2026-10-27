import { Capacitor } from '@capacitor/core'
import {
  CapacitorSQLite,
  SQLiteConnection,
  type SQLiteDBConnection,
} from '@capacitor-community/sqlite'

const DATABASE_NAME = 'fragata_saber'
const DATABASE_VERSION = 1

export type CachedQuestionRow = {
  id: string
  year: number | null
  question_number: number | null
  question_type: 'exam' | 'bibliography'
  subject: string
  topic: string | null
  difficulty: string | null
  exam: string
  statement: string
  statement_after_image: string | null
  image_url: string | null
  image_alt: string | null
  options: string[]
  correct_option: number
  explanation: string | null
  source: string | null
}

export type CachedMindMap = {
  id: string
  title: string
  subject: string
  description: string | null
  storage_path: string
  content_type: string
  sort_order: number
  updated_at: string
  local_path: string | null
}

export type StudyProgress = {
  answers: Record<string, number>
  revealed: string[]
  favorites: string[]
  selectedExamId: string | null
  selectedStudyMode: 'exam-questions' | 'bibliography-questions' | 'mind-maps' | null
  topic: string
  year: string
  bibliographySource: string
  questionSearch: string
  questionSnapshots: Record<string, StudyQuestionSnapshot>
  progressUpdatedAt: Record<string, string>
  savedSimulation: SavedSimulation | null
}

export type SavedSimulation = {
  ids: string[]
  answers: Record<string, number>
  revealed: string[]
  examId: string
  studyMode: 'exam-questions' | 'bibliography-questions'
  lastQuestionId: string | null
  updatedAt: string
}

export type StudyQuestionSnapshot = {
  exam: string
  subject: string
  topic: string | null
  year: string
  questionType: 'exam' | 'bibliography'
  prompt: string
  correctOption: number
}

const STUDY_PROGRESS_KEY = 'study_progress_v1'

const sqliteConnection = new SQLiteConnection(CapacitorSQLite)
let databasePromise: Promise<SQLiteDBConnection | null> | null = null

export function isNativeApp() {
  return Capacitor.isNativePlatform()
}

export async function loadStudyProgress(): Promise<StudyProgress | null> {
  try {
    const stored = isNativeApp()
      ? await getLocalMetadata(STUDY_PROGRESS_KEY)
      : window.localStorage.getItem(STUDY_PROGRESS_KEY)
    if (!stored) return null
    const progress = JSON.parse(stored) as Partial<StudyProgress>
    return {
      answers: progress.answers ?? {},
      revealed: progress.revealed ?? [],
      favorites: progress.favorites ?? [],
      selectedExamId: progress.selectedExamId ?? null,
      selectedStudyMode: progress.selectedStudyMode ?? null,
      topic: progress.topic ?? 'Todos',
      year: progress.year ?? 'Todos',
      bibliographySource: progress.bibliographySource ?? 'Todos',
      questionSearch: progress.questionSearch ?? '',
      questionSnapshots: progress.questionSnapshots ?? {},
      progressUpdatedAt: progress.progressUpdatedAt ?? {},
      savedSimulation: progress.savedSimulation ?? null,
    }
  } catch {
    return null
  }
}

export async function saveStudyProgress(progress: StudyProgress) {
  const serialized = JSON.stringify(progress)
  try {
    if (isNativeApp()) await setLocalMetadata(STUDY_PROGRESS_KEY, serialized)
    else window.localStorage.setItem(STUDY_PROGRESS_KEY, serialized)
  } catch (error) {
    console.warn('Não foi possível salvar o progresso de estudo localmente.', error)
  }
}

export function getLocalDatabase() {
  if (!isNativeApp()) return Promise.resolve(null)

  if (!databasePromise) {
    databasePromise = openDatabase().catch((error) => {
      databasePromise = null
      throw error
    })
  }

  return databasePromise
}

async function openDatabase() {
  await sqliteConnection.checkConnectionsConsistency()

  const connectionExists = await sqliteConnection.isConnection(DATABASE_NAME, false)
  const database = connectionExists.result
    ? await sqliteConnection.retrieveConnection(DATABASE_NAME, false)
    : await sqliteConnection.createConnection(DATABASE_NAME, false, 'no-encryption', DATABASE_VERSION, false)

  if (!(await database.isDBOpen()).result) {
    await database.open()
  }

  await database.execute(`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY NOT NULL,
      year INTEGER NOT NULL,
      question_number INTEGER NOT NULL,
      question_type TEXT NOT NULL DEFAULT 'exam',
      subject TEXT NOT NULL,
      topic TEXT,
      difficulty TEXT,
      exam TEXT NOT NULL,
      statement TEXT NOT NULL,
      statement_after_image TEXT,
      image_url TEXT,
      image_alt TEXT,
      options TEXT NOT NULL,
      correct_option INTEGER NOT NULL,
      explanation TEXT,
      source TEXT
    )
  `)
  const questionColumns = await database.query('PRAGMA table_info(questions)')
  const existingQuestionColumns = new Set((questionColumns.values ?? []).map((column) => String(column.name)))
  if (!existingQuestionColumns.has('question_type')) {
    await database.execute("ALTER TABLE questions ADD COLUMN question_type TEXT NOT NULL DEFAULT 'exam'")
  }
  if (!existingQuestionColumns.has('source')) {
    await database.execute('ALTER TABLE questions ADD COLUMN source TEXT')
  }
  await database.execute(`
    CREATE INDEX IF NOT EXISTS questions_exam_subject_year_idx
      ON questions (exam, subject, year DESC)
  `)
  await database.execute(`
    CREATE TABLE IF NOT EXISTS question_progress (
      user_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      selected_option INTEGER,
      is_favorite INTEGER NOT NULL DEFAULT 0,
      answered_at TEXT,
      updated_at TEXT NOT NULL,
      needs_sync INTEGER NOT NULL DEFAULT 1,
      PRIMARY KEY (user_id, question_id)
    )
  `)
  await database.execute(`
    CREATE TABLE IF NOT EXISTS local_metadata (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT NOT NULL
    )
  `)
  await database.execute(`
    CREATE TABLE IF NOT EXISTS mind_maps (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      subject TEXT NOT NULL,
      description TEXT,
      storage_path TEXT NOT NULL,
      content_type TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL,
      local_path TEXT
    )
  `)
  await database.execute(`CREATE INDEX IF NOT EXISTS mind_maps_subject_order_idx ON mind_maps (subject, sort_order, title)`)

  return database
}

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
    correct_option: Number(row.correct_option),
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
        correct_option = excluded.correct_option,
        explanation = excluded.explanation,
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
      row.correct_option,
      row.explanation,
      row.source,
    ],
  }))

  await database.executeSet([deleteStatement, ...questionStatements], true)
  await setLocalMetadata('questions_last_synced_at', new Date().toISOString())
}

export async function setLocalMetadata(key: string, value: string) {
  const database = await getLocalDatabase()
  if (!database) return

  await database.run(
    'INSERT INTO local_metadata (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    [key, value],
  )
}

export async function getLocalMetadata(key: string) {
  const database = await getLocalDatabase()
  if (!database) return null

  const result = await database.query('SELECT value FROM local_metadata WHERE key = ?', [key])
  const row = result.values?.[0] as { value?: string } | undefined
  return row?.value ?? null
}

export async function hasCachedQuestions() {
  const database = await getLocalDatabase()
  if (!database) return false

  const result = await database.query('SELECT id FROM questions LIMIT 1')
  return (result.values?.length ?? 0) > 0
}
