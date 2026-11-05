# Date — capítulo 23: Dados temporais

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_23.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 23.1

Um banco temporal registra, além dos fatos:

A) A referência temporal de sua validade ou ocorrência conforme o modelo.

B) Somente valores agregados.

C) Exclusivamente datas de backups.

D) Somente o horário de login do DBA.

E) Apenas o tempo de execução do SELECT.

**Gabarito: A.** O capítulo trata de fatos associados a pontos e períodos temporais.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.1, páginas 1159–1164 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 23.1

Guardar apenas o departamento atual de um empregado impede responder diretamente:

A) Quantos empregados atuais estão cadastrados.

B) Se o registro atual existe.

C) Qual é seu departamento atual.

D) Qual identificador ele possui.

E) Em quais departamentos ele trabalhou no passado.

**Gabarito: E.** Estado atual e histórico são conteúdos informacionais diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.1, páginas 1159–1164 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 23.2

Acrescentar colunas de início e fim a tabelas resolve toda complexidade temporal?

A) Sim, elimina sobreposições automaticamente.

B) Sim, garante consistência de todos os períodos.

C) Não, porque datas não podem ser atributos.

D) Não; consultas e restrições ainda podem tornar-se complexas.

E) Sim, dispensa qualquer validação.

**Gabarito: D.** O capítulo usa essa dificuldade para motivar suporte explícito a intervalos e operadores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.2, páginas 1165–1173 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 23.3

Tratar [d04:d10] como um único valor permite:

A) Definir operadores e restrições próprios de intervalos.

B) Dispensar tipos.

C) Eliminar a ordem temporal.

D) Transformar todo período em texto sem semântica.

E) Ignorar seus limites.

**Gabarito: A.** O intervalo é um valor de tipo apropriado, não apenas dois campos sem operações comuns.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 23.3

Qual requisito básico deve ser definido para o tipo de ponto considerado no capítulo?

A) Um índice físico obrigatório.

B) Uma ordenação total dos valores.

C) Uma chave estrangeira em cada valor.

D) Uma operação de commit por data.

E) Um nome de usuário por ponto.

**Gabarito: B.** Comparar pontos é fundamental para definir início, fim e relações entre intervalos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 23.3

Um intervalo fechado com início maior que o fim deve ser:

A) Confirmado sem restrições.

B) Aceito como intervalo de duração negativa.

C) Rejeitado como intervalo inválido nessa convenção.

D) Tratado como uma chave candidata.

E) Convertido em NULL automaticamente.

**Gabarito: C.** A validade dos limites integra a definição do tipo de intervalo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 23.3

Nos intervalos fechados de dias inteiros, [2:5] INTERSECT [4:8] é:

A) [2:3].

B) [2:8].

C) [4:5].

D) [1:8].

E) [6:8].

**Gabarito: C.** A interseção contém os pontos presentes em ambos os intervalos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 23.3

Nos intervalos fechados de dias inteiros, [2:5] e [6:8] são:

A) Iguais.

B) Adjacentes, sem ponto em comum.

C) Necessariamente inválidos.

D) Um contido no outro.

E) Sobrepostos nos pontos 5 e 6.

**Gabarito: B.** Com granularidade diária, o ponto seguinte a 5 é 6; a convenção dos limites importa.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 23.3

Nos intervalos fechados de dias inteiros, unir [2:5] e [4:8] como período contínuo resulta em:

A) [2:8].

B) [4:5].

C) [6:8].

D) [4:8] apenas.

E) [2:3].

**Gabarito: A.** Os intervalos se sobrepõem e sua união forma um único intervalo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Fácil — seção 23.3

O intervalo fechado [3:3], na convenção apresentada, representa:

A) Um intervalo vazio obrigatoriamente.

B) Um período infinito.

C) Uma variável sem valor.

D) Um intervalo inválido.

E) Um intervalo unitário com um ponto.

**Gabarito: E.** Limites iguais podem representar um único ponto do tipo considerado.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 23.4

O operador EXPAND transforma intervalos de uma relação unária em:

A) Somente seus pontos finais.

B) Cópias de todas as tabelas.

C) Intervalos unitários para os pontos cobertos.

D) Linhas sem qualquer tipo.

E) Uma contagem sem relação de resultado.

**Gabarito: C.** A forma expandida explicita a cobertura ponto a ponto.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.4, páginas 1182–1196 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 23.4

