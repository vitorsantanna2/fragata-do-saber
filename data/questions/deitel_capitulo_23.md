# Deitel — capítulo 23: Concorrência

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_23.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 23.1

Concorrência exige necessariamente execução simultânea em núcleos diferentes?

A) Somente para Runnable.

B) Sim, sempre.

C) Não; tarefas podem progredir de forma intercalada.

D) Não, porque paralelismo é impossível.

E) Sim, em Java SE 8.

**Gabarito: C.** Paralelismo é uma forma de execução concorrente, não sua única possibilidade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.1, páginas 784 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 23.3

Runnable define qual método principal de tarefa?

A) start() como método abstrato.

B) executeSql().

C) main().

D) call() com retorno obrigatório.

E) run().

**Gabarito: E.** O framework pode executar o comportamento descrito em run.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.3, páginas 788–790 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 23.3

Executar diretamente `t.run()` inicia necessariamente outra thread?

A) Somente se retornar void.

B) Somente se public.

C) Não.

D) Sim, sempre.

E) Sim, porque t tem tipo Thread.

**Gabarito: C.** Uma chamada normal a run executa no contexto do chamador.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.3, páginas 788–790 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 23.3

Para solicitar o início de execução de um Thread novo, usa-se:

A) close().

B) run() diretamente.

C) notify() fora de monitor.

D) start().

E) commit().

**Gabarito: D.** Start inicia o ciclo de execução da nova thread.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.3, páginas 788–790 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 23.3

Um ExecutorService tem como papel típico:

A) Substituir todos os locks.

B) Gerenciar execução de tarefas, frequentemente por pool de threads.

C) Ordenar toda coleção.

D) Representar um arquivo.

E) Executar SQL sempre.

**Gabarito: B.** Tarefas e gerenciamento de threads podem ser separados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.3, páginas 788–790 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 23.3

Shutdown em ExecutorService impede normalmente:

A) Aceitar novas tarefas, mantendo o processamento das já submetidas conforme o contrato.

B) Qualquer chamada a awaitTermination.

C) Toda tarefa já iniciada de forma imediata e garantida.

D) A coleta de lixo.

E) A compilação.

**Gabarito: A.** Shutdown não é sinônimo de término instantâneo de todo trabalho.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.3, páginas 788–790 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 23.4

Uma condição de corrida aparece quando:

A) Há somente uma thread sem compartilhamento.

B) Uma classe tem dois construtores.

C) Um método é final.

D) Todos os valores são constantes.

E) O resultado depende de interações não coordenadas entre acessos concorrentes.

**Gabarito: E.** Estado compartilhado mutável exige coordenação apropriada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.4, páginas 791–797 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Difícil — seção 23.4

O incremento `contador++` é necessariamente atômico entre threads?

A) Sim, sempre.

B) Somente se contador for int.

C) Somente se começar em zero.

D) Não.

E) Sim, se public.

**Gabarito: D.** A operação envolve leitura, cálculo e escrita.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.4, páginas 791–797 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 23.4

Synchronized em método de instância usa normalmente qual monitor?

A) O do arquivo-fonte.

B) Um monitor aleatório.

C) Sempre o da classe Object global.

D) O do objeto receptor.

E) O do pacote.

**Gabarito: D.** Instâncias distintas podem ter monitores distintos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.4, páginas 791–797 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Difícil — seção 23.4

Dois métodos synchronized no mesmo objeto podem ser executados simultaneamente por threads diferentes mantendo o mesmo monitor?

A) Somente se retornarem int.

B) Sim, sempre.

C) Não, há exclusão mútua desse monitor.

D) Somente quando public.

E) Sim, se tiverem nomes diferentes.

**Gabarito: C.** O lock protege o monitor, não apenas o nome de cada método.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.4, páginas 791–797 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 23.4

Thread.sleep libera automaticamente monitores synchronized já mantidos pela thread?

A) Não.

B) Somente o da classe.

C) Somente em main.

D) Sim, se o atraso for positivo.

E) Sim, todos.

**Gabarito: A.** Dormir não substitui os mecanismos de espera com liberação de monitor.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.4, páginas 791–797 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 23.7

Object.wait, chamado corretamente com o monitor adquirido, faz principalmente:

A) Confirmar os dados.

B) Encerrar sempre a thread.

C) Criar outra thread.

D) Liberar todos os locks da JVM.

E) Suspender a thread e liberar aquele monitor enquanto espera.

**Gabarito: E.** Ao prosseguir, a thread precisa readquirir o monitor.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.7, páginas 806–810 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Difícil — seção 23.7

Uma condição associada a wait deve ser reavaliada normalmente em:

A) Um loop.

B) Um import.

C) Um comentário.

D) Uma declaração de pacote.

E) Um método sem corpo.

**Gabarito: A.** Acordar não garante que a condição desejada continue verdadeira.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.7, páginas 806–810 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 23.6

Uma ArrayBlockingQueue cheia pode fazer put:

A) Aguardar espaço disponível.

B) Eliminar sempre a cabeça.

C) Crescer sem limite.

D) Retornar imediatamente com sucesso falso.

E) Converter o item em null.

**Gabarito: A.** A fila bloqueante coordena produtor e consumidor conforme capacidade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.6, páginas 803–805 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 23.6

Em uma ArrayBlockingQueue vazia, take pode:

A) Ordenar seus tipos.

B) Aguardar um elemento disponível.

C) Criar um objeto padrão.

D) Retornar zero sempre.

E) Apagar a fila.

**Gabarito: B.** O bloqueio evita consumir um item inexistente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.6, páginas 803–805 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 23.9

Ao usar um Lock explícito, liberar em finally ajuda a:

A) Trocar o monitor da JVM.

B) Evitar retenção do lock quando o corpo falha.

C) Eliminar a necessidade de adquirir o lock.

D) Impedir todas as exceções.

E) Garantir ausência de qualquer deadlock.

**Gabarito: B.** A liberação precisa ocorrer nos caminhos de saída apropriados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.9, páginas 817–821 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 23.11

SwingWorker é útil para:

A) Executar toda tarefa no paintComponent.

B) Tornar componentes imutáveis.

C) Substituir JDBC.

D) Executar trabalho demorado fora da thread de eventos Swing.

E) Eliminar qualquer sincronização.

**Gabarito: D.** Separar trabalho e atualização da interface ajuda a manter responsividade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.11, páginas 823–833 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 23.14

Callable difere de Runnable principalmente por permitir:

A) Ausência de método.

B) Resultado e lançamento de exceções verificadas pelo contrato call.

C) Somente execução gráfica.

D) Modificar todo objeto sem lock.

E) Iniciar threads sem framework obrigatoriamente.

**Gabarito: B.** Future pode representar a conclusão da tarefa submetida.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.14, páginas 837–840 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 23.14

Future.get pode bloquear porque:

A) Ele exige um evento de teclado.

B) Ele compila o código-fonte.

C) A tarefa ainda pode não ter concluído.

D) Ele aguarda obrigatoriamente a coleta de lixo.

E) Ele sempre dorme por tempo fixo.

**Gabarito: C.** A obtenção do resultado depende da conclusão ou de outra condição prevista no contrato.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.14, páginas 837–840 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 23.13

Streams paralelos são sempre mais rápidos que sequenciais?

A) Sim, por definição.

B) Sim, independentemente da tarefa.

C) Não, porque nunca executam em paralelo.

D) Somente para listas vazias.

E) Não; dependem de carga, custos e recursos.

**Gabarito: E.** Coordenação e divisão do trabalho também possuem custos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 23, seção 23.13, páginas 835–836 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
