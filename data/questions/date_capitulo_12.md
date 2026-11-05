# Date — capítulo 12: Normalização: 1FN, 2FN, 3FN e FNBC

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_12.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 12.1

Qual objetivo motiva a normalização discutida por Date?

A) Reduzir redundância e anomalias de atualização.

B) Criar o maior número possível de tabelas.

C) Eliminar a necessidade de transações.

D) Garantir o plano físico mais rápido em qualquer consulta.

E) Substituir regras de negócio por índices.

**Gabarito: A.** Normalização é uma disciplina de projeto lógico, não uma promessa universal de desempenho.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.1, páginas 584–589 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 12.2

Uma decomposição sem perdas deve permitir:

A) Ordenar os dados sem índices.

B) Aceitar tuplas espúrias como requisito.

C) Reconstruir apenas parte das tuplas.

D) Reconstruir a relação original pela junção das projeções.

E) Remover as chaves de todas as projeções.

**Gabarito: D.** O critério é preservar a informação na decomposição e recomposição.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.2, páginas 590–594 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Difícil — seção 12.2

Em R(A,B,C), com A → B, qual decomposição é garantida sem perdas pelo caso de Heath?

A) B e C apenas.

B) A e BC, sem outras hipóteses.

C) AB e AC.

D) A e B apenas.

E) AB e BC, sem outras hipóteses.

**Gabarito: C.** A interseção A determina AB; a junção de AB e AC recompõe R.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.2, páginas 590–594 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 12.2

Uma junção de projeções gera combinações que não existiam na relação original. Isso indica:

A) Normalização sem perdas garantida.

B) Uma simples alteração de apresentação.

C) Decomposição com perda de informação.

D) Ausência de qualquer dependência.

E) Um backup completo.

**Gabarito: C.** A perda é de informação sobre associações, podendo aparecer como tuplas espúrias.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.2, páginas 590–594 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 12.3

Na 2FN, atributos não primos não podem depender de:

A) Um tipo declarado.

B) Seu próprio valor.

C) Qualquer atributo em qualquer circunstância.

D) Parte própria de uma chave candidata composta.

E) Uma chave candidata completa.

**Gabarito: D.** A 2FN elimina dependências parciais de atributos não primos em chaves candidatas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 12.3

R(A,B,C), chave AB e DF A → C, com C não primo, viola diretamente:

A) A existência de DFs triviais.

B) A possibilidade de ter atributos.

C) A 2FN.

D) Toda unicidade de AB.

E) A definição de tupla.

**Gabarito: C.** C depende de parte própria da chave composta AB.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 12.3

Um atributo primo é aquele que:

A) É sempre um número primo.

B) Participa de pelo menos uma chave candidata.

C) Não pode participar de dependências.

D) É necessariamente a chave primária inteira.

E) Está na primeira coluna física.

**Gabarito: B.** A classificação considera todas as chaves candidatas, não apenas a escolhida como primária.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 12.3

Na definição geral de 3FN, para cada DF não trivial X → A deve valer:

A) X é superchave ou A é atributo primo.

B) A é obrigatoriamente não primo.

C) A é sempre chave estrangeira.

D) X tem exatamente um atributo.

E) X e A possuem o mesmo tipo.

**Gabarito: A.** A condição por atributo primo diferencia a 3FN da FNBC.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 12.3

Em R(A,B,C), com chave A, A → B e B → C, sem outras DFs, qual problema existe?

A) Ausência de qualquer chave candidata.

B) Obrigação de uma chave composta.

C) Dependência transitiva de C em relação à chave, violando a 3FN.

D) DF B → C trivial.

E) Violação da unicidade de A por definição.

**Gabarito: C.** B não é superchave e C não é primo; separar BC elimina esse padrão de redundância.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 12.3

Se todas as chaves candidatas têm um único atributo, dependências parciais em partes próprias não vazias dessas chaves:

A) Impedem a 1FN.

B) Não ocorrem.

C) Exigem desnormalização.

D) São obrigatórias.

E) Criam automaticamente uma DMV.

**Gabarito: B.** Uma chave simples não possui subconjunto próprio não vazio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.3, páginas 595–604 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 12.4

