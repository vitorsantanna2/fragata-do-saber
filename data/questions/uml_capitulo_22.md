# UML — capítulo 22: Máquinas de Estados

20 questões originais: dez de identificação conceitual e dez de aplicação dos mesmos conceitos. Contexto: UML 2.0, edição recebida. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/uml_capitulo_22.sql) · [Índice e instruções](uml_README.md)

## 1. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Situação durante a vida de um elemento em que uma condição vale ou um comportamento é executado.”?

A) Condição de guarda

B) Estado

C) Estado composto

D) Ação de entrada

E) Ação de saída

**Gabarito: B.** Estado: situação durante a vida de um elemento em que uma condição vale ou um comportamento é executado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Um pedido aceita cancelamento enquanto está aguardando pagamento e muda de comportamento após o envio. Que conceito distingue essas situações?

A) Evento disparador

B) Efeito da transição

C) Estado composto

D) Transição

E) Estado

**Gabarito: E.** Estado: situação durante a vida de um elemento em que uma condição vale ou um comportamento é executado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Passagem entre estados que pode ocorrer em resposta a um evento e a uma condição.”?

A) Estado composto

B) Efeito da transição

C) Transição

D) Condição de guarda

E) Subestados disjuntos

**Gabarito: C.** Transição: passagem entre estados que pode ocorrer em resposta a um evento e a uma condição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Ao receber confirmação de pagamento, o pedido deixa Pendente e passa a Pago. Que elemento representa essa mudança?

A) Estado composto

B) Estado

C) Evento disparador

D) Ação de saída

E) Transição

**Gabarito: E.** Transição: passagem entre estados que pode ocorrer em resposta a um evento e a uma condição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Ocorrência que pode habilitar a tentativa de executar uma transição.”?

A) Ação de saída

B) Efeito da transição

C) Histórico

D) Evento disparador

E) Condição de guarda

**Gabarito: D.** Evento disparador: ocorrência que pode habilitar a tentativa de executar uma transição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Na anotação pagar [saldo suficiente] / registrar, qual papel é desempenhado por pagar?

A) Estado

B) Evento disparador

C) Subestados disjuntos

D) Ação de entrada

E) Estado composto

**Gabarito: B.** Evento disparador: ocorrência que pode habilitar a tentativa de executar uma transição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Expressão booleana que deve ser verdadeira para permitir a transição.”?

A) Subestados disjuntos

B) Estado composto

C) Condição de guarda

D) Evento disparador

E) Ação de entrada

**Gabarito: C.** Condição de guarda: expressão booleana que deve ser verdadeira para permitir a transição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Mesmo com a solicitação recebida, a mudança só ocorre se houver saldo suficiente. Que parte da transição expressa essa exigência?

A) Ação de saída

B) Ação de entrada

C) Transição

D) Condição de guarda

E) Evento disparador

**Gabarito: D.** Condição de guarda: expressão booleana que deve ser verdadeira para permitir a transição.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Comportamento executado como parte da passagem entre estados.”?

A) Transição

B) Subestados disjuntos

C) Ação de entrada

D) Condição de guarda

E) Efeito da transição

**Gabarito: E.** Efeito da transição: comportamento executado como parte da passagem entre estados.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Ao passar de Pendente para Pago, o sistema registra a quitação. Que parte da transição representa esse registro?

A) Estado composto

B) Ação de entrada

C) Ação de saída

D) Efeito da transição

E) Subestados disjuntos

**Gabarito: D.** Efeito da transição: comportamento executado como parte da passagem entre estados.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Comportamento executado quando o elemento entra em um estado.”?

A) Ação de entrada

B) Ação de saída

C) Estado composto

D) Subestados disjuntos

E) Histórico

**Gabarito: A.** Ação de entrada: comportamento executado quando o elemento entra em um estado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Sempre que o dispositivo passa a Ativo, uma luz deve ser ligada. Que comportamento do estado representa essa obrigação?

A) Condição de guarda

B) Transição

C) Ação de entrada

D) Evento disparador

E) Histórico

**Gabarito: C.** Ação de entrada: comportamento executado quando o elemento entra em um estado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Comportamento executado quando o elemento deixa um estado.”?

A) Efeito da transição

B) Subestados disjuntos

C) Ação de entrada

D) Evento disparador

E) Ação de saída

**Gabarito: E.** Ação de saída: comportamento executado quando o elemento deixa um estado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Sempre que sair de Em operação, o dispositivo deve desligar um atuador. Que comportamento do estado deve ser especificado?

A) Ação de saída

B) Transição

C) Histórico

D) Efeito da transição

E) Condição de guarda

**Gabarito: A.** Ação de saída: comportamento executado quando o elemento deixa um estado.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Estado que contém uma organização de subestados.”?

A) Condição de guarda

B) Ação de entrada

C) Estado composto

D) Ação de saída

E) Efeito da transição

**Gabarito: C.** Estado composto: estado que contém uma organização de subestados.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

As situações Validando e Processando precisam ficar dentro de uma situação geral Ativo. Que recurso hierárquico utilizar?

A) Estado composto

B) Estado

C) Ação de saída

D) Subestados disjuntos

E) Efeito da transição

**Gabarito: A.** Estado composto: estado que contém uma organização de subestados.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Subestados de uma região em que apenas um está ativo de cada vez.”?

A) Subestados disjuntos

B) Histórico

C) Ação de saída

D) Estado

E) Efeito da transição

**Gabarito: A.** Subestados disjuntos: subestados de uma região em que apenas um está ativo de cada vez.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

O objeto deve estar em Validando ou em Processando, sem executar ambos simultaneamente nessa região. Que organização de subestados expressa isso?

A) Condição de guarda

B) Subestados disjuntos

C) Transição

D) Ação de saída

E) Estado

**Gabarito: B.** Subestados disjuntos: subestados de uma região em que apenas um está ativo de cada vez.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No capítulo “Máquinas de Estados”, qual alternativa corresponde à descrição: “Recurso que permite retomar uma configuração anterior ao reentrar em um estado composto.”?

A) Subestados disjuntos

B) Estado

C) Condição de guarda

D) Histórico

E) Ação de entrada

**Gabarito: D.** Histórico: recurso que permite retomar uma configuração anterior ao reentrar em um estado composto.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Ao voltar a um modo interrompido, a máquina deve continuar do subestado em que estava. Que recurso de memória de estados pode utilizar?

A) Transição

B) Histórico

C) Estado

D) Evento disparador

E) Efeito da transição

**Gabarito: B.** Histórico: recurso que permite retomar uma configuração anterior ao reentrar em um estado composto.

**Fonte:** BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. UML: guia do usuário. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Tradução da 2ª edição. Elsevier, 2012 (12ª reimpressão). Capítulo 22: Máquinas de Estados, páginas 444–475 do PDF fornecido. Contexto: UML 2.0. Questão original de estudo; não é questão oficial do CP-T.
