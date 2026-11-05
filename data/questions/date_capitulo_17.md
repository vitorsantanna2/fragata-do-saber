# Date — capítulo 17: Segurança

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_17.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 17.1

No contraste entre segurança e integridade, segurança trata principalmente de:

A) Garantir a validade semântica de todo dado.

B) Decompor relações sem perdas.

C) Impedir acesso não autorizado.

D) Escolher o algoritmo de junção.

E) Reduzir o número de atributos.

**Gabarito: C.** Segurança verifica permissões; integridade verifica condições de validade dos dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.1, páginas 818–821 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 17.2

O controle de acesso discricionário se caracteriza por permissões concedidas segundo:

A) O algoritmo de ordenação física.

B) Somente o valor da chave primária.

C) Apenas a ordem das tuplas.

D) O instante de criação de um índice.

E) Decisões de proprietários ou autoridades habilitadas sobre os objetos.

**Gabarito: E.** O capítulo usa também a expressão controle discriminatório para essa categoria.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.2, páginas 822–829 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 17.2

Uma autorização precisa relacionar, entre outros elementos:

A) Apenas o número de conexões.

B) Usuários, objetos e privilégios permitidos.

C) Somente processadores e discos.

D) Somente chaves e índices.

E) Tabelas e cores de interface.

**Gabarito: B.** A permissão deve definir quem pode fazer o quê sobre quais dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.2, páginas 822–829 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 17.2

Permitir leitura, mas impedir atualização, exemplifica:

A) Privilégios distintos para tipos de operação.

B) Uma dependência multivalorada.

C) Ausência de qualquer segurança.

D) Uma DF entre usuários.

E) Uma cópia de segurança.

**Gabarito: A.** A autorização pode ser específica para consulta, inserção, alteração ou exclusão.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.2, páginas 822–829 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 17.2

Restringir um empregado à consulta de sua própria linha é um controle:

A) Sem relação com autorização.

B) De normalização obrigatória.

C) Exclusivamente sobre criação de índices.

D) Baseado somente em tamanho físico.

E) Dependente dos valores envolvidos no acesso.

**Gabarito: E.** O critério depende da associação entre o usuário e os valores consultados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.2, páginas 822–829 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 17.2

Qual finalidade tem uma trilha de auditoria?

A) Normalizar o banco.

B) Eliminar a necessidade de autenticação.

C) Substituir toda autorização.

D) Impedir matematicamente qualquer invasão.

E) Registrar eventos de acesso relevantes para investigação.

**Gabarito: E.** Auditoria fornece evidências; não equivale, sozinha, a bloquear operações indevidas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.2, páginas 822–829 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 17.3

No controle mandatário, decisões de acesso utilizam principalmente:

A) Preferências de cores do usuário.

B) Quantidade de linhas da tabela.

C) Classificação dos objetos e nível de liberação dos usuários.

D) Ordem de inserção.

E) Tamanho do nome do atributo.

**Gabarito: C.** Rótulos e regras obrigatórias restringem o fluxo de informação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.3, páginas 830–834 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 17.3

No modelo de confidencialidade apresentado, a regra de leitura impede:

A) Toda leitura no próprio nível.

B) Somente leitura de índices.

C) Uso de tabelas com uma coluna.

D) Ler informação acima do nível de liberação permitido.

E) Acesso a qualquer dado público.

**Gabarito: D.** A regra impede leitura para cima na hierarquia de classificação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.3, páginas 830–834 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 17.3

A regra de escrita voltada a impedir vazamento entre níveis restringe:

A) Qualquer escrita no mesmo nível.

B) Somente atualizações de números.

C) Toda leitura de catálogos.

D) Escrever informação em nível inferior ao permitido pelo modelo.

E) Somente inserções em tabelas vazias.

**Gabarito: D.** Evitar escrita para baixo ajuda a impedir transferência indevida para níveis menos sigilosos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.3, páginas 830–834 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 17.4

Um banco estatístico deve fornecer agregados preservando:

A) Apenas a primeira linha de cada grupo.

B) A confidencialidade das informações individuais.

C) A ordem de todos os nomes.

D) A ausência de qualquer soma.

E) O acesso irrestrito às linhas.

**Gabarito: B.** O objetivo combina utilidade estatística e proteção de dados individuais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.4, páginas 835–842 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 17.4

