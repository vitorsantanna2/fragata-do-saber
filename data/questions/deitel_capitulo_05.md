# Deitel — capítulo 5: Instruções de controle: parte 2; operadores lógicos

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_05.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 5.2

Um loop controlado por contador precisa, entre outros elementos, de:

A) Apenas um import.

B) Inicialização, teste e atualização do controle.

C) Um switch obrigatório.

D) Somente um comentário.

E) Um construtor obrigatório.

**Gabarito: B.** Sem atualização adequada, a condição pode nunca deixar de valer.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.2, páginas 155 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 5.3

Quantas vezes executa `for(int i=0;i<4;i++)` sem desvios?

A) 4.

B) 1.

C) 3.

D) 5.

E) 0.

**Gabarito: A.** O corpo usa os valores 0, 1, 2 e 3.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.3, páginas 156–159 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 5.3

Qual valor de s após `int s=0; for(int i=1;i<=4;i++) s+=i;`?

A) 4.

B) 0.

C) 15.

D) 6.

E) 10.

**Gabarito: E.** A soma é 1+2+3+4.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.3, páginas 156–159 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 5.3

Uma variável i declarada no cabeçalho de for está disponível após o loop?

A) Sim, sempre globalmente.

B) Somente em main.

C) Somente se public.

D) Não, fora daquele escopo.

E) Sim, com valor zero.

**Gabarito: D.** A declaração pertence ao escopo da instrução for.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.3, páginas 156–159 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 5.4

Quais valores percorre `for(int i=2;i<=8;i+=2)`?

A) 0, 2, 4 e 6.

B) 2, 4, 6 e 8.

C) 4, 6 e 8.

D) 2 e 8 apenas.

E) 2, 3, 4, 5, 6, 7 e 8.

**Gabarito: B.** A atualização acrescenta dois após cada execução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.4, páginas 160–162 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 5.3

Omitir a condição em `for(;;)` significa:

A) Zero iterações.

B) Uma única iteração.

C) Condição de continuação verdadeira.

D) Condição sempre falsa.

E) Erro obrigatório de compilação.

**Gabarito: C.** O término exige algum desvio ou outro encerramento apropriado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.3, páginas 156–159 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 5.5

Qual loop testa a condição após executar o corpo?

A) for tradicional.

B) while.

C) do…while.

D) Nenhum.

E) for aprimorado.

**Gabarito: C.** Do…while executa ao menos uma vez em seu fluxo normal.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.5, páginas 163–164 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 5.5

Após `int x=5; do{x++;}while(x<3);`, qual é x?

A) 5.

B) 6.

C) Erro.

D) 3.

E) 4.

**Gabarito: B.** O corpo executa uma vez antes do teste falso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.5, páginas 163–164 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 5.6

Sem break, um case de switch tradicional pode:

A) Reiniciar o switch.

B) Continuar pelos comandos dos cases seguintes.

C) Gerar erro obrigatório.

D) Converter a variável em boolean.

E) Executar apenas seu próprio rótulo sempre.

**Gabarito: B.** A passagem para os cases seguintes é chamada fall-through.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.6, páginas 165–168 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 5.6

No switch tradicional Java SE 8, qual tipo não é admitido como seletor?

A) double.

B) String.

C) int.

D) Um tipo enum.

E) char.

**Gabarito: A.** A seleção múltipla tradicional não aceita double.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.6, páginas 165–168 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 5.7

Java SE 8 admite String em switch?

A) Somente com arrays.

B) Não, somente int.

C) Sim, mas apenas por identidade de referência.

D) Sim, comparando os valores textuais dos cases.

E) Não, String é primitivo.

**Gabarito: D.** Os rótulos precisam respeitar as regras de constantes e tipos do switch.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.7, páginas 169–171 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 5.8

Um break sem rótulo dentro de um loop encerra:

A) Somente a expressão seguinte.

B) Todos os loops aninhados.

C) Sempre toda a JVM.

D) O método obrigatoriamente.

E) O loop ou switch envolvente mais próximo aplicável.

**Gabarito: E.** O alcance do desvio depende da estrutura envolvente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.8, páginas 172 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 5.8

Um continue sem rótulo em um for transfere o controle para:

A) O início do arquivo.

B) A inicialização do contador novamente.

C) A criação de outra thread.

D) A etapa de atualização, seguida de novo teste.

E) O fim obrigatório do método.

**Gabarito: D.** Continue abandona o restante da iteração corrente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.8, páginas 172 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 5.8

Qual soma resulta ao somar 1 a 4, ignorando 2 com continue?

A) 2.

B) 10.

C) 4.

D) 8.

E) 6.

**Gabarito: D.** Somam-se 1, 3 e 4.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.8, páginas 172 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 5.8

Um loop percorre i=1,2,3,4 e faz break antes de somar 3. Qual soma de i anteriores?

A) 6.

B) 4.

C) 3.

D) 0.

E) 10.

**Gabarito: C.** O break impede processar 3 e os valores posteriores.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.8, páginas 172 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 5.9

O operador &amp;&amp; usa curto-circuito quando o operando esquerdo é:

A) false.

B) true obrigatoriamente.

C) Sempre avalia ambos.

D) Um inteiro.

E) Uma String.

**Gabarito: A.** Uma conjunção já é falsa se o primeiro operando for falso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.9, páginas 173–177 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 5.9

A disjunção condicional deixa de avaliar a direita quando a esquerda é:

A) false.

B) null obrigatoriamente.

C) true.

D) Zero.

E) Um char.

**Gabarito: C.** Um operando verdadeiro já determina a disjunção condicional.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.9, páginas 173–177 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 5.9

Qual resultado de `!true`?

A) Erro.

B) null.

C) 0 como int.

D) true.

E) false.

**Gabarito: E.** A negação booleana inverte o valor lógico.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.9, páginas 173–177 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 5.9

Qual resultado de `true ^ true` com operandos booleanos?

A) false.

B) Erro.

C) null.

D) 1 como int.

E) true.

**Gabarito: A.** O OU exclusivo é verdadeiro quando os operandos diferem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.9, páginas 173–177 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 5.9

Em `x!=0 && 10/x>2`, com x=0, ocorre divisão por zero?

A) A expressão não compila.

B) Sim, mas o erro é ignorado.

C) Sim, sempre.

D) Somente no último loop.

E) Não, o segundo operando não é avaliado.

**Gabarito: E.** O curto-circuito protege a divisão nesse padrão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 5, seção 5.9, páginas 173–177 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
