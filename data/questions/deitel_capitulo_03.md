# Deitel — capítulo 3: Introdução a classes, objetos, métodos e strings

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_03.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 3.2

Declarar um campo private busca principalmente:

A) Transformá-lo em constante.

B) Torná-lo global.

C) Impedir qualquer uso por métodos da classe.

D) Controlar o acesso direto ao estado.

E) Criar cópias automáticas.

**Gabarito: D.** Métodos da própria classe podem ler e modificar o campo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.2, páginas 91–98 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 3.2

Um setter pode validar uma entrada antes de:

A) Atualizar o estado do objeto.

B) Alterar a sintaxe Java.

C) Apagar a classe.

D) Compilar a JVM.

E) Criar um pacote.

**Gabarito: A.** A validação preserva regras do objeto por uma interface controlada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.2, páginas 91–98 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 3.2

Um getter convencional tem como finalidade:

A) Fornecer acesso a uma informação do objeto.

B) Criar sempre outra instância.

C) Encerrar a JVM.

D) Compilar um arquivo.

E) Garantir alteração de todos os campos.

**Gabarito: A.** O acesso pode ser controlado sem expor diretamente o campo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.2, páginas 91–98 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Fácil — seção 3.2

Dois objetos da mesma classe têm campos de instância:

A) Sempre estáticos.

B) Sem valor possível.

C) Necessariamente compartilhados.

D) Separados para cada objeto.

E) Sempre constantes.

**Gabarito: D.** Uma alteração em uma instância não altera automaticamente outra.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.2, páginas 91–98 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 3.3

Qual é um tipo primitivo Java?

A) String.

B) int.

C) Integer.

D) Object.

E) Scanner.

**Gabarito: B.** Integer é a classe empacotadora correspondente a int.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Fácil — seção 3.3

Uma variável String armazena conceitualmente:

A) Uma referência a objeto, ou null.

B) Um primitivo textual.

C) Um método.

D) Uma classe inteira por cópia.

E) Uma instrução import.

**Gabarito: A.** String é um tipo por referência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — seção 3.3

Qual valor inicial padrão de um campo int de instância?

A) null.

B) -1.

C) 0.

D) Indefinido.

E) 1.

**Gabarito: C.** Campos recebem valores padrão quando o objeto é inicializado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 3.3

Qual valor inicial padrão de um campo de referência?

A) Um objeto criado automaticamente.

B) Uma string vazia obrigatória.

C) false.

D) 0 como int.

E) null.

**Gabarito: E.** null indica ausência de referência a objeto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — seção 3.3

Uma variável local int pode ser lida sem inicialização definida?

A) Somente em main.

B) Não; o compilador exige atribuição definida.

C) Sim, recebe null.

D) Sim, recebe sempre zero.

E) Somente quando public.

**Gabarito: B.** Valores padrão de campos não se aplicam da mesma maneira a locais.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Fácil — seção 3.4

O nome de um construtor deve ser:

A) Qualquer nome com void.

B) Sempre main.

C) Igual ao pacote.

D) Igual ao nome da classe.

E) Sempre init.

**Gabarito: D.** Construtores não declaram tipo de retorno.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.4, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — seção 3.4

`void Produto()` dentro de Produto declara:

A) Uma interface.

B) Um método, não um construtor.

C) Uma classe abstrata.

D) Um campo.

E) Um construtor válido.

**Gabarito: B.** Declarar void muda a construção para um método comum.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.4, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Fácil — seção 3.4

Qual operador é normalmente usado para criar uma instância?

A) package.

B) extends.

C) new.

D) return.

E) import.

**Gabarito: C.** new inicia a criação e a chamada do construtor pertinente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.4, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — seção 3.4

Em `this.nome = nome`, this.nome identifica:

A) Sempre o parâmetro.

B) Uma variável de outra classe.

C) O nome do pacote.

D) Um campo estático obrigatório.

E) O campo do objeto atual.

**Gabarito: E.** this resolve o sombreamento pelo parâmetro de mesmo nome.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.4, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Fácil — seção 3.4

A principal responsabilidade de um construtor é:

A) Destruir outra instância.

B) Importar classes.

C) Inicializar o novo objeto.

D) Retornar obrigatoriamente um int.

E) Executar toda consulta do programa.

**Gabarito: C.** A inicialização pode também validar argumentos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.4, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — seção 3.5

Para `double saldo=2.5; saldo+=1.25;`, o novo saldo é:

A) Erro de compilação.

B) 4.0.

C) 2.5.

D) 3.75.

E) 1.25.

**Gabarito: D.** A atribuição composta acrescenta o valor ao estado atual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.5, páginas 101–104 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Fácil — seção 3.5

É adequado validar um depósito antes de alterar saldo?

A) Sim, mas apenas após apagar o saldo.

B) Não, setters não podem conter if.

C) Sim, para rejeitar valores incompatíveis com a regra do objeto.

D) Não, doubles não podem ser comparados.

E) Não, construtores substituem toda validação futura.

**Gabarito: C.** Regras de negócio precisam valer também nas atualizações.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.5, páginas 101–104 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — seção 3.3

Uma referência null usada para chamar método de instância causa normalmente:

A) NullPointerException.

B) Criação automática do objeto.

C) Erro de sintaxe obrigatório.

D) Retorno automático de zero.

E) Conversão em String vazia.

**Gabarito: A.** É necessário haver um objeto para a chamada de instância.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.3, páginas 99–100 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 3.2

Um método void pode usar `return;` para:

A) Alterar sua assinatura.

B) Converter-se em construtor.

C) Retornar um int implicitamente.

D) Criar o objeto atual.

E) Encerrar sua execução sem devolver valor.

**Gabarito: E.** O retorno sem expressão é compatível com void.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.2, páginas 91–98 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — seção 3.6

O que JOptionPane.showInputDialog retorna ao receber texto normalmente?

A) double sempre.

B) int sempre.

C) JFrame.

D) Scanner.

E) String.

**Gabarito: E.** A entrada textual precisa de conversão explícita se for usada como número.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.6, páginas 105–107 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Fácil — seção 3.6

String.format difere de printf porque:

A) Só aceita inteiros.

B) Retorna a string formatada.

C) Sempre imprime no terminal.

D) Retorna um Scanner.

E) Cria uma janela obrigatoriamente.

**Gabarito: B.** Formatar um valor não exige enviá-lo imediatamente à saída.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 3, seção 3.6, páginas 105–107 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
