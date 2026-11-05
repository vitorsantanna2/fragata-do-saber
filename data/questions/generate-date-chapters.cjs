// Fonte editorial: date_capitulos_02_27.txt. Este programa só escreve arquivos locais.
// Uso: node data/questions/generate-date-chapters.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '../..');
const seedDir = path.join(root, 'supabase/seeds');
const checkOnly = process.argv.includes('--check');
const titles = {
  2: 'Arquitetura de sistemas de bancos de dados',
  3: 'Introdução aos bancos de dados relacionais',
  4: 'Uma introdução à SQL',
  5: 'Tipos', 6: 'Relações', 7: 'Álgebra relacional', 8: 'Cálculo relacional',
  9: 'Integridade', 10: 'Visões', 11: 'Dependências funcionais',
  12: 'Normalização: 1FN, 2FN, 3FN e FNBC',
  13: 'Normalização: formas normais superiores', 14: 'Modelagem semântica',
  15: 'Recuperação', 16: 'Concorrência', 17: 'Segurança', 18: 'Otimização',
  19: 'Falta de informações', 20: 'Herança de tipo',
  21: 'Bancos de dados distribuídos', 22: 'Apoio à decisão',
  23: 'Dados temporais', 24: 'Sistemas baseados em lógica',
  25: 'Bancos de dados de objetos', 26: 'Bancos de dados relacional/objeto',
  27: 'A World Wide Web e XML',
};
// Classificação editorial inicial; pode ser ajustada após uso e revisão dos itens.
const hard = {
  8: [7, 14], 11: [11, 12, 18, 20], 12: [3, 16, 17, 18],
  13: [12, 19], 16: [11, 12, 17, 20], 18: [6, 9, 20],
  19: [10, 17, 20], 20: [12, 17, 18], 23: [15, 18, 19],
  24: [10, 16, 20], 26: [6, 10, 12], 27: [12, 19],
};
const easy = {
  2: [1, 2, 3, 8, 13], 3: [3, 4, 6, 12, 17, 18],
  4: [1, 2, 3, 6, 7, 12, 13], 5: [1, 2, 11, 17, 18],
  6: [1, 4, 6, 9], 7: [3, 4, 5], 8: [5, 6, 18],
  9: [7, 9, 11, 19], 10: [1, 6, 15], 11: [3, 4],
  14: [2, 3, 4, 6, 7, 8, 9], 15: [1, 2, 3, 4, 19],
  16: [7, 9], 17: [1, 6, 17, 18], 19: [8, 14],
  20: [4, 5, 19], 21: [5, 6, 8], 22: [4, 6, 16, 19],
  23: [4, 7, 10], 24: [1, 4, 18], 25: [3, 5, 8],
  27: [1, 2, 4, 5, 7],
};

const read = file => fs.readFileSync(path.join(__dirname, file), 'utf8');
const metadata = JSON.parse(read('date_capitulos_metadata.json'));
assert.equal(metadata.length, 26);
const sections = new Map();
for (const chapter of metadata) {
  assert.ok(chapter.chapter >= 2 && chapter.chapter <= 27);
  assert.ok(chapter.start < chapter.end);
  chapter.sections.forEach((s, i) => {
    assert.ok(!sections.has(s.section), `Seção repetida: ${s.section}`);
    assert.equal(Number(s.section.split('.')[0]), chapter.chapter);
    const end = chapter.sections[i + 1]?.page - 1;
    sections.set(s.section, {
      ...s, chapter: chapter.chapter,
      end: Number.isFinite(end) ? end : s.page,
    });
    assert.ok(s.page >= chapter.start && s.page <= chapter.end);
    if (i) assert.ok(s.page > chapter.sections[i - 1].page);
  });
}

