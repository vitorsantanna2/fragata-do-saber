# Deitel — capítulo 12: Componentes GUI: parte 1

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_12.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 12.3

JOptionPane.showInputDialog retorna normalmente:

A) Um JButton.

B) Um double automaticamente.

C) Um int automaticamente.

D) Uma exceção sempre.

E) Texto como String.

**Gabarito: E.** Entrada numérica exige análise posterior do texto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.3, páginas 411–412 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 12.3

Cancelar showInputDialog pode retornar:

A) null.

B) Sempre "0".

C) Um int negativo.

D) Um JFrame novo.

E) Sempre String vazia.

**Gabarito: A.** O programa precisa distinguir cancelamento e entrada fornecida.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.3, páginas 411–412 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 12.4

Swing pertence principalmente ao pacote:

A) java.sql.

B) java.net apenas.

C) javax.swing.

D) java.time.

E) java.nio.file.

**Gabarito: C.** Muitos componentes gráficos Swing estão nesse pacote.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.4, páginas 413 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 12.5

JFrame representa principalmente:

A) Uma lista genérica.

B) Um gerador aleatório.

C) Uma janela de nível superior.

D) Um campo de senha.

E) Um arquivo.

**Gabarito: C.** A janela pode conter painéis e outros componentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.5, páginas 414–417 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 12.5

JLabel é usado principalmente para:

A) Gerenciar threads.

B) Receber qualquer texto editável por padrão.

C) Ler arquivos binários.

D) Exibir texto ou imagem.

E) Executar SQL.

**Gabarito: D.** Rótulos apresentam informação, sem serem editores de texto comuns.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.5, páginas 414–417 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 12.6

JTextField é adequado principalmente para:

A) Uma janela de nível superior.

B) Uma tabela relacional.

C) Texto multilinha com parágrafos por definição.

D) Entrada de texto em uma linha.

E) Desenho vetorial.

**Gabarito: D.** JTextArea atende ao caso de edição textual multilinha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.6, páginas 418–422 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 12.6

JPasswordField fornece para senhas uma interface que:

A) Criptografa automaticamente o banco.

B) Mascara visualmente os caracteres digitados.

C) Elimina o valor da memória imediatamente.

D) Substitui autenticação.

E) Garante segurança de toda aplicação.

**Gabarito: B.** Mascaramento visual não equivale a uma política completa de segurança.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.6, páginas 418–422 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 12.7

O tratamento de eventos normalmente liga:

A) Um array a uma classe abstrata.

B) Um construtor a um import.

C) Uma fonte de eventos a um ouvinte registrado.

D) Somente um arquivo a um pacote.

E) Uma senha a um índice.

**Gabarito: C.** O ouvinte executa o comportamento associado ao evento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.7, páginas 423 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 12.8

Registrar ActionListener em um botão permite reagir a:

A) A coleta de lixo.

B) Qualquer consulta SQL.

C) Somente movimentos do mouse.

D) Eventos de ação do botão.

E) Somente eventos de janela fechada.

**Gabarito: D.** O tipo do ouvinte deve ser compatível com o evento.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.8, páginas 424 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 12.9

Qual método integra o contrato de ActionListener?

A) paintComponent.

B) keyTyped.

C) mouseDragged.

D) actionPerformed.

E) windowOpened.

**Gabarito: D.** A assinatura recebe o evento de ação correspondente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.9, páginas 425–427 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 12.10

JCheckBox é apropriado para:

A) Opções de seleção independentes.

B) Um arquivo serializado.

C) Exclusão mútua obrigatória sem agrupamento.

D) Uma tabela hash.

E) Uma área de texto.

**Gabarito: A.** Várias caixas podem permanecer selecionadas simultaneamente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.10, páginas 428–432 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 12.10

Para exclusão mútua entre JRadioButtons, usa-se tipicamente:

A) StringBuilder.

B) JTextArea.

C) Scanner.

D) ArrayList como garantia automática.

E) ButtonGroup.

**Gabarito: E.** O agrupamento coordena o estado de seleção dos botões.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.10, páginas 428–432 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 12.11

JComboBox apresenta principalmente:

A) Uma pilha.

B) Uma árvore de arquivos obrigatória.

C) Uma janela de console.

D) Um gráfico vetorial.

E) Uma seleção entre itens de uma lista compacta.

**Gabarito: E.** O componente combina uma lista de escolhas e a apresentação da seleção.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.11, páginas 433–435 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 12.12

JList é usada para:

A) Representar somente um rótulo.

B) Executar transações.

C) Exibir e selecionar itens de uma lista.

D) Criar threads.

E) Capturar senhas em disco.

**Gabarito: C.** Seu modelo e modo de seleção definem os dados e escolhas permitidas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.12, páginas 436–437 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 12.13

Permitir vários itens selecionados em JList exige:

A) Usar sempre um JFrame por item.

B) Configuração de modo de seleção compatível.

C) Remover o modelo de dados.

D) Impedir qualquer evento.

E) Transformar itens em int.

**Gabarito: B.** A seleção múltipla é uma capacidade configurável do componente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.13, páginas 438–439 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 12.15

Uma classe adaptadora de eventos facilita:

A) Implementar apenas os métodos de interesse entre os fornecidos vazios.

B) Transformar todo evento em clique.

C) Eliminar interfaces.

D) Executar no lugar do sistema operacional.

E) Dispensar registro de ouvintes sempre.

**Gabarito: A.** Adaptadores evitam escrever todos os métodos de certas interfaces extensas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.15, páginas 443–445 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 12.14

Qual interface é associada a movimentos e arraste do mouse?

A) Serializable.

B) Runnable.

C) WindowListener apenas.

D) ActionListener apenas.

E) MouseMotionListener.

**Gabarito: E.** Ela distingue movimento simples e arraste.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.14, páginas 440–442 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 12.18

Um gerenciador de layout tem como responsabilidade principal:

A) Executar métodos main.

B) Organizar posição e tamanho dos componentes.

C) Compilar classes.

D) Validar senhas.

E) Persistir objetos.

**Gabarito: B.** Layouts evitam depender apenas de coordenadas absolutas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.18, páginas 451–458 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 12.18

BorderLayout organiza componentes em regiões como:

A) NORTH, SOUTH, EAST, WEST e CENTER.

B) BEGIN e END.

C) READ e WRITE.

D) HEAD e TAIL apenas.

E) PUBLIC e PRIVATE.

**Gabarito: A.** As cinco regiões participam do arranjo do contêiner.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.18, páginas 451–458 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 12.20

Para texto editável multilinha em Swing, usa-se tipicamente:

A) JPasswordField apenas.

B) JTextArea.

C) JRadioButton.

D) JLabel apenas.

E) JButton.

**Gabarito: B.** Pode-se combinar a área com JScrollPane para rolagem.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 12, seção 12.20, páginas 460–462 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
