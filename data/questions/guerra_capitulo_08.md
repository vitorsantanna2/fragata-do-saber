# Guerra — capítulo 8: Adicionando Operações

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Engenharia de Software. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/guerra_capitulo_08.sql) · [Índice](guerra_README.md)

## 1. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Padrão que representa uma operação por um objeto com uma interface de execução.”?

A) Command

B) Visitor

C) Execução remota de comandos

D) Desfazer e refazer

E) Injeção de dados no comando

**Gabarito: A.** Command: padrão que representa uma operação por um objeto com uma interface de execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 187–194 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

Uma ação deve ser armazenada e passada a outro componente para execução posterior. Qual padrão transforma a operação em objeto?

A) Persistência de comandos

B) Desfazer e refazer

C) Command

D) Custo de adicionar tipos de elemento

E) Double Dispatch

**Gabarito: C.** Command: padrão que representa uma operação por um objeto com uma interface de execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 187–194 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Organização em que o componente que dispara a operação depende da abstração do comando e não de sua implementação concreta.”?

A) Visitor

B) Separação entre invocador e comando

C) Persistência de comandos

D) Desfazer e refazer

E) Custo de adicionar tipos de elemento

**Gabarito: B.** Separação entre invocador e comando: organização em que o componente que dispara a operação depende da abstração do comando e não de sua implementação concreta.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 188–190 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um botão apenas chama executar e não conhece os detalhes da ação associada. Que separação de responsabilidades permite essa configuração?

A) Separação entre invocador e comando

B) Execução remota de comandos

C) Injeção de dados no comando

D) Desfazer e refazer

E) Visitor

**Gabarito: A.** Separação entre invocador e comando: organização em que o componente que dispara a operação depende da abstração do comando e não de sua implementação concreta.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 188–190 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Fornecimento do contexto necessário à operação por contratos de configuração.”?

A) Execução remota de comandos

B) Composição de comandos

C) Persistência de comandos

D) Injeção de dados no comando

E) Desfazer e refazer

**Gabarito: D.** Injeção de dados no comando: fornecimento do contexto necessário à operação por contratos de configuração.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 190–193 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Comandos adicionais precisam receber os produtos de um carrinho sem receber acesso irrestrito a toda sua implementação. Que estratégia fornece os dados necessários por contratos específicos?

A) Persistência de comandos

B) Desfazer e refazer

C) Composição de comandos

D) Separação entre invocador e comando

E) Injeção de dados no comando

**Gabarito: E.** Injeção de dados no comando: fornecimento do contexto necessário à operação por contratos de configuração.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 190–193 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Montagem de operações maiores a partir de objetos que representam ações menores.”?

A) Persistência de comandos

B) Double Dispatch

C) Visitor

D) Composição de comandos

E) Custo de adicionar tipos de elemento

**Gabarito: D.** Composição de comandos: montagem de operações maiores a partir de objetos que representam ações menores.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 193–194 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Uma sequência de ações deve ser tratada como uma operação executável única, preservando seus passos configurados. Que combinação dos objetos de operação usar?

A) Desfazer e refazer

B) Composição de comandos

C) Injeção de dados no comando

D) Execução remota de comandos

E) Custo de adicionar tipos de elemento

**Gabarito: B.** Composição de comandos: montagem de operações maiores a partir de objetos que representam ações menores.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 193–194 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Envio de operações representadas por objetos para execução em outro ambiente.”?

A) Command

B) Separação entre invocador e comando

C) Execução remota de comandos

D) Double Dispatch

E) Composição de comandos

**Gabarito: C.** Execução remota de comandos: envio de operações representadas por objetos para execução em outro ambiente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 195–197 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

O servidor expõe uma entrada geral que recebe diferentes objetos de operação enviados pelo cliente. Que cenário de aplicação de Command está sendo usado?

A) Custo de adicionar tipos de elemento

B) Visitor

C) Execução remota de comandos

D) Command

E) Separação entre invocador e comando

**Gabarito: C.** Execução remota de comandos: envio de operações representadas por objetos para execução em outro ambiente.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 195–197 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Registro de operações para posterior reaplicação, como na reconstrução de um estado.”?

A) Composição de comandos

