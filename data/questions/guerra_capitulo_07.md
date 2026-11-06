# Guerra — capítulo 7: Modularidade

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_07.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Fábrica que usa configuração ou metadados para selecionar e criar implementações em execução.”?

A) Service Locator

B) Distinção entre busca e injeção

C) Dynamic Factory

D) Contêiner de injeção

E) Injeção por setter

**Gabarito: C.** Dynamic Factory: fábrica que usa configuração ou metadados para selecionar e criar implementações em execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 163–168 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Uma implementação nova deve ser escolhida por um arquivo de configuração, sem acrescentar um if ao código da fábrica. Qual estratégia apresentada permite isso?

A) Contêiner de injeção

B) Injeção por setter

C) Service Locator

D) Dynamic Factory

E) Dependency Injection

**Gabarito: D.** Dynamic Factory: fábrica que usa configuração ou metadados para selecionar e criar implementações em execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 163–168 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Informações que descrevem como a aplicação deve selecionar ou montar seus componentes.”?

A) Injeção por setter

B) Contêiner de injeção

C) Metadados de configuração

D) Distinção entre busca e injeção

E) ServiceLoader

**Gabarito: C.** Metadados de configuração: informações que descrevem como a aplicação deve selecionar ou montar seus componentes.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 165–166 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um arquivo informa o nome da classe que fornecerá uma interface do sistema. Como classificar esse dado usado para configurar a aplicação?

A) Contêiner de injeção

B) Service Locator

C) Injeção por setter

D) Metadados de configuração

E) Injeção por construtor

**Gabarito: D.** Metadados de configuração: informações que descrevem como a aplicação deve selecionar ou montar seus componentes.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 165–166 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Uso de informações de classe em execução para localizar e criar um tipo indicado dinamicamente.”?

A) ServiceLoader

B) Contêiner de injeção

C) Reflexão na instanciação

D) Injeção por construtor

E) Injeção por setter

**Gabarito: C.** Reflexão na instanciação: uso de informações de classe em execução para localizar e criar um tipo indicado dinamicamente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 166–168 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

O código lê o nome de uma classe e usa a representação Class correspondente para criar uma instância. Que recurso da linguagem suporta esse caminho?

A) ServiceLoader

B) Injeção por construtor

C) Distinção entre busca e injeção

D) Injeção por setter

E) Reflexão na instanciação

**Gabarito: E.** Reflexão na instanciação: uso de informações de classe em execução para localizar e criar um tipo indicado dinamicamente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 166–168 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Fornecimento externo das dependências de um objeto em vez de sua busca ou criação interna.”?

A) Reflexão na instanciação

B) Dependency Injection

C) ServiceLoader

D) Service Locator

E) Dynamic Factory

**Gabarito: B.** Dependency Injection: fornecimento externo das dependências de um objeto em vez de sua busca ou criação interna.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 169–175 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Um serviço recebe de fora o repositório que usará, sem construí-lo ou procurá-lo. Qual padrão está sendo aplicado?

A) Dependency Injection

B) Metadados de configuração

C) Distinção entre busca e injeção

D) Reflexão na instanciação

E) ServiceLoader

**Gabarito: A.** Dependency Injection: fornecimento externo das dependências de um objeto em vez de sua busca ou criação interna.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 169–175 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Fornecimento de uma dependência por um método de configuração após a criação do objeto.”?

A) Distinção entre busca e injeção

B) Metadados de configuração

C) Injeção por setter

D) Reflexão na instanciação

E) ServiceLoader

**Gabarito: C.** Injeção por setter: fornecimento de uma dependência por um método de configuração após a criação do objeto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 171–172 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

A composição é configurada pela chamada setProcessador em um objeto já criado. Qual modalidade de injeção é essa?

A) Service Locator

B) Metadados de configuração

C) ServiceLoader

D) Dynamic Factory

E) Injeção por setter

**Gabarito: E.** Injeção por setter: fornecimento de uma dependência por um método de configuração após a criação do objeto.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 171–172 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Fornecimento de dependências como argumentos na criação de uma instância.”?