const normalized = text => text.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const quote = text => "'" + text.replaceAll("'", "''") + "'";
const markdown = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const hash = text => crypto.createHash('sha256').update(text, 'utf8').digest('hex');
// UUID v5 com namespace DNS e nomes estáveis: alterações editoriais preservam IDs.
const namespace = Buffer.from('6ba7b8109dad11d180b400c04fd430c8', 'hex');
function uuid(name) {
  const bytes = crypto.createHash('sha1').update(namespace).update(name, 'utf8').digest().subarray(0, 16);
  bytes[6] = (bytes[6] & 0x0f) | 0x50;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = bytes.toString('hex');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

const groups = new Map(Array.from({ length: 26 }, (_, i) => [i + 2, []]));
const statements = new Set();
const lines = read('date_capitulos_02_27.txt').split(/\r?\n/);
lines.forEach((line, lineIndex) => {
  if (!line.trim() || line.startsWith('#')) return;
  const fields = line.split('|').map(value => value.trim());
  assert.equal(fields.length, 8, `Linha ${lineIndex + 1}: esperados 8 campos`);
  assert.ok(fields.every(Boolean), `Linha ${lineIndex + 1}: campo vazio`);
  assert.ok(fields.every(value => !value.includes('\uFFFD') && !value.includes('\0')));
  const [section, statement, correct, ...rest] = fields;
  const explanation = rest.pop();
  const sourceSection = sections.get(section);
  assert.ok(sourceSection, `Seção não mapeada: ${section}`);
  assert.ok(!sourceSection.title.includes('RESUMO'), `Referência excessivamente geral: ${section}`);
  const options = [correct, ...rest];
  assert.equal(new Set(options.map(normalized)).size, 5, `Alternativas repetidas: ${statement}`);
  assert.ok(!statements.has(normalized(statement)), `Enunciado repetido: ${statement}`);
  statements.add(normalized(statement));
  groups.get(sourceSection.chapter).push({ section, statement, options, explanation });
});
assert.equal(statements.size, 520);

const pilot = JSON.parse(read('date_capitulo_01_piloto.json'));
for (const q of pilot) assert.ok(!statements.has(normalized(q.statement)));
const allIds = new Set();
const allRows = [];
const chapterArtifacts = [];
const artifacts = new Map();
const sqlHeader = `-- Questões originais de estudo baseadas em Date, tradução da 8ª edição (2004).
-- Não são questões oficiais do CP-T nem exercícios transcritos do livro.
-- Execute após configurar public.questions, usando uma conta administrativa.
-- Todos os itens são rascunhos: revise no painel antes de publicar.
-- Páginas referem-se ao arquivo PDF fornecido, não à paginação impressa.
-- IDs fixos: reexecutar não duplica nem sobrescreve os registros deste lote.
-- As explicações acompanham o contexto histórico da edição, quando pertinente.
`;
function sql(rows, description) {
  return `${sqlHeader}-- ${description}
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
}
for (const [chapter, entries] of groups) {
  assert.equal(entries.length, 20, `Capítulo ${chapter}: quantidade incorreta`);
  const chapterName = `date_capitulo_${String(chapter).padStart(2, '0')}`;
  // Posições balanceadas, ordenadas por hash, sem ciclo A-B-C-D-E previsível.
  const positions = Array.from({ length: 20 }, (_, i) => ({ position: i % 5, key: hash(`${chapter}:answer:${i}`) }))
    .sort((a, b) => a.key.localeCompare(b.key)).map(item => item.position);
  const answers = Array(5).fill(0);
  const rows = [];
  const records = entries.map((entry, i) => {
    const number = i + 1;
    const { page, end } = sections.get(entry.section);
    const pages = page === end ? String(page) : `${page}–${end}`;
    const id = uuid(`fragata:date:8ed:capitulo:${chapter}:questao:${number}`);
    assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    assert.ok(!allIds.has(id)); allIds.add(id);
    const distractors = entry.options.slice(1).map((option, j) => ({ option, key: hash(`${chapter}:${number}:option:${j}`) }))
      .sort((a, b) => a.key.localeCompare(b.key)).map(item => item.option);
    const correct = positions[i];
    distractors.splice(correct, 0, entry.options[0]);
    assert.equal(distractors[correct], entry.options[0]);
    answers[correct]++;
    const difficulty = hard[chapter]?.includes(number) ? 'Difícil' : easy[chapter]?.includes(number) ? 'Fácil' : 'Médio';
    const source = `DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo ${chapter}, seção ${entry.section}, páginas ${pages} do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.`;
    const q = {
      id, chapter, section: entry.section, pages, question_type: 'bibliography',
      subject: 'Informática', exam: 'CP-T', year: null, question_number: number,
      topic: 'Banco de Dados', difficulty, statement: entry.statement,
      options: distractors, correct_option: correct, explanation: entry.explanation,
      source, is_annulled: false, is_published: false,
    };
    const cells = [quote(id), 'NULL', quote(q.question_type), quote(q.subject), quote(q.exam), number,
      quote(q.topic), quote(difficulty), quote(q.statement), quote(JSON.stringify(q.options)) + '::jsonb',
      correct, quote(q.explanation), quote(source), 'false', 'false'];
    rows.push(`(${cells.join(', ')})`);
    return q;
  });
  assert.deepEqual(answers, [4, 4, 4, 4, 4]);
  allRows.push(...rows);
  const md = `# Date — capítulo ${chapter}: ${titles[chapter]}

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/${chapterName}.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

` + records.map(q => `## ${q.question_number}. ${q.difficulty} — seção ${q.section}

${markdown(q.statement)}

${q.options.map((option, j) => `${String.fromCharCode(65 + j)}) ${markdown(option)}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65 + q.correct_option)}.** ${markdown(q.explanation)}

**Fonte:** ${q.source}
`).join('\n');
  artifacts.set(path.join(__dirname, `${chapterName}.json`), JSON.stringify(records, null, 2) + '\n');
  artifacts.set(path.join(__dirname, `${chapterName}.md`), md);
  artifacts.set(path.join(seedDir, `${chapterName}.sql`), sql(rows, `Capítulo ${chapter}: ${titles[chapter]} — 20 questões.`));
  chapterArtifacts.push({ chapter, name: chapterName, title: titles[chapter], count: records.length });
}
assert.equal(allIds.size, 520);
artifacts.set(path.join(seedDir, 'date_capitulos_02_27_completo.sql'), sql(allRows, 'Capítulos 2 a 27 — 520 questões. Não inclui nem modifica o piloto do capítulo 1.'));
artifacts.set(path.join(__dirname, 'date_capitulos_README.md'), `# Questões de estudo — C. J. Date, 8ª edição

O livro fornecido tem 27 capítulos e 1.623 páginas no arquivo PDF. Este lote contém **520 questões originais, 20 por capítulo de 2 a 27**. Com as 20 questões do [piloto do capítulo 1](date_capitulo_01_piloto.md), são **540 questões**. Os apêndices não fazem parte deste lote. A seleção é representativa dos temas dos capítulos; não pretende esgotar todas as seções ou exercícios do livro.

## Importação

Execute no SQL Editor do Supabase o [SQL único dos capítulos 2 a 27](../../supabase/seeds/date_capitulos_02_27_completo.sql), usando uma conta administrativa e após configurar a tabela public.questions. Alternativamente, use os SQLs individuais abaixo. Não é necessário executar as duas opções: os IDs são os mesmos, e conflitos por ID são ignorados sem alterar registros já existentes.

Os novos itens são classificados em **CP-T / Informática / Banco de Dados**, com origem **bibliografia**, sem ano de prova e com **is_published = false**. Eles precisam de revisão e publicação no painel administrativo para ficarem disponíveis aos alunos. Nenhum SQL foi executado no banco por este processo.

O SQL único não inclui o capítulo 1. Se necessário, importe também o [SQL do piloto](../../supabase/seeds/date_capitulo_01_piloto.sql). Executar os arquivos não modifica o código da plataforma, nem os filtros das trilhas.

## Fonte e convenções

Referência: DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Cada item indica capítulo, seção e páginas **do arquivo PDF**. O intervalo é o da seção usada como apoio; não representa uma citação literal do enunciado ou comentário.

O PDF apresenta inconsistências: o capítulo 23 repete o título “Apoio à decisão”, embora trate de dados temporais; o capítulo 25 repete “Sistemas baseados em lógica”, embora trate de objetos. Neste índice usamos títulos descritivos do conteúdo. Os cabeçalhos 24.5/24.6 nas páginas 1326/1337 correspondem às seções 25.5/25.6, e 25.2/25.3 nas páginas 1361/1372 correspondem às seções 26.2/26.3, conforme as aberturas dos próprios capítulos. O mapeamento registra essas correções sem alterar o PDF.

As questões são originais e não oficiais. Discussões sobre posições do autor e recursos de produtos são situadas no contexto da edição. A dificuldade é editorial e pode ser recalibrada. Revise também adequação ao edital e profundidade desejada antes de publicar.

## Lotes

| Capítulo | Tema | Questões | Revisão | SQL |
| --- | --- | ---: | --- | --- |
${chapterArtifacts.map(c => `| ${c.chapter} | ${c.title} | ${c.count} | [Ler](${c.name}.md) | [Importar](../../supabase/seeds/${c.name}.sql) |`).join('\n')}

## Manutenção e validação

A fonte editorial é [date_capitulos_02_27.txt](date_capitulos_02_27.txt): cada linha contém seção, enunciado, resposta correta, quatro distratores e comentário, separados por barras verticais. [date_capitulos_metadata.json](date_capitulos_metadata.json) guarda o mapa de páginas das seções. Edite essas fontes e regenere os arquivos; os JSONs, Markdown e SQLs por capítulo são derivados.

Para regenerar: node data/questions/generate-date-chapters.cjs

Para validar sem escrever: node data/questions/generate-date-chapters.cjs --check

O gerador verifica contagens, campos obrigatórios, cinco alternativas distintas, ausência de enunciados repetidos, referências mapeadas, UUIDs únicos e gabaritos balanceados. Em cada capítulo há quatro respostas de cada letra, distribuídas sem um ciclo fixo. Os índices de gabarito nos JSONs e SQLs vão de zero a quatro.

A validação automática é estrutural e não substitui revisão pedagógica. O comando --check também verifica que os arquivos derivados correspondem às fontes editoriais. O gerador não conecta ao Supabase nem publica questões.
`);

for (const [file, content] of artifacts) {
  assert.ok(!content.includes('\uFFFD'), `Codificação inválida: ${file}`);
  if (checkOnly) assert.equal(fs.readFileSync(file, 'utf8'), content, `Arquivo desatualizado: ${file}`);
  else {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log(JSON.stringify({ mode: checkOnly ? 'check' : 'generate', chapters: groups.size,
  questions: statements.size, uniqueIds: allIds.size, artifacts: artifacts.size, published: false }));
