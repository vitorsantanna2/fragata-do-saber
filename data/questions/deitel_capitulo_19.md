# Deitel — capítulo 19: Pesquisa, classificação e Big O

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_19.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 19.2

Pesquisa linear examina normalmente:

A) Todos os elementos em tempo constante.

B) Somente árvores.

C) Sempre o elemento central apenas.

D) Somente arrays ordenados.

E) Elementos sucessivos até encontrar ou esgotar candidatos.

**Gabarito: E.** Ela não exige ordenação prévia dos dados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.2, páginas 670 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 19.2

No pior caso, a pesquisa linear em n elementos é:

A) O(n).

B) O(n²).

C) O(1).

D) O(log n).

E) O(n log n).

**Gabarito: A.** O alvo pode estar ausente ou na última posição examinada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.2, páginas 670 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 19.2

Na pesquisa linear, encontrar o alvo no primeiro elemento caracteriza custo:

A) O(n²) obrigatoriamente.

B) O(1) nesse melhor caso.

C) O(n log n).

D) O(n!) sempre.

E) Infinito.

**Gabarito: B.** É necessário distinguir melhor caso e pior caso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.2, páginas 670 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 19.3

Big O descreve principalmente:

A) O tempo exato em segundos.

B) Um limite assintótico de crescimento de custo.

C) A quantidade exata de classes.

D) O tamanho do nome do algoritmo.

E) A velocidade fixa da CPU.

**Gabarito: B.** Constantes e termos menores podem ser abstraídos na classificação assintótica.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.3, páginas 671 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 19.3

A expressão de custo 3n+7 é usualmente classificada por seu limite linear mais simples como:

A) O(log n).

B) O(1).

C) O(n!).

D) O(n²).

E) O(n).

**Gabarito: E.** O termo linear domina o crescimento dessa expressão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.3, páginas 671 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Difícil — seção 19.3

Ao dobrar n, um custo proporcional a n² cresce aproximadamente por fator:

A) 16.

B) 1.

C) 8.

D) 4.

E) 2.

**Gabarito: D.** (2n)² é quatro vezes n².

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.3, páginas 671 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 19.4

A pesquisa binária exige principalmente:

A) Somente números pares.

B) Uma lista vazia.

C) Um índice começando em um.

D) Ausência de duplicatas em qualquer caso.

E) Dados ordenados segundo o mesmo critério de comparação.

**Gabarito: E.** A decisão de descartar metades depende da ordenação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.4, páginas 672–675 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 19.4

No pior caso, pesquisa binária em array ordenado tem custo:

A) O(log n).

B) O(n!).

C) O(n²).

D) O(n² log n).

E) O(n log n).

**Gabarito: A.** O conjunto candidato é aproximadamente reduzido à metade por passo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.4, páginas 672–675 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 19.4

Após comparar o alvo com o elemento central, a busca binária normalmente:

A) Remove o elemento central do array.

B) Ordena novamente todo o array.

C) Duplica todos os elementos.

D) Reinicia sempre do primeiro.

E) Descarta uma metade incompatível do intervalo.

**Gabarito: E.** A busca reduz o intervalo lógico sem exigir modificar os dados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.4, páginas 672–675 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 19.4

Em array crescente [2,5,8,11,14], o alvo 11 está inicialmente em qual lado do centro 8?

A) Na metade direita.

B) Indefinido por falta de ordenação.

C) Fora do array.

D) Na metade esquerda.

E) É igual ao centro.

**Gabarito: A.** A relação 11&gt;8 orienta a redução do intervalo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.4, páginas 672–675 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 19.6

A classificação por seleção escolhe repetidamente:

A) Uma metade aleatória sem comparar.

B) Um valor fora do array.

C) Somente elementos já ordenados.

D) O menor elemento restante para a próxima posição, na versão crescente.

E) Um pivô obrigatoriamente central.

**Gabarito: D.** O mínimo do trecho não ordenado é colocado em sua posição.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.6, páginas 676–677 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 19.6

A seleção básica faz, no pior caso, número de comparações de ordem:

A) O(log n).

B) O(1).

C) O(n²).

D) O(n).

E) O(n!).

**Gabarito: C.** As varreduras sucessivas somam uma quantidade quadrática de comparações.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.6, páginas 676–677 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 19.7

Classificação por inserção mantém tipicamente:

A) Todos os elementos sem posição.

B) Somente dois elementos em toda estrutura.

C) Um prefixo ordenado e insere nele o próximo elemento.

D) Uma árvore obrigatória.

E) Um array sempre vazio.

**Gabarito: C.** O prefixo ordenado cresce a cada passo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.7, páginas 678–680 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Difícil — seção 19.7

Na versão usual com parada ao encontrar posição adequada, inserção em entrada já ordenada tem melhor caso:

A) O(n!).

B) O(n³).

C) O(n).

D) O(n²).

E) O(1) para todo n.

**Gabarito: C.** Cada novo elemento requer poucas comparações e deslocamentos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.7, páginas 678–680 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 19.7

No pior caso, inserção exige custo:

A) O(n!).

B) O(log n).

C) O(1).

D) O(n²).

E) O(n log log n).

**Gabarito: D.** Cada elemento pode deslocar uma parte grande do prefixo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.7, páginas 678–680 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 19.8

Merge sort divide o problema e depois:

A) Apaga duplicatas obrigatoriamente.

B) Intercala partes ordenadas.

C) Escolhe sempre o maior sem comparar.

D) Concatena partes sem considerar ordem.

E) Transforma tudo em árvore.

**Gabarito: B.** A intercalação produz ordem a partir de subproblemas ordenados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.8, páginas 681–684 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 19.8

O custo usual de merge sort é:

A) O(1).

B) O(log n).

C) O(n³).

D) O(n log n).

E) O(n!).

**Gabarito: D.** Há níveis logarítmicos com trabalho linear de intercalação por nível.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.8, páginas 681–684 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 19.8

Ao intercalar [1,4] e [2,3], o resultado crescente é:

A) [1,2,3,4].

B) [4,3,2,1].

C) [1,4,2,3].

D) [2,3,1,4].

E) [1,2,4,3].

**Gabarito: A.** Comparam-se os próximos candidatos das partes ordenadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.8, páginas 681–684 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 19.9

Para muitos elementos, qual crescimento assintótico usual é menor: n log n ou n²?

A) Depende apenas do nome da variável.

B) n log n.

C) São idênticos para todo n.

D) n².

E) Nenhum pode ser comparado.

**Gabarito: B.** A comparação é assintótica e não substitui medir entradas pequenas e custos constantes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.9, páginas 685 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 19.4

Pesquisar repetidamente dados sem ordenação exige considerar, ao escolher busca binária:

A) Somente o número de letras do alvo.

B) A conversão de todos os dados em boolean.

C) O custo de ordenar e manter a ordenação.

D) A exclusão de todos os índices.

E) Nenhuma pré-condição.

**Gabarito: C.** A economia por busca precisa ser avaliada junto à preparação e manutenção dos dados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 19, seção 19.4, páginas 672–675 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
