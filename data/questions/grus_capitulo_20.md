# Grus — capítulo 20: Processamento de Linguagem Natural

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_20.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Visualização de termos que pode codificar frequência ou outra medida em atributos como tamanho.”?

A) Amostragem ponderada

B) Tabela de transições

C) Modelagem de tópicos

D) Modelo de trigramas

E) Nuvem de palavras

**Gabarito: E.** Nuvem de palavras: visualização de termos que pode codificar frequência ou outra medida em atributos como tamanho.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 365–367 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um painel mostra termos com tamanhos associados à frequência observada. Qual visualização usa?

A) Nuvem de palavras

B) Modelo de trigramas

C) Modelagem de tópicos

D) Modelo de bigramas

E) Símbolo não terminal

**Gabarito: A.** Nuvem de palavras: visualização de termos que pode codificar frequência ou outra medida em atributos como tamanho.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 365–367 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Modelo de sequência que escolhe a próxima palavra com base na palavra anterior.”?

A) Modelo de bigramas

B) Amostragem ponderada

C) Modelagem de tópicos

D) Símbolo não terminal

E) Gramática gerativa

**Gabarito: A.** Modelo de bigramas: modelo de sequência que escolhe a próxima palavra com base na palavra anterior.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 368–370 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um gerador consulta candidatos à próxima palavra usando apenas a última palavra produzida. Qual modelo simples aplica?

A) Símbolo terminal

B) Amostragem de Gibbs

C) Nuvem de palavras

D) Modelo de bigramas

E) Símbolo não terminal

**Gabarito: D.** Modelo de bigramas: modelo de sequência que escolhe a próxima palavra com base na palavra anterior.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 368–370 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Modelo de sequência que usa as duas palavras anteriores para escolher a próxima.”?

A) Símbolo não terminal

B) Modelo de trigramas

C) Amostragem de Gibbs

D) Modelagem de tópicos

E) Símbolo terminal

**Gabarito: B.** Modelo de trigramas: modelo de sequência que usa as duas palavras anteriores para escolher a próxima.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 370–371 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Para produzir a próxima palavra, o programa usa como chave o par formado pelas duas últimas palavras. Qual modelo aplica?

A) Modelo de trigramas

B) Amostragem de Gibbs

C) Símbolo terminal

D) Símbolo não terminal

E) Nuvem de palavras

**Gabarito: A.** Modelo de trigramas: modelo de sequência que usa as duas palavras anteriores para escolher a próxima.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 370–371 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Mapeamento de contextos observados para possibilidades de continuação da sequência.”?

A) Símbolo não terminal

B) Símbolo terminal

C) Tabela de transições

D) Gramática gerativa

E) Nuvem de palavras

**Gabarito: C.** Tabela de transições: mapeamento de contextos observados para possibilidades de continuação da sequência.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 369–371 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Durante a leitura do corpus, o programa armazena quais palavras seguiram cada contexto. Que estrutura está aprendendo?

A) Tabela de transições

B) Nuvem de palavras

C) Símbolo não terminal

D) Gramática gerativa

E) Símbolo terminal

**Gabarito: A.** Tabela de transições: mapeamento de contextos observados para possibilidades de continuação da sequência.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 369–371 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Conjunto de regras que expande símbolos para construir sentenças.”?

A) Modelagem de tópicos

B) Gramática gerativa

C) Amostragem de Gibbs

D) Amostragem ponderada

E) Nuvem de palavras

**Gabarito: B.** Gramática gerativa: conjunto de regras que expande símbolos para construir sentenças.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 372–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Em vez de consultar só frequências de palavras vizinhas, um gerador usa regras de sentença, sujeito e predicado. Qual mecanismo organiza a geração?

A) Amostragem ponderada

B) Modelagem de tópicos

C) Nuvem de palavras

D) Tabela de transições

E) Gramática gerativa

**Gabarito: E.** Gramática gerativa: conjunto de regras que expande símbolos para construir sentenças.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 372–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Elemento da gramática que ainda precisa ser expandido por uma regra.”?

