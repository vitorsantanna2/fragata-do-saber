# Date — capítulo 24: Sistemas baseados em lógica

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_24.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 24.3

Na lógica clássica, uma tautologia é uma fórmula:

A) Verdadeira em exatamente uma interpretação.

B) Que representa uma chave estrangeira.

C) Falsa em toda interpretação.

D) Verdadeira em toda interpretação pertinente.

E) Sem conectivos.

**Gabarito: D.** Validade lógica não depende de um estado particular do banco.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.3, páginas 1234–1240 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 24.3

Qual expressão é uma tautologia da lógica bivalorada?

A) P OR NOT P.

B) P AND Q, para quaisquer valores.

C) P AND NOT P.

D) P AND FALSE.

E) NOT TRUE.

**Gabarito: A.** A lei do terceiro excluído é válida na lógica clássica bivalorada.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.3, páginas 1234–1240 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 24.3

A implicação P ⇒ Q é falsa somente quando:

A) P é falsa e Q é verdadeira.

B) P é verdadeira e Q é falsa.

C) Ambas são verdadeiras.

D) P é falsa, independentemente de Q.

E) Ambas são falsas.

**Gabarito: B.** A implicação material equivale a NOT P OR Q.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.3, páginas 1234–1240 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 24.3

De P e P ⇒ Q, inferir Q corresponde a:

A) Modus ponens.

B) Comutatividade da união.

C) Replicação.

D) Normalização.

E) Controle de acesso.

**Gabarito: A.** A regra permite aplicar uma implicação cuja premissa foi estabelecida.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.3, páginas 1234–1240 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 24.3

Uma fórmula satisfatível é aquela que:

A) Não possui variáveis por definição.

B) É verdadeira em todas obrigatoriamente.

C) É falsa em todas.

D) Contém apenas nomes de tabelas.

E) É verdadeira em pelo menos uma interpretação.

**Gabarito: E.** Satisfatibilidade é mais fraca que validade universal.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.3, páginas 1234–1240 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 24.4

O cálculo de predicados acrescenta ao cálculo proposicional, entre outros recursos:

A) Páginas físicas e trilhas.

B) Variáveis e quantificadores.

C) Senhas e permissões.

D) Somente novos nomes para AND e OR.

E) Backups e logs.

**Gabarito: B.** Esses recursos permitem descrever objetos e propriedades de forma mais expressiva.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.4, páginas 1241–1250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 24.4

Uma interpretação atribui significado a símbolos em relação a:

A) Um plano de junção exclusivo.

B) Um índice agrupado.

C) Uma sessão obrigatoriamente autenticada.

D) Um universo de discurso.

E) Uma ordem física fixa de disco.

**Gabarito: D.** Constantes, predicados e funções precisam ser interpretados sobre um domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.4, páginas 1241–1250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 24.4

Um modelo de um conjunto de fórmulas é uma interpretação em que:

A) Pelo menos uma delas é obrigatoriamente falsa.

B) Os valores estão fisicamente ordenados.

C) Todas essas fórmulas são verdadeiras.

D) Todas são nomes de arquivos.

E) Nenhuma fórmula pode ter quantificadores.

**Gabarito: C.** Satisfazer conjuntamente os axiomas caracteriza o modelo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.4, páginas 1241–1250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 24.4

No contexto lógico, unificar termos procura:

A) Criar uma senha única.

B) Confirmar transações.

C) Eliminar todo predicado.

D) Ordenar linhas em disco.

E) Uma substituição que os torne correspondentes.

**Gabarito: E.** A substituição de variáveis permite aplicar regras de inferência a termos compatíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.4, páginas 1241–1250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Difícil — seção 24.4

Ao unificar p(X,3) com p(2,Y), uma substituição adequada é:

A) X=Y=0.

B) Nenhuma, pois predicados nunca se unificam.

C) X=3 e Y=2.

D) X=3 e Y=3.

E) X=2 e Y=3.

**Gabarito: E.** A correspondência exige igualar os argumentos nas mesmas posições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.4, páginas 1241–1250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 24.5

