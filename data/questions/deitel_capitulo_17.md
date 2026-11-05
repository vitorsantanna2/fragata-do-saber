# Deitel — capítulo 17: Lambdas e fluxos Java SE 8

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_17.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 17.2

Uma interface funcional possui:

A) Nenhum método.

B) Somente campos.

C) Um único método abstrato pertinente ao contrato.

D) Somente métodos static.

E) Exatamente dois construtores.

**Gabarito: C.** Métodos default e static não acrescentam outro método abstrato ao contrato funcional.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.2, páginas 608–610 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 17.2

Uma expressão lambda pode fornecer:

A) Uma nova classe-fonte pública obrigatória.

B) Uma implementação do contrato de interface funcional.

C) Um construtor de interface.

D) Uma variável global sem tipo.

E) Um pacote.

**Gabarito: B.** A tipagem depende da interface funcional alvo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.2, páginas 608–610 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 17.2

@FunctionalInterface auxilia a:

A) Executar a lambda automaticamente.

B) Criar uma thread sempre.

C) Verificar que o tipo atende ao contrato de interface funcional.

D) Tornar todos os métodos static.

E) Desativar a verificação de tipos.

**Gabarito: C.** A anotação expressa uma intenção validada pelo compilador.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.2, páginas 608–610 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Difícil — seção 17.2

Uma variável local capturada por lambda Java SE 8 deve ser:

A) Volatile obrigatoriamente.

B) Reatribuída após cada captura.

C) Sempre public.

D) Final ou efetivamente final.

E) Sempre static.

**Gabarito: D.** Efetivamente final significa não ser reatribuída após sua inicialização pertinente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.2, páginas 608–610 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 17.3

Filter em um stream produz principalmente:

A) Uma thread por elemento.

B) Um fluxo com elementos que satisfazem o predicado.

C) Uma ordenação automática.

D) Um valor único sempre.

E) Uma alteração obrigatória da coleção fonte.

**Gabarito: B.** Filter é uma operação intermediária de seleção.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 17.3

Map em um stream faz principalmente:

A) Transformar elementos por uma função.

B) Confirmar arquivos.

C) Ordenar chaves.

D) Remover toda duplicata.

E) Criar obrigatoriamente um java.util.Map.

**Gabarito: A.** Map de stream e a interface Map são conceitos diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 17.3

Qual operação é terminal em IntStream?

A) sorted().

B) filter().

C) map().

D) sum().

E) limit().

**Gabarito: D.** A operação terminal consome o pipeline para produzir resultado ou efeito.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Difícil — seção 17.3

Operações intermediárias de stream são normalmente:

A) Preguiçosas, realizadas quando há consumo terminal pertinente.

B) Executadas integralmente ao serem declaradas sempre.

C) Proibidas em fluxos vazios.

D) Sempre paralelas.

E) Sempre destrutivas para a fonte.

**Gabarito: A.** A avaliação pode evitar trabalho desnecessário conforme o pipeline.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 17.3

Qual resultado de `IntStream.of(2,3,4).filter(x->x%2==0).sum()`?

A) 4.

B) 6.

C) 2.

D) 9.

E) 0.

**Gabarito: B.** A seleção retém 2 e 4 antes da soma.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 17.3

Qual resultado de `IntStream.of(1,2,3).map(x->x*2).sum()`?

A) 0.

B) 6.

C) 12.

D) 9.

E) 3.

**Gabarito: C.** A transformação produz 2, 4 e 6.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 17.3

Qual resultado de `IntStream.of(1,2,2,3).distinct().count()`?

A) 2.

B) 6.

C) 3.

D) 1.

E) 4.

**Gabarito: C.** Distinct remove repetições antes da contagem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 17.3

Um stream já consumido por uma operação terminal pode ser reutilizado normalmente?

A) Somente se contiver inteiros.

B) Sim, reinicia automaticamente.

C) Sim, com o mesmo forEach.

D) Somente se ordenado.

E) Não; deve-se obter outro stream.

**Gabarito: E.** Streams não são coleções reutilizáveis de resultados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 17.4

Stream&lt;Integer&gt; difere de IntStream porque:

A) O primeiro trabalha com objetos Integer; o segundo com especialização primitiva int.

B) O primeiro é sempre paralelo.

C) O segundo só aceita valores positivos.

D) O primeiro não admite filter.

E) Ambos são exatamente o mesmo tipo.

**Gabarito: A.** Especializações primitivas oferecem operações próprias e evitam empacotamento em certos usos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.4, páginas 617–618 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 17.5

Uma referência de método como `String::toUpperCase` pode:

A) Executar imediatamente em todas as strings da JVM.

B) Criar uma thread obrigatória.

C) Retornar sempre um Class.

D) Substituir qualquer construtor.

E) Representar comportamento compatível com uma interface funcional alvo.

**Gabarito: E.** O significado e a compatibilidade dependem do contexto de tipagem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.5, páginas 619 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 17.6

Collectors.toList é empregado normalmente para:

A) Eliminar duplicatas necessariamente.

B) Criar apenas listas imutáveis.

C) Ordenar sempre a lista.

D) Escrever arquivos automaticamente.

E) Reunir elementos de um stream em uma lista.

**Gabarito: E.** O coletor não promete por si só todas essas propriedades adicionais.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.6, páginas 620–626 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 17.6

GroupingBy permite principalmente:

A) Criar uma interface.

B) Executar uma transação.

C) Ordenar os pacotes.

D) Agrupar elementos por uma chave calculada.

E) Modificar diretamente todos os objetos.

**Gabarito: D.** Um classificador define a chave de cada grupo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.6, páginas 620–626 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 17.7

Um stream obtido de linhas de arquivo exige atenção ao:

A) Número de construtores.

B) Conteúdo do classpath exclusivamente.

C) Nome do método main apenas.

D) Tipo de uma janela.

E) Fechamento do recurso de leitura.

**Gabarito: E.** Try-with-resources pode controlar a vida útil do recurso correspondente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.7, páginas 627–628 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 17.8

Limit(n) sobre um fluxo de valores aleatórios serve para:

A) Fixar todos em zero.

B) Ordenar os números.

C) Garantir ausência de repetição.

D) Restringir a quantidade de elementos consumidos naquele resultado.

E) Criptografar os valores.

**Gabarito: D.** Fluxos potencialmente ilimitados precisam de limites adequados em certas operações.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.8, páginas 629–630 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 17.9

Uma lambda pode tratar um ActionEvent porque ActionListener é:

A) Um tipo primitivo.

B) Uma interface funcional.

C) Um pacote.

D) Um array.

E) Uma classe final.

**Gabarito: B.** O método abstrato actionPerformed fornece o contrato alvo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.9, páginas 631 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 17.3

Um reduce com identidade 0 e soma em inteiros calcula:

A) Uma acumulação por adição.

B) Uma ordenação.

C) Uma conexão de rede.

D) O maior elemento obrigatoriamente.

E) Um Set sempre.

**Gabarito: A.** A identidade deve ser compatível com o operador de redução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 17, seção 17.3, páginas 611–616 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
