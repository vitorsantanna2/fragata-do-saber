# Date — capítulo 22: Apoio à decisão

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_22.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 22.2

Uma carga típica de apoio à decisão se destaca por:

A) Somente pequenas atualizações unitárias previsíveis.

B) Ausência de agregações.

C) Obrigação de escrever em todas as consultas.

D) Impossibilidade de usar histórico.

E) Consultas analíticas complexas sobre grandes conjuntos de dados.

**Gabarito: E.** O perfil analítico difere da rotina operacional de transações curtas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.2, páginas 1105–1107 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 22.2

Um banco predominantemente de leitura voltado à análise não significa que:

A) Possa manter histórico.

B) Nunca precise de carga ou renovação dos dados.

C) Seja adequado a consultas agregadas.

D) Possa usar índices.

E) Possa reunir informação de várias fontes.

**Gabarito: B.** O perfil de uso não elimina operações de manutenção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.2, páginas 1105–1107 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 22.3

No projeto analítico, a preocupação com desempenho deve ser conciliada com:

A) Ausência de documentação.

B) Remoção obrigatória de toda restrição.

C) Bom projeto lógico e controle da redundância.

D) Proibição de chaves.

E) Descarte da semântica dos dados.

**Gabarito: C.** Date alerta contra confundir requisitos físicos de desempenho com decisões lógicas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.3, páginas 1108–1119 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 22.4

A etapa de extração obtém dados:

A) Somente após apagar as fontes.

B) Apenas de tabelas sem chaves.

C) Somente de relatórios impressos.

D) Das fontes que alimentarão o ambiente analítico.

E) Exclusivamente do catálogo de senhas.

**Gabarito: D.** Extração integra o processo de preparação, junto de limpeza, transformação e carga.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.4, páginas 1120–1123 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 22.4

Padronizar códigos de município usados de formas diferentes em duas fontes é exemplo de:

A) Criptografia obrigatória.

B) Projeção sem atributos.

C) Bloqueio exclusivo global.

D) Transformação e consolidação de dados.

E) Commit de duas fases necessariamente.

**Gabarito: D.** A integração exige compatibilizar representações e significados das fontes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.4, páginas 1120–1123 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 22.4

Identificar datas inválidas e registros inconsistentes pertence principalmente à:

A) Classificação de índices.

B) Limpeza de dados.

C) Definição de senhas.

D) Fragmentação física.

E) Assinatura digital.

**Gabarito: B.** Qualidade dos dados precisa ser tratada antes e durante sua incorporação analítica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.4, páginas 1120–1123 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 22.4

Uma área intermediária de preparação pode servir para:

A) Organizar a integração antes da carga no destino analítico.

B) Garantir ausência de qualquer falha.

C) Eliminar a necessidade de transformação.

D) Substituir automaticamente o banco de origem.

E) Guardar somente privilégios.

**Gabarito: A.** O capítulo discute depósitos operacionais também como apoio à preparação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.4, páginas 1120–1123 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 22.5

Um data mart pode ser entendido como:

A) Um ambiente analítico especializado em determinado domínio ou finalidade.

B) Uma linguagem de consulta.

C) Um backup sem possibilidade de leitura.

D) Um índice obrigatório de todo warehouse.

E) Uma transação não confirmada.

**Gabarito: A.** O recorte especializado o distingue de um warehouse de alcance mais amplo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 22.5

Uma razão para separar processamento operacional e analítico é:

A) Evitar conflitos entre cargas com perfis diferentes.

B) A impossibilidade matemática de consultar dados operacionais.

C) A ausência de tipos em ambientes operacionais.

D) A obrigação de usar produtos diferentes.

E) A proibição de manter dados históricos.

**Gabarito: A.** Consultas analíticas extensas podem competir com transações operacionais por recursos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 22.5

Em um esquema em estrela, a tabela de fatos contém principalmente:

A) Somente nomes de usuários.

B) Exclusivamente permissões.

C) Medidas e referências às dimensões no grão escolhido.

