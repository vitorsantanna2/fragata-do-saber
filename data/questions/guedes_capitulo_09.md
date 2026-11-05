# Guedes — capítulo 9: Diagrama de Máquina de Estados

20 questões originais: dez de identificação e dez de aplicação dos conceitos ou regras selecionados. Contexto: UML 2.5, 3ª edição, 2018. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guedes_capitulo_09.sql) · [Índice e instruções](guedes_README.md)

## 1. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Situação de uma máquina que não é detalhada em subestados.”?

A) Transição

B) Estado composto

C) Atividade de entrada

D) Estado simples

E) Pseudoestado de história

**Gabarito: D.** Estado simples: situação de uma máquina que não é detalhada em subestados.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.1, páginas 345–346 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O modelo apresenta Aguardando como uma situação sem subdivisões internas. Como classificar esse estado?

A) Transição

B) Pseudoestado de escolha

C) Autotransição

D) Estado simples

E) Atividade de saída

**Gabarito: D.** Estado simples: situação de uma máquina que não é detalhada em subestados.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.1, páginas 345–346 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Ligação que representa a passagem de uma situação de estado para outra.”?

A) Transição

B) Pseudoestado de escolha

C) Atividade de entrada

D) Autotransição

E) Estado simples

**Gabarito: A.** Transição: ligação que representa a passagem de uma situação de estado para outra.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.2, páginas 346–347 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um evento de confirmação faz a solicitação passar de Aberta para Confirmada. Que elemento expressa essa mudança?

A) Atividade de entrada

B) Estado composto

C) Transição interna

D) Pseudoestado de escolha

E) Transição

**Gabarito: E.** Transição: ligação que representa a passagem de uma situação de estado para outra.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.2, páginas 346–347 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Comportamento executado ao entrar em um estado.”?

A) Atividade de entrada

B) Pseudoestado de história

C) Transição

D) Estado simples

E) Estado composto

**Gabarito: A.** Atividade de entrada: comportamento executado ao entrar em um estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.6, páginas 349–352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Sempre que o equipamento entrar em Pronto, deve acender uma luz. Que comportamento interno do estado representa essa exigência?

A) Transição

B) Atividade de entrada

C) Pseudoestado de escolha

D) Estado simples

E) Pseudoestado de história

**Gabarito: B.** Atividade de entrada: comportamento executado ao entrar em um estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.6, páginas 349–352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Comportamento executado ao deixar um estado.”?

A) Estado de submáquina

B) Atividade de saída

C) Estado simples

D) Pseudoestado de escolha

E) Estado composto

**Gabarito: B.** Atividade de saída: comportamento executado ao deixar um estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.6, páginas 349–352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Ao sair de Em operação, o equipamento precisa liberar um recurso. Que comportamento do estado deve ser definido?

A) Pseudoestado de história

B) Pseudoestado de escolha

C) Estado de submáquina

D) Estado simples

E) Atividade de saída

**Gabarito: E.** Atividade de saída: comportamento executado ao deixar um estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.6, páginas 349–352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Tratamento de um evento sem executar a saída e a nova entrada do estado.”?

A) Transição

B) Estado simples

C) Estado de submáquina

D) Transição interna

E) Pseudoestado de escolha

**Gabarito: D.** Transição interna: tratamento de um evento sem executar a saída e a nova entrada do estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.7, páginas 352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Uma consulta deve ser respondida enquanto o objeto permanece na mesma situação, sem repetir seus procedimentos de saída e entrada. Que tipo de transição é apropriado?

A) Estado de submáquina

B) Transição interna

C) Estado simples

D) Pseudoestado de história

E) Transição

**Gabarito: B.** Transição interna: tratamento de um evento sem executar a saída e a nova entrada do estado.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.7, páginas 352 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Transição cujo destino é o próprio estado de origem, envolvendo sua saída e reentrada.”?

A) Estado simples

B) Autotransição

C) Transição

