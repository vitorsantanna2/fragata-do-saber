# Date — capítulo 5: Tipos

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_05.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Fácil — seção 5.2

Após atribuir 12 a X e depois 19 a X, o que mudou?

A) Todo o domínio de X.

B) A identidade de todos os inteiros.

C) A definição do inteiro 19.

D) O valor matemático 12.

E) O valor atual da variável X.

**Gabarito: E.** Variáveis recebem valores diferentes; valores individuais não se transformam em outros valores.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.2, páginas 215–217 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Fácil — seção 5.2

Qual elemento representa uma constante individual, independentemente de seu armazenamento?

A) Uma variável atualizável.

B) Um valor.

C) Uma sessão do usuário.

D) Um cursor aberto.

E) Um endereço de disco.

**Gabarito: B.** O valor é abstrato; sua codificação na memória é uma representação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.2, páginas 215–217 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Médio — seção 5.3

Um identificador é armazenado como caracteres. Isso autoriza qualquer operação textual sobre ele?

A) Não, porque identificadores não possuem tipos.

B) Sim, mas apenas se houver um índice.

C) Sim, qualquer codificação define todos os operadores.

D) Sim, inclusive operações sem significado no domínio.

E) Não; os operadores aplicáveis dependem do tipo lógico.

**Gabarito: E.** A representação física não deve determinar a semântica do tipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.3, páginas 218–224 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 5.3

Alterar a codificação interna de um tipo preservando seus operadores públicos ilustra:

A) Ausência de abstração.

B) Separação entre tipo e representação.

C) Mudança obrigatória de todos os valores abstratos.

D) Transformação do tipo em relvar.

E) Eliminação do domínio.

**Gabarito: B.** A interface lógica pode permanecer estável apesar da mudança de representação.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.3, páginas 218–224 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Médio — seção 5.4

Um tipo TEMPERATURA_POSITIVA admite apenas valores acima de zero. A condição delimita:

A) A quantidade de transações.

B) O conjunto de valores do tipo.

C) A localização do catálogo.

D) A sequência física das linhas.

E) O número de usuários autorizados.

**Gabarito: B.** Restrições de tipo determinam quais valores pertencem ao domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.4, páginas 225–228 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 5.4

Um seletor de valores de um tipo tem como papel:

A) Produzir um valor do tipo a partir dos argumentos apropriados.

B) Liberar bloqueios exclusivos.

C) Excluir atributos do catálogo.

D) Escolher obrigatoriamente linhas de uma relvar.

E) Confirmar uma transação.

**Gabarito: A.** Seletores de tipo não se confundem com o operador relacional de seleção.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.4, páginas 225–228 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 5.3

Duas representações possíveis descrevem coordenadas cartesianas e polares do mesmo ponto. Elas necessariamente definem dois tipos distintos?

A) Sim, cada representação física define um tipo.

B) Sim, porque um valor só admite uma descrição.

C) Não, porque pontos não podem ser valores.

D) Não; um tipo pode admitir representações possíveis diferentes.

E) Sim, se houver operadores de leitura.

**Gabarito: D.** O valor abstrato pode ser descrito por representações possíveis distintas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.3, páginas 218–224 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — seção 5.5

Qual operador é somente de leitura?

A) Um que calcula um resultado sem atualizar variáveis por efeito da invocação.

B) Um que altera um argumento recebido.

C) Um que exclui uma relvar.

D) Um que troca o conteúdo de duas variáveis.

E) Um que sempre confirma transações.

**Gabarito: A.** Operadores de leitura calculam resultados; operadores de atualização podem modificar variáveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.5, páginas 229–236 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 5.5

Uma operação incrementa diretamente uma variável passada como argumento. Ela é classificada como:

A) Cabeçalho relacional.

B) Operador de atualização.

C) Literal.

D) Gerador de tipos, necessariamente.

E) Valor constante.

**Gabarito: B.** A classificação considera o efeito sobre variáveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.5, páginas 229–236 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 5.5

Por que os tipos dos parâmetros fazem parte da definição de um operador?

A) Eles tornam desnecessário um resultado.

B) Eles determinam a senha do usuário.

C) Eles substituem a semântica do operador.

D) Eles definem o endereço físico do código.

E) Eles especificam argumentos admissíveis e ajudam a determinar sua aplicação.

