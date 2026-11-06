# Grus — capítulo 16: Regressão Logística

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_16.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Variável de resposta com duas classes, codificada como zero e um.”?

A) Verossimilhança Bernoulli

B) Ponto médio da logística

C) Função logística

D) Hiperplano de decisão

E) Alvo binário

**Gabarito: E.** Alvo binário: variável de resposta com duas classes, codificada como zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 291–294 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O resultado a prever é se um usuário paga ou não pela assinatura. Qual tipo de alvo está sendo modelado?

A) Alvo binário

B) Log-verossimilhança

C) Hiperplano de decisão

D) Sinal de um coeficiente logístico

E) Corte probabilístico

**Gabarito: A.** Alvo binário: variável de resposta com duas classes, codificada como zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 291–294 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Possibilidade de uma reta produzir previsões fora do intervalo entre zero e um.”?

A) Verossimilhança Bernoulli

B) Limitação da regressão linear para probabilidades

C) Corte probabilístico

D) Hiperplano de decisão

E) Log-verossimilhança

**Gabarito: B.** Limitação da regressão linear para probabilidades: possibilidade de uma reta produzir previsões fora do intervalo entre zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 293–294 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um modelo para chance de assinatura devolve 1,4 e -0,2. Que limitação da modelagem por mínimos quadrados fica evidente?

A) Sinal de um coeficiente logístico

B) Verossimilhança Bernoulli

C) Hiperplano de decisão

D) Função logística

E) Limitação da regressão linear para probabilidades

**Gabarito: E.** Limitação da regressão linear para probabilidades: possibilidade de uma reta produzir previsões fora do intervalo entre zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 293–294 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Função 1/(1 + exp(-x)) que transforma uma entrada real em valor entre zero e um.”?

A) Truque do kernel

B) Sinal de um coeficiente logístico

C) Função logística

D) Verossimilhança Bernoulli

E) Alvo binário

**Gabarito: C.** Função logística: função 1/(1 + exp(-x)) que transforma uma entrada real em valor entre zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 295 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Uma pontuação real precisa ser transformada em uma estimativa no intervalo aberto entre 0 e 1 pela expressão 1/(1+exp(-x)). Que função usar?

A) Verossimilhança Bernoulli

B) Limitação da regressão linear para probabilidades

C) Alvo binário

D) Truque do kernel

E) Função logística

**Gabarito: E.** Função logística: função 1/(1 + exp(-x)) que transforma uma entrada real em valor entre zero e um.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 295 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Propriedade de a transformação logística produzir 0,5 quando sua entrada é zero.”?

A) Hiperplano de decisão

B) Limitação da regressão linear para probabilidades

C) Ponto médio da logística

D) Alvo binário

E) Verossimilhança Bernoulli

**Gabarito: C.** Ponto médio da logística: propriedade de a transformação logística produzir 0,5 quando sua entrada é zero.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 295–296 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

A pontuação linear de um usuário é zero. Qual propriedade da logística justifica atribuir probabilidade 0,5?

A) Verossimilhança Bernoulli

B) Hiperplano de decisão

C) Ponto médio da logística

D) Alvo binário

E) Corte probabilístico

**Gabarito: C.** Ponto médio da logística: propriedade de a transformação logística produzir 0,5 quando sua entrada é zero.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 295–296 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Contribuição probabilística que usa p para um resultado 1 e 1-p para um resultado 0.”?

A) Função logística

B) Verossimilhança Bernoulli

C) Hiperplano de decisão

D) Ponto médio da logística

E) Truque do kernel

**Gabarito: B.** Verossimilhança Bernoulli: contribuição probabilística que usa p para um resultado 1 e 1-p para um resultado 0.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 296–297 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

A previsão é p e o resultado observado é não pagante. Que modelo de contribuição à verossimilhança justifica usar 1-p?

A) Limitação da regressão linear para probabilidades

B) Alvo binário

C) Hiperplano de decisão

D) Verossimilhança Bernoulli

E) Ponto médio da logística

**Gabarito: D.** Verossimilhança Bernoulli: contribuição probabilística que usa p para um resultado 1 e 1-p para um resultado 0.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 296–297 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Soma dos logaritmos das contribuições probabilísticas dos exemplos independentes.”?

A) Log-verossimilhança

