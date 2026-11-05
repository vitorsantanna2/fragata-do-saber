# Date — capítulo 3: Introdução aos bancos de dados relacionais

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_03.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 3.2

Quais aspectos compõem a caracterização introdutória do modelo relacional?

A) Senha, backup e compilação.

B) Tela, rede e impressão.

C) Disco, processador e teclado.

D) Arquivo, diretório e terminal.

E) Estrutura, integridade e manipulação.

**Gabarito: E.** O modelo descreve estruturas, regras válidas e operadores sobre os dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 3.2

Operadores relacionais recebem relações e devolvem relações. Essa propriedade é denominada:

A) Persistência.

B) Serialização de arquivos.

C) Criptografia.

D) Replicação.

E) Fechamento.

**Gabarito: E.** O fechamento permite usar resultados relacionais como operandos de novas expressões.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 3.2

Uma consulta filtra estudantes por idade. Qual operador relacional representa o filtro de linhas?

A) Restrição ou seleção.

B) Renomeação.

C) Divisão.

D) União.

E) Projeção.

**Gabarito: A.** A restrição conserva apenas as tuplas que satisfazem o predicado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 3.2

Uma consulta retém apenas nome e matrícula de uma relação. Qual operador descreve isso?

A) Projeção.

B) Restrição.

C) Transação.

D) Produto cartesiano.

E) Diferença.

**Gabarito: A.** A projeção escolhe atributos do resultado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 3.2

Combinar inscrições e cursos pelas identificações correspondentes é uma aplicação de:

A) Descarregamento.

B) Rollback.

C) Criptografia.

D) Autorização.

E) Junção.

**Gabarito: E.** A junção relaciona tuplas compatíveis segundo os atributos ou condições especificados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 3.3

Qual distinção entre relação e relvar está correta?

A) Relação designa somente um diagrama E/R.

B) A relação é um valor; a relvar é uma variável que pode assumir valores de relação.

C) A relação é um índice; a relvar é uma senha.

D) Ambas são obrigatoriamente arquivos físicos.

E) A relvar é imutável; a relação é uma variável.

**Gabarito: B.** Essa distinção separa o valor atual do objeto variável que recebe atualizações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.3, páginas 135–138 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 3.3

Após inserir uma inscrição em uma relvar, o que muda conceitualmente?

A) Necessariamente seu tipo.

B) Sua classificação como variável.

C) Seu valor de relação atual.

D) O significado de todos os atributos.

E) Obrigatoriamente seu nome.

**Gabarito: C.** Uma atualização atribui um novo valor compatível à relvar.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.3, páginas 135–138 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 3.4

Os tipos associados aos atributos delimitam principalmente:

A) Os valores admissíveis e as operações aplicáveis.

B) O horário de execução do backup.

C) A posição física dos discos.

D) O endereço de rede do servidor.

E) O número de usuários conectados.

**Gabarito: A.** Tipos descrevem conjuntos de valores e operações; não são localizações físicas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.4, páginas 139–142 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 3.4

Uma tupla de uma relação pode ser interpretada como:

A) Um ponteiro físico para outra tabela.

B) Uma definição completa de todos os índices.

C) Uma autorização concedida ao usuário.

D) Uma proposição obtida ao preencher os parâmetros de um predicado.

E) Um comando obrigatório de exclusão.

**Gabarito: D.** O predicado dá significado à relação; cada tupla instancia uma afirmação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.4, páginas 139–142 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 3.5

Uma linguagem relacional permite indicar o resultado desejado sem programar caminhos físicos. Isso favorece:

A) Obrigatoriedade de cursores.

B) Execução sem qualquer plano.

C) Navegação automática pelo sistema.

D) Dependência de endereços de disco.

E) Ausência de otimização.

**Gabarito: C.** O sistema escolhe meios de obter os dados, poupando navegação manual na aplicação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.5, páginas 143–145 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 3.5

Duas expressões logicamente equivalentes têm custos diferentes. Qual função pode escolher sua execução eficiente?

A) Administrador de documentos.

B) Otimizador.

C) Editor de formulários.

