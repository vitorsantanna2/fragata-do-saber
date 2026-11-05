# Date — capítulo 14: Modelagem semântica

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_14.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 14.2

Qual é uma finalidade da modelagem semântica?

A) Substituir toda análise de requisitos.

B) Eliminar o significado dos dados.

C) Representar conceitos do domínio e suas regras de forma estruturada.

D) Escolher exclusivamente o tamanho de páginas.

E) Determinar senhas de rede.

**Gabarito: C.** Entidades, propriedades e relacionamentos ajudam a explicitar a semântica do domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.2, páginas 676–679 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 14.3

Um equipamento individual distinguível no domínio é exemplo de:

A) Operador de agregação.

B) Entidade.

C) Arquivo de log.

D) Regra de bloqueio.

E) Índice obrigatório.

**Gabarito: B.** Uma entidade corresponde a um objeto distinguível de interesse para a organização.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 14.3

A data de aquisição de um equipamento é, no modelo E/R, uma:

A) Superclasse necessariamente.

B) Junção física.

C) Propriedade da entidade.

D) Entidade fraca obrigatória.

E) Transação distribuída.

**Gabarito: C.** Propriedades descrevem aspectos das entidades ou dos relacionamentos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 14.3

A associação entre técnicos e equipamentos que inspecionam é um:

A) Checkpoint.

B) Operador de criptografia.

C) Relacionamento.

D) Tipo físico de disco.

E) Catálogo de usuários.

**Gabarito: C.** Relacionamentos representam associações entre entidades do domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 14.3

Uma entidade cuja existência depende de outra é denominada, na terminologia discutida:

A) Fraca.

B) Independente obrigatoriamente.

C) Materializada.

D) Primária por definição.

E) Irredutível.

**Gabarito: A.** O capítulo associa entidades fracas à dependência de existência em relação a outra entidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 14.3

Um técnico inspeciona vários equipamentos e um equipamento recebe vários técnicos. A cardinalidade é:

A) Muitos para um apenas do técnico para o equipamento.

B) Um para um.

C) Muitos para muitos.

D) Zero para um obrigatoriamente.

E) Um para muitos apenas do técnico para o equipamento.

**Gabarito: C.** Ambos os lados podem participar em várias ocorrências da associação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 14.3

Cada empregado pertence a um departamento, e cada departamento possui vários empregados. Do departamento para empregados, há:

A) Nenhum relacionamento.

B) Muitos para muitos obrigatoriamente.

C) Muitos para um.

D) Um para um.

E) Um para muitos.

**Gabarito: E.** A cardinalidade precisa ser lida no sentido indicado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 14.3

Uma propriedade calculada a partir de outras, como total de itens, é:

A) Uma entidade regular.

B) Derivada.

C) Sempre multivalorada.

D) Obrigatoriamente identificadora.

E) Um índice interno.

**Gabarito: B.** A propriedade derivada possui regra de cálculo a partir de informações disponíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 14.3

Vários telefones para a mesma pessoa exemplificam uma propriedade:

A) Sem relação com a entidade.

B) Obrigatoriamente sem domínio.

C) Sempre identificadora.

D) Multivalorada no modelo conceitual.

E) Sempre derivada.

**Gabarito: D.** A representação lógica posterior precisa expressar adequadamente essa multiplicidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 14.3

Rua, número e cidade agrupados em endereço ilustram uma propriedade:

A) Obrigatoriamente fraca.

B) Um relacionamento ternário necessariamente.

C) Uma chave estrangeira por definição.

D) Composta.

E) Sem componentes.

**Gabarito: D.** Uma propriedade composta pode ser descrita em termos de componentes menores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 14.4

Um diagrama E/R dispensa a especificação complementar de todas as regras de integridade?

A) Não, porque diagramas não representam entidades.

B) Sim, desde que não existam atributos.

C) Sim, se houver retângulos.

D) Sim, todo desenho formaliza qualquer regra.

E) Não; regras podem não estar expressas pela notação gráfica utilizada.

**Gabarito: E.** O capítulo alerta para a imprecisão e as lacunas de diagramas na descrição de restrições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.4, páginas 686–688 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 14.5

