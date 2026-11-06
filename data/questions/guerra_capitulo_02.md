# Guerra — capítulo 2: Reuso Através de Herança

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_02.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Objeto polimórfico que oferece comportamento adequado à ausência de um valor, evitando verificações de null espalhadas.”?

A) Método abstract

B) Método protected

C) Método final

D) Fixação da especialização na instanciação

E) Null Object

**Gabarito: E.** Null Object: objeto polimórfico que oferece comportamento adequado à ausência de um valor, evitando verificações de null espalhadas.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 43–46 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Na ausência de carrinho, um objeto compatível retorna quantidade e valor zero, sem exigir if em cada cliente. Qual padrão foi aplicado?

A) Null Object

B) Fixação da especialização na instanciação

C) Factory Method

D) Hook Method

E) Método final

**Gabarito: A.** Null Object: objeto polimórfico que oferece comportamento adequado à ausência de um valor, evitando verificações de null espalhadas.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 43–46 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Método chamado pela lógica da superclasse cuja sobrescrita oferece um ponto de extensão.”?

A) Fixação da especialização na instanciação

B) Método protected

C) Hook Method

D) Extração das diferenças entre algoritmos

E) Método final

**Gabarito: C.** Hook Method: método chamado pela lógica da superclasse cuja sobrescrita oferece um ponto de extensão.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 47–49 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

A superclasse conduz a operação e chama um método que a subclasse pode especializar. Como se chama esse ponto de extensão?

A) Extração das diferenças entre algoritmos

B) Método final

C) Factory Method

D) Hook Method

E) Método abstract

**Gabarito: D.** Hook Method: método chamado pela lógica da superclasse cuja sobrescrita oferece um ponto de extensão.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 47–49 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Método sem implementação que exige concretização em uma subclasse instanciável.”?

A) Fixação da especialização na instanciação

B) Método abstract

C) Factory Method

D) Null Object

E) Template Method

**Gabarito: B.** Método abstract: método sem implementação que exige concretização em uma subclasse instanciável.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Uma operação da classe base não possui lógica padrão e toda subclasse concreta precisa implementá-la. Qual modificador expressa essa obrigação em Java?

A) Hook Method

B) Fixação da especialização na instanciação

C) Método abstract

D) Template Method

E) Null Object

**Gabarito: C.** Método abstract: método sem implementação que exige concretização em uma subclasse instanciável.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Método cuja sobrescrita pelas subclasses é impedida.”?

A) Método final

B) Método protected

C) Extração das diferenças entre algoritmos

D) Null Object

E) Factory Method

**Gabarito: A.** Método final: método cuja sobrescrita pelas subclasses é impedida.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

A ordem de uma operação deve ficar protegida contra redefinição nas subclasses. Qual modificador aplicar ao método que controla essa ordem?

A) Hook Method

B) Template Method

C) Método final

D) Fixação da especialização na instanciação

E) Método abstract

**Gabarito: C.** Método final: método cuja sobrescrita pelas subclasses é impedida.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Membro acessível a subclasses e também às classes do mesmo pacote no modelo de acesso Java.”?

A) Método protected

B) Template Method

C) Hook Method

D) Null Object

E) Distinção entre gancho e template

**Gabarito: A.** Método protected: membro acessível a subclasses e também às classes do mesmo pacote no modelo de acesso Java.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

Um método de apoio deve estar disponível à especialização e às classes do pacote, sem integrar a API pública. Qual modificador se adequa a esse acesso?

A) Template Method

B) Método protected

C) Factory Method

D) Hook Method

E) Método final

**Gabarito: B.** Método protected: membro acessível a subclasses e também às classes do mesmo pacote no modelo de acesso Java.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 49–50 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Padrão que fixa o esqueleto de um algoritmo na superclasse e permite variar passos em subclasses.”?

A) Factory Method

B) Método final

C) Template Method

D) Null Object

E) Método protected

