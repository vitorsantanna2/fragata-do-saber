# Grus — capítulo 13: Naive Bayes

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_13.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Suposição de independência entre os indicadores de palavras quando a classe da mensagem é conhecida.”?

A) Normalização para minúsculas

B) Independência condicional ingênua

C) Presença binária de palavra

D) Limiar de classificação

E) Inspeção de erros do filtro

**Gabarito: B.** Independência condicional ingênua: suposição de independência entre os indicadores de palavras quando a classe da mensagem é conhecida.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 255–257 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O filtro multiplica probabilidades de palavras supondo que, dentro da classe spam, seus indicadores são independentes. Qual hipótese caracteriza o modelo?

A) Tokenização

B) Independência condicional ingênua

C) Inspeção de erros do filtro

D) Cálculo em logaritmos

E) Normalização para minúsculas

**Gabarito: B.** Independência condicional ingênua: suposição de independência entre os indicadores de palavras quando a classe da mensagem é conhecida.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 255–257 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Transformação de uma mensagem em unidades de texto a serem analisadas.”?

A) Inspeção de erros do filtro

B) Tokenização

C) Evidência de ausência

D) Suavização

E) Limiar de classificação

**Gabarito: B.** Tokenização: transformação de uma mensagem em unidades de texto a serem analisadas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Antes de contar termos, o filtro extrai palavras de cada mensagem. Que etapa realiza?

A) Evidência de ausência

B) Suavização

C) Tokenização

D) Treinamento do filtro

E) Inspeção de erros do filtro

**Gabarito: C.** Tokenização: transformação de uma mensagem em unidades de texto a serem analisadas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Padronização que faz variantes de caixa de uma palavra receberem o mesmo tratamento.”?

A) Evidência de ausência

B) Limiar de classificação

C) Inspeção de erros do filtro

D) Normalização para minúsculas

E) Treinamento do filtro

**Gabarito: D.** Normalização para minúsculas: padronização que faz variantes de caixa de uma palavra receberem o mesmo tratamento.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Oferta e OFERTA devem ser tratados como o mesmo termo pelo filtro. Qual preparação deve ser feita?

A) Normalização para minúsculas

B) Suavização

C) Limiar de classificação

D) Inspeção de erros do filtro

E) Evidência de ausência

**Gabarito: A.** Normalização para minúsculas: padronização que faz variantes de caixa de uma palavra receberem o mesmo tratamento.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Representação que registra se um termo aparece na mensagem sem multiplicar sua contribuição por repetições.”?

A) Cálculo em logaritmos

B) Suavização

C) Presença binária de palavra

D) Treinamento do filtro

E) Evidência de ausência

**Gabarito: C.** Presença binária de palavra: representação que registra se um termo aparece na mensagem sem multiplicar sua contribuição por repetições.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259–260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Uma mensagem repete desconto dez vezes, mas a versão do classificador só registra que o termo está presente. Que representação usa?

A) Evidência de ausência

B) Suavização

C) Presença binária de palavra

D) Cálculo em logaritmos

E) Independência condicional ingênua

**Gabarito: C.** Presença binária de palavra: representação que registra se um termo aparece na mensagem sem multiplicar sua contribuição por repetições.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 259–260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Ajuste das estimativas de palavras com pseudocontagens para evitar probabilidades extremas por ausência na amostra.”?

A) Treinamento do filtro

B) Independência condicional ingênua

C) Cálculo em logaritmos

D) Tokenização

E) Suavização

**Gabarito: E.** Suavização: ajuste das estimativas de palavras com pseudocontagens para evitar probabilidades extremas por ausência na amostra.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 257–258 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Uma palavra nunca apareceu no spam de treinamento e não deve zerar a probabilidade de toda mensagem nova. Qual ajuste aplicar?

A) Evidência de ausência

B) Independência condicional ingênua

C) Suavização

D) Presença binária de palavra

E) Treinamento do filtro

**Gabarito: C.** Suavização: ajuste das estimativas de palavras com pseudocontagens para evitar probabilidades extremas por ausência na amostra.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 257–258 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Substituição de produtos de probabilidades por somas de logaritmos para melhorar a estabilidade numérica.”?

