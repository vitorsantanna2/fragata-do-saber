# Date — capítulo 2: Arquitetura de sistemas de bancos de dados

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_02.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 2.2

Na arquitetura ANSI/SPARC, qual nível apresenta a visão global lógica dos dados?

A) De comunicação.

B) De dispositivos.

C) Conceitual.

D) Externo.

E) Interno.

**Gabarito: C.** O nível conceitual representa o conteúdo informacional da comunidade de usuários.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.2, páginas 82–86 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 2.2

Relatórios de setores diferentes apresentam subconjuntos distintos do mesmo cadastro. Isso corresponde principalmente ao nível:

A) Interno.

B) Externo.

C) Físico do dispositivo.

D) De recuperação de mídia.

E) De comunicação.

**Gabarito: B.** As visões externas representam as necessidades de usuários ou grupos específicos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.2, páginas 82–86 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 2.5

A descrição de registros armazenados e caminhos de acesso pertence principalmente ao esquema:

A) De apresentação.

B) De formulários.

C) De autorização do usuário final.

D) Externo.

E) Interno.

**Gabarito: E.** O esquema interno descreve a organização de armazenamento, sem ser uma interface de apresentação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.5, páginas 93–94 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 2.6

Alterar a organização armazenada preservando o esquema conceitual exige ajustar qual correspondência?

A) Usuário/senha.

B) Aplicação/rede.

C) Externo/externo, exclusivamente.

D) Terminal/relatório.

E) Conceitual/interno.

**Gabarito: E.** Esse mapeamento isola mudanças internas e contribui para a independência física.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.6, páginas 95–96 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 2.6

Preservar uma visão de usuário após reestruturar o esquema conceitual relaciona-se à independência:

A) De autenticação.

B) De energia.

C) De mídia, exclusivamente.

D) De transações.

E) Lógica.

**Gabarito: E.** Mapeamentos externos/conceituais podem proteger aplicações de mudanças lógicas compatíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.6, páginas 95–96 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 2.3

A linguagem hospedeira de uma aplicação contém chamadas para manipular dados. Qual papel cabe à sublinguagem de dados?

A) Expressar operações sobre o banco.

B) Executar apenas cálculos locais.

C) Definir o protocolo elétrico da rede.

D) Substituir o sistema operacional.

E) Converter discos em memória principal.

**Gabarito: A.** A sublinguagem trata dos dados; a linguagem hospedeira atende às demais tarefas da aplicação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.3, páginas 87–90 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 2.4

Um analista inclui endereços físicos de disco na descrição lógica global. Qual avaliação é adequada?

A) Descreveu somente uma visão externa.

B) Misturou decisões internas com o esquema conceitual.

C) Aumentou necessariamente a independência física.

D) Transformou o esquema em linguagem hospedeira.

E) Eliminou a necessidade de mapeamentos.

**Gabarito: B.** O esquema conceitual abstrai detalhes de armazenamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.4, páginas 91–92 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 2.7

Quem implementa tecnicamente controles definidos pela política de administração de dados?

A) O gerente de comunicações, exclusivamente.

B) O fabricante do terminal.

C) Somente o usuário final.

D) O DBA.

E) O compilador da linguagem hospedeira.

**Gabarito: D.** O DBA traduz políticas em esquemas, controles e procedimentos técnicos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.7, páginas 97–99 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 2.7

Planejar restauração e acompanhar desempenho são atribuições típicas de qual função?

A) Modelagem de telas, exclusivamente.

B) Administração do banco de dados.

C) Digitação de formulários.

D) Transporte de mensagens, exclusivamente.

E) Autoria de relatórios, exclusivamente.

**Gabarito: B.** O DBA cuida também da operação, disponibilidade e desempenho do sistema.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.7, páginas 97–99 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 2.8

Antes de executar uma solicitação, o SGBD consulta esquemas e mapeamentos para:

A) Delegar a integridade ao terminal.

B) Eliminar todas as estruturas físicas.

C) Relacionar a visão solicitada à organização dos dados armazenados.

D) Dispensar verificações de autorização.

E) Transformar cada consulta em alteração.

**Gabarito: C.** A solicitação lógica precisa ser interpretada com base nos descritores do banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.8, páginas 100–106 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 2.8

Qual conteúdo caracteriza o catálogo de um SGBD?

A) Somente respostas temporárias de consultas.

