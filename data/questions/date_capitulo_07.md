# Date — capítulo 7: Álgebra relacional

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_07.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 7.2

Por que o fechamento é importante para expressões relacionais aninhadas?

A) Todas as operações passam a ter custo igual.

B) Todo resultado se torna automaticamente persistente.

C) O resultado de uma operação pode servir de entrada a outra.

D) Impede consultas sobre relações vazias.

E) Dispensa nomes de atributos.

**Gabarito: C.** O fechamento sustenta a composição de operadores relacionais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.2, páginas 315–317 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 7.3

Uma autojunção precisa distinguir dois atributos originalmente homônimos. Qual operador auxilia?

A) COMMIT.

B) ROLLBACK.

C) RENAME.

D) DELETE.

E) GRANT.

**Gabarito: C.** A renomeação evita conflitos e explicita correspondências de atributos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.3, páginas 318–321 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 7.4

R={1,2} e S={2,3} são relações unárias compatíveis. Qual é R UNION S?

A) {2}.

B) {1,2,3}.

C) {3}.

D) {1,2,2,3}.

E) {1}.

**Gabarito: B.** A união contém as tuplas presentes em qualquer operando, sem multiplicidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 7.4

R={1,2} e S={2,3}, com mesmo cabeçalho. Qual é R INTERSECT S?

A) {1}.

B) {2}.

C) {1,2,3}.

D) Vazio.

E) {3}.

**Gabarito: B.** A interseção conserva apenas tuplas presentes nos dois operandos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 7.4

R={1,2} e S={2,3}, com mesmo cabeçalho. Qual é R MINUS S?

A) {2}.

B) {3}.

C) {2,3}.

D) {1,2,3}.

E) {1}.

**Gabarito: E.** A diferença conserva tuplas do primeiro operando ausentes do segundo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 7.4

União relacional exige que seus operandos possuam:

A) Cabeçalhos compatíveis segundo as regras de tipagem.

B) Os mesmos índices.

C) A mesma localização física.

D) Uma tupla em comum.

E) A mesma cardinalidade.

**Gabarito: A.** A união precisa produzir uma relação homogênea, preservando o fechamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 7.4

R tem três tuplas e S quatro, com atributos disjuntos. R TIMES S terá quantas tuplas?

A) 7.

B) 1.

C) 3.

D) 12.

E) 4.

**Gabarito: D.** O produto cartesiano combina cada tupla de R com cada tupla de S.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 7.4

Uma restrição sobre R pode aumentar sua cardinalidade?

A) Sim, quando o predicado é falso.

B) Não, porque remove todos os atributos.

C) Sim, sempre duplica tuplas aprovadas.

D) Não; seu corpo é subconjunto do corpo de R.

E) Sim, se houver índices.

**Gabarito: D.** Seleção filtra tuplas sem criar novas combinações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 7.4

Projetar R sobre menos atributos pode reduzir sua cardinalidade por quê?

A) A projeção acrescenta valores nulos.

B) Tuplas antes distintas podem produzir a mesma tupla projetada.

C) O grau deve ser igual à cardinalidade.

D) Todo atributo removido exclui uma linha.

E) A projeção ordena fisicamente os registros.

**Gabarito: B.** A projeção relacional elimina multiplicidade porque seu resultado é um conjunto.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 7.4

Uma junção natural usa atributos comuns para:

A) Combinar tuplas cujos valores nesses atributos coincidam.

B) Criar duas cópias de cada atributo comum.

C) Escolher somente a primeira tupla de cada relação.

D) Somar automaticamente seus valores.

E) Remover todos os atributos não comuns.

**Gabarito: A.** A correspondência ocorre nos atributos comuns compatíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 7.4

Uma consulta pede candidatos inscritos em todos os cursos de um conjunto. Qual operador clássico corresponde ao requisito universal?

A) Divisão.

B) Renomeação.

C) União.

D) Restrição sem condição.

E) Produto sem filtro.

**Gabarito: A.** Divisão modela consultas em que se exige associação com todos os elementos de um conjunto.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.4, páginas 322–336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 7.7

Qual operador, em geral, não é comutativo?

A) União.

B) Produto com atributos disjuntos.

C) Junção natural.

D) Diferença.

E) Interseção.

**Gabarito: D.** R MINUS S e S MINUS R podem produzir resultados diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.7, páginas 344–346 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 7.7

Para relações compatíveis, R UNION R resulta em:

A) Um valor escalar.

B) Uma relação de grau dobrado.

C) Uma relação com o dobro das tuplas.

D) R.

E) Uma relação vazia.

**Gabarito: D.** A união é idempotente no modelo de conjuntos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.7, páginas 344–346 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 7.8

Uma semijunção de R com S retorna:

A) Apenas tuplas de S sem correspondência.

B) Uma contagem escalar sem cabeçalho.

C) O produto integral sem filtro.

D) Todos os atributos de R e S obrigatoriamente.

E) Tuplas de R que encontram correspondência em S, preservando o cabeçalho de R.

**Gabarito: E.** A semijunção testa existência de associação sem incorporar os atributos exclusivos de S.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.8, páginas 347–357 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 7.8

Para obter entidades de R sem correspondência em S, o operador adicional apropriado é:

A) SEMIMINUS.

B) RENAME.

C) SEMIJOIN.

D) SUMMARIZE.

E) EXTEND.

**Gabarito: A.** A semidiferença conserva as tuplas do primeiro operando que não encontram correspondência.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.8, páginas 347–357 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 7.8

Qual operador acrescenta atributos calculados a partir dos existentes?

A) COMMIT.

B) EXTEND.

C) RENAME, exclusivamente.

D) INTERSECT.

E) MINUS.

**Gabarito: B.** EXTEND deriva novos valores e amplia o cabeçalho do resultado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.8, páginas 347–357 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 7.8

Qual operador permite produzir totais por grupos?

A) RENAME.

B) ROLLBACK.

C) SUMMARIZE.

D) MINUS, exclusivamente.

E) TIMES, exclusivamente.

**Gabarito: C.** Totalização calcula agregados para os grupos especificados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.8, páginas 347–357 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 7.8

A partir de ligações diretas entre cidades, qual operador adicional pode calcular alcançabilidade transitiva?

A) RENAME.

B) EXTEND sem recursão.

C) TCLOSE.

D) UNION de uma relação consigo mesma.

E) PROJECT sobre um atributo.

**Gabarito: C.** O fechamento transitivo inclui ligações obtidas por caminhos de vários passos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.8, páginas 347–357 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 7.9

GROUP pode reunir atributos de várias tuplas em:

A) Uma senha compartilhada.

B) Um novo índice externo.

C) Uma transação sem commit.

D) Um ponteiro físico obrigatório.

E) Um atributo cujo valor é uma relação.

**Gabarito: E.** Agrupamento relacional permite construir valores relacionais aninhados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.9, páginas 358–361 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 7.9

Qual operação faz o movimento inverso ao agrupamento de um atributo relacional?

A) COMMIT.

B) RENAME.

C) DROP TYPE.

D) REVOKE.

E) UNGROUP.

**Gabarito: E.** O desagrupamento expande o conteúdo do atributo relacional para o resultado correspondente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 7, seção 7.9, páginas 358–361 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
