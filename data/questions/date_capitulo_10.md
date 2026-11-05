# Date — capítulo 10: Visões

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_10.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 10.1

Uma visão relacional é essencialmente:

A) Um arquivo de log.

B) Um índice exclusivo.

C) Uma transação suspensa.

D) Uma cópia física obrigatória.

E) Uma expressão relacional nomeada.

**Gabarito: E.** A visão constitui uma relvar derivada virtual definida por uma expressão.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.1, páginas 501–505 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 10.1

Consultar uma visão exige necessariamente armazenar previamente todas as suas linhas?

A) Não, porque visões não possuem resultado.

B) Sim, uma vez por usuário.

C) Não; sua definição pode ser expandida durante o processamento.

D) Sim, como requisito do modelo.

E) Sim, antes de qualquer inserção no banco.

**Gabarito: C.** Visões virtuais podem ser avaliadas a partir das relvars de origem.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.1, páginas 501–505 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 10.3

Na implementação conceitual por substituição, consultar uma visão consiste em:

A) Desativar todos os predicados.

B) Substituir seu nome pela expressão que a define.

C) Renomear fisicamente todos os arquivos.

D) Usar apenas o último backup.

E) Excluir sua definição após cada leitura.

**Gabarito: B.** O fechamento permite integrar a expressão definidora à consulta externa.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.3, páginas 511–512 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 10.2

Ocultar o atributo salário em uma visão contribui principalmente para:

A) Normalizar automaticamente a tabela.

B) Criptografar os valores armazenados.

C) Garantir que salários estejam corretos.

D) Restringir a informação apresentada aos usuários daquela interface.

E) Eliminar qualquer possibilidade de acesso por outros canais.

**Gabarito: D.** A visão pode limitar exposição, mas segurança completa depende também dos demais privilégios.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.2, páginas 506–510 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 10.2

Manter uma interface de visão estável após reestruturar tabelas básicas favorece:

A) Obrigatoriedade de navegação física.

B) Duplicação não controlada.

C) Mudança automática de todas as aplicações.

D) Eliminação de tipos.

E) Independência de dados lógica.

**Gabarito: E.** A visão pode preservar a forma de acesso esperada pelas aplicações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.2, páginas 506–510 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 10.2

Dar um nome a uma consulta complexa usada em vários relatórios serve como:

A) Abreviação reutilizável e simplificação da interface.

B) Obrigação de copiar o resultado.

C) Substituição das restrições de origem.

D) Conversão do banco em arquivo sequencial.

E) Confirmação automática de transações.

**Gabarito: A.** A visão evita repetir a mesma expressão em vários pontos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.2, páginas 506–510 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 10.2

O princípio de permutabilidade discutido por Date defende que aplicações não dependam indevidamente de:

A) Predicados do resultado.

B) Significado dos dados.

C) Seus requisitos de integridade.

D) Tipos declarados de atributos.

E) Uma relvar ser básica ou derivada.

**Gabarito: E.** O tratamento uniforme busca reduzir diferenças artificiais entre interfaces básicas e virtuais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.2, páginas 506–510 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 10.4

Atualizar uma visão envolve necessariamente avaliar:

A) Somente a quantidade de índices.

B) Quais alterações nas relvars de origem correspondem à operação e preservam restrições.

C) Apenas o nome do usuário.

D) A velocidade da conexão, sem considerar os dados.

E) Somente a ordem das colunas na tela.

**Gabarito: B.** Atualização por visão precisa de semântica definida e efeitos válidos nas fontes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 10.4

Uma visão filtra produtos com preço acima de 100. Com CHECK OPTION, inserir preço 80 pela visão deve:

A) Excluir todos os produtos baratos.

B) Ser aceito e automaticamente convertido para 101.

C) Alterar a definição da visão.

D) Ser rejeitado por não satisfazer a condição da visão.

E) Confirmar sem verificar o predicado.

**Gabarito: D.** CHECK OPTION impede que alterações pela visão produzam linhas fora de sua condição.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 10.6

Sem CHECK OPTION, uma atualização por visão pode fazer uma linha deixar de aparecer nela?

A) Sim, mas a tabela básica será sempre eliminada.

B) Não, porque visões não usam filtros.

C) Sim, somente se o banco estiver offline.

D) Não, toda visão possui esse controle implicitamente.

E) Sim, quando a alteração deixa de satisfazer seu filtro e a operação é admitida.

**Gabarito: E.** O desaparecimento da visão não significa necessariamente exclusão da linha básica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.6, páginas 538–542 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 10.4

Por que uma visão de totais por setor exige cuidado ao receber atualizações?

A) Um novo total não determina por si só como distribuir alterações entre as linhas básicas.

B) Porque totais não podem ser consultados.

