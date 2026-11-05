// node data/questions/generate-governanca.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname,'governanca_metadata.json'),'utf8'));
assert.equal(chapters.length,18);
const sections = new Map();
for (const ch of chapters) {
  sections.set(String(ch.chapter),{page:ch.start,end:ch.end,chapter:ch.chapter});
  for (const s of ch.sections) {
    assert.ok(!sections.has(s.section));
    assert.ok(s.page>=ch.start && s.end<=ch.end && s.page<=s.end);
    sections.set(s.section,{...s,chapter:ch.chapter});
  }
}
const groups = new Map(chapters.map(ch=>[ch.chapter,[]]));
const norm = s=>s.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('pt-BR');
const statements = new Set();
for (const [i,line] of fs.readFileSync(path.join(__dirname,'governanca_questoes.txt'),'utf8').split(/\r?\n/).entries()) {
  if (!line.trim() || line.startsWith('#')) continue;
  const fields=line.split('|').map(s=>s.trim());
  assert.equal(fields.length,9,`Linha ${i+1}`);
  assert.ok(fields.every(s=>s && !s.includes('\uFFFD') && !s.includes('\0')));
  const [section,difficulty,statement,correct,a,b,c,d,explanation]=fields;
  assert.ok(['Fácil','Médio','Difícil'].includes(difficulty));
  const ref=sections.get(section); assert.ok(ref,section);
  assert.equal(new Set([correct,a,b,c,d].map(norm)).size,5,statement);
  assert.ok(!statements.has(norm(statement)),statement); statements.add(norm(statement));
  groups.get(ref.chapter).push({section,difficulty,statement,options:[correct,a,b,c,d],explanation});
}
assert.equal(statements.size,360);
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const namespace=Buffer.from('6ba7b8109dad11d180b400c04fd430c8','hex');
function uuid(name) {
  const b=crypto.createHash('sha1').update(namespace).update(name).digest().subarray(0,16);
  b[6]=(b[6]&15)|80; b[8]=(b[8]&63)|128;
  const h=b.toString('hex'); return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
const quote=s=>"'"+s.replaceAll("'","''")+"'";
const md=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const header=`-- Questões originais: Fernandes e Abreu, Implantando a Governança de TI, 4ª edição, Brasport, 2014.
-- Contexto histórico da edição: COBIT 5, ITIL 2011 e versões de normas nela apresentadas.
-- Não são questões oficiais nem exercícios transcritos do livro.
-- Execute após configurar public.questions, usando uma conta administrativa.
-- Todos os itens entram como rascunhos. Revise antes de publicar.
-- Páginas referem-se ao arquivo PDF fornecido, não à paginação impressa.
-- IDs fixos: reexecutar não duplica nem sobrescreve registros existentes.
`;
const sql=(rows,description)=>`${header}-- ${description}
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
const files=new Map(), ids=new Set(), allRows=[], index=[];
const seedDir=path.resolve(__dirname,'../../supabase/seeds');
for (const ch of chapters) {
  const entries=groups.get(ch.chapter); assert.equal(entries.length,20,`Capítulo ${ch.chapter}`);
  const name=`governanca_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions=Array.from({length:20},(_,i)=>({value:i%5,h:hash(`governanca:${ch.chapter}:answer:${i}`)}))
    .sort((a,b)=>a.h.localeCompare(b.h)).map(x=>x.value);
  const counts=Array(5).fill(0), rows=[];
  const questions=entries.map((e,i)=>{
    const id=uuid(`fragata:fernandes-abreu:governanca:4ed:chapter:${ch.chapter}:question:${i+1}`);
    assert.ok(!ids.has(id)); ids.add(id);
    const options=e.options.slice(1).map((s,j)=>({s,h:hash(`${id}:option:${j}`)})).sort((a,b)=>a.h.localeCompare(b.h)).map(x=>x.s);
    const correct=positions[i]; options.splice(correct,0,e.options[0]); counts[correct]++;
    const ref=sections.get(e.section);
    const pages=ref.page===ref.end?String(ref.page):`${ref.page}–${ref.end}`;
    const section=e.section.includes('.')?`, seção ${e.section}`:'';
    const source=`FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz de. Implantando a Governança de TI: da estratégia à gestão dos processos e serviços. 4ª edição. Brasport, 2014. Capítulo ${ch.chapter}${section}, páginas ${pages} do PDF fornecido. Contexto histórico da edição de 2014. Questão original de estudo; não é questão oficial do CP-T.`;
    const q={id,chapter:ch.chapter,section:e.section,pages,year:null,question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,topic:'Governança de TI',difficulty:e.difficulty,statement:e.statement,options,correct_option:correct,explanation:e.explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,quote(q.topic),quote(q.difficulty),quote(q.statement),quote(JSON.stringify(options))+'::jsonb',correct,quote(q.explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# Governança de TI — capítulo ${ch.chapter}: ${ch.title}

20 questões originais de estudo. Contexto: **edição de 2014**. Classificação: CP-T / Informática / Governança de TI. Todos os itens são **rascunhos**, com dificuldade editorial inicial.

[SQL](../../supabase/seeds/${name}.sql) · [Índice e instruções](governanca_README.md)

`+questions.map(q=>`## ${q.question_number}. ${q.difficulty}

${md(q.statement)}

${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}

**Fonte:** ${q.source}
`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | 20 | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,360);
for (const file of fs.readdirSync(__dirname).filter(s=>/^(?:date|deitel)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id)); assert.ok(!statements.has(norm(q.statement)),q.statement);
  }
}
files.set(path.join(seedDir,'governanca_completo.sql'),sql(allRows,'Capítulos 1 a 18 — 360 questões.'));
files.set(path.join(__dirname,'governanca_README.md'),`# Questões — Implantando a Governança de TI

**360 questões originais, 20 por capítulo, cobrindo os 18 capítulos do PDF fornecido (652 páginas).** Seleção representativa, com conceitos e situações de aplicação; não cobre cada parágrafo. Os casos do capítulo 18 são tratados como relatos históricos anônimos do livro.

## Importação

Execute o [SQL único](../../supabase/seeds/governanca_completo.sql) no SQL Editor do Supabase após configurar public.questions, com acesso administrativo. Alternativamente, use os SQLs por capítulo. Ambos usam os mesmos IDs; ON CONFLICT (id) DO NOTHING preserva registros e edições existentes.

Classificação: **CP-T / Informática / Governança de TI**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Revise os rascunhos no painel antes de publicar. A geração é local e não acessa o Supabase.

## Fonte e contexto

FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz de. **Implantando a Governança de TI: da estratégia à gestão dos processos e serviços. 4ª edição. Brasport, 2014.**

As questões acompanham a edição recebida, incluindo COBIT 5, ITIL 2011, modelos e normas nas versões nela descritas. Regulamentações e estruturas governamentais são cobradas expressamente como conteúdo histórico de 2014, sem afirmar sua vigência atual. As páginas indicam a posição no arquivo PDF; a página impressa 1 corresponde à página 22 do arquivo. Referências de seção identificam o intervalo de apoio; capítulos sem subseções numeradas usam o intervalo do capítulo.

As questões e comentários são originais, não transcrições de exercícios nem questões oficiais do CP-T. Dificuldades editoriais: Fácil, Médio e Difícil; devem ser calibradas durante a revisão pedagógica.

## Capítulos

| Capítulo | Tema | Questões | Revisão | Importação |
| --- | --- | ---: | --- | --- |
${index.join('\n')}

## Manutenção e validação

Edite [governanca_questoes.txt](governanca_questoes.txt) e [governanca_metadata.json](governanca_metadata.json), depois execute:

\`\`\`sh
node data/questions/generate-governanca.cjs
node data/questions/generate-governanca.cjs --check
node data/questions/validate-governanca.cjs
\`\`\`

Cada linha editorial tem nove campos: referência de seção ou capítulo, dificuldade, enunciado, resposta correta, quatro distratores e explicação. O gerador confere contagens, referências, cinco alternativas distintas, IDs e enunciados únicos, inclusive em relação aos lotes de Date e Deitel. Distribui quatro respostas de cada letra por capítulo; JSON e SQL usam índices de 0 a 4. Os checks estruturais não substituem a revisão pedagógica.

O validador executa uma adaptação sintática dos SQLs em SQLite na memória, compara os 360 registros aos JSONs e confere reimportação, preservação de edições e ausência de colisões com Date e Deitel. Isso não representa execução nem validação do servidor PostgreSQL/Supabase. Intervalos de referências podem compartilhar a página na qual uma seção termina e outra começa.

O PDF e a extração integral não são incluídos no repositório. O script prepare-governanca.cjs permite reconstruir o mapa inicial a partir da extração temporária, mas ajustes editoriais do mapa devem ser preservados.
`);
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD')); assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:18,questions:360,uniqueIds:ids.size,artifacts:files.size,published:false}));
