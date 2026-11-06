# Grus — capítulo 18: Redes Neurais

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_18.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Unidade que compara a soma ponderada de entradas mais viés com um limiar para produzir saída binária.”?

A) Perceptron

B) Backpropagation

C) Rede feed-forward

D) Inspeção dos pesos ocultos

E) Codificação one-hot do alvo

**Gabarito: A.** Perceptron: unidade que compara a soma ponderada de entradas mais viés com um limiar para produzir saída binária.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 328–330 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um neurônio retorna 1 quando a soma ponderada com viés é não negativa e 0 caso contrário. Qual unidade foi implementada?

A) Perceptron

B) Inspeção dos pesos ocultos

C) Propagação direta

D) Backpropagation

E) Codificação one-hot do alvo

**Gabarito: A.** Perceptron: unidade que compara a soma ponderada de entradas mais viés com um limiar para produzir saída binária.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 328–330 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Termo aditivo que desloca o limiar efetivo de ativação.”?

A) Propagação direta

B) Viés do neurônio

C) Ativação sigmoide

D) Codificação one-hot do alvo

E) Rede feed-forward

**Gabarito: B.** Viés do neurônio: termo aditivo que desloca o limiar efetivo de ativação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 328–329 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Mesmo com todas as entradas zero, um termo adicional altera se o neurônio dispara. Que parâmetro desempenha esse papel?

A) Inspeção dos pesos ocultos

B) Codificação one-hot do alvo

C) Ativação sigmoide

D) Rede feed-forward

E) Viés do neurônio

**Gabarito: E.** Viés do neurônio: termo aditivo que desloca o limiar efetivo de ativação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 328–329 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Incapacidade de um único perceptron representar a separação não linear da operação ou exclusivo.”?

A) Rede feed-forward

B) Limitação para XOR

C) Ativação sigmoide

D) Propagação direta

E) Inspeção dos pesos ocultos

**Gabarito: B.** Limitação para XOR: incapacidade de um único perceptron representar a separação não linear da operação ou exclusivo.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 329–330 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Um único neurônio de limiar não consegue acertar as quatro combinações de XOR. Que limitação o exemplo ilustra?

A) Rede feed-forward

B) Limitação para XOR

C) Propagação direta

D) Backpropagation

E) Inspeção dos pesos ocultos

**Gabarito: B.** Limitação para XOR: incapacidade de um único perceptron representar a separação não linear da operação ou exclusivo.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 329–330 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Rede em camadas na qual a informação avança das entradas para as saídas sem ciclos de realimentação.”?

A) Limitação para XOR

B) Inspeção dos pesos ocultos

C) Rede feed-forward

D) Ativação sigmoide

E) Propagação direta

**Gabarito: C.** Rede feed-forward: rede em camadas na qual a informação avança das entradas para as saídas sem ciclos de realimentação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

As saídas de uma camada alimentam somente a camada seguinte, até a previsão final. Qual arquitetura é essa?

A) Perceptron

B) Viés do neurônio

C) Backpropagation

D) Rede feed-forward

E) Codificação one-hot do alvo

**Gabarito: D.** Rede feed-forward: rede em camadas na qual a informação avança das entradas para as saídas sem ciclos de realimentação.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Camada intermediária de neurônios que transforma as entradas antes da saída.”?

A) Camada oculta

B) Perceptron

C) Codificação one-hot do alvo

D) Limitação para XOR

E) Backpropagation

**Gabarito: A.** Camada oculta: camada intermediária de neurônios que transforma as entradas antes da saída.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

A rede resolve um padrão que o neurônio único não resolvia ao introduzir unidades entre entrada e saída. Que camada foi acrescentada?

A) Ativação sigmoide

B) Perceptron

C) Camada oculta

D) Viés do neurônio

E) Backpropagation

**Gabarito: C.** Camada oculta: camada intermediária de neurônios que transforma as entradas antes da saída.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Transformação suave usada para permitir cálculos de derivadas no treinamento apresentado.”?

