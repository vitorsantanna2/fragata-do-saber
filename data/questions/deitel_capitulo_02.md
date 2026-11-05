# Deitel — capítulo 2: Introdução a aplicativos Java – entrada/saída e operadores

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_02.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 2.2

Qual assinatura inicia um aplicativo Java clássico?

A) public static void main(String[] args).

B) private main(String[] args).

C) static int start(String args).

D) public void main().

E) public static main().

**Gabarito: A.** A JVM procura a assinatura convencional do ponto de entrada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.2, páginas 63–67 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 2.2

Qual extensão identifica normalmente o código-fonte Java?

A) .sql.

B) .jar apenas.

C) .exe obrigatoriamente.

D) .class.

E) .java.

**Gabarito: E.** Arquivos .class contêm o resultado da compilação, não o fonte.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.2, páginas 63–67 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 2.2

Uma classe pública chamada Relatorio deve estar normalmente em:

A) Main.txt.

B) Qualquer arquivo .sql.

C) relatorio.class como fonte.

D) Relatorio.exe.

E) Relatorio.java.

**Gabarito: E.** O nome do arquivo-fonte acompanha o da classe pública.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.2, páginas 63–67 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 2.2

Java diferencia `saldo` de `Saldo`?

A) Somente em comentários.

B) Não, ignora maiúsculas.

C) Sim, são identificadores distintos.

D) Apenas em pacotes externos.

E) Somente em strings.

**Gabarito: C.** A linguagem distingue maiúsculas e minúsculas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.2, páginas 63–67 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 2.2

Qual trecho é um comentário de linha Java?

A) `** observação`.

B) `# observação`.

C) `-- observação`.

D) `// observação`.

E) `<!-- observação -->`.

**Gabarito: D.** O comentário // termina no final da linha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.2, páginas 63–67 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 2.3

Qual chamada acrescenta uma quebra de linha ao texto?

A) String.length.

B) Math.abs.

C) System.out.println.

D) System.out.print.

E) Scanner.nextInt.

**Gabarito: C.** println encerra a linha após imprimir seu argumento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.3, páginas 68–69 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 2.3

O que `System.out.print("A"); System.out.print("B");` imprime?

A) A B.

B) A e B em linhas distintas.

C) BA.

D) AB.

E) Erro de compilação.

**Gabarito: D.** print não insere separador nem quebra de linha automaticamente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.3, páginas 68–69 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 2.4

Qual especificador de printf corresponde a inteiro decimal?

A) %d.

B) %n.

C) %b.

D) %f.

E) %s apenas.

**Gabarito: A.** O especificador precisa ser compatível com o argumento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.4, páginas 70 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 2.4

Qual especificador de printf representa separador de linha da plataforma?

A) %c.

B) %d.

C) %x.

D) %f.

E) %n.

**Gabarito: E.** %n evita fixar uma convenção específica de quebra de linha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.4, páginas 70 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Fácil — seção 2.5

Qual pacote contém Scanner?

A) java.util.

B) java.awt.

C) javax.swing.

D) java.lang apenas.

E) java.sql.

**Gabarito: A.** Scanner pode analisar tokens recebidos de diferentes fontes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.5, páginas 71–74 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — seção 2.5

Qual método Scanner lê um próximo token inteiro?

A) nextLineInt().

B) parseNext().

C) nextInt().

D) intValue().

E) readInteger().

**Gabarito: C.** nextInt interpreta o token conforme as regras do Scanner.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.5, páginas 71–74 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Fácil — seção 2.5

Qual importação é implícita em arquivos Java?

A) java.util.

B) java.lang.

C) javax.swing.

D) java.sql.

E) java.awt.

**Gabarito: B.** String e System estão em java.lang.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.5, páginas 71–74 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — seção 2.7

Qual valor resulta de `17 / 5` com operandos int?

A) 4.

B) Erro.

C) 3.4.

D) 3.

E) 2.

**Gabarito: D.** A divisão inteira descarta a parte fracionária, truncando em direção a zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.7, páginas 76–77 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Fácil — seção 2.7

Qual valor resulta de `17 % 5`?

A) 0.

B) 5.

C) 3.

D) 2.

E) 3.4.

**Gabarito: D.** O operador % fornece o resto da divisão inteira nesse caso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.7, páginas 76–77 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — seção 2.7

Qual valor resulta de `2 + 3 * 4`?

A) 14.

B) 20.

C) 11.

D) 24.

E) 9.

**Gabarito: A.** A multiplicação tem precedência sobre a adição.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.7, páginas 76–77 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Fácil — seção 2.7

Qual valor resulta de `(2 + 3) * 4`?

A) 14.

B) 9.

C) 11.

D) 24.

E) 20.

**Gabarito: E.** Parênteses determinam a avaliação da soma antes da multiplicação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.7, páginas 76–77 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — seção 2.7

Após `int a=7; int b=a; a=9;`, qual é b?

A) Indefinido.

B) 7.

C) 0.

D) 9.

E) 16.

**Gabarito: B.** Atribuir um primitivo copia seu valor; não cria vínculo entre variáveis.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.7, páginas 76–77 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 2.8

Qual operador testa igualdade entre dois valores int?

A) :=.

B) ==.

C) equals como operador.

D) =&gt;.

E) =.

**Gabarito: B.** O sinal simples realiza atribuição, não comparação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.8, páginas 78–81 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 2.8

Em Java, a condição de um if deve possuir tipo:

A) Qualquer objeto.

B) char obrigatoriamente.

C) boolean.

D) String obrigatoriamente.

E) int obrigatoriamente.

**Gabarito: C.** Java não interpreta automaticamente um inteiro como condição booleana.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.8, páginas 78–81 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Fácil — seção 2.8

Um ponto e vírgula logo após `if (teste)` pode:

A) Tornar teste sempre verdadeiro.

B) Criar uma instrução vazia como corpo do if.

C) Ser sempre um erro léxico.

D) Eliminar a avaliação de teste.

E) Executar obrigatoriamente o bloco seguinte só se teste for verdadeiro.

**Gabarito: B.** O bloco seguinte pode ficar fora do controle do if.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 2, seção 2.8, páginas 78–81 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
