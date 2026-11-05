# Date — capítulo 21: Bancos de dados distribuídos

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_21.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 21.1

Um banco de dados distribuído envolve dados logicamente relacionados mantidos:

A) Apenas no terminal de um usuário.

B) Somente em um arquivo local por definição.

C) Sem qualquer comunicação entre componentes.

D) Em múltiplos sites com gerenciamento coordenado.

E) Exclusivamente em memória transitória.

**Gabarito: D.** A distribuição dos dados deve ser tratada como um sistema integrado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.1, páginas 1040 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 21.3

Autonomia local significa principalmente:

A) Eliminação dos administradores locais.

B) Ausência de qualquer política de integridade.

C) Obrigação de copiar tudo para um único centro.

D) Proibição de acesso remoto.

E) Controle local dos dados e operações do site, dentro da coordenação do sistema.

**Gabarito: E.** Autonomia não deve ser confundida com isolamento absoluto entre os sites.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 21.3

O objetivo de não depender de um site central busca evitar:

A) A existência de chaves candidatas.

B) Qualquer catálogo distribuído.

C) Toda comunicação entre sites.

D) Toda transação local.

E) Que um componente central seja indispensável à operação de todo o sistema.

**Gabarito: E.** A organização deve reduzir dependências centrais que limitem autonomia e disponibilidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 21.3

Independência de localização procura permitir que a aplicação:

A) Elimine a necessidade de comunicação.

B) Leia sem qualquer autorização.

C) Atualize somente dados locais.

D) Acesse dados sem depender de seu site físico específico.

E) Ignore o significado dos atributos.

**Gabarito: D.** Transparência de localização separa nomes e interfaces da posição física.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 21.3

Fragmentação horizontal corresponde principalmente a dividir uma relação por:

A) Subconjuntos de tuplas.

B) Subconjuntos de atributos apenas.

C) Índices de usuário.

D) Tipos de senha.

E) Versões de aplicação.

**Gabarito: A.** É associada à restrição relacional sobre grupos de linhas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 21.3

Fragmentação vertical corresponde principalmente a dividir uma relação por:

A) Permissões de consulta.

B) Subconjuntos de atributos, preservando a reconstrução necessária.

C) Subconjuntos de usuários.

D) Grupos de transações.

E) Datas de commit apenas.

**Gabarito: B.** A projeção é a operação relacional associada à fragmentação vertical.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 21.3

Uma fragmentação vertical adequada deve permitir:

A) Descartar os atributos de ligação necessários.

B) Eliminar todas as chaves compartilhadas.

C) Aceitar combinações espúrias por padrão.

D) Reconstruir somente metade das tuplas.

E) Recompor a informação original sem perdas.

**Gabarito: E.** Os fragmentos precisam conservar informação suficiente para sua recomposição.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 21.3

Replicação significa manter:

A) Cópias de dados em mais de um local.

B) Uma chave primária diferente para cada consulta.

C) Somente um nome alternativo para uma visão.

D) Apenas atributos distintos em cada site.

E) Dados sem qualquer redundância.

**Gabarito: A.** Replicação é um caso de redundância que precisa ser controlada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 21.3

Uma vantagem potencial de réplicas locais é:

A) Eliminar todos os conflitos de atualização.

B) Reduzir acesso remoto e melhorar disponibilidade em certas condições.

C) Substituir qualquer backup.

D) Garantir dados sempre atuais sem coordenação.

E) Dispensar comunicação em qualquer situação.

**Gabarito: B.** Benefícios de leitura e disponibilidade exigem considerar também manutenção e falhas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 21.4

Qual problema acompanha atualizações em dados replicados?

A) Propagar e coordenar alterações entre as cópias.

B) Impossibilidade de ler dados locais.

C) Desaparecimento dos tipos.

D) Ausência de qualquer redundância.

E) Obrigação de remover todas as chaves.

**Gabarito: A.** Cópias divergentes precisam ser tratadas pela estratégia de replicação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 21.4

Em consultas distribuídas, qual custo pode dominar a execução?

A) A ordem alfabética das tabelas.

B) Transferência de dados e troca de mensagens entre sites.

