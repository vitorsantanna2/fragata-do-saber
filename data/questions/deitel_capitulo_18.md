# Deitel — capítulo 18: Recursão

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_18.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 18.2

Uma solução recursiva precisa normalmente de:

A) Somente variáveis static.

B) Caso básico e progressão em direção a ele.

C) Ausência de argumentos.

D) Uma interface gráfica.

E) Um loop infinito.

**Gabarito: B.** Sem término adequado, chamadas podem continuar até esgotar recursos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.2, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 18.3

Para f(0)=1 e f(n)=n*f(n-1), qual é f(4)?

A) 16.

B) 4.

C) 24.

D) 0.

E) 12.

**Gabarito: C.** O cálculo é 4*3*2*1.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.3, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 18.3

Qual valor de f(0) na definição usual de fatorial?

A) -1.

B) 0.

C) 1.

D) 10.

E) Indefinido necessariamente.

**Gabarito: C.** O caso básico permite encerrar a expansão recursiva.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.3, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 18.3

Chamar f(n-1) sem verificar n negativo em um fatorial definido apenas para n não negativo pode:

A) Impedir atingir o caso básico previsto.

B) Impedir compilação obrigatoriamente.

C) Produzir sempre zero imediatamente.

D) Corrigir automaticamente a entrada.

E) Criar um array.

**Gabarito: A.** O domínio de entrada precisa ser validado conforme o algoritmo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.3, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 18.4

BigInteger é útil para fatoriais grandes porque:

A) Representa inteiros de precisão arbitrária limitada pelos recursos.

B) É sempre mais rápido que int.

C) Converte todo resultado em double.

D) Não usa memória.

E) Aceita apenas números de até 32 bits.

**Gabarito: A.** Int e long possuem limites fixos de representação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.4, páginas 646 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 18.5

Com F(0)=0, F(1)=1 e F(n)=F(n-1)+F(n-2), qual é F(6)?

A) 6.

B) 21.

C) 5.

D) 13.

E) 8.

**Gabarito: E.** A sequência inicial é 0,1,1,2,3,5,8.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.5, páginas 647–648 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Difícil — seção 18.5

A implementação ingênua recursiva de Fibonacci repete muito trabalho por:

A) Não possuir casos básicos possíveis.

B) Recalcular os mesmos subproblemas.

C) Ordenar os resultados.

D) Usar apenas um quadro de pilha.

E) Eliminar as chamadas anteriores.

**Gabarito: B.** O número de chamadas cresce rapidamente sem reutilização de resultados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.5, páginas 647–648 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 18.6

Chamadas recursivas possuem variáveis locais:

A) Sempre globais e únicas.

B) Inexistentes.

C) Compartilhadas como static por definição.

D) Sem tipo.

E) Próprias de cada ativação.

**Gabarito: E.** Cada quadro de chamada preserva seu contexto local.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.6, páginas 649–650 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Difícil — seção 18.6

Recursão muito profunda pode lançar:

A) Um erro de sintaxe.

B) IOException obrigatória.

C) ClassCastException sempre.

D) Nenhuma falha possível.

E) StackOverflowError.

**Gabarito: E.** A pilha de chamadas possui recursos limitados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.6, páginas 649–650 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 18.6

Ao retornar de um caso básico, o fluxo:

A) Apaga todos os resultados.

B) Torna-se paralelo obrigatoriamente.

C) Cria novos parâmetros globais.

D) Retoma as chamadas pendentes em ordem de retorno.

E) Reinicia automaticamente main.

**Gabarito: D.** Cada chamador prossegue após sua chamada recursiva.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.6, páginas 649–650 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 18.7

Toda solução recursiva é necessariamente mais rápida que a iterativa?

A) Somente para números positivos.

B) Sim, por usar a pilha.

C) Sim, sempre.

D) Não.

E) Não, porque recursão não executa.

**Gabarito: D.** O custo depende do algoritmo e de sua implementação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.7, páginas 651 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 18.7

Uma versão iterativa de fatorial pode evitar principalmente:

A) Um quadro de chamada adicional para cada nível.

B) Todo risco de overflow numérico.

C) Qualquer variável local.

D) A necessidade de entrada válida.

E) Toda multiplicação.

**Gabarito: A.** Trocar recursão por iteração não altera os limites de int ou long.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.7, páginas 651 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 18.2

Para somar de n até zero, qual chamada avança para o caso básico com n positivo?

A) soma(n+1).

B) soma(2*n).

C) soma(n).

D) soma(n+2).

E) soma(n-1).

**Gabarito: E.** O argumento diminui em direção ao zero.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.2, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 18.2

Se s(0)=0 e s(n)=n+s(n-1), qual é s(4)?

A) 10.

B) 24.

C) 6.

D) 16.

E) 4.

**Gabarito: A.** O resultado soma 4, 3, 2 e 1.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.2, páginas 644–645 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 18.8

O número mínimo de movimentos de Hanói com n discos é:

A) n mais 1.

B) 2 elevado a n, menos 1.

C) n ao quadrado.

D) n fatorial.

E) 2n.

**Gabarito: B.** A recorrência é T(n)=2T(n-1)+1.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.8, páginas 652–653 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 18.8

Quantos movimentos mínimos são necessários em Hanói com três discos?

A) 6.

B) 9.

C) 8.

D) 7.

E) 3.

**Gabarito: D.** Aplicando 2^3-1, obtêm-se sete movimentos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.8, páginas 652–653 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 18.9

Fractais se relacionam à recursão por:

A) Exigência de números inteiros apenas.

B) Ausência de qualquer padrão.

C) Repetição de estruturas semelhantes em escalas menores.

D) Eliminação de casos básicos.

E) Armazenamento obrigatório em arquivo.

**Gabarito: C.** Desenhos recursivos reduzem o problema até uma profundidade ou escala limite.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.9, páginas 654–660 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 18.10

Backtracking consiste em:

A) Transformar cada escolha em thread.

B) Retornar a escolhas anteriores quando um caminho falha.

C) Aceitar obrigatoriamente a primeira escolha.

D) Executar apenas loops sem condição.

E) Excluir todos os casos básicos.

**Gabarito: B.** A busca pode explorar alternativas após desfazer uma decisão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.10, páginas 661 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 18.10

Marcar posições já visitadas em uma busca de labirinto pode ajudar a:

A) Garantir sempre caminho único.

B) Dispensar teste de destino.

C) Eliminar todos os caminhos válidos.

D) Evitar ciclos e exploração repetida indevida.

E) Criar um novo labirinto.

**Gabarito: D.** A marcação precisa ser coerente com a estratégia de busca adotada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.10, páginas 661 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 18.7

Qual análise distingue memória da pilha e tempo de execução recursivo?

A) A pilha não consome memória.

B) São sempre o mesmo número.

C) São custos diferentes e devem ser avaliados separadamente.

D) Toda recursão usa espaço constante.

E) Tempo depende apenas do nome do método.

**Gabarito: C.** Profundidade de chamadas e quantidade total de chamadas podem ter crescimentos distintos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 18, seção 18.7, páginas 651 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
