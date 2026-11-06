# Guerra — capítulo 3: Delegando Comportamento com Composição

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_03.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Crescimento de subclasses ao representar combinações de dimensões variáveis em uma única hierarquia.”?

A) Troca de colaborador em execução

B) Substituição de condicionais por polimorfismo

C) Explosão combinatória de subclasses

D) State

E) Informação na notificação

**Gabarito: C.** Explosão combinatória de subclasses: crescimento de subclasses ao representar combinações de dimensões variáveis em uma única hierarquia.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 67–70 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Três formatos e quatro tratamentos geram uma classe para cada combinação. Qual problema da hierarquia essa multiplicação evidencia?

A) Informação na notificação

B) Transição de estado

C) Observer

D) Hook Class

E) Explosão combinatória de subclasses

**Gabarito: E.** Explosão combinatória de subclasses: crescimento de subclasses ao representar combinações de dimensões variáveis em uma única hierarquia.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 67–70 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Padrão que separa dimensões de variação em hierarquias ligadas por composição para permitir evolução independente.”?

A) Bridge

B) Informação na notificação

C) State

D) Transição de estado

E) Observer

**Gabarito: A.** Bridge: padrão que separa dimensões de variação em hierarquias ligadas por composição para permitir evolução independente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 69–74 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Formatos de documento e formas de pós-processamento devem ganhar novas implementações sem criar uma subclasse por combinação. Qual padrão organiza essas duas variações?

A) Substituição de condicionais por polimorfismo

B) State

C) Bridge

D) Registro de observadores

E) Informação na notificação

**Gabarito: C.** Bridge: padrão que separa dimensões de variação em hierarquias ligadas por composição para permitir evolução independente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 69–74 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Abstração de colaborador que fornece um ponto de extensão por composição de objetos.”?

A) Informação na notificação

B) Substituição de condicionais por polimorfismo

C) Transição de estado

D) Hook Class

E) State

**Gabarito: D.** Hook Class: abstração de colaborador que fornece um ponto de extensão por composição de objetos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 74–77 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Uma classe passa a receber um colaborador substituível para fornecer uma parte variável do seu comportamento. Como se chama esse ponto de extensão baseado em composição?

A) Hook Class

B) Informação na notificação

C) Substituição de condicionais por polimorfismo

D) Registro de observadores

E) Explosão combinatória de subclasses

**Gabarito: A.** Hook Class: abstração de colaborador que fornece um ponto de extensão por composição de objetos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 74–77 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Possibilidade de mudar comportamento atribuindo outra implementação ao objeto composto.”?

A) Troca de colaborador em execução

B) Explosão combinatória de subclasses

C) Substituição de condicionais por polimorfismo

D) Registro de observadores

E) Transição de estado

**Gabarito: A.** Troca de colaborador em execução: possibilidade de mudar comportamento atribuindo outra implementação ao objeto composto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 75–77 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Depois de criar o gerador, o cliente substitui o pós-processador por outro objeto. Que possibilidade da composição está explorando?

A) Observer

B) Substituição de condicionais por polimorfismo

C) Registro de observadores

D) Troca de colaborador em execução

E) Explosão combinatória de subclasses

**Gabarito: D.** Troca de colaborador em execução: possibilidade de mudar comportamento atribuindo outra implementação ao objeto composto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 75–77 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Padrão que representa estados por objetos e delega a eles o comportamento dependente da situação atual.”?

A) Troca de colaborador em execução

B) Registro de observadores

C) Hook Class

D) Informação na notificação

E) State

**Gabarito: E.** State: padrão que representa estados por objetos e delega a eles o comportamento dependente da situação atual.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 77–84 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Os mesmos comandos de uma solicitação devem se comportar de modo distinto conforme ela esteja aberta ou encerrada. Qual padrão concentra essas diferenças nos estados?

A) Bridge

B) State

C) Troca de colaborador em execução

D) Hook Class

E) Informação na notificação

