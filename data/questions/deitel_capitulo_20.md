# Deitel — capítulo 20: Classes e métodos genéricos

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_20.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 20.2

Genéricos permitem principalmente:

A) Parametrizar código por tipos com verificação estática.

B) Criar uma classe-fonte por objeto manualmente.

C) Eliminar qualquer tipo.

D) Aceitar somente int.

E) Dispensar compilação.

**Gabarito: A.** A mesma definição pode atender a vários tipos de referência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.2, páginas 691–692 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 20.3

Qual forma declara um método genérico que devolve seu argumento?

A) `T identidade<T>(T x)` como sintaxe Java.

B) `generic identidade(T)`.

C) `<T> T identidade(T x)`.

D) `void<T> identidade(x)`.

E) `<T> identidade` sem parâmetros nem retorno.

**Gabarito: C.** A seção de parâmetros de tipo antecede o tipo de retorno.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.3, páginas 693–694 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 20.3

Um argumento de tipo como T pode ser diretamente int em `Caixa<int>`?

A) Somente quando T for final.

B) Sim, com import java.lang.

C) Somente em métodos static.

D) Não, deve-se usar tipo de referência como Integer.

E) Sim, sempre.

**Gabarito: D.** Primitivos não são argumentos de tipos genéricos Java SE 8.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.3, páginas 693–694 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 20.3

A eliminação de tipos, erasure, ocorre principalmente para:

A) Impedir uso de Object.

B) Apagar todos os casts do código-fonte sempre.

C) Criar classes diferentes para cada objeto em todo caso.

D) Traduzir genéricos preservando compatibilidade com o modelo de execução.

E) Substituir o coletor.

**Gabarito: D.** Tipos são verificados na compilação, com tradução conforme as regras de erasure.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.3, páginas 693–694 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Difícil — seção 20.3

Para T sem limite explícito, seu limite superior implícito é:

A) Number.

B) Integer.

C) String.

D) Object.

E) Runnable.

**Gabarito: D.** O parâmetro não garante operações específicas de um tipo mais restrito.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.3, páginas 693–694 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 20.4

Declarar `<T extends Number>` restringe T a:

A) Somente Object exato.

B) Apenas classes sem métodos.

C) Number ou seus subtipos apropriados.

D) Qualquer primitivo diretamente.

E) Somente String.

**Gabarito: C.** O limite permite usar operações disponíveis no tipo Number.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.4, páginas 695–696 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 20.4

Para usar compareTo em T com contrato apropriado, pode-se declarar limite como:

A) `T throws Comparable`.

B) `T implements int`.

C) `T final String`.

D) `T extends int`.

E) `T extends Comparable<T>`.

**Gabarito: E.** O limite expressa a capacidade de comparação usada pelo algoritmo genérico.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.4, páginas 695–696 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 20.5

Métodos genéricos podem ser sobrecarregados?

A) Não.

B) Sim, respeitando assinaturas e regras de erasure.

C) Somente em interfaces sem métodos.

D) Sim, ignorando a eliminação de tipos.

E) Somente com retorno diferente.

**Gabarito: B.** Assinaturas distintas no fonte não podem colidir ilegalmente após a tradução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.5, páginas 697 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 20.6

Uma classe genérica Caixa&lt;T&gt; pode manter um campo:

A) De tipo T.

B) Sempre public e final.

C) Static T usando o T de instância diretamente.

D) Sem declaração de tipo.

E) De tipo int como argumento genérico obrigatório.

**Gabarito: A.** O parâmetro da classe tipa os membros de instância pertinentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.6, páginas 698–703 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 20.6

Dentro de Caixa&lt;T&gt;, criar `new T()` é permitido diretamente?

A) Sim, sempre.

B) Sim, por boxing.

C) Não.

D) Somente quando private.

E) Somente se T estiver em Object.

**Gabarito: C.** Não há garantia de construtor acessível nem informação de tipo suficiente para essa sintaxe.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.6, páginas 698–703 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 20.6

