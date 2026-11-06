# Grus — capítulo 12: K–Vizinhos Mais Próximos

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_12.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Predição de rótulo baseada nas classes de exemplos próximos do novo ponto.”?

A) Classificação por vizinhos

B) Esparsidade do espaço amostral

C) Maldição da dimensionalidade

D) Desempate por remoção do mais distante

E) Avaliação excluindo o próprio ponto

**Gabarito: A.** Classificação por vizinhos: predição de rótulo baseada nas classes de exemplos próximos do novo ponto.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 239–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um registro novo recebe uma classe após consultar exemplos rotulados próximos, sem ajustar uma reta. Qual estratégia de classificação usa?

A) Esparsidade do espaço amostral

B) Avaliação excluindo o próprio ponto

C) Maldição da dimensionalidade

D) Classificação por vizinhos

E) Desempate por remoção do mais distante

**Gabarito: D.** Classificação por vizinhos: predição de rótulo baseada nas classes de exemplos próximos do novo ponto.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 239–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Regra numérica que permite ordenar a proximidade entre os exemplos.”?

A) Escolha de k por avaliação

B) Métrica de distância

C) Avaliação excluindo o próprio ponto

D) Parâmetro k

E) Comparabilidade de escala

**Gabarito: B.** Métrica de distância: regra numérica que permite ordenar a proximidade entre os exemplos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 239 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Antes de selecionar vizinhos, o programa precisa definir como quantificar a separação entre duas observações. Que componente deve estabelecer?

A) Maldição da dimensionalidade

B) Parâmetro k

C) Métrica de distância

D) Classificação por vizinhos

E) Esparsidade do espaço amostral

**Gabarito: C.** Métrica de distância: regra numérica que permite ordenar a proximidade entre os exemplos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 239 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Quantidade de vizinhos que participam da votação de uma previsão.”?

A) Maldição da dimensionalidade

B) Esparsidade do espaço amostral

C) Desempate por remoção do mais distante

D) Comparabilidade de escala

E) Parâmetro k

**Gabarito: E.** Parâmetro k: quantidade de vizinhos que participam da votação de uma previsão.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

O classificador passa a consultar sete exemplos próximos em vez de três. Qual parâmetro foi alterado?

A) Métrica de distância

B) Desempate por remoção do mais distante

C) Comparabilidade de escala

D) Parâmetro k

E) Esparsidade do espaço amostral

**Gabarito: D.** Parâmetro k: quantidade de vizinhos que participam da votação de uma previsão.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Escolha do rótulo mais frequente entre os vizinhos selecionados.”?

A) Maldição da dimensionalidade

B) Voto majoritário

C) Métrica de distância

D) Escolha de k por avaliação

E) Avaliação excluindo o próprio ponto

**Gabarito: B.** Voto majoritário: escolha do rótulo mais frequente entre os vizinhos selecionados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Cinco vizinhos possuem rótulos A, B, A, A e B e a previsão é A. Que regra determina o resultado?

A) Escolha de k por avaliação

B) Voto majoritário

C) Avaliação excluindo o próprio ponto

D) Métrica de distância

E) Esparsidade do espaço amostral

**Gabarito: B.** Voto majoritário: escolha do rótulo mais frequente entre os vizinhos selecionados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Regra apresentada que reduz a votação excluindo o último vizinho enquanto persistir empate.”?

A) Comparabilidade de escala

B) Classificação por vizinhos

C) Desempate por remoção do mais distante

D) Avaliação excluindo o próprio ponto

E) Maldição da dimensionalidade

**Gabarito: C.** Desempate por remoção do mais distante: regra apresentada que reduz a votação excluindo o último vizinho enquanto persistir empate.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Dois rótulos empatam na votação e a implementação do capítulo tenta novamente sem o ponto selecionado mais distante. Qual regra está usando?

A) Avaliação excluindo o próprio ponto

B) Escolha de k por avaliação

C) Métrica de distância

D) Comparabilidade de escala

E) Desempate por remoção do mais distante

**Gabarito: E.** Desempate por remoção do mais distante: regra apresentada que reduz a votação excluindo o último vizinho enquanto persistir empate.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 240–241 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Teste que prevê uma observação usando as demais, sem incluí-la entre seus vizinhos.”?

A) Parâmetro k

B) Desempate por remoção do mais distante

C) Comparabilidade de escala

D) Avaliação excluindo o próprio ponto

E) Maldição da dimensionalidade

