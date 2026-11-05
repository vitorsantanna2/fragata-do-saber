# Date — capítulo 26: Bancos de dados relacional/objeto

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_26.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 26.1

Na aproximação defendida por Date, recursos de objetos devem ser integrados sobre:

A) Tabelas sem restrições.

B) Ausência de tipos definidos pelo usuário.

C) Um arquivo exclusivo por aplicação.

D) Navegação física obrigatória.

E) Uma base conceitual relacional coerente.

**Gabarito: E.** O autor sustenta a manutenção dos princípios relacionais na integração.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.1, páginas 1357–1360 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 26.1

Qual recurso é central para a visão relacional/objeto defendida pelo autor?

A) Remoção de visões.

B) Exclusão de chaves candidatas.

C) Tipos definidos pelo usuário com operadores apropriados.

D) Ponteiros obrigatórios visíveis ao usuário.

E) Uma tabela por método.

**Gabarito: C.** Suporte adequado a domínios permite lidar com valores de maior complexidade.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.1, páginas 1357–1360 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 26.2

Qual equivalência é identificada como o primeiro grande erro?

A) Valor = valor.

B) Relação = valor relacional.

C) Classe de objetos = tipo, na interpretação de domínio.

D) Classe de objetos = relvar.

E) Operador de leitura = operação sem atualização.

**Gabarito: D.** O autor critica confundir o conceito de tipo com uma variável de relação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.2, páginas 1361–1371 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 26.2

Na equivalência preferida pelo autor, a classe de objetos aproxima-se de:

A) Um índice físico.

B) Um domínio ou tipo.

C) Um arquivo de log.

D) Uma relvar obrigatoriamente.

E) Uma transação.

**Gabarito: B.** Essa leitura separa a definição de valores das coleções armazenadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.2, páginas 1361–1371 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 26.2

Por que uma relvar não deve ser tratada simplesmente como um tipo?

A) Porque tipos são sempre arquivos.

B) Porque relvars não admitem restrições.

C) Porque relvars não possuem valores.

D) Porque tipos nunca possuem operadores.

E) Ela é uma variável que assume valores relacionais, não o conjunto de valores admissíveis de um domínio.

**Gabarito: E.** A distinção tipo/variável é essencial à crítica do capítulo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.2, páginas 1361–1371 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Difícil — seção 26.2

Uma projeção gera uma nova relação. Isso exige definir automaticamente uma nova classe com métodos próprios?

A) Sim, toda consulta exige uma nova classe persistente.

B) Sim, antes de qualquer leitura.

C) Não; o resultado possui tipo relacional inferível sem essa equivalência artificial.

D) Não, porque projeções não produzem relações.

E) Sim, apenas quando há uma coluna.

**Gabarito: C.** O fechamento relacional deve continuar natural para resultados derivados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.2, páginas 1361–1371 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 26.2

Uma tabela armazena valores de vários atributos tipados. Seus tipos devem ser confundidos com a própria tabela?

A) Não; os domínios dos atributos e a relvar exercem papéis distintos.

B) Sim, pois tipo e variável são sinônimos.

C) Sim, apenas em sistemas com métodos.

D) Não, porque tabelas não possuem atributos.

E) Sim, toda coluna é uma cópia da tabela.

**Gabarito: A.** Uma tabela pode usar tipos definidos pelo usuário sem se tornar equivalente a um desses tipos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.2, páginas 1361–1371 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 26.3

O segundo grande erro, na terminologia de Date, consiste em:

A) Manter índices internamente.

B) Misturar ponteiros e relações no nível do modelo.

C) Usar valores numéricos em atributos.

D) Permitir expressões relacionais aninhadas.

E) Definir tipos próprios.

**Gabarito: B.** A crítica é à exposição conceitual de ponteiros, não a toda técnica física de implementação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.3, páginas 1372–1377 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 26.3

Um SGBD usa ponteiros internamente em um índice. Isso, sozinho, comete o segundo grande erro?

A) Sim, qualquer implementação com ponteiros deixa de ser relacional.

B) Não, porque índices não podem conter referências.

C) Sim, se o índice for usado em consulta.

D) Não; a crítica se refere aos ponteiros expostos no modelo de dados.

E) Sim, mesmo sem exposição ao usuário.

**Gabarito: D.** Modelo lógico e organização física precisam ser distinguidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.3, páginas 1372–1377 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Difícil — seção 26.3

O princípio da informação estabelece, em termos relacionais, que a informação seja representada por:

A) Valores em relações.

B) Somente nomes de arquivos.

C) Endereços físicos manipulados pelas aplicações.

D) Métodos sem valores.

E) Ponteiros externos obrigatórios.

