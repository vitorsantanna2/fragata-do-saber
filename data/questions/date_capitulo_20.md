# Date — capítulo 20: Herança de tipo

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_20.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 20.2

Se B é subtipo de A no modelo apresentado, o conjunto de valores de B é:

A) Subconjunto do conjunto de valores de A.

B) Necessariamente disjunto de A.

C) Uma variável de relação.

D) Um arquivo físico separado por definição.

E) Superconjunto próprio de A.

**Gabarito: A.** Todo valor de B também é valor de A.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 20.2

Se C é subtipo de B e B é subtipo de A, então:

A) B deixa de existir.

B) C também é subtipo de A.

C) A é necessariamente subtipo próprio de C.

D) C e A são disjuntos obrigatoriamente.

E) C deve ser um tipo de relação.

**Gabarito: B.** A relação de subtipagem é transitiva.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 20.2

Um subtipo próprio costuma impor, em relação ao supertipo:

A) Um novo nome para exatamente o mesmo conjunto.

B) Ausência de operadores.

C) Obrigação de armazenamento separado.

D) Restrições adicionais sobre os valores admissíveis.

E) Menos condições, admitindo todos os valores adicionais.

**Gabarito: D.** A especialização restringe o conjunto de valores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 20.2

Em uma hierarquia de tipos, um tipo raiz é aquele que:

A) Não possui supertipo próprio na hierarquia considerada.

B) É sempre uma relvar básica.

C) Não possui subtipos.

D) Possui exatamente um atributo.

E) Não possui valores.

**Gabarito: A.** Raiz e folha descrevem posições distintas na hierarquia.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 20.2

Um tipo folha, na hierarquia considerada, é aquele que:

A) Não possui subtipo próprio.

B) Contém todos os demais tipos.

C) Não pode ter operadores.

D) Não possui supertipo.

E) É sempre vazio.

**Gabarito: A.** Ser folha não significa estar no topo da hierarquia.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 20.3

O polimorfismo por inclusão permite que um operador para A receba:

A) Somente valores sem restrições.

B) Apenas endereços físicos.

C) Valores de subtipos de A, respeitado seu contrato.

D) Apenas relvars sem atributos.

E) Qualquer valor de tipo incompatível.

**Gabarito: C.** A inclusão do conjunto do subtipo no supertipo fundamenta essa possibilidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.3, páginas 985–989 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 20.3

Um operador calcula a área de uma figura do tipo ELIPSE. Um valor CÍRCULO pode ser aceito porque:

A) Círculo é um caso particular de elipse no modelo.

B) Todos os valores geométricos têm a mesma representação.

C) Operadores ignoram tipos.

D) A operação transforma qualquer figura em círculo.

E) Círculos não possuem restrições.

**Gabarito: A.** A substituição de valores respeita a inclusão do subtipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.3, páginas 985–989 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 20.3

Definir uma implementação especializada de área para retângulos pode trazer:

A) Dispensa de respeitar o tipo do resultado.

B) Eliminação do supertipo.

C) Reutilização do contrato com uma implementação mais adequada ao subtipo.

D) Liberdade para retornar o perímetro no lugar da área.

E) Mudança obrigatória do significado de área.

**Gabarito: C.** Especialização de implementação deve preservar a semântica do operador.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.3, páginas 985–989 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 20.4

Uma variável declarada ELIPSE pode receber um valor CÍRCULO, na hierarquia apresentada?

A) Não, pois valores de subtipos nunca são atribuíveis.

B) Não, porque variáveis geométricas são constantes.

C) Sim, apenas se perder o centro.

D) Sim, porque o valor pertence também ao supertipo.

E) Sim, mas seu tipo declarado muda obrigatoriamente.

**Gabarito: D.** Tipo declarado da variável e tipo mais específico do valor são conceitos distintos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.4, páginas 990–995 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 20.4

Uma variável declarada CÍRCULO pode receber qualquer valor ELIPSE?

A) Não, porque círculos não são valores.

B) Não; o valor precisa satisfazer as restrições de círculo.

C) Sim, se estiver na mesma transação.

D) Sim, todo supertipo cabe no subtipo.

E) Sim, se tiver representação binária.

**Gabarito: B.** A atribuição ao subtipo exige compatibilidade com seu conjunto de valores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.4, páginas 990–995 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 20.4

Receber um valor de subtipo altera necessariamente o tipo declarado de uma variável de supertipo?

A) Sim, se houver operador de leitura.

