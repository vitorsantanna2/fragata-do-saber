# Deitel — capítulo 4: Instruções de controle: parte 1; operadores de atribuição ++ e --

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_04.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 4.2

Um algoritmo define principalmente:

A) Um arquivo .class.

B) Uma interface gráfica.

C) Uma sequência de ações para resolver um problema.

D) A frequência do processador.

E) Somente uma classe pública.

**Gabarito: C.** A ordem e as condições de execução integram a solução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.2, páginas 115 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 4.3

Qual finalidade tem o pseudocódigo?

A) Executar diretamente na JVM.

B) Planejar a lógica sem exigir sintaxe Java estrita.

C) Substituir bytecode.

D) Dispensar um algoritmo.

E) Definir somente variáveis.

**Gabarito: B.** Pseudocódigo é uma representação informal de soluções.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.3, páginas 115 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 4.4

Qual estrutura escolhe caminhos conforme uma condição?

A) Sequência apenas.

B) Declaração import.

C) Pacote.

D) Comentário.

E) Seleção.

**Gabarito: E.** If e if…else são estruturas de seleção.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.4, páginas 116 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 4.5

Se `int x=4; if(x>5) x++;`, qual é x?

A) 4.

B) 6.

C) 3.

D) 5.

E) Erro.

**Gabarito: A.** A condição é falsa e o incremento não ocorre.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.5, páginas 117 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 4.6

O else associa-se, sem chaves que determinem outra estrutura, ao:

A) If anterior mais próximo ainda sem else.

B) Método main.

C) Último while.

D) Primeiro if do arquivo.

E) Pacote da classe.

**Gabarito: A.** Chaves tornam explícita a estrutura de seleções aninhadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.6, páginas 118–121 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 4.6

Qual resultado de `int x=2; int y=x>3?10:20;`?

A) y=0.

B) Erro.

C) y=2.

D) y=20.

E) y=10.

**Gabarito: D.** O operador condicional escolhe a expressão correspondente ao teste falso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.6, páginas 118–121 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 4.8

Um while pode executar seu corpo zero vezes?

A) Somente se houver break.

B) Não, é igual ao do…while.

C) Somente com arrays.

D) Sim, se a condição inicial for falsa.

E) Não, executa sempre uma vez.

**Gabarito: D.** O teste do while antecede o corpo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.8, páginas 124 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 4.8

Após `int n=1; while(n<5) n*=2;`, qual é n?

A) 16.

B) 2.

C) 4.

D) 8.

E) 5.

**Gabarito: D.** Os valores produzidos são 2, 4 e 8; então o teste falha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.8, páginas 124 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 4.8

Após `int n=0; while(n<3){n++;}`, qual é n?

A) 4.

B) 0.

C) 3.

D) 2.

E) 1.

**Gabarito: C.** O incremento ocorre três vezes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.8, páginas 124 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 4.9

Um contador controla normalmente:

A) Somente a soma dos valores.

B) O tipo do pacote.

C) A referência this.

D) Quantas repetições ocorreram.

E) A assinatura do método.

**Gabarito: D.** Contador e acumulador possuem papéis diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.9, páginas 125–127 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 4.9

Qual papel tem um acumulador?

A) Contar sempre por um exclusivamente.

B) Combinar valores sucessivos, por exemplo em uma soma.

C) Escolher nomes de classes.

D) Executar imports.

E) Impedir repetições.

**Gabarito: B.** O valor acumulado é atualizado durante o processamento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.9, páginas 125–127 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 4.9

Para entradas 4, 6 e 7, soma 17 e contador 3, qual expressão preserva a fração da média?

A) `(double) soma / contador`.

B) `soma % contador`.

C) `soma / contador` sempre como double.

D) `(double)(soma / contador)`.

E) `contador / soma`.

**Gabarito: A.** Converter antes da divisão evita truncar a média por divisão inteira.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.9, páginas 125–127 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 4.10

Uma sentinela na leitura de dados representa:

A) Um tipo primitivo novo.

B) Um valor especial de término.

C) Uma exceção sempre lançada.

D) Um contador crescente.

E) Um dado obrigatoriamente incluído na média.

**Gabarito: B.** A sentinela deve ser reconhecida sem contaminar os cálculos dos dados válidos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.10, páginas 128–132 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 4.10

Por que validar contador antes de calcular média?

A) Para garantir que todos os valores sejam iguais.

B) Para eliminar o loop.

C) Para evitar dividir por zero quando não há dados válidos.

D) Para converter a sentinela em dado.

E) Para criar um objeto.

**Gabarito: C.** Nenhuma entrada válida deixa o contador em zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.10, páginas 128–132 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 4.12

Após `int x=4; x+=3;`, qual é x?

A) 1.

B) 12.

C) 3.

D) 4.

E) 7.

**Gabarito: E.** A atribuição composta soma e armazena o resultado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.12, páginas 137–139 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 4.13

Após `int x=5; int y=x++;`, quais são x e y?

A) 5 e 5.

B) 6 e 5.

C) 4 e 5.

D) 5 e 6.

E) 6 e 6.

**Gabarito: B.** O pós-incremento produz o valor anterior e incrementa x.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.13, páginas 137–139 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 4.13

Após `int x=5; int y=++x;`, quais são x e y?

A) 4 e 4.

B) 5 e 6.

C) 6 e 5.

D) 5 e 5.

E) 6 e 6.

**Gabarito: E.** O pré-incremento incrementa antes de produzir o valor da expressão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.13, páginas 137–139 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 4.11

Um loop externo de três iterações contém outro de duas, sem desvios. Quantas execuções do corpo interno?

A) 9.

B) 3.

C) 2.

D) 5.

E) 6.

**Gabarito: E.** Cada iteração externa executa as duas iterações internas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.11, páginas 133–136 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 4.14

Qual tipo primitivo representa valores verdadeiro e falso?

A) String.

B) Boolean.

C) boolean.

D) Object.

E) byte exclusivamente.

**Gabarito: C.** Boolean é classe empacotadora; boolean é o primitivo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.14, páginas 140–142 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 4.14

Qual tipo primitivo representa números de ponto flutuante de dupla precisão?

A) double.

B) char.

C) long.

D) boolean.

E) int.

**Gabarito: A.** Double e double também se distinguem como classe e primitivo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 4, seção 4.14, páginas 140–142 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
