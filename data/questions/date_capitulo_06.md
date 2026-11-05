# Date — capítulo 6: Relações

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_06.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 6.2

Uma tupla com quatro atributos possui grau:

A) 8.

B) 1.

C) Dependente do número de linhas.

D) 0.

E) 4.

**Gabarito: E.** O grau de uma tupla é a quantidade de seus atributos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.2, páginas 261–266 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 6.2

Cada atributo de uma tupla contém:

A) Um endereço físico obrigatório.

B) Uma sequência obrigatória de linhas.

C) Exatamente um valor do tipo correspondente.

D) Uma quantidade arbitrária de valores sem tipo.

E) Uma tabela separada obrigatória.

**Gabarito: C.** O valor pode ser complexo, mas deve pertencer ao tipo do atributo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.2, páginas 261–266 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 6.2

Trocar a ordem de apresentação dos atributos altera uma tupla no modelo relacional?

A) Não, porque tuplas não têm valores.

B) Não, se nomes, tipos e valores correspondentes forem preservados.

C) Sim, porque a primeira posição sempre é chave.

D) Sim, porque atributos não possuem nomes.

E) Sim, pois a ordem faz parte do cabeçalho matemático.

**Gabarito: B.** Atributos são identificados por nomes, não por uma posição de apresentação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.2, páginas 261–266 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 6.3

Quais partes constituem um valor de relação?

A) Programa e terminal.

B) Cabeçalho e corpo.

C) Log e backup.

D) Índice e senha.

E) Cursor e sessão.

**Gabarito: B.** O cabeçalho descreve atributos; o corpo é um conjunto de tuplas desse cabeçalho.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.3, páginas 267–269 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 6.3

O corpo de uma relação é um:

A) Conjunto de tuplas com o mesmo cabeçalho.

B) Programa que percorre ponteiros.

C) Arquivo físico ordenado por inserção.

D) Multiconjunto obrigatório de linhas heterogêneas.

E) Conjunto de esquemas externos.

**Gabarito: A.** O corpo relacional é um conjunto homogêneo de tuplas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.3, páginas 267–269 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 6.4

Uma relação possui seis atributos e onze tuplas. Seu grau e sua cardinalidade são:

A) 6 e 11.

B) 11 e 66.

C) 6 e 66.

D) 17 e 6.

E) 11 e 6.

**Gabarito: A.** Grau conta atributos; cardinalidade conta tuplas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 6.4

Duas tuplas iguais podem aparecer duas vezes no corpo de uma relação matemática?

A) Sim, quando inseridas em horários diferentes.

B) Sim, se houver chaves estrangeiras.

C) Não; o corpo é um conjunto.

D) Não, porque relações admitem apenas uma tupla.

E) Sim, se estiverem em páginas distintas.

**Gabarito: C.** Conjuntos não preservam multiplicidade de elementos iguais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 6.4

Reordenar visualmente as tuplas modifica o valor da relação?

A) Sim, toda relação é uma lista ordenada.

B) Não, porque as tuplas não pertencem ao corpo.

C) Sim, apenas quando não houver índice.

D) Não, se o conjunto de tuplas permanecer igual.

E) Sim, pois a primeira tupla define o tipo.

**Gabarito: D.** A ordem de apresentação das tuplas não faz parte do valor relacional.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 6.4

Uma relação sem tuplas, mas com três atributos, tem cardinalidade e grau:

A) 3 e 3.

B) 1 e 3.

C) 3 e 0.

D) 0 e 3.

E) 0 e 0.

**Gabarito: D.** A ausência de tuplas não elimina o cabeçalho.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 6.4

Quantos valores relacionais distintos existem para um cabeçalho sem atributos?

A) Um para cada usuário.

B) Cinco, conforme a cardinalidade física.

C) Dois: um sem tuplas e outro com a tupla vazia.

D) Nenhum, pois o grau deve ser positivo.

E) Infinitos, um para cada ordenação.

**Gabarito: C.** Sem atributos existe uma única tupla possível; seu conjunto pode estar vazio ou contê-la.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 6.4

Qual propriedade caracteriza TABLE_DUM?

A) Relação com uma coluna obrigatória.

B) Relação de grau zero e cardinalidade zero.

C) Relação de grau zero e cardinalidade um.

D) Tabela SQL sem nome.

E) Relação com tuplas duplicadas.

