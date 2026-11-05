# Date — capítulo 13: Normalização: formas normais superiores

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_13.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 13.2

Uma dependência multivalorada trata principalmente de:

A) Permissões de usuário.

B) Ordenação física das linhas.

C) Criptografia de colunas.

D) Quantidade de índices.

E) Independência entre conjuntos de valores associados a um determinante.

**Gabarito: E.** DMVs capturam combinações independentes que DFs não descrevem completamente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 13.2

Um aluno possui idiomas e esportes independentes entre si. Em R(Aluno,Idioma,Esporte), essa independência sugere:

A) Aluno →→ Idioma e Aluno →→ Esporte.

B) Esporte → Aluno obrigatoriamente.

C) Ausência de qualquer dependência.

D) Idioma → Aluno obrigatoriamente.

E) Aluno → Idioma e Aluno → Esporte obrigatoriamente.

**Gabarito: A.** Vários valores independentes por aluno indicam DMVs, não necessariamente DFs.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 13.2

Para um aluno com dois idiomas e três esportes independentes, quantas combinações completas aparecem em R?

A) 5.

B) 3.

C) 2.

D) 6.

E) 1.

**Gabarito: D.** A independência requer o produto das duas coleções para aquele determinante.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 13.2

Qual decomposição remove a repetição causada por idiomas e esportes independentes?

A) Uma relação por combinação completa.

B) AlunoIdioma e AlunoEsporte.

C) Aluno apenas.

D) Três relações sem o identificador do aluno.

E) IdiomaEsporte apenas.

**Gabarito: B.** As projeções preservam separadamente cada conjunto de fatos independentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 13.2

A 4FN exige que toda DMV não trivial tenha como determinante:

A) Uma coluna fisicamente ordenada.

B) Uma superchave.

C) Um atributo não primo.

D) Uma chave estrangeira necessariamente.

E) Um atributo textual.

**Gabarito: B.** Essa condição evita redundância multivalorada não justificada por chaves.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 13.2

Toda dependência funcional X → Y implica uma DMV X →→ Y?

A) Somente se X for vazio.

B) Não, DFs e DMVs são incompatíveis.

C) Somente se Y for numérico.

D) Sim.

E) Somente em bancos distribuídos.

**Gabarito: D.** DMVs generalizam DFs; o sentido inverso não vale em geral.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 13.2

Uma DMV X →→ Y implica necessariamente X → Y?

A) Não; pode haver vários valores de Y para o mesmo X.

B) Sim, se o banco for relacional.

C) Sim, se houver mais de uma linha.

D) Não, porque DMVs não admitem determinantes.

E) Sim, por definição.

**Gabarito: A.** A DF exige um único valor dependente por determinante; a DMV não.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 13.2

Uma relvar em FNBC pode ainda conter redundância por quê?

A) FNBC ignora todas as DFs.

B) A FNBC elimina os tipos.

C) FNBC exige duplicação de todas as tuplas.

D) Toda chave candidata viola uma DMV.

E) Podem existir DMVs não triviais com determinante que não seja superchave.

**Gabarito: E.** FNBC resolve condições sobre DFs, mas não todas as dependências multivaloradas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 13.3

Uma dependência de junção declara que uma relação é igual:

A) À primeira linha de cada projeção.

B) À união arbitrária de quaisquer tabelas.

C) À junção de determinadas projeções suas.

D) A uma lista ordenada de atributos.

E) A um produto físico de arquivos.

**Gabarito: C.** A DJ expressa a reconstrução sem perdas por um conjunto de projeções.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 13.3

Uma DJ pode envolver mais de duas projeções?

A) Somente em arquivos não relacionais.

B) Não, pois junções são sempre unárias.

C) Sim.

D) Não, toda DJ é binária.

E) Somente se não houver chaves.

**Gabarito: C.** Certas redundâncias só são reveladas por decomposições em três ou mais projeções.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 13.3

Qual forma normal é também chamada forma normal de projeção-junção?

A) FNBC.

