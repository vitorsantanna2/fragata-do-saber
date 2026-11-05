# Date — capítulo 27: A World Wide Web e XML

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_27.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 27.2

World Wide Web e Internet são conceitos idênticos?

A) Não, porque a Web dispensa redes.

B) Sim, ambos são um SGBD.

C) Sim, ambos são uma linguagem de consulta.

D) Sim, os dois nomes designam exclusivamente HTML.

E) Não; a Web é um sistema de serviços que utiliza a infraestrutura da Internet.

**Gabarito: E.** A infraestrutura de comunicação não deve ser confundida com um de seus serviços.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.2, páginas 1410–1412 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 27.3

XML é apresentada principalmente como uma metalinguagem para:

A) Gerenciar permissões do sistema operacional.

B) Definir vocabulários e estruturas de documentos marcados.

C) Definir apenas páginas com aparência fixa.

D) Substituir toda linguagem de programação.

E) Executar transações por conta própria.

**Gabarito: B.** A extensibilidade permite criar marcações específicas de diferentes domínios.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 27.3

Qual estrutura caracteriza um documento XML bem formado?

A) Apenas texto sem qualquer marcação em todos os casos.

B) Vários elementos raiz independentes no mesmo documento.

C) Tags que podem se cruzar livremente.

D) Atributos sem nomes.

E) Elementos corretamente aninhados sob um elemento raiz.

**Gabarito: E.** As regras de boa formação governam a organização sintática do documento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 27.3

Qual fragmento possui aninhamento correto?

A) &lt;a&gt;&lt;b/&gt;&lt;/a&gt;.

B) &lt;a&gt;&lt;/b&gt;.

C) &lt;a&gt;&lt;b&gt;&lt;/a&gt;.

D) &lt;a&gt;&lt;b&gt;&lt;/a&gt;&lt;/b&gt;.

E) &lt;a&gt;&lt;b/&gt;.

**Gabarito: A.** Um elemento vazio pode usar a forma abreviada; os limites dos demais elementos precisam corresponder.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 27.3

Em &lt;curso codigo="7"&gt;Redes&lt;/curso&gt;, codigo é:

A) Um método de recuperação.

B) Um atributo do elemento curso.

C) O elemento raiz de outro documento.

D) Um namespace necessariamente.

E) Uma instrução SQL.

**Gabarito: B.** Atributos aparecem na tag inicial e possuem valores associados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 27.3

Qual distinção entre elemento e atributo XML está correta?

A) Atributos sempre contêm árvores completas de elementos.

B) Elementos podem conter outros elementos; atributos possuem valores na tag de início.

C) Elementos não podem conter texto.

D) Elementos e atributos são sempre intercambiáveis sem efeitos.

E) Atributos exigem uma tag de fechamento própria.

**Gabarito: B.** As formas de representação e suas possibilidades estruturais diferem.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 27.3

Qual finalidade têm os namespaces XML?

A) Eliminar a necessidade de tags.

B) Distinguir nomes de vocabulários que poderiam colidir.

C) Cifrar todo o documento.

D) Confirmar alterações em tabelas.

E) Converter XML em índice.

**Gabarito: B.** Qualificação de nomes evita confundir termos iguais de contextos diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 27.3

A ordem dos elementos filhos em XML pode ser significativa?

A) Não, XML é sempre um conjunto matemático de tuplas.

B) Somente se os nomes forem numéricos.

C) Somente após um COMMIT.

D) Não, porque elementos não possuem pais.

E) Sim; a estrutura documental pode preservar essa ordem.

**Gabarito: E.** A ordenação documental distingue XML da ausência de ordem entre tuplas relacionais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.3, páginas 1413–1426 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 27.4

Boa formação e validade de XML são sinônimos?

A) Sim, porque DTD é uma tabela.

B) Sim, qualquer aninhamento correto garante qualquer esquema.

C) Não; validade exige conformidade com a definição estrutural aplicável.

D) Sim, desde que exista uma raiz.

E) Não, porque XML não tem regras sintáticas.

**Gabarito: C.** Um documento bem formado pode não satisfazer as regras de uma DTD ou esquema.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.4, páginas 1427–1438 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 27.4

Uma DTD descreve principalmente:

A) O conteúdo de todos os backups.

B) Uma transação de leitura.

C) Planos físicos de junção.

D) Estruturas e declarações admitidas para uma classe de documentos.

E) Somente senhas.

**Gabarito: D.** A DTD fornece descritores para verificar os documentos correspondentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.4, páginas 1427–1438 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 27.4

