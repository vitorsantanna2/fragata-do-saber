# Deitel — capítulo 14: Strings, caracteres e expressões regulares

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_14.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 14.2

Uma String Java é:

A) Um primitivo.

B) Um objeto imutável.

C) Uma thread.

D) Um array char sempre mutável exposto.

E) Um arquivo de texto.

**Gabarito: B.** Operações de transformação não alteram o conteúdo do objeto original.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.2, páginas 507 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Difícil — seção 14.3

Após `String s="java"; s.toUpperCase();`, qual conteúdo de s?

A) java.

B) null.

C) Java.

D) JAVA.

E) Erro.

**Gabarito: A.** O resultado foi ignorado; s mantém a referência anterior.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 14.3

Para comparar conteúdo de duas strings, usa-se tipicamente:

A) instanceof.

B) =.

C) == como garantia geral de conteúdo.

D) equals.

E) hashCode como igualdade suficiente.

**Gabarito: D.** == compara identidade das referências, não conteúdo textual em geral.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Difícil — seção 14.3

O que `new String("abc")==new String("abc")` produz?

A) true.

B) false.

C) 0.

D) null.

E) Erro.

**Gabarito: B.** As duas construções criam objetos diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 14.3

O que `new String("abc").equals(new String("abc"))` produz?

A) false.

B) null.

C) Erro.

D) true.

E) 3.

**Gabarito: D.** Equals de String compara o conteúdo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 14.3

Qual resultado de `"navio".substring(1,4)`?

A) av.

B) avio.

C) vio.

D) nav.

E) avi.

**Gabarito: E.** O início é inclusivo e o fim exclusivo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 14.3

Qual resultado de `"Java".charAt(2)`?

A) J.

B) a.

C) 2.

D) Erro.

E) v.

**Gabarito: E.** Os índices começam em zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 14.3

Qual resultado de `"banana".indexOf("na")`?

A) 2.

B) -1.

C) 3.

D) 4.

E) 0.

**Gabarito: A.** IndexOf retorna o índice inicial da primeira ocorrência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 14.3

Quando indexOf não encontra o trecho, retorna:

A) O comprimento mais um.

B) null.

C) -1.

D) 0 sempre.

E) Uma string vazia.

**Gabarito: C.** Zero é índice válido e não indica ausência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 14.3

Qual resultado de `"abc".compareTo("abd")` quanto ao sinal?

A) Sempre 1.

B) Zero.

C) Erro.

D) Negativo.

E) Positivo.

**Gabarito: D.** A comparação lexicográfica detecta c antes de d.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 14.3

`"A".equalsIgnoreCase("a")` produz:

A) false.

B) null.

C) true.

D) Um char.

E) Erro.

**Gabarito: C.** A comparação desconsidera diferenças de caixa conforme a operação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 14.3

Qual resultado de `"a" + 2 + 3`?

A) a23.

B) 5a.

C) a5.

D) a6.

E) Erro.

**Gabarito: A.** A concatenação ocorre da esquerda para a direita.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Difícil — seção 14.3

Qual resultado de `2 + 3 + "a"`?

A) a23.

B) 23a.

C) Erro.

D) a5.

E) 5a.

**Gabarito: E.** A soma numérica é avaliada antes da concatenação textual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.3, páginas 508–516 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 14.4

StringBuilder é adequado para:

A) Criar strings primitivas.

B) Definir threads.

C) Construir texto por operações mutáveis.

D) Garantir sincronização de todos os métodos.

E) Executar regex exclusivamente.

**Gabarito: C.** Ele evita criar um novo String a cada alteração de seu conteúdo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.4, páginas 517–522 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 14.4

Após append de "A" e depois "B" em um StringBuilder vazio, o texto é:

A) BA.

B) Erro.

C) A apenas.

D) A B.

E) AB.

**Gabarito: E.** Append acrescenta ao final do conteúdo atual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.4, páginas 517–522 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 14.4

Qual método StringBuilder inverte a sequência de caracteres?

A) sort().

B) reverse().

C) rotate().

D) shuffle().

E) invertCase().

**Gabarito: B.** Reverse é uma operação mutável do construtor de texto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.4, páginas 517–522 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 14.5

Character.isDigit('7') resulta em:

A) true.

B) false.

C) Erro.

D) null.

E) 7 como int.

**Gabarito: A.** O método testa se o caractere representa um dígito.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.5, páginas 523–525 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 14.6

String.split usa seu argumento principalmente como:

A) Quantidade obrigatória de caracteres.

B) Índice final exclusivo.

C) Nome de pacote.

D) Expressão regular delimitadora.

E) Chave de mapa.

**Gabarito: D.** Metacaracteres precisam ser escapados quando se quer um delimitador literal.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.6, páginas 526 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 14.7

String.matches testa normalmente:

A) A igualdade de hashCode.

B) Se a string inteira corresponde à expressão.

C) A identidade de referência.

D) Somente uma ocorrência parcial sempre.

E) Somente a primeira letra.

**Gabarito: B.** Busca parcial pode ser feita com operações de Matcher como find.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.7, páginas 527–532 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 14.7

Em Matcher, find busca principalmente:

A) Uma thread.

B) Um arquivo.

C) Uma próxima subsequência correspondente.

D) Apenas correspondência da string inteira.

E) Somente igualdade de objetos.

**Gabarito: C.** Find permite localizar ocorrências sucessivas no texto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 14, seção 14.7, páginas 527–532 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