**Gabarito: D.** Avaliação excluindo o próprio ponto: teste que prevê uma observação usando as demais, sem incluí-la entre seus vizinhos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 244 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Ao testar uma cidade já conhecida, a equipe a remove do conjunto consultado. Que cuidado impede uma previsão trivial pelo próprio exemplo?

A) Avaliação excluindo o próprio ponto

B) Esparsidade do espaço amostral

C) Classificação por vizinhos

D) Métrica de distância

E) Parâmetro k

**Gabarito: A.** Avaliação excluindo o próprio ponto: teste que prevê uma observação usando as demais, sem incluí-la entre seus vizinhos.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 244 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Comparação do desempenho de diferentes quantidades de vizinhos em exemplos avaliados.”?

A) Desempate por remoção do mais distante

B) Classificação por vizinhos

C) Esparsidade do espaço amostral

D) Escolha de k por avaliação

E) Maldição da dimensionalidade

**Gabarito: D.** Escolha de k por avaliação: comparação do desempenho de diferentes quantidades de vizinhos em exemplos avaliados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 244–245 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

A equipe compara resultados para 1, 3, 5 e 7 vizinhos antes de definir o classificador. Que decisão está apoiando empiricamente?

A) Escolha de k por avaliação

B) Comparabilidade de escala

C) Maldição da dimensionalidade

D) Esparsidade do espaço amostral

E) Métrica de distância

**Gabarito: A.** Escolha de k por avaliação: comparação do desempenho de diferentes quantidades de vizinhos em exemplos avaliados.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 244–245 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Cuidado de evitar que uma dimensão domine a distância apenas por sua unidade numérica.”?

A) Maldição da dimensionalidade

B) Esparsidade do espaço amostral

C) Métrica de distância

D) Voto majoritário

E) Comparabilidade de escala

**Gabarito: E.** Comparabilidade de escala: cuidado de evitar que uma dimensão domine a distância apenas por sua unidade numérica.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 245 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Um atributo em milhares pesa muito mais que outro em décimos, embora ambos sejam relevantes. Que cuidado deve anteceder a busca por vizinhos?

A) Comparabilidade de escala

B) Métrica de distância

C) Maldição da dimensionalidade

D) Esparsidade do espaço amostral

E) Escolha de k por avaliação

**Gabarito: A.** Comparabilidade de escala: cuidado de evitar que uma dimensão domine a distância apenas por sua unidade numérica.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 245 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Dificuldade causada pela vastidão de espaços de muitas dimensões e pela menor distinção prática entre proximidades.”?

A) Comparabilidade de escala

B) Desempate por remoção do mais distante

C) Maldição da dimensionalidade

D) Avaliação excluindo o próprio ponto

E) Voto majoritário

**Gabarito: C.** Maldição da dimensionalidade: dificuldade causada pela vastidão de espaços de muitas dimensões e pela menor distinção prática entre proximidades.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 246–251 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Ao acrescentar muitas dimensões sem aumentar os exemplos, quase nenhum ponto parece próximo. Que fenômeno prejudica o classificador?

A) Comparabilidade de escala

B) Maldição da dimensionalidade

C) Classificação por vizinhos

D) Desempate por remoção do mais distante

E) Avaliação excluindo o próprio ponto

**Gabarito: B.** Maldição da dimensionalidade: dificuldade causada pela vastidão de espaços de muitas dimensões e pela menor distinção prática entre proximidades.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 246–251 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “K–Vizinhos Mais Próximos” em Grus, qual conceito corresponde à descrição: “Baixa cobertura do espaço de características por um conjunto finito de observações.”?

A) Comparabilidade de escala

B) Desempate por remoção do mais distante

C) Voto majoritário

D) Classificação por vizinhos

E) Esparsidade do espaço amostral

**Gabarito: E.** Esparsidade do espaço amostral: baixa cobertura do espaço de características por um conjunto finito de observações.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 249–251 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Os mesmos cinquenta pontos cobrem bem um intervalo, mas deixam grandes regiões vazias em várias dimensões. Que propriedade da amostra explica essa diferença?

A) Comparabilidade de escala

B) Parâmetro k

C) Esparsidade do espaço amostral

D) Métrica de distância

E) Avaliação excluindo o próprio ponto

**Gabarito: C.** Esparsidade do espaço amostral: baixa cobertura do espaço de características por um conjunto finito de observações.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 12: K–Vizinhos Mais Próximos, páginas 249–251 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