D) Somente programas de carga.

E) Apenas definições de tipos.

**Gabarito: C.** Fatos representam eventos ou observações analisáveis em determinado nível de detalhe.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 22.5

Uma dimensão representa principalmente:

A) Apenas totais gerais sem descrição.

B) Contextos de análise, como tempo, produto ou local.

C) Um mecanismo de autenticação.

D) Uma transação distribuída.

E) Somente a quantidade física de discos.

**Gabarito: B.** Dimensões organizam perspectivas pelas quais as medidas podem ser analisadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 22.5

Definir o grão de uma tabela de fatos significa estabelecer:

A) A ordem física obrigatória das linhas.

B) O tamanho do nome da tabela.

C) A senha do processo de carga.

D) A quantidade de usuários.

E) O que cada linha de fato representa.

**Gabarito: E.** Misturar níveis de detalhe sem controle pode produzir agregações incorretas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 22.5

Guardar totais diários e mensais como se fossem fatos do mesmo nível pode causar:

A) Eliminação da redundância.

B) Garantia automática de exatidão.

C) Ausência de necessidade de filtros.

D) Dupla contagem em agregações inadequadas.

E) Independência de qualquer dimensão.

**Gabarito: D.** É necessário distinguir o grão e a semântica dos valores agregados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.5, páginas 1124–1132 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 22.6

OLAP está associado à análise de dados por:

A) Múltiplas dimensões e níveis de agregação.

B) Apenas verificação de senhas.

C) Exclusivamente recuperação de mídia.

D) Navegação física por ponteiros.

E) Somente edição unitária de registros.

**Gabarito: A.** A perspectiva multidimensional pode ser apoiada por diferentes representações e implementações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.6, páginas 1133–1143 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 22.6

Passar de totais anuais para mensais corresponde a:

A) Roll-up.

B) Revoke.

C) Rollback.

D) Checkpoint.

E) Drill-down.

**Gabarito: E.** O detalhamento desce na hierarquia da dimensão temporal.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.6, páginas 1133–1143 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Fácil — seção 22.6

Consolidar totais municipais em totais estaduais corresponde a:

A) Drill-down.

B) Criação de savepoint.

C) Roll-up.

D) Undo.

E) Semijunção obrigatória.

**Gabarito: C.** A operação sobe para um nível mais agregado da dimensão.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.6, páginas 1133–1143 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 22.6

O CUBE sobre duas dimensões permite calcular:

A) Apenas produtos cartesianos.

B) Apenas a dimensão escolhida como chave.

C) Somente o total mais detalhado.

D) Agregações para todas as combinações de subconjuntos dessas dimensões.

E) Somente uma soma sem agrupamento.

**Gabarito: D.** Inclui agrupamentos detalhados, parciais e total geral conforme a semântica da agregação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.6, páginas 1133–1143 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 22.6

Duas dimensões independentes de agrupamento admitem quantos subconjuntos para um CUBE completo?

A) 2.

B) 5.

C) 3.

D) 8.

E) 4.

**Gabarito: E.** Os subconjuntos são vazio, primeira dimensão, segunda dimensão e ambas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.6, páginas 1133–1143 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 22.7

Mineração de dados procura principalmente:

A) Somente a definição de visões.

B) Somente uma linha por sua chave.

C) Padrões interessantes em grandes coleções de dados.

D) Apenas concessões de privilégio.

E) Exclusivamente arquivos corrompidos.

**Gabarito: C.** A análise exploratória pode apoiar decisões e detectar comportamentos incomuns.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.7, páginas 1144–1146 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 22.7

Detectar um aumento incomum de operações de um cartão é exemplo de:

A) Normalização até FNBC.

B) Busca de padrões ou anomalias para apoiar investigação.

C) Uma dependência funcional trivial.

D) Prova definitiva de fraude em qualquer caso.

E) Restauração de backup.

**Gabarito: B.** O padrão é um indício para análise, não uma conclusão automática sobre sua causa.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 22, seção 22.7, páginas 1144–1146 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
