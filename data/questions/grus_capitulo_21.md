# Grus — capítulo 21: Análise de Rede

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_21.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Medida da participação de um nó nos caminhos mínimos entre outros pares de nós.”?

A) Centralidade de proximidade

B) Fator de amortecimento

C) PageRank

D) Multiplicação de matrizes

E) Centralidade de intermediação

**Gabarito: E.** Centralidade de intermediação: medida da participação de um nó nos caminhos mínimos entre outros pares de nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 386–390 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um usuário com poucos amigos conecta regiões da rede e participa de muitos trajetos mínimos. Qual centralidade captura essa função de ponte?

A) PageRank

B) Centralidade de vetor próprio

C) Multiplicação de matrizes

D) Centralidade de intermediação

E) Centralidade de proximidade

**Gabarito: D.** Centralidade de intermediação: medida da participação de um nó nos caminhos mínimos entre outros pares de nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 386–390 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Exploração em camadas de distância a partir de um nó, apropriada para caminhos mínimos em grafo sem pesos.”?

A) Fator de amortecimento

B) Multiplicidade de caminhos mínimos

C) Busca em largura

D) Multiplicação de matrizes

E) Centralidade de vetor próprio

**Gabarito: C.** Busca em largura: exploração em camadas de distância a partir de um nó, apropriada para caminhos mínimos em grafo sem pesos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 387–389 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

A rede não tem pesos e os vizinhos são explorados antes dos vizinhos dos vizinhos. Qual busca permite descobrir os menores números de arestas?

A) Fator de amortecimento

B) PageRank

C) Grafo direcionado

D) Multiplicidade de caminhos mínimos

E) Busca em largura

**Gabarito: E.** Busca em largura: exploração em camadas de distância a partir de um nó, apropriada para caminhos mínimos em grafo sem pesos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 387–389 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Existência de diferentes trajetos com a mesma menor quantidade de arestas para um par de nós.”?

A) Multiplicação de matrizes

B) Fator de amortecimento

C) Multiplicidade de caminhos mínimos

D) Centralidade de proximidade

E) Vetor próprio

**Gabarito: C.** Multiplicidade de caminhos mínimos: existência de diferentes trajetos com a mesma menor quantidade de arestas para um par de nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 388–390 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Dois percursos ligam as mesmas pessoas com o mesmo comprimento mínimo. Que característica precisa ser considerada ao repartir a contribuição de intermediação?

A) Multiplicidade de caminhos mínimos

B) Vetor próprio

C) Centralidade de vetor próprio

D) PageRank

E) Multiplicação de matrizes

**Gabarito: A.** Multiplicidade de caminhos mínimos: existência de diferentes trajetos com a mesma menor quantidade de arestas para um par de nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 388–390 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Medida baseada no inverso da soma das distâncias mínimas de um nó aos demais alcançáveis no contexto analisado.”?

A) Vetor próprio

B) Grafo direcionado

C) Centralidade de proximidade

D) Fator de amortecimento

E) Centralidade de intermediação

**Gabarito: C.** Centralidade de proximidade: medida baseada no inverso da soma das distâncias mínimas de um nó aos demais alcançáveis no contexto analisado.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 390–391 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Para comparar usuários de uma rede conectada, o analista usa o inverso da soma de suas distâncias aos outros. Qual centralidade calcula?

A) Vetor próprio

B) Centralidade de proximidade

C) Fator de amortecimento

D) Centralidade de vetor próprio

E) Grafo direcionado

**Gabarito: B.** Centralidade de proximidade: medida baseada no inverso da soma das distâncias mínimas de um nó aos demais alcançáveis no contexto analisado.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 390–391 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Operação que calcula entradas por produtos escalares de linhas da primeira matriz com colunas da segunda.”?

A) Grafo direcionado

B) PageRank

C) Fator de amortecimento

D) Multiplicação de matrizes

E) Centralidade de intermediação

**Gabarito: D.** Multiplicação de matrizes: operação que calcula entradas por produtos escalares de linhas da primeira matriz com colunas da segunda.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 392–394 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Uma transformação linear deve combinar linhas de A com colunas de B por somas de produtos. Qual operação realiza?

A) Multiplicidade de caminhos mínimos

B) Grafo direcionado

C) Fator de amortecimento

D) PageRank

E) Multiplicação de matrizes

