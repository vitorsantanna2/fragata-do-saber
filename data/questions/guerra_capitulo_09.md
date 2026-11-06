# Guerra — capítulo 9: Gerenciando Muitos Objetos

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_09.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Interface simplificada que concentra serviços de um conjunto de classes de um subsistema.”?

A) Fábrica de instâncias compartilhadas

B) Estado intrínseco

C) Estado extrínseco

D) Flyweight

E) Facade

**Gabarito: E.** Facade: interface simplificada que concentra serviços de um conjunto de classes de um subsistema.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 221–228 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O cliente precisa de uma operação de alto nível em vez de conhecer a sequência de chamadas a cinco classes internas. Qual padrão oferece essa entrada simplificada?

A) Fábrica de instâncias compartilhadas

B) Estado extrínseco

C) Facade

D) readResolve

E) Estado intrínseco

**Gabarito: C.** Facade: interface simplificada que concentra serviços de um conjunto de classes de um subsistema.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 221–228 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Concentração das chamadas a uma biblioteca em uma fronteira própria para limitar o impacto de mudanças.”?

A) Isolamento de API externa

B) Estado extrínseco

C) Estado intrínseco

D) readResolve

E) Mediator

**Gabarito: A.** Isolamento de API externa: concentração das chamadas a uma biblioteca em uma fronteira própria para limitar o impacto de mudanças.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 223–224 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Uma biblioteca pode ser substituída e a equipe quer evitar que seus detalhes estejam espalhados pelo sistema. Qual objetivo de encapsulamento orienta criar uma fachada própria?

A) Estado intrínseco

B) Mediator

C) Flyweight

D) Isolamento de API externa

E) Fábrica de instâncias compartilhadas

**Gabarito: D.** Isolamento de API externa: concentração das chamadas a uma biblioteca em uma fronteira própria para limitar o impacto de mudanças.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 223–224 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Refatoração que move para um novo ponto de entrada as colaborações de subsistema antes espalhadas pelos clientes.”?

A) Estado extrínseco

B) Extração de fachada

C) Fábrica de instâncias compartilhadas

D) Estado intrínseco

E) Mediator

**Gabarito: B.** Extração de fachada: refatoração que move para um novo ponto de entrada as colaborações de subsistema antes espalhadas pelos clientes.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 224–226 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Várias telas repetem a mesma coordenação de classes e essa sequência será transferida para uma interface de alto nível. Qual refatoração realizar?

A) Estado intrínseco

B) Flyweight

C) Extração de fachada

D) Fábrica de instâncias compartilhadas

E) Estado extrínseco

**Gabarito: C.** Extração de fachada: refatoração que move para um novo ponto de entrada as colaborações de subsistema antes espalhadas pelos clientes.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 224–226 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Fronteira que traduz e isola o modelo de um sistema legado para proteger o modelo do código novo.”?

A) Estado extrínseco

B) readResolve

C) Mediator

D) Camada anticorrupção

E) Flyweight

**Gabarito: D.** Camada anticorrupção: fronteira que traduz e isola o modelo de um sistema legado para proteger o modelo do código novo.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 228–229 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Um sistema novo precisa integrar o legado sem absorver seus nomes e regras de representação. Qual camada protege essa separação de modelos?

A) readResolve

B) Camada anticorrupção

C) Mediator

D) Fábrica de instâncias compartilhadas

E) Estado extrínseco

**Gabarito: B.** Camada anticorrupção: fronteira que traduz e isola o modelo de um sistema legado para proteger o modelo do código novo.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 228–229 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Objeto que centraliza regras de interação entre colaboradores para reduzir seu conhecimento mútuo.”?

A) Mediator

B) readResolve

C) Fábrica de instâncias compartilhadas

D) Flyweight

E) Estado intrínseco

**Gabarito: A.** Mediator: objeto que centraliza regras de interação entre colaboradores para reduzir seu conhecimento mútuo.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 229–236 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Vários componentes de uma tela começam a se chamar diretamente em combinações complexas. Qual padrão concentra a coordenação entre eles?

A) Camada anticorrupção

B) readResolve

C) Extração de fachada

D) Mediator

E) Flyweight

