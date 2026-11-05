# Deitel — capítulo 24: Acesso a bancos de dados com JDBC

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_24.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 24.1

Um driver JDBC permite principalmente:

A) Criar interfaces gráficas.

B) Eliminar autenticação.

C) A comunicação entre aplicação Java e um SGBD compatível.

D) Compilar SQL em Java-fonte.

E) Substituir qualquer banco por memória local.

**Gabarito: C.** O driver adapta a interface JDBC ao sistema de dados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.1, páginas 850 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 24.6

Qual interface representa uma conexão JDBC?

A) Thread.

B) Graphics.

C) Path.

D) Scanner.

E) Connection.

**Gabarito: E.** A conexão delimita o contexto de interação com o banco.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 24.6

DriverManager.getConnection retorna normalmente:

A) Uma Connection.

B) Um File.

C) Um JFrame.

D) Uma List obrigatória.

E) Um ResultSet diretamente.

**Gabarito: A.** O estabelecimento da conexão pode falhar com SQLException.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 24.6

Statement.executeQuery é apropriado para instruções que retornam:

A) Um arquivo compilado.

B) Um ResultSet de consulta.

C) Um objeto Graphics.

D) Sempre um boolean de autenticação.

E) Somente número de linhas alteradas.

**Gabarito: B.** A operação é usada tipicamente com SELECT.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 24.6

ExecuteUpdate em JDBC retorna tipicamente:

A) Sempre um ResultSet.

B) Uma contagem de linhas afetadas ou zero conforme a instrução.

C) Uma thread.

D) Uma String com todos os dados.

E) Um novo driver.

**Gabarito: B.** É usado para alterações e instruções compatíveis sem resultado tabular.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 24.6

Um cursor ResultSet começa normalmente:

A) Antes da primeira linha.

B) Na última linha.

C) Depois da última sempre.

D) Na primeira coluna da primeira linha já válida.

E) Em uma linha aleatória.

**Gabarito: A.** Next avança e informa se existe uma linha válida.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 24.6

ResultSet.next retorna:

A) Sempre true.

B) Uma Connection.

C) O próximo valor int diretamente.

D) Se o avanço encontrou outra linha válida.

E) O nome da tabela.

**Gabarito: D.** O boolean controla a iteração sobre os resultados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Difícil — seção 24.6

Os índices de colunas JDBC começam normalmente em:

A) -1.

B) 2.

C) Depende do nome da tabela.

D) 0.

E) 1.

**Gabarito: E.** Essa convenção difere da indexação dos arrays Java.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 24.6

SQLException transporta informações úteis como:

A) A quantidade de construtores.

B) Uma cor RGB.

C) Somente o nome da classe pública.

D) O resultado sempre válido da consulta.

E) Mensagem, estado SQL e código de erro conforme o driver.

**Gabarito: E.** Falhas de acesso precisam de tratamento apropriado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 24.6

Fechar recursos JDBC é importante principalmente para:

A) Ordenar os resultados.

B) Apagar o driver.

C) Converter linhas em objetos automaticamente.

D) Liberar recursos da aplicação e do banco.

E) Garantir que a consulta nunca falhe.

**Gabarito: D.** Try-with-resources pode auxiliar nos tipos compatíveis.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.6, páginas 864–876 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 24.8

PreparedStatement permite separar:

A) A estrutura SQL e os valores dos parâmetros.

B) As cores da interface.

C) O nome da classe e o arquivo-fonte.

D) Os threads da JVM.

E) As chaves de um Map apenas.

**Gabarito: A.** Valores são vinculados em posições parametrizadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.8, páginas 879–891 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 24.8

No SQL de PreparedStatement, parâmetros de valor são marcados normalmente por:

A) :int obrigatório em JDBC puro.

B) %d como em printf.

C) # obrigatório.

D) @FXML.

E) ?.

**Gabarito: E.** A vinculação posterior fornece os valores correspondentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.8, páginas 879–891 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 24.8

O primeiro parâmetro de PreparedStatement é referenciado por índice:

A) 2.

B) O tamanho da consulta.

C) 1.

D) 0.

E) -1.

**Gabarito: C.** Os índices de parâmetros também usam base um.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.8, páginas 879–891 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 24.8

Concatenar entrada diretamente ao SQL aumenta o risco de:

A) Herança múltipla.

B) Boxing obrigatório.

C) Uma exceção de desenho.

D) Alterar a estrutura da consulta por injeção.

E) Coleta de lixo antecipada.

**Gabarito: D.** Parâmetros de valores ajudam a separar dados e instrução.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.8, páginas 879–891 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Difícil — seção 24.8

Um marcador de parâmetro de valor substitui diretamente qualquer nome de tabela?

A) Somente em SELECT.

B) Somente se a tabela estiver vazia.

C) Sim, se o nome for String.

D) Não.

E) Sim, sempre.

**Gabarito: D.** Identificadores e estrutura SQL exigem tratamento diferente dos valores vinculados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.8, páginas 879–891 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 24.9

CallableStatement é associado principalmente a:

A) Iteração de ArrayList.

B) Chamada de procedimentos armazenados.

C) Leitura de teclado.

D) Definição de interfaces funcionais.

E) Desenho de gráficos.

**Gabarito: B.** O capítulo distingue chamadas de rotinas das instruções preparadas comuns.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.9, páginas 892–893 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Difícil — seção 24.10

Para agrupar comandos em uma transação manual, pode-se primeiro usar:

A) close() em cada linha.

B) setAutoCommit(false).

C) next() antes de conectar.

D) getMetaData() como confirmação.

E) setAutoCommit(true) como garantia de agrupamento.

**Gabarito: B.** O programa passa a coordenar commit ou rollback da unidade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.10, páginas 892–893 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 24.10

Connection.commit confirma:

A) Um novo driver.

B) Toda transação de qualquer usuário.

C) A transação corrente naquela conexão.

D) O código-fonte Java.

E) Somente a última coluna lida.

**Gabarito: C.** O escopo transacional precisa ser compreendido no contexto da conexão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.10, páginas 892–893 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 24.10

Connection.rollback permite normalmente:

A) Desfazer alterações não confirmadas da transação corrente.

B) Desfazer qualquer commit histórico.

C) Excluir o driver.

D) Reiniciar a JVM.

E) Apagar o esquema sempre.

**Gabarito: A.** Rollback não é um mecanismo geral de desfazer transações já confirmadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.10, páginas 892–893 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 24.7

Um CachedRowSet pode ser usado em estilo:

A) Somente com imagens.

B) Exclusivamente na thread gráfica.

C) Desconectado durante parte de sua manipulação.

D) Sem qualquer coluna.

E) Sem jamais obter dados de fonte.

**Gabarito: C.** A desconexão não elimina a necessidade de tratar sincronização e conflitos conforme o uso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 24, seção 24.7, páginas 877–878 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