Em uma classe genérica, um campo static pode usar diretamente o parâmetro T da classe?

A) Somente se final.

B) Sim, em Java SE 8.

C) Somente para referências.

D) Sim, sempre.

E) Não.

**Gabarito: E.** O campo de classe não pertence a uma parametrização de instância específica.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.6, páginas 698–703 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 20.6

List&lt;String&gt; é subtipo de List&lt;Object&gt; apenas porque String é subtipo de Object?

A) Não.

B) Somente para ArrayList.

C) Sim, sempre.

D) Sim, se todos os elementos forem não nulos.

E) Somente se vazia.

**Gabarito: A.** A invariância evita inserções incompatíveis por uma referência mais ampla.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.6, páginas 698–703 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 20.7

Um tipo bruto como List, sem argumento de tipo, existe principalmente para:

A) Criar listas imutáveis.

B) Armazenar somente primitivos.

C) Eliminar todos os avisos.

D) Garantir mais segurança que List&lt;String&gt;.

E) Compatibilidade com código anterior aos genéricos.

**Gabarito: E.** Seu uso pode perder verificações e gerar operações não seguras.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.7, páginas 704–706 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 20.7

Uma operação não verificada com tipos brutos pode adiar um problema para:

A) Uma nova compilação automática.

B) Uma falha de conversão em execução.

C) Uma SQLException sempre.

D) Um erro de impressão obrigatório.

E) Uma remoção pelo coletor.

**Gabarito: B.** A perda de verificação estática pode permitir valores incompatíveis na estrutura.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.7, páginas 704–706 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 20.8

O curinga `? extends Number` permite tratar a origem como fornecedora de:

A) Somente Integer garantido.

B) Primitivos int diretamente.

C) Valores legíveis como Number.

D) Qualquer objeto para inserção.

E) Somente String.

**Gabarito: C.** O tipo exato é desconhecido, mas seu limite superior é Number.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.8, páginas 707–709 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Difícil — seção 20.8

Adicionar Integer a uma List&lt;? extends Number&gt; arbitrária é seguro e permitido normalmente?

A) Somente se a lista estiver vazia.

B) Somente se positivo.

C) Sim, porque não há tipos.

D) Não, o subtipo concreto pode ser outro.

E) Sim, Integer sempre cabe em qualquer subtipo de Number.

**Gabarito: D.** A lista pode ser, por exemplo, uma List&lt;Double&gt;.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.8, páginas 707–709 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 20.8

List&lt;? super Integer&gt; permite inserir valores Integer?

A) Somente Double.

B) Somente null.

C) Somente String.

D) Não, nunca.

E) Sim.

**Gabarito: E.** O tipo desconhecido é um supertipo de Integer adequado ao recebimento desses valores.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.8, páginas 707–709 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 20.8

Ao ler uma List&lt;? super Integer&gt;, qual tipo geral é garantido sem cast adicional?

A) Object.

B) String.

C) Number sempre.

D) int.

E) Integer sempre.

**Gabarito: A.** O limite inferior ajuda na inserção, não garante Integer para todos os elementos já presentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.8, páginas 707–709 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 20.8

List&lt;?&gt; representa:

A) Somente List&lt;Object&gt;.

B) Uma lista de um tipo de elemento desconhecido.

C) Uma lista de qualquer mistura livremente inserível.

D) Um tipo bruto sem verificação.

E) Uma lista necessariamente vazia.

**Gabarito: B.** O curinga mantém restrições de segurança mesmo sem nomear o tipo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.8, páginas 707–709 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 20.3

Para parâmetro T sem limite, qual declaração é válida para recebê-lo em uma variável de referência geral?

A) `Integer i = valorT;` sempre.

B) `Object o = valorT;`.

C) `int n = valorT;` sempre.

D) `String s = valorT;` sempre.

E) `Runnable r = valorT;` sempre.

**Gabarito: B.** Todo valor referenciável de T é compatível com seu limite superior Object.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 20, seção 20.3, páginas 693–694 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