**Gabarito: A.** A crítica à mistura de ponteiros considera a uniformidade da representação informacional.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.3, páginas 1372–1377 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 26.3

Por que exigir navegação por referências pode enfraquecer a uniformidade relacional?

A) Porque garante fechamento automaticamente.

B) Cria formas de acesso distintas das operações sobre valores em relações.

C) Porque elimina todos os tipos escalares.

D) Porque toda referência é uma chave primária.

E) Porque impede qualquer armazenamento.

**Gabarito: B.** O capítulo questiona a introdução de um segundo mecanismo conceitual de associação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.3, páginas 1372–1377 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 26.3

Substituir uma relvar básica por uma visão equivalente deve preservar, idealmente:

A) A possibilidade de uso compatível pelas aplicações.

B) Os endereços físicos de cada tupla.

C) A localização de todas as cópias.

D) A ordem de todas as páginas.

E) A identidade dos arquivos do sistema operacional.

**Gabarito: A.** O princípio da permutabilidade busca evitar dependências artificiais do caráter básico ou derivado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.3, páginas 1372–1377 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 26.4

Um pacote de tipos geoespaciais acrescenta principalmente:

A) Apenas cópias físicas das tabelas.

B) Somente temas visuais.

C) Somente logs de auditoria.

D) Tipos e operadores específicos de um domínio de aplicação.

E) Exclusivamente usuários.

**Gabarito: D.** Extensibilidade de tipos permite incorporar novas categorias de valores e operações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.4, páginas 1378–1381 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 26.4

Adicionar novos tipos pode exigir integração com quais componentes?

A) Exclusivamente a tabela de usuários.

B) Somente o editor de texto.

C) Compilador, otimizador e gerenciador de armazenamento.

D) Apenas a tela de login.

E) Somente o serviço de impressão.

**Gabarito: C.** O suporte adequado não se limita a reconhecer um nome de tipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.4, páginas 1378–1381 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 26.4

Por que o otimizador pode precisar conhecer operadores de um novo pacote de tipos?

A) Para estimar custos e escolher formas adequadas de execução.

B) Para remover a tipagem.

C) Para alterar os valores retornados arbitrariamente.

D) Para decidir o significado de todas as regras de negócio.

E) Para desativar transações.

**Gabarito: A.** Operadores especializados podem possuir custos e possibilidades de acesso específicos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.4, páginas 1378–1381 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 26.4

Armazenar um conteúdo complexo como bloco opaco garante boa consulta a suas propriedades?

A) Sim, qualquer bloco expõe todos os seus campos.

B) Sim, pela mera presença de uma chave.

C) Não, porque tipos complexos não podem existir.

D) Sim, desde que tenha muitos bytes.

E) Não; operações e suporte de consulta precisam estar disponíveis.

**Gabarito: E.** Armazenar bytes e oferecer operações úteis sobre seus valores são capacidades diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.4, páginas 1378–1381 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 26.5

Qual combinação expressa a aproximação considerada útil no capítulo?

A) Somente navegação física e ausência de predicados.

B) Relvars sem tipos.

C) Ponteiros sem restrições.

D) Métodos sem persistência nem consultas.

E) Valores complexos bem tipados e consultas relacionais sobre coleções.

**Gabarito: E.** Tipos e relações atendem a necessidades complementares.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.5, páginas 1382–1384 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 26.6

Segundo os recursos SQL descritos, tipos definidos pelo usuário podem servir para:

A) Eliminar a definição de esquemas.

B) Criar senhas automáticas.

C) Definir tipos de colunas em tabelas.

D) Substituir obrigatoriamente todos os SELECTs.

E) Impedir qualquer restrição.

**Gabarito: C.** O capítulo menciona tipos DISTINCT e estruturados no suporte SQL.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.6, páginas 1385–1393 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 26.6

Qual par de categorias de tipos definidos pelo usuário é discutido no suporte SQL?

A) Logs físicos e lógicos.

B) Tipos DISTINCT e tipos estruturados.

C) Bloqueios compartilhados e exclusivos.

D) Transações locais e globais.

E) Índices primários e secundários.

**Gabarito: B.** As categorias de tipos são diferentes dos mecanismos de índice ou transação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.6, páginas 1385–1393 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 26.1

O rótulo comercial relacional/objeto garante, segundo a crítica de Date, fidelidade conceitual ao modelo defendido?

A) Sim, se houver interface gráfica.

B) Sim, se o banco tiver muitas tabelas.

C) Não, porque tipos próprios são proibidos no modelo.

D) Não; é necessário examinar os recursos e sua semântica.

E) Sim, o nome é uma prova suficiente.

**Gabarito: D.** O autor distingue propostas conceituais e implementações comercializadas sob o mesmo rótulo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 26, seção 26.1, páginas 1357–1360 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
