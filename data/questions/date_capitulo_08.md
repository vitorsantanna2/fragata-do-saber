# Date — capítulo 8: Cálculo relacional

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_08.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 8.1

O cálculo relacional expressa uma consulta principalmente por meio de:

A) Condições que definem as tuplas desejadas.

B) Permissões de rede.

C) Procedimentos de backup.

D) Endereços físicos de registros.

E) Sequências obrigatórias de leitura de disco.

**Gabarito: A.** O cálculo descreve propriedades do resultado, em vez de explicitar uma composição algébrica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.1, páginas 374–376 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 8.4

Nas formulações relacionais consideradas no capítulo, álgebra e cálculo são:

A) Equivalentes em custo físico de execução.

B) Idênticos em sintaxe.

C) Equivalentes em poder de expressão.

D) Distintos porque só a álgebra consulta dados.

E) Distintos porque só o cálculo produz relações.

**Gabarito: C.** Equivalência expressiva não implica sintaxe ou planos físicos idênticos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.4, páginas 392–397 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 8.2

No cálculo de tuplas, variáveis de intervalo representam:

A) Comandos de autorização.

B) Transações em execução.

C) Tuplas das relações sobre as quais variam.

D) Somente nomes de índices.

E) Somente valores de endereço físico.

**Gabarito: C.** As variáveis permitem formular condições sobre atributos das tuplas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 8.7

No cálculo de domínios, as variáveis variam sobre:

A) Valores dos domínios correspondentes.

B) Usuários autorizados.

C) Relvars completas, exclusivamente.

D) Planos de execução.

E) Páginas de armazenamento.

**Gabarito: A.** Essa é a distinção principal em relação às variáveis de tuplas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.7, páginas 413–416 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 8.2

O quantificador EXISTS expressa que uma condição vale para:

A) Todas as atribuições, obrigatoriamente.

B) Nenhuma atribuição.

C) Exatamente duas atribuições.

D) Apenas a primeira linha física.

E) Pelo menos uma atribuição da variável quantificada.

**Gabarito: E.** A existência não impõe unicidade nem depende da ordem de armazenamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 8.2

O quantificador FORALL expressa que uma condição vale para:

A) Pelo menos uma, sem outra exigência.

B) Somente a atribuição de maior valor.

C) Uma atribuição escolhida aleatoriamente.

D) Todas as atribuições no domínio de quantificação.

E) Nenhuma atribuição.

**Gabarito: D.** A quantificação universal exige que não exista contraexemplo no domínio considerado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Difícil — seção 8.2

Em lógica bivalorada, qual forma equivale a FORALL x P(x)?

A) EXISTS x P(x).

B) P(x) AND NOT P(x).

C) NOT EXISTS x NOT P(x).

D) NOT EXISTS x P(x).

E) EXISTS x NOT P(x).

**Gabarito: C.** Afirmar que todos satisfazem P equivale a negar a existência de um contraexemplo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 8.2

Em EXISTS x P(x), a ocorrência de x sob esse quantificador é:

A) Uma constante escalar.

B) Livre.

C) Um nome de índice.

D) Ligada.

E) Uma relvar básica.

**Gabarito: D.** O quantificador vincula as ocorrências de sua variável dentro do respectivo escopo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 8.2

Uma variável livre em uma expressão de consulta não deve ser confundida com:

A) Um símbolo que precisa de interpretação.

B) Uma variável citada em uma condição.

C) Uma referência sujeita às regras de escopo.

D) Uma variável cuja ocorrência está ligada por um quantificador.

E) Um elemento que pode participar da definição do resultado.

**Gabarito: D.** A distinção depende do escopo de quantificação, não do nome escolhido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 8.2

Para selecionar alunos com idade acima de 18 e matrícula ativa, a condição deve usar:

A) Igualdade entre nome e idade.

B) Quantificação existencial sem predicado.

C) Negação dos dois requisitos.

D) Disjunção obrigatória.

E) Conjunção entre os dois requisitos.

**Gabarito: E.** AND exige o atendimento simultâneo das condições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.2, páginas 377–387 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 8.3

Para obter alunos sem inscrições, qual condição de existência é adequada?

A) Existe um aluno sem nome.

B) Existe qualquer inscrição de qualquer aluno.

C) Toda inscrição pertence a outro curso, sem relacioná-la ao aluno.

