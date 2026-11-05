# Date — capítulo 15: Recuperação

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_15.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 15.2

Uma transação é, principalmente, uma unidade lógica de:

A) Ordenação de colunas.

B) Armazenamento de senhas.

C) Trabalho e recuperação.

D) Definição de hardware.

E) Diagramação de entidades.

**Gabarito: C.** Agrupar operações permite tratar seus efeitos como uma unidade recuperável.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.2, páginas 727–732 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 15.2

Qual propriedade exige que os efeitos de uma transação sejam confirmados em conjunto?

A) Confidencialidade.

B) Fragmentação.

C) Atomicidade.

D) Durabilidade.

E) Normalização.

**Gabarito: C.** Atomicidade evita a confirmação de apenas uma parte da unidade lógica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.2, páginas 727–732 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 15.2

Qual propriedade exige a permanência dos efeitos de uma transação confirmada após falhas recuperáveis?

A) Projeção.

B) Minimalidade.

C) Autorização.

D) Redundância.

E) Durabilidade.

**Gabarito: E.** Após o commit, os mecanismos de recuperação devem preservar os efeitos confirmados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.2, páginas 727–732 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 15.2

Em ACID, isolamento trata principalmente de:

A) Interferência entre transações concorrentes.

B) Tipos dos dispositivos.

C) Ausência de índices.

D) Distribuição de documentos.

E) Validação de senhas.

**Gabarito: A.** O objetivo é controlar a visibilidade e o efeito da execução concorrente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.2, páginas 727–732 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 15.2

O SGBD pode garantir que qualquer programa autorizado implementa corretamente a intenção do negócio?

A) Sim, pela existência do log.

B) Não, porque transações não possuem regras.

C) Sim, se houver uma chave primária.

D) Não; a correção da lógica da aplicação também precisa ser assegurada.

E) Sim, somente por usar COMMIT.

**Gabarito: D.** Mecanismos transacionais não corrigem automaticamente algoritmos de negócio incorretos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.2, páginas 727–732 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 15.3

Uma transação termina sem alcançar COMMIT e precisa ser abandonada. Qual tratamento corresponde à recuperação local?

A) Eliminar todas as transações já confirmadas.

B) Desfazer seus efeitos não confirmados.

C) Confirmar somente seu primeiro comando.

D) Renomear as relvars alteradas.

E) Descartar as restrições do banco.

**Gabarito: B.** Recuperação de transação reverte a unidade malsucedida.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.3, páginas 733–736 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 15.3

Para permitir operações de desfazer e refazer, o sistema mantém:

A) Log de recuperação.

B) Somente a interface gráfica.

C) A ordem de apresentação de relatórios.

D) Apenas nomes de usuários.

E) Um diagrama E/R sem dados.

**Gabarito: A.** O log registra informações necessárias à recuperação das alterações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.3, páginas 733–736 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 15.3

A regra de gravação antecipada no log exige, no tratamento descrito, que o COMMIT só seja concluído após:

A) Atualizar todas as telas.

B) Eliminar os registros de recuperação.

C) Persistir no log as informações necessárias da transação.

D) Imprimir todas as alterações.

E) Copiar o banco para cada cliente.

**Gabarito: C.** O registro durável permite recuperar os efeitos mesmo que páginas de dados ainda dependam de gravação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.3, páginas 733–736 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 15.4

Uma queda de energia sem dano físico ao armazenamento é classificada no capítulo como:

A) Falha do sistema.

B) Ataque por inferência.

C) Erro de tipo.

D) Violação de chave candidata.

E) Falha da mídia obrigatoriamente.

**Gabarito: A.** O capítulo distingue interrupções globais sem dano físico de falhas destrutivas de mídia.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.4, páginas 737–740 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 15.5

Perder fisicamente o disco de dados exige uma estratégia baseada em:

A) Somente reiniciar a interface.

B) Apenas renomear os arquivos ausentes.

C) Uma projeção sem fontes.

D) Cópia de segurança e informações de recuperação disponíveis.

E) Somente liberar bloqueios.

**Gabarito: D.** A recuperação da mídia depende de reconstruir dados perdidos a partir de cópias e registros preservados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.5, páginas 741 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 15.4

Em uma estratégia de recuperação com undo/redo, uma transação não confirmada na falha pode exigir:

