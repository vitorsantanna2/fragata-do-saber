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
  year: number
  question_number: number
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
}

const sqliteConnection = new SQLiteConnection(CapacitorSQLite)
let databasePromise: Promise<SQLiteDBConnection | null> | null = null

export function isNativeApp() {
  return Capacitor.isNativePlatform()
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
      explanation TEXT
    )
  `)
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

  return database
}

export async function readCachedQuestions(exam: string, subject: string | null) {
  const database = await getLocalDatabase()
  if (!database) return []

  const result = subject
    ? await database.query(
        'SELECT * FROM questions WHERE exam = ? AND subject = ? ORDER BY year DESC, question_number ASC',
        [exam, subject],
      )
    : await database.query(
        'SELECT * FROM questions WHERE exam = ? ORDER BY year DESC, question_number ASC',
        [exam],
      )

  return (result.values ?? []).map((row) => ({
    ...row,
    year: Number(row.year),
    question_number: Number(row.question_number),
    correct_option: Number(row.correct_option),
    options: typeof row.options === 'string' ? JSON.parse(row.options) as string[] : row.options as string[],
  })) as CachedQuestionRow[]
}

export async function cacheQuestions(rows: CachedQuestionRow[], exam: string, subject: string | null) {
  const database = await getLocalDatabase()
  if (!database) return

  const deleteStatement = subject
    ? { statement: 'DELETE FROM questions WHERE exam = ? AND subject = ?', values: [exam, subject] }
    : { statement: 'DELETE FROM questions WHERE exam = ?', values: [exam] }

  const questionStatements = rows.map((row) => ({
    statement: `
      INSERT INTO questions (
        id, year, question_number, subject, topic, difficulty, exam, statement,
        statement_after_image, image_url, image_alt, options, correct_option, explanation
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        year = excluded.year,
        question_number = excluded.question_number,
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
        explanation = excluded.explanation
    `,
    values: [
      row.id,
      row.year,
      row.question_number,
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