**Gabarito: B.** TABLE_DUM não contém a tupla vazia; TABLE_DEE a contém.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 6.4

Qual propriedade caracteriza TABLE_DEE?

A) Relação com uma coluna booleana.

B) Relação necessariamente infinita.

C) Relação de cardinalidade zero.

D) Relação sem cabeçalho válido.

E) Relação de grau zero contendo a tupla vazia.

**Gabarito: E.** A tupla vazia é um valor de tupla válido e pode formar um corpo unitário.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 6.5

A definição de uma relvar estabelece principalmente:

A) Uma cópia por usuário.

B) Uma ordem permanente de impressão.

C) Uma representação binária universal.

D) O tipo de seus valores e as restrições aplicáveis.

E) Um resultado de consulta imutável.

**Gabarito: D.** A relvar recebe valores de relação compatíveis com sua declaração.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.5, páginas 282–288 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 6.5

Inserir, excluir e atualizar tuplas em uma relvar pode ser entendido como:

A) Renomear o catálogo.

B) Alterar a definição de todos os tipos envolvidos.

C) Atribuir um novo valor de relação à variável.

D) Modificar valores matemáticos constantes.

E) Trocar obrigatoriamente o esquema interno.

**Gabarito: C.** As operações mudam o valor atual da relvar, preservadas suas restrições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.5, páginas 282–288 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 6.5

Duas relvars distintas podem conter a mesma relação em determinado instante?

A) Sim, mas deixam de ser variáveis distintas.

B) Não, porque uma relação só pode pertencer a uma variável.

C) Não, porque nomes diferentes exigem conteúdos diferentes.

D) Sim, somente se não houver atributos.

E) Sim; igualdade de valores não implica identidade das variáveis.

**Gabarito: E.** A distinção valor/variável também se aplica às relações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.5, páginas 282–288 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 6.4

Um atributo possui um valor composto de tipo definido pelo usuário. Isso, isoladamente, viola a ideia de um valor por atributo?

A) Não; a unidade é relativa ao tipo do atributo.

B) Sim, somente inteiros são atômicos.

C) Não, porque tipos não importam no modelo.

D) Sim, todo tipo composto exige linhas duplicadas.

E) Sim, todo valor deve ser um caractere.

**Gabarito: A.** Complexidade interna não significa presença de vários valores independentes no atributo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 6.3

Uma tupla contém um atributo extra ausente do cabeçalho de R. Ela pode integrar diretamente o corpo de R?

A) Não, porque R não pode ter corpo.

B) Sim, porque cabeçalhos são apenas decoração.

C) Sim, desde que seja texto.

D) Sim, se o atributo extra estiver ao final.

E) Não, pois não possui o cabeçalho requerido.

**Gabarito: E.** O corpo exige tuplas do mesmo tipo definido pelo cabeçalho.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.3, páginas 267–269 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 6.6

Qual diferença entre SQL e relações matemáticas é destacada no capítulo?

A) SQL não possui colunas.

B) SQL pode admitir linhas duplicadas.

C) Relações matemáticas têm ordem de inserção obrigatória.

D) Relações matemáticas exigem duplicatas.

E) SQL não permite restrições.

**Gabarito: B.** Tabelas SQL e relações não devem ser tratadas como conceitos perfeitamente idênticos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.6, páginas 289–297 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 6.6

Por que não se deve generalizar a posição ordinal de colunas SQL para atributos relacionais?

A) Porque linhas SQL são sempre conjuntos matemáticos.

B) Porque SQL só trabalha com uma coluna.

C) Porque atributos relacionais não possuem tipos.

D) No modelo relacional, a identidade do atributo é nominal, não posicional.

E) Porque a ordem elimina duplicatas.

**Gabarito: D.** O capítulo distingue o tratamento de linhas SQL e o de tuplas relacionais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.6, páginas 289–297 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 6.4

R e S têm o mesmo cabeçalho e exatamente as mesmas tuplas, exibidas em ordens diferentes. Logo:

A) R e S são relações iguais.

B) A igualdade exige os mesmos índices.

C) R e S possuem necessariamente tipos diferentes.

D) Sua igualdade depende do primeiro registro físico.

E) Apenas uma delas pode ser relação.

**Gabarito: A.** Igualdade relacional depende de cabeçalho e corpo, não de ordenação ou armazenamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 6, seção 6.4, páginas 270–281 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
