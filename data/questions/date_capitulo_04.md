# Date — capítulo 4: Uma introdução à SQL

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_04.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 4.2

Qual instrução SQL define a estrutura de uma nova tabela?

A) COMMIT.

B) UPDATE.

C) DELETE FROM.

D) CREATE TABLE.

E) INSERT INTO.

**Gabarito: D.** CREATE TABLE é definição de dados; as demais opções não criam a estrutura de uma tabela.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 4.2

Qual comando acrescenta linhas a uma tabela existente?

A) INSERT.

B) REVOKE.

C) ROLLBACK.

D) DROP.

E) ALTER.

**Gabarito: A.** INSERT faz parte da manipulação de dados e acrescenta novas linhas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 4.2

Qual operação modifica valores de linhas existentes?

A) UPDATE.

B) GRANT.

C) COMMIT.

D) DROP TYPE.

E) CREATE SCHEMA.

**Gabarito: A.** UPDATE altera dados existentes, normalmente delimitados por uma condição.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 4.2

Em SQL, DELETE FROM item sem cláusula WHERE solicita:

A) Somente a exclusão da primeira linha.

B) Uma consulta sem alteração.

C) Somente a remoção dos índices.

D) A remoção da definição da tabela.

E) A exclusão de todas as linhas da tabela, sujeita às restrições aplicáveis.

**Gabarito: E.** DELETE remove linhas; DROP remove objetos de esquema.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 4.2

Qual diferença entre DROP TABLE e DELETE FROM está correta?

A) DROP confirma uma consulta; DELETE inicia uma transação.

B) Ambos apenas ocultam linhas de uma visão.

C) DROP remove a tabela; DELETE remove linhas preservando sua definição.

D) DELETE remove o esquema; DROP limpa somente dados.

E) Ambos são sinônimos de projeção.

**Gabarito: C.** A distinção é entre remover um objeto e manipular seu conteúdo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 4.2

Uma coluna deve impedir valores nulos. Qual declaração expressa diretamente isso?

A) DISTINCT.

B) NOT NULL.

C) ORDER BY.

D) GROUP BY.

E) UNION ALL.

**Gabarito: B.** NOT NULL restringe a presença de marcadores nulos nessa coluna.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 4.2

Uma coluna identifica unicamente cada linha e não admite nulos. Qual declaração é apropriada?

A) CHECK sem condição.

B) FOREIGN KEY sem referência.

C) DEFAULT NULL.

D) ORDER BY.

E) PRIMARY KEY.

**Gabarito: E.** Uma chave primária combina identificação única com não nulidade em SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 4.2

Para exigir que uma identificação de curso corresponda a um curso cadastrado, usa-se:

A) ORDER BY.

B) CREATE INDEX sem restrição.

C) SELECT DISTINCT.

D) COMMIT WORK.

E) FOREIGN KEY com REFERENCES.

**Gabarito: E.** A chave estrangeira expressa a referência entre as tabelas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.2, páginas 171–174 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 4.3

No padrão SQL apresentado, o Information Schema fornece:

A) Descrições padronizadas de objetos do banco.

B) Somente valores das aplicações de negócio.

C) Cópias integrais de todos os backups.

D) Resultados de consultas anteriores.

E) Arquivos executáveis do servidor.

**Gabarito: A.** O Information Schema permite consultar metadados do banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.3, páginas 175–176 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 4.4

O que uma instrução CREATE VIEW ... AS SELECT define?

A) Uma cópia de segurança obrigatória.

B) Um novo servidor físico.

C) Uma transação já confirmada.

D) Um índice exclusivo por coluna.

E) Uma visão baseada no resultado de uma consulta.

**Gabarito: E.** A definição da visão especifica uma consulta e não exige copiar seus dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.4, páginas 177–178 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 4.4

Uma consulta à visão de alunos ativos inclui outro filtro por cidade. Conceitualmente, o resultado deve satisfazer:

A) Uma escolha aleatória entre os filtros.

B) Nenhum filtro, pois visões não aceitam condições.