B) Sinal de um coeficiente logístico

C) Limitação da regressão linear para probabilidades

D) Truque do kernel

E) Função logística

**Gabarito: A.** Log-verossimilhança: soma dos logaritmos das contribuições probabilísticas dos exemplos independentes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 297–298 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Para ajustar a regressão logística, a equipe maximiza a soma de log(p) nos positivos e log(1-p) nos negativos. Qual função está otimizando?

A) Log-verossimilhança

B) Limitação da regressão linear para probabilidades

C) Sinal de um coeficiente logístico

D) Função logística

E) Hiperplano de decisão

**Gabarito: A.** Log-verossimilhança: soma dos logaritmos das contribuições probabilísticas dos exemplos independentes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 297–298 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Indicação de aumento ou redução da probabilidade quando o atributo cresce, mantendo os demais fixos.”?

A) Verossimilhança Bernoulli

B) Ponto médio da logística

C) Truque do kernel

D) Sinal de um coeficiente logístico

E) Log-verossimilhança

**Gabarito: D.** Sinal de um coeficiente logístico: indicação de aumento ou redução da probabilidade quando o atributo cresce, mantendo os demais fixos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 298–299 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Um coeficiente de experiência é positivo. Que aspecto do coeficiente indica que aumentar experiência eleva a probabilidade prevista, fixados os outros atributos?

A) Sinal de um coeficiente logístico

B) Limitação da regressão linear para probabilidades

C) Ponto médio da logística

D) Função logística

E) Truque do kernel

**Gabarito: A.** Sinal de um coeficiente logístico: indicação de aumento ou redução da probabilidade quando o atributo cresce, mantendo os demais fixos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 298–299 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Regra que converte a estimativa logística em classe por comparação com um limite.”?

A) Função logística

B) Ponto médio da logística

C) Truque do kernel

D) Corte probabilístico

E) Log-verossimilhança

**Gabarito: D.** Corte probabilístico: regra que converte a estimativa logística em classe por comparação com um limite.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 300 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Uma previsão de 0,65 vira pagante porque o limite foi definido em 0,5. Qual regra transforma a estimativa em decisão?

A) Verossimilhança Bernoulli

B) Corte probabilístico

C) Função logística

D) Limitação da regressão linear para probabilidades

E) Ponto médio da logística

**Gabarito: B.** Corte probabilístico: regra que converte a estimativa logística em classe por comparação com um limite.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 300 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Fronteira onde a pontuação linear é zero e a probabilidade logística corresponde a 0,5.”?

A) Função logística

B) Verossimilhança Bernoulli

C) Hiperplano de decisão

D) Log-verossimilhança

E) Limitação da regressão linear para probabilidades

**Gabarito: C.** Hiperplano de decisão: fronteira onde a pontuação linear é zero e a probabilidade logística corresponde a 0,5.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 302 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Com corte em 0,5, quais pontos formam a fronteira entre as classes de uma regressão logística linear?

A) Verossimilhança Bernoulli

B) Função logística

C) Truque do kernel

D) Hiperplano de decisão

E) Limitação da regressão linear para probabilidades

**Gabarito: D.** Hiperplano de decisão: fronteira onde a pontuação linear é zero e a probabilidade logística corresponde a 0,5.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 302 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Regressão Logística” em Grus, qual conceito corresponde à descrição: “Recurso de máquinas de vetores de suporte para trabalhar implicitamente com transformações de atributos de maior dimensão.”?

A) Ponto médio da logística

B) Truque do kernel

C) Hiperplano de decisão

D) Alvo binário

E) Log-verossimilhança

**Gabarito: B.** Truque do kernel: recurso de máquinas de vetores de suporte para trabalhar implicitamente com transformações de atributos de maior dimensão.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 302–306 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma separação linear é inviável no espaço original e uma SVM usa produtos internos de um espaço transformado sem construir todas as coordenadas. Que recurso permite isso?

A) Limitação da regressão linear para probabilidades

B) Função logística

C) Log-verossimilhança

D) Alvo binário

E) Truque do kernel

**Gabarito: E.** Truque do kernel: recurso de máquinas de vetores de suporte para trabalhar implicitamente com transformações de atributos de maior dimensão.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 16: Regressão Logística, páginas 302–306 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
