# Deitel — capítulo 13: Imagens gráficas e Java 2D

20 questões originais, com cinco alternativas e uma resposta correta. Contexto: **Java SE 8**. São itens de estudo, não questões oficiais do CP-T nem transcrições de exercícios do livro.

[SQL do capítulo](../../supabase/seeds/deitel_capitulo_13.sql) · [Índice e instruções](deitel_README.md)

Importação: CP-T / Informática / Linguagem de Programação, como **rascunhos**. Dificuldade editorial inicial, sujeita a revisão. As fontes apontam seções e páginas do arquivo PDF.

## 1. Fácil — seção 13.1

No sistema gráfico padrão do componente, a origem fica normalmente:

A) Fora da janela.

B) No canto inferior direito.

C) No canto inferior esquerdo.

D) No centro sempre.

E) No canto superior esquerdo.

**Gabarito: E.** As coordenadas são relativas à área de desenho pertinente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.1, páginas 475–476 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 13.1

No sistema gráfico padrão, aumentar x move o ponto para:

A) A esquerda.

B) A direita.

C) Outra janela.

D) Cima.

E) Baixo.

**Gabarito: B.** O eixo horizontal cresce para a direita.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.1, páginas 475–476 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 13.1

No sistema gráfico padrão, aumentar y move o ponto para:

A) O centro automaticamente.

B) Baixo.

C) A esquerda.

D) Cima.

E) A direita.

**Gabarito: B.** A orientação vertical difere do plano cartesiano escolar usual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.1, páginas 475–476 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 13.2

Graphics representa principalmente:

A) Um tipo primitivo.

B) Uma conexão de rede.

C) Um contexto para operações de desenho.

D) Um componente de botão.

E) Um arquivo de imagem obrigatório.

**Gabarito: C.** O contexto oferece operações de texto, formas e atributos gráficos.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.2, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 13.2

Onde se costuma implementar desenho personalizado de JPanel?

A) close().

B) finalize().

C) main(Graphics g) obrigatoriamente.

D) compareTo().

E) paintComponent(Graphics g).

**Gabarito: E.** O sistema chama paintComponent no ciclo de pintura do componente.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.2, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 13.2

Por que chamar super.paintComponent(g) em uma sobrescrita usual?

A) Para executar main novamente.

B) Para criar um novo JFrame.

C) Para eliminar os eventos.

D) Para preservar a pintura básica, incluindo o fundo apropriado.

E) Para salvar em disco.

**Gabarito: D.** A omissão pode deixar artefatos e comprometer a atualização visual.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.2, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 13.2

Para solicitar atualização visual de um componente, usa-se tipicamente:

A) repaint().

B) close().

C) runGc().

D) scan().

E) commit().

**Gabarito: A.** A solicitação agenda uma nova pintura, não exige desenhar imediatamente no chamador.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.2, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 13.3

`new Color(255,0,0)` representa:

A) Preto.

B) Verde.

C) Branco.

D) Vermelho.

E) Azul.

**Gabarito: D.** No modelo RGB, o primeiro componente é a intensidade vermelha.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.3, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 13.3

`new Color(0,0,0)` representa:

A) Preto.

B) Branco.

C) Vermelho.

D) Amarelo.

E) Ciano.

**Gabarito: A.** Ausência de intensidade nos três canais produz preto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.3, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 13.3

No construtor RGB com componentes int, o intervalo usual é:

A) 1 a 100.

B) -128 a 127.

C) 0 a 1 apenas.

D) Qualquer int sem validação.

E) 0 a 255.

**Gabarito: E.** Valores fora do intervalo não são componentes RGB válidos nesse construtor.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.3, páginas 477–482 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 13.4

Uma Font combina informações como:

A) Somente posição x e y.

B) Somente cor RGB.

C) Família, estilo e tamanho.

D) Arquivo, senha e thread.

E) Apenas conteúdo do texto.

**Gabarito: C.** A fonte descreve como os caracteres devem ser apresentados.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.4, páginas 483–486 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 13.4

FontMetrics ajuda a obter:

A) O endereço do arquivo.

B) O número de threads.

C) Medidas de texto na fonte utilizada.

D) O tipo de uma exceção.

E) Somente a cor de fundo.

**Gabarito: C.** Medidas auxiliam alinhamento e dimensionamento de texto.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.4, páginas 483–486 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 13.5

drawLine(x1,y1,x2,y2) recebe:

A) As coordenadas de dois extremos.

B) Duas larguras e duas alturas.

C) Quatro raios.

D) Quatro índices de fonte.

E) Um ponto e dois códigos de cor.

**Gabarito: A.** Os pontos definem o segmento desenhado.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.5, páginas 487–489 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 13.5

Em drawRect(x,y,w,h), x e y indicam:

A) O canto inferior direito.

B) O número de pixels preenchidos.

C) As dimensões do retângulo.

D) O centro obrigatoriamente.

E) O canto superior esquerdo.

**Gabarito: E.** W e h descrevem largura e altura.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.5, páginas 487–489 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 13.5

Qual diferença entre drawRect e fillRect?

A) DrawRect não usa coordenadas.

B) Um desenha o contorno; o outro preenche a área.

C) DrawRect cria janela; fillRect fecha.

D) Ambos sempre preenchem.

E) FillRect só aceita círculos.

**Gabarito: B.** Os dois métodos usam a geometria do retângulo.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.5, páginas 487–489 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 13.5

drawOval(x,y,w,h) usa como referência:

A) Dois focos explicitamente.

B) O número de cores.

C) Um centro e um ângulo.

D) O retângulo delimitador do oval.

E) Somente um raio.

**Gabarito: D.** W e h iguais descrevem uma circunferência nessa área.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.5, páginas 487–489 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 13.6

Um arco é especificado, entre outros dados, por:

A) Apenas o número de vértices.

B) Somente dois nomes de fonte.

C) Ângulo inicial e extensão angular.

D) Um índice de array.

E) Um arquivo e uma senha.

**Gabarito: C.** Os parâmetros angulares determinam a parte da elipse representada.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.6, páginas 490–491 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 13.7

Qual diferença geral entre polígono e polilinha?

A) Polígono só pode ter três pontos.

B) O polígono fecha a sequência; a polilinha não fecha necessariamente.

C) Ambos são apenas texto.

D) Polilinha sempre é circular.

E) Polígono não possui vértices.

**Gabarito: B.** Fechamento liga o último vértice ao primeiro.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.7, páginas 492–493 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 13.8

Graphics2D amplia o desenho com recursos como:

A) Apenas entrada de teclado.

B) Consultas SQL.

C) Bloqueios de thread.

D) Traços, preenchimentos e transformações.

E) Somente impressão de strings.

**Gabarito: D.** A API oferece controle gráfico mais rico.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.8, páginas 494–498 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 13.8

BasicStroke é usado principalmente para configurar:

A) Características do traço.

B) O banco de dados.

C) A serialização de objetos.

D) O conteúdo textual.

E) O modelo de seleção.

**Gabarito: A.** Espessura e estilo do traçado são propriedades de stroke.

**Fonte:** DEITEL, Paul; DEITEL, Harvey. Java: como programar. Tradução da 10ª edição norte-americana. Pearson Education do Brasil, 2017. Capítulo 13, seção 13.8, páginas 494–498 do PDF fornecido. Contexto: Java SE 8. Questão original de estudo; não é questão oficial do CP-T.