B) Sim, mas apenas uma vez.

C) Não, porque o valor é descartado.

D) Sim, em toda atribuição.

E) Não.

**Gabarito: E.** A declaração continua delimitando os valores admissíveis da variável.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.4, páginas 990–995 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 20.5

No modelo de especialização por restrição de Date, criar uma elipse com semieixos iguais produz valor cujo tipo mais específico é:

A) POLÍGONO.

B) CÍRCULO.

C) Sempre ELIPSE, nunca CÍRCULO.

D) Uma relvar sem tipo.

E) RETÂNGULO.

**Gabarito: B.** A classificação considera as restrições satisfeitas pelo valor, não apenas o nome do seletor.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.5, páginas 996–999 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 20.5

Se um valor satisfaz as restrições de um subtipo, sua classificação depende exclusivamente do seletor usado para construí-lo?

A) Sim, porque restrições só valem para variáveis.

B) Sim, independentemente das propriedades do valor.

C) Não, no modelo de especialização por restrição apresentado.

D) Sim, apenas em tipos escalares.

E) Não, porque nenhum tipo possui seletores.

**Gabarito: C.** A discussão separa propriedades do valor e histórico de construção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.5, páginas 996–999 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 20.6

Comparar valores em uma hierarquia exige considerar:

A) Apenas seus nomes impressos.

B) O tamanho do nome do usuário.

C) Compatibilidade de tipos e semântica dos operadores de comparação.

D) A ordem de criação dos tipos.

E) Somente seus endereços físicos.

**Gabarito: C.** Representações iguais não bastam para estabelecer toda igualdade semântica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.6, páginas 1000–1004 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 20.7

A assinatura de um operador inclui, em linhas gerais:

A) A data do último backup.

B) A cardinalidade de todas as tabelas.

C) Somente a localização do código em disco.

D) A senha do proprietário.

E) Nome e tipos dos parâmetros pertinentes.

**Gabarito: E.** Assinaturas permitem caracterizar e distinguir invocações e versões de operadores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.7, páginas 1005–1011 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 20.7

Versões especializadas de um mesmo operador devem:

A) Produzir qualquer resultado do mesmo tamanho físico.

B) Usar obrigatoriamente o mesmo algoritmo.

C) Trocar o nome do supertipo.

D) Ignorar restrições do subtipo.

E) Manter o contrato semântico comum aplicável.

**Gabarito: E.** Compatibilidade de tipagem não garante, sozinha, correção do comportamento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.7, páginas 1005–1011 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Difícil — seção 20.8

Alterar apenas um semieixo de uma variável declarada CÍRCULO pode ser inválido porque:

A) Círculos não possuem dimensões.

B) Operadores de atualização são sempre proibidos no banco.

C) A variável muda automaticamente para qualquer supertipo.

D) Pode violar a igualdade dos semieixos exigida pelo subtipo.

E) Toda elipse exige semieixos distintos.

**Gabarito: D.** Restrições da variável precisam ser preservadas em atualizações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.8, páginas 1012–1017 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 20.8

Por que substituição de valores e substituição de variáveis atualizáveis não são equivalentes?

A) Porque leitura sempre altera os dados.

B) Porque valores possuem endereços permanentes.

C) Porque subtipos só podem ser usados em texto.

D) Atualizações precisam respeitar o conjunto de valores permitido pela variável.

E) Porque variáveis nunca têm tipos.

**Gabarito: D.** Uma operação válida para variáveis de supertipo pode produzir valor proibido para uma variável de subtipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.8, páginas 1012–1017 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 20.2

Herança múltipla significa que um tipo pode possuir:

A) Mais de um usuário autorizado.

B) Mais de um valor, apenas.

C) Mais de uma variável.

D) Mais de um índice físico.

E) Mais de um supertipo imediato.

**Gabarito: E.** A quantidade de supertipos imediatos distingue herança simples e múltipla.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.2, páginas 979–984 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 20.3

Polimorfismo por inclusão e sobrecarga de nomes são necessariamente o mesmo mecanismo?

A) Não, porque polimorfismo não admite operadores.

B) Não; inclusão decorre da hierarquia de subtipos.

C) Sim, qualquer nome repetido cria subtipos.

D) Sim, porque tipos são representações físicas.

E) Sim, desde que o nome tenha parâmetros.

**Gabarito: B.** Operadores homônimos não estabelecem, por si só, relação de subtipagem.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 20, seção 20.3, páginas 985–989 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
