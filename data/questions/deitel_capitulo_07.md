# Deitel — capítulo 7: Arrays e ArrayLists

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_07.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 7.2

Qual é o primeiro índice de um array Java?

A) 1.

B) -1.

C) O tamanho do array.

D) Depende do tipo.

E) 0.

**Gabarito: E.** Os índices válidos começam em zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.2, páginas 227–228 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 7.2

Um array com tamanho 5 admite qual maior índice?

A) 3.

B) 4.

C) 6.

D) -1.

E) 5.

**Gabarito: B.** O último índice válido é length menos um.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.2, páginas 227–228 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 7.3

Qual valor padrão dos elementos de `new int[3]`?

A) -1.

B) 1.

C) null.

D) 0.

E) Indefinido.

**Gabarito: D.** Arrays de primitivos recebem os valores padrão correspondentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.3, páginas 229 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 7.3

Qual conteúdo inicial de `new String[2]`?

A) Duas strings vazias.

B) Dois objetos String novos.

C) Erro.

D) Dois espaços.

E) Duas referências null.

**Gabarito: E.** O array existe, mas seus elementos de referência começam nulos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.3, páginas 229 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 7.4

Para `int[] a={4,7,9};`, qual é `a[1]`?

A) 1.

B) 7.

C) Erro.

D) 4.

E) 9.

**Gabarito: B.** O índice 1 corresponde ao segundo elemento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.4, páginas 230–235 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 7.4

Para `int[] a={4,7,9};`, qual é `a.length`?

A) 3.

B) 2.

C) 20.

D) Erro.

E) 9.

**Gabarito: A.** Length informa a quantidade de elementos, não o último índice.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.4, páginas 230–235 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 7.5

Acessar `a[a.length]` em um array não nulo provoca normalmente:

A) Crescimento automático.

B) Erro de sintaxe obrigatório.

C) NullPointerException sempre.

D) ArrayIndexOutOfBoundsException.

E) Retorno de zero.

**Gabarito: D.** O índice coincide com o primeiro valor fora do limite superior.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.5, páginas 236 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 7.7

Atribuir outro int à variável de um for aprimorado modifica o elemento original do array?

A) Somente no índice zero.

B) Sim, se final.

C) Não.

D) Somente em main.

E) Sim, sempre.

**Gabarito: C.** A variável da iteração recebe uma cópia do valor primitivo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.7, páginas 241 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Difícil — seção 7.8

Um método recebe int[] e altera `a[0]`. O chamador pode observar essa mudança?

A) Não, arrays são imutáveis.

B) Somente se o método for construtor.

C) Sim, ambos referenciam o mesmo array.

D) Não, o array inteiro é copiado.

E) Somente com return.

**Gabarito: C.** O valor copiado é a referência, não o conteúdo do array.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.8, páginas 242–243 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 7.9

Se o parâmetro de array é reatribuído a `new int[2]`, a variável do chamador passa a apontar para esse novo array?

A) Somente se public.

B) Não.

C) Somente se o tamanho coincidir.

D) Sim, para arrays de primitivos.

E) Sim, sempre.

**Gabarito: B.** A reatribuição modifica a cópia local da referência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.9, páginas 244–247 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 7.9

Qual descrição da passagem de argumentos Java está correta?

A) Sempre por referência.

B) Por referência apenas para int.

C) Por cópia profunda de objetos.

D) Por nome do parâmetro.

E) Sempre por valor, inclusive valores de referência.

**Gabarito: E.** Referenciar o mesmo objeto não significa passar a variável por referência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.9, páginas 244–247 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 7.11

Um `int[][]` pode ter linhas com tamanhos diferentes?

A) Sim, é um array de referências a arrays.

B) Não, exige uma matriz contínua obrigatória.

C) Somente se vazio.

D) Somente com tipos genéricos.

E) Não, deve ser quadrado.

**Gabarito: A.** Cada array de linha pode ter comprimento próprio.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.11, páginas 248–250 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 7.11

Para `int[][] a={{1},{2,3}};`, quanto vale `a[1].length`?

A) 3.

B) 1.

C) 0.

D) Erro.

E) 2.

**Gabarito: E.** A segunda linha possui dois elementos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.11, páginas 248–250 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 7.13

Um parâmetro varargs, como `int... valores`, deve ocupar:

A) A primeira posição sempre.

B) Somente construtores.

C) Uma posição fora do método.

D) A última posição da lista de parâmetros.

E) Qualquer posição repetidamente.

**Gabarito: D.** A regra evita ambiguidades sobre a associação dos argumentos finais.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.13, páginas 255 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 7.13

Um método declarado com `int... valores` pode ser chamado sem valores nesse parâmetro?

A) Sim, recebendo um array vazio.

B) Somente em classes abstratas.

C) Não, exige dois.

D) Sim, recebendo sempre null.

E) Não, exige exatamente um.

**Gabarito: A.** Ausência de argumentos varargs não é o mesmo que passar null.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.13, páginas 255 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 7.14

Os argumentos de linha de comando de main chegam como:

A) Um array de String.

B) Um Map obrigatório.

C) Um arquivo .class.

D) Um Scanner obrigatório.

E) Um array de int.

**Gabarito: A.** Conversões numéricas ficam a cargo do programa.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.14, páginas 256–257 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 7.15

O que `Arrays.sort(a)` faz em um int[]?

A) Converte-o em ArrayList.

B) Retorna sempre outro array sem alterar a.

C) Ordena seus elementos no próprio array.

D) Elimina automaticamente duplicatas.

E) Troca seu comprimento.

**Gabarito: C.** Ordenação e remoção de duplicatas são operações distintas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.15, páginas 258–259 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 7.16

ArrayList difere de um array por permitir normalmente:

A) Apenas tipos primitivos como parâmetros genéricos.

B) Índices começando em um.

C) Variação de tamanho por operações de inserção e remoção.

D) Apenas um elemento.

E) Ausência de qualquer tipo.

**Gabarito: C.** Sua capacidade interna e seu tamanho lógico são conceitos diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.16, páginas 260–261 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 7.16

Qual método informa o número de elementos de um ArrayList?

A) length como campo público.

B) length().

C) capacity como campo obrigatório.

D) size().

E) countAll().

**Gabarito: D.** Arrays usam length; ArrayList oferece size().

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.16, páginas 260–261 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 7.16

Em ArrayList&lt;Integer&gt;, `remove(1)` seleciona normalmente qual sobrecarga?

A) Remoção de todos os elementos.

B) Remoção pelo índice 1.

C) Remoção do valor Integer 1.

D) Nenhuma, não compila.

E) Limpeza da lista.

**Gabarito: B.** Para remover o objeto Integer 1, pode-se usar Integer.valueOf(1).

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 7, seção 7.16, páginas 260–261 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
