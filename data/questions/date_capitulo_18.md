# Date — capítulo 18: Otimização

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_18.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 18.3

Qual objetivo orienta a otimização de uma consulta?

A) Transformar toda consulta em índice.

B) Eliminar restrições de integridade.

C) Confirmar automaticamente transações.

D) Escolher uma implementação eficiente que preserve o significado da consulta.

E) Modificar o resultado para reduzir seu tamanho.

**Gabarito: D.** Otimização altera o plano de execução, não a resposta lógica esperada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.3, páginas 870–875 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 18.3

Uma representação interna canônica da consulta serve principalmente para:

A) Substituir o catálogo.

B) Descartar os tipos dos atributos.

C) Persistir uma cópia por usuário.

D) Facilitar análise e transformações pelo otimizador.

E) Expor endereços físicos ao usuário.

**Gabarito: D.** Uma forma interna estruturada permite trabalhar sobre a consulta independentemente de seu texto original.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.3, páginas 870–875 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 18.3

Um plano lógico e um plano físico diferem porque o físico especifica:

A) A cor dos resultados.

B) Técnicas de implementação e caminhos de acesso.

C) Somente o significado de cada entidade.

D) A senha de conexão.

E) A validade das regras do domínio.

**Gabarito: B.** O plano físico escolhe como executar operações que já possuem significado lógico.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.3, páginas 870–875 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 18.4

Empurrar uma seleção para antes de uma junção pode ser vantajoso porque:

A) Dispensa compatibilidade de atributos.

B) Garante custo zero.

C) Muda a condição de resposta para aceitar mais linhas.

D) Sempre elimina todas as junções.

E) Pode reduzir os dados intermediários processados.

**Gabarito: E.** A transformação é útil quando é válida e reduz o volume de trabalho.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 18.4

Uma seleção sobre atributo exclusivo de R pode, em condições relacionais usuais, ser aplicada antes de R JOIN S porque:

A) A condição pode ser avaliada apenas em R, preservando o resultado da expressão.

B) Toda seleção é equivalente a qualquer junção.

C) A junção ignora todos os atributos de R.

D) O resultado deixa de precisar de tipos.

E) A transformação permite descartar o predicado.

**Gabarito: A.** A validade depende das referências do predicado e da semântica dos operadores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Difícil — seção 18.4

Por que remover cedo uma coluna necessária à condição de junção é incorreto?

A) Porque projeção sempre aumenta a cardinalidade.

B) Porque o resultado precisa conter todas as colunas de origem.

C) A etapa seguinte deixa de possuir informação necessária à correspondência.

D) Porque junções não usam colunas.

E) Porque todo atributo é obrigatoriamente chave.

**Gabarito: C.** Reduzir colunas exige preservar os atributos usados por operações posteriores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 18.4

A comutatividade de uma junção permite ao otimizador:

A) Substituir qualquer junção por diferença.

B) Mudar o tipo dos atributos.

C) Eliminar obrigatoriamente uma tabela.

D) Ignorar todas as condições.

E) Considerar ordens alternativas dos operandos com o mesmo significado.

**Gabarito: E.** Equivalências algébricas ampliam o espaço de planos candidatos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 18.4

A associatividade de junções é relevante principalmente para escolher:

A) A ordem de formação de resultados intermediários.

B) A classificação de confidencialidade.

C) O formato do log de auditoria.

D) O nome de cada coluna.

E) A senha dos usuários.

**Gabarito: A.** Ordens equivalentes podem ter volumes intermediários e custos muito diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Difícil — seção 18.4

Qual transformação usa conhecimento de restrições, além das leis algébricas gerais?

A) Criação de savepoint.

B) Recuperação de mídia.

C) Autenticação.

D) Otimização semântica.

E) Criptografia simétrica.

**Gabarito: D.** Restrições válidas podem permitir simplificar condições e expressões.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 18.5

Qual informação auxilia a estimar o custo de um plano?

A) Cardinalidades e distribuição de valores.

B) Exclusivamente o nome da chave.

C) Somente a cor da interface.

D) A senha do último usuário.

E) Apenas o nome da aplicação.

**Gabarito: A.** Estatísticas ajudam a prever quantas linhas e páginas serão processadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.5, páginas 884–885 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 18.5

Estatísticas desatualizadas podem causar:

A) Eliminação de todos os índices.

B) Confirmação automática das transações.

