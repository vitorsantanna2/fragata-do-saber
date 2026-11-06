# Guerra — capítulo 5: Envolvendo Objetos

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_05.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Objeto substituto que verifica permissões ou condições de acesso antes de encaminhar chamadas ao objeto real.”?

A) Proxy remoto

B) Proxy de proteção

C) Proxy virtual

D) Proxy de repetição de tentativas

E) Proxy assíncrono

**Gabarito: B.** Proxy de proteção: objeto substituto que verifica permissões ou condições de acesso antes de encaminhar chamadas ao objeto real.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 124–125 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Antes de acessar o serviço real, um objeto verifica permissões e depois delega a operação pela mesma abstração. Qual modalidade de proxy descreve esse controle?

A) Proxy virtual

B) Proxy de repetição de tentativas

C) Adapter

D) Proxy de proteção

E) Proxy assíncrono

**Gabarito: D.** Proxy de proteção: objeto substituto que verifica permissões ou condições de acesso antes de encaminhar chamadas ao objeto real.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 124–125 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Objeto que envolve outro de abstração compatível para acrescentar responsabilidades de forma combinável.”?

A) Proxy virtual

B) Proxy remoto

C) Proxy assíncrono

D) Decorator

E) Adapter

**Gabarito: D.** Decorator: objeto que envolve outro de abstração compatível para acrescentar responsabilidades de forma combinável.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 121–125 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um fluxo recebe camadas opcionais de auditoria e transformação, cada uma preservando a interface de uso. Qual padrão destaca o acréscimo de responsabilidades?

A) Proxy remoto

B) Decorator

C) Adapter

D) Proxy de repetição de tentativas

E) Proxy virtual

**Gabarito: B.** Decorator: objeto que envolve outro de abstração compatível para acrescentar responsabilidades de forma combinável.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 121–125 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Substituto que adia a criação ou o carregamento do objeto real até que seja necessário.”?

A) Proxy de repetição de tentativas

B) Proxy de proteção

C) Adapter

D) Proxy virtual

E) Proxy de cache

**Gabarito: D.** Proxy virtual: substituto que adia a criação ou o carregamento do objeto real até que seja necessário.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 123–127 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Um recurso caro só é materializado quando sua primeira operação é solicitada. Qual tipo de proxy permite esse adiamento?

A) Proxy assíncrono

B) Proxy remoto

C) Proxy virtual

D) Adapter

E) Proxy dinâmico

**Gabarito: C.** Proxy virtual: substituto que adia a criação ou o carregamento do objeto real até que seja necessário.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 123–127 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Representante local que encapsula detalhes de comunicação com um objeto situado em outro processo ou servidor.”?

A) Proxy remoto

B) Proxy assíncrono

C) Proxy de proteção

D) Proxy de repetição de tentativas

E) Adapter

**Gabarito: A.** Proxy remoto: representante local que encapsula detalhes de comunicação com um objeto situado em outro processo ou servidor.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 123 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

O cliente chama uma interface local e o representante traduz a chamada em comunicação com outro servidor. Qual proxy está em uso?

A) Proxy remoto

B) Proxy assíncrono

C) Proxy dinâmico

D) Proxy virtual

E) Extração de proxy

**Gabarito: A.** Proxy remoto: representante local que encapsula detalhes de comunicação com um objeto situado em outro processo ou servidor.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 123 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Implementação de intermediação de chamadas criada em execução a partir de interfaces, no mecanismo apresentado de Java.”?

A) Proxy dinâmico

B) Proxy de cache

C) Proxy assíncrono

D) Adapter

E) Proxy remoto

**Gabarito: A.** Proxy dinâmico: implementação de intermediação de chamadas criada em execução a partir de interfaces, no mecanismo apresentado de Java.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 127–128 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Uma aplicação quer interceptar interfaces sem escrever manualmente uma classe delegadora para cada uma. Qual mecanismo de proxy apresentado pode usar?

A) Extração de proxy

B) Proxy de proteção

C) Proxy de repetição de tentativas

D) Proxy remoto

E) Proxy dinâmico

**Gabarito: E.** Proxy dinâmico: implementação de intermediação de chamadas criada em execução a partir de interfaces, no mecanismo apresentado de Java.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 127–128 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Intermediário que delega a execução do trabalho a outra thread no exemplo apresentado.”?

