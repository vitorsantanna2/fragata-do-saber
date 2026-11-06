# Grus — capítulo 24: MapReduce

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_24.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Modelo de processamento que combina emissão de pares chave-valor e redução de valores agrupados por chave.”?

A) MapReduce

B) Emissões para produtos matriciais

C) Localidade do processamento

D) Combinador

E) Emissão de contagem unitária

**Gabarito: A.** MapReduce: modelo de processamento que combina emissão de pares chave-valor e redução de valores agrupados por chave.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 434–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um trabalho é organizado em mapeamento de registros e agregação posterior de resultados por chave. Qual modelo de programação usa?

A) Localidade do processamento

B) Projeto da chave de agregação

C) Emissão de contagem unitária

D) MapReduce

E) Emissões para produtos matriciais

**Gabarito: D.** MapReduce: modelo de processamento que combina emissão de pares chave-valor e redução de valores agrupados por chave.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 434–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Função que transforma uma entrada em zero ou mais pares chave-valor.”?

A) Projeto da chave de agregação

B) Localidade do processamento

C) Generalização das funções de redução

D) Emissões para produtos matriciais

E) Mapper

**Gabarito: E.** Mapper: função que transforma uma entrada em zero ou mais pares chave-valor.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Cada documento é percorrido e produz pares como (termo, 1). Que função desempenha essa emissão?

A) Combinador

B) Generalização das funções de redução

C) Mapper

D) Localidade do processamento

E) Projeto da chave de agregação

**Gabarito: C.** Mapper: função que transforma uma entrada em zero ou mais pares chave-valor.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Reunião dos valores emitidos com a mesma chave antes da redução.”?

A) Generalização das funções de redução

B) Localidade do processamento

C) Emissão de contagem unitária

D) Agrupamento por chave

E) Combinador

**Gabarito: D.** Agrupamento por chave: reunião dos valores emitidos com a mesma chave antes da redução.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Os pares emitidos em diferentes documentos precisam reunir todos os valores relativos ao mesmo termo. Que etapa intermediária é necessária?

A) Generalização das funções de redução

B) Localidade do processamento

C) Emissão de contagem unitária

D) Combinador

E) Agrupamento por chave

**Gabarito: E.** Agrupamento por chave: reunião dos valores emitidos com a mesma chave antes da redução.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Função que recebe uma chave e os valores associados para produzir resultados agregados.”?

A) Emissão de contagem unitária

B) Emissões para produtos matriciais

C) Reducer

D) Localidade do processamento

E) Projeto da chave de agregação

**Gabarito: C.** Reducer: função que recebe uma chave e os valores associados para produzir resultados agregados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Depois de reunir todos os valores de um termo, uma função soma suas contagens e emite o total. Que função realiza essa etapa?

A) Reducer

B) Projeto da chave de agregação

C) Emissões para produtos matriciais

D) Emissão de contagem unitária

E) Localidade do processamento

**Gabarito: A.** Reducer: função que recebe uma chave e os valores associados para produzir resultados agregados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Representação de cada ocorrência de palavra pelo par formado pela palavra e pelo número um.”?

A) Emissão de contagem unitária

B) Emissões para produtos matriciais

C) Projeto da chave de agregação

D) Reducer

E) Generalização das funções de redução

**Gabarito: A.** Emissão de contagem unitária: representação de cada ocorrência de palavra pelo par formado pela palavra e pelo número um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Para permitir somar frequências depois, que emissão representa cada palavra encontrada em um documento?

A) Generalização das funções de redução

B) MapReduce

C) Reducer

D) Agrupamento por chave

E) Emissão de contagem unitária

**Gabarito: E.** Emissão de contagem unitária: representação de cada ocorrência de palavra pelo par formado pela palavra e pelo número um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 435–436 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Estratégia de levar a computação para perto dos dados, reduzindo sua movimentação.”?

A) Reducer

B) Agrupamento por chave