C) Estimativas ruins e escolha de plano inadequado.

D) Mudança necessária do resultado lógico correto.

E) Desaparecimento dos tipos.

**Gabarito: C.** O plano pode continuar semanticamente válido, mas ser ineficiente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.5, páginas 884–885 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 18.5

Uma condição que aceita poucas linhas tende a possuir:

A) Obrigação de produzir o produto cartesiano.

B) Uma chave estrangeira automática.

C) Alta capacidade de filtragem.

D) Cardinalidade igual à tabela original.

E) Ausência de predicado.

**Gabarito: C.** Seletividade precisa ser interpretada conforme a convenção numérica, mas o efeito de filtragem é claro.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.5, páginas 884–885 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 18.7

Uma junção por laços aninhados combina, em sua forma básica:

A) Apenas renomeação de atributos.

B) Exclusão dos valores repetidos de uma coluna.

C) Somente leitura do catálogo.

D) Iteração sobre um operando e busca de correspondências no outro.

E) Duas confirmações de transação.

**Gabarito: D.** A implementação pode variar conforme o acesso escolhido para o operando interno.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.7, páginas 891–897 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 18.7

Um índice no operando interno pode beneficiar uma junção por laços porque:

A) Substitui a necessidade de ler resultados.

B) Transforma valores nulos em zero.

C) Permite localizar correspondências sem varrer integralmente esse operando a cada passo.

D) Garante que todas as consultas usem o mesmo plano.

E) Elimina a condição de junção.

**Gabarito: C.** O benefício depende da quantidade de buscas e dos custos envolvidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.7, páginas 891–897 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 18.7

Uma junção por intercalação é favorecida quando entradas já estão:

A) Armazenadas em usuários distintos.

B) Cifradas com chaves diferentes.

C) Limitadas a uma coluna sem correspondência.

D) Sem qualquer cabeçalho.

E) Ordenadas pelos atributos de junção relevantes.

**Gabarito: E.** A ordenação permite percorrer valores correspondentes de maneira coordenada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.7, páginas 891–897 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 18.7

Uma junção hash usa principalmente:

A) Uma ordenação alfabética obrigatória de todos os atributos.

B) Uma função de dispersão para organizar e localizar candidatos à correspondência.

C) Assinaturas digitais de usuários.

D) Um savepoint por tupla.

E) Uma regra de cascata.

**Gabarito: B.** A dispersão ajuda a localizar tuplas com chaves correspondentes, tipicamente em equijunções.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.7, páginas 891–897 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 18.7

Qual técnica é universalmente a mais rápida para qualquer junção?

A) Hash em todos os casos.

B) Nenhuma; a escolha depende dos dados, memória, índices e custos.

C) Laços aninhados em todos os casos.

D) Intercalação em todos os casos.

E) Produto cartesiano sem filtro em todos os casos.

**Gabarito: B.** Algoritmos possuem condições de aplicação e compromissos diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.7, páginas 891–897 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 18.6

A estratégia de dividir e conquistar aplicada a consultas procura:

A) Remover todas as dependências.

B) Decompor o problema em partes tratáveis e combinar seus resultados.

C) Confirmar cada linha isoladamente.

D) Copiar cada tabela para todos os usuários.

E) Eliminar a semântica da consulta.

**Gabarito: B.** O capítulo discute decomposição de consultas como estratégia de processamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.6, páginas 886–890 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 18.3

O menor custo estimado garante necessariamente o menor tempo real observado?

A) Sim, para qualquer carga concorrente.

B) Sim, se o plano contiver um índice.

C) Não, porque o resultado lógico muda.

D) Sim, estimativas são medidas exatas.

E) Não; a escolha depende da precisão do modelo e das estimativas.

**Gabarito: E.** Modelos aproximam custos e podem não capturar todas as condições de execução.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.3, páginas 870–875 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 18.4

Aplicar uma equivalência válida em conjuntos a SQL com duplicatas e nulos exige:

A) Conferir se a equivalência preserva a semântica SQL efetiva.

B) Eliminar todos os filtros.

C) Assumir que todas as regras continuam válidas sem exame.

D) Trocar nulos por zero automaticamente.

E) Ignorar a multiplicidade de linhas.

**Gabarito: A.** Diferenças de semântica podem invalidar transformações que parecem óbvias no modelo puro.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 18, seção 18.4, páginas 876–883 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
