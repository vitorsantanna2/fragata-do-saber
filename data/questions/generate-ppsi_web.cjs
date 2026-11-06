// node data/questions/generate-ppsi_web.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'ppsi_web_metadata.json'), 'utf8'));
assert.equal(chapters.length, 10);
const norm = s => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const hash = s => crypto.createHash('sha256').update(s).digest('hex');
for (const ch of chapters) ch.concepts = [];
for (const [i, line] of fs.readFileSync(path.join(__dirname, 'ppsi_web_conceitos.txt'), 'utf8').split(/\r?\n/).entries()) {
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
const overlaps = {2:[[1,2,3,4],[6,7,8,9]],3:[[0,1,2],[3,4,5]],5:[[0,1,2]],6:[[0,3,4],[6,7]],8:[[6,7,8]],9:[[0,1],[6,7,8]],10:[[0,1,2,3,4]]};
const quote = s => "'" + s.replaceAll("'", "''") + "'";
const md = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const bibliography = "BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022).";
const header = `-- Questões originais de estudo: SGD. Guia de Requisitos Mínimos para Aplicações Web. PPSI.
-- Versão 2.0: histórico de 15/04/2023; capa indica abril de 2022.
-- Conteúdo referido à versão fornecida, sem afirmação de atualidade normativa.
-- Não são questões oficiais nem exercícios transcritos.
-- Todos os itens são rascunhos: revise antes de publicar.
-- Páginas são posições físicas no PDF.
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
  const name = `ppsi_web_bloco_${String(ch.chapter).padStart(2,'0')}`;
  const positions = Array.from({length:20}, (_,i) => ({ value:i%5, h:hash(`ppsi_web:${ch.chapter}:answer:${i}`) }))
    .sort((a,b) => a.h.localeCompare(b.h)).map(x => x.value);
  const counts = Array(5).fill(0), rows = [];
  const entries = ch.concepts.flatMap((c,i) => [
    {...c, conceptIndex:i, mode:'conceito', statement:`No estudo de “${ch.title}” no guia PPSI, qual conceito corresponde à descrição: “${c.definition}”?`},
    {...c, conceptIndex:i, mode:'aplicação', statement:c.application},
  ]);
  const questions = entries.map((e,i) => {
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id = uuid(`fragata:ppsi-web:requisitos-minimos:v2-2023:block:${ch.chapter}:question:${i+1}`);
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
    const source = `${bibliography} Seção ${ch.section}; bloco editorial ${ch.chapter}: ${ch.title}, páginas ${pages} do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.`;
    const explanation = `${e.answer}: ${e.definition}`;
    const q = {id,chapter:ch.chapter,section:ch.section,pages,editorial_mode:e.mode,concept:e.answer,
      year:null,question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,
      topic:'Segurança da Informação',difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,
      options,correct_option:correct,explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,quote(q.topic),quote(q.difficulty),
      quote(q.statement),quote(JSON.stringify(options))+'::jsonb',correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Bloco ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# PPSI Web — bloco ${ch.chapter}: ${ch.title}\n\n20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Segurança da Informação. Todos os itens são **rascunhos**.\n\n[SQL](../../supabase/seeds/${name}.sql) · [Índice](ppsi_web_README.md)\n\n`+questions.map(q => `## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}\n\n${md(q.statement)}\n\n${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}\n\n**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}\n\n**Fonte:** ${q.source}\n`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${ch.start}–${ch.end} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,200); assert.equal(statements.size,200);
for (const file of fs.readdirSync(__dirname).filter(s => /^(?:date|deitel|governanca|uml|guedes|grus|guerra)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id),file); assert.ok(!statements.has(norm(q.statement)),q.statement);
  }
}
files.set(path.join(seedDir,'ppsi_web_completo.sql'),sql(allRows,'Blocos 1 a 10 — 200 questões.'));
files.set(path.join(__dirname,'ppsi_web_README.md'),"# Questões — Requisitos mínimos para aplicações Web\n\n**200 questões originais em dez blocos temáticos**, baseadas no guia da Secretaria de Governo Digital (SGD), PPSI, versão 2.0. O PDF tem 55 páginas físicas. A capa indica abril de 2022, enquanto o histórico da página 3 atribui a versão 2.0 a **15/04/2023**. Essa divergência está preservada nas referências.\n\n## Uso\n\n[SQL completo](../../supabase/seeds/ppsi_web_completo.sql). Também há JSON, Markdown e SQL por bloco. Execute os seeds após configurar public.questions, com conta administrativa. Os IDs são fixos e ON CONFLICT (id) DO NOTHING preserva registros e revisões anteriores.\n\nClassificação: **CP-T / Informática / Segurança da Informação**; question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Gabaritos de 0 a 4. Nada foi enviado ao Supabase.\n\n## Organização e escopo\n\nOs blocos são uma organização editorial das seções do guia, e não dez capítulos do documento. O PDF contém três capítulos. Os blocos 1 e 2 correspondem aos capítulos 1 e 2; os demais distribuem as seções do capítulo 3, incluindo todas as 14 categorias de segurança. O campo chapter indica o bloco editorial por compatibilidade com os bancos anteriores; section preserva a seção ou faixa de seções de origem.\n\nCada bloco seleciona dez conceitos ou controles, com uma questão de identificação e outra de aplicação para cada um. As situações e definições são originais. A cobertura é representativa: não há uma questão para cada requisito numerado. Cada bloco tem dez itens fáceis, dez médios e quatro respostas de cada letra. Os pares são intencionais; evite apresentá-los juntos em avaliações. Dificuldades são classificações editoriais preliminares.\n\nAs referências indicam posições físicas no PDF e o contexto da versão fornecida. O material não atesta vigência de normas, suficiência de conformidade nem atualidade de recomendações técnicas. Não foram reproduzidas recomendações históricas sobre troca periódica obrigatória de senhas, bloqueio do gerenciador de senhas ou robots.txt como proteção de acesso. A seleção evita tratar consentimento como única base para tratamento de dados ou anonimização como obrigação indiscriminada. O PDF e sua extração integral não são incluídos no repositório.\n\n## Blocos\n\n| Bloco | Tema | Páginas do PDF | Revisão | Importação |\n| --- | --- | --- | --- | --- |\nINDEX_TABLE\n\n## Manutenção e validação\n\nFontes editoriais: [conceitos](ppsi_web_conceitos.txt) e [metadados](ppsi_web_metadata.json). Cada linha contém bloco:páginas, resposta, definição e situação original, separados por barras verticais.\n\nExecute:\n\n~~~text\nnode data/questions/generate-ppsi_web.cjs\nnode data/questions/generate-ppsi_web.cjs --check\nnode data/questions/validate-ppsi_web.cjs\n~~~\n\nA validação verifica contagens, páginas, seções, alternativas, gabaritos, unicidade, equivalência JSON/SQL e preservação de revisões ao reimportar. A execução local usa SQLite em memória com adaptação sintática do SQL. Não substitui execução em PostgreSQL/Supabase nem revisão técnica e pedagógica. Todos os itens permanecem em rascunho.\n".replace('INDEX_TABLE',index.join('\n')));
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file); assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:10,questions:200,uniqueIds:ids.size,artifacts:files.size,published:false}));
