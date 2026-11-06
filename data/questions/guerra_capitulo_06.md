# Guerra — capítulo 6: Estratégias de Criação de Objetos

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_06.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Dependência da classe concreta introduzida quando o cliente instancia diretamente sua implementação.”?

A) Singleton

B) Acoplamento na criação direta

C) Interface fluente

D) Fábricas com nomes distintos

E) Builder

**Gabarito: B.** Acoplamento na criação direta: dependência da classe concreta introduzida quando o cliente instancia diretamente sua implementação.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 143–145 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O restante do código usa uma interface, mas a instrução new continua citando a implementação concreta. Qual dependência permanece nesse ponto?

A) Acoplamento na criação direta

B) Static Factory Method

C) Builder

D) Abstract Factory

E) Singleton

**Gabarito: A.** Acoplamento na criação direta: dependência da classe concreta introduzida quando o cliente instancia diretamente sua implementação.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 143–145 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Métodos de criação nomeados que distinguem intenções mesmo quando os parâmetros têm os mesmos tipos.”?

A) Acoplamento na criação direta

B) Fábricas com nomes distintos

C) Singleton

D) Inicialização preguiçosa do singleton

E) Interface fluente

**Gabarito: B.** Fábricas com nomes distintos: métodos de criação nomeados que distinguem intenções mesmo quando os parâmetros têm os mesmos tipos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 144–146 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Duas formas de construir coordenadas recebem dois números, mas representam unidades diferentes. Que alternativa permite expor nomes claros para essas duas formas?

A) Builder

B) Fábricas com nomes distintos

C) Interface fluente

D) Inicialização preguiçosa do singleton

E) Abstract Factory

**Gabarito: B.** Fábricas com nomes distintos: métodos de criação nomeados que distinguem intenções mesmo quando os parâmetros têm os mesmos tipos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 144–146 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Método estático que encapsula a obtenção de uma instância e pode retornar uma abstração.”?

A) Interface fluente

B) Acoplamento na criação direta

C) Abstract Factory

D) Singleton

E) Static Factory Method

**Gabarito: E.** Static Factory Method: método estático que encapsula a obtenção de uma instância e pode retornar uma abstração.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 145–148 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

O cliente pede um objeto a um método estático em vez de invocar diretamente seu construtor. Como se chama essa estratégia de criação?

A) Inicialização preguiçosa do singleton

B) Interface fluente

C) Acoplamento ao acesso global

D) Singleton

E) Static Factory Method

**Gabarito: E.** Static Factory Method: método estático que encapsula a obtenção de uma instância e pode retornar uma abstração.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 145–148 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Possibilidade de a fábrica escolher uma classe concreta sem expor essa escolha na assinatura usada pelo cliente.”?

A) Retorno de implementação encapsulada

B) Interface fluente

C) Singleton

D) Builder

E) Inicialização preguiçosa do singleton

**Gabarito: A.** Retorno de implementação encapsulada: possibilidade de a fábrica escolher uma classe concreta sem expor essa escolha na assinatura usada pelo cliente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 146–148 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

A assinatura de criação retorna Processador, mas internamente a fábrica decide qual implementação concreta fornecer. Que possibilidade essa assinatura preserva?

A) Interface fluente

B) Inicialização preguiçosa do singleton

C) Acoplamento na criação direta

D) Retorno de implementação encapsulada

E) Singleton

**Gabarito: D.** Retorno de implementação encapsulada: possibilidade de a fábrica escolher uma classe concreta sem expor essa escolha na assinatura usada pelo cliente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 146–148 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Padrão que controla a criação para fornecer acesso a uma única instância da classe no escopo considerado.”?

A) Acoplamento na criação direta

B) Fábricas com nomes distintos

C) Interface fluente

D) Abstract Factory

E) Singleton

**Gabarito: E.** Singleton: padrão que controla a criação para fornecer acesso a uma única instância da classe no escopo considerado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 149–151 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Um serviço deve fornecer sempre a mesma instância por um ponto controlado de acesso. Qual padrão trata essa restrição de instanciação?

A) Singleton

B) Retorno de implementação encapsulada

C) Abstract Factory

D) Static Factory Method

E) Builder

**Gabarito: A.** Singleton: padrão que controla a criação para fornecer acesso a uma única instância da classe no escopo considerado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 149–151 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Criação da instância única apenas no primeiro acesso ao método que a fornece.”?

