# Deitel — capítulo 11: Tratamento de exceção: um exame mais profundo

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_11.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 11.2

Divisão inteira por zero em tempo de execução lança normalmente:

A) ArithmeticException.

B) Nenhuma exceção, retorna infinito int.

C) NumberFormatException.

D) IOException.

E) ClassCastException.

**Gabarito: A.** O comportamento difere da aritmética de ponto flutuante.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.2, páginas 384–385 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 11.3

Um catch compatível recebe uma exceção lançada em seu try para:

A) Ignorar qualquer erro de compilação.

B) Mudar automaticamente o tipo da exceção.

C) Tratar a condição excepcional.

D) Criar sempre outro objeto de negócio.

E) Reexecutar sempre toda a JVM.

**Gabarito: C.** O fluxo salta para um tratador compatível.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.3, páginas 386–388 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 11.3

Após um lançamento no meio de try, os comandos restantes desse try executam normalmente?

A) Somente se public.

B) Sim, sempre.

C) Sim, antes do catch.

D) Não, o fluxo é desviado.

E) Somente com arrays.

**Gabarito: D.** O tratamento não retoma automaticamente no ponto seguinte ao lançamento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.3, páginas 386–388 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Difícil — seção 11.3

Catch de Exception antes de catch de IOException pode causar:

A) Coleta de lixo.

B) Erro por tratador específico inalcançável.

C) Apenas um aviso sem consequência.

D) Execução obrigatória dos dois.

E) Seleção automática do mais específico independentemente da ordem.

**Gabarito: B.** Uma captura ampla pode tornar a posterior redundante e inalcançável.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.3, páginas 386–388 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 11.5

IOException é normalmente uma exceção:

A) Uma anotação.

B) Primitiva.

C) Verificada.

D) Sempre ignorada pelo compilador.

E) Subclasse de Error.

**Gabarito: C.** Ela precisa ser tratada ou declarada quando exigido pelo contexto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.5, páginas 390–391 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 11.5

RuntimeException e suas subclasses são:

A) Obrigatoriamente declaradas em throws.

B) Tipos primitivos.

C) Somente erros léxicos.

D) Não verificadas.

E) Sempre verificadas.

**Gabarito: D.** Não há a mesma obrigação de captura ou declaração das verificadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.5, páginas 390–391 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 11.5

Qual é a raiz comum de Exception e Error?

A) IOException.

B) Exception.

C) RuntimeException.

D) ObjectException.

E) Throwable.

**Gabarito: E.** Throwable organiza os objetos que podem ser lançados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.5, páginas 390–391 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 11.5

Declarar throws significa:

A) Capturar qualquer exceção automaticamente.

B) Executar finally.

C) Lançar a exceção imediatamente.

D) Informar exceções que podem propagar do método.

E) Encerrar a compilação.

**Gabarito: D.** Throws na assinatura difere de throw no corpo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.5, páginas 390–391 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 11.3

A instrução throw serve para:

A) Importar o tipo da exceção.

B) Criar uma regra de banco.

C) Marcar um campo como final.

D) Retornar sempre null.

E) Lançar explicitamente uma exceção.

**Gabarito: E.** O objeto lançado precisa ser compatível com Throwable.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.3, páginas 386–388 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 11.6

Um finally é destinado principalmente a:

A) Converter exceções em boolean.

B) Capturar automaticamente qualquer IOException.

C) Impedir toda interrupção da JVM.

D) Executar ações de finalização ao sair do try/catch, nas condições normais de execução.

E) Garantir nova tentativa do try.

**Gabarito: D.** Encerramentos abruptos da JVM não são cobertos por uma promessa absoluta de execução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.6, páginas 392–395 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 11.6

Um return em finally pode:

A) Confirmar uma transação automaticamente.

B) Substituir um retorno ou exceção pendente.

C) Transformar finally em construtor.

D) Tornar o catch obrigatório.

E) Ser sempre proibido.

**Gabarito: B.** Esse comportamento pode ocultar falhas e deve ser compreendido ao ler o fluxo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.6, páginas 392–395 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 11.7

Se o método atual não trata a exceção, a busca por tratador pode:

A) Propagar pela pilha de chamadas.

B) Alterar a classe real do objeto.

C) Ignorar a exceção sempre.

D) Reiniciar todo método automaticamente.

E) Converter a pilha em fila.

**Gabarito: A.** A liberação da pilha encerra contextos até encontrar tratamento aplicável.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.7, páginas 396–397 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 11.7

O rastreamento de pilha ajuda a identificar:

A) O total de objetos coletados.

B) A sequência de chamadas associada à falha.

C) A senha do usuário.

D) Somente o tamanho dos arquivos.

E) A ordem das colunas de tabelas.

**Gabarito: B.** Ele auxilia a localizar a origem e o caminho da exceção.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.7, páginas 396–397 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 11.8

Encadear exceções preservando a causa permite:

A) Eliminar o erro original do histórico necessariamente.

B) Dispensar todo tratamento.

C) Retomar automaticamente a operação.

D) Transformar checked em primitive.

E) Manter o contexto do erro original.

**Gabarito: E.** Uma exceção de nível superior pode transportar a causa subjacente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.8, páginas 398 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 11.9

Uma exceção personalizada verificada pode estender:

A) Thread.

B) Integer.

C) Exception, sem derivar de RuntimeException.

D) Scanner.

E) String.

**Gabarito: C.** A escolha da superclasse determina parte do regime de verificação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.9, páginas 399 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 11.10

Uma pré-condição descreve:

A) Somente o resultado final.

B) O que deve valer antes da operação.

C) A assinatura de main.

D) Uma regra do coletor.

E) A ordem de imports.

**Gabarito: B.** Pré e pós-condições ajudam a definir o contrato do método.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.10, páginas 400 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 11.10

Uma pós-condição descreve:

A) O estado ou resultado esperado após execução bem-sucedida.

B) Um comentário obrigatório.

C) Uma senha anterior.

D) Somente o tipo da entrada.

E) O estado da JVM antes de iniciar.

**Gabarito: A.** Ela caracteriza a garantia da operação quando concluída conforme o contrato.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.10, páginas 400 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 11.11

Assertivas Java podem estar desabilitadas em execução?

A) Sim.

B) Não, são sempre executadas.

C) Somente em construtores.

D) Somente em interfaces.

E) Não, equivalem a if obrigatório.

**Gabarito: A.** Por isso não devem executar efeitos essenciais ou substituir validação pública necessária.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.11, páginas 401 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 11.12

Um recurso no try-with-resources deve ser compatível com:

A) Cloneable apenas.

B) Runnable apenas.

C) Serializable apenas.

D) Comparable apenas.

E) AutoCloseable.

**Gabarito: E.** O mecanismo invoca close ao sair do escopo apropriado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.12, páginas 402–403 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 11.12

Dois recursos são declarados em ordem A, B no try-with-resources. A ordem normal de fechamento é:

A) Nenhum é fechado.

B) A, depois B.

C) B, depois A.

D) Somente A.

E) Aleatória.

**Gabarito: C.** O fechamento ocorre na ordem inversa à declaração.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 11, seção 11.12, páginas 402–403 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
