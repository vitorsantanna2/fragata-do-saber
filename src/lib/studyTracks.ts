import { conciseTopic, normalizeSearchText } from './utils'

export type TrackStep = {
  id: string
  title: string
  goals: string[]
  references: string[]
  topics: string[]
}
export type StudyTrack = {
  id: string
  examId: string
  title: string
  description: string
  steps: TrackStep[]
}
export type TrackStatus = 'studying' | 'completed'
export type TrackProgress = Record<string, TrackStatus>

export const trackProgressKey = (trackId: string, stepId: string) => `${trackId}/${stepId}`
export const programmingStepKey = 'cpt-2026-dev/programacao'
export const previousProgrammingKeys = ['cpt-2026-dev/python', 'cpt-2026-dev/java']
export const mergedTrackSteps = [
  { key: programmingStepKey, previousKeys: previousProgrammingKeys },
  { key: 'cpt-2026-dev/engenharia-rest', previousKeys: ['cpt-2026-dev/engenharia', 'cpt-2026-dev/apis'] },
  { key: 'cpt-2026-dados/relacional-transacoes', previousKeys: ['cpt-2026-dados/relacional', 'cpt-2026-dados/transacoes'] },
]
export const canonicalTrackStepKey = (key: string) => mergedTrackSteps.find((group) => group.previousKeys.includes(key))?.key ?? key