**Gabarito: C.** Template Method: padrão que fixa o esqueleto de um algoritmo na superclasse e permite variar passos em subclasses.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 50–56 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Importadores seguem sempre ler, interpretar e gravar, mas diferem na interpretação. Qual padrão conserva a sequência e especializa seus passos?

A) Método protected

B) Método abstract

C) Factory Method

D) Template Method

E) Null Object

**Gabarito: D.** Template Method: padrão que fixa o esqueleto de um algoritmo na superclasse e permite variar passos em subclasses.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 50–56 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Separação entre um ponto de extensão isolado e a organização de um algoritmo em passos variáveis.”?

A) Método final

B) Null Object

C) Método protected

D) Extração das diferenças entre algoritmos

E) Distinção entre gancho e template

**Gabarito: E.** Distinção entre gancho e template: separação entre um ponto de extensão isolado e a organização de um algoritmo em passos variáveis.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 52 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Uma classe tem apenas um método sobrescrevível, sem definir um algoritmo em etapas. Que distinção impede concluir automaticamente que ela implementa Template Method?

A) Método abstract

B) Método final

C) Método protected

D) Factory Method

E) Distinção entre gancho e template

**Gabarito: E.** Distinção entre gancho e template: separação entre um ponto de extensão isolado e a organização de um algoritmo em passos variáveis.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 52 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Refatoração que isola trechos variáveis em métodos antes de elevar o fluxo comum à superclasse.”?

A) Factory Method

B) Método abstract

C) Método final

D) Null Object

E) Extração das diferenças entre algoritmos

**Gabarito: E.** Extração das diferenças entre algoritmos: refatoração que isola trechos variáveis em métodos antes de elevar o fluxo comum à superclasse.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 57–60 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

Duas rotinas quase iguais devem compartilhar uma estrutura base. Qual preparação localiza primeiro suas diferenças em métodos próprios?

A) Fixação da especialização na instanciação

B) Método protected

C) Hook Method

D) Extração das diferenças entre algoritmos

E) Null Object

**Gabarito: D.** Extração das diferenças entre algoritmos: refatoração que isola trechos variáveis em métodos antes de elevar o fluxo comum à superclasse.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 57–60 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Padrão que delega a subclasses a escolha do objeto concreto criado por um método.”?

A) Fixação da especialização na instanciação

B) Factory Method

C) Template Method

D) Método final

E) Extração das diferenças entre algoritmos

**Gabarito: B.** Factory Method: padrão que delega a subclasses a escolha do objeto concreto criado por um método.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 61–64 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Um serviço base precisa de um gerador de documento, mas cada especialização deve decidir qual implementação instanciar. Qual padrão atende a essa decisão?

A) Distinção entre gancho e template

B) Extração das diferenças entre algoritmos

C) Método protected

D) Factory Method

E) Fixação da especialização na instanciação

**Gabarito: D.** Factory Method: padrão que delega a subclasses a escolha do objeto concreto criado por um método.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 61–64 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Reuso Através de Herança” em Guerra, qual conceito corresponde à descrição: “Limitação da variação por herança em que os passos disponíveis ficam ligados à classe concreta escolhida.”?

A) Fixação da especialização na instanciação

B) Método final

C) Extração das diferenças entre algoritmos

D) Null Object

E) Método protected

**Gabarito: A.** Fixação da especialização na instanciação: limitação da variação por herança em que os passos disponíveis ficam ligados à classe concreta escolhida.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 55–56 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma instância deve trocar um passo depois de criada, mas o passo foi definido por sobrescrita na sua classe. Qual limitação dessa estratégia dificulta a troca?

A) Método protected

B) Fixação da especialização na instanciação

C) Distinção entre gancho e template

D) Método abstract

E) Extração das diferenças entre algoritmos

**Gabarito: B.** Fixação da especialização na instanciação: limitação da variação por herança em que os passos disponíveis ficam ligados à classe concreta escolhida.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 2: Reuso Através de Herança, páginas 55–56 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
