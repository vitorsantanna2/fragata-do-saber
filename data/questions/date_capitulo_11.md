# Date — capítulo 11: Dependências funcionais

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_11.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 11.2

A dependência funcional A → B estabelece que:

A) Tuplas iguais em A devem ser iguais em B.

B) B deve ser chave primária.

C) A precisa ser numérico.

D) Tuplas iguais em B devem ser iguais em A.

E) A e B devem ter o mesmo tipo.

**Gabarito: A.** A determina B, mas a dependência inversa não é implicada automaticamente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.2, páginas 560–563 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 11.2

Qual par de tuplas viola A → B?

A) (A=4,B=7) e (A=5,B=7).

B) (A=5,B=9) e (A=6,B=9).

C) (A=4,B=7) e (A=5,B=9).

D) (A=4,B=7) e (A=6,B=7).

E) (A=4,B=7) e (A=4,B=9).

**Gabarito: E.** O mesmo determinante A aparece associado a valores distintos de B.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.2, páginas 560–563 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 11.3

Qual dependência é trivial?

A) C → B, com B e C distintos.

B) A → B, com A e B distintos.

C) {A,B} → A.

D) A → C, com A e C distintos.

E) B → A, com A e B distintos.

**Gabarito: C.** Uma DF é trivial quando o dependente é subconjunto do determinante.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.3, páginas 564 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 11.3

A DF {A,B} → {A,B} é válida em qualquer relvar com esses atributos por:

A) Uma ordenação física.

B) Reflexividade.

C) Uma política de acesso.

D) Transitividade entre três atributos distintos.

E) Uma chave estrangeira obrigatória.

**Gabarito: B.** Todo conjunto de atributos determina seus próprios subconjuntos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.3, páginas 564 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 11.4

De A → B e B → C, qual DF pode ser inferida?

A) B → A.

B) A → C.

C) C → B.

D) C → A.

E) C → {A,B}.

**Gabarito: B.** A transitividade permite encadear as duas determinações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.4, páginas 565–567 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 11.4

De A → B, a regra de aumento permite inferir:

A) B → C.

B) C → A.

C) {A,C} → {B,C}.

D) C → B.

E) B → A.

**Gabarito: C.** Acrescentar os mesmos atributos aos dois lados preserva a dependência.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.4, páginas 565–567 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 11.4

De A → B e A → C, pode-se inferir:

A) C → A.

B) B → C.

C) C → B.

D) A → {B,C}.

E) B → A.

**Gabarito: D.** A regra de união reúne dependentes do mesmo determinante.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.4, páginas 565–567 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 11.4

De A → {B,C}, pode-se inferir:

A) B → C e C → B.

B) B → A e C → A.

C) B → A apenas.

D) A → B e A → C.

E) C → A apenas.

**Gabarito: D.** A decomposição separa os atributos do lado direito.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.4, páginas 565–567 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 11.4

O fecho F+ de um conjunto F de DFs contém:

A) Todas as DFs logicamente implicadas por F.

B) Apenas as chaves estrangeiras.

C) Somente as DFs textualmente listadas em F.

D) As tuplas atualmente armazenadas.

E) Somente DFs não triviais.

**Gabarito: A.** O fecho inclui também consequências e dependências triviais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.4, páginas 565–567 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 11.5

Em R(A,B,C), com A → B e B → C, o fecho de A é:

A) {B,C}.

B) {A}.

C) {A,B}.

D) {A,B,C}.

E) Vazio.

**Gabarito: D.** Começa-se por A e aplicam-se as DFs até não acrescentar novos atributos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 11.5

Em R(A,B,C), somente com A → B, qual é C+?

A) Vazio.

B) {B,C}.

C) {A,B,C}.

D) {A,C}.

E) {C}.

**Gabarito: E.** Nenhuma DF disponível permite obter A ou B a partir de C.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 11.5

Em R(A,B,C), com A → B, qual conjunto é chave candidata?

A) {C}.

B) {A}.

C) {A,C}.

D) {B,C}.

E) {B}.

**Gabarito: C.** A e C juntos determinam tudo; nenhum deles isoladamente determina todos os atributos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 11.5

Em R(A,B,C), com A → B e B → C, A é:

A) Chave candidata.

B) Uma superchave não mínima.

C) Um dependente que não determina nada.

D) Apenas chave estrangeira.

E) Um atributo necessariamente redundante.

**Gabarito: A.** A+ contém todos os atributos, e seu único subconjunto próprio é vazio, que não os determina neste caso.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 11.5

Um conjunto X cujo fecho contém todos os atributos de R é:

A) Sempre uma chave candidata mínima.

B) Uma tupla da relação.

C) Sempre uma DF trivial.

D) Necessariamente uma chave estrangeira.

E) Uma superchave de R.

**Gabarito: E.** Para ser chave candidata, X ainda precisa ser irredutível.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 11.6

Dois conjuntos de DFs são equivalentes quando:

A) Usam a mesma ordem textual.

B) Possuem apenas atributos numéricos.

C) Possuem o mesmo fecho.

D) Têm o mesmo número de dependências.

E) Foram definidos pelo mesmo usuário.

**Gabarito: C.** Equivalência depende das consequências lógicas, não da forma de apresentação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.6, páginas 571–574 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 11.6

Uma DF redundante em F pode ser removida quando:

A) Não aparece em um índice.

B) Possui dois atributos no determinante.

C) Usa uma letra repetida em outra DF.

D) É a primeira da lista.

E) Ela já é implicada pelas outras DFs de F.

**Gabarito: E.** A remoção deve preservar o conjunto de dependências implicadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.6, páginas 571–574 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 11.6

Em F={A → B, B → C, A → C}, qual DF é redundante?

A) Todas, independentemente umas das outras.

B) A → C.

C) A → B.

D) Nenhuma.

E) B → C.

**Gabarito: B.** A → C já decorre da transitividade das outras duas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.6, páginas 571–574 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 11.6

Um conjunto irredutível de DFs deve evitar:

A) A existência de chaves candidatas.

B) Dependências e atributos supérfluos.

C) Toda aplicação de transitividade.

D) Toda dependência não trivial.

E) Qualquer atributo determinante.

**Gabarito: B.** Irredutibilidade busca uma cobertura equivalente sem componentes desnecessários.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.6, páginas 571–574 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 11.2

Observar poucas linhas sem violação comprova que A → B é uma regra do domínio?

A) Não; a regra deve valer para todos os estados admissíveis.

B) Sim, se B for texto.

C) Sim, se houver índice em A.

D) Sim, duas linhas sempre bastam.

E) Não, porque DFs só se aplicam a uma linha.

**Gabarito: A.** Um estado pode satisfazer acidentalmente uma DF que não é uma restrição do domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.2, páginas 560–563 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 11.5

Para testar se X → Y é implicada por F, pode-se verificar se:

A) X está ordenado fisicamente.

B) X e Y têm a mesma quantidade de atributos.

C) Y é numérico.

D) Y está contido em X+ calculado sob F.

E) F possui mais de três DFs.

**Gabarito: D.** O cálculo de fecho de atributos permite testar implicação sem enumerar todo F+.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 11, seção 11.5, páginas 568–570 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
