// Extrai apenas o mapa bibliográfico do sumário; o texto integral fica no diretório temporário.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const pages = fs.readFileSync(path.join(os.tmpdir(), 'fragata-governanca-full.txt'), 'utf8').split('\f');
const titles = [
  'Governança de TI', 'Governança Corporativa e Regulamentações de Compliance',
  'O Modelo de Governança de TI', 'Os Papéis da Governança de TI na Organização',
  'Modelos de Melhores Práticas e o Modelo de Governança de TI',
  'Modelos Abrangentes de Governança de TI', 'Modelos para Gerenciamento de Serviços de TI',
  'Modelos para Processos de Software', 'Modelos para Gerenciamento de Projetos',
  'Modelos para Segurança da Informação – ISO/IEC 27001 e 27002',
  'Modelos para Gerenciamento de Sourcing', 'Modelos para Disciplinas Complementares à Governança de TI',
  'Extensões e Derivações do Conceito de Governança de TI', 'Novas Tecnologias e a Governança de TI',
  'Governança de TI para Pequenas e Médias Empresas', 'Governança de TI no Governo',
  'Como Implantar a Governança de TI', 'Estudos de Casos',
];
const starts = [7,25,39,190,194,197,225,302,344,394,415,445,505,547,571,579,596,612,617];
const chapters = titles.map((title, i) => ({ chapter: i+1, title, start: starts[i]+21, end: starts[i+1]+20, sections: [] }));
const toc = pages.slice(11,21).join('\n');
for (const m of toc.matchAll(/^\s*(\d+(?:\.\d+)+)\s+(.+?)\.{2,}\s*(\d+)\s*$/gm)) {
  const chapter = chapters[Number(m[1].split('.')[0])-1];
  assert.ok(chapter);
  chapter.sections.push({section:m[1], title:m[2].trim(), page:Number(m[3])+21});
}
for (const chapter of chapters) {
  // Seções sem linha única no sumário são adicionadas a partir dos títulos no corpo.
  if (chapter.chapter === 1) chapter.sections.push(
    {section:'1.4.2', title:'Decisão, Compromisso, Priorização e Alocação de Recursos', page:42},
    {section:'1.4.3', title:'Estrutura, Processos, Organização e Gestão', page:43});
  if (chapter.chapter === 14) chapter.sections.push(
    {section:'14.1.2', title:'Perguntas dos executivos sobre computação em nuvem', page:571},
    {section:'14.4.2', title:'Perguntas dos executivos sobre BYOD e sua gestão', page:589});
  if (chapter.chapter === 16) chapter.sections.push(
    {section:'16.4', title:'O papel do Departamento de Segurança da Informação e Comunicações do GSI', page:607});
  chapter.sections.sort((a,b)=>a.page-b.page || a.section.localeCompare(b.section, 'en', {numeric:true}));
  for (const section of chapter.sections) {
    const later = chapter.sections.find(s=>s.page>section.page && !s.section.startsWith(section.section+'.'));
    // A seção seguinte frequentemente começa no meio da página: os intervalos se sobrepõem.
    section.end = later ? Math.min(later.page, chapter.end) : chapter.end;
    assert.ok(section.page>=chapter.start && section.end<=chapter.end);
  }
}
fs.writeFileSync(path.join(__dirname,'governanca_metadata.json'), JSON.stringify(chapters,null,2)+'\n');
console.log(JSON.stringify({chapters:chapters.length, sections:chapters.reduce((n,c)=>n+c.sections.length,0), pdfOffset:21}));
