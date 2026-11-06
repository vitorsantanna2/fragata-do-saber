# Grus — capítulo 8: Gradiente Descendente

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Data Science. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/grus_capitulo_08.sql) · [Índice](grus_README.md)

## 1. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Função que expressa a quantidade que se deseja minimizar ou maximizar.”?

A) Passo contra o gradiente

B) Critério de convergência

C) Tamanho do passo

D) Função objetivo

E) Gradiente descendente estocástico

**Gabarito: D.** Função objetivo: função que expressa a quantidade que se deseja minimizar ou maximizar.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 157–159 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

A equipe define uma soma de erros como critério para escolher parâmetros. Que papel essa função desempenha na otimização?

A) Gradiente descendente estocástico

B) Quociente de diferenças

C) Função objetivo

D) Tamanho do passo

E) Mínimo local

**Gabarito: C.** Função objetivo: função que expressa a quantidade que se deseja minimizar ou maximizar.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 157–159 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Vetor das derivadas parciais que indica a direção local de maior crescimento de uma função diferenciável.”?

A) Mínimo local

B) Tamanho do passo

C) Embaralhamento das observações

D) Passo contra o gradiente

E) Gradiente

**Gabarito: E.** Gradiente: vetor das derivadas parciais que indica a direção local de maior crescimento de uma função diferenciável.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 158–163 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Cada componente informa a taxa de mudança da função em uma coordenada. Que vetor reúne essas informações?

A) Função objetivo

B) Gradiente

C) Critério de convergência

D) Mínimo local

E) Embaralhamento das observações

**Gabarito: B.** Gradiente: vetor das derivadas parciais que indica a direção local de maior crescimento de uma função diferenciável.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 158–163 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Aproximação de derivada por uma razão de variação da função e um pequeno incremento na entrada.”?

A) Quociente de diferenças

B) Mínimo local

C) Função objetivo

D) Passo contra o gradiente

E) Gradiente descendente estocástico

**Gabarito: A.** Quociente de diferenças: aproximação de derivada por uma razão de variação da função e um pequeno incremento na entrada.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 160–161 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Sem fórmula analítica da derivada, o programa calcula (f(x+h) - f(x))/h. Que aproximação está usando?

A) Quociente de diferenças

B) Passo contra o gradiente

C) Critério de convergência

D) Função objetivo

E) Mínimo local

**Gabarito: A.** Quociente de diferenças: aproximação de derivada por uma razão de variação da função e um pequeno incremento na entrada.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 160–161 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Taxa de mudança em uma coordenada mantendo as demais constantes.”?

A) Tamanho do passo

B) Derivada parcial

C) Gradiente descendente estocástico

D) Embaralhamento das observações

E) Critério de convergência

**Gabarito: B.** Derivada parcial: taxa de mudança em uma coordenada mantendo as demais constantes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 162–163 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

O analista varia apenas o segundo parâmetro e mantém os outros fixos para medir a mudança da perda. Que taxa estima?

A) Embaralhamento das observações

B) Função objetivo

C) Mínimo local

D) Passo contra o gradiente

E) Derivada parcial

**Gabarito: E.** Derivada parcial: taxa de mudança em uma coordenada mantendo as demais constantes.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 162–163 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Atualização que subtrai um múltiplo do gradiente para procurar diminuir a função.”?

A) Mínimo local

B) Quociente de diferenças

C) Gradiente

D) Passo contra o gradiente

E) Critério de convergência

**Gabarito: D.** Passo contra o gradiente: atualização que subtrai um múltiplo do gradiente para procurar diminuir a função.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 164–165 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

A atualização é escrita como theta_novo = theta - taxa * gradiente. Que direção de movimento caracteriza essa regra?

A) Derivada parcial

B) Embaralhamento das observações

C) Mínimo local

D) Passo contra o gradiente

E) Quociente de diferenças

**Gabarito: D.** Passo contra o gradiente: atualização que subtrai um múltiplo do gradiente para procurar diminuir a função.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 164–165 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Fator que controla a distância percorrida a cada atualização dos parâmetros.”?

A) Gradiente descendente estocástico

B) Embaralhamento das observações

C) Gradiente

D) Tamanho do passo

