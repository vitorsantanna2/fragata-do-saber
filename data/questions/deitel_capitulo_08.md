# Deitel — capítulo 8: Classes e objetos: um exame mais profundo

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_08.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 8.3

Um campo private pode ser acessado diretamente por código de outra classe de primeiro nível sem mecanismo de acesso autorizado?

A) Somente se int.

B) Somente se final.

C) Não.

D) Sim, se houver um getter com outro nome.

E) Sim, sempre.

**Gabarito: C.** Private restringe acesso; a existência de getter não torna o campo público.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.3, páginas 287–288 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 8.4

Dentro de um método de instância, this referencia:

A) O chamador necessariamente.

B) O objeto atual.

C) A classe inteira sem instância.

D) O pacote.

E) A superclasse como objeto separado.

**Gabarito: B.** This permite qualificar membros e passar a referência atual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.4, páginas 287–288 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 8.5

No Java SE 8, `this(...)` em um construtor deve ser:

A) Sua primeira instrução explícita.

B) Repetida antes de cada atribuição.

C) Uma chamada fora da classe.

D) Sempre a última.

E) Declarada com tipo de retorno.

**Gabarito: A.** A chamada delega a outro construtor da mesma classe.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.5, páginas 289–293 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 8.5

Dois construtores podem ter o mesmo nome e parâmetros distintos?

A) Somente se static.

B) Não, o nome precisa variar.

C) Não, Java não tem sobrecarga.

D) Sim.

E) Somente se retornarem int.

**Gabarito: D.** Sobrecarga de construtores varia a lista de parâmetros.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.5, páginas 289–293 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Difícil — seção 8.6

Quando o compilador fornece um construtor padrão?

A) Quando a classe não declara construtor.

B) Somente se a classe for final.

C) Somente para enums públicos.

D) Sempre, mesmo com construtores explícitos.

E) Nunca.

**Gabarito: A.** Declarar um construtor elimina a geração automática daquele construtor padrão.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.6, páginas 294 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Difícil — seção 8.6

Declarar apenas `Produto(int codigo)` garante também `new Produto()` válido?

A) Somente se codigo for positivo.

B) Sim, sempre.

C) Sim, por promoção automática.

D) Somente em main.

E) Não, falta um construtor sem argumentos compatível.

**Gabarito: E.** O compilador não acrescenta construtor padrão quando já existe construtor declarado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.6, páginas 294 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 8.7

Por que validar dados também em setters?

A) Porque getters exigem alteração.

B) Porque o objeto pode ser modificado após sua construção.

C) Porque private torna os valores imutáveis.

D) Porque construtores nunca validam.

E) Porque todo setter é static.

**Gabarito: B.** As invariantes precisam ser preservadas ao longo da vida do objeto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.7, páginas 294 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 8.8

Uma classe Pedido contém uma referência a Endereco. Isso exemplifica:

A) Herança obrigatória.

B) Um tipo primitivo.

C) Recursão obrigatória.

D) Composição.

E) Sobrecarga.

**Gabarito: D.** A relação tem-um distingue-se da especialização é-um.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.8, páginas 295–296 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 8.9

Constantes de um enum são:

A) Instâncias nomeadas do próprio tipo enum.

B) Apenas int sem tipo.

C) Métodos abstratos obrigatórios.

D) Strings obrigatórias.

E) Variáveis locais de main.

**Gabarito: A.** Enums podem também possuir campos, métodos e construtores apropriados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.9, páginas 297–298 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 8.10

Um objeto sem referências alcançáveis torna-se normalmente:

A) Uma String.

B) Imutável.

C) Destruído imediatamente com garantia temporal.

D) Elegível para coleta de lixo.

E) Uma constante static.

**Gabarito: D.** Elegibilidade não garante o instante exato da recuperação da memória.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.10, páginas 299 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 8.10

Chamar `System.gc()` garante coleta imediata de um objeto específico?

A) Sim, pelo endereço do objeto.

B) Somente se public.

C) Não.

D) Somente de objetos String.

E) Sim, sempre.

**Gabarito: C.** A solicitação não fornece garantia de coleta imediata.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.10, páginas 299 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 8.11

Um campo static pertence conceitualmente:

A) A cada objeto com cópia independente.

B) Somente a construtores.

C) À classe, compartilhado entre suas instâncias no contexto da classe carregada.

D) A um parâmetro local.

E) A um arquivo de entrada.

**Gabarito: C.** Ele não é um campo de instância separado para cada objeto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.11, páginas 300–302 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 8.11

Se duas instâncias incrementam o mesmo contador static inicialmente zero uma vez cada, o valor sequencial final é:

A) 0.

B) 2.

C) 4.

D) 1.

E) Depende de cada cópia de instância.

**Gabarito: B.** O campo de classe é compartilhado; o cenário exclui concorrência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.11, páginas 300–302 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 8.12

Uma importação static permite referenciar diretamente:

A) Variáveis locais de outro método.

B) Membros estáticos acessíveis da classe importada.

C) Qualquer campo private externo.

D) Somente membros de instância.

E) Construtores como se fossem métodos.

**Gabarito: B.** Ela reduz a necessidade de qualificar nomes, sem mudar permissões.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.12, páginas 303 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Difícil — seção 8.13

Uma referência final para um objeto mutável impede necessariamente mudar o estado desse objeto?

A) Sim, congela todos os campos.

B) Sim, cria cópia profunda.

C) Somente em arrays.

D) Somente em ArrayList.

E) Não; impede reatribuir a referência.

**Gabarito: E.** Final na referência e imutabilidade do objeto são propriedades distintas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.13, páginas 304 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 8.13

Um campo de instância final deve receber atribuição válida:

A) Uma única vez conforme as regras de inicialização.

B) Somente por reflexão.

C) A cada iteração.

D) Em toda chamada de getter.

E) Após cada alteração do objeto.

**Gabarito: A.** A atribuição pode ocorrer na declaração ou na inicialização apropriada, como no construtor.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.13, páginas 304 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 8.14

Um membro sem modificador de acesso possui normalmente acesso:

A) Protected obrigatório.

B) Global entre módulos de rede.

C) Private.

D) De pacote.

E) Public.

**Gabarito: D.** Classes do mesmo pacote podem acessá-lo conforme as regras da linguagem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.14, páginas 305 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 8.15

Para representar precisamente o decimal textual 0.1 com BigDecimal, qual construção é adequada?

A) `new BigDecimal()`.

B) `new BigDecimal(0.1)` como garantia de valor decimal exato 0.1.

C) `BigDecimal.parse(0.1)`.

D) `new BigDecimal(true)`.

E) `new BigDecimal("0.1")`.

**Gabarito: E.** A string evita carregar a aproximação binária do literal double.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.15, páginas 306–307 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 8.15

Qual classe é usada no capítulo para cálculos decimais precisos?

A) Thread.

B) Float exclusivamente.

C) BigDecimal.

D) Scanner.

E) JFrame.

**Gabarito: C.** Precisão e arredondamento precisam ser tratados explicitamente conforme o cálculo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.15, páginas 306–307 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 8.2

Sobrescrever toString permite:

A) Eliminar o construtor.

B) Garantir igualdade por conteúdo.

C) Modificar o nome da classe.

D) Transformar o objeto em primitivo.

E) Definir uma representação textual do objeto.

**Gabarito: E.** Representação textual não substitui a implementação de equals.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 8, seção 8.2, páginas 283–286 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