COLLAPSE procura representar a mesma cobertura temporal usando:

A) Números sem ordenação.

B) Uma linha para cada usuário.

C) Somente o primeiro ponto.

D) A exclusão de todos os intervalos sobrepostos.

E) Intervalos máximos resultantes da consolidação apropriada.

**Gabarito: E.** A consolidação preserva os pontos cobertos e reduz representações redundantes ou fragmentadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.4, páginas 1182–1196 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 23.4

PACK e UNPACK generalizam o tratamento de intervalos para:

A) Apenas logs de recuperação.

B) Dados sem qualquer tempo.

C) Tipos sem comparação.

D) Somente tabelas sem atributos.

E) Relações que podem conter outros atributos além do intervalo.

**Gabarito: E.** O processamento considera os demais atributos ao agrupar ou expandir a informação temporal.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.4, páginas 1182–1196 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 23.4

Consolidar períodos adjacentes do mesmo empregado e mesmo cargo pode:

A) Eliminar a necessidade de identificar o empregado.

B) Criar um novo ponto sem data.

C) Mudar o cargo para todos os empregados.

D) Preservar a informação temporal com uma representação menos fragmentada.

E) Apagar necessariamente o histórico.

**Gabarito: D.** A consolidação depende de os demais valores e a cobertura temporal serem compatíveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.4, páginas 1182–1196 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Difícil — seção 23.5

Por que operadores temporais generalizados são úteis?

A) Dispensam a semântica das consultas.

B) Eliminam qualquer referência ao tempo.

C) Substituem autenticação.

D) Abreviam padrões de desempacotar, operar e reempacotar, com possibilidade de otimização.

E) Obrigam expansão física de todos os dias.

**Gabarito: D.** A semântica pode ser definida por expansão sem exigir uma implementação ingênua dessa expansão.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.5, páginas 1197–1203 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 23.6

Históricos de nome e endereço mudam em datas diferentes. Separá-los temporalmente pode evitar:

A) Toda junção de consultas.

B) A existência de identificadores.

C) Qualquer restrição temporal.

D) Repetição e fragmentação desnecessárias de fatos com ritmos distintos de mudança.

E) A necessidade de armazenar datas.

**Gabarito: D.** O projeto deve considerar quais atributos variam juntos e quais possuem históricos independentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.6, páginas 1204–1212 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 23.7

Dois cargos exclusivos para o mesmo empregado em períodos sobrepostos podem representar:

A) Somente uma diferença de ordenação.

B) Contradição temporal, conforme a regra de exclusividade.

C) Uma DF trivial garantida.

D) Um backup duplicado.

E) Ausência de integridade referencial apenas.

**Gabarito: B.** A restrição precisa proibir estados simultâneos incompatíveis no período relevante.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.7, páginas 1213–1220 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 23.7

Uma chave (empregado, intervalo) impede sozinha toda sobreposição de períodos do empregado?

A) Não, porque chaves não existem em dados temporais.

B) Não; intervalos diferentes ainda podem compartilhar pontos.

C) Sim, desde que o empregado seja numérico.

D) Sim, pois intervalos distintos nunca se cruzam.

E) Sim, se houver duas colunas.

**Gabarito: B.** Unicidade da combinação não é uma restrição de não sobreposição.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.7, páginas 1213–1220 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Difícil — seção 23.7

Uma referência temporal entre dependente e entidade exige atenção a:

A) Cobertura dos períodos em que a entidade referenciada precisa existir.

B) Somente quantidade de índices.

C) A ordem de criação das tabelas.

D) Apenas existência atual, em qualquer cenário.

E) Somente igualdade textual dos nomes.

**Gabarito: A.** Referência temporal pode exigir existência durante todo o intervalo relevante, não em um instante arbitrário.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.7, páginas 1213–1220 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 23.3

Ao escrever uma questão sobre sobreposição de períodos, por que declarar limites e granularidade?

A) Para ocultar a semântica do intervalo.

B) Para eliminar todos os pontos finais.

C) Para evitar respostas diferentes decorrentes de convenções temporais distintas.

D) Para transformar datas em índices.

E) Para tornar dispensável a comparação.

**Gabarito: C.** Intervalos abertos, fechados e diferentes unidades de tempo podem alterar relações de adjacência e interseção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 23, seção 23.3, páginas 1174–1181 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