C) A cor do resultado.

D) O nome do servidor.

E) Somente a quantidade de caracteres do SELECT.

**Gabarito: B.** Latência e volume transmitido tornam a comunicação uma parte importante da otimização.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 21.4

Aplicar filtros no site de origem antes de transmitir resultados pode:

A) Eliminar necessariamente toda comunicação.

B) Impedir qualquer junção.

C) Reduzir o volume trafegado.

D) Garantir latência zero.

E) Mudar a condição da consulta.

**Gabarito: C.** A estratégia é útil quando preserva a semântica e diminui dados transferidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 21.4

Uma semijunção pode ajudar uma consulta distribuída por:

A) Replicar obrigatoriamente todo o banco.

B) Eliminar o predicado de correspondência.

C) Confirmar transações sem participantes.

D) Transformar linhas em senhas.

E) Restringir candidatos antes de transferir tuplas completas.

**Gabarito: E.** Trocar informação de correspondência pode custar menos que transportar relações integrais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 21.4

Uma transação que altera dados em dois sites exige atenção especial a:

A) Um backup de tela.

B) Somente ordenação de colunas.

C) Recuperação e decisão de confirmação coordenadas.

D) Eliminação das chaves locais.

E) Apenas o nome dos índices.

**Gabarito: C.** A atomicidade precisa abranger os participantes, não somente cada alteração isolada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 21.4

Deadlocks em sistemas distribuídos podem envolver:

A) Somente recursos de um único processo local.

B) Dependências de espera que atravessam vários sites.

C) Apenas consultas sem qualquer bloqueio.

D) Necessariamente falhas físicas.

E) Somente arquivos de impressão.

**Gabarito: B.** A detecção e resolução podem exigir informação além da visão de um único site.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.4, páginas 1058–1073 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 21.6

Independência de SGBD busca permitir integração entre:

A) Somente tabelas do mesmo usuário.

B) Arquivos sem qualquer esquema.

C) Sistemas que podem usar produtos de banco diferentes.

D) Apenas réplicas idênticas em um único produto.

E) Aplicações sem dados.

**Gabarito: C.** Heterogeneidade exige tratar diferenças de interfaces, tipos e semântica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.6, páginas 1079–1085 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 21.6

Qual papel pode exercer um gateway de acesso a dados?

A) Impedir qualquer comunicação.

B) Substituir toda regra de negócio.

C) Adaptar requisições e resultados entre sistemas diferentes.

D) Eliminar automaticamente todas as divergências semânticas.

E) Criar uma única transação sem coordenação.

**Gabarito: C.** Adaptação de interface não resolve por si só todos os problemas de heterogeneidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.6, páginas 1079–1085 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 21.5

Em uma arquitetura cliente/servidor, buscar uma linha por mensagem pode ser caro porque:

A) Garante uso ótimo da rede.

B) Sempre elimina processamento no servidor.

C) Transforma cada linha em chave candidata.

D) Multiplica a quantidade de viagens entre cliente e servidor.

E) Impede a existência de SQL.

**Gabarito: D.** Operações em conjuntos podem reduzir a sobrecarga de comunicação de acessos repetitivos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.5, páginas 1074–1078 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 21.5

Executar um procedimento armazenado no servidor pode ajudar a:

A) Agrupar trabalho próximo dos dados e reduzir mensagens.

B) Dispensar tratamento de falhas.

C) Tornar todos os dados públicos.

D) Garantir que qualquer código seja correto.

E) Eliminar a necessidade de autorização.

**Gabarito: A.** Localizar processamento no servidor pode diminuir interações, mas não remove demais requisitos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.5, páginas 1074–1078 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 21.3

Operação contínua como objetivo distribuído significa que a falha de um site deve, idealmente:

A) Paralisar obrigatoriamente todo o sistema.

B) Apagar todas as réplicas.

C) Confirmar todas as transações incompletas.

D) Permitir funcionamento possível dos demais, ainda que com serviço reduzido.

E) Eliminar a segurança.

**Gabarito: D.** A disponibilidade efetiva depende da arquitetura e das dependências entre componentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 21, seção 21.3, páginas 1047–1057 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