C) Apenas o filtro da visão.

D) O filtro da visão e o filtro adicional.

E) Apenas o filtro por cidade.

**Gabarito: D.** A expansão da visão conserva sua condição e incorpora a condição da consulta.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.4, páginas 177–178 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Fácil — seção 4.5

Qual comando SQL confirma uma transação?

A) GRANT WORK.

B) CREATE VIEW.

C) DELETE WORK.

D) COMMIT WORK.

E) ROLLBACK WORK.

**Gabarito: D.** WORK é opcional no comando de confirmação apresentado no capítulo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.5, páginas 179 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — seção 4.5

Qual comando SQL desfaz uma transação não confirmada?

A) SELECT WORK.

B) COMMIT WORK.

C) DROP WORK.

D) ROLLBACK WORK.

E) INSERT WORK.

**Gabarito: D.** ROLLBACK abandona as alterações da transação ainda não confirmada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.5, páginas 179 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 4.6

O que caracteriza SQL embutida?

A) SQL executada somente por terminal interativo.

B) Um banco sem SGBD.

C) Instruções SQL integradas a um programa em linguagem hospedeira.

D) Uma tabela sem atributos.

E) Dados criptografados dentro de índices.

**Gabarito: C.** O programa combina sua linguagem de aplicação com operações SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.6, páginas 180–189 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 4.6

Uma variável do programa recebe um valor usado por uma instrução SQL embutida. Ela atua como:

A) Novo esquema interno.

B) Chave primária implícita.

C) Variável hospedeira.

D) Índice de agrupamento.

E) Arquivo de catálogo.

**Gabarito: C.** Variáveis hospedeiras fazem a ponte entre valores do programa e instruções SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.6, páginas 180–189 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 4.6

Por que cursores aparecem na discussão de SQL embutida?

A) Eliminam o processamento linha a linha.

B) Permitem percorrer resultados com várias linhas em interfaces orientadas a registros.

C) Convertem tabelas em índices físicos.

D) Garantem por si só a atomicidade.

E) Publicam automaticamente novas visões.

**Gabarito: B.** O cursor adapta um resultado tabular a operações de obtenção de linhas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.6, páginas 180–189 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 4.7

Uma aplicação só conhece o texto da consulta durante a execução. Que recurso atende a esse caso?

A) SQL dinâmica.

B) Uma visão sem definição.

C) SQL exclusivamente estática.

D) Um backup completo.

E) Somente DDL previamente fixada.

**Gabarito: A.** SQL dinâmica permite preparar ou executar instruções determinadas em tempo de execução.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.7, páginas 190–194 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 4.7

Na execução dinâmica, PREPARE tem como finalidade principal:

A) Apagar o catálogo.

B) Preparar uma instrução cujo texto foi fornecido em tempo de execução.

C) Conceder privilégios a todos os usuários.

D) Persistir obrigatoriamente o resultado da consulta.

E) Confirmar toda transação aberta.

**Gabarito: B.** Preparação da instrução e confirmação da transação são operações distintas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.7, páginas 190–194 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 4.7

A SQL/CLI oferece principalmente uma interface de:

A) Execução sem conexão ou contexto de dados.

B) Chamadas de funções para acessar serviços SQL.

C) Gravação direta em setores de disco.

D) Impressão de documentos.

E) Diagramação E/R.

**Gabarito: B.** Uma interface de chamadas permite invocar funções SQL a partir de programas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.7, páginas 190–194 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 4.8

Segundo a análise crítica de Date, implementar SQL significa realizar perfeitamente o modelo relacional?

A) Não, porque SQL só descreve hardware.

B) Sim, por definição normativa do modelo.

C) Não; o autor aponta divergências e limitações da linguagem.

D) Sim, porque qualquer tabela é uma relação matemática.

E) Sim, desde que o banco tenha uma única tabela.

**Gabarito: C.** O capítulo distingue a relevância prática da SQL de sua fidelidade ao modelo teórico.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 4, seção 4.8, páginas 195 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