A) Amostragem ponderada

B) Nuvem de palavras

C) Tabela de transições

D) Símbolo não terminal

E) Amostragem de Gibbs

**Gabarito: D.** Símbolo não terminal: elemento da gramática que ainda precisa ser expandido por uma regra.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 372–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

A produção contém _NP, que será substituído por outra sequência antes da frase final. Como classificar esse símbolo?

A) Tabela de transições

B) Modelo de trigramas

C) Símbolo não terminal

D) Amostragem de Gibbs

E) Modelo de bigramas

**Gabarito: C.** Símbolo não terminal: elemento da gramática que ainda precisa ser expandido por uma regra.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 372–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Elemento que permanece na frase final sem nova expansão por regras.”?

A) Modelagem de tópicos

B) Amostragem de Gibbs

C) Modelo de bigramas

D) Símbolo terminal

E) Nuvem de palavras

**Gabarito: D.** Símbolo terminal: elemento que permanece na frase final sem nova expansão por regras.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 373–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Uma palavra concreta é copiada para a saída porque já não representa uma regra a expandir. Que espécie de símbolo é essa?

A) Amostragem de Gibbs

B) Tabela de transições

C) Modelagem de tópicos

D) Símbolo terminal

E) Modelo de trigramas

**Gabarito: D.** Símbolo terminal: elemento que permanece na frase final sem nova expansão por regras.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 373–374 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Procedimento que alterna amostras de distribuições condicionais para explorar uma distribuição conjunta.”?

A) Tabela de transições

B) Modelo de bigramas

C) Amostragem de Gibbs

D) Símbolo não terminal

E) Modelagem de tópicos

**Gabarito: C.** Amostragem de Gibbs: procedimento que alterna amostras de distribuições condicionais para explorar uma distribuição conjunta.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 375–376 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

O algoritmo amostra X dado Y e depois Y dado X, repetindo o processo. Qual método está empregando?

A) Modelo de trigramas

B) Amostragem de Gibbs

C) Símbolo não terminal

D) Modelagem de tópicos

E) Modelo de bigramas

**Gabarito: B.** Amostragem de Gibbs: procedimento que alterna amostras de distribuições condicionais para explorar uma distribuição conjunta.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 375–376 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Representação latente em que documentos misturam tópicos e tópicos distribuem probabilidades sobre palavras.”?

A) Amostragem de Gibbs

B) Modelagem de tópicos

C) Símbolo terminal

D) Nuvem de palavras

E) Tabela de transições

**Gabarito: B.** Modelagem de tópicos: representação latente em que documentos misturam tópicos e tópicos distribuem probabilidades sobre palavras.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 377–383 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Uma coleção deve ser explicada por temas não observados diretamente, com documentos associados a misturas desses temas. Qual tarefa está sendo realizada?

A) Amostragem ponderada

B) Gramática gerativa

C) Tabela de transições

D) Modelo de bigramas

E) Modelagem de tópicos

**Gabarito: E.** Modelagem de tópicos: representação latente em que documentos misturam tópicos e tópicos distribuem probabilidades sobre palavras.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 377–383 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Processamento de Linguagem Natural” em Grus, qual conceito corresponde à descrição: “Seleção aleatória em que a chance de cada resultado é proporcional a seu peso.”?

A) Tabela de transições

B) Modelo de trigramas

C) Símbolo terminal

D) Gramática gerativa

E) Amostragem ponderada

**Gabarito: E.** Amostragem ponderada: seleção aleatória em que a chance de cada resultado é proporcional a seu peso.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 379–381 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Três resultados têm pesos 1, 1 e 3 e o terceiro deve ser escolhido três vezes mais frequentemente que cada um dos demais. Que seleção usar?

A) Tabela de transições

B) Símbolo não terminal

C) Amostragem ponderada

D) Símbolo terminal

E) Modelagem de tópicos

**Gabarito: C.** Amostragem ponderada: seleção aleatória em que a chance de cada resultado é proporcional a seu peso.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 20: Processamento de Linguagem Natural, páginas 379–381 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
