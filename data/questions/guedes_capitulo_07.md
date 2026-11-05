# Guedes — capítulo 7: Diagrama de Sequência

20 questões originais: dez de identificação e dez de aplicação dos conceitos ou regras selecionados. Contexto: UML 2.5, 3ª edição, 2018. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guedes_capitulo_07.sql) · [Índice e instruções](guedes_README.md)

## 1. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Participante da interação cuja existência é acompanhada ao longo do cenário.”?

A) Uso de interação

B) Autochamada

C) Fragmento combinado loop

D) Lifeline

E) Mensagem de retorno

**Gabarito: D.** Lifeline: participante da interação cuja existência é acompanhada ao longo do cenário.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.2, páginas 268–269 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O diagrama precisa acompanhar um objeto temporário desde a criação até o descarte. Que elemento representa sua participação ao longo da interação?

A) Mensagem de retorno

B) Uso de interação

C) Autochamada

D) Lifeline

E) Restrição de duração

**Gabarito: D.** Lifeline: participante da interação cuja existência é acompanhada ao longo do cenário.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.2, páginas 268–269 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Comunicação que apresenta a resposta de uma chamada.”?

A) Uso de interação

B) Mensagem de retorno

C) Mensagem assíncrona

D) Autochamada

E) Mensagem destrutora

**Gabarito: B.** Mensagem de retorno: comunicação que apresenta a resposta de uma chamada.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.3, páginas 272–273 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Uma consulta devolve o conjunto encontrado para quem a solicitou. Que espécie de mensagem permite mostrar esse resultado?

A) Fragmento combinado loop

B) Uso de interação

C) Autochamada

D) Mensagem de retorno

E) Lifeline

**Gabarito: D.** Mensagem de retorno: comunicação que apresenta a resposta de uma chamada.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.3, páginas 272–273 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Comunicação associada à criação de uma instância durante a interação.”?

A) Fragmento combinado loop

B) Fragmento combinado alt

C) Mensagem construtora

D) Mensagem assíncrona

E) Restrição de duração

**Gabarito: C.** Mensagem construtora: comunicação associada à criação de uma instância durante a interação.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.4, páginas 273–274 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Um participante só passa a existir depois que outro solicita sua criação. Que espécie de mensagem deve marcar esse nascimento?

A) Uso de interação

B) Mensagem assíncrona

C) Restrição de duração

D) Fragmento combinado alt

E) Mensagem construtora

**Gabarito: E.** Mensagem construtora: comunicação associada à criação de uma instância durante a interação.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.4, páginas 273–274 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Comunicação associada ao encerramento da existência de uma instância.”?

A) Restrição de duração

B) Mensagem de retorno

C) Mensagem destrutora

D) Uso de interação

E) Mensagem assíncrona

**Gabarito: C.** Mensagem destrutora: comunicação associada ao encerramento da existência de uma instância.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.5, páginas 274–275 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Uma sessão deve deixar de existir ao ser encerrada no cenário. Que espécie de mensagem representa esse descarte?

A) Mensagem destrutora

B) Restrição de duração

C) Autochamada

D) Uso de interação

E) Fragmento combinado alt

**Gabarito: A.** Mensagem destrutora: comunicação associada ao encerramento da existência de uma instância.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.5, páginas 274–275 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Mensagem em que o próprio participante invoca um comportamento seu.”?

A) Restrição de duração

B) Autochamada

C) Uso de interação

D) Mensagem de retorno

E) Fragmento combinado alt

**Gabarito: B.** Autochamada: mensagem em que o próprio participante invoca um comportamento seu.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.6, páginas 275–276 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

O objeto precisa validar internamente um código chamando uma de suas próprias operações. Que forma de mensagem representa isso?

A) Autochamada

B) Uso de interação

C) Mensagem assíncrona

D) Fragmento combinado loop

E) Lifeline

**Gabarito: A.** Autochamada: mensagem em que o próprio participante invoca um comportamento seu.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.6, páginas 275–276 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Comunicação que não exige que o emissor aguarde a conclusão do receptor para continuar.”?