// IDs são persistentes: alterar a ordem ou o título não deve apagar o progresso.
// Organização pedagógica da bibliografia enviada pelo usuário (CP-T/2026, pp. 113–114).
// Os tópicos vinculam rótulos do banco; não representam uma transcrição do programa oficial.
export const studyTracks: StudyTrack[] = [
  {
    id: 'cpt-2026-infra', examId: 'cp-t-informatica', title: 'Infraestrutura e segurança',
    description: 'Da organização do computador à comunicação e proteção dos sistemas.',
    steps: [
      { id: 'arquitetura', title: 'Organização de computadores', goals: ['Revise representação binária, CPU, instruções e hierarquia de memória.', 'Compare memória cache, memória principal e armazenamento com exemplos.'], references: ['Monteiro — Introdução à Organização de Computadores, 5ª ed., 2007.', 'Tanenbaum e Austin — Organização Estruturada de Computadores, 6ª ed., 2013.'], topics: ['Memória cache', 'Operações binárias', 'Organização de computadores', 'Arquitetura de computadores'] },
      { id: 'so', title: 'Sistemas operacionais e Linux na prática', goals: ['Estude processos, threads, escalonamento, memória e sistemas de arquivos.', 'Explique exclusão mútua e as condições de deadlock sem consultar o material.', 'Pratique permissões, usuários, processos, comandos e redirecionamentos em um ambiente de estudo.', 'Monte exemplos de pipelines e explique o efeito de umask.'], references: ['Machado e Maia — Arquitetura de Sistemas Operacionais, 5ª ed., 2013.', 'Silberschatz, Galvin e Gagne — Fundamentos de Sistemas Operacionais, 9ª ed., 2015.', 'Gleydson Mazioli da Silva — Guia Foca GNU/Linux, níveis Iniciante e Intermediário, 2020.', 'Bryan Ward — Como o Linux Funciona, 2015.'], topics: ['Sistemas operacionais', 'Sistemas operacionais / deadlock', 'Escalonamento de processos', 'Exclusão mútua', 'Linux', 'Linux / redirecionamento', 'Linux / umask', 'Linux / administração'] },
      { id: 'redes', title: 'Redes de computadores', goals: ['Relacione as camadas OSI e TCP/IP aos protocolos e serviços.', 'Revise endereçamento, transporte, roteamento, filas e comutação.'], references: ['Kurose — Redes de Computadores e a Internet, 8ª ed., 2021.', 'Tanenbaum e Wetherall — Redes de Computadores, 6ª ed., 2021.'], topics: ['Modelo OSI', 'Redes de computadores', 'Redes / filas', 'Redes / protocolos', 'Redes / circuitos virtuais e datagramas'] },
      { id: 'seguranca', title: 'Segurança e privacidade', goals: ['Compare criptografia simétrica, assimétrica, hashes e autenticação.', 'Relacione ameaças de rede e vulnerabilidades web às medidas de proteção.', 'Leia os requisitos do PPSI e produza um checklist de estudo para aplicações web.'], references: ['Stallings — Criptografia e Segurança de Redes, 6ª ed., 2014.', 'PPSI — Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web, versão 2.0, 2022.'], topics: ['Segurança da informação', 'IPSec', 'Segurança / man-in-the-middle', 'Funções hash / MD5', 'Programação segura / banco de dados', 'Programação segura / configuração'] },
    ],
  },
  {
    id: 'cpt-2026-dev', examId: 'cp-t-informatica', title: 'Programação e engenharia de software',
    description: 'Construa a base de algoritmos e avance para modelagem e desenvolvimento.',
    steps: [
      { id: 'algoritmos', title: 'Algoritmos e estruturas de dados', goals: ['Implemente buscas, ordenações, listas, pilhas, filas e árvores.', 'Compare custos de tempo e memória e simule percursos de árvores no papel.'], references: ['Borin — Estrutura de Dados, 1ª ed., 2020.', 'Szwarcfiter e Markenzon — Estruturas de Dados e seus Algoritmos, 3ª ed., 2010.'], topics: ['Algoritmos e Estrutura de Dados','Estrutura de dados', 'Estruturas de dados', 'Árvores binárias', 'Algoritmos / ordenação', 'Árvores / percursos'] },
      { id: 'programacao', title: 'Lógica de programação, Python e Java', goals: ['Pratique tipos, controle de fluxo, funções, coleções e manipulação de strings.', 'Resolva pequenos problemas em Python e explique o resultado de cada trecho de código.', 'Revise classes, herança, interfaces, exceções e polimorfismo em Java.', 'Compare identidade e igualdade de objetos e acompanhe estruturas de controle.'], references: ['Menezes — Introdução à Programação com Python, 3ª ed., 2019.', 'Deitel e Deitel — Java como Programar, 10ª ed., 2016.', 'Sebesta — Conceitos de Linguagens de Programação, 11ª ed., 2018.'], topics: ['Linguagem de Programação', 'Linguagens de programação', 'Python', 'Python / strings', 'Python / redes', 'Java', 'Java / orientação a objetos', 'Java / estruturas de controle', 'Java / comparação de objetos', 'Orientação a objetos / polimorfismo', 'Lógica e Python', 'Java e orientação a objetos'] },
      { id: 'engenharia-rest', title: 'Engenharia de software e APIs REST', goals: ['Relacione requisitos, processos, arquitetura, manutenção e qualidade.', 'Compare níveis e técnicas de testes e produza exemplos de casos de teste.', 'Projete recursos, rotas e operações HTTP para um serviço simples.', 'Revise códigos de resposta, contratos, idempotência e tratamento de erros.'], references: ['Pressman — Engenharia de Software, 9ª ed., 2021.', 'Sommerville — Engenharia de Software, 10ª ed., 2019.', 'Valente — Engenharia de Software Moderna, 2020.', 'Saudate — APIs REST: Seus Serviços Prontos para o Mundo Real, 2021.'], topics: ['Engenharia de Software', 'Testes de software', 'CMMI', 'APIs REST', 'REST', 'Serviços web', 'Engenharia e qualidade de software'] },
      { id: 'uml', title: 'UML e padrões de projeto', goals: ['Modele um pequeno sistema com diagramas de classes, casos de uso e sequência.', 'Compare padrões de projeto pelo problema que resolvem e suas consequências.'], references: ['Booch, Rumbaugh e Jacobson — UML: Guia do Usuário, 2ª ed., 2012.', 'Guedes — UML 2: Uma Abordagem Prática, 3ª ed., 2018.', 'Guerra — Design Patterns com Java, 2014.'], topics: ['UML', 'Modelagem UML / classes', 'Padrões de Projeto', 'Gerenciamento de Projetos'] },
    ],
  },
  {
    id: 'cpt-2026-dados', examId: 'cp-t-informatica', title: 'Banco de dados, análise e IA',
    description: 'Do modelo relacional à análise de dados e inteligência artificial.',
    steps: [
      { id: 'relacional-transacoes', title: 'Modelagem relacional, SQL, transações e recuperação', goals: ['Revise modelo relacional, chaves, dependências e normalização.', 'Resolva consultas com junções, agrupamentos, subconsultas e álgebra relacional.', 'Explique as propriedades ACID e os problemas de concorrência.', 'Compare mecanismos de recuperação e pratique cenários de falhas.'], references: ['Date — Introdução a Sistemas de Bancos de Dados, Campus, 2004.', 'Elmasri e Navathe — Sistemas de Banco de Dados, 7ª ed., 2019.'], topics: ['Banco de Dados', 'SQL / agregação', 'SQL / consultas', 'Álgebra relacional', 'Banco de dados / recuperação', 'Transações', 'Controle de concorrência', 'Modelagem relacional e SQL', 'Transações e recuperação'] },
      { id: 'dw', title: 'Data warehouse e Big Data', goals: ['Compare modelos transacionais e dimensionais, ETL e operações OLAP.', 'Classifique dados estruturados e não estruturados e relacione técnicas de Big Data.'], references: ['Machado — Tecnologia e Projeto de Data Warehouse, 6ª ed., 2013.', 'Marquesone — Big Data: Técnicas e Tecnologias para Extração de Valor dos Dados, 2017.'], topics: ['OLAP / Data Warehouse', 'Dados estruturados e não estruturados', 'Big Data', 'Gestão de metadados', 'DAMA-DMBOK / gestão de dados'] },
      { id: 'ia', title: 'Ciência de dados e inteligência artificial', goals: ['Revise preparação de dados, estatística e avaliação de modelos.', 'Diferencie busca, representação de conhecimento e aprendizado de máquina.', 'Explique o papel do gradiente descendente com um exemplo simples.'], references: ['Grus — Data Science do Zero, 2016.', 'Russell e Norvig — Inteligência Artificial, Elsevier, 2013.'], topics: ['Inteligência artificial', 'Ciência de dados', 'Aprendizado de máquina', 'Gradiente descendente'] },
    ],
  },
  {
    id: 'cpt-2026-gestao', examId: 'cp-t-informatica', title: 'Governança, serviços e projetos',
    description: 'Conecte a estratégia de TI à gestão dos serviços e dos projetos.',
    steps: [
      { id: 'governanca', title: 'Governança de TI', goals: ['Relacione estratégia, responsabilidades, indicadores e processos de TI.', 'Compare governança e gestão e revise os conceitos de COBIT apresentados na referência.'], references: ['Fernandes e Abreu — Implantando a Governança de TI, 4ª ed., 2014.'], topics: ['Governança de TI', 'COBIT 5', 'Estruturas organizacionais'] },
      { id: 'servicos', title: 'Gerenciamento de serviços', goals: ['Mapeie os processos de serviços e suas relações conforme a edição da referência.', 'Compare incidentes, problemas, mudanças e níveis de serviço com exemplos.'], references: ['Fernandes e Abreu — Implantando a Governança de TI, 4ª ed., 2014.'], topics: ['ITIL / gerenciamento de serviços', 'Gerenciamento de serviços', 'ITIL'] },
      { id: 'projetos', title: 'Gerenciamento de projetos', goals: ['Revise escopo, cronograma, custos, riscos, comunicação e partes interessadas.', 'Calcule caminho crítico e folgas e analise situações de negociação.'], references: ['Heldman — Gerência de Projetos: Guia para o Exame Oficial do PMI, 7ª ed., 2015.'], topics: ['Gerenciamento de projetos', 'Caminho crítico', 'Gerenciamento de projetos / negociação', 'Gerenciamento de projetos / caminho crítico'] },
    ],
  },
]

