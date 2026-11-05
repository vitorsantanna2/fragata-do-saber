# Date — capítulo 19: Falta de informações

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_19.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 19.2

Em SQL, a comparação comum NULL = 5 produz:

A) O inteiro zero.

B) TRUE.

C) FALSE em todos os contextos.

D) UNKNOWN.

E) Uma string vazia.

**Gabarito: D.** Comparações comuns com marcador nulo não recebem um valor booleano clássico determinado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 19.2

Na lógica trivalorada SQL, NOT UNKNOWN resulta em:

A) Uma exceção obrigatória.

B) TRUE.

C) NULL numérico igual a zero.

D) FALSE.

E) UNKNOWN.

**Gabarito: E.** A negação preserva o valor lógico desconhecido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 19.2

Na lógica trivalorada SQL, TRUE AND UNKNOWN resulta em:

A) FALSE.

B) UNKNOWN.

C) Uma string vazia.

D) Zero.

E) TRUE.

**Gabarito: B.** O resultado depende da condição desconhecida, pois o outro operando é verdadeiro.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 19.2

Na lógica trivalorada SQL, FALSE AND UNKNOWN resulta em:

A) Um erro de chave.

B) UNKNOWN.

C) Uma relação vazia por definição.

D) FALSE.

E) TRUE.

**Gabarito: D.** Um operando falso torna falsa a conjunção independentemente do outro.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 19.2

Na lógica trivalorada SQL, TRUE OR UNKNOWN resulta em:

A) UNKNOWN.

B) FALSE.

C) TRUE.

D) Uma exceção.

E) Um número nulo.

**Gabarito: C.** Um operando verdadeiro basta para tornar verdadeira a disjunção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 19.2

Na lógica trivalorada SQL, FALSE OR UNKNOWN resulta em:

A) TRUE.

B) Uma string vazia.

C) UNKNOWN.

D) Um erro de tipo obrigatório.

E) FALSE.

**Gabarito: C.** A verdade da disjunção ainda depende do operando desconhecido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.2, páginas 932–938 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 19.7

Uma cláusula WHERE seleciona linhas cuja condição resulta em:

A) TRUE.

B) Somente UNKNOWN.

C) Qualquer valor que não seja zero.

D) TRUE ou UNKNOWN.

E) FALSE ou UNKNOWN.

**Gabarito: A.** Condições falsas ou desconhecidas não qualificam a linha para o resultado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 19.7

Qual teste SQL verifica diretamente a presença de marcador nulo?

A) IS NULL.

B) = 0.

C) = NULL.

D) = UNKNOWN como substituto universal.

E) &lt;&gt; NULL.

**Gabarito: A.** IS NULL é um teste específico; a comparação comum com NULL não é equivalente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 19.7

A expressão NULL = NULL em SQL é avaliada como:

A) FALSE obrigatoriamente.

B) UNKNOWN.

C) Uma tupla vazia.

D) Zero.

E) TRUE.

**Gabarito: B.** A igualdade comum não identifica dois marcadores nulos como um valor conhecido igual.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Difícil — seção 19.3

Se P é UNKNOWN, P OR NOT P produz, na lógica trivalorada discutida:

A) TRUE.

B) Uma confirmação.

C) Um inteiro.

D) FALSE.

E) UNKNOWN.

**Gabarito: E.** O terceiro valor impede aplicar sem exame certas equivalências da lógica bivalorada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.3, páginas 939–943 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 19.7

Para valores 10, 20 e NULL, COUNT(coluna) retorna:

A) 2.

B) 1.

C) NULL.

D) 3.

E) 0.

**Gabarito: A.** COUNT da expressão conta apenas resultados não nulos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 19.7

Para três linhas, uma contendo NULL na coluna consultada, COUNT(*) retorna:

A) 2.

B) 3.

C) NULL.

D) 1.

E) 0.

**Gabarito: B.** COUNT(*) conta linhas, independentemente de nulos em colunas particulares.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 19.7

Para valores 10, 20 e NULL, AVG(coluna) resulta em:

A) 30.

B) 15.

C) 10.

D) 0.

E) NULL obrigatoriamente.

**Gabarito: B.** AVG ignora o marcador nulo; não o trata automaticamente como zero.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Fácil — seção 19.4

Uma coluna de chave primária SQL pode aceitar NULL?

A) Sim, somente na primeira linha.

B) Sim, se seu tipo for texto.

C) Sim, quando referenciada por outra tabela.

D) Sim, se o índice estiver ordenado.

E) Não.

**Gabarito: E.** A chave primária SQL exige identificação não nula.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.4, páginas 944–947 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 19.4

Uma chave estrangeira anulável significa necessariamente que toda linha deve possuir referência preenchida?

A) Sim, quando a tabela contém índices.

B) Sim, REFERENCES implica NOT NULL em qualquer declaração.

C) Não; nulos e regras de correspondência precisam ser considerados.

D) Sim, por definição de coluna.

E) Não, porque chaves estrangeiras nunca são verificadas.

**Gabarito: C.** Obrigatoriedade e integridade da referência são requisitos relacionados, mas distintos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.4, páginas 944–947 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 19.5

Uma junção externa à esquerda preserva:

A) Apenas linhas com chaves nulas.

B) Todas as combinações do produto sem filtro.

C) Somente as linhas do lado direito.

D) Todas as linhas do lado esquerdo, usando nulos nos campos direitos sem correspondência.

E) Somente linhas com correspondência dos dois lados.

**Gabarito: D.** O preenchimento de campos ausentes distingue a junção externa da interna.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.5, páginas 948–951 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Difícil — seção 19.7

Um filtro WHERE sobre coluna direita após LEFT JOIN pode eliminar linhas sem correspondência porque:

A) A condição pode resultar UNKNOWN nos campos preenchidos com NULL.

B) NULL é sempre igual a qualquer valor.

C) Toda coluna direita vira chave primária.

D) LEFT JOIN nunca conserva linhas da esquerda.

E) WHERE é executado como COMMIT.

**Gabarito: A.** É necessário considerar o efeito do filtro sobre as linhas estendidas com nulos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 19.6

Usar -1 como valor especial para informação ausente exige cuidado porque:

A) Ele garante média correta sem tratamento.

B) Ele passa a ser automaticamente NULL.

C) O valor sentinela pode contaminar cálculos e precisa de semântica explícita.

D) Ele elimina todas as restrições.

E) Ele impede qualquer armazenamento.

**Gabarito: C.** Um valor convencional não equivale ao mecanismo de ausência nem resolve toda ambiguidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.6, páginas 952 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 19.7

Qual expressão SQL escolhe o primeiro argumento não nulo entre salario e 0?

A) salario &lt;&gt; NULL.

B) NULL = 0.

C) salario = NULL.

D) COALESCE(salario, 0).

E) COUNT(*).

**Gabarito: D.** A substituição é explícita; usar zero envolve uma decisão semântica da aplicação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.7, páginas 953–960 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 19.3

Uma consulta usa x NOT IN (1, NULL). Para x=2, por que a linha não é selecionada?

A) Porque NULL equivale a todos os inteiros.

B) Porque a tabela não pode conter 2.

C) Porque NOT IN é sempre falso.

D) Porque 2 é igual a 1.

E) A comparação com o nulo torna o predicado UNKNOWN.

**Gabarito: E.** A negação não converte desconhecido em verdadeiro, exigindo cuidado com nulos em subconsultas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 19, seção 19.3, páginas 939–943 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