**Gabarito: E.** Assinaturas de operadores incluem informação de tipagem relevante à sua utilização.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.5, páginas 229–236 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — seção 5.6

Um gerador de tipos distingue-se por produzir:

A) Uma autorização de acesso.

B) Um arquivo de backup.

C) Somente um valor inteiro.

D) Um tipo a partir de seus parâmetros.

E) Uma confirmação de transação.

**Gabarito: D.** Geradores como TUPLE e RELATION constroem tipos, não apenas valores de negócio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.6, páginas 237–239 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 5.6

O gerador TUPLE recebe uma especificação de atributos. Seu resultado é:

A) Um tipo de tupla.

B) Um índice físico.

C) Uma lista de transações confirmadas.

D) Uma sessão de usuário.

E) Uma tupla de dados obrigatoriamente existente.

**Gabarito: A.** É preciso distinguir gerar um tipo de selecionar um valor desse tipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.6, páginas 237–239 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 5.6

O gerador RELATION permite definir:

A) Apenas inteiros positivos.

B) Somente arquivos sequenciais.

C) Planos físicos de junção.

D) Tipos de relação com atributos especificados.

E) Permissões de rede.

**Gabarito: D.** O tipo de relação descreve o cabeçalho dos valores relacionais admitidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.6, páginas 237–239 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 5.6

Um atributo pode possuir um valor que também seja uma relação?

A) Não, porque todo atributo precisa ser texto.

B) Não, porque o modelo exige apenas inteiros.

C) Não, pois relações não são valores.

D) Sim, mas somente como ponteiro sem tipo.

E) Sim, mediante um tipo relacional apropriado.

**Gabarito: E.** Tipos não escalares incluem tipos de relação; o valor continua sendo um único valor do tipo.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.6, páginas 237–239 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 5.3

Expor o formato interno de armazenamento como contrato obrigatório para aplicações reduz:

A) A quantidade de operadores necessariamente.

B) A possibilidade de definir variáveis.

C) A liberdade de alterar a implementação sem afetar clientes.

D) A necessidade de autenticação.

E) O significado das constantes matemáticas.

**Gabarito: C.** O encapsulamento da representação protege aplicações de mudanças internas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.3, páginas 218–224 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 5.4

Um valor fora da restrição de um tipo deve ser tratado como:

A) Um valor válido após renomear a variável.

B) Válido se tiver a mesma quantidade de bytes.

C) Não pertencente ao conjunto de valores desse tipo.

D) Uma nova chave primária automática.

E) Uma transação já confirmada.

**Gabarito: C.** Compatibilidade de armazenamento não substitui validade semântica.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.4, páginas 225–228 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — seção 5.7

Qual tipo SQL é mais diretamente voltado a valores exatos com precisão e escala declaradas?

A) BOOLEAN.

B) BLOB.

C) CHARACTER LARGE OBJECT.

D) NUMERIC(p,q).

E) DATE.

**Gabarito: D.** NUMERIC permite especificar precisão e escala para números exatos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.7, páginas 240–250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Fácil — seção 5.7

Qual categoria SQL atende a grandes conteúdos binários?

A) INTERVAL.

B) DATE.

C) BLOB.

D) BOOLEAN.

E) SMALLINT.

**Gabarito: C.** BLOB representa grandes objetos binários, não um domínio de números ou datas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.7, páginas 240–250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 5.7

Um tipo definido pelo usuário deve ser confundido com uma tabela que armazena seus valores?

A) Não; o tipo define valores admissíveis e a tabela armazena dados tipados.

B) Sim, se o tipo tiver operadores.

C) Não, porque tipos definidos pelo usuário não podem ser usados em atributos.

D) Sim, pois cada tipo precisa de uma tabela exclusiva.

E) Sim, ambos são relvars por definição.

**Gabarito: A.** Definição de domínio e definição de variável de relação são operações conceitualmente distintas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.7, páginas 240–250 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 5.2

Copiar o valor de X para Y torna X e Y a mesma variável?

A) Sim, qualquer igualdade de valores unifica variáveis.

B) Sim, mas somente para inteiros.

C) Não; variáveis distintas podem ter o mesmo valor atual.

D) Sim, até o encerramento da transação.

E) Não, porque valores nunca podem ser copiados.

**Gabarito: C.** Igualdade de valores não implica identidade de variáveis.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 5, seção 5.2, páginas 215–217 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