A) Perceptron

B) Viés do neurônio

C) Rede feed-forward

D) Limitação para XOR

E) Ativação sigmoide

**Gabarito: E.** Ativação sigmoide: transformação suave usada para permitir cálculos de derivadas no treinamento apresentado.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–332 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

O treinamento precisa de uma ativação diferenciável em lugar do degrau descontínuo. Qual função usada no capítulo atende a isso?

A) Inspeção dos pesos ocultos

B) Limitação para XOR

C) Codificação one-hot do alvo

D) Ativação sigmoide

E) Viés do neurônio

**Gabarito: D.** Ativação sigmoide: transformação suave usada para permitir cálculos de derivadas no treinamento apresentado.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 331–332 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Cálculo das ativações camada a camada para obter as saídas da rede.”?

A) Codificação one-hot do alvo

B) Limitação para XOR

C) Propagação direta

D) Camada oculta

E) Inspeção dos pesos ocultos

**Gabarito: C.** Propagação direta: cálculo das ativações camada a camada para obter as saídas da rede.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 333–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Com os pesos fixados, o programa calcula primeiro os neurônios ocultos e depois os finais. Que etapa executa?

A) Propagação direta

B) Limitação para XOR

C) Rede feed-forward

D) Camada oculta

E) Codificação one-hot do alvo

**Gabarito: A.** Propagação direta: cálculo das ativações camada a camada para obter as saídas da rede.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 333–334 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Cálculo e transmissão dos efeitos do erro das saídas para camadas anteriores para ajustar os pesos.”?

A) Rede feed-forward

B) Viés do neurônio

C) Inspeção dos pesos ocultos

D) Backpropagation

E) Limitação para XOR

**Gabarito: D.** Backpropagation: cálculo e transmissão dos efeitos do erro das saídas para camadas anteriores para ajustar os pesos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 335–336 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Depois de comparar a previsão com o alvo, o treinamento calcula ajustes começando pela saída e voltando às camadas internas. Qual procedimento usa?

A) Limitação para XOR

B) Backpropagation

C) Codificação one-hot do alvo

D) Inspeção dos pesos ocultos

E) Camada oculta

**Gabarito: B.** Backpropagation: cálculo e transmissão dos efeitos do erro das saídas para camadas anteriores para ajustar os pesos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 335–336 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Representação de classe por um vetor com uma posição um e as demais zero.”?

A) Backpropagation

B) Camada oculta

C) Limitação para XOR

D) Codificação one-hot do alvo

E) Propagação direta

**Gabarito: D.** Codificação one-hot do alvo: representação de classe por um vetor com uma posição um e as demais zero.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 337–338 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Um dígito é representado por dez posições, com 1 apenas na posição correspondente à classe correta. Qual codificação foi escolhida?

A) Ativação sigmoide

B) Viés do neurônio

C) Backpropagation

D) Propagação direta

E) Codificação one-hot do alvo

**Gabarito: E.** Codificação one-hot do alvo: representação de classe por um vetor com uma posição um e as demais zero.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 337–338 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Redes Neurais” em Grus, qual conceito corresponde à descrição: “Exame das conexões aprendidas para investigar padrões de entrada que ativam unidades internas.”?

A) Camada oculta

B) Perceptron

C) Inspeção dos pesos ocultos

D) Propagação direta

E) Rede feed-forward

**Gabarito: C.** Inspeção dos pesos ocultos: exame das conexões aprendidas para investigar padrões de entrada que ativam unidades internas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 340–342 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

A equipe desenha os pesos ligados a pixels para verificar quais traços cada neurônio prefere. Que análise do modelo está realizando?

A) Propagação direta

B) Perceptron

C) Viés do neurônio

D) Limitação para XOR

E) Inspeção dos pesos ocultos

**Gabarito: E.** Inspeção dos pesos ocultos: exame das conexões aprendidas para investigar padrões de entrada que ativam unidades internas.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 18: Redes Neurais, páginas 340–342 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
