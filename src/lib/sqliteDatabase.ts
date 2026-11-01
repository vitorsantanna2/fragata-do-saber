import { Capacitor } from '@capacitor/core'
import { CapacitorSQLite, SQLiteConnection, type SQLiteDBConnection } from '@capacitor-community/sqlite'
import type { StudyProgress, OffensiveState } from './localDatabaseTypes'
import { mergeCompletedSimulations } from './simulationHistory'
import { getSaoPauloDateKey, normalizeOffensiveStateForToday, recordOffensiveForDate } from './offensiveDates'

const DATABASE_NAME = 'fragata_saber'
const DATABASE_VERSION = 1

const STUDY_PROGRESS_KEY = 'study_progress_v1'
const OFFENSIVE_STATE_KEY = 'offensive_state_v1'

function blankOffensiveState(): OffensiveState {
  return { totalOffensives: 0, currentStreak: 0, bestStreak: 0, lastOffensiveDate: null, offensiveLoggedToday: false, joinedAt: null }
}

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
    const validSimulations = mergeCompletedSimulations(progress.completedSimulations ?? [])
    const savedSimulation = progress.savedSimulation
      ? { ...progress.savedSimulation, id: progress.savedSimulation.id ?? `${progress.savedSimulation.examId}-${progress.savedSimulation.updatedAt}` }
      : null
    // Limpa registros que não são simulados de verdade do armazenamento local
    if ((progress.completedSimulations ?? []).length !== validSimulations.length) {
      void saveStudyProgress({
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
        savedSimulation,
        completedSimulations: validSimulations,
      })
    }
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
      savedSimulation,
      completedSimulations: validSimulations,
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

export async function loadOffensiveState(): Promise<OffensiveState> {
  try {
    const stored = isNativeApp()
      ? await getLocalMetadata(OFFENSIVE_STATE_KEY)
      : window.localStorage.getItem(OFFENSIVE_STATE_KEY)
    if (!stored) {
      const initial: OffensiveState = {
        ...blankOffensiveState(),
      }
      void saveOffensiveState(initial)
      return initial
    }
    const state = JSON.parse(stored) as Partial<OffensiveState>
    const loaded: OffensiveState = {
      totalOffensives: state.totalOffensives ?? 0,
      currentStreak: state.currentStreak ?? 0,
      bestStreak: state.bestStreak ?? 0,
      lastOffensiveDate: state.lastOffensiveDate ?? null,
      offensiveLoggedToday: state.offensiveLoggedToday ?? false,
      joinedAt: state.joinedAt ?? null,
    }
    const normalized = normalizeOffensiveStateForToday(loaded, getSaoPauloDateKey())
    if (JSON.stringify(normalized) !== JSON.stringify(loaded)) {
      void saveOffensiveState(normalized)
    }
    return normalized
  } catch {
    return blankOffensiveState()
  }
}

export async function saveOffensiveState(state: OffensiveState) {
  const serialized = JSON.stringify(state)
  try {
    if (isNativeApp()) await setLocalMetadata(OFFENSIVE_STATE_KEY, serialized)
    else window.localStorage.setItem(OFFENSIVE_STATE_KEY, serialized)
  } catch (error) {
    console.warn('Não foi possível salvar o estado da ofensiva localmente.', error)
  }
}

async function registerOffensiveDay(accountCreatedAt?: string | null): Promise<OffensiveState> {
  const state = await loadOffensiveState()
  const joinedAt = accountCreatedAt ?? state.joinedAt
  const base = joinedAt === state.joinedAt ? state : { ...state, joinedAt }
  const next = recordOffensiveForDate(base, getSaoPauloDateKey())
  await saveOffensiveState(next)
  return next
}

export function registerOffensiveAccess(accountCreatedAt?: string | null): Promise<OffensiveState> {
  return registerOffensiveDay(accountCreatedAt)
}

export function registerOffensiveSimulation(accountCreatedAt?: string | null): Promise<OffensiveState> {
  return registerOffensiveDay(accountCreatedAt)
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

