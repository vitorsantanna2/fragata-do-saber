// node data/questions/generate-grus.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'grus_metadata.json'), 'utf8'));
assert.equal(chapters.length, 25);
const norm = s => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const hash = s => crypto.createHash('sha256').update(s).digest('hex');
for (const ch of chapters) ch.concepts = [];
for (const [i, line] of fs.readFileSync(path.join(__dirname, 'grus_conceitos.txt'), 'utf8').split(/\r?\n/).entries()) {
  if (!line.trim() || line.startsWith('#')) continue;
  const fields = line.split('|').map(s => s.trim());
  assert.equal(fields.length, 4, `Linha ${i + 1}`);
  assert.ok(fields.every(s => s && !s.includes('\uFFFD')));
  const [reference, answer, definition, application] = fields;
  const match = /^(\d+):(\d+)(?:-(\d+))?$/.exec(reference);
  assert.ok(match, reference);
  const chapter = Number(match[1]), start = Number(match[2]), end = Number(match[3] ?? match[2]);
  const ch = chapters[chapter - 1];
  assert.ok(ch && ch.chapter === chapter && start >= ch.start && end <= ch.end && start <= end, reference);
  ch.concepts.push({ answer, definition, application, start, end });
}
function uuid(name) {
  const b = crypto.createHash('sha1').update(Buffer.from('6ba7b8109dad11d180b400c04fd430c8','hex')).update(name).digest().subarray(0,16);
  b[6]=(b[6]&15)|80; b[8]=(b[8]&63)|128;
  const h=b.toString('hex');
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
// Exclui conceitos próximos que poderiam responder ao mesmo enunciado.
const overlaps = {
  1:[[0,8],[2,3],[4,5,6]], 2:[[3,4],[5,6,7]], 3:[[0,1],[3,4],[5,9]],
  4:[[0,7],[3,4],[5,6]], 5:[[0,1,2,3],[4,5,6],[7,8,9]],
  6:[[5,6],[7,8,9]], 7:[[0,1],[2,3,4],[5,6],[8,9]],
  8:[[1,2,3],[4,5],[7,8,9]], 9:[[0,1],[2,3,4],[5,7]],
  10:[[0,1,2],[3,4],[6,8],[7,9]], 11:[[0,1,2],[3,4,9],[6,7,8]],
  12:[[0,2,3],[2,6],[3,4],[5,6],[8,9]], 13:[[1,2,3],[0,6],[7,8,9]],
  14:[[2,3],[4,5,8],[6,7],[5,9]], 15:[[0,1],[2,3],[6,7],[8,9]],
  16:[[0,1],[2,3],[4,5],[6,7,8]], 17:[[0,1,2],[3,4],[5,6,7],[8,9]],
  18:[[0,1,2],[3,4],[5,6,7],[8,9]], 19:[[0,4],[1,2,3],[5,6,7],[8,9]],
  20:[[1,2,3],[4,5,6],[7,9]], 21:[[0,2],[1,3],[4,5,6],[7,8,9]],
  22:[[0,1],[2,8],[3,5,6],[4,9]], 23:[[4,5],[5,7],[6,7],[8,9]],
  24:[[0,1,2,3],[1,4],[3,6,9],[2,7,8]], 25:[[1,9],[2,3,4,5],[6,7]],
};
const quote = s => "'" + s.replaceAll("'", "''") + "'";
const md = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const bibliography = 'GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook).';
const header = `-- Questões originais de estudo: Grus. Data Science do Zero. Alta Books, 2016.
-- Edição brasileira identificada na ficha catalográfica; original em inglês de 2015.
-- Contexto dos exemplos do livro: Python 2.7; não pressupõe ferramentas atuais.
-- Não são questões oficiais nem exercícios transcritos do livro.
-- Todos os itens são rascunhos: revise antes de publicar.
-- Páginas referem-se às posições físicas no PDF fornecido, não à paginação impressa.
-- Execute após configurar public.questions, usando uma conta administrativa.
-- IDs fixos: reexecutar não duplica nem sobrescreve registros existentes.
`;
const sql = (rows, description) => `${header}-- ${description}
BEGIN;
SET LOCAL standard_conforming_strings = on;

INSERT INTO public.questions (
  id, year, question_type, subject, exam, question_number, topic, difficulty,
  statement, options, correct_option, explanation, source, is_annulled, is_published
) VALUES
${rows.join(',\n')}
ON CONFLICT (id) DO NOTHING;

COMMIT;
`;
const files = new Map(), ids = new Set(), statements = new Set(), allRows = [], index = [];
const seedDir = path.resolve(__dirname, '../../supabase/seeds');
for (const ch of chapters) {
  assert.equal(ch.concepts.length, 10, `Capítulo ${ch.chapter}`);
  assert.equal(new Set(ch.concepts.map(c => norm(c.answer))).size, 10);
  const name = `grus_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions = Array.from({length:20}, (_,i) => ({ value:i%5, h:hash(`grus:${ch.chapter}:answer:${i}`) }))
    .sort((a,b) => a.h.localeCompare(b.h)).map(x => x.value);
  const counts = Array(5).fill(0), rows = [];
  const entries = ch.concepts.flatMap((c,i) => [
    {...c, conceptIndex:i, mode:'conceito', statement:`No estudo de “${ch.title}” em Grus, qual conceito corresponde à descrição: “${c.definition}”?`},
    {...c, conceptIndex:i, mode:'aplicação', statement:c.application},
  ]);
  const questions = entries.map((e,i) => {
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id = uuid(`fragata:grus:data-science-do-zero:2016:chapter:${ch.chapter}:question:${i+1}`);
    assert.ok(!ids.has(id)); ids.add(id);
    const excluded = new Set([e.conceptIndex]);
    for (const group of overlaps[ch.chapter] ?? []) if (group.includes(e.conceptIndex)) for (const n of group) excluded.add(n);
    const pool = ch.concepts.map((c,j) => ({s:c.answer,j,h:hash(`${id}:distractor:${j}`)}))
      .filter(c => !excluded.has(c.j)).sort((a,b) => a.h.localeCompare(b.h));
    assert.ok(pool.length >= 4, `Distratores: ${ch.chapter}/${e.answer}`);
    const options = pool.slice(0,4).map(c => c.s), correct = positions[i];
    options.splice(correct,0,e.answer); counts[correct]++;
    assert.equal(new Set(options.map(norm)).size,5);
    const pages = e.start === e.end ? String(e.start) : `${e.start}–${e.end}`;
    const source = `${bibliography} Capítulo ${ch.chapter}: ${ch.title}, páginas ${pages} do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.`;
    const explanation = `${e.answer}: ${e.definition.charAt(0).toLocaleLowerCase('pt-BR')}${e.definition.slice(1)}`;
    const q = {id,chapter:ch.chapter,section:String(ch.chapter),pages,editorial_mode:e.mode,concept:e.answer,
      year:null,question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,
      topic:'Data Science',difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,
      options,correct_option:correct,explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,quote(q.topic),quote(q.difficulty),
      quote(q.statement),quote(JSON.stringify(options))+'::jsonb',correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# Grus — capítulo ${ch.chapter}: ${ch.title}\n\n20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.\n\n[SQL](../../supabase/seeds/${name}.sql) · [Índice](grus_README.md)\n\n`+questions.map(q => `## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}\n\n${md(q.statement)}\n\n${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}\n\n**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}\n\n**Fonte:** ${q.source}\n`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${ch.start}–${ch.end} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,500); assert.equal(statements.size,500);
for (const file of fs.readdirSync(__dirname).filter(s => /^(?:date|deitel|governanca|uml|guedes)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id),file); assert.ok(!statements.has(norm(q.statement)),q.statement);
  }
}
files.set(path.join(seedDir,'grus_completo.sql'),sql(allRows,'Capítulos 1 a 25 — 500 questões.'));
files.set(path.join(__dirname,'grus_README.md'),`# Questões — Data Science do Zero

**500 questões originais, 20 por capítulo, nos 25 capítulos do PDF fornecido.** Fonte: ${bibliography}

A ficha catalográfica nas páginas 7 a 9 identifica a edição brasileira de **2016**, traduzida do original de 2015. O nome do arquivo menciona 2018, mas não foi usado como evidência bibliográfica. A edição utiliza Python 2.7; as questões não exigem executar código antigo nem pressupõem disponibilidade atual das APIs ou ferramentas citadas.

## Importação

Use o [SQL completo](../../supabase/seeds/grus_completo.sql) ou os SQLs por capítulo, após configurar public.questions e com acesso administrativo. Ambos usam os mesmos IDs. ON CONFLICT (id) DO NOTHING preserva registros existentes e revisões manuais.

Classificação: **CP-T / Informática / Data Science**, question_type=bibliography, year=null, is_annulled=false e **is_published=false**. Gabaritos de 0 a 4. Nada foi enviado ao Supabase.

## Seleção editorial

Cada capítulo seleciona dez conceitos ou regras, com uma questão de identificação e outra de aplicação original por conceito. A seleção é representativa e não cobre todos os parágrafos, demonstrações, bibliotecas ou algoritmos. O capítulo 25 inclui orientações práticas e ferramentas no contexto histórico da edição. As perguntas não são questões oficiais nem transcrições de exercícios.

Os pares são intencionais; evite apresentá-los juntos quando isso facilitar excessivamente uma avaliação. As dificuldades Fácil e Médio são classificações editoriais preliminares. A distribuição tem quatro gabaritos de cada letra por capítulo. Há exclusões entre conceitos próximos na seleção de distratores; ainda é necessária revisão pedagógica dos enunciados, alternativas, explicações e gabaritos antes de publicar.

O PDF tem **472 páginas físicas**. Os capítulos ocupam as páginas **29 a 456**. Material preliminar, informações finais e publicidade foram excluídos do banco. As fontes indicam páginas físicas do PDF, sem equivalência presumida com a paginação impressa. O PDF e a extração integral não são incluídos no repositório.

## Capítulos

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
${index.join('\n')}

## Manutenção e validação

Edite [grus_conceitos.txt](grus_conceitos.txt): referência capítulo:página-inicial-página-final, resposta, definição original e situação original, separados por barras verticais. Os limites dos capítulos estão em [grus_metadata.json](grus_metadata.json).

\`\`\`sh
node data/questions/generate-grus.cjs
node data/questions/generate-grus.cjs --check
node data/questions/validate-grus.cjs
\`\`\`

As verificações conferem contagens, referências, alternativas distintas, índices de resposta, enunciados únicos, IDs determinísticos, coerência entre JSON e SQL, reimportação sem duplicatas e preservação de revisões. A execução SQL usa adaptação sintática em SQLite na memória, sem acessar Supabase; não equivale à execução no PostgreSQL. As verificações estruturais não substituem revisão de conteúdo.
`);
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file); assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:25,questions:500,uniqueIds:ids.size,artifacts:files.size,published:false}));