B) Separação entre invocador e comando

C) Visitor

D) Persistência de comandos

E) Command

**Gabarito: D.** Persistência de comandos: registro de operações para posterior reaplicação, como na reconstrução de um estado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 197–198 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

O sistema grava as operações realizadas e mais tarde as reaplica para reconstruir os dados em memória. Qual uso dos comandos permite essa recuperação?

A) Composição de comandos

B) Double Dispatch

C) Separação entre invocador e comando

D) Visitor

E) Persistência de comandos

**Gabarito: E.** Persistência de comandos: registro de operações para posterior reaplicação, como na reconstrução de um estado.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 197–198 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Suporte a reversão e reaplicação de operações por comandos e histórico de execução.”?

A) Desfazer e refazer

B) Double Dispatch

C) Custo de adicionar tipos de elemento

D) Composição de comandos

E) Command

**Gabarito: A.** Desfazer e refazer: suporte a reversão e reaplicação de operações por comandos e histórico de execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 198–200 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Um editor mantém pilhas de ações feitas e desfeitas para voltar e avançar no histórico. Que capacidade a representação das operações permite implementar?

A) Desfazer e refazer

B) Command

C) Composição de comandos

D) Custo de adicionar tipos de elemento

E) Separação entre invocador e comando

**Gabarito: A.** Desfazer e refazer: suporte a reversão e reaplicação de operações por comandos e histórico de execução.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 198–200 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Colaboração com duas chamadas polimórficas que permite selecionar comportamento considerando dois tipos de objetos.”?

A) Composição de comandos

B) Separação entre invocador e comando

C) Execução remota de comandos

D) Command

E) Double Dispatch

**Gabarito: E.** Double Dispatch: colaboração com duas chamadas polimórficas que permite selecionar comportamento considerando dois tipos de objetos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 200–205 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

O produto chama de volta um método específico do processador, permitindo que a operação considere tanto o tipo do produto quanto o do processador. Qual técnica é essa?

A) Persistência de comandos

B) Command

C) Composição de comandos

D) Double Dispatch

E) Separação entre invocador e comando

**Gabarito: D.** Double Dispatch: colaboração com duas chamadas polimórficas que permite selecionar comportamento considerando dois tipos de objetos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 200–205 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Padrão que organiza operações em visitantes para elementos de uma hierarquia, usando despacho conforme seus tipos.”?

A) Command

B) Visitor

C) Composição de comandos

D) Persistência de comandos

E) Separação entre invocador e comando

**Gabarito: B.** Visitor: padrão que organiza operações em visitantes para elementos de uma hierarquia, usando despacho conforme seus tipos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 205–217 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Uma estrutura de elementos estável precisa receber novas operações de exportação sem colocar cada exportador dentro de cada elemento. Qual padrão ajuda a separar essas operações?

A) Execução remota de comandos

B) Persistência de comandos

C) Visitor

D) Command

E) Separação entre invocador e comando

**Gabarito: C.** Visitor: padrão que organiza operações em visitantes para elementos de uma hierarquia, usando despacho conforme seus tipos.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 205–217 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Adicionando Operações” em Guerra, qual conceito corresponde à descrição: “Necessidade de atualizar contratos e implementações de visitantes quando surge uma nova categoria visitável no Visitor clássico.”?

A) Command

B) Composição de comandos

C) Desfazer e refazer

D) Execução remota de comandos

E) Custo de adicionar tipos de elemento

**Gabarito: E.** Custo de adicionar tipos de elemento: necessidade de atualizar contratos e implementações de visitantes quando surge uma nova categoria visitável no Visitor clássico.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 211–213 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

Uma equipe acrescenta um novo elemento à hierarquia e precisa criar sua operação em todos os visitantes. Que compromisso do Visitor clássico aparece nessa mudança?

A) Persistência de comandos

B) Custo de adicionar tipos de elemento

C) Execução remota de comandos

D) Desfazer e refazer

E) Command

**Gabarito: B.** Custo de adicionar tipos de elemento: necessidade de atualizar contratos e implementações de visitantes quando surge uma nova categoria visitável no Visitor clássico.

**Fonte:** GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido). Capítulo 8: Adicionando Operações, páginas 211–213 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