A) Restrição de duração

B) Lifeline

C) Mensagem assíncrona

D) Uso de interação

E) Fragmento combinado alt

**Gabarito: C.** Mensagem assíncrona: comunicação que não exige que o emissor aguarde a conclusão do receptor para continuar.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.7, páginas 276 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Um serviço dispara uma notificação e prossegue sem esperar seu tratamento. Que modalidade de mensagem é apropriada?

A) Mensagem construtora

B) Restrição de duração

C) Mensagem assíncrona

D) Autochamada

E) Lifeline

**Gabarito: C.** Mensagem assíncrona: comunicação que não exige que o emissor aguarde a conclusão do receptor para continuar.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.7, páginas 276 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Condição que limita o intervalo temporal de uma ocorrência ou trecho da interação.”?

A) Fragmento combinado alt

B) Uso de interação

C) Lifeline

D) Mensagem destrutora

E) Restrição de duração

**Gabarito: E.** Restrição de duração: condição que limita o intervalo temporal de uma ocorrência ou trecho da interação.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.8, páginas 276–278 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

O envio e a resposta de uma solicitação precisam respeitar um prazo máximo. Que restrição deve complementar o cenário?

A) Restrição de duração

B) Autochamada

C) Mensagem de retorno

D) Mensagem assíncrona

E) Uso de interação

**Gabarito: A.** Restrição de duração: condição que limita o intervalo temporal de uma ocorrência ou trecho da interação.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.3.8, páginas 276–278 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Referência a uma interação especificada em outro lugar, evitando repetir seu detalhamento.”?

A) Restrição de duração

B) Mensagem destrutora

C) Autochamada

D) Mensagem assíncrona

E) Uso de interação

**Gabarito: E.** Uso de interação: referência a uma interação especificada em outro lugar, evitando repetir seu detalhamento.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.6, páginas 282–286 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Um trecho de autenticação já está modelado e será usado em várias sequências. Que recurso permite referenciá-lo nos novos diagramas?

A) Autochamada

B) Mensagem destrutora

C) Restrição de duração

D) Uso de interação

E) Mensagem de retorno

**Gabarito: D.** Uso de interação: referência a uma interação especificada em outro lugar, evitando repetir seu detalhamento.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.6, páginas 282–286 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Estrutura de interação que organiza comportamentos alternativos condicionados.”?

A) Mensagem construtora

B) Mensagem assíncrona

C) Mensagem de retorno

D) Autochamada

E) Fragmento combinado alt

**Gabarito: E.** Fragmento combinado alt: estrutura de interação que organiza comportamentos alternativos condicionados.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.8, páginas 286–294 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Uma reserva segue um comportamento quando há vagas e outro quando não há. Que operador representa essa escolha na sequência?

A) Fragmento combinado alt

B) Lifeline

C) Mensagem destrutora

D) Mensagem construtora

E) Autochamada

**Gabarito: A.** Fragmento combinado alt: estrutura de interação que organiza comportamentos alternativos condicionados.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.8, páginas 286–294 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

Segundo o estudo de “Diagrama de Sequência” em Guedes, qual alternativa corresponde à descrição: “Estrutura de interação que permite repetir um conjunto de mensagens.”?

A) Autochamada

B) Fragmento combinado loop

C) Mensagem de retorno

D) Restrição de duração

E) Mensagem construtora

**Gabarito: B.** Fragmento combinado loop: estrutura de interação que permite repetir um conjunto de mensagens.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.8, páginas 286–294 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

O processo deve enviar uma mensagem para cada item selecionado. Que operador permite representar essa repetição?

A) Mensagem de retorno

B) Fragmento combinado loop

C) Mensagem construtora

D) Restrição de duração

E) Mensagem assíncrona

**Gabarito: B.** Fragmento combinado loop: estrutura de interação que permite repetir um conjunto de mensagens.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 7: Diagrama de Sequência, seção 7.8, páginas 286–294 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.
