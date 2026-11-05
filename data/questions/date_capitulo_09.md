# Date — capítulo 9: Integridade

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_09.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 9.3

Uma restrição com parâmetros ainda não substituídos por valores é um:

A) Predicado.

B) Plano de disco.

C) Cursor.

D) Commit.

E) Backup.

**Gabarito: A.** Ao instanciar parâmetros, o predicado dá origem a uma proposição avaliável.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.3, páginas 441–442 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 9.4

O predicado de uma relvar combina suas restrições por:

A) Ordenação física.

B) Conjunção lógica.

C) Concatenação de nomes.

D) Soma de cardinalidades.

E) Disjunção exclusiva.

**Gabarito: B.** Todas as restrições aplicáveis devem ser simultaneamente satisfeitas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.4, páginas 443–444 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 9.4

A Regra Áurea da integridade impede uma atualização que:

A) Modifique uma tabela vazia.

B) Use uma expressão aninhada.

C) Altere qualquer valor persistente.

D) Faça o predicado do banco resultar falso.

E) Consulte mais de uma relvar.

**Gabarito: D.** Atualizações são admissíveis apenas se preservarem as restrições do banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.4, páginas 443–444 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 9.6

Uma restrição interna é suficiente para garantir correspondência perfeita com o mundo real?

A) Sim, desde que exista uma chave primária.

B) Não; o sistema verifica o que foi formalizado, não toda a realidade externa.

C) Não, porque restrições nunca são verificáveis.

D) Sim, pois consistência e verdade externa são idênticas.

E) Sim, se houver apenas uma tabela.

**Gabarito: B.** As regras declaradas podem não capturar erros ou mudanças da realidade externa.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.6, páginas 447–449 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 9.7

Um banco satisfaz todas as regras declaradas, mas contém o telefone antigo de uma pessoa. Ele pode estar:

A) Correto externamente, pois possui formato válido.

B) Necessariamente normalizado até 5FN.

C) Inconsistente por definição, ainda que nenhuma regra seja violada.

D) Sem qualquer predicado.

E) Consistente internamente e incorreto em relação à realidade.

**Gabarito: E.** Consistência com restrições não garante que cada fato corresponda à situação real.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.7, páginas 450–451 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 9.9

A condição saldo maior ou igual a zero em uma relvar é exemplo de:

A) Descrição de rede.

B) Permissão de acesso por usuário.

C) Operação de backup.

D) Restrição sobre os dados admissíveis.

E) Plano físico de busca.

**Gabarito: D.** Integridade trata da validade dos estados, diferentemente de autorização.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.9, páginas 454–457 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 9.10

Uma chave candidata é uma superchave que também possui:

A) Uma referência externa obrigatória.

B) Exatamente um atributo.

C) Irredutibilidade.

D) Ordenação física.

E) Tipo numérico obrigatório.

**Gabarito: C.** Nenhum subconjunto próprio da chave candidata mantém a identificação única.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 9.10

Se {A} já identifica unicamente as tuplas, {A,B} é necessariamente uma chave candidata?

A) Sim, pois mais atributos aumentam a minimalidade.

B) Não, porque superchaves são proibidas.

C) Sim, desde que B seja texto.

D) Sim, todo conjunto único é candidato.

E) Não; ela é uma superchave não mínima.

**Gabarito: E.** Acrescentar B preserva unicidade, mas destrói a irredutibilidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 9.10

Uma relvar pode possuir duas chaves candidatas diferentes?

A) Não, porque todos os atributos precisam ser numéricos.

B) Não; só existe uma combinação única possível.

C) Sim; uma delas pode ser designada primária.

D) Sim, somente se tiver uma tupla.

E) Sim, mas ambas deixam de ser candidatas.

**Gabarito: C.** A escolha de chave primária não elimina outras chaves candidatas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 9.10

Qual característica de uma chave candidata é independente da escolha da chave primária?

A) Possuir o menor número de bytes entre todas as chaves.

B) Ser sempre a primeira coluna.

C) Estar fisicamente ordenada.

D) Ser criada automaticamente por uma junção.

E) Identificar unicamente as tuplas com um conjunto irredutível de atributos.

**Gabarito: E.** Irredutibilidade não significa escolher a chave de menor tamanho físico.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — seção 9.10

