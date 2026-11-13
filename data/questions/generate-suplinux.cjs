// node data/questions/generate-suplinux.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'suplinux_metadata.json'), 'utf8'));
assert.equal(chapters.length, 14);
const norm = s => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const hash = s => crypto.createHash('sha256').update(s).digest('hex');
for (const ch of chapters) ch.concepts = [];
for (const [i, line] of fs.readFileSync(path.join(__dirname, 'suplinux_conceitos.txt'), 'utf8').split(/\r?\n/).entries()) {
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
const overlaps = {};
const quote = s => "'" + s.replaceAll("'", "''") + "'";
const md = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const bibliography = "MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf.";
const header = `-- Questões originais de estudo para C-Exp-SupLinux.
-- Fonte: guia de estudo CIAA, 2021, fornecido pelo usuário.
-- Não são questões oficiais nem exercícios transcritos da apostila.
-- Todos os itens são rascunhos: revise antes de publicar.
-- Páginas são posições físicas no PDF, não paginação impressa.
-- Execute após configurar public.questions, usando conta administrativa.
-- IDs fixos: reexecutar preserva registros existentes.
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
  assert.equal(ch.concepts.length, 5, `Capítulo ${ch.chapter}`);
  assert.equal(new Set(ch.concepts.map(c => norm(c.answer))).size, 5);
  const name = `suplinux_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions = Array.from({length:10}, (_,i) => ({ value:i%5, h:hash(`suplinux:${ch.chapter}:answer:${i}`) }))
    .sort((a,b) => a.h.localeCompare(b.h)).map(x => x.value);
  const counts = Array(5).fill(0), rows = [];
  const entries = ch.concepts.flatMap((c,i) => [
    {...c, conceptIndex:i, mode:'conceito', statement:`No estudo de “${ch.title}” em CIAA, qual conceito corresponde à descrição: “${c.definition}”?`},
    {...c, conceptIndex:i, mode:'aplicação', statement:c.application},
  ]);
  const questions = entries.map((e,i) => {
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id = uuid(`fragata:suplinux:guia-estudo:2021:chapter:${ch.chapter}:question:${i+1}`);
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
    const source = `${bibliography} Capítulo ${ch.chapter}: ${ch.title}, páginas ${pages} do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.`;
    const explanation = `${e.answer}: ${e.definition}`;
    const q = {id,chapter:ch.chapter,section:String(ch.chapter),pages,editorial_mode:e.mode,concept:e.answer,
      year:null,question_type:'bibliography',subject:'Linux',exam:'C-Exp-SupLinux',question_number:i+1,
      topic:'Linux',difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,
      options,correct_option:correct,explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,quote(q.topic),quote(q.difficulty),
      quote(q.statement),quote(JSON.stringify(options))+'::jsonb',correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[2,2,2,2,2]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 10 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# CIAA — capítulo ${ch.chapter}: ${ch.title}\n\n10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.\n\n[SQL](../../supabase/seeds/${name}.sql) · [Índice](suplinux_README.md)\n\n`+questions.map(q => `## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}\n\n${md(q.statement)}\n\n${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}\n\n**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}\n\n**Fonte:** ${q.source}\n`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${ch.start}–${ch.end} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,140); assert.equal(statements.size,140);
for (const file of fs.readdirSync(__dirname).filter(s => /^(?:(?:date|deitel|governanca|uml|guedes|grus|guerra|heldman|kurose|machado|marquesone|pressman|russell|saudate|sebesta|silberschatz|stallings|szwarcfiter|tanenbaum|tanenbaum_redes|valente|ward)_capitulo_|ppsi_web_bloco_)\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id),file); assert.ok(!statements.has(norm(q.statement)),q.statement);
  }
}
files.set(path.join(seedDir,'suplinux_completo.sql'),sql(allRows,'Capítulos 1 a 14 — 140 questões.'));
files.set(path.join(__dirname,'suplinux_README.md'),"# C-Exp-SupLinux — questões da apostila\n\n140 questões originais, dez por capítulo nos 14 capítulos do guia do CIAA de 2021 (96 páginas físicas). Fonte: MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Arquivo fornecido: Apostiala C-Exp-SupLinux-PR Alterada.pdf. A denominação exibida no aplicativo segue o pedido: C-Exp-SupLinux.\n\nClassificação: exam=C-Exp-SupLinux, subject=Linux, topic=Linux, question_type=bibliography, year=null. Todas as questões são rascunhos (is_published=false). Não são provas oficiais. Nada foi enviado ao Supabase.\n\nO curso foi adicionado ao catálogo em Cursos expeditos, com acesso a Questões da apostila. O aplicativo consulta o banco pelo identificador exato do curso. Para disponibilizar as questões, execute o [SQL completo](../../supabase/seeds/suplinux_completo.sql) no SQL Editor com conta administrativa após configurar public.questions; revise e publique os itens pelo fluxo administrativo existente. Enquanto forem rascunhos não aparecem para alunos. A alteração do catálogo também precisa ser incluída na publicação do aplicativo.\n\nCada capítulo seleciona cinco conceitos, cada um com identificação e aplicação. Há cinco alternativas e gabaritos equilibrados por capítulo. A dificuldade é preliminar; a seleção é representativa e não cobre todas as seções. Convém separar os pares e revisar os distratores antes de publicar.\n\nReferências indicam páginas físicas do PDF. O PDF e sua extração não integram o repositório. Não foram executados os comandos de instalação e configuração contidos no documento.\n\nNotas editoriais: o guia contém inconsistências. As questões distinguem particionamento de formatação e limitam partições estendidas/lógicas ao esquema MBR; distinguem start de enable; não reproduzem a confusão entre backup incremental e diferencial; descrevem links simbólicos por caminho sem afirmar que não possuem inode; a umask remove bits da base de criação, e sticky bit restringe remoção/renomeação, sem garantir sigilo de leitura. Não reproduzem o exemplo de desativação do firewall na instalação do Apache, números históricos de participação de mercado ou afirmações sobre suporte FTP nativo no Apache HTTP Server. Ferramentas e menus correspondem ao contexto do guia de 2021, sem alegação sobre versões atuais.\n\n| Capítulo | Tema | Páginas do PDF | Revisão | Importação |\n| --- | --- | --- | --- | --- |\nINDEX_TABLE\n\nFontes: [conceitos](suplinux_conceitos.txt), [metadados](suplinux_metadata.json).\n\n```text\nnode data/questions/generate-suplinux.cjs\nnode data/questions/generate-suplinux.cjs --check\nnode data/questions/validate-suplinux.cjs\n```\n\nA validação confere contagens, páginas, alternativas, gabaritos, unicidade e equivalência JSON/SQL, com reimportação preservando revisões. Usa SQLite em memória com adaptação sintática; não equivale a executar PostgreSQL/Supabase nem substitui revisão pedagógica.\n".replace('INDEX_TABLE',index.join('\n')));
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file); assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:14,questions:140,uniqueIds:ids.size,artifacts:files.size,published:false}));