D) O total geral de inscrições é positivo.

E) Não existe inscrição ligada ao aluno.

**Gabarito: E.** A negação de existência deve correlacionar a inscrição ao aluno candidato ao resultado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.3, páginas 388–391 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 8.3

Para obter alunos inscritos em algum curso de redes, a consulta precisa:

A) Comparar somente a quantidade de tabelas.

B) Relacionar aluno, inscrição e curso e exigir existência de correspondência.

C) Excluir os alunos que possuem inscrições.

D) Exigir que todos os cursos sejam de redes.

E) Consultar nomes sem identificar a associação.

**Gabarito: B.** O predicado existencial precisa representar as ligações relevantes do domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.3, páginas 388–391 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 8.3

Uma consulta exige todos os cursos obrigatórios. Se um aluno não tem inscrição em um deles, ele:

A) É um contraexemplo à condição universal e deve ser excluído.

B) Deve ser incluído por ter alguma inscrição.

C) Deve receber inscrição automática.

D) Passa a ser uma constante lógica.

E) Só pode ser excluído se houver duplicatas.

**Gabarito: A.** Uma única falha no conjunto exigido torna falsa a condição universal para esse aluno.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.3, páginas 388–391 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Difícil — seção 8.3

Considere o requisito: todo elemento de um conjunto vazio satisfaz P. Em lógica clássica, ele é:

A) Verdadeiro somente se P for falso.

B) Verdadeiro por vacuidade.

C) Indefinido por ausência de linhas físicas.

D) Equivalente a existir exatamente um elemento.

E) Sempre falso.

**Gabarito: B.** Não há elemento no conjunto vazio que viole P.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.3, páginas 388–391 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 8.4

Converter uma expressão do cálculo em uma expressão algébrica equivalente deve preservar:

A) O resultado lógico para os mesmos dados.

B) A quantidade de acessos a disco.

C) O algoritmo de junção específico.

D) O texto original.

E) A ordem de leitura física.

**Gabarito: A.** A tradução preserva significado, mas pode admitir diferentes implementações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.4, páginas 392–397 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 8.5

Uma expressão no resultado calcula preço multiplicado por quantidade. Isso ilustra:

A) Impossibilidade de tipar o resultado.

B) Ausência de fechamento.

C) Obrigação de usar apenas atributos sem cálculos.

D) Atualização automática da relação de origem.

E) Capacidade de produzir valores derivados nas expressões do cálculo.

**Gabarito: E.** Expressões e operadores escalares permitem calcular valores a partir dos dados consultados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.5, páginas 398–399 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 8.6

O SQL, na análise de Date, deriva exclusivamente do cálculo relacional?

A) Sim, inclusive nos detalhes físicos.

B) Sim, sem qualquer influência algébrica.

C) Não; reúne características de cálculo, álgebra e outras construções.

D) Sim, porque JOIN não é algébrico.

E) Não, porque não permite consultas.

**Gabarito: C.** A linguagem SQL não é uma transcrição pura de um único formalismo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.6, páginas 400–412 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 8.7

Uma condição de pertinência no cálculo de domínios testa principalmente:

A) Se um índice está fisicamente ordenado.

B) Se existe tupla na relação com os valores especificados.

C) Se duas máquinas estão conectadas.

D) Se toda transação foi confirmada.

E) Se o usuário conhece uma senha.

**Gabarito: B.** A condição relaciona valores de domínio às tuplas de uma relação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.7, páginas 413–416 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 8.8

Qual linguagem é associada no capítulo principalmente ao cálculo de domínios?

A) Uma ferramenta de backup.

B) Query-by-Example.

C) Um sistema de arquivos.

D) Uma linguagem de montagem.

E) Um protocolo de rede.

**Gabarito: B.** QBE usa modelos de tabelas e elementos de exemplo para expressar consultas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.8, páginas 417–422 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 8.8

Em QBE, repetir um mesmo elemento de exemplo em campos relacionados permite:

A) Duplicar fisicamente todas as linhas.

B) Confirmar alterações pendentes.

C) Substituir o tipo de todos os atributos.

D) Expressar correspondência entre os valores desses campos.

E) Criar automaticamente um índice exclusivo.

**Gabarito: D.** A repetição de variáveis permite estabelecer condições entre tabelas do exemplo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 8, seção 8.8, páginas 417–422 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
