# Date — capítulo 16: Concorrência

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_16.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 16.2

T1 e T2 leem saldo 100. T1 grava 110 e T2 grava 120 calculado do saldo antigo. Qual anomalia ocorre?

A) Atualização perdida.

B) Herança múltipla.

C) Leitura fantasma necessariamente.

D) Violação obrigatória de chave.

E) Decomposição sem perdas.

**Gabarito: A.** A segunda gravação sobrescreve o efeito da primeira sem incorporá-lo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.2, páginas 761–765 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 16.2

T2 lê um valor escrito por T1 antes do commit; T1 depois aborta. Isso é:

A) Atualização de catálogo obrigatória.

B) Normalização.

C) Fragmentação vertical.

D) Dependência sem commit ou leitura suja.

E) Durabilidade.

**Gabarito: D.** T2 utilizou uma alteração que não chegou a ser confirmada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.2, páginas 761–765 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 16.2

Um relatório soma valores enquanto outra transação redistribui quantias entre os registros lidos. Sem isolamento, pode ocorrer:

A) Análise inconsistente.

B) Desnormalização obrigatória.

C) Garantia de leitura serial.

D) Junção sem perdas.

E) Mudança de tipo.

**Gabarito: A.** O relatório pode combinar estados anteriores e posteriores da operação concorrente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.2, páginas 761–765 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 16.3

Dois bloqueios compartilhados sobre o mesmo objeto são, no esquema básico:

A) Permitidos somente para a mesma transação.

B) Equivalentes a um exclusivo.

C) Sempre conflitantes.

D) Compatíveis.

E) Proibidos após qualquer leitura.

**Gabarito: D.** Vários leitores podem coexistir quando nenhum deles exige exclusividade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.3, páginas 766–768 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 16.3

Um bloqueio exclusivo existente é compatível com um novo bloqueio compartilhado de outra transação sobre o mesmo objeto?

A) Somente se o leitor não usar SQL.

B) Sim, porque leitura nunca interfere.

C) Sim, quando o objeto tem nome curto.

D) Não, no esquema básico de bloqueios.

E) Sim, sempre.

**Gabarito: D.** O exclusivo impede acessos concorrentes incompatíveis ao objeto bloqueado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.3, páginas 766–768 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 16.3

Antes de atualizar um objeto, o protocolo básico exige bloqueio:

A) De impressão.

B) Exclusivo.

C) Apenas sobre o terminal.

D) Somente compartilhado.

E) De autenticação.

**Gabarito: B.** A escrita exige exclusão de acessos incompatíveis no modelo discutido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.3, páginas 766–768 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 16.5

T1 espera um recurso de T2, enquanto T2 espera um recurso de T1. Isso caracteriza:

A) Renomeação.

B) Commit distribuído concluído.

C) Leitura repetível garantida.

D) Fragmentação.

E) Deadlock.

**Gabarito: E.** A espera circular impede o avanço sem intervenção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.5, páginas 772–774 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 16.5

Uma forma de resolver um deadlock detectado é:

A) Escolher uma transação vítima e desfazê-la para liberar recursos.

B) Confirmar à força todas as transações.

C) Apagar todas as tabelas envolvidas.

D) Proibir permanentemente qualquer leitura.

E) Eliminar as restrições de tipo.

**Gabarito: A.** O rollback de uma vítima rompe o ciclo de espera.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.5, páginas 772–774 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 16.6

Um escalonamento serial executa transações:

A) Somente em modo de leitura.

B) Uma após a outra, sem intercalar suas operações.

C) Na ordem alfabética dos usuários.

D) Sempre simultaneamente em vários processadores.

E) Com todos os commits omitidos.

**Gabarito: B.** Serial descreve a organização da execução, não um algoritmo de ordenação de usuários.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.6, páginas 775–778 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 16.6

Um escalonamento seriável é aquele equivalente, no sentido relevante, a:

A) Qualquer execução com o mesmo tempo total.

B) Um backup em ordem crescente.

C) Uma consulta sem junção.

D) Uma execução sem log.

E) Algum escalonamento serial das mesmas transações.

**Gabarito: E.** A execução pode ser intercalada e ainda preservar um resultado compatível com ordem serial.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.6, páginas 775–778 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Difícil — seção 16.6

No bloqueio de duas fases, depois de começar a liberar bloqueios uma transação:

A) Deve obrigatoriamente abortar.

B) Pode ignorar conflitos.