A) Reflexão na instanciação

B) Distinção entre busca e injeção

C) Dynamic Factory

D) Injeção por construtor

E) ServiceLoader

**Gabarito: D.** Injeção por construtor: fornecimento de dependências como argumentos na criação de uma instância.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 172–173 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Um serviço exige a conexão no argumento de seu construtor e já nasce com esse colaborador configurado. Qual modalidade de injeção usa?

A) Injeção por construtor

B) Reflexão na instanciação

C) Metadados de configuração

D) Service Locator

E) Dynamic Factory

**Gabarito: A.** Injeção por construtor: fornecimento de dependências como argumentos na criação de uma instância.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 172–173 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Infraestrutura que interpreta configuração para criar objetos e conectar suas dependências.”?

A) Distinção entre busca e injeção

B) Contêiner de injeção

C) Reflexão na instanciação

D) ServiceLoader

E) Dynamic Factory

**Gabarito: B.** Contêiner de injeção: infraestrutura que interpreta configuração para criar objetos e conectar suas dependências.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 174–177 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Um arquivo descreve objetos e referências e uma infraestrutura realiza a montagem automaticamente. Que papel essa infraestrutura desempenha?

A) Contêiner de injeção

B) Dynamic Factory

C) Metadados de configuração

D) Service Locator

E) Distinção entre busca e injeção

**Gabarito: A.** Contêiner de injeção: infraestrutura que interpreta configuração para criar objetos e conectar suas dependências.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 174–177 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Serviço consultado pelo cliente para obter uma dependência por uma abstração de localização.”?

A) Reflexão na instanciação

B) Service Locator

C) Metadados de configuração

D) Injeção por setter

E) Injeção por construtor

**Gabarito: B.** Service Locator: serviço consultado pelo cliente para obter uma dependência por uma abstração de localização.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 177–179 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Uma classe precisa de um processador e o solicita explicitamente a um localizador. Qual padrão organiza essa obtenção?

A) Service Locator

B) Dynamic Factory

C) Injeção por construtor

D) Contêiner de injeção

E) Reflexão na instanciação

**Gabarito: A.** Service Locator: serviço consultado pelo cliente para obter uma dependência por uma abstração de localização.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 177–179 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Mecanismo Java usado no capítulo para descobrir provedores de serviço disponíveis no classpath.”?

A) Dependency Injection

B) Dynamic Factory

C) Reflexão na instanciação

D) Metadados de configuração

E) ServiceLoader

**Gabarito: E.** ServiceLoader: mecanismo Java usado no capítulo para descobrir provedores de serviço disponíveis no classpath.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 179–182 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

A inclusão de um JAR com a configuração de provedor permite descobrir implementações de uma interface. Qual mecanismo Java apresentado realiza essa descoberta?

A) Dependency Injection

B) ServiceLoader

C) Contêiner de injeção

D) Metadados de configuração

E) Injeção por setter

**Gabarito: B.** ServiceLoader: mecanismo Java usado no capítulo para descobrir provedores de serviço disponíveis no classpath.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 179–182 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Modularidade” em Guerra, qual conceito corresponde à descrição: “Diferença entre o cliente solicitar uma dependência ao localizador e recebê-la por configuração externa.”?

A) Metadados de configuração

B) Dependency Injection

C) Injeção por construtor

D) Dynamic Factory

E) Distinção entre busca e injeção

**Gabarito: E.** Distinção entre busca e injeção: diferença entre o cliente solicitar uma dependência ao localizador e recebê-la por configuração externa.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 183–184 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma solução chama o localizador dentro do cliente; outra recebe o colaborador no construtor. Que diferença central separa essas duas estratégias de modularidade?

A) Contêiner de injeção

B) Injeção por construtor

C) Injeção por setter

D) Distinção entre busca e injeção

E) Reflexão na instanciação

**Gabarito: D.** Distinção entre busca e injeção: diferença entre o cliente solicitar uma dependência ao localizador e recebê-la por configuração externa.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 7: Modularidade, páginas 183–184 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
