# Deitel — capítulo 22: Componentes GUI: parte 2

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_22.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 22.2

JSlider permite principalmente:

A) Editar parágrafos.

B) Serializar dados.

C) Abrir uma conexão JDBC.

D) Escolher um arquivo.

E) Selecionar um valor em um intervalo.

**Gabarito: E.** O componente pode exibir marcas e rótulos de escala.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.2, páginas 747–749 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 22.2

Qual ouvinte acompanha mudanças de valor de JSlider?

A) MouseWheelListener obrigatoriamente.

B) Runnable.

C) Serializable.

D) ChangeListener.

E) WindowListener.

**Gabarito: D.** StateChanged é chamado para mudanças acompanhadas pelo modelo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.2, páginas 747–749 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 22.2

Qual método consulta o valor atual do JSlider?

A) getSelectedFile().

B) nextInt().

C) readObject().

D) getText().

E) getValue().

**Gabarito: E.** O valor é numérico no modelo do controle.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.2, páginas 747–749 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 22.3

WindowListener trata eventos relacionados a:

A) Ciclo e estado de janelas.

B) Somente teclas.

C) Apenas pintura de pixels.

D) Exclusivamente arquivos.

E) Somente SQL.

**Gabarito: A.** Abertura e fechamento são exemplos desses eventos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.3, páginas 750 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 22.3

WindowAdapter permite:

A) Impedir fechamento físico da JVM sempre.

B) Eliminar qualquer registro do ouvinte.

C) Transformar JFrame em array.

D) Sobrescrever apenas callbacks de janela de interesse.

E) Executar JDBC.

**Gabarito: D.** A classe fornece implementações vazias para facilitar especialização.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.3, páginas 750 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 22.4

JMenuBar serve principalmente para:

A) Abrir uma transação.

B) Gerenciar uma pilha.

C) Conter menus de uma janela.

D) Conter apenas texto editável.

E) Representar um arquivo.

**Gabarito: C.** Menus e itens organizam ações disponíveis ao usuário.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.4, páginas 751–756 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 22.4

JMenuItem representa normalmente:

A) Uma janela principal.

B) Um array de menus.

C) Uma opção acionável de menu.

D) Um gerador de fontes.

E) Uma árvore de arquivos obrigatória.

**Gabarito: C.** O item pode disparar eventos de ação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.4, páginas 751–756 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 22.4

Uma tecla mnemônica de menu tem como finalidade:

A) Fechar toda janela.

B) Ordenar automaticamente itens.

C) Facilitar acionamento por teclado.

D) Cifrar o texto.

E) Serializar o menu.

**Gabarito: C.** A navegação por teclado é parte da interação com menus.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.4, páginas 751–756 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 22.4

JCheckBoxMenuItem permite ao item de menu manter:

A) Uma thread.

B) Estado de seleção independente.

C) Uma transação obrigatória.

D) Um arquivo aberto.

E) Somente texto sem estado.

**Gabarito: B.** O estado é semelhante ao de uma caixa de seleção.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.4, páginas 751–756 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 22.4

JRadioButtonMenuItem agrupado é útil para:

A) Entrada livre de parágrafos.

B) Qualquer número de escolhas simultâneas obrigatórias.

C) Uma árvore binária.

D) Uma barra de progresso.

E) Escolhas mutuamente exclusivas.

**Gabarito: E.** Um grupo apropriado coordena a exclusão mútua.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.4, páginas 751–756 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 22.5

JPopupMenu apresenta normalmente:

A) Um editor de código.

B) Um menu contextual.

C) Um mapa hash.

D) Um layout de grade obrigatória.

E) Um arquivo binário.

**Gabarito: B.** O contexto de interação determina as ações pertinentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.5, páginas 757–758 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 22.5

Para menu contextual portável, o evento pode ser verificado com:

A) isClosed() da conexão.

B) isEmpty() do arquivo.

C) isSerializable().

D) isPopupTrigger().

E) isDaemon().

**Gabarito: D.** O momento do gatilho pode variar entre plataformas.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.5, páginas 757–758 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 22.6

Aparência e comportamento plugáveis em Swing permitem:

A) Substituir qualquer sistema operacional.

B) Mudar a sintaxe da linguagem.

C) Converter interfaces em primitivas.

D) Eliminar todas as regras de eventos.

E) Alterar a apresentação dos componentes por implementações de look and feel.

**Gabarito: E.** A lógica da aplicação não precisa ser reescrita para cada aparência.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.6, páginas 759–762 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 22.6

UIManager é associado principalmente ao gerenciamento de:

A) Classes genéricas.

B) Árvores de busca.

C) Configurações de aparência de Swing.

D) Arquivos serializados.

E) Conexões SQL.

**Gabarito: C.** A escolha de look and feel é um de seus usos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.6, páginas 759–762 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 22.7

JDesktopPane e JInternalFrame apoiam:

A) Janelas internas em uma área de trabalho.

B) Serialização automática.

C) Exclusivamente desenhos 3D.

D) Criação de processos do sistema operacional.

E) Somente entrada de teclado.

**Gabarito: A.** JInternalFrame fica dentro do contêiner da aplicação.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.7, páginas 763–765 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 22.7

JInternalFrame é equivalente a um JFrame de nível superior independente?

A) Sim, em qualquer contexto.

B) Não, é uma janela interna em outro contêiner.

C) Não, porque não pode conter componentes.

D) Somente quando tem título.

E) Sim, porque ambos usam int.

**Gabarito: B.** O escopo visual e a contenção são diferentes.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.7, páginas 763–765 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 22.8

JTabbedPane organiza componentes em:

A) Uma fila sem interface.

B) Abas selecionáveis.

C) Somente menus de contexto.

D) Um conjunto sem ordem.

E) Um arquivo por linha.

**Gabarito: B.** Cada aba dá acesso ao painel correspondente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.8, páginas 766–767 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 22.9

BoxLayout organiza componentes principalmente:

A) Ao longo de um eixo.

B) Somente nas cinco regiões de BorderLayout.

C) Apenas por posições absolutas.

D) Em ordem aleatória.

E) Sempre em células iguais.

**Gabarito: A.** O eixo pode orientar a disposição horizontal ou vertical.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.9, páginas 768–770 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 22.10

GridBagLayout oferece:

A) Grade flexível com restrições de posicionamento e tamanho.

B) Somente uma coluna fixa.

C) Exclusivamente abas.

D) Somente sobreposição livre.

E) Apenas cinco regiões.

**Gabarito: A.** Restrições descrevem como cada componente participa da grade.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.10, páginas 771–777 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 22.10

GridBagConstraints é usada para:

A) Executar uma thread.

B) Criar um Slider.

C) Descrever uma consulta SQL.

D) Especificar restrições de um componente no GridBagLayout.

E) Definir uma exceção.

**Gabarito: D.** Dados como posição, extensão e preenchimento controlam a disposição.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 22, seção 22.10, páginas 771–777 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
