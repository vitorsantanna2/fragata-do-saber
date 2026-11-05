// Geração local: node data/questions/generate-deitel.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const seedDir = path.resolve(__dirname, '../../supabase/seeds');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'deitel_metadata.json'), 'utf8'));
assert.equal(chapters.length, 25);
const sectionMap = new Map();
for (const chapter of chapters) {
  assert.ok(chapter.chapter >= 1 && chapter.chapter <= 25);
  chapter.sections.forEach((section, i) => {
    assert.ok(!sectionMap.has(section.section));
    assert.equal(Number(section.section.split('.')[0]), chapter.chapter);
    assert.ok(section.page >= chapter.start && section.end <= chapter.end && section.page <= section.end);
    if (i) assert.ok(section.page >= chapter.sections[i - 1].page, section.section);
    sectionMap.set(section.section, { ...section, chapter: chapter.chapter });
  });
}
const hard = {
  7: [9, 11, 20], 8: [5, 6, 15], 9: [9, 14, 19], 10: [2, 9, 18],
  11: [4, 11, 20], 14: [2, 4, 12, 13, 18], 16: [15, 19, 20],
  17: [4, 8, 12, 20], 18: [7, 9, 20], 19: [6, 14, 20],
  20: [5, 11, 12, 16, 18], 21: [8, 10, 20], 23: [8, 10, 11, 12, 13, 20],
  24: [8, 15, 17, 18],
};
const groups = new Map(chapters.map(ch => [ch.chapter, []]));
const normalize = s => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const statements = new Set();
for (const [i, line] of fs.readFileSync(path.join(__dirname, 'deitel_questoes.txt'), 'utf8').split(/\r?\n/).entries()) {
  if (!line.trim() || line.startsWith('#')) continue;
  const fields = line.split('|').map(s => s.trim());
  assert.equal(fields.length, 8, `Linha ${i + 1}: campos inválidos`);
  assert.ok(fields.every(s => s && !s.includes('\uFFFD') && !s.includes('\0')));
  const [section, statement, correct, a, b, c, d, explanation] = fields;
  const mapped = sectionMap.get(section);
  assert.ok(mapped, `Seção ausente: ${section}`);
  assert.ok(!/Conclusão/.test(mapped.title));
  // Caixa distingue tipos e identificadores Java: boolean e Boolean são diferentes.
  assert.equal(new Set([correct, a, b, c, d].map(s => s.normalize('NFC').trim().replace(/\s+/g, ' '))).size, 5, statement);
  assert.ok(!statements.has(normalize(statement)), `Enunciado repetido: ${statement}`);
  statements.add(normalize(statement));
  groups.get(mapped.chapter).push({ section, statement, options: [correct, a, b, c, d], explanation });
}
assert.equal(statements.size, 500);
const hash = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
const namespace = Buffer.from('6ba7b8109dad11d180b400c04fd430c8', 'hex');
function uuid(name) {
  const b = crypto.createHash('sha1').update(namespace).update(name, 'utf8').digest().subarray(0, 16);
  b[6] = (b[6] & 15) | 80;
  b[8] = (b[8] & 63) | 128;
  const h = b.toString('hex');
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
const quote = s => "'" + s.replaceAll("'", "''") + "'";
// Preserva trechos de código inline e escapa marcações nos demais segmentos.
const md = s => s.split('`').map((part, i) => i % 2 ? part : part.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')).join('`');
const header = `-- Questões originais de estudo: Deitel e Deitel, Java: como programar, 10ª edição.
-- Tradução brasileira do PDF fornecido: Pearson Education do Brasil, 2017.
-- Contexto dos recursos: Java SE 8. Não são questões oficiais nem exercícios transcritos.
-- Execute após configurar public.questions, usando uma conta administrativa.
-- Todos os itens entram como rascunhos. Revise antes de publicar.
-- Páginas são do arquivo PDF, não da numeração impressa.
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
const files = new Map();
const ids = new Set();
const allRows = [];
const index = [];
for (const ch of chapters) {
  const entries = groups.get(ch.chapter);
  assert.equal(entries.length, 20, `Capítulo ${ch.chapter}`);
  const name = `deitel_capitulo_${String(ch.chapter).padStart(2, '0')}`;
  const positions = Array.from({ length: 20 }, (_, i) => ({ value: i % 5, h: hash(`deitel:${ch.chapter}:answer:${i}`) }))
    .sort((a, b) => a.h.localeCompare(b.h)).map(x => x.value);
  const counts = Array(5).fill(0);
  const rows = [];
  const questions = entries.map((entry, i) => {
    const id = uuid(`fragata:deitel:java:10ed:chapter:${ch.chapter}:question:${i + 1}`);
    assert.ok(!ids.has(id)); ids.add(id);
    const options = entry.options.slice(1).map((s, j) => ({ s, h: hash(`${id}:option:${j}`) }))
      .sort((a, b) => a.h.localeCompare(b.h)).map(x => x.s);
    const correct = positions[i];
    options.splice(correct, 0, entry.options[0]);
    assert.equal(options[correct], entry.options[0]);
    counts[correct]++;
    const section = sectionMap.get(entry.section);
    const pages = section.page === section.end ? String(section.page) : `${section.page}–${section.end}`;
    const difficulty = hard[ch.chapter]?.includes(i + 1) ? 'Difícil' : ch.chapter <= 3 || i < 3 ? 'Fácil' : 'Médio';
    const source = `DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo ${ch.chapter}, seção ${entry.section}, páginas ${pages} do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.`;
    const q = {
      id, chapter: ch.chapter, section: entry.section, pages, year: null,
      question_type: 'bibliography', subject: 'Informática', exam: 'CP-T',
      question_number: i + 1, topic: 'Linguagem de Programação', difficulty,
      statement: entry.statement, options, correct_option: correct,
      explanation: entry.explanation, source, is_annulled: false, is_published: false,
    };
    rows.push('(' + [quote(id), 'NULL', quote(q.question_type), quote(q.subject), quote(q.exam), i + 1,
      quote(q.topic), quote(difficulty), quote(q.statement), quote(JSON.stringify(options)) + '::jsonb', correct,
      quote(q.explanation), quote(source), 'false', 'false'].join(', ') + ')');
    return q;
  });
  assert.deepEqual(counts, [4, 4, 4, 4, 4]);
  allRows.push(...rows);
  files.set(path.join(__dirname, `${name}.json`), JSON.stringify(questions, null, 2) + '\n');
  files.set(path.join(seedDir, `${name}.sql`), sql(rows, `Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname, `${name}.md`), `# Deitel — capítulo ${ch.chapter}: ${ch.title}

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/${name}.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

` + questions.map(q => `## ${q.question_number}. ${q.difficulty} — seção ${q.section}

${md(q.statement)}

${q.options.map((s, j) => `${String.fromCharCode(65 + j)}) ${md(s)}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65 + q.correct_option)}.** ${md(q.explanation)}

**Fonte:** ${q.source}
`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | 20 | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size, 500);
// Confere também que o novo livro não repete IDs ou enunciados dos lotes de Date.
for (const file of fs.readdirSync(__dirname).filter(s => /^date_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'))) {
    if (q.id) assert.ok(!ids.has(q.id));
    assert.ok(!statements.has(normalize(q.statement)), `Repetição com Date: ${q.statement}`);
  }
}
files.set(path.join(seedDir, 'deitel_completo.sql'), sql(allRows, 'Capítulos 1 a 25 presentes no PDF — 500 questões.'));
files.set(path.join(__dirname, 'deitel_README.md'), `# Questões — Java: como programar, Deitel e Deitel

**500 questões originais: 20 para cada um dos capítulos 1 a 25 presentes no PDF de 972 páginas.** Os capítulos 26 a 34 aparecem no sumário como material da Sala Virtual, mas seu texto não está neste arquivo; não foram geradas questões atribuídas a esses capítulos. Os apêndices não estão incluídos. O lote é uma seleção representativa dos temas, não uma cobertura de cada parágrafo do livro.

## Importar

Execute o [SQL único](../../supabase/seeds/deitel_completo.sql) no SQL Editor do Supabase, com acesso administrativo e após configurar public.questions. Ou importe os capítulos individualmente pelos links abaixo. As duas opções usam os mesmos IDs: reexecutar ignora conflitos e preserva registros existentes, inclusive suas edições.

Classificação: **CP-T / Informática / Linguagem de Programação**, origem **bibliografia**, sem ano de prova, is_annulled=false e **is_published=false**. Todos entram como rascunhos para revisão e publicação no painel. Nenhum comando deste gerador acessa o Supabase ou publica questões. Os lotes de Date permanecem separados.

## Referências e contexto

Fonte: DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, **2017**, conforme os créditos do PDF fornecido. A bibliografia da plataforma menciona 2016; mantivemos nas fontes destes itens a identificação da tradução recebida, sem alterar a trilha.

As referências usam **páginas do arquivo PDF**, não páginas impressas. O intervalo identifica a seção de apoio, não uma citação literal. A linguagem e as APIs são tratadas no contexto de **Java SE 8** da edição. Recursos históricos não são apresentados como recomendações atuais de ferramentas. Os itens são originais, com enunciados e comentários próprios. A dificuldade é editorial e pode ser recalibrada após revisão.

## Capítulos

| Capítulo | Tema | Questões | Revisão | Importação |
| --- | --- | ---: | --- | --- |
${index.join('\n')}

## Manutenção

A fonte editorial é [deitel_questoes.txt](deitel_questoes.txt), com oito campos por linha: seção, enunciado, resposta correta, quatro distratores e comentário. O mapa de referências fica em [deitel_metadata.json](deitel_metadata.json). Edite essas fontes e regenere os derivados; não edite somente os SQLs ou JSONs gerados.

Regenerar: node data/questions/generate-deitel.cjs

Validar sem alterar arquivos: node data/questions/generate-deitel.cjs --check

Validar os exemplos com um JDK 9 ou superior: node data/questions/validate-deitel-java.cjs

O verificador Java compila para **Java SE 8**, executa 68 casos de comportamento e verifica seis rejeições esperadas pelo compilador. As definições ficam em [deitel_code_checks.json](deitel_code_checks.json) e no verificador. Ele usa um diretório temporário, sem tocar no Supabase. Esses checks cobrem exemplos selecionados; não executam interfaces Swing/JavaFX nem conexões JDBC reais.

São verificados contagens, cinco alternativas distintas, campos obrigatórios, referências, IDs, duplicações de enunciados e gabaritos. Cada capítulo tem quatro respostas de cada letra, sem ciclo fixo de posições. Nos JSONs e SQLs os gabaritos usam índices **0 a 4**. A validação estrutural não substitui revisão pedagógica e de adequação ao edital.
`);
for (const [file, content] of files) {
  assert.ok(!content.includes('\uFFFD'));
  if (check) assert.equal(fs.readFileSync(file, 'utf8'), content, `Arquivo desatualizado: ${file}`);
  else { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, content, 'utf8'); }
}
console.log(JSON.stringify({ mode: check ? 'check' : 'generate', chapters: 25, questions: 500, uniqueIds: ids.size, artifacts: files.size, published: false }));