A) Cálculo em logaritmos

B) Independência condicional ingênua

C) Treinamento do filtro

D) Presença binária de palavra

E) Normalização para minúsculas

**Gabarito: A.** Cálculo em logaritmos: substituição de produtos de probabilidades por somas de logaritmos para melhorar a estabilidade numérica.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 257–260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Centenas de probabilidades pequenas causam subfluxo ao serem multiplicadas. Que forma equivalente de cálculo ajuda a evitar isso?

A) Inspeção de erros do filtro

B) Cálculo em logaritmos

C) Independência condicional ingênua

D) Presença binária de palavra

E) Evidência de ausência

**Gabarito: B.** Cálculo em logaritmos: substituição de produtos de probabilidades por somas de logaritmos para melhorar a estabilidade numérica.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 257–260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Contribuição da não ocorrência de palavras do vocabulário no modelo binário de mensagens.”?

A) Suavização

B) Inspeção de erros do filtro

C) Treinamento do filtro

D) Evidência de ausência

E) Normalização para minúsculas

**Gabarito: D.** Evidência de ausência: contribuição da não ocorrência de palavras do vocabulário no modelo binário de mensagens.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

O filtro considera tanto os termos presentes quanto os que não aparecem na mensagem. Como se chama a contribuição dos termos não observados nesse modelo?

A) Presença binária de palavra

B) Inspeção de erros do filtro

C) Tokenização

D) Normalização para minúsculas

E) Evidência de ausência

**Gabarito: E.** Evidência de ausência: contribuição da não ocorrência de palavras do vocabulário no modelo binário de mensagens.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 260 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Estimativa das probabilidades de palavras a partir de mensagens com classe conhecida.”?

A) Suavização

B) Tokenização

C) Normalização para minúsculas

D) Independência condicional ingênua

E) Treinamento do filtro

**Gabarito: E.** Treinamento do filtro: estimativa das probabilidades de palavras a partir de mensagens com classe conhecida.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 261–263 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Um conjunto de assuntos já marcado como spam ou legítimo é usado para estimar probabilidades de termos. Que etapa do filtro está ocorrendo?

A) Treinamento do filtro

B) Cálculo em logaritmos

C) Presença binária de palavra

D) Normalização para minúsculas

E) Tokenização

**Gabarito: A.** Treinamento do filtro: estimativa das probabilidades de palavras a partir de mensagens com classe conhecida.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 261–263 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Valor de corte que transforma a probabilidade estimada de spam em uma decisão de classe.”?

A) Limiar de classificação

B) Suavização

C) Tokenização

D) Independência condicional ingênua

E) Presença binária de palavra

**Gabarito: A.** Limiar de classificação: valor de corte que transforma a probabilidade estimada de spam em uma decisão de classe.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 263 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

O modelo retorna 0,72 e uma regra decide spam quando a estimativa excede 0,5. Que elemento da decisão é 0,5?

A) Cálculo em logaritmos

B) Independência condicional ingênua

C) Evidência de ausência

D) Limiar de classificação

E) Suavização

**Gabarito: D.** Limiar de classificação: valor de corte que transforma a probabilidade estimada de spam em uma decisão de classe.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 263 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Naive Bayes” em Grus, qual conceito corresponde à descrição: “Exame das mensagens classificadas incorretamente para compreender o comportamento do modelo.”?

A) Presença binária de palavra

B) Independência condicional ingênua

C) Cálculo em logaritmos

D) Inspeção de erros do filtro

E) Tokenização

**Gabarito: D.** Inspeção de erros do filtro: exame das mensagens classificadas incorretamente para compreender o comportamento do modelo.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 263–264 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Depois da avaliação, a equipe lê mensagens legítimas marcadas como spam e spams não detectados. Que análise está fazendo?

A) Presença binária de palavra

B) Independência condicional ingênua

C) Suavização

D) Evidência de ausência

E) Inspeção de erros do filtro

**Gabarito: E.** Inspeção de erros do filtro: exame das mensagens classificadas incorretamente para compreender o comportamento do modelo.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 13: Naive Bayes, páginas 263–264 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