Ao mapear um relacionamento muitos para muitos para o modelo relacional, é comum criar:

A) Uma relvar de associação com referências aos participantes.

B) Um índice sem dados.

C) Uma cópia de segurança por entidade.

D) Um usuário por ocorrência.

E) Uma coluna que concatena todos os identificadores.

**Gabarito: A.** A associação é representada por fatos próprios ligados às entidades participantes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.5, páginas 689–695 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 14.5

Qual estrutura representa adequadamente notas de alunos em disciplinas?

A) Apenas uma nota única no cadastro geral da disciplina.

B) Um nome de aluno dentro da senha do professor.

C) Uma nota única global para todos os alunos.

D) Somente um índice na tabela de alunos.

E) Uma associação AlunoDisciplina com as referências e a nota.

**Gabarito: E.** A nota depende da ocorrência da associação, não apenas de um dos participantes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.5, páginas 689–695 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 14.5

Para representar cada empregado ligado a um departamento, uma opção usual é:

A) Uma tabela sem identificadores.

B) Uma chave estrangeira de departamento em empregado.

C) Uma chave primária igual para todos os empregados.

D) O endereço físico do departamento na aplicação.

E) Uma lista de nomes concatenados no departamento.

**Gabarito: B.** A chave estrangeira representa a associação muitos para um, respeitadas as demais restrições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.5, páginas 689–695 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 14.5

Uma chave estrangeira, sozinha, garante um relacionamento um para um?

A) Não; a exclusividade do lado referenciador exige restrição adicional apropriada.

B) Sim, se a coluna for texto.

C) Sim, toda referência é um para um.

D) Sim, se o banco tiver índices.

E) Não, porque chaves estrangeiras não ligam entidades.

**Gabarito: A.** Unicidade e obrigatoriedade precisam ser modeladas além da mera referência.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.5, páginas 689–695 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 14.3

Um relacionamento que liga empregado a seu supervisor, ambos do tipo empregado, é:

A) Necessariamente muitos para muitos.

B) Uma propriedade sem entidades.

C) Impossível no modelo E/R.

D) Uma herança de tipos obrigatória.

E) Recursivo, com papéis distintos.

**Gabarito: E.** A mesma classe de entidades pode participar com papéis diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 14.5

Substituir um relacionamento ternário por três relacionamentos binários é sempre seguro?

A) Não; pode perder restrições sobre a combinação dos três participantes.

B) Sim, por identidade matemática universal.

C) Sim, porque entidades só se ligam aos pares.

D) Sim, se houver três índices.

E) Não, porque relacionamentos binários são proibidos.

**Gabarito: A.** A associação entre triplas pode conter informação não preservada por pares independentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.5, páginas 689–695 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 14.3

Uma entidade pode participar de zero ocorrências de um relacionamento quando a participação é:

A) Sempre total.

B) Identificadora por definição.

C) Obrigatória.

D) Opcional.

E) Fisicamente ordenada.

**Gabarito: D.** Participação opcional admite ausência de associação; cardinalidade máxima é outra informação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.3, páginas 680–685 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 14.2

Ao transformar conceitos do domínio em objetos formais, é necessário também definir:

A) Um índice por palavra do enunciado.

B) Somente cores dos diagramas.

C) A ordem física de todas as tuplas.

D) Regras de integridade e operações correspondentes.

E) A senha de cada usuário final.

**Gabarito: D.** Símbolos sem regras e operações não fornecem uma descrição formal suficiente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.2, páginas 676–679 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 14.6

Na análise de Date, usar diagramas E/R obriga a adotar integralmente todas as ideias de um único modelo semântico?

A) Sim, porque qualquer diagrama é um esquema interno.

B) Não; a técnica de diagramação e o modelo são propostas distinguíveis.

C) Sim, por definição de diagrama.

D) Não, porque diagramas nunca têm semântica.

E) Sim, desde que haja entidades fracas.

**Gabarito: B.** O autor distingue a notação gráfica dos compromissos teóricos de um modelo específico.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 14, seção 14.6, páginas 696–699 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