D) Protocolo de impressão.

E) Gerador de senhas.

**Gabarito: B.** O otimizador usa alternativas de execução e informações sobre o banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.5, páginas 143–145 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Fácil — seção 3.6

Descrições de relvars, índices e restrições são exemplos de:

A) Dados exclusivamente transitórios do terminal.

B) Código de máquina da aplicação.

C) Metadados mantidos no catálogo.

D) Resultados obrigatórios de toda consulta.

E) Registros que não podem ser consultados por nenhum meio.

**Gabarito: C.** Metadados descrevem objetos do sistema e apoiam sua administração.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.6, páginas 146–147 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 3.6

Informações sobre índices no catálogo são especialmente úteis para:

A) Transformar qualquer dado inválido em válido.

B) Dispensar a definição de tipos.

C) Escolher caminhos de acesso durante a otimização.

D) Eliminar a necessidade de memória.

E) Substituir todas as transações.

**Gabarito: C.** Descritores físicos ajudam a avaliar alternativas de implementação das consultas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.6, páginas 146–147 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 3.7

Uma visão definida por uma expressão sobre outras relvars é uma relvar:

A) Obrigatoriamente básica.

B) Virtual ou derivada.

C) Impossível de consultar.

D) Sem tipo.

E) Fisicamente independente de todas as fontes.

**Gabarito: B.** A visão tem definição derivada; não exige armazenamento próprio de seu conteúdo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.7, páginas 148–152 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 3.7

Uma consulta usa uma visão, cujo nome é substituído pela expressão definidora. Esse mecanismo depende de:

A) Fechamento das expressões relacionais.

B) Conhecimento de endereços físicos pelo usuário.

C) Ausência de predicados.

D) Duplicação de todas as tabelas.

E) Uso exclusivo de dados escalares.

**Gabarito: A.** A substituição funciona porque a expressão definidora produz uma relação utilizável no contexto.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.7, páginas 148–152 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 3.8

Duas alterações devem compor uma unidade lógica de trabalho. Qual recurso delimita essa unidade?

A) Projeção.

B) Domínio escalar.

C) Catálogo de nomes.

D) Transação.

E) Cabeçalho.

**Gabarito: D.** Uma transação agrupa operações cujo resultado deve ser tratado de forma coordenada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.8, páginas 153–154 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — seção 3.8

Qual operação encerra com sucesso uma transação, confirmando seus efeitos?

A) ROLLBACK.

B) RENAME.

C) DROP TYPE.

D) PROJECT.

E) COMMIT.

**Gabarito: E.** COMMIT confirma; ROLLBACK desfaz os efeitos não confirmados da transação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.8, páginas 153–154 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 3.8

Uma validação falha antes da confirmação. Qual operação permite abandonar as alterações da transação?

A) GRANT.

B) CREATE VIEW.

C) COMMIT.

D) ROLLBACK.

E) SELECT.

**Gabarito: D.** ROLLBACK encerra a transação sem confirmar suas alterações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.8, páginas 153–154 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 3.9

Uma relação de associação liga prestadores a serviços. Para localizar nomes dos prestadores por serviço, normalmente é necessário:

A) Interpretar o nome do serviço como endereço físico.

B) Remover os identificadores antes de combinar os dados.

C) Transformar todos os nomes em chaves estrangeiras.

D) Combinar a associação com o cadastro de prestadores.

E) Substituir as relações por ponteiros visíveis.

**Gabarito: D.** A associação contém a ligação; a junção recupera atributos descritivos do cadastro.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.9, páginas 155–158 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 3.2

Uma tabela possui linhas e colunas, mas ignora restrições e operadores relacionais. A aparência tabular, sozinha:

A) Define uma transação atômica.

B) Não caracteriza todos os aspectos do modelo relacional.

C) Elimina a necessidade de integridade.

D) Impede qualquer duplicação em SQL.

E) Garante conformidade integral ao modelo.

**Gabarito: B.** A estrutura é apenas um dos aspectos; integridade e manipulação também importam.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 3, seção 3.2, páginas 128–134 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
