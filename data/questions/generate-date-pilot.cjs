// Regenera e valida somente o lote piloto de Date a partir de seu JSON editorial.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const base = path.join(__dirname, 'date_capitulo_01_piloto');
const questions = JSON.parse(fs.readFileSync(base + '.json', 'utf8'));
assert.equal(questions.length, 20);
const counts = Array(5).fill(0);
const ids = new Set();
const quote = value => "'" + String(value).replaceAll("'", "''") + "'";
const rows = questions.map((q, i) => {
  assert.equal(q.options.length, 5);
  assert.equal(new Set(q.options).size, 5);
  assert.ok(q.options.every(v => typeof v === 'string' && v.trim()));
  assert.ok(Number.isInteger(q.correct_option) && q.correct_option >= 0 && q.correct_option < 5);
  assert.ok(q.statement && q.explanation && /^1\.[23456]$/.test(q.section));
  assert.ok(['Fácil', 'Médio', 'Difícil'].includes(q.difficulty));
  assert.ok(q.pages.split('–').every(p => Number(p) >= 39 && Number(p) <= 71));
  counts[q.correct_option]++;
  const hash = crypto.createHash('sha256').update('fragata:date:8ed:capitulo1:piloto:' + (i + 1)).digest('hex');
  const id = `${hash.slice(0,8)}-${hash.slice(8,12)}-5${hash.slice(13,16)}-a${hash.slice(17,20)}-${hash.slice(20,32)}`;
  assert.ok(!ids.has(id)); ids.add(id);
  const source = `DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 1, seção ${q.section}, páginas ${q.pages} do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.`;
  return '(' + [quote(id), 'NULL', quote('bibliography'), quote('Informática'), quote('CP-T'), i+1, quote('Banco de Dados'), quote(q.difficulty), quote(q.statement), quote(JSON.stringify(q.options)) + '::jsonb', q.correct_option, quote(q.explanation), quote(source), 'false', 'false'].join(', ') + ')';
});
assert.deepEqual(counts, [4,4,4,4,4]);
const sql = `-- Piloto: 20 questões originais de estudo, baseadas no capítulo 1 de Date.
-- Execute após a configuração de public.questions, com uma conta administrativa.
-- Todas entram como rascunho (is_published = false). Revise no painel antes de publicar.
-- Referências usam páginas do arquivo PDF, não a paginação impressa.
-- IDs fixos evitam duplicações ao reexecutar; registros existentes não são alterados.
-- Não contém exercícios transcritos do livro nem questões oficiais do concurso.
BEGIN;

INSERT INTO public.questions (
  id, year, question_type, subject, exam, question_number, topic, difficulty,
  statement, options, correct_option, explanation, source, is_annulled, is_published
) VALUES
${rows.join(',\n')}
ON CONFLICT (id) DO NOTHING;

COMMIT;
`;
const seedDir = path.resolve(__dirname, '../../supabase/seeds');
fs.mkdirSync(seedDir, {recursive:true});
fs.writeFileSync(path.join(seedDir, 'date_capitulo_01_piloto.sql'), sql, 'utf8');
const md = `# Piloto — Date, capítulo 1

20 questões originais para revisão editorial, com cinco alternativas e uma resposta correta por item. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro.

Referência: C. J. Date, Introdução a Sistemas de Bancos de Dados, tradução da 8ª edição, Elsevier, 2004. Os números abaixo identificam páginas do arquivo PDF fornecido, não a paginação impressa.

O [SQL de importação](../../supabase/seeds/date_capitulo_01_piloto.sql) insere os itens como rascunhos em Informática / CP-T / Banco de Dados. Execute-o no SQL Editor do Supabase após configurar a tabela de questões. Revise enunciados, alternativas, gabaritos e fontes no painel administrativo antes de publicar. Reexecutar preserva registros existentes com os mesmos IDs.

O JSON nesta pasta é a matriz editorial. Após editá-lo, execute node data/questions/generate-date-pilot.cjs na raiz do projeto para validar e regenerar o SQL e este documento. Os gabaritos no JSON e no SQL usam índices de zero a quatro.

` + questions.map((q,i) => `## ${i+1}. ${q.difficulty} — seção ${q.section}

${q.statement}

${q.options.map((o,j) => `${String.fromCharCode(65+j)}) ${o}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${q.explanation}

**Fonte:** capítulo 1, seção ${q.section}, PDF pp. ${q.pages}.
`).join('\n');
fs.writeFileSync(base + '.md', md, 'utf8');
console.log(JSON.stringify({questions:questions.length,uniqueIds:ids.size,correctAnswers:counts,sqlBytes:Buffer.byteLength(sql),drafts:true}));