D) Pseudoestado de história

E) Pseudoestado de escolha

**Gabarito: B.** Autotransição: transição cujo destino é o próprio estado de origem, envolvendo sua saída e reentrada.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.8, páginas 352–353 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

O objeto deve voltar ao mesmo estado, repetindo os procedimentos de saída e entrada. Que tipo de transição deve ser empregado?

A) Transição

B) Pseudoestado de escolha

C) Estado composto

D) Autotransição

E) Estado simples

**Gabarito: D.** Autotransição: transição cujo destino é o próprio estado de origem, envolvendo sua saída e reentrada.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.8, páginas 352–353 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Ponto que seleciona o próximo caminho conforme condições de guarda.”?

A) Transição interna

B) Transição

C) Pseudoestado de escolha

D) Pseudoestado de história

E) Autotransição

**Gabarito: C.** Pseudoestado de escolha: ponto que seleciona o próximo caminho conforme condições de guarda.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.9, páginas 353–355 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Após uma verificação, a máquina precisa escolher entre destinos alternativos. Que pseudoestado representa essa decisão?

A) Pseudoestado de escolha

B) Pseudoestado de história

C) Atividade de entrada

D) Atividade de saída

E) Estado simples

**Gabarito: A.** Pseudoestado de escolha: ponto que seleciona o próximo caminho conforme condições de guarda.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.9, páginas 353–355 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Estado que contém outros estados para detalhar seu comportamento.”?

A) Autotransição

B) Atividade de saída

C) Transição interna

D) Pseudoestado de escolha

E) Estado composto

**Gabarito: E.** Estado composto: estado que contém outros estados para detalhar seu comportamento.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.11, páginas 357–359 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

O modo Processando deve conter Validando e Registrando. Que estrutura hierárquica representa esse detalhamento?

A) Estado composto

B) Estado simples

C) Atividade de saída

D) Transição interna

E) Autotransição

**Gabarito: A.** Estado composto: estado que contém outros estados para detalhar seu comportamento.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.11, páginas 357–359 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Recurso que permite recuperar a situação anterior de um estado composto ao retomá-lo.”?

A) Atividade de entrada

B) Transição

C) Pseudoestado de história

D) Transição interna

E) Atividade de saída

**Gabarito: C.** Pseudoestado de história: recurso que permite recuperar a situação anterior de um estado composto ao retomá-lo.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.12, páginas 359–360 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Uma atividade interrompida deve voltar ao subestado em que estava antes da interrupção. Que pseudoestado ajuda a modelar essa retomada?

A) Atividade de entrada

B) Atividade de saída

C) Pseudoestado de história

D) Autotransição

E) Pseudoestado de escolha

**Gabarito: C.** Pseudoestado de história: recurso que permite recuperar a situação anterior de um estado composto ao retomá-lo.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.12, páginas 359–360 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

Segundo o estudo de “Diagrama de Máquina de Estados” em Guedes, qual alternativa corresponde à descrição: “Estado que remete a uma máquina de estados detalhada separadamente.”?

A) Autotransição

B) Atividade de entrada

C) Estado de submáquina

D) Transição

E) Atividade de saída

**Gabarito: C.** Estado de submáquina: estado que remete a uma máquina de estados detalhada separadamente.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.15, páginas 362–363 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Um processo já possui seu próprio diagrama e deve ser reutilizado sem expandir todos os estados no desenho principal. Que recurso deve ser empregado?

A) Estado simples

B) Transição interna

C) Atividade de saída

D) Pseudoestado de escolha

E) Estado de submáquina

**Gabarito: E.** Estado de submáquina: estado que remete a uma máquina de estados detalhada separadamente.

**Fonte:** GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. Capítulo 9: Diagrama de Máquina de Estados, seção 9.15, páginas 362–363 do PDF fornecido. Contexto: UML 2.5 na edição recebida. Questão original de estudo; não é questão oficial do CP-T.
