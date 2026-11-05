# Deitel — capítulo 21: Estruturas de dados genéricas personalizadas

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_21.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 21.2

Uma classe autorreferencial pode conter:

A) Somente campos static.

B) Um campo que referencia outra instância do mesmo tipo.

C) Uma cópia infinita incorporada obrigatoriamente.

D) Nenhum construtor.

E) Apenas int.

**Gabarito: B.** Referências permitem ligar nós sem incorporar infinitamente a estrutura.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.2, páginas 715 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 21.3

Uma estrutura dinâmica pode crescer em execução por:

A) Recompilação de cada elemento.

B) Alteração do tipo primitivo int.

C) Ausência de memória.

D) Modificação do tamanho de um array já criado.

E) Criação e ligação de novos nós.

**Gabarito: E.** A alocação dinâmica usa objetos e referências conforme a necessidade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.3, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 21.4

Um nó de lista simplesmente encadeada contém tipicamente:

A) Somente um índice global.

B) Dado e referência ao próximo nó.

C) Um construtor de Thread.

D) Um arquivo de texto.

E) Uma árvore completa obrigatória.

**Gabarito: B.** As ligações definem a sequência dos nós.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 21.4

O último nó de uma lista simplesmente encadeada convencional tem próximo:

A) O primeiro obrigatoriamente.

B) null.

C) Sempre ele mesmo.

D) Um novo nó infinito.

E) Um int negativo.

**Gabarito: B.** Listas circulares usam outra convenção, que precisa ser declarada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 21.4

Uma lista vazia convencional pode ser representada por:

A) Um nó final obrigatório com dado zero.

B) Referência inicial null.

C) Um array de tamanho negativo.

D) Uma String vazia como nó.

E) Um Thread parado.

**Gabarito: B.** A representação deve ser consistente com as operações da estrutura.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 21.4

Inserir no início de lista encadeada exige principalmente:

A) Percorrer obrigatoriamente todos os nós.

B) Apagar o último nó sempre.

C) Converter a lista em array.

D) Ligar o novo nó ao antigo início e atualizar o início.

E) Ordenar todos os elementos.

**Gabarito: D.** A atualização adequada preserva a sequência anterior após o novo nó.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 21.4

Com referência direta ao início, inserir um nó no início tem custo usual:

A) O(n!).

B) O(n log n).

C) O(log n) obrigatório.

D) O(1).

E) O(n²).

**Gabarito: D.** A operação básica altera uma quantidade constante de referências.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Difícil — seção 21.4

Acessar a posição k em lista simplesmente encadeada sem índice auxiliar exige normalmente:

A) Ordenação automática.

B) Busca binária obrigatória.

C) Uma chave hash implícita.

D) Acesso constante garantido como array.

E) Percorrer ligações até o nó desejado.

**Gabarito: E.** Não existe acesso posicional direto como em arrays.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 21.4

Manter também referência à cauda pode facilitar:

A) Inserção no final sem percorrer toda a lista.

B) Acesso constante a qualquer posição.

C) Remoção de qualquer nó sem conhecê-lo.

D) Eliminação de todos os nós.

E) Ordenação automática.

**Gabarito: A.** A estrutura precisa atualizar a cauda nas operações que a afetam.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Difícil — seção 21.4

Ao remover o único nó, qual cuidado é necessário com início e cauda?

A) O início deve apontar para si.

B) Nenhum campo pode ser alterado.

C) A lista deve crescer.

D) A cauda deve apontar para um nó removido sempre.

E) Ambos devem representar lista vazia conforme a implementação.

**Gabarito: E.** Referências inconsistentes podem manter nós indevidos ou corromper operações futuras.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.4, páginas 716–727 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 21.5

A política de uma pilha é:

A) LIFO.

B) FIFO.

C) Aleatória.

D) Ordenação natural obrigatória.

E) Menor prioridade primeiro.

**Gabarito: A.** O último elemento inserido é o primeiro removido.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.5, páginas 728–730 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 21.5

Após empilhar A, B e C, a primeira remoção devolve:

A) ABC.

B) A.

C) B.

D) C.

E) null obrigatoriamente.

**Gabarito: D.** A remoção ocorre no topo da pilha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.5, páginas 728–730 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 21.5

Empilhar e desempilhar no início de lista encadeada costuma custar:

A) O(1) por operação básica.

B) O(n log n).

C) O(log n) obrigatório.

D) O(n²).

E) O(n!).

**Gabarito: A.** O topo pode ser mantido pela referência inicial.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.5, páginas 728–730 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 21.6

A política de uma fila convencional é:

A) FIFO.

B) Ordem decrescente sempre.

C) LIFO.

D) Hash primeiro.

E) Última chave primeiro.

**Gabarito: A.** O primeiro inserido é o primeiro removido.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.6, páginas 731–732 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 21.6

Após enfileirar A, B e C, a primeira remoção devolve:

A) CBA.

B) C.

C) A.

D) B.

E) null obrigatoriamente.

**Gabarito: C.** A remoção ocorre pela cabeça da fila.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.6, páginas 731–732 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 21.6

Uma fila ligada com cabeça e cauda pode permitir inserção e remoção básicas em:

A) O(n²).

B) O(n!).

C) O(1).

D) O(n log n).

E) O(log n) obrigatório.

**Gabarito: C.** Inserir na cauda e remover da cabeça usa referências diretas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.6, páginas 731–732 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 21.7

Uma árvore binária permite, por nó, no máximo:

A) Zero filhos.

B) Um filho.

C) Dois filhos.

D) Três filhos.

E) Um número ilimitado de filhos.

**Gabarito: C.** Dois é o limite estrutural, não a obrigação de preencher ambos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.7, páginas 733–737 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 21.7

Em uma árvore de busca binária crescente, valores menores que o nó ficam usualmente:

A) Fora da árvore.

B) Em qualquer lado sem regra.

C) Somente na raiz.

D) Sempre na direita.

E) Na subárvore esquerda.

**Gabarito: E.** A regra de ordenação orienta inserção e busca.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.7, páginas 733–737 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 21.7

Percorrer em ordem uma árvore de busca binária válida produz:

A) Sempre ordem de inserção.

B) Somente folhas.

C) Valores em ordem crescente conforme seu critério.

D) Uma ordem aleatória.

E) Apenas a raiz.

**Gabarito: C.** O percurso visita esquerda, nó e direita.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.7, páginas 733–737 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 21.7

Uma árvore de busca binária não balanceada pode ter busca de pior caso:

A) O(n log n) mínimo.

B) O(1) sempre.

C) O(n!) obrigatório.

D) O(n).

E) O(log n) garantido.

**Gabarito: D.** Uma árvore degenerada pode se comportar como uma cadeia linear.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 21, seção 21.7, páginas 733–737 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