B) Somente arquivos de programas executáveis.

C) Apenas cópias de documentos de usuários.

D) Descrições de objetos e restrições do banco.

E) Exclusivamente senhas da rede.

**Gabarito: D.** O catálogo mantém metadados necessários à interpretação e gestão dos objetos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.8, páginas 100–106 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 2.9

Transportar mensagens entre a estação do usuário e o serviço de dados cabe principalmente ao:

A) Gerenciador de comunicações de dados.

B) Índice de uma tabela.

C) Esquema conceitual.

D) Predicado de integridade.

E) Gerador de relatórios.

**Gabarito: A.** Comunicação e gerenciamento dos dados têm responsabilidades diferentes, embora cooperem.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.9, páginas 107 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — seção 2.10

Na divisão cliente/servidor apresentada no capítulo, o back end corresponde ao:

A) Formulário executado pelo usuário.

B) Servidor que fornece os serviços de gerenciamento de dados.

C) Dispositivo de entrada.

D) Compilador de interfaces.

E) Documento impresso.

**Gabarito: B.** O servidor oferece funções do SGBD; clientes utilizam esses serviços.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.10, páginas 108–111 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 2.10

Uma aplicação gráfica e um gerador de relatórios acessam o mesmo servidor. Eles são:

A) Clientes distintos de um mesmo serviço de dados.

B) Uma única transação por definição.

C) Partes do hardware de armazenamento.

D) Dois esquemas internos idênticos.

E) Obrigatoriamente dois bancos distribuídos.

**Gabarito: A.** Múltiplos front ends podem consumir serviços do mesmo back end.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.10, páginas 108–111 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 2.10

Separar cliente e servidor exige que eles executem em máquinas diferentes?

A) Não; a separação é funcional e pode existir na mesma máquina.

B) Não, porque cliente e servidor são o mesmo componente.

C) Sim, com sistemas operacionais distintos.

D) Sim, sempre em redes diferentes.

E) Sim, com bancos incompatíveis.

**Gabarito: A.** A divisão de responsabilidades não determina necessariamente a localização física.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.10, páginas 108–111 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 2.11

Qual utilitário auxilia a criar a versão inicial do banco a partir de arquivos existentes?

A) Despachante de impressora.

B) Editor de texto.

C) Monitor de temperatura.

D) Rotina de carga.

E) Gerenciador de janelas.

**Gabarito: D.** Utilitários de carga transferem dados de fontes externas para o banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.11, páginas 112 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 2.11

Qual par de funções corresponde a dump/restore?

A) Compilação e edição.

B) Seleção de linhas e projeção de colunas.

C) Junção e divisão.

D) Descarga para cópia e recarga a partir dessa cópia.

E) Autenticação e autorização.

**Gabarito: D.** Descarga e recarga auxiliam operações de backup e restauração.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.11, páginas 112 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 2.12

Uma tarefa envolve serviços executados em várias máquinas conectadas. Isso caracteriza:

A) Necessariamente um único arquivo físico compartilhado.

B) Acesso exclusivamente monousuário.

C) Processamento distribuído.

D) Eliminação de comunicação.

E) Independência de dados lógica, por definição.

**Gabarito: C.** Processamento pode ser distribuído sem que toda distribuição corresponda a um banco distribuído.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.12, páginas 113–118 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 2.12

Um servidor central atende clientes remotos. Esse fato, isoladamente, comprova distribuição dos dados entre vários sites?

A) Sim, pois consultas são sempre transações distribuídas.

B) Não, porque clientes remotos não processam informações.

C) Não; distribuição do processamento não implica distribuição do banco.

D) Sim, pois todo cliente contém uma réplica.

E) Sim, pois a rede fragmenta automaticamente tabelas.

**Gabarito: C.** É preciso distinguir localização das aplicações e localização dos dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.12, páginas 113–118 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 2.2

Qual afirmação respeita a arquitetura de três níveis?

A) O esquema externo deve expor todos os índices.

B) O nível conceitual é uma cópia física por usuário.

C) Cada usuário exige um esquema interno exclusivo.

D) Os mapeamentos substituem os dados armazenados.

E) Podem existir vários esquemas externos para um esquema conceitual.

**Gabarito: E.** A arquitetura permite visões particulares sobre uma descrição lógica global.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 2, seção 2.2, páginas 82–86 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