export function matchesTrackStep(question: { exam: string; subject: string; topic: string | null }, step: TrackStep) {
  return question.exam === 'CP-T' && question.subject === 'Informática' && !!question.topic &&
    step.topics.some((topic) => normalizeSearchText(conciseTopic(topic)) === normalizeSearchText(conciseTopic(question.topic!)))
}

export function parseTrackProgress(value: unknown): TrackProgress {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  let previous = value as Record<string, unknown>
  for (const group of mergedTrackSteps) {
    if (previous[group.key] === undefined && group.previousKeys.some((key) => previous[key] === 'studying' || previous[key] === 'completed')) {
      previous = { ...previous, [group.key]: group.previousKeys.every((key) => previous[key] === 'completed') ? 'completed' : 'studying' }
    }
  }
  const linuxKey = trackProgressKey('cpt-2026-infra', 'linux')
  const soKey = trackProgressKey('cpt-2026-infra', 'so')
  // Migra a etapa antiga sem considerar concluída a união de dois estudos incompletos.
  if (previous[linuxKey] === 'studying' || previous[linuxKey] === 'completed') {
    previous = { ...previous, [soKey]: previous[soKey] === 'completed' && previous[linuxKey] === 'completed' ? 'completed' : 'studying' }
  }
  const validKeys = new Set(studyTracks.flatMap((track) => track.steps.map((step) => trackProgressKey(track.id, step.id))))
  return Object.fromEntries(Object.entries(previous).filter(([key, status]) => validKeys.has(key) && (status === 'studying' || status === 'completed'))) as TrackProgress
}