**Gabarito: B.** State: padrão que representa estados por objetos e delega a eles o comportamento dependente da situação atual.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 77–84 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Mudança do objeto que representa a situação corrente e, assim, do comportamento delegado.”?

A) Transição de estado

B) Registro de observadores

C) Substituição de condicionais por polimorfismo

D) Bridge

E) Informação na notificação

**Gabarito: A.** Transição de estado: mudança do objeto que representa a situação corrente e, assim, do comportamento delegado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 78–84 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Ao concluir a etapa atual, a entidade troca seu colaborador de estado para que as próximas operações obedeçam a outras regras. Que mudança está ocorrendo?

A) Informação na notificação

B) Hook Class

C) Transição de estado

D) Troca de colaborador em execução

E) Substituição de condicionais por polimorfismo

**Gabarito: C.** Transição de estado: mudança do objeto que representa a situação corrente e, assim, do comportamento delegado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 78–84 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Refatoração que desloca ramos recorrentes para implementações de uma abstração comum.”?

A) Registro de observadores

B) Substituição de condicionais por polimorfismo

C) Informação na notificação

D) Transição de estado

E) Troca de colaborador em execução

**Gabarito: B.** Substituição de condicionais por polimorfismo: refatoração que desloca ramos recorrentes para implementações de uma abstração comum.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 85–87 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Vários métodos repetem o mesmo switch sobre o tipo da regra. Qual refatoração distribui os ramos por implementações especializadas?

A) Bridge

B) Substituição de condicionais por polimorfismo

C) Transição de estado

D) Explosão combinatória de subclasses

E) Informação na notificação

**Gabarito: B.** Substituição de condicionais por polimorfismo: refatoração que desloca ramos recorrentes para implementações de uma abstração comum.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 85–87 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Padrão em que interessados registrados recebem notificações de mudanças de um objeto observado.”?

A) Hook Class

B) Troca de colaborador em execução

C) Observer

D) Substituição de condicionais por polimorfismo

E) Explosão combinatória de subclasses

**Gabarito: C.** Observer: padrão em que interessados registrados recebem notificações de mudanças de um objeto observado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 87–95 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Ao mudar uma carteira, gráficos e resumos registrados devem ser avisados sem que a carteira conheça suas classes concretas. Qual padrão usar?

A) Transição de estado

B) Substituição de condicionais por polimorfismo

C) Troca de colaborador em execução

D) State

E) Observer

**Gabarito: E.** Observer: padrão em que interessados registrados recebem notificações de mudanças de um objeto observado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 87–95 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Manutenção da coleção de interessados que devem receber notificações.”?

A) Explosão combinatória de subclasses

B) Hook Class

C) State

D) Registro de observadores

E) Substituição de condicionais por polimorfismo

**Gabarito: D.** Registro de observadores: manutenção da coleção de interessados que devem receber notificações.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 88–93 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Um painel só deve começar a receber eventos depois de ser incluído na lista do objeto observado. Qual operação de relacionamento é necessária?

A) Bridge

B) Hook Class

C) State

D) Registro de observadores

E) Substituição de condicionais por polimorfismo

**Gabarito: D.** Registro de observadores: manutenção da coleção de interessados que devem receber notificações.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 88–93 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Delegando Comportamento com Composição” em Guerra, qual conceito corresponde à descrição: “Decisão sobre quais dados de mudança serão passados aos observadores ou consultados por eles.”?

A) Hook Class

B) Informação na notificação

C) Transição de estado

D) Troca de colaborador em execução

E) State

**Gabarito: B.** Informação na notificação: decisão sobre quais dados de mudança serão passados aos observadores ou consultados por eles.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 93–95 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma equipe avalia se o evento deve levar os novos valores ou apenas avisar para que os ouvintes consultem a origem. Qual aspecto da notificação está projetando?

A) State

B) Bridge

C) Troca de colaborador em execução

D) Hook Class

E) Informação na notificação

**Gabarito: E.** Informação na notificação: decisão sobre quais dados de mudança serão passados aos observadores ou consultados por eles.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 3: Delegando Comportamento com Composição, páginas 93–95 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