Duas somas sobre grupos quase iguais permitem deduzir o salário de uma pessoa pela diferença. Isso é um risco de:

A) Fragmentação vertical.

B) Deadlock.

C) Inferência estatística.

D) Perda de fechamento.

E) Dependência parcial.

**Gabarito: C.** Resultados agregados combinados podem revelar informação que não foi consultada diretamente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.4, páginas 835–842 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 17.4

Proibir consultas que retornem uma única pessoa elimina todo risco de inferência?

A) Não; combinações de consultas podem isolar informações individuais.

B) Não, porque agregação não é permitida.

C) Sim, desde que os nomes não sejam exibidos.

D) Sim, se os totais forem exatos.

E) Sim, qualquer grupo maior que um é seguro.

**Gabarito: A.** O capítulo destaca ataques que combinam resumos aparentemente permitidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.4, páginas 835–842 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 17.5

Na criptografia simétrica, emissor e receptor utilizam essencialmente:

A) Uma chave primária de tabela.

B) A senha do DBA em cada linha.

C) Somente uma chave pública universal.

D) Uma chave secreta compartilhada para as operações correspondentes.

E) Um índice agrupado.

**Gabarito: D.** A gestão do segredo compartilhado é parte central desse esquema.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.5, páginas 843–848 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 17.5

Na criptografia de chave pública, qual distinção é fundamental?

A) Uma chave SQL e um índice físico.

B) Duas chaves que devem ser divulgadas juntas.

C) Duas cópias públicas da mesma senha.

D) Uma chave pública e uma chave privada relacionadas, com papéis diferentes.

E) Uma chave por coluna sem relação matemática.

**Gabarito: D.** A chave privada deve permanecer secreta; a pública pode ser divulgada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.5, páginas 843–848 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 17.5

Uma assinatura digital procura fornecer principalmente evidência de:

A) Confidencialidade obrigatória de todo conteúdo.

B) Origem e integridade da mensagem assinada.

C) Compressão sem perdas.

D) Normalização da mensagem.

E) Ausência de qualquer chave.

**Gabarito: B.** Assinar não significa necessariamente cifrar o conteúdo para ocultá-lo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.5, páginas 843–848 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 17.5

Cifrar dados resolve automaticamente permissões indevidas concedidas pela aplicação?

A) Sim, ao usar nomes de colunas curtos.

B) Não; criptografia e controle de acesso são mecanismos complementares.

C) Sim, toda permissão fica irrelevante.

D) Sim, se houver uma chave pública.

E) Não, porque dados cifrados nunca podem ser lidos.

**Gabarito: B.** Uma aplicação autorizada a decifrar ainda precisa aplicar as regras de acesso.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.5, páginas 843–848 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — seção 17.6

Qual comando SQL concede privilégios?

A) GROUP BY.

B) REVOKE.

C) CHECK.

D) ROLLBACK.

E) GRANT.

**Gabarito: E.** GRANT estabelece autorizações sobre objetos conforme o modelo SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.6, páginas 849–854 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 17.6

Qual comando SQL revoga privilégios?

A) REVOKE.

B) INSERT.

C) COMMIT.

D) SELECT.

E) CREATE TYPE.

**Gabarito: A.** A revogação precisa considerar as regras de dependência e propagação aplicáveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.6, páginas 849–854 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 17.6

WITH GRANT OPTION permite ao beneficiário, nas condições previstas:

A) Repassar o privilégio recebido.

B) Confirmar transações de outros usuários.

C) Ler qualquer tabela sem autorização.

D) Ignorar todas as restrições de integridade.

E) Apagar logs de auditoria automaticamente.

**Gabarito: A.** A opção trata da delegação do privilégio concedido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.6, páginas 849–854 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 17.1

Se arquivos físicos puderem ser lidos contornando o SGBD, seus controles internos são suficientes?

A) Não, porque bancos não usam arquivos.

B) Sim, se o catálogo estiver normalizado.

C) Não; o sistema operacional e os demais canais também precisam de proteção.

D) Sim, desde que exista uma visão.

E) Sim, a autorização SQL cobre qualquer acesso externo.

**Gabarito: C.** A segurança precisa considerar o sistema completo, não apenas um ponto de acesso.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 17, seção 17.1, páginas 818–821 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