A) Interface fluente

B) Acoplamento ao acesso global

C) Builder

D) Inicialização preguiçosa do singleton

E) Static Factory Method

**Gabarito: D.** Inicialização preguiçosa do singleton: criação da instância única apenas no primeiro acesso ao método que a fornece.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 149–150 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

O objeto único não é criado na carga inicial, mas somente quando solicitado pela primeira vez. Qual política de inicialização foi escolhida?

A) Inicialização preguiçosa do singleton

B) Interface fluente

C) Acoplamento na criação direta

D) Fábricas com nomes distintos

E) Acoplamento ao acesso global

**Gabarito: A.** Inicialização preguiçosa do singleton: criação da instância única apenas no primeiro acesso ao método que a fornece.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 149–150 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Dependência introduzida quando clientes buscam diretamente um singleton conhecido em vez de receberem o colaborador.”?

A) Static Factory Method

B) Builder

C) Singleton

D) Interface fluente

E) Acoplamento ao acesso global

**Gabarito: E.** Acoplamento ao acesso global: dependência introduzida quando clientes buscam diretamente um singleton conhecido em vez de receberem o colaborador.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 150–151 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Uma classe chama getInstance de uma implementação fixa e se torna difícil substituí-la em testes. Qual consequência do ponto global de acesso merece atenção?

A) Inicialização preguiçosa do singleton

B) Interface fluente

C) Acoplamento ao acesso global

D) Retorno de implementação encapsulada

E) Static Factory Method

**Gabarito: C.** Acoplamento ao acesso global: dependência introduzida quando clientes buscam diretamente um singleton conhecido em vez de receberem o colaborador.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 150–151 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Objeto que reúne passos e configurações de uma construção complexa antes de fornecer o resultado.”?

A) Acoplamento na criação direta

B) Fábricas com nomes distintos

C) Builder

D) Acoplamento ao acesso global

E) Singleton

**Gabarito: C.** Builder: objeto que reúne passos e configurações de uma construção complexa antes de fornecer o resultado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 151–157 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

A criação de um gerador combina formato, transformações e envoltórios opcionais. Qual padrão pode reunir essa montagem em um colaborador próprio?

A) Retorno de implementação encapsulada

B) Builder

C) Fábricas com nomes distintos

D) Acoplamento na criação direta

E) Acoplamento ao acesso global

**Gabarito: B.** Builder: objeto que reúne passos e configurações de uma construção complexa antes de fornecer o resultado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 151–157 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “API cujos métodos encadeáveis permitem expressar configurações como uma sequência legível.”?

A) Static Factory Method

B) Singleton

C) Interface fluente

D) Inicialização preguiçosa do singleton

E) Fábricas com nomes distintos

**Gabarito: C.** Interface fluente: aPI cujos métodos encadeáveis permitem expressar configurações como uma sequência legível.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 153–157 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

O código de montagem usa chamadas como criar().comAuditoria().compactado().construir(). Que estilo de API permite essa escrita encadeada?

A) Retorno de implementação encapsulada

B) Singleton

C) Acoplamento na criação direta

D) Interface fluente

E) Fábricas com nomes distintos

**Gabarito: D.** Interface fluente: aPI cujos métodos encadeáveis permitem expressar configurações como uma sequência legível.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 153–157 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Estratégias de Criação de Objetos” em Guerra, qual conceito corresponde à descrição: “Abstração que cria produtos de uma família compatível sem exigir que clientes conheçam suas classes concretas.”?

A) Acoplamento ao acesso global

B) Acoplamento na criação direta

C) Retorno de implementação encapsulada

D) Abstract Factory

E) Inicialização preguiçosa do singleton

**Gabarito: D.** Abstract Factory: abstração que cria produtos de uma família compatível sem exigir que clientes conheçam suas classes concretas.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 157–160 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Cada operadora deve fornecer em conjunto remetente, receptor e configuração de SMS compatíveis. Qual padrão organiza a criação dessas famílias?

A) Singleton

B) Static Factory Method

C) Abstract Factory

D) Inicialização preguiçosa do singleton

E) Acoplamento na criação direta

**Gabarito: C.** Abstract Factory: abstração que cria produtos de uma família compatível sem exigir que clientes conheçam suas classes concretas.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 6: Estratégias de Criação de Objetos, páginas 157–160 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