C) Deve adquirir um exclusivo sobre todo o banco.

D) Precisa executar outro BEGIN.

E) Não deve adquirir novos bloqueios.

**Gabarito: E.** As fases são crescimento e encolhimento do conjunto de bloqueios.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.6, páginas 775–778 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 16.6

O protocolo de duas fases garante ausência de deadlock?

A) Sim, desde que existam índices.

B) Não, porque ele proíbe transações.

C) Sim, se todos os bloqueios forem exclusivos.

D) Não; seriabilidade não elimina a possibilidade de espera circular.

E) Sim, porque são apenas duas fases.

**Gabarito: D.** A garantia de seriabilidade e a prevenção de deadlocks são problemas distintos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.6, páginas 775–778 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 16.7

Reter bloqueios de escrita até o fim da transação ajuda a evitar:

A) A necessidade de log.

B) Todos os deadlocks.

C) Leituras de alterações não confirmadas e abortamentos em cascata.

D) Todas as consultas complexas.

E) Qualquer falha física de disco.

**Gabarito: C.** Outras transações não devem depender de efeitos que ainda podem ser desfeitos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.7, páginas 779–781 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 16.11

No padrão SQL, READ COMMITTED evita diretamente:

A) Todos os fantasmas.

B) Todas as leituras não repetíveis.

C) Leituras sujas.

D) Toda atualização perdida em qualquer padrão de uso.

E) Toda espera por bloqueio.

**Gabarito: C.** O nível não oferece, por si só, todas as garantias de SERIALIZABLE.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.11, páginas 797–798 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 16.8

Uma linha é lida duas vezes e aparece alterada por um commit concorrente. Essa anomalia é:

A) Deadlock necessariamente.

B) Leitura não repetível.

C) Leitura suja necessariamente.

D) Dependência funcional trivial.

E) Falha de mídia.

**Gabarito: B.** A segunda leitura vê outro valor confirmado para a mesma linha.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.8, páginas 782–785 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 16.8

Uma consulta repetida encontra novas linhas que satisfazem seu filtro após uma inserção concorrente. Isso ilustra:

A) Fantasma.

B) Ausência de concorrência.

C) Commit de duas fases.

D) Uma DF trivial.

E) Atomicidade.

**Gabarito: A.** A mudança afeta o conjunto de linhas que satisfaz o predicado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.8, páginas 782–785 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Difícil — seção 16.8

Bloquear apenas as linhas já encontradas impede necessariamente inserções que gerem fantasmas?

A) Não, porque linhas não podem ser bloqueadas.

B) Não; o conjunto definido pelo predicado também precisa de proteção apropriada.

C) Sim, qualquer bloqueio de linha protege todo o predicado.

D) Sim, ao usar uma coluna numérica.

E) Sim, desde que a tabela possua nome.

**Gabarito: B.** Linhas ainda inexistentes não são cobertas simplesmente por bloqueios nas linhas lidas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.8, páginas 782–785 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 16.9

Granularidade mais fina de bloqueio tende a oferecer:

A) Dispensa de detectar conflitos.

B) Menos concorrência e nenhum custo de gestão.

C) Mais concorrência, com maior quantidade potencial de bloqueios.

D) Uma única trava para todo o banco.

E) Eliminação garantida de deadlocks.

**Gabarito: C.** A escolha envolve compromisso entre concorrência e sobrecarga de gerenciamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.9, páginas 786–789 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 16.9

Bloqueios de intenção em uma hierarquia indicam:

A) Que os dados são públicos.

B) Que não há qualquer bloqueio em descendentes.

C) Que os índices foram removidos.

D) Que a transação já confirmou.

E) Que podem existir ou ser adquiridos bloqueios em níveis inferiores.

**Gabarito: E.** A intenção permite coordenar bloqueios de granularidades diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.9, páginas 786–789 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 16.11

O nome REPEATABLE READ deve ser interpretado sem considerar o padrão e o produto discutidos?

A) Não, porque isolamento não possui níveis.

B) Sim, ele sempre significa exatamente SERIALIZABLE.

C) Não; o capítulo alerta para diferenças entre a terminologia do DB2 e a do padrão SQL.

D) Sim, todos os produtos usam a mesma implementação.

E) Sim, ele sempre permite leitura suja.

**Gabarito: C.** A nomenclatura histórica não deve ser generalizada sem conferir a definição aplicável.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 16, seção 16.11, páginas 797–798 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