Na visão da teoria da prova, responder uma consulta equivale conceitualmente a:

A) Percorrer somente endereços físicos.

B) Desativar restrições.

C) Demonstrar consequências dos axiomas do banco.

D) Executar apenas uma projeção.

E) Ordenar todas as tabelas.

**Gabarito: C.** A resposta decorre de fatos e regras, não apenas de tuplas explicitamente armazenadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.5, páginas 1251–1255 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 24.6

O banco extensional contém principalmente:

A) Fatos básicos explícitos.

B) Apenas predicados sem argumentos.

C) Apenas planos de consulta.

D) Exclusivamente senhas.

E) Somente regras recursivas.

**Gabarito: A.** O extensional contrasta com a parte intensional formada por regras e restrições.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 24.6

O banco intensional reúne principalmente:

A) Apenas registros de acesso.

B) Somente instruções de backup.

C) Somente cópias físicas das linhas básicas.

D) Exclusivamente índices.

E) Regras de dedução e restrições.

**Gabarito: E.** A combinação de base factual e regras permite deduzir novos fatos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 24.6

Um SGBD dedutivo distingue-se por poder:

A) Aceitar qualquer contradição sem efeito.

B) Inferir fatos a partir de fatos básicos e regras declaradas.

C) Armazenar apenas texto.

D) Confirmar automaticamente qualquer suposição.

E) Dispensar toda base de dados.

**Gabarito: B.** A capacidade dedutiva amplia o conteúdo consultável além dos fatos explicitamente inseridos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 24.6

Considere ligado(a,b) e ligado(b,c), com regra de transitividade para alcança. Qual fato pode ser deduzido?

A) b=c.

B) a=b.

C) alcança(a,c).

D) ligado(a,c), como fato básico necessariamente inserido.

E) ligado(c,a), obrigatoriamente.

**Gabarito: C.** Alcançabilidade indireta pode ser derivada sem afirmar uma ligação direta básica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Difícil — seção 24.6

Uma cláusula de Horn admite, na forma de cláusulas, no máximo:

A) Um literal positivo.

B) Duas variáveis no total.

C) Um símbolo em toda a fórmula.

D) Zero predicados.

E) Um argumento por predicado.

**Gabarito: A.** Essa restrição é importante para a programação lógica e sistemas dedutivos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 24.6

Uma regra dedutiva e uma restrição de integridade têm papéis distintos porque:

A) A regra nunca possui premissas.

B) A regra substitui qualquer validação.

C) A regra deriva fatos; a restrição limita estados admissíveis.

D) A restrição sempre insere linhas.

E) Ambas são arquivos físicos.

**Gabarito: C.** O banco intensional pode conter ambas, sem que suas funções sejam idênticas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.6, páginas 1256–1263 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 24.7

Uma definição de ancestral em termos de pai e ancestral exemplifica:

A) Autenticação.

B) Recursão.

C) Criptografia.

D) Somente projeção sem composição.

E) Fragmentação.

**Gabarito: B.** A regra faz referência ao próprio predicado derivado e precisa de casos básicos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.7, páginas 1264–1271 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 24.7

Avaliação por ponto fixo de regras positivas termina quando:

A) O primeiro fato foi encontrado.

B) Uma tupla é renomeada.

C) Um usuário fecha a tela.

D) Uma nova aplicação das regras não acrescenta fatos.

E) A ordem das colunas muda.

**Gabarito: D.** Sobre domínio finito, o processo monotônico pode estabilizar no conjunto de consequências.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.7, páginas 1264–1271 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Difícil — seção 24.7

Uma técnica que usa a estrutura de uma consulta para limitar derivações irrelevantes busca principalmente:

A) Mudar fatos básicos arbitrariamente.

B) Eliminar a regra recursiva do significado.

C) Ignorar os parâmetros da consulta.

D) Reduzir o trabalho de avaliação recursiva preservando as respostas.

E) Substituir o resultado por uma estimativa.

**Gabarito: D.** O capítulo discute estratégias de processamento recursivo voltadas à eficiência.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 24, seção 24.7, páginas 1264–1271 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
