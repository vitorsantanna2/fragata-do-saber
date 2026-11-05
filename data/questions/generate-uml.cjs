// node data/questions/generate-uml.cjs [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const check = process.argv.includes('--check');
const chapterData = [
  [30,'Por que fazer a Modelagem?'],[45,'Introdução à UML'],[81,'Hello, World!'],
  [94,'Classes'],[112,'Relacionamentos'],[132,'Mecanismos'],[152,'Diagramas'],
  [174,'Diagramas de Classes'],[193,'Classes Avançadas'],[216,'Relacionamentos Avançados'],
  [242,'Interfaces, Tipos e Funções'],[258,'Pacotes'],[274,'Instâncias'],[288,'Diagramas de Objetos'],
  [299,'Componentes'],[320,'Interações'],[342,'Casos de Uso'],[362,'Diagramas de Casos de Uso'],
  [376,'Diagramas de Interação'],[401,'Diagramas de Atividades'],[429,'Eventos e Sinais'],
  [443,'Máquinas de Estados'],[476,'Processos e Threads'],[494,'Tempo e Espaço'],
  [506,'Diagramas de Estados'],[523,'Artefatos'],[538,'Implantação'],[549,'Colaborações'],
  [568,'Padrões e Frameworks'],[585,'Diagramas de Artefatos'],[605,'Diagramas de Implantação'],
  [621,'Sistemas e Modelos'],[636,'Aplicando a UML'],
];
const chapters = chapterData.map(([page,title],i)=>({chapter:i+1,title,start:page+1,
  end:i===32?641:chapterData[i+1][0]-1,concepts:[]}));