E) Critério de convergência

**Gabarito: D.** Tamanho do passo: fator que controla a distância percorrida a cada atualização dos parâmetros.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 165–166 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

O algoritmo conhece a direção de descida, mas ainda precisa decidir quanto avançar. Que quantidade precisa escolher?

A) Tamanho do passo

B) Gradiente descendente estocástico

C) Gradiente

D) Critério de convergência

E) Mínimo local

**Gabarito: A.** Tamanho do passo: fator que controla a distância percorrida a cada atualização dos parâmetros.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 165–166 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Ponto com valor não maior que os pontos de uma vizinhança, sem garantia de ser o menor em todo o domínio.”?

A) Mínimo local

B) Quociente de diferenças

C) Passo contra o gradiente

D) Critério de convergência

E) Embaralhamento das observações

**Gabarito: A.** Mínimo local: ponto com valor não maior que os pontos de uma vizinhança, sem garantia de ser o menor em todo o domínio.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 159 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

O processo para em um vale, mas outra região tem um valor ainda menor da função. Como classificar o vale encontrado?

A) Tamanho do passo

B) Gradiente

C) Função objetivo

D) Gradiente descendente estocástico

E) Mínimo local

**Gabarito: E.** Mínimo local: ponto com valor não maior que os pontos de uma vizinhança, sem garantia de ser o menor em todo o domínio.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 159 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Regra que encerra a busca quando a melhoria fica abaixo de uma tolerância.”?

A) Mínimo local

B) Quociente de diferenças

C) Critério de convergência

D) Função objetivo

E) Derivada parcial

**Gabarito: C.** Critério de convergência: regra que encerra a busca quando a melhoria fica abaixo de uma tolerância.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 166 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

O otimizador interrompe quando a diferença entre perdas sucessivas se torna suficientemente pequena. Que regra de parada está empregando?

A) Quociente de diferenças

B) Gradiente

C) Critério de convergência

D) Tamanho do passo

E) Passo contra o gradiente

**Gabarito: C.** Critério de convergência: regra que encerra a busca quando a melhoria fica abaixo de uma tolerância.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 166 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Otimização que atualiza parâmetros a partir da contribuição de uma observação por vez.”?

A) Gradiente

B) Quociente de diferenças

C) Função objetivo

D) Tamanho do passo

E) Gradiente descendente estocástico

**Gabarito: E.** Gradiente descendente estocástico: otimização que atualiza parâmetros a partir da contribuição de uma observação por vez.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 168–169 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Em vez de somar a perda de todos os exemplos antes de atualizar, o treinamento ajusta os pesos após cada observação. Qual método usa?

A) Função objetivo

B) Gradiente descendente estocástico

C) Tamanho do passo

D) Passo contra o gradiente

E) Mínimo local

**Gabarito: B.** Gradiente descendente estocástico: otimização que atualiza parâmetros a partir da contribuição de uma observação por vez.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 168–169 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Gradiente Descendente” em Grus, qual conceito corresponde à descrição: “Mudança aleatória da ordem dos exemplos a cada passagem do procedimento estocástico.”?

A) Função objetivo

B) Embaralhamento das observações

C) Passo contra o gradiente

D) Mínimo local

E) Tamanho do passo

**Gabarito: B.** Embaralhamento das observações: mudança aleatória da ordem dos exemplos a cada passagem do procedimento estocástico.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 168–169 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

O treinamento estocástico deve evitar repetir sempre a mesma sequência de registros. Que preparação de cada passagem ajuda nisso?

A) Derivada parcial

B) Quociente de diferenças

C) Embaralhamento das observações

D) Mínimo local

E) Gradiente

**Gabarito: C.** Embaralhamento das observações: mudança aleatória da ordem dos exemplos a cada passagem do procedimento estocástico.

**Fonte:** GRUS, Joel. Data Science do Zero. Tradução de Welington Nascimento. Rio de Janeiro: Alta Books, 2016. ISBN 978-85-508-0387-6 (ebook). Capítulo 8: Gradiente Descendente, páginas 168–169 do PDF fornecido. Contexto da edição: Python 2.7. Questão original de estudo; não é questão oficial do CP-T.
