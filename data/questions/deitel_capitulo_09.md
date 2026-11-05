# Deitel — capítulo 9: Programação orientada a objetos: herança

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_09.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 9.2

A herança entre Cachorro e Animal representa idealmente:

A) Igualdade de todas as instâncias.

B) Uma associação sem tipos.

C) Uma relação tem-um apenas.

D) Uma relação é-um.

E) Uma composição obrigatória.

**Gabarito: D.** Uma instância da subclasse também é instância da superclasse.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.2, páginas 319–320 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 9.2

Java permite uma classe estender diretamente quantas classes?

A) Zero obrigatoriamente.

B) No máximo uma.

C) Qualquer quantidade.

D) Duas.

E) Uma para cada método.

**Gabarito: B.** Herança múltipla de classes difere da implementação de várias interfaces.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.2, páginas 319–320 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 9.2

Qual palavra-chave declara herança entre classes?

A) implements apenas.

B) import.

C) instanceof.

D) extends.

E) package.

**Gabarito: D.** Implements é usada para implementar interfaces.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.2, páginas 319–320 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 9.3

Um membro protected pode ser acessado por classes do mesmo pacote?

A) Não, somente pela própria classe.

B) Somente se int.

C) Sim.

D) Nunca.

E) Somente quando final.

**Gabarito: C.** Protected inclui acesso de pacote e regras adicionais para subclasses.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.3, páginas 321 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 9.3

Herança autoriza acesso direto da subclasse a campos private da superclasse?

A) Sim, sempre.

B) Somente se o nome coincidir.

C) Somente se static.

D) Sim, com qualquer import.

E) Não.

**Gabarito: E.** O acesso deve ocorrer por operações acessíveis apropriadas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.3, páginas 321 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 9.4

Uma subclasse pode sobrescrever um método de instância acessível para:

A) Trocar obrigatoriamente seu nome.

B) Especializar seu comportamento.

C) Transformar toda chamada em static.

D) Remover todas as restrições de acesso.

E) Alterar somente o tipo de seus parâmetros e manter a mesma assinatura.

**Gabarito: B.** Sobrescrita preserva a assinatura aplicável e respeita regras de retorno e acesso.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 9.4

A anotação @Override ajuda a:

A) Executar o método automaticamente.

B) Desativar validações.

C) Tornar um método private público.

D) Criar herança múltipla de classes.

E) Detectar quando um método não sobrescreve o esperado.

**Gabarito: E.** O compilador confere a relação de sobrescrita declarada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 9.4

Declarar método de mesmo nome, mas com parâmetros diferentes, normalmente caracteriza:

A) Sobrescrita daquela assinatura.

B) Coleta de lixo.

C) Composição obrigatória.

D) Herança múltipla.

E) Sobrecarga.

**Gabarito: E.** Alterar a lista de parâmetros distingue métodos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Difícil — seção 9.4

Uma sobrescrita pode reduzir public da superclasse para protected?

A) Sim, sempre.

B) Somente em classes final.

C) Sim, se houver @Override.

D) Somente se retornar int.

E) Não.

**Gabarito: E.** Não se pode restringir o acesso do método sobrescrito.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 9.4

Para chamar a implementação acessível da superclasse em uma sobrescrita, usa-se:

A) `super.metodo()`.

B) `this.super()`.

C) `Object.new()`.

D) `extends.metodo()`.

E) `parent::new`.

**Gabarito: A.** Super permite selecionar a implementação da superclasse.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 9.5

Construtores são herdados como métodos comuns?

A) Não.

B) Somente os public.

C) Sim, se a subclasse não declarar métodos.

D) Somente os sem argumentos.

E) Sim, todos.

**Gabarito: A.** A construção da subclasse encadeia chamadas apropriadas de construtores.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.5, páginas 338 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 9.5

No Java SE 8, uma chamada explícita `super(...)` no construtor deve aparecer:

A) Como primeira instrução explícita.

B) Depois de qualquer atribuição.

C) Fora da classe.

D) Sempre no final.

E) Em todos os métodos.

**Gabarito: A.** O encadeamento inicializa a parte correspondente à superclasse.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.5, páginas 338 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 9.5

Sem chamada explícita, o construtor da subclasse tenta chamar normalmente:

A) Nenhum construtor da superclasse.

B) O último construtor com parâmetros.

C) O construtor sem argumentos da superclasse.

D) O método toString.

E) Um construtor aleatório.

**Gabarito: C.** A chamada implícita exige que super() esteja disponível e acessível.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.5, páginas 338 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Difícil — seção 9.5

A superclasse só possui construtor com int. A subclasse omite super e this em seu construtor. O que pode ocorrer?

A) NullPointerException obrigatória.

B) Erro de compilação por inexistência de super() compatível.

C) Herança cancelada automaticamente.

D) Criação automática do argumento zero sempre.

E) Execução normal garantida.

**Gabarito: B.** É necessário encadear um construtor válido da superclasse.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.5, páginas 338 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 9.6

Qual classe é a raiz da hierarquia de classes Java?

A) System.

B) Object.

C) Class apenas.

D) Main.

E) String.

**Gabarito: B.** Classes herdam direta ou indiretamente de Object.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.6, páginas 339–340 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 9.6

A implementação padrão de Object.equals verifica, em essência:

A) Igualdade textual automática.

B) Tamanho em bytes.

C) Identidade de referência.

D) Ordem de criação.

E) Todos os campos por reflexão.

**Gabarito: C.** Comparação por conteúdo precisa de semântica apropriada na classe.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.6, páginas 339–340 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 9.6

Sobrescrever equals pode exigir coordenar qual método para coleções baseadas em hash?

A) main.

B) paintComponent.

C) compareAndSet.

D) hashCode.

E) finalize obrigatoriamente.

**Gabarito: D.** Objetos iguais segundo equals devem produzir o mesmo hashCode.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.6, páginas 339–340 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 9.4

Um método final da superclasse pode ser sobrescrito?

A) Somente com @Override.

B) Sim, se public.

C) Não.

D) Somente em outro pacote.

E) Sim, se tiver parâmetros iguais.

**Gabarito: C.** Final impede sobrescrita daquela operação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Difícil — seção 9.4

Métodos static são selecionados por sobrescrita dinâmica como métodos de instância?

A) Sim, pela última instância criada.

B) Sim, sempre.

C) Somente se final.

D) Não; podem ser ocultados, com seleção estática pertinente.

E) Somente em main.

**Gabarito: D.** Ocultação de métodos static e polimorfismo de instância são mecanismos distintos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.4, páginas 322–337 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 9.2

Herança deve ser usada apenas para reutilizar código, sem respeitar a relação de substituição do domínio?

A) Não; a especialização precisa ser conceitualmente adequada.

B) Sim, se as classes têm o mesmo número de campos.

C) Sim, mesmo entre tipos incompatíveis.

D) Não, porque reutilização é proibida.

E) Sim, qualquer compartilhamento justifica extends.

**Gabarito: A.** Composição pode ser mais apropriada quando a relação não é é-um.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 9, seção 9.2, páginas 319–320 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