A) Proxy de repetição de tentativas

B) Proxy de cache

C) Extração de proxy

D) Proxy assíncrono

E) Adapter

**Gabarito: D.** Proxy assíncrono: intermediário que delega a execução do trabalho a outra thread no exemplo apresentado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 128–129 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

A interface de uma transação deve continuar simples, enquanto a decisão de executá-la em outra thread fica em um envoltório. Qual proxy concentra essa decisão?

A) Extração de proxy

B) Proxy dinâmico

C) Proxy assíncrono

D) Adapter

E) Proxy remoto

**Gabarito: C.** Proxy assíncrono: intermediário que delega a execução do trabalho a outra thread no exemplo apresentado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 128–129 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Intermediário que reutiliza resultados armazenados para evitar buscas repetidas no serviço encapsulado.”?

A) Proxy de cache

B) Proxy dinâmico

C) Extração de proxy

D) Proxy de repetição de tentativas

E) Proxy assíncrono

**Gabarito: A.** Proxy de cache: intermediário que reutiliza resultados armazenados para evitar buscas repetidas no serviço encapsulado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 129–130 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Consultas por um identificador já recuperado são respondidas por uma memória local antes de acessar o DAO. Qual envoltório é responsável por esse reaproveitamento?

A) Decorator

B) Adapter

C) Proxy de cache

D) Proxy de repetição de tentativas

E) Extração de proxy

**Gabarito: C.** Proxy de cache: intermediário que reutiliza resultados armazenados para evitar buscas repetidas no serviço encapsulado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 129–130 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Intermediário que repete chamadas quando ocorrem falhas previstas, conforme um limite definido.”?

A) Adapter

B) Proxy de repetição de tentativas

C) Extração de proxy

D) Proxy assíncrono

E) Proxy virtual

**Gabarito: B.** Proxy de repetição de tentativas: intermediário que repete chamadas quando ocorrem falhas previstas, conforme um limite definido.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 131–132 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Uma integração instável deve tentar novamente algumas vezes sem espalhar essa lógica pelos clientes. Qual envoltório concentra esse comportamento?

A) Proxy virtual

B) Proxy de proteção

C) Proxy remoto

D) Proxy dinâmico

E) Proxy de repetição de tentativas

**Gabarito: E.** Proxy de repetição de tentativas: intermediário que repete chamadas quando ocorrem falhas previstas, conforme um limite definido.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 131–132 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Refatoração que introduz um envoltório delegador e transfere para ele responsabilidades separáveis do objeto original.”?

A) Adapter

B) Proxy remoto

C) Proxy de cache

D) Proxy virtual

E) Extração de proxy

**Gabarito: E.** Extração de proxy: refatoração que introduz um envoltório delegador e transfere para ele responsabilidades separáveis do objeto original.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 132–135 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Auditoria está misturada à lógica de negócio e deve ser movida para uma classe que preserve as chamadas dos clientes. Qual refatoração aplicar?

A) Proxy dinâmico

B) Proxy de repetição de tentativas

C) Extração de proxy

D) Proxy de cache

E) Adapter

**Gabarito: C.** Extração de proxy: refatoração que introduz um envoltório delegador e transfere para ele responsabilidades separáveis do objeto original.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 132–135 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Envolvendo Objetos” em Guerra, qual conceito corresponde à descrição: “Objeto que traduz uma interface existente para outra esperada pelo cliente.”?

A) Proxy virtual

B) Adapter

C) Extração de proxy

D) Proxy remoto

E) Proxy de proteção

**Gabarito: B.** Adapter: objeto que traduz uma interface existente para outra esperada pelo cliente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 135–140 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma biblioteca fornece um método incompatível com o contrato usado pelo sistema, e uma classe traduz chamadas e resultados entre ambos. Qual padrão realiza essa compatibilização?

A) Proxy de proteção

B) Extração de proxy

C) Proxy dinâmico

D) Proxy assíncrono

E) Adapter

**Gabarito: E.** Adapter: objeto que traduz uma interface existente para outra esperada pelo cliente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 5: Envolvendo Objetos, páginas 135–140 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
