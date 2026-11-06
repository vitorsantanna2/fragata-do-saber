// node data/questions/generate-guerra.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'guerra_metadata.json'), 'utf8'));
assert.equal(chapters.length, 10);
const norm = s => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const hash = s => crypto.createHash('sha256').update(s).digest('hex');
for (const ch of chapters) ch.concepts = [];
for (const [i, line] of fs.readFileSync(path.join(__dirname, 'guerra_conceitos.txt'), 'utf8').split(/\r?\n/).entries()) {
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
1:[[0,1],[2,4],[3,5],[6,7],[8,9]],
2:[[1,5,6],[2,4],[5,9]],
3:[[0,1],[1,2,3],[4,5],[6,4],[7,8,9]],
4:[[0,1],[1,2,3,4],[5,6,7,8],[3,9]],
5:[[0,1],[0,8],[1,8]],
6:[[0,6],[1,2,3],[4,5],[7,8,9]],
7:[[0,1,2],[3,4,5,6],[7,8,9]],
8:[[0,1,3],[2,8],[4,5,6],[7,8,9]],
9:[[0,1,2,3],[4,0],[5,6,7,8],[8,9]],
10:[[0,1],[2,3],[5,6,7],[8,9]],
};
const quote = s => "'" + s.replaceAll("'", "''") + "'";
const md = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const bibliography = 'GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido).';
const header = `-- Questões originais de estudo: Guerra. Design Patterns com Java. Casa do Código.
-- Ano 2014 conforme identificação do arquivo fornecido; PDF com versão editorial 16.1.7.
-- Não são questões oficiais nem exercícios transcritos do livro.
-- Todos os itens são rascunhos: revise antes de publicar.
-- Páginas são posições físicas no PDF, não paginação impressa.
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
  const name = `guerra_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions = Array.from({length:20}, (_,i) => ({ value:i%5, h:hash(`guerra:${ch.chapter}:answer:${i}`) }))
    .sort((a,b) => a.h.localeCompare(b.h)).map(x => x.value);
  const counts = Array(5).fill(0), rows = [];
  const entries = ch.concepts.flatMap((c,i) => [
    {...c, conceptIndex:i, mode:'conceito', statement:`No estudo de “${ch.title}” em Guerra, qual conceito corresponde à descrição: “${c.definition}”?`},
    {...c, conceptIndex:i, mode:'aplicação', statement:c.application},
  ]);
  const questions = entries.map((e,i) => {
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id = uuid(`fragata:guerra:design-patterns-java:2014:chapter:${ch.chapter}:question:${i+1}`);
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
    const source = `${bibliography} Capítulo ${ch.chapter}: ${ch.title}, páginas ${pages} do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.`;
    const explanation = `${e.answer}: ${e.definition.charAt(0).toLocaleLowerCase('pt-BR')}${e.definition.slice(1)}`;
    const q = {id,chapter:ch.chapter,section:String(ch.chapter),pages,editorial_mode:e.mode,concept:e.answer,
      year:null,question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,
      topic:'Engenharia de Software',difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,
      options,correct_option:correct,explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,quote(q.topic),quote(q.difficulty),
      quote(q.statement),quote(JSON.stringify(options))+'::jsonb',correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# Guerra — capítulo ${ch.chapter}: ${ch.title}\n\n20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.\n\n[SQL](../../supabase/seeds/${name}.sql) · [Índice](guerra_README.md)\n\n`+questions.map(q => `## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}\n\n${md(q.statement)}\n\n${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}\n\n**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}\n\n**Fonte:** ${q.source}\n`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${ch.start}–${ch.end} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,200); assert.equal(statements.size,200);
for (const file of fs.readdirSync(__dirname).filter(s => /^(?:date|deitel|governanca|uml|guedes|grus)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id),file); assert.ok(!statements.has(norm(q.statement)),q.statement);
  }
}
files.set(path.join(seedDir,'guerra_completo.sql'),sql(allRows,'Capítulos 1 a 10 — 200 questões.'));
files.set(path.join(__dirname,'guerra_README.md'),`# Questões — Design Patterns com Java

**200 questões originais, 20 por capítulo, cobrindo os 10 capítulos do PDF fornecido.** Fonte: ${bibliography}

O subtítulo conferido na capa é **Projeto orientado a objetos guiado por padrões**. O PDF tem versão editorial **16.1.7**, indicada no sumário. O ano **2014** foi informado pelo nome do arquivo e não foi confirmado no texto editorial extraído; esse limite está explícito nas referências. A versão editorial não foi interpretada como data de publicação.

## Importação

Use o [SQL completo](../../supabase/seeds/guerra_completo.sql) ou os SQLs individuais. Execute após configurar public.questions e com uma conta administrativa. Os dois formatos usam os mesmos IDs e ON CONFLICT (id) DO NOTHING preserva registros e revisões já existentes.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false e **is_published=false**. Gabaritos indexados de 0 a 4. Nada foi enviado ao Supabase.

## Seleção editorial e referências

Cada capítulo seleciona dez conceitos ou regras e trabalha cada um em uma questão de identificação e outra de aplicação. As situações são originais e não transcrevem exercícios ou listagens do livro. Trata-se de uma seleção representativa, sem cobertura de todos os detalhes e exemplos. Padrões, técnicas, papéis e consequências são distinguidos conforme os enunciados.

Os pares são intencionais; evite apresentá-los juntos quando isso facilitar uma avaliação. As dificuldades Fácil e Médio são classificações editoriais preliminares. São quatro gabaritos de cada letra por capítulo. Revise o conteúdo, a clareza dos distratores e os gabaritos antes da publicação.

O PDF tem **272 páginas físicas**. Os capítulos ocupam as páginas **23 a 267**; material preliminar, índice remissivo e bibliografia não geraram capítulos adicionais. As referências indicam posições no PDF, sem equivalência presumida com a paginação impressa. O PDF e a extração integral não são incluídos no repositório. As APIs e ferramentas mencionadas são tratadas no contexto da obra, sem recomendação de versões atuais.

## Capítulos

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
${index.join('\n')}

## Manutenção e validação

Edite [guerra_conceitos.txt](guerra_conceitos.txt), com referência capítulo:página-inicial-página-final, resposta, definição e situação original separados por barras verticais. Os limites estão em [guerra_metadata.json](guerra_metadata.json).

Execute node data/questions/generate-guerra.cjs para gerar, node data/questions/generate-guerra.cjs --check para conferir a reprodução e node data/questions/validate-guerra.cjs para validar os artefatos.

Os checks conferem contagens, referências, alternativas distintas, índices dos gabaritos, IDs e enunciados únicos, equivalência entre JSON e SQL e preservação de revisões na reimportação. A execução SQL usa uma adaptação sintática em SQLite na memória; não equivale a executar em PostgreSQL/Supabase nem substitui revisão pedagógica.
`);
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file); assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:10,questions:200,uniqueIds:ids.size,artifacts:files.size,published:false}));