XML Schema amplia a descrição de documentos com recursos como:

A) Tipagem mais rica de valores e estruturas.

B) Criptografia obrigatória.

C) Eliminação de todos os elementos.

D) Confirmação automática de transações SQL.

E) Substituição do sistema operacional.

**Gabarito: A.** O esquema pode expressar condições mais ricas que a declaração básica de marcação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.4, páginas 1427–1438 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Difícil — seção 27.4

Um documento satisfaz a sintaxe XML, mas omite elemento obrigatório do esquema. Ele é:

A) Uma relação matemática obrigatoriamente.

B) Inválido sintaticamente em qualquer contexto.

C) Bem formado, porém inválido em relação àquele esquema.

D) Um banco de dados completo.

E) Sempre válido, pois possui tags.

**Gabarito: C.** Validação precisa ser avaliada contra as regras do esquema pertinente.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.4, páginas 1427–1438 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 27.5

XPath é associado principalmente a:

A) Gerenciar logs.

B) Definir chaves físicas de disco.

C) Expressar caminhos e selecionar partes da estrutura XML.

D) Confirmar transações.

E) Normalizar tabelas.

**Gabarito: C.** Expressões de caminho navegam na estrutura lógica dos dados XML.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.5, páginas 1439–1449 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 27.5

XQuery é discutida como linguagem para:

A) Substituir toda DTD.

B) Executar somente backups.

C) Consultar e construir resultados a partir de dados XML.

D) Conceder apenas privilégios SQL.

E) Gerenciar exclusivamente hardware.

**Gabarito: C.** O capítulo apresenta sua proposta e seu estágio histórico de desenvolvimento.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.5, páginas 1439–1449 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 27.5

Na forma FLWOR discutida, FOR permite principalmente:

A) Iterar sobre itens ligados a uma variável.

B) Eliminar a ordenação por definição.

C) Conceder privilégios.

D) Confirmar um commit.

E) Definir uma DTD.

**Gabarito: A.** A construção combina vinculações, filtros, ordenação e produção de resultados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.5, páginas 1439–1449 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 27.5

Uma representação analisada de XML é útil porque:

A) Dispensa todas as regras de tipagem.

B) Transforma tags em senhas.

C) Elimina a informação do documento.

D) Permite operar sobre sua estrutura informacional, além do texto bruto.

E) Torna qualquer documento automaticamente válido.

**Gabarito: D.** Consultas e APIs trabalham com modelos estruturados do conteúdo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.5, páginas 1439–1449 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 27.6

Qual necessidade justifica integrar XML a bancos de dados?

A) Substituir toda transação por uma tag.

B) Garantir que XML não tenha estrutura.

C) Impedir consultas sobre documentos.

D) Eliminar permanentemente o modelo relacional.

E) Armazenar e consultar dados XML e também exportar dados relacionais nesse formato.

**Gabarito: E.** O fluxo pode ocorrer nos dois sentidos entre representação documental e dados do banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.6, páginas 1450–1454 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 27.6

Armazenar XML como uma única coluna e decompor seu conteúdo em tabelas são:

A) Operações sempre impossíveis em bancos.

B) Formas de eliminar qualquer esquema.

C) Sinônimos de autenticação.

D) Estratégias diferentes, com compromissos de consulta e representação.

E) Duas grafias da mesma organização física.

**Gabarito: D.** A escolha depende do conteúdo, das operações desejadas e do suporte oferecido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.6, páginas 1450–1454 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Difícil — seção 27.6

Representar uma relação como sequência de elementos XML introduz qual cuidado?

A) Não confundir ordem documental com ordem lógica obrigatória das tuplas.

B) Proibir a representação de valores.

C) Exigir que a relação possua duplicatas.

D) Eliminar todos os nomes de atributos.

E) Transformar cada chave em senha.

**Gabarito: A.** A serialização pode impor uma ordem que não integra o valor relacional original.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.6, páginas 1450–1454 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 27.7

As previsões sobre SQL/XML feitas no livro devem ser lidas como:

A) Prova de que XML substituiu todas as tabelas.

B) Uma especificação sem possibilidade de mudança.

C) Documentação atualizada automaticamente de qualquer SGBD.

D) Descrição situada no contexto histórico da edição, não garantia do estado atual de produtos.

E) Regras que tornam todo SQL independente de versão.

**Gabarito: D.** O próprio capítulo avisa que a proposta de suporte discutida ainda estava sujeita a alterações.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 27, seção 27.7, páginas 1455–1460 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
