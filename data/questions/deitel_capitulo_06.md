# Deitel — capítulo 6: Métodos: um exame mais profundo

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_06.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 6.2

Dividir um programa em métodos favorece:

A) Eliminação de testes.

B) Modularização e reutilização.

C) Variáveis globais obrigatórias.

D) Ausência de parâmetros.

E) Duplicação obrigatória.

**Gabarito: B.** Métodos separam responsabilidades e podem ser reutilizados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.2, páginas 193–194 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 6.3

Um método static pode ser chamado normalmente por:

A) Qualquer variável não inicializada.

B) Nome da classe e nome do método.

C) Somente super.

D) Somente this.

E) Um construtor privado de outra classe.

**Gabarito: B.** A chamada não exige uma instância específica.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.3, páginas 195 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 6.3

Um método static possui referência this?

A) Sim, sempre.

B) Sim, quando public.

C) Somente em main.

D) Somente se retornar int.

E) Não.

**Gabarito: E.** This representa a instância atual, inexistente no contexto estático.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.3, páginas 195 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 6.3

Qual valor de `Math.max(8,3)`?

A) 8.

B) 24.

C) 11.

D) 5.

E) 3.

**Gabarito: A.** Max retorna o maior argumento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.3, páginas 195 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 6.3

Qual valor de `Math.sqrt(81.0)`?

A) 81.0.

B) 8.0.

C) Erro.

D) 9.0.

E) 40.5.

**Gabarito: D.** A operação calcula a raiz quadrada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.3, páginas 195 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 6.4

Ao chamar um método, argumentos correspondem aos parâmetros por:

A) Posição e compatibilidade de tipos.

B) Nome do usuário.

C) Somente ordem alfabética.

D) Nome do arquivo.

E) Tamanho do comentário.

**Gabarito: A.** Os nomes locais dos argumentos não determinam essa associação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.4, páginas 196–198 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 6.4

Um método declarado int pode retornar `return 3;`?

A) Sim, mas vira void.

B) Não, somente double.

C) Somente se construtor.

D) Sim.

E) Não, exige String.

**Gabarito: D.** O valor retornado precisa ser compatível com o retorno declarado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.4, páginas 196–198 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 6.5

Um método não void deve retornar valor em todos os caminhos que podem terminar normalmente?

A) Não, null serve para qualquer primitivo.

B) Não, recebe sempre zero.

C) Sim.

D) Somente quando public.

E) Somente em main.

**Gabarito: C.** O compilador verifica os caminhos de retorno relevantes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.5, páginas 199 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 6.6

Cada chamada de método pode acrescentar à pilha:

A) Um quadro de ativação.

B) Uma nova classe-fonte.

C) Um pacote.

D) Uma janela obrigatória.

E) Uma licença.

**Gabarito: A.** O quadro mantém o contexto necessário à execução e ao retorno.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.6, páginas 200 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 6.6

Ao terminar um método, o controle retorna normalmente:

A) Ao início da JVM.

B) Ao primeiro import.

C) Sempre ao início de main.

D) Ao construtor de Object.

E) Ao ponto apropriado de seu chamador.

**Gabarito: E.** A pilha de chamadas registra a continuação da execução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.6, páginas 200 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 6.7

Passar int para parâmetro double normalmente admite:

A) Erro obrigatório.

B) Conversão para String.

C) Promoção numérica implícita.

D) Unboxing obrigatório.

E) Conversão para boolean.

**Gabarito: C.** O alargamento é uma conversão permitida nesse contexto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.7, páginas 200 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 6.7

Passar double para parâmetro int exige normalmente:

A) Conversão para boolean.

B) Apenas import.

C) Nenhum cuidado de tipo.

D) Promoção automática sem perdas.

E) Conversão explícita adequada.

**Gabarito: E.** Estreitamento pode descartar informação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.7, páginas 200 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 6.7

Qual resultado de `(int) 7.9`?

A) 8.

B) 7.9.

C) Erro.

D) 7.

E) 0.

**Gabarito: D.** A conversão descarta a fração em direção a zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.7, páginas 200 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 6.9

`nextInt(6)` de um gerador compatível retorna valores em:

A) 1 a 5.

B) -6 a 6.

C) 0 a 5.

D) 0 a 6.

E) 1 a 6.

**Gabarito: C.** O limite superior inteiro é exclusivo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.9, páginas 202–205 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 6.9

Qual expressão transforma `nextInt(6)` em valores de 1 a 6?

A) `nextInt(7)`.

B) `1 + nextInt(6)`.

C) `6 + nextInt(1)`.

D) `nextInt(6) - 1`.

E) `nextInt(5)`.

**Gabarito: B.** Adicionar um desloca o intervalo 0–5 para 1–6.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.9, páginas 202–205 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 6.10

Um enum permite definir:

A) Variáveis sem tipo.

B) Um conjunto de constantes nomeadas de um tipo.

C) Apenas palavras reservadas.

D) Somente números de ponto flutuante.

E) Uma única constante global sem classe.

**Gabarito: B.** Enums modelam alternativas fixas com identidade de tipo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.10, páginas 206–209 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 6.11

Uma variável local de mesmo nome de um campo pode:

A) Alterar o pacote.

B) Apagar o campo.

C) Sombrear esse campo em seu escopo.

D) Impedir usar this.campo em método de instância.

E) Transformar o campo em static.

**Gabarito: C.** Qualificar o campo com this pode desfazer a ambiguidade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.11, páginas 210 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 6.12

Sobrecarga de métodos exige diferença em:

A) Apenas retorno.

B) Somente visibilidade.

C) Apenas nomes dos parâmetros.

D) Listas de parâmetros.

E) Somente comentários.

**Gabarito: D.** Quantidade, tipos ou ordem dos tipos podem distinguir assinaturas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.12, páginas 211–212 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 6.12

Dois métodos diferem apenas no tipo de retorno. Isso basta para sobrecarga?

A) Somente se public.

B) Somente para int e double.

C) Sim, em qualquer classe abstrata.

D) Sim, sempre.

E) Não.

**Gabarito: E.** O retorno isoladamente não distingue assinaturas de métodos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.12, páginas 211–212 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 6.4

Um método recebe int x e altera seu parâmetro. O int original do chamador muda automaticamente?

A) Não, o argumento primitivo foi passado por valor.

B) Sim, sempre.

C) Somente se x for positivo.

D) Somente se public.

E) Sim, porque Java usa referência para primitivos.

**Gabarito: A.** A alteração afeta a cópia local do parâmetro.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 6, seção 6.4, páginas 196–198 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
