// node data/questions/generate-guedes.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname,'guedes_metadata.json'),'utf8'));
assert.equal(chapters.length,18);
const refs = new Map();
for (const ch of chapters) {
  ch.concepts=[];
  refs.set(String(ch.chapter),{chapter:ch.chapter,page:ch.start,end:ch.end});
  for (let i=0;i<ch.sections.length;i++) {
    const s=ch.sections[i];
    const next=ch.sections.slice(i+1).find(other=>other.section.split('.').length<=s.section.split('.').length);
    // A página de uma nova seção pode conter o final da seção anterior.
    const end=next?next.page:ch.end;
    assert.ok(s.page>=ch.start && end<=ch.end && s.page<=end,s.section);
    assert.ok(!refs.has(s.section),s.section);
    refs.set(s.section,{...s,end,chapter:ch.chapter});
  }
}
const norm=s=>s.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('pt-BR');
for (const [i,line] of fs.readFileSync(path.join(__dirname,'guedes_conceitos.txt'),'utf8').split(/\r?\n/).entries()) {
  if (!line.trim() || line.startsWith('#')) continue;
  const fields=line.split('|').map(s=>s.trim());
  assert.equal(fields.length,4,`Linha ${i+1}`);
  assert.ok(fields.every(s=>s && !s.includes('\uFFFD')));
  const [section,answer,definition,application]=fields;
  const ref=refs.get(section); assert.ok(ref,`Referência ${section}`);
  chapters[ref.chapter-1].concepts.push({section,answer,definition,application});
}
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
function uuid(name) {
  const namespace=Buffer.from('6ba7b8109dad11d180b400c04fd430c8','hex');
  const b=crypto.createHash('sha1').update(namespace).update(name).digest().subarray(0,16);
  b[6]=(b[6]&15)|80; b[8]=(b[8]&63)|128;
  const h=b.toString('hex');
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
// Rótulos próximos são excluídos para evitar mais de uma resposta defensável.
const overlaps={
  1:[[0,1],[1,5]], 2:[[0,1],[2,3],[5,8,9]],
  3:[[0,4],[1,2],[6,7,8]], 4:[[8,9]],
  5:[[0,3,9],[1,2],[4,5],[7,9]],
  6:[[0,5],[2,3,4],[7,8,9]],
  7:[[0,2,3],[7,8,9]], 8:[[0,2,5],[3,4]],
  9:[[2,3,4,5],[7,8,9]], 10:[[2,6],[4,5]],
  11:[[0,5,6,9],[1,2,7]],
  12:[[0,9],[1,3],[2,4],[5,6],[7,8]],
  13:[[0,2],[1,8],[5,6,7]],
  14:[[0,3,8,9],[1,2],[5,6,7]],
  15:[[0,8,9],[1,7],[1,2,6],[3,4]],
  16:[[0,1],[7,8,9]], 17:[],
  18:[[0,1],[4,5]],
};
const quote=s=>"'"+s.replaceAll("'","''")+"'";
const md=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const bibliography='GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018.';
const header=`-- Questões originais: Guedes. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018.
-- Contexto do livro: UML 2.5. Não são questões oficiais nem exercícios transcritos.
-- Todos os itens entram como rascunhos. Revise antes de publicar.
-- Páginas referem-se à posição no PDF fornecido, não à paginação impressa.
-- Execute após configurar public.questions, usando uma conta administrativa.
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
const files=new Map(), ids=new Set(), statements=new Set(), allRows=[], index=[];
const seedDir=path.resolve(__dirname,'../../supabase/seeds');
for (const ch of chapters) {
  assert.equal(ch.concepts.length,10,`Capítulo ${ch.chapter}`);
  assert.equal(new Set(ch.concepts.map(c=>norm(c.answer))).size,10);
  const name=`guedes_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions=Array.from({length:20},(_,i)=>({value:i%5,h:hash(`guedes:${ch.chapter}:answer:${i}`)}))
    .sort((a,b)=>a.h.localeCompare(b.h)).map(x=>x.value);
  const counts=Array(5).fill(0),rows=[];
  const entries=ch.concepts.flatMap((c,i)=>[
    {...c,conceptIndex:i,mode:'conceito',statement:`Segundo o estudo de “${ch.title}” em Guedes, qual alternativa corresponde à descrição: “${c.definition}”?`},
    {...c,conceptIndex:i,mode:'aplicação',statement:c.application},
  ]);
  const questions=entries.map((e,i)=>{
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id=uuid(`fragata:guedes:uml2:3ed:2018:chapter:${ch.chapter}:question:${i+1}`);
    assert.ok(!ids.has(id)); ids.add(id);
    const excluded=new Set([e.conceptIndex]);
    for(const group of overlaps[ch.chapter]??[]) if(group.includes(e.conceptIndex)) for(const n of group) excluded.add(n);
    const pool=ch.concepts.map((c,j)=>({s:c.answer,j,h:hash(`${id}:distractor:${j}`)}))
      .filter(c=>!excluded.has(c.j)).sort((a,b)=>a.h.localeCompare(b.h));
    assert.ok(pool.length>=4,`Distratores insuficientes: ${ch.chapter}/${e.answer}`);
    const options=pool.slice(0,4).map(c=>c.s),correct=positions[i];
    options.splice(correct,0,e.answer);counts[correct]++;
    assert.equal(new Set(options.map(norm)).size,5);
    const ref=refs.get(e.section),pages=ref.page===ref.end?String(ref.page):`${ref.page}–${ref.end}`;
    const section=e.section.includes('.')?`, seção ${e.section}`:'';
    const source=`${bibliography} Capítulo ${ch.chapter}: ${ch.title}${section}, páginas ${pages} do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.`;
    const explanation=`${e.answer}: ${e.definition.charAt(0).toLocaleLowerCase('pt-BR')}${e.definition.slice(1)}`;
    const q={id,chapter:ch.chapter,section:e.section,pages,editorial_mode:e.mode,concept:e.answer,
      year:null,question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,
      topic:'Engenharia de Software',difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,
      options,correct_option:correct,explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,
      quote(q.topic),quote(q.difficulty),quote(q.statement),quote(JSON.stringify(options))+'::jsonb',
      correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]);allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# Guedes — capítulo ${ch.chapter}: ${ch.title}

20 questões originais: dez de identificação e dez de aplicação dos conceitos ou regras selecionados. Contexto: UML 2.5, 3ª edição, 2018. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/${name}.sql) · [Índice e instruções](guedes_README.md)

`+questions.map(q=>`## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}

${md(q.statement)}

${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${md(s)}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${md(q.explanation)}

**Fonte:** ${q.source}
`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${ch.start}–${ch.end} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
assert.equal(ids.size,360);assert.equal(statements.size,360);
for(const file of fs.readdirSync(__dirname).filter(s=>/^(?:date|deitel|governanca|uml)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for(const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) {
    assert.ok(!ids.has(q.id),file);
    assert.ok(!statements.has(norm(q.statement)),`Enunciado já existente: ${q.statement}`);
  }
}
files.set(path.join(seedDir,'guedes_completo.sql'),sql(allRows,'Capítulos 1 a 18 — 360 questões.'));
files.set(path.join(__dirname,'guedes_README.md'),`# Questões — UML 2: uma abordagem prática

**360 questões originais, 20 por capítulo, cobrindo os 18 capítulos do PDF recebido.** Fonte: ${bibliography} ISBN 978-85-7522-644-5. A edição baseia-se na UML 2.5.

## Importação

Use o [SQL único](../../supabase/seeds/guedes_completo.sql) ou os SQLs por capítulo, após configurar public.questions, com acesso administrativo. As duas formas usam os mesmos IDs. ON CONFLICT (id) DO NOTHING preserva registros e edições já existentes. O lote tem IDs próprios e pode coexistir com o livro UML: guia do usuário.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Os gabaritos usam índices de 0 a 4. A geração e a validação são locais; nada foi enviado ao Supabase.

## Seleção e referências

Em cada capítulo foram selecionados dez conceitos ou regras, cada qual trabalhado em uma questão de identificação e outra de aplicação. É uma seleção representativa, sem cobertura de cada parágrafo. O capítulo 17 aborda regras do estudo de caso fictício PizzaNet. As situações de aplicação são originais; não reproduzem os exercícios propostos ou suas soluções.

Os capítulos curtos, especialmente o capítulo 15, revisitam seus poucos conceitos em situações distintas. Os pares de identificação e aplicação são intencionais; evite apresentá-los juntos se isso prejudicar uma avaliação. As dificuldades Fácil e Médio são classificações editoriais preliminares. Revise os enunciados, distratores e gabaritos antes de publicar.

O PDF tem 657 páginas físicas, incluindo publicidade ao final. O conteúdo dos capítulos ocupa as páginas 18 a 647; a publicidade foi excluída. As referências indicam posições físicas do PDF, sem correspondência presumida com a paginação impressa. Quando há seção numerada, ela é indicada junto de seu intervalo de apoio. Intervalos podem compartilhar a página em que uma seção termina e outra começa.

O texto segue o contexto da edição recebida; não pressupõe que versões e ferramentas citadas continuem atuais. Os nomes <<instanceOf>>, <<merge>> e outras convenções são tratados conforme apresentados no livro. As questões são originais de estudo e não são questões oficiais do CP-T. O PDF e a extração integral não são incluídos no repositório.

## Capítulos

Cada capítulo tem 20 questões e cinco alternativas por questão.

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
${index.join('\n')}

## Manutenção e validação

Edite [guedes_conceitos.txt](guedes_conceitos.txt), com quatro campos por linha: referência de seção ou capítulo, resposta, definição e pergunta de aplicação. O mapa de capítulos e seções está em [guedes_metadata.json](guedes_metadata.json). O gerador mantém exclusões entre alternativas próximas para reduzir ambiguidades.

\`\`\`sh
node data/questions/generate-guedes.cjs
node data/questions/generate-guedes.cjs --check
node data/questions/validate-guedes.cjs
\`\`\`

Os checks conferem contagens, referências, cinco alternativas distintas, enunciados únicos, IDs próprios e quatro respostas de cada letra por capítulo. O validador compara os campos importáveis de todos os JSONs com os SQLs e verifica reimportação, preservação de edições e colisões com os lotes de Date, Deitel, Governança e Booch/Rumbaugh/Jacobson. A execução SQL usa uma adaptação sintática em SQLite na memória: não representa execução ou validação do servidor PostgreSQL/Supabase. Esses checks não substituem revisão pedagógica.
`);
for(const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file);assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:18,questions:360,
  uniqueIds:ids.size,artifacts:files.size,published:false}));