const norm = s=>s.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('pt-BR');
for (const [i,line] of fs.readFileSync(path.join(__dirname,'uml_conceitos.txt'),'utf8').split(/\r?\n/).entries()) {
  if (!line.trim() || line.startsWith('#')) continue;
  const fields=line.split('|').map(s=>s.trim());
  assert.equal(fields.length,4,`Linha ${i+1}`);
  const [chapter,answer,definition,application]=fields;
  assert.ok(fields.every(s=>s && !s.includes('\uFFFD')));
  assert.ok(chapters[Number(chapter)-1],chapter);
  chapters[Number(chapter)-1].concepts.push({answer,definition,application});
}
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
function uuid(name) {
  const namespace=Buffer.from('6ba7b8109dad11d180b400c04fd430c8','hex');
  const b=crypto.createHash('sha1').update(namespace).update(name).digest().subarray(0,16);
  b[6]=(b[6]&15)|80; b[8]=(b[8]&63)|128;
  const h=b.toString('hex');
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
// Evita oferecer como distratores rótulos que também poderiam descrever o caso.
const overlaps = {
  3:[[0,6],[1,4],[5,6]],
  6:[[1,4,7],[2,8]],
  8:[[0,8],[1,6],[4,9]],
  11:[[0,8,9],[1,3],[2,4],[5,8]],
  12:[[0,2],[1,5],[8,9]],
  13:[[0,1],[3,4],[6,7]],
  14:[[0,1,7],[1,8],[2,3],[4,9]],
  15:[[0,8,9],[3,9],[4,7]],
  16:[[0,2],[4,5],[3,9]],
  17:[[0,2],[3,5]],
  18:[[0,7],[1,6],[8,9]],
  19:[[0,9],[1,2]],
  21:[[1,8],[2,9]],
  23:[[0,1],[2,3]],
  24:[[0,8],[1,9]],
  25:[[0,9],[1,9],[2,9],[3,7],[4,8]],
  26:[[0,2,3,4,5],[6,8],[7,9]],
  27:[[0,3,4,7],[1,5,9]],
  28:[[0,8],[1,3],[2,3],[4,5],[0,7]],
  29:[[0,1,2],[3,4],[4,5]],
  30:[[0,1,2,3,4],[5,8],[6,8]],
  31:[[0,6],[1,3],[2,6],[4,5,6],[3,9]],
  32:[[0,1],[2,3]],
  33:[[0,1,3,4,5],[3,6],[6,7],[8,9]],
};
const quote=s=>"'"+s.replaceAll("'","''")+"'";
const escapeMd=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const header=`-- Questões originais: Booch, Rumbaugh e Jacobson. UML: guia do usuário. Elsevier, 2012.
-- Tradução da 2ª edição; contexto do livro: UML 2.0.
-- Não são questões oficiais nem exercícios transcritos do livro.
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
  const name=`uml_capitulo_${String(ch.chapter).padStart(2,'0')}`;
  const positions=Array.from({length:20},(_,i)=>({value:i%5,h:hash(`uml:${ch.chapter}:answer:${i}`)}))
    .sort((a,b)=>a.h.localeCompare(b.h)).map(x=>x.value);
  const counts=Array(5).fill(0), rows=[];
  const entries=ch.concepts.flatMap((c,i)=>[
    {...c,conceptIndex:i,mode:'conceito',statement:`No capítulo “${ch.title}”, qual alternativa corresponde à descrição: “${c.definition}”?`},
    {...c,conceptIndex:i,mode:'aplicação',statement:c.application},
  ]);
  const questions=entries.map((e,i)=>{
    assert.ok(!statements.has(norm(e.statement)),e.statement); statements.add(norm(e.statement));
    const id=uuid(`fragata:booch-rumbaugh-jacobson:uml:2ed:2012:chapter:${ch.chapter}:question:${i+1}`);
    assert.ok(!ids.has(id)); ids.add(id);
    const excluded=new Set([e.conceptIndex]);
    for (const group of overlaps[ch.chapter]??[]) if(group.includes(e.conceptIndex)) for(const n of group) excluded.add(n);
    const pool=ch.concepts.map((c,j)=>({s:c.answer,j,h:hash(`${id}:distractor:${j}`)}))
      .filter(c=>!excluded.has(c.j)).sort((a,b)=>a.h.localeCompare(b.h));
    assert.ok(pool.length>=4,`Distratores insuficientes: ${ch.chapter}/${e.answer}`);
    const options=pool.slice(0,4).map(c=>c.s);
    const correct=positions[i]; options.splice(correct,0,e.answer); counts[correct]++;
    assert.equal(new Set(options.map(norm)).size,5);
    const pages=`${ch.start}–${ch.end}`;
    const source=`BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo ${ch.chapter}: ${ch.title}, páginas ${pages} do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.`;
    const explanation=`${e.answer}: ${e.definition.charAt(0).toLocaleLowerCase('pt-BR')}${e.definition.slice(1)}`;
    const q={id,chapter:ch.chapter,section:null,pages,editorial_mode:e.mode,concept:e.answer,year:null,
      question_type:'bibliography',subject:'Informática',exam:'CP-T',question_number:i+1,topic:'Engenharia de Software',
      difficulty:e.mode==='conceito'?'Fácil':'Médio',statement:e.statement,options,correct_option:correct,
      explanation,source,is_annulled:false,is_published:false};
    rows.push('('+[quote(id),'NULL',quote(q.question_type),quote(q.subject),quote(q.exam),i+1,
      quote(q.topic),quote(q.difficulty),quote(q.statement),quote(JSON.stringify(options))+'::jsonb',
      correct,quote(explanation),quote(source),'false','false'].join(', ')+')');
    return q;
  });
  assert.deepEqual(counts,[4,4,4,4,4]); allRows.push(...rows);
  files.set(path.join(__dirname,`${name}.json`),JSON.stringify(questions,null,2)+'\n');
  files.set(path.join(seedDir,`${name}.sql`),sql(rows,`Capítulo ${ch.chapter}: ${ch.title} — 20 questões.`));
  files.set(path.join(__dirname,`${name}.md`),`# UML — capítulo ${ch.chapter}: ${ch.title}

20 questões originais: dez de identificação conceitual e dez de aplicação dos mesmos conceitos. Contexto: UML 2.0, edição recebida. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/${name}.sql) · [Índice e instruções](uml_README.md)

`+questions.map(q=>`## ${q.question_number}. ${q.difficulty} — ${q.editorial_mode}

${escapeMd(q.statement)}

${q.options.map((s,j)=>`${String.fromCharCode(65+j)}) ${escapeMd(s)}`).join('\n\n')}

**Gabarito: ${String.fromCharCode(65+q.correct_option)}.** ${escapeMd(q.explanation)}

