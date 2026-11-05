// Validação local do conteúdo e importação SQL adaptada ao SQLite em memória.
// Não valida execução PostgreSQL nem acessa o Supabase.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync(':memory:');
const seedDir = path.resolve(__dirname, '../../supabase/seeds');
db.exec(`CREATE TABLE questions (
  id TEXT PRIMARY KEY, year INTEGER, question_type TEXT NOT NULL CHECK(question_type='bibliography'),
  subject TEXT NOT NULL, exam TEXT NOT NULL, question_number INTEGER NOT NULL,
  topic TEXT NOT NULL, difficulty TEXT NOT NULL, statement TEXT NOT NULL,
  options TEXT NOT NULL CHECK(json_valid(options) AND json_array_length(options)=5),
  correct_option INTEGER NOT NULL CHECK(correct_option BETWEEN 0 AND 4),
  explanation TEXT NOT NULL, source TEXT NOT NULL,
  is_annulled INTEGER NOT NULL CHECK(is_annulled=0),
  is_published INTEGER NOT NULL CHECK(is_published=0)
);`);
const adapt = s => s.replace(/^SET LOCAL standard_conforming_strings = on;\r?\n/gm, '')
  .replaceAll('public.questions', 'questions').replaceAll('::jsonb', '');
const run = name => db.exec(adapt(fs.readFileSync(path.join(seedDir, name), 'utf8')));
const count = () => db.prepare('SELECT count(*) AS n FROM questions').get().n;
const all = Array.from({ length: 18 }, (_, i) => JSON.parse(fs.readFileSync(
  path.join(__dirname, `governanca_capitulo_${String(i + 1).padStart(2, '0')}.json`), 'utf8'))).flat();
assert.equal(all.length, 360);
run('governanca_completo.sql');
assert.equal(count(), 360);
for (const q of all) {
  const row = db.prepare('SELECT * FROM questions WHERE id=?').get(q.id);
  for (const [key, value] of Object.entries(row)) {
    if (key === 'options') assert.deepEqual(JSON.parse(value), q.options);
    else if (key === 'is_annulled' || key === 'is_published') assert.equal(value, Number(q[key]));
    else assert.equal(value, q[key], `${q.id}: ${key}`);
  }
  assert.equal(new Set(q.options.map(s => s.normalize('NFC').trim().toLocaleLowerCase('pt-BR'))).size, 5);
  assert.match(q.id, /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
}
for (let i = 1; i <= 18; i++) run(`governanca_capitulo_${String(i).padStart(2, '0')}.sql`);
assert.equal(count(), 360);
db.prepare('UPDATE questions SET explanation=? WHERE id=?').run('Revisão preservada', all[0].id);
run('governanca_completo.sql');
assert.equal(count(), 360);
assert.equal(db.prepare('SELECT explanation FROM questions WHERE id=?').get(all[0].id).explanation, 'Revisão preservada');
for (const name of ['date_capitulo_01_piloto.sql', 'date_capitulos_02_27_completo.sql', 'deitel_completo.sql']) run(name);
assert.equal(count(), 1400);
db.close();
console.log(JSON.stringify({ questionsChecked: 360, sqlMatchesJson: true, reimportPreservesEdits: true,
  combinedBooksUniqueIds: 1400, engine: 'SQLite em memória com adaptação sintática', supabaseAccessed: false }));