**Gabarito: E.** Multiplicação de matrizes: operação que calcula entradas por produtos escalares de linhas da primeira matriz com colunas da segunda.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 392–394 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Vetor não nulo cuja transformação por uma matriz produz um múltiplo do próprio vetor.”?

A) Centralidade de intermediação

B) Grafo direcionado

C) Busca em largura

D) Vetor próprio

E) Centralidade de proximidade

**Gabarito: D.** Vetor próprio: vetor não nulo cuja transformação por uma matriz produz um múltiplo do próprio vetor.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 393–394 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Aplicar a matriz altera o tamanho de um vetor sem alterar sua direção, produzindo lambda vezes esse vetor. Como se chama o vetor?

A) Grafo direcionado

B) Multiplicidade de caminhos mínimos

C) Centralidade de intermediação

D) PageRank

E) Vetor próprio

**Gabarito: E.** Vetor próprio: vetor não nulo cuja transformação por uma matriz produz um múltiplo do próprio vetor.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 393–394 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Medida em que conexões a nós de maior centralidade contribuem mais para a pontuação.”?

A) Centralidade de intermediação

B) PageRank

C) Centralidade de vetor próprio

D) Centralidade de proximidade

E) Fator de amortecimento

**Gabarito: C.** Centralidade de vetor próprio: medida em que conexões a nós de maior centralidade contribuem mais para a pontuação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 394–396 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Dois usuários têm o mesmo número de conexões, mas um se liga a participantes muito influentes. Qual centralidade considera a importância desses vizinhos?

A) Multiplicidade de caminhos mínimos

B) Centralidade de vetor próprio

C) PageRank

D) Grafo direcionado

E) Centralidade de intermediação

**Gabarito: B.** Centralidade de vetor próprio: medida em que conexões a nós de maior centralidade contribuem mais para a pontuação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 394–396 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Rede cujas arestas possuem orientação e não exigem reciprocidade.”?

A) Centralidade de vetor próprio

B) Grafo direcionado

C) Centralidade de proximidade

D) Vetor próprio

E) Multiplicação de matrizes

**Gabarito: B.** Grafo direcionado: rede cujas arestas possuem orientação e não exigem reciprocidade.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 397–398 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Uma aprovação de A para B pode existir sem uma aprovação de B para A. Que espécie de grafo representa essa relação?

A) Grafo direcionado

B) Vetor próprio

C) Centralidade de proximidade

D) Multiplicação de matrizes

E) Centralidade de vetor próprio

**Gabarito: A.** Grafo direcionado: rede cujas arestas possuem orientação e não exigem reciprocidade.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 397–398 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Pontuação iterativa que combina uma parcela básica com contribuições recebidas dos links de outros nós.”?

A) Multiplicidade de caminhos mínimos

B) PageRank

C) Centralidade de proximidade

D) Busca em largura

E) Centralidade de vetor próprio

**Gabarito: B.** PageRank: pontuação iterativa que combina uma parcela básica com contribuições recebidas dos links de outros nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 398–399 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Uma rede de aprovações distribui a importância de cada usuário por seus links de saída e repete o cálculo. Qual medida o capítulo aplica?

A) PageRank

B) Centralidade de intermediação

C) Multiplicidade de caminhos mínimos

D) Vetor próprio

E) Centralidade de vetor próprio

**Gabarito: A.** PageRank: pontuação iterativa que combina uma parcela básica com contribuições recebidas dos links de outros nós.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 398–399 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Análise de Rede” em Grus, qual conceito corresponde à descrição: “Parâmetro do PageRank que controla a parcela da pontuação redistribuída pelos links.”?

A) Fator de amortecimento

B) Multiplicidade de caminhos mínimos

C) Multiplicação de matrizes

D) Centralidade de proximidade

E) Busca em largura

**Gabarito: A.** Fator de amortecimento: parâmetro do PageRank que controla a parcela da pontuação redistribuída pelos links.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 398–399 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

No PageRank, a equipe ajusta quanto da pontuação segue conexões e quanto permanece na contribuição básica. Qual parâmetro controla essa divisão?

A) Vetor próprio

B) Centralidade de vetor próprio

C) Centralidade de intermediação

D) Fator de amortecimento

E) Busca em largura

**Gabarito: D.** Fator de amortecimento: parâmetro do PageRank que controla a parcela da pontuação redistribuída pelos links.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 21: Análise de Rede, páginas 398–399 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