C) Combinador

D) Localidade do processamento

E) Generalização das funções de redução

**Gabarito: D.** Localidade do processamento: estratégia de levar a computação para perto dos dados, reduzindo sua movimentação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 437–438 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Em vez de enviar todos os documentos para uma máquina, o trabalho é executado nas máquinas que já os armazenam. Que princípio reduz a transferência?

A) Reducer

B) Localidade do processamento

C) Agrupamento por chave

D) Mapper

E) Projeto da chave de agregação

**Gabarito: B.** Localidade do processamento: estratégia de levar a computação para perto dos dados, reduzindo sua movimentação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 437–438 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Reutilização do mesmo esquema de processamento com agregadores diferentes conforme o problema.”?

A) Mapper

B) Generalização das funções de redução

C) Emissões para produtos matriciais

D) Agrupamento por chave

E) Emissão de contagem unitária

**Gabarito: B.** Generalização das funções de redução: reutilização do mesmo esquema de processamento com agregadores diferentes conforme o problema.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 439–440 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Sem mudar o encadeamento mapear-agrupar-reduzir, a equipe troca soma por máximo. Que possibilidade de generalização está explorando?

A) Emissão de contagem unitária

B) Emissões para produtos matriciais

C) Agrupamento por chave

D) Projeto da chave de agregação

E) Generalização das funções de redução

**Gabarito: E.** Generalização das funções de redução: reutilização do mesmo esquema de processamento com agregadores diferentes conforme o problema.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 439–440 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Escolha do identificador que determina quais resultados devem ser reunidos.”?

A) Generalização das funções de redução

B) Projeto da chave de agregação

C) Reducer

D) Localidade do processamento

E) Mapper

**Gabarito: B.** Projeto da chave de agregação: escolha do identificador que determina quais resultados devem ser reunidos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 441–442 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Uma análise quer o termo mais usado por pessoa e precisa reunir as emissões de uma mesma pessoa. Que decisão de projeto determina esse agrupamento?

A) Localidade do processamento

B) Mapper

C) Projeto da chave de agregação

D) Reducer

E) MapReduce

**Gabarito: C.** Projeto da chave de agregação: escolha do identificador que determina quais resultados devem ser reunidos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 441–442 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Distribuição de elementos das matrizes às chaves das posições do produto para combinar parcelas correspondentes.”?

A) Generalização das funções de redução

B) Mapper

C) Emissões para produtos matriciais

D) MapReduce

E) Combinador

**Gabarito: C.** Emissões para produtos matriciais: distribuição de elementos das matrizes às chaves das posições do produto para combinar parcelas correspondentes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 443–444 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Na multiplicação distribuída de matrizes, cada elemento deve contribuir para posições específicas da matriz resultante. Que organização das emissões viabiliza esse cálculo?

A) Generalização das funções de redução

B) Mapper

C) Reducer

D) Emissões para produtos matriciais

E) Combinador

**Gabarito: D.** Emissões para produtos matriciais: distribuição de elementos das matrizes às chaves das posições do produto para combinar parcelas correspondentes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 443–444 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “MapReduce” em Grus, qual conceito corresponde à descrição: “Agregação local compatível com a redução que diminui os pares enviados entre etapas.”?

A) Combinador

B) Localidade do processamento

C) Agrupamento por chave

D) Mapper

E) Projeto da chave de agregação

**Gabarito: A.** Combinador: agregação local compatível com a redução que diminui os pares enviados entre etapas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 445 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Um mapeador conta localmente palavras repetidas e envia totais parciais em vez de muitos pares unitários. Que recurso reduz esse tráfego?

A) Localidade do processamento

B) Combinador

C) Projeto da chave de agregação

D) Mapper

E) Emissão de contagem unitária

**Gabarito: B.** Combinador: agregação local compatível com a redução que diminui os pares enviados entre etapas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 24: MapReduce, páginas 445 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