**Gabarito: D.** Mediator: objeto que centraliza regras de interação entre colaboradores para reduzir seu conhecimento mútuo.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 229–236 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Padrão que compartilha instâncias reutilizáveis e mantém fora delas o estado que varia por contexto.”?

A) Mediator

B) Isolamento de API externa

C) Flyweight

D) Camada anticorrupção

E) Facade

**Gabarito: C.** Flyweight: padrão que compartilha instâncias reutilizáveis e mantém fora delas o estado que varia por contexto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 236–241 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Muitos itens têm estados com os mesmos comportamentos e podem reutilizar representações comuns, passando dados variáveis à operação. Qual padrão reduz essas instâncias repetidas?

A) Isolamento de API externa

B) Flyweight

C) Facade

D) Mediator

E) Camada anticorrupção

**Gabarito: B.** Flyweight: padrão que compartilha instâncias reutilizáveis e mantém fora delas o estado que varia por contexto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 236–241 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Informação compartilhável que pertence à representação reutilizada no Flyweight.”?

A) Estado intrínseco

B) Mediator

C) Extração de fachada

D) readResolve

E) Camada anticorrupção

**Gabarito: A.** Estado intrínseco: informação compartilhável que pertence à representação reutilizada no Flyweight.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 239–240 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

O nome e as regras fixas de um status são iguais para todos os itens que o usam. Como classificar essa informação no Flyweight?

A) Camada anticorrupção

B) Extração de fachada

C) Estado intrínseco

D) Facade

E) Isolamento de API externa

**Gabarito: C.** Estado intrínseco: informação compartilhável que pertence à representação reutilizada no Flyweight.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 239–240 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Informação específica de cada contexto, fornecida ao objeto compartilhado quando necessária.”?

A) Mediator

B) Isolamento de API externa

C) Extração de fachada

D) Camada anticorrupção

E) Estado extrínseco

**Gabarito: E.** Estado extrínseco: informação específica de cada contexto, fornecida ao objeto compartilhado quando necessária.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 239–240 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

A quantidade de um item muda independentemente dos outros e deve ser passada à operação do status compartilhado. Como classificar esse dado no Flyweight?

A) Camada anticorrupção

B) Extração de fachada

C) Isolamento de API externa

D) readResolve

E) Estado extrínseco

**Gabarito: E.** Estado extrínseco: informação específica de cada contexto, fornecida ao objeto compartilhado quando necessária.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 239–240 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Ponto que mantém e fornece objetos reutilizáveis por uma chave, evitando criar equivalentes repetidos.”?

A) Extração de fachada

B) Camada anticorrupção

C) Facade

D) Mediator

E) Fábrica de instâncias compartilhadas

**Gabarito: E.** Fábrica de instâncias compartilhadas: ponto que mantém e fornece objetos reutilizáveis por uma chave, evitando criar equivalentes repetidos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 240–243 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Antes de criar um status, um método consulta um mapa e devolve o objeto já existente para aquela chave. Que papel essa fábrica desempenha?

A) Fábrica de instâncias compartilhadas

B) Camada anticorrupção

C) Facade

D) Extração de fachada

E) Isolamento de API externa

**Gabarito: A.** Fábrica de instâncias compartilhadas: ponto que mantém e fornece objetos reutilizáveis por uma chave, evitando criar equivalentes repetidos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 240–243 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Gerenciando Muitos Objetos” em Guerra, qual conceito corresponde à descrição: “Método usado na serialização Java para substituir o objeto desserializado pela instância apropriada, como a canônica.”?

A) Flyweight

B) readResolve

C) Estado intrínseco

D) Isolamento de API externa

E) Estado extrínseco

**Gabarito: B.** readResolve: método usado na serialização Java para substituir o objeto desserializado pela instância apropriada, como a canônica.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 243–245 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Depois de desserializar um status compartilhado, o sistema deve recuperar a mesma instância fornecida pela fábrica. Qual método apresentado pode realizar essa substituição?

A) Isolamento de API externa

B) Mediator

C) Flyweight

D) readResolve

E) Estado extrínseco

**Gabarito: D.** readResolve: método usado na serialização Java para substituir o objeto desserializado pela instância apropriada, como a canônica.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 9: Gerenciando Muitos Objetos, páginas 243–245 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