B) 1FN.

C) 5FN.

D) 3FN.

E) 2FN.

**Gabarito: C.** A 5FN trata das dependências de junção não triviais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 13.3

Na 5FN, as dependências de junção não triviais devem ser justificadas por:

A) Número de discos.

B) Ordem dos atributos.

C) Endereços físicos.

D) Senhas dos usuários.

E) Chaves candidatas.

**Gabarito: E.** O critério exclui redundância de junção que não decorra das chaves.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 13.3

Toda relvar em 5FN está em 4FN?

A) Sim.

B) Não, porque a 5FN dispensa DMVs.

C) Somente se estiver vazia.

D) Não, são formas independentes.

E) Somente se tiver uma chave simples.

**Gabarito: A.** A hierarquia de formas normais exige também as condições anteriores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 13.3

A 4FN garante, por si só, a ausência de toda redundância baseada em DJs de maior ordem?

A) Não, porque 4FN exige duplicatas.

B) Sim, se houver índices.

C) Sim, desde que haja três atributos.

D) Não; essa motivação leva à 5FN.

E) Sim, toda DJ é uma DF.

**Gabarito: D.** DMVs não esgotam as dependências de junção possíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.3, páginas 637–643 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 13.4

Ao decompor uma relação durante a normalização, qual propriedade deve ser preservada?

A) Número original de colunas em cada projeção.

B) Reconstrução sem perdas.

C) Ordem de inserção.

D) Quantidade de páginas do índice.

E) Nome físico do arquivo.

**Gabarito: B.** Dividir tabelas sem preservar informação não constitui uma decomposição adequada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.4, páginas 644–647 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 13.5

Date recomenda assumir que desnormalizar é sempre necessário para desempenho?

A) Sim, toda junção torna o banco inviável.

B) Sim, a 5FN impede índices.

C) Não; desempenho e projeto lógico devem ser analisados separadamente.

D) Sim, qualquer duplicação é benéfica.

E) Não, porque desempenho não importa.

**Gabarito: C.** Não se deve abandonar um bom projeto lógico por uma regra geral de desempenho sem análise.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.5, páginas 648–651 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 13.5

Materializar um resultado para acelerar consultas deve exigir atenção a:

A) Proibição de qualquer redundância controlada.

B) Apenas escolha da cor da interface.

C) Remoção de todas as chaves.

D) Atualização e consistência da informação derivada.

E) Dispensa de renovação.

**Gabarito: D.** Uma representação redundante mantida por razões físicas precisa de controle.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.5, páginas 648–651 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 13.6

O princípio de projeto ortogonal busca evitar principalmente:

A) Toda junção em consultas.

B) Qualquer relacionamento entre entidades.

C) Toda referência entre tabelas.

D) Todos os tipos definidos pelo usuário.

E) Representações redundantes e sobrepostas do mesmo fato em relvars diferentes.

**Gabarito: E.** O princípio complementa a preocupação com redundância entre relvars distintas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.6, páginas 652–656 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Difícil — seção 13.2

Se idiomas e esportes não forem independentes, decompor somente em AlunoIdioma e AlunoEsporte pode:

A) Criar combinações não autorizadas ao recompor por junção.

B) Produzir uma única tupla por aluno.

C) Preservar obrigatoriamente a associação original.

D) Garantir sempre a mesma relação.

E) Eliminar automaticamente todas as restrições.

**Gabarito: A.** A decomposição depende da validade da DMV, não apenas dos nomes dos atributos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.2, páginas 631–636 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 13.4

Por que inferir dependências somente a partir da amostra atual é arriscado?

A) Porque amostras nunca contêm dados.

B) Ela pode omitir combinações válidas ou violações possíveis em outros estados.

C) Porque toda amostra determina a 5FN.

D) Porque a normalização independe da semântica.

E) Porque dependências são físicas.

**Gabarito: B.** Dependências são regras dos estados admissíveis, não coincidências de uma fotografia dos dados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 13, seção 13.4, páginas 644–647 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