A) Exclusão das transações anteriores.

B) Remoção do catálogo.

C) Confirmação automática obrigatória.

D) Renovação de todas as senhas.

E) Undo de seus efeitos.

**Gabarito: E.** O trabalho não confirmado não deve permanecer parcialmente efetivado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.4, páginas 737–740 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 15.4

Em uma estratégia com undo/redo, uma transação confirmada cujas páginas ainda não foram persistidas pode exigir:

A) Desativação da durabilidade.

B) Exclusão de sua entrada no log.

C) Redo a partir do log.

D) Uma nova autorização do usuário.

E) Cancelamento definitivo do commit.

**Gabarito: C.** Refazer alterações permite recuperar efeitos confirmados ainda ausentes dos arquivos de dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.4, páginas 737–740 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 15.4

Qual é uma finalidade dos checkpoints?

A) Substituir todos os backups de mídia.

B) Apagar imediatamente todo o log.

C) Garantir a correção do algoritmo de negócio.

D) Impedir qualquer nova transação.

E) Reduzir e organizar o trabalho necessário na recuperação.

**Gabarito: E.** Checkpoints delimitam informações úteis ao reinício e à análise das transações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.4, páginas 737–740 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 15.6

O commit de duas fases coordena principalmente:

A) Duas fases de criação de índice.

B) Uma decisão comum entre gerenciadores de recursos participantes.

C) Duas formas normais.

D) A troca de senhas entre dois usuários.

E) Apenas dois comandos SELECT.

**Gabarito: B.** A coordenação busca evitar confirmações parciais de uma transação envolvendo vários recursos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.6, páginas 742–744 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 15.6

Na primeira fase do 2PC, os participantes são consultados sobre:

A) A ordem gráfica das tabelas.

B) Sua capacidade de preparar e concluir a transação conforme a decisão global.

C) A conversão do banco em monousuário.

D) A remoção de todos os logs.

E) A existência de uma impressora.

**Gabarito: B.** A fase de preparação antecede a decisão global de confirmar ou abortar.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.6, páginas 742–744 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 15.6

Se um participante não consegue preparar sua parte, a decisão global de sucesso deve ser:

A) Substituída por exclusão de seu log.

B) Definida apenas pela maioria dos usuários finais.

C) Aplicada somente à primeira tabela.

D) Impedida, levando ao abortamento no protocolo normal.

E) Confirmada nos demais e ignorada nele.

**Gabarito: D.** A atomicidade global exige que todos os participantes possam cumprir a confirmação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.6, páginas 742–744 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 15.7

Criar um savepoint equivale a confirmar definitivamente as alterações anteriores?

A) Sim, é sinônimo de COMMIT.

B) Não; ele marca um ponto de retorno dentro da transação.

C) Não, porque savepoints não possuem nome.

D) Sim, mas apenas em tabelas vazias.

E) Sim, e encerra a transação.

**Gabarito: B.** Um savepoint não é uma confirmação independente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.7, páginas 745 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 15.7

ROLLBACK até um savepoint permite:

A) Eliminar a necessidade de commit final.

B) Confirmar todas as alterações posteriores.

C) Desfazer commits de outras sessões.

D) Apagar a definição das tabelas.

E) Desfazer alterações posteriores ao ponto, preservando o contexto anterior da transação.

**Gabarito: E.** O mecanismo fornece recuperação parcial sem confirmar uma subtransação independente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.7, páginas 745 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 15.8

Qual par SQL corresponde à conclusão bem-sucedida e ao abandono de uma transação?

A) CREATE e ALTER.

B) JOIN e UNION.

C) SELECT e INSERT.

D) COMMIT e ROLLBACK.

E) GRANT e REVOKE.

**Gabarito: D.** A conclusão transacional é diferente da manipulação de linhas ou de privilégios.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.8, páginas 746–747 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 15.5

Manter uma cópia de backup no mesmo dispositivo físico que pode falhar oferece qual limitação?

A) A mesma falha pode destruir dados e cópia.

B) Impede qualquer falha do sistema.

C) Torna o backup mais recente que os dados.

D) Garante recuperação integral por definição.

E) Dispensa o log.

**Gabarito: A.** A recuperabilidade depende de preservar fontes de restauração além do componente perdido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 15, seção 15.5, páginas 741 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
