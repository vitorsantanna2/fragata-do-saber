# Deitel — capítulo 16: Coleções genéricas

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_16.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 16.3

Qual classe empacota o primitivo int?

A) Integer.

B) Long apenas.

C) String.

D) Int.

E) NumberInt.

**Gabarito: A.** Empacotadores permitem representar valores primitivos como objetos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.3, páginas 574 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 16.4

Autoboxing converte automaticamente:

A) Um int em boolean.

B) Uma lista em array primitivo sempre.

C) Uma classe em interface.

D) Qualquer objeto em String.

E) Um primitivo em seu empacotador correspondente.

**Gabarito: E.** A conversão depende do contexto de tipagem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.4, páginas 574 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 16.4

Fazer unboxing de uma referência Integer null pode lançar:

A) ArithmeticException.

B) IOException.

C) Erro de sintaxe obrigatório.

D) NullPointerException.

E) Nenhuma, retorna zero.

**Gabarito: D.** Não há valor primitivo disponível para extrair de null.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.4, páginas 574 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 16.5

Collection e Collections são:

A) Duas classes idênticas.

B) Dois tipos primitivos.

C) Duas implementações de mapas.

D) Uma interface e uma classe utilitária, respectivamente.

E) Duas anotações.

**Gabarito: D.** Nomes semelhantes representam papéis diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.5, páginas 575–580 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 16.6

Qual propriedade caracteriza List?

A) Tamanho sempre fixo.

B) Sequência com posições e possibilidade de repetição.

C) Acesso somente por chave única.

D) Ausência obrigatória de duplicatas.

E) Ordenação natural obrigatória.

**Gabarito: B.** Listas preservam uma organização sequencial e acesso posicional.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.6, páginas 575–580 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 16.10

Qual propriedade caracteriza Set?

A) Índices consecutivos obrigatórios.

B) Ausência de elementos duplicados segundo o contrato aplicável.

C) Ordenação natural em toda implementação.

D) Chaves sempre String.

E) Repetição ilimitada obrigatória.

**Gabarito: B.** A política de ordem depende da implementação do conjunto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.10, páginas 593–594 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 16.11

Map associa principalmente:

A) Arquivos a classes públicas.

B) Apenas objetos iguais.

C) Threads a pacotes.

D) Chaves a valores.

E) Somente índices a métodos.

**Gabarito: D.** Map não é uma subinterface de Collection.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.11, páginas 595–597 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 16.11

Inserir outra associação com chave já presente em um Map normalmente:

A) Remove todo o mapa.

B) Ignora sempre o novo valor.

C) Sempre lança exceção.

D) Cria duas entradas com a mesma chave.

E) Substitui o valor associado à chave.

**Gabarito: E.** Um mapa mantém no máximo uma associação por chave segundo sua igualdade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.11, páginas 595–597 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 16.7

Collections.sort atua sobre uma List para:

A) Ordená-la segundo critério natural ou Comparator apropriado.

B) Torná-la imutável.

C) Confirmar seu conteúdo em disco.

D) Eliminar obrigatoriamente duplicatas.

E) Transformá-la em Set.

**Gabarito: A.** A ordenação altera a sequência da lista modificável.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.7, páginas 581–589 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 16.7

Collections.binarySearch exige que a lista esteja:

A) Apenas com Strings.

B) Em ordem de inserção arbitrária.

C) Sempre vazia.

D) Ordenada pelo critério de comparação compatível.

E) Sem duplicatas.

**Gabarito: D.** Sem a pré-condição de ordenação, não se garante resultado correto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.7, páginas 581–589 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 16.7

Comparator fornece principalmente:

A) Uma estratégia de comparação externa ao objeto comparado.

B) Um gerador de threads.

C) Uma chave primária.

D) Uma função de serialização.

E) Um método de fechar arquivos.

**Gabarito: A.** Permite definir diferentes ordens para o mesmo tipo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.7, páginas 581–589 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 16.7

Comparable define normalmente:

A) A serialização padrão.

B) Somente identidade de referência.

C) A ordem natural pelo método compareTo.

D) O método run.

E) A política de coleta de lixo.

**Gabarito: C.** CompareTo retorna sinal negativo, zero ou positivo conforme a ordem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.7, páginas 581–589 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 16.8

Na pilha, o elemento removido primeiro é normalmente:

A) O primeiro inserido.

B) O de menor hash.

C) O último inserido.

D) Um aleatório.

E) O de maior índice de classe.

**Gabarito: C.** A política é LIFO.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.8, páginas 590–591 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 16.9

Uma PriorityQueue remove segundo:

A) Sempre o maior valor, sem critério configurável.

B) A prioridade definida por sua ordenação.

C) Sempre a ordem de inserção.

D) A identidade de referência.

E) A ordem alfabética do nome da classe.

**Gabarito: B.** Na ordenação natural usual, a cabeça é o menor elemento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.9, páginas 592 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Difícil — seção 16.9

Percorrer uma PriorityQueue por iterador garante saída totalmente ordenada?

A) Não.

B) Somente quando serializada.

C) Sim, sempre.

D) Sim, porque toda fila é ordenada integralmente.

E) Somente com números positivos.

**Gabarito: A.** A garantia de prioridade da cabeça não se estende à ordem completa da iteração.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.9, páginas 592 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 16.10

TreeSet oferece normalmente:

A) Uma fila FIFO.

B) Acesso por índice de List.

C) Somente inserção, sem leitura.

D) Duplicatas ilimitadas.

E) Conjunto ordenado segundo critério de comparação.

**Gabarito: E.** A comparação também participa da identificação de duplicatas no conjunto ordenado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.10, páginas 593–594 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 16.11

HashMap garante ordem de inserção em sua iteração?

A) Sim, se não contiver null.

B) Sim, sempre.

C) Não.

D) Somente com dois elementos.

E) Somente com chaves Integer.

**Gabarito: C.** Não se deve depender de uma ordem não contratada pela implementação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.11, páginas 595–597 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 16.12

Properties é usada tipicamente para:

A) Métodos abstratos.

B) Componentes Swing.

C) Pares de propriedades e suas configurações.

D) Threads bloqueadas.

E) Gráficos vetoriais.

**Gabarito: C.** É comum usá-la para configurações representadas como chaves e valores textuais.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.12, páginas 598–599 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Difícil — seção 16.13

Uma coleção sincronizada torna uma sequência de operações composta automaticamente atômica?

A) Não, porque nenhum método é protegido.

B) Não; a sequência pode exigir sincronização adicional.

C) Sim, por importar Collections.

D) Sim, em qualquer combinação.

E) Somente se a lista estiver vazia.

**Gabarito: B.** Proteger chamadas individuais não equivale a proteger um protocolo com várias chamadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.13, páginas 600 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 16.14

Uma visão não modificável de uma coleção é necessariamente cópia imutável independente?

A) Sim, pois remove toda referência.

B) Sim, mas apenas para Strings.

C) Não, porque sempre permite add.

D) Sim, sempre faz cópia profunda.

E) Não; alterações na coleção subjacente podem ser visíveis.

**Gabarito: E.** Bloquear mutações pela visão não congela obrigatoriamente a fonte.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 16, seção 16.14, páginas 601–602 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
