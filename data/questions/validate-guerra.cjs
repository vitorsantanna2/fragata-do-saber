// Validação local com SQL adaptado ao SQLite na memória; não acessa o Supabase.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync(':memory:');
const seedDir = path.resolve(__dirname,'../../supabase/seeds');
db.exec(`CREATE TABLE questions (
  id TEXT PRIMARY KEY, year INTEGER, question_type TEXT NOT NULL CHECK(question_type='bibliography'),
  subject TEXT NOT NULL, exam TEXT NOT NULL, question_number INTEGER NOT NULL,
  topic TEXT NOT NULL, difficulty TEXT NOT NULL CHECK(difficulty IN ('Fácil','Médio','Difícil')),
  statement TEXT NOT NULL, options TEXT NOT NULL CHECK(json_valid(options) AND json_array_length(options)=5),
  correct_option INTEGER NOT NULL CHECK(correct_option BETWEEN 0 AND 4),
  explanation TEXT NOT NULL, source TEXT NOT NULL,
  is_annulled INTEGER NOT NULL CHECK(is_annulled=0), is_published INTEGER NOT NULL CHECK(is_published=0)
);`);
const adapt=s=>s.replace(/^SET LOCAL standard_conforming_strings = on;\r?\n/gm,'')
  .replaceAll('public.questions','questions').replaceAll('::jsonb','');
const run=name=>db.exec(adapt(fs.readFileSync(path.join(seedDir,name),'utf8')));
const count=()=>db.prepare('SELECT count(*) AS n FROM questions').get().n;
const chapters=JSON.parse(fs.readFileSync(path.join(__dirname,'guerra_metadata.json'),'utf8'));
assert.equal(chapters.length,10);
const all=chapters.flatMap(ch=>{
  const questions=JSON.parse(fs.readFileSync(path.join(__dirname,
    `guerra_capitulo_${String(ch.chapter).padStart(2,'0')}.json`),'utf8'));
  assert.equal(questions.length,20);
  assert.deepEqual(questions.map(q=>q.question_number),Array.from({length:20},(_,i)=>i+1));
  const counts=Array(5).fill(0);
  for(const q of questions) {
    assert.equal(q.chapter,ch.chapter);
    assert.equal(q.topic,'Engenharia de Software');
    assert.equal(q.subject,'Informática');assert.equal(q.exam,'CP-T');assert.equal(q.year,null);
    assert.equal(q.options[q.correct_option],q.concept);counts[q.correct_option]++;
    const endpoints=q.pages.split('–').map(Number);
    assert.ok(endpoints.every(p=>Number.isInteger(p)&&p>=ch.start&&p<=ch.end),q.source);
    if(q.section.includes('.')) assert.ok(ch.sections.some(s=>s.section===q.section),q.section);
    assert.ok(q.source.includes('Casa do Código, 2014 (ano indicado no arquivo fornecido).'));
  }
  assert.deepEqual(counts,[4,4,4,4,4]);
  assert.equal(questions.filter(q=>q.editorial_mode==='conceito').length,10);
  assert.equal(questions.filter(q=>q.editorial_mode==='aplicação').length,10);
  return questions;
});
assert.equal(all.length,200);
assert.equal(new Set(all.map(q=>q.statement.normalize('NFC').trim().toLocaleLowerCase('pt-BR'))).size,200);
run('guerra_completo.sql');assert.equal(count(),200);
for(const q of all) {
  const row=db.prepare('SELECT * FROM questions WHERE id=?').get(q.id);
  for(const [key,value] of Object.entries(row)) {
    if(key==='options') assert.deepEqual(JSON.parse(value),q.options);
    else if(key==='is_annulled'||key==='is_published') assert.equal(value,Number(q[key]));
    else assert.equal(value,q[key],`${q.id}: ${key}`);
  }
  assert.equal(new Set(q.options.map(s=>s.normalize('NFC').trim().toLocaleLowerCase('pt-BR'))).size,5);
  assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
}
for(const ch of chapters) run(`guerra_capitulo_${String(ch.chapter).padStart(2,'0')}.sql`);
assert.equal(count(),200);
db.prepare('UPDATE questions SET explanation=? WHERE id=?').run('Revisão preservada',all[0].id);
run('guerra_completo.sql');assert.equal(count(),200);
assert.equal(db.prepare('SELECT explanation FROM questions WHERE id=?').get(all[0].id).explanation,'Revisão preservada');
for(const name of ['date_capitulo_01_piloto.sql','date_capitulos_02_27_completo.sql',
  'deitel_completo.sql','governanca_completo.sql','uml_completo.sql','guedes_completo.sql','grus_completo.sql']) run(name);
assert.equal(count(),3120);db.close();
console.log(JSON.stringify({questionsChecked:200,sqlMatchesJson:true,reimportPreservesEdits:true,
  combinedBooksUniqueIds:3120,engine:'SQLite em memória com adaptação sintática',supabaseAccessed:false}));