Preservar dependências em uma decomposição significa principalmente:

A) Duplicar todas as DFs em todas as tabelas.

B) Garantir custo zero de validação.

C) Eliminar o significado das chaves.

D) Preservar a ordem física de cada registro.

E) Poder impor as DFs originais a partir das restrições das projeções.

**Gabarito: E.** Busca-se verificar dependências sem precisar recompor o conjunto original por junções.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.4, páginas 605–608 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 12.4

Decomposição sem perdas e preservação de dependências são:

A) Propriedades impossíveis de testar.

B) Exclusivamente decisões de hardware.

C) Dois nomes para a mesma condição.

D) Garantias de ordenação.

E) Propriedades distintas.

**Gabarito: E.** Uma decomposição pode ser sem perdas e ainda não preservar todas as dependências localmente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.4, páginas 605–608 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 12.5

Uma relvar está em FNBC quando, em toda DF não trivial válida:

A) Existem exatamente duas chaves.

B) Todos os atributos são primos.

C) A chave primária é numérica.

D) O dependente tem um único caractere.

E) O determinante é superchave.

**Gabarito: E.** FNBC restringe todos os determinantes não triviais a superchaves.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 12.5

Toda relvar em FNBC está também em 3FN?

A) Não, as formas são incompatíveis.

B) Sim.

C) Somente se não possuir tuplas.

D) Somente se tiver uma chave simples.

E) Somente se usar SQL.

**Gabarito: B.** A condição da FNBC implica a condição da 3FN.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 12.5

Toda relvar em 3FN está necessariamente em FNBC?

A) Não; a 3FN admite certos casos com dependente primo e determinante não superchave.

B) Sim, se houver índice.

C) Não, porque a FNBC é inferior à 1FN.

D) Sim, quando existem DFs.

E) Sim, são sinônimos.

**Gabarito: A.** A exceção permitida pela 3FN impede a equivalência entre as duas formas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Difícil — seção 12.5

Em R(A,B,C), com AB → C e C → B, quais são as chaves candidatas?

A) Somente BC.

B) AB e AC.

C) A e B.

D) B e C.

E) A e C.

**Gabarito: B.** AB determina tudo; AC obtém B por C → B. Nenhum subconjunto desses conjuntos basta.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Difícil — seção 12.5

Em R(A,B,C), com AB → C e C → B, a DF C → B:

A) Prova que C é chave candidata.

B) É trivial.

C) Impede a existência de qualquer chave.

D) Garante a 5FN.

E) Viola a FNBC, pois C não determina A.

**Gabarito: E.** C não é superchave; B é primo, o que explica a possibilidade de 3FN sem FNBC.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 12.5

Uma decomposição em FNBC pode exigir qual compromisso?

A) Substituir domínios por endereços.

B) Aceitar obrigatoriamente tuplas duplicadas.

C) Eliminar todas as chaves.

D) Deixar de preservar localmente algumas DFs, embora seja sem perdas.

E) Descartar a reconstrução por junção.

**Gabarito: D.** Sem perdas e preservação de dependências podem entrar em conflito na redução à FNBC.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.5, páginas 609–616 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 12.6

Na discussão de Date, possuir um atributo com valor relacional significa automaticamente violar a 1FN?

A) Não; é preciso respeitar o conceito de um valor do tipo correspondente.

B) Sim, toda relação aninhada é um ponteiro físico.

C) Sim, relações só admitem caracteres individuais.

D) Sim, atributos não podem ter tipos definidos.

E) Não, porque a 1FN dispensa tipos.

**Gabarito: A.** O autor distingue complexidade do tipo e ausência de um valor tipado por atributo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.6, páginas 617–619 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 12.1

Separar nome de departamento de cada matrícula, mantendo-o no cadastro de departamentos, evita principalmente:

A) Todas as consultas com junções.

B) Toda ocorrência de bloqueio.

C) Qualquer necessidade de autorização.

D) Atualizar várias cópias do mesmo fato departamental.

E) Toda chave estrangeira.

**Gabarito: D.** Reduzir repetição de fatos ajuda a evitar anomalias de modificação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 12, seção 12.1, páginas 584–589 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