Uma chave estrangeira expressa principalmente:

A) Uma exigência de correspondência com uma chave referenciada.

B) Uma garantia de confidencialidade.

C) Uma permissão de exclusão.

D) Uma obrigação de ordenar o arquivo.

E) Uma cópia integral de outra relação.

**Gabarito: A.** A integridade referencial impede referências incompatíveis com o estado da relação referenciada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 9.10

Um item referencia um pedido inexistente. Qual categoria de integridade é diretamente afetada?

A) Somente a ordenação de saída.

B) Referencial.

C) Somente a duração da transação.

D) Somente a codificação física.

E) Somente a segurança de leitura.

**Gabarito: B.** A referência precisa corresponder ao objeto admitido pela restrição declarada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 9.10

Uma exclusão com regra RESTRICT deve fazer o quê quando existirem dependentes impeditivos?

A) Substituir todas as chaves por zero.

B) Excluir silenciosamente os dependentes.

C) Rejeitar a exclusão.

D) Desativar a chave estrangeira.

E) Confirmar antes de verificar referências.

**Gabarito: C.** RESTRICT bloqueia a operação que violaria a referência, em vez de propagá-la.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 9.10

Uma regra ON DELETE CASCADE determina:

A) Propagação da exclusão aos registros dependentes alcançados pela regra.

B) Rejeição de toda exclusão, mesmo sem dependentes.

C) Cópia do registro para outra tabela.

D) Propagação de permissões a todos os usuários.

E) Conversão de todas as referências em índices.

**Gabarito: A.** A ação em cascata integra a política de manutenção da integridade referencial.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 9.11

Um trigger associa uma ação a:

A) Uma função de rede obrigatória.

B) Um nome de usuário sem evento.

C) Um evento especificado no banco.

D) Toda impressão de tela.

E) Uma única posição fixa de disco.

**Gabarito: C.** Gatilhos executam ações em resposta aos eventos para os quais foram definidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.11, páginas 470–473 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 9.11

Por que um trigger não deve ser confundido com uma restrição declarativa?

A) Ele especifica uma ação disparada por evento, não apenas uma condição de validade.

B) Porque não depende de eventos.

C) Porque não possui condições de execução.

D) Porque nunca pode alterar dados.

E) Porque substitui todas as chaves.

**Gabarito: A.** Ações procedimentais e declarações de estados admissíveis têm contratos diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.11, páginas 470–473 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 9.5

Na abordagem defendida por Date, cabe ao usuário programar a ordem de todas as verificações de restrições?

A) Sim, usando sempre cursores.

B) Não; o SGBD deve determinar as verificações necessárias.

C) Sim, para cada consulta de leitura.

D) Não, porque nenhuma verificação é necessária.

E) Sim, por meio da ordem física das linhas.

**Gabarito: B.** O autor defende tratamento declarativo e verificação pelo sistema.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.5, páginas 445–446 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 9.8

Uma atualização feita por uma visão pode ignorar as restrições das relvars envolvidas?

A) Sim, se o usuário não conhecer as tabelas.

B) Sim, porque visões não possuem ligação com dados básicos.

C) Não, porque visões nunca podem ser consultadas.

D) Não; os efeitos precisam preservar a integridade do banco.

E) Sim, pois fechamento dispensa restrições.

**Gabarito: D.** A interface usada para atualizar não elimina os requisitos de integridade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.8, páginas 452–453 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 9.12

Qual construção SQL representa diretamente uma condição de validade dos dados?

A) COMMIT.

B) ORDER BY.

C) GRANT.

D) EXPLAIN.

E) CHECK.

**Gabarito: E.** CHECK declara um predicado que os dados devem satisfazer segundo as regras SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.12, páginas 474–480 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 9.10

Adicionar uma restrição UNIQUE em outra combinação de colunas serve principalmente para:

A) Autorizar qualquer usuário a alterar linhas.

B) Transformar a tabela em visão.

C) Tornar a tabela obrigatoriamente ordenada.

D) Impedir repetição dessa combinação segundo a semântica SQL.

E) Criar uma referência externa obrigatória.

**Gabarito: D.** Unicidade é uma condição de integridade, não uma garantia de apresentação ou acesso.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 9, seção 9.10, páginas 458–469 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