**Fonte:** ${q.source}
`).join('\n'));
  index.push(`| ${ch.chapter} | ${ch.title} | ${pagesFor(ch)} | [Revisar](${name}.md) | [SQL](../../supabase/seeds/${name}.sql) |`);
}
function pagesFor(ch) { return `${ch.start}–${ch.end}`; }
assert.equal(ids.size,660); assert.equal(statements.size,660);
for (const file of fs.readdirSync(__dirname).filter(s=>/^(?:date|deitel|governanca)_capitulo_\d+(?:_piloto)?\.json$/.test(s))) {
  for (const q of JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf8'))) assert.ok(!ids.has(q.id),file);
}
files.set(path.join(seedDir,'uml_completo.sql'),sql(allRows,'Capítulos 1 a 33 — 660 questões.'));
files.set(path.join(__dirname,'uml_metadata.json'),JSON.stringify(chapters.map(ch=>({chapter:ch.chapter,
  title:ch.title,start:ch.start,end:ch.end})),null,2)+'\n');
files.set(path.join(__dirname,'uml_README.md'),`# Questões — UML: guia do usuário

**660 questões originais, 20 por capítulo, para os 33 capítulos do PDF fornecido (757 páginas).** Em cada capítulo foram selecionados dez conceitos, cada qual trabalhado em uma questão de identificação e outra de aplicação. É uma seleção representativa para estudo, sem pretensão de cobrir todo o conteúdo. Os apêndices e o glossário não têm lotes próprios.

## Importação

Use o [SQL único](../../supabase/seeds/uml_completo.sql) no SQL Editor do Supabase após configurar public.questions, com acesso administrativo, ou os SQLs por capítulo. As duas formas usam os mesmos IDs. ON CONFLICT (id) DO NOTHING preserva registros e alterações já existentes.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. O índice do gabarito varia de 0 a 4. A geração e a validação são locais; nenhum registro foi enviado ao Supabase.

## Fonte e contexto

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: guia do usuário**. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Elsevier, 2012, 12ª reimpressão; tradução de The Unified Modeling Language User Guide, 2nd ed. O prefácio da edição recebida trata da **UML 2.0**.

As páginas são posições físicas no PDF recebido, sem correspondência presumida com a paginação impressa. Cada referência informa o intervalo do capítulo como apoio, e não uma citação pontual de frase. O capítulo 3 utiliza o exemplo histórico de applet como material de modelagem; isso não constitui recomendação de plataforma atual. No capítulo 24, as funções temporais sugeridas pelos autores são tratadas como convenções auxiliares, não como funções oficiais da UML.

As questões e explicações são originais, sem transcrição dos exercícios do livro e sem atribuição de caráter oficial ao CP-T. As dificuldades Fácil e Médio são classificações editoriais iniciais. Revise a precisão dos enunciados, a plausibilidade dos distratores e a dificuldade antes da publicação. Os pares de questões revisitam deliberadamente o mesmo conceito; evite apresentá-los juntos se a repetição prejudicar uma avaliação.

## Capítulos

Todos têm 20 questões, cinco alternativas e uma resposta correta.

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
${index.join('\n')}

## Manutenção e validação

Edite [uml_conceitos.txt](uml_conceitos.txt), cujas linhas contêm capítulo, resposta, definição e pergunta de aplicação. O [gerador](generate-uml.cjs) contém o mapa de capítulos e as exclusões entre alternativas semanticamente próximas. Os arquivos JSON e Markdown por capítulo e todos os SQLs são derivados desses dados.

\`\`\`sh
node data/questions/generate-uml.cjs
node data/questions/generate-uml.cjs --check
node data/questions/validate-uml.cjs
\`\`\`

O gerador confere contagens, cinco alternativas distintas, enunciados únicos, IDs fixos e quatro gabaritos de cada letra por capítulo. O validador compara todos os campos importáveis dos JSONs com os SQLs, verifica reimportação e preservação de edições, e combina os IDs com os lotes de Date, Deitel e Governança. Ele usa uma adaptação sintática do SQL em SQLite na memória; não valida a execução do servidor PostgreSQL/Supabase. Checks estruturais não substituem revisão pedagógica.

O PDF e sua extração integral não são incluídos no repositório.
`);
for (const [file,content] of files) {
  assert.ok(!content.includes('\uFFFD'),file);
  assert.ok(!/[\t ]+$/m.test(content),file);
  if(check) assert.equal(fs.readFileSync(file,'utf8'),content,file);
  else {fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,content,'utf8');}
}
console.log(JSON.stringify({mode:check?'check':'generate',chapters:33,questions:660,
  uniqueIds:ids.size,artifacts:files.size,published:false}));
