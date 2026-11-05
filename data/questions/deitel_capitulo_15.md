# Deitel — capítulo 15: Arquivos, fluxos e serialização de objetos

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_15.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 15.2

Fluxos de bytes são adequados para:

A) Somente números decimais em texto.

B) Somente caracteres ASCII.

C) Conteúdo binário.

D) Apenas strings imutáveis.

E) Exclusivamente arquivos Java.

**Gabarito: C.** Fluxos de caracteres tratam texto com semântica de codificação apropriada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.2, páginas 543 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 15.2

Reader e Writer são abstrações de:

A) Threads.

B) Entrada e saída de caracteres.

C) Somente conexões JDBC.

D) Interfaces gráficas.

E) Coleções genéricas.

**Gabarito: B.** São diferentes das abstrações básicas de fluxo de bytes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.2, páginas 543 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 15.3

Qual interface NIO representa um caminho de arquivo?

A) ResultSet.

B) Map.

C) Thread.

D) JFrame.

E) Path.

**Gabarito: E.** Um caminho não garante que o arquivo correspondente exista.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.3, páginas 544–546 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 15.3

Qual classe fornece operações como verificar existência de um caminho?

A) Files.

B) SystemColor.

C) Math.

D) Pattern.

E) Collections.

**Gabarito: A.** Files reúne operações utilitárias do sistema de arquivos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.3, páginas 544–546 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 15.3

Criar um objeto Path cria automaticamente o arquivo?

A) Somente se absoluto.

B) Somente para .txt.

C) Sim, sempre.

D) Sim, se o nome for válido.

E) Não.

**Gabarito: E.** Representação de caminho e criação física são operações distintas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.3, páginas 544–546 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 15.4

Scanner pode ler tokens a partir de:

A) Uma fonte de texto, inclusive arquivo.

B) Somente bytecode.

C) Apenas ResultSet.

D) Somente array de boolean.

E) Somente teclado.

**Gabarito: A.** A API aceita fontes de entrada compatíveis.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.4, páginas 547–554 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 15.4

Formatter é usado principalmente para:

A) Sincronizar threads.

B) Ordenar diretórios.

C) Desserializar objetos.

D) Produzir saída textual formatada.

E) Compilar classes.

**Gabarito: D.** A saída pode ser dirigida a destinos suportados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.4, páginas 547–554 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 15.4

Qual cuidado evita perder dados ainda em buffer de saída?

A) Fechar ou descarregar o fluxo adequadamente.

B) Importar java.lang.

C) Ordenar o arquivo.

D) Apenas remover a referência.

E) Chamar equals.

**Gabarito: A.** Flush e fechamento apropriado encaminham conteúdo pendente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.4, páginas 547–554 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 15.4

Um arquivo de texto inexistente ao tentar abri-lo para leitura pode provocar:

A) Erro de sintaxe.

B) Uma exceção aritmética.

C) Conversão em String vazia sempre.

D) Criação obrigatória com conteúdo padrão.

E) Uma exceção de entrada/saída apropriada.

**Gabarito: E.** O programa precisa tratar falhas de acesso conforme a API usada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.4, páginas 547–554 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 15.4

Leitura sequencial significa principalmente:

A) Ler somente números.

B) Processar os dados na ordem do fluxo.

C) Eliminar exceções.

D) Impedir qualquer buffer.

E) Acessar qualquer registro sem percorrer anteriores por definição.

**Gabarito: B.** O fluxo avança durante o consumo das entradas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.4, páginas 547–554 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 15.5

Qual interface marca participação na serialização Java convencional?

A) ActionListener.

B) Comparable.

C) Serializable.

D) Runnable.

E) AutoCloseable apenas.

**Gabarito: C.** Ela não declara métodos a implementar.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 15.5

ObjectOutputStream é usado para:

A) Executar consultas SQL.

B) Gravar objetos na forma serializada.

C) Desenhar imagens.

D) Compilar objetos.

E) Somente ler teclas.

**Gabarito: B.** A escrita percorre o estado serializável correspondente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 15.5

ObjectInputStream é usado para:

A) Criar arquivos .java.

B) Executar main.

C) Enviar eventos Swing.

D) Ler objetos serializados.

E) Ordenar mapas.

**Gabarito: D.** ReadObject devolve referência que pode exigir verificação ou conversão de tipo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 15.5

Um campo transient é, na serialização padrão:

A) Omitido do estado serializado.

B) Transformado em static.

C) Sempre convertido em String.

D) Obrigatoriamente final.

E) Gravado duas vezes.

**Gabarito: A.** Após leitura, seu valor não é recuperado pela serialização padrão daquele campo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 15.5

Campos static compõem o estado de instância serializado pelo mecanismo padrão?

A) Somente se int.

B) Sim, sempre.

C) Não.

D) Somente se public.

E) Sim, um por objeto.

**Gabarito: C.** Campos static pertencem à classe, não a cada instância.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 15.5

Uma referência não serializável alcançada pela serialização padrão, sem exclusão ou tratamento próprio, pode causar:

A) Compilação automática.

B) Conversão obrigatória em texto.

C) ArithmeticException.

D) NotSerializableException.

E) Apenas um valor null sem aviso.

**Gabarito: D.** O grafo de objetos precisa respeitar os requisitos de serialização.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 15.5

Duas referências compartilhadas ao mesmo objeto podem ser preservadas pela serialização no mesmo fluxo?

A) Somente se todos os campos forem static.

B) Não, sempre cria cópia independente por referência.

C) Somente para int.

D) Não, referências não são serializadas.

E) Sim, o mecanismo acompanha identidades no grafo.

**Gabarito: E.** Serialização não é apenas imprimir cada campo isoladamente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.5, páginas 555–560 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 15.6

JFileChooser fornece principalmente:

A) Autorização administrativa.

B) Serialização obrigatória.

C) Uma interface de seleção de arquivos.

D) Compilação dos arquivos.

E) Leitura automática de todo conteúdo.

**Gabarito: C.** Escolher um arquivo é diferente de abri-lo e processar seus dados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.6, páginas 561–563 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 15.7

BufferedReader acrescenta principalmente:

A) Serialização automática.

B) Bufferização para leitura de caracteres.

C) Mudança do sistema de arquivos.

D) Criptografia obrigatória.

E) Execução paralela garantida.

**Gabarito: B.** O buffer pode reduzir operações de acesso à fonte subjacente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.7, páginas 564–565 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 15.7

Qual diferença conceitual entre fim do arquivo e falha de leitura?

A) Fim reinicia automaticamente a leitura.

B) Falha sempre retorna uma linha válida.

C) Ambos sempre são a mesma IOException.

D) Fim é condição esperada de término; falha indica problema na operação.

E) Fim sempre corrompe o arquivo.

**Gabarito: D.** A API específica determina como sinaliza essas situações.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 15, seção 15.7, páginas 564–565 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
