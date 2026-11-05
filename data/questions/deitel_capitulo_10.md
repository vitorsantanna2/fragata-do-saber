# Deitel — capítulo 10: Programação orientada a objetos: polimorfismo e interfaces

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_10.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 10.3

Uma referência de superclasse aponta para objeto de subclasse. Qual implementação sobrescrita de instância é chamada?

A) A do último objeto criado.

B) A correspondente ao tipo real do objeto.

C) Nenhuma.

D) Sempre a da superclasse declarada.

E) A de qualquer classe do pacote.

**Gabarito: B.** A vinculação dinâmica seleciona o comportamento do objeto real.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.3, páginas 349–350 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Difícil — seção 10.3

A referência tem tipo Animal e o objeto real é Gato. O compilador permite chamar diretamente qualquer método exclusivo de Gato?

A) Somente se o método retornar int.

B) Sim, se o objeto foi criado com new.

C) Não, o acesso depende do tipo declarado da expressão.

D) Sim, sempre pelo tipo real.

E) Somente em main.

**Gabarito: C.** A seleção dinâmica não elimina a verificação estática de membros disponíveis.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.3, páginas 349–350 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 10.4

Uma classe abstrata pode ser instanciada diretamente com new?

A) Sim, se tiver construtor.

B) Somente se pública.

C) Sim, sempre.

D) Não.

E) Somente sem parâmetros.

**Gabarito: D.** Classes concretas derivadas podem ser instanciadas quando adequadamente implementadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.4, páginas 351–352 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 10.4

Um método abstrato declara principalmente:

A) Um campo constante.

B) Uma operação sem implementação naquele ponto.

C) Uma instrução import.

D) Um construtor.

E) Um método static obrigatório.

**Gabarito: B.** Subclasses concretas precisam cumprir as implementações abstratas exigidas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.4, páginas 351–352 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 10.4

Uma classe abstrata pode conter métodos concretos?

A) Somente main.

B) Somente getters.

C) Sim.

D) Não, somente abstratos.

E) Não, exceto em interfaces.

**Gabarito: C.** Abstração não impede implementação compartilhada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.4, páginas 351–352 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 10.4

Uma classe abstrata pode ter construtores?

A) Sim, tornando-a diretamente instanciável.

B) Somente com retorno void.

C) Somente construtores static.

D) Sim, usados na inicialização das subclasses.

E) Não.

**Gabarito: D.** Possuir construtor não elimina a proibição de instanciar diretamente uma classe abstrata.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.4, páginas 351–352 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 10.4

Uma subclasse que não implementa todos os métodos abstratos herdados deve, em regra:

A) Ser removida do pacote.

B) Transformá-los em campos.

C) Continuar abstrata.

D) Tornar-se final obrigatoriamente.

E) Ignorar os métodos.

**Gabarito: C.** Uma classe concreta precisa cumprir o contrato abstrato aplicável.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.4, páginas 351–352 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 10.6

Atribuir objeto de subclasse a uma referência de superclasse exige normalmente cast explícito?

A) Somente quando public.

B) Não.

C) Sim, sempre.

D) Somente para Object.

E) Sim, por perda de identidade.

**Gabarito: B.** O alargamento de referência é permitido pelo relacionamento de tipos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.6, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Difícil — seção 10.6

Um downcast incompatível com o objeto real pode lançar:

A) IOException.

B) ArithmeticException.

C) Nenhuma exceção.

D) StackOverflowError sempre.

E) ClassCastException.

**Gabarito: E.** O cast não transforma o objeto em outra classe.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.6, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 10.6

O teste `obj instanceof Tipo` pode ajudar a:

A) Verificar compatibilidade antes de um cast.

B) Apagar a referência.

C) Copiar seus campos.

D) Modificar a classe real do objeto.

E) Executar seu construtor.

**Gabarito: A.** O teste examina o objeto sem convertê-lo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.6, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 10.6

Para `obj=null`, `obj instanceof String` resulta em:

A) Erro de compilação sempre.

B) false.

C) NullPointerException.

D) ClassCastException.

E) true.

**Gabarito: B.** Instanceof com referência nula não identifica uma instância do tipo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.6, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 10.7

Uma classe final pode ser estendida?

A) Sim, se pública.

B) Sim, por uma classe abstrata.

C) Somente no mesmo arquivo.

D) Somente com construtor sem argumentos.

E) Não.

**Gabarito: E.** Final na classe impede subclasses.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.7, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 10.7

Um método final impede necessariamente sobrecarga de seu nome com outros parâmetros?

A) Não; sobrecarga e sobrescrita são distintas.

B) Sim, pois todos os parâmetros ficam finais.

C) Não, porque ele vira abstrato.

D) Somente se public.

E) Sim, qualquer método homônimo é proibido.

**Gabarito: A.** Final protege a sobrescrita da assinatura, não todo uso do nome.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.7, páginas 365 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 10.9

Qual palavra-chave faz uma classe cumprir uma interface?

A) instanceof.

B) package.

C) extends como única opção.

D) import.

E) implements.

**Gabarito: E.** Uma classe pode implementar mais de uma interface.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.9, páginas 366–374 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 10.9

Uma variável de interface pode referenciar objeto de classe que a implementa?

A) Sim.

B) Somente se o objeto for String.

C) Não.

D) Não, interfaces são primitivas.

E) Somente se a interface tiver campos.

**Gabarito: A.** Esse uso permite processamento polimórfico por contrato.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.9, páginas 366–374 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 10.9

Campos declarados em interfaces Java SE 8 são implicitamente:

A) public static final.

B) Abstratos e mutáveis.

C) Locais.

D) private de instância.

E) protected volatile.

**Gabarito: A.** Interfaces não possuem campos de instância comuns.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.9, páginas 366–374 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 10.10

Qual recurso do Java SE 8 permite implementação de método de instância em interface?

A) Construtor público.

B) Herança múltipla de classes.

C) Campo não final.

D) Método default.

E) Um método private de interface como recurso do Java 8.

**Gabarito: D.** Default introduz implementação herdável com regras de resolução próprias.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.10, páginas 375 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Difícil — seção 10.10

Uma classe implementa duas interfaces com defaults conflitantes da mesma assinatura. Normalmente precisa:

A) Executar ambos automaticamente.

B) Excluir todas as interfaces.

C) Escolher aleatoriamente uma delas.

D) Resolver o conflito por implementação apropriada.

E) Transformar-se em String.

**Gabarito: D.** A linguagem não aceita ambiguidade de defaults não resolvida.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.10, páginas 375 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 10.10

Métodos static de uma interface Java SE 8 devem ser chamados normalmente pelo:

A) Nome de qualquer implementadora como herança automática.

B) Objeto como método herdado de instância.

C) Nome da interface que os declara.

D) Construtor da interface.

E) Super sem qualificação em qualquer classe.

**Gabarito: C.** Métodos estáticos de interface não são herdados como métodos de instância.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.10, páginas 375 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 10.5

Um laço chama calcular() em objetos concretos diferentes pelo mesmo tipo abstrato. Isso ilustra:

A) Ausência de tipos.

B) Conversão para primitivos.

C) Sobrecarga obrigatória.

D) Herança múltipla de classes.

E) Polimorfismo.

**Gabarito: E.** O mesmo contrato pode produzir comportamento especializado por objeto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 10, seção 10.5, páginas 353–364 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