C) Porque agregação elimina o esquema do banco.

D) Porque todos os resultados agregados são índices.

E) Porque toda visão agregada é uma cópia física.

**Gabarito: A.** Atualizações precisam de correspondência definida, não de uma distribuição arbitrária dos valores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 10.4

Uma visão de projeção omite um atributo obrigatório sem valor padrão. Qual dificuldade pode surgir ao inserir por ela?

A) O tipo dos atributos visíveis desaparece.

B) A projeção passa a ordenar fisicamente a tabela.

C) A inserção vira automaticamente uma exclusão.

D) Faltar informação necessária para construir uma tupla básica válida.

E) A unicidade deixa de poder ser declarada.

**Gabarito: D.** As restrições das fontes continuam aplicáveis às operações realizadas pela visão.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 10.4

Uma visão junta pedidos e clientes. Alterar um atributo de cliente pode afetar a apresentação de vários pedidos porque:

A) Cada linha da visão é uma cópia independente obrigatória.

B) Pedidos e clientes devem ter chaves idênticas.

C) Várias tuplas da junção podem referir-se ao mesmo cliente.

D) Junções sempre duplicam registros básicos.

E) Visões não preservam correspondências.

**Gabarito: C.** A multiplicidade de correspondências precisa ser considerada na semântica de atualização.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 10.4

Excluir uma linha de uma visão de junção deve significar apagar todas as entidades envolvidas?

A) Sim, sempre em todas as tabelas.

B) Sim, pois junção é produto físico.

C) Não; os efeitos dependem de regras de atualização e restrições bem definidas.

D) Não, porque uma visão de junção não pode ser lida.

E) Sim, inclusive entidades não relacionadas.

**Gabarito: C.** Não se deve deduzir uma política de exclusão apenas da aparência do resultado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.4, páginas 513–534 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — seção 10.5

Qual diferença caracteriza um snapshot em relação a uma visão virtual comum?

A) Ele substitui a chave primária.

B) Ele mantém uma cópia materializada de dados de um instante ou atualização.

C) Ele é necessariamente atualizado a cada leitura.

D) Ele representa apenas permissões.

E) Ele não possui resultado consultável.

**Gabarito: B.** Snapshots introduzem armazenamento de resultados e uma política de renovação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.5, páginas 535–537 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 10.5

Uma cópia materializada é renovada apenas à noite. Durante o dia ela pode:

A) Eliminar todas as transações.

B) Refletir um estado anterior ao das fontes.

C) Impedir alterações nas tabelas básicas.

D) Garantir dados mais recentes que as fontes.

E) Tornar irrelevante seu horário de renovação.

**Gabarito: B.** A atualidade depende do mecanismo e da periodicidade de manutenção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.5, páginas 535–537 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 10.5

Qual compromisso surge ao materializar um resultado de consulta?

A) Eliminar todos os custos de atualização.

B) Garantir ausência de redundância.

C) Ganhar desempenho de leitura ao custo de armazenamento e manutenção.

D) Tornar inúteis as consultas às fontes.

E) Dispensar qualquer estratégia de renovação.

**Gabarito: C.** Materialização mantém informação derivada que precisa ser administrada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.5, páginas 535–537 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 10.6

Descartar uma visão virtual implica necessariamente excluir os dados das tabelas que ela consulta?

A) Não; remove-se a definição da visão, respeitadas as dependências aplicáveis.

B) Sim, mas apenas dados com valores numéricos.

C) Não, pois visões não possuem definições.

D) Sim, sempre todas as linhas.

E) Sim, porque a visão possui exclusivamente os dados.

**Gabarito: A.** Definição derivada e conteúdo das fontes são objetos distintos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.6, páginas 538–542 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 10.3

Uma visão V2 consulta V1, que consulta uma relvar básica. Conceitualmente, a busca pode:

A) Exigir que V1 seja uma cópia física.

B) Consultar apenas o nome de V2 sem expressão.

C) Transformar V2 em chave estrangeira.

D) Expandir sucessivamente as definições até as fontes.

E) Ignorar o filtro de V1.

**Gabarito: D.** Composição e substituição permitem construir interfaces derivadas em camadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.3, páginas 511–512 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 10.2

Uma aplicação consulta somente uma visão com nomes estáveis. Renomear colunas básicas pode ser transparente se:

A) A definição da visão for ajustada preservando seu contrato externo.

B) O usuário adivinhar os novos nomes.

C) A visão também mudar todos os nomes expostos.

D) Todas as linhas forem duplicadas.

E) Os tipos forem removidos.

**Gabarito: A.** Preservar o contrato da visão pode isolar a aplicação da reestruturação subjacente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 10, seção 10.2, páginas 506–510 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
