# Date — capítulo 25: Bancos de dados de objetos

20 questões originais de estudo, para revisão editorial. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro. Referências usam a numeração do arquivo PDF, não as páginas impressas. As fontes indicam o intervalo da seção de apoio, não uma citação literal.

[SQL deste capítulo](../../supabase/seeds/date_capitulo_25.sql) · [Índice e instruções](date_capitulos_README.md)

Importação: CP-T / Informática / Banco de Dados. Todos os itens entram como **rascunhos**. Revise antes de publicar. A dificuldade é uma classificação editorial inicial.

## 1. Médio — seção 25.2

Na correspondência terminológica proposta por Date, objetos imutáveis aproximam-se de:

A) Sessões.

B) Valores.

C) Índices físicos.

D) Logs.

E) Variáveis atualizáveis.

**Gabarito: B.** O autor distingue valores imutáveis de variáveis que podem assumir valores diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — seção 25.2

Objetos mutáveis aproximam-se, na terminologia tradicional usada pelo autor, de:

A) Variáveis.

B) Somente strings imutáveis.

C) Apenas funções booleanas.

D) Tipos sem instâncias.

E) Constantes matemáticas.

**Gabarito: A.** A possibilidade de alterar estado corresponde à noção de variável.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — seção 25.2

Encapsular um objeto significa principalmente:

A) Proibir qualquer operação de leitura.

B) Controlar seu acesso por uma interface, ocultando detalhes de representação.

C) Expor todos os endereços internos.

D) Copiar o objeto para cada usuário.

E) Transformar toda variável em constante.

**Gabarito: B.** A interface permite usar o objeto sem depender de sua implementação interna.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — seção 25.2

Alterar a representação interna preservando métodos e contratos públicos favorece:

A) Ausência de qualquer abstração.

B) Independência das aplicações em relação à implementação.

C) Dependência de ponteiros físicos.

D) Eliminação de todos os tipos.

E) Obrigação de reescrever cada cliente.

**Gabarito: B.** O encapsulamento protege consumidores quando a interface permanece compatível.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — seção 25.2

Um método é comparado no capítulo a:

A) Um operador aplicável aos objetos correspondentes.

B) Um índice obrigatório.

C) Uma página física.

D) Uma chave estrangeira por definição.

E) Uma cópia de backup.

**Gabarito: A.** Métodos descrevem operações; dados e operações não devem ser confundidos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — seção 25.2

Enviar uma mensagem a um objeto corresponde, essencialmente, a:

A) Alterar a chave primária.

B) Criar um esquema externo.

C) Confirmar uma transação.

D) Invocar uma operação com um destinatário destacado.

E) Copiar todo o banco pela rede necessariamente.

**Gabarito: D.** Mensagem, nesse contexto, é um conceito de invocação, não necessariamente de transporte em rede.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 7. Médio — seção 25.2

Uma classe e a coleção atual de suas instâncias são conceitos idênticos?

A) Sim, se houver um único método.

B) Sim, somente em bancos persistentes.

C) Não, porque classes não podem ter instâncias.

D) Não; é preciso distinguir definição de tipo e coleção de objetos.

E) Sim, toda classe é apenas seu conteúdo atual.

**Gabarito: D.** A confusão entre tipo e coleção reaparece na crítica relacional/objeto do capítulo seguinte.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.2, páginas 1294–1299 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 8. Fácil — seção 25.3

Qual é a finalidade de uma identidade de objeto, OID?

A) Confirmar suas alterações.

B) Somar seus atributos numéricos.

C) Distinguir e referenciar um objeto independentemente de seus atributos de negócio.

D) Validar automaticamente regras do domínio.

E) Ordenar todos os nomes.

**Gabarito: C.** Identidade do objeto e valores de suas propriedades são noções diferentes.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.3, páginas 1300–1311 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 9. Médio — seção 25.3

Dois objetos possuem atributos de negócio iguais. Isso implica necessariamente a mesma identidade?

A) Sim, caso existam métodos.

B) Sim, se os atributos forem texto.

C) Sim, sempre.

D) Não, porque objetos nunca possuem atributos.

E) Não, em um sistema com identidade de objetos.

**Gabarito: E.** A igualdade do estado observado não exige identidade do objeto.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.3, páginas 1300–1311 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — seção 25.3

Se um objeto altera seu nome e mantém a mesma OID, isso ilustra:

A) Ausência de referência.

B) Mudança obrigatória de identidade.

C) Criação automática de outro tipo.

D) Persistência da identidade apesar de mudança de estado.

E) Imutabilidade do objeto.

**Gabarito: D.** A identidade não precisa ser calculada a partir do nome de negócio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.3, páginas 1300–1311 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 11. Médio — seção 25.3

Expor diretamente variáveis internas de um objeto pode enfraquecer:

A) O número de usuários.

B) A ordenação de nomes de classes.

C) O encapsulamento da representação.

D) A possibilidade de ter métodos.

E) A existência de qualquer valor.

**Gabarito: C.** Clientes podem tornar-se dependentes de detalhes que deveriam permanecer internos.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.3, páginas 1300–1311 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — seção 25.3

Referências entre objetos permitem representar:

A) Apenas tabelas sem tipo.

B) Sempre relacionamentos um para um.

C) Exclusivamente restrições de acesso.

D) Somente valores sem identidade.

E) Associações navegáveis entre suas instâncias.

**Gabarito: E.** A cardinalidade e a integridade dessas associações ainda precisam ser especificadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.3, páginas 1300–1311 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 13. Médio — seção 25.4

A existência de referências a objetos garante automaticamente qualquer regra de exclusão do domínio?

A) Não; é preciso definir e implementar a política apropriada.

B) Sim, se os nomes forem únicos.

C) Não, porque objetos não podem ser excluídos em nenhum sistema.

D) Sim, referências implementam toda regra de negócio.

E) Sim, desde que haja uma OID.

**Gabarito: A.** Gerenciamento de referências não equivale a um conjunto completo de restrições declarativas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.4, páginas 1312–1325 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — seção 25.4

Excluir um objeto pai deve necessariamente excluir todos os objetos que ele referencia?

A) Sim, qualquer referência implica propriedade exclusiva.

B) Não; propriedade, compartilhamento e regras de exclusão precisam ser considerados.

C) Sim, inclusive objetos compartilhados por outros pais.

D) Não, porque exclusões são proibidas.

E) Sim, em todos os modelos de objetos.

**Gabarito: B.** Uma associação por referência não determina, sozinha, o ciclo de vida dos objetos relacionados.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.4, páginas 1312–1325 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 15. Médio — seção 25.5

Qual limitação pode surgir se apenas métodos predefinidos permitirem acesso aos objetos?

A) Proibição de objetos imutáveis.

B) Eliminação da necessidade de índices.

C) Impossibilidade de definir classes.

D) Garantia automática de toda consulta futura.

E) Dificuldade de formular consultas ad hoc não previstas.

**Gabarito: E.** A interface de operações precisa atender também a necessidades de consulta não antecipadas.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — seção 25.5

Implementar integridade somente em métodos escritos pela aplicação exige atenção a:

A) Correção do código e cobertura de todos os caminhos de atualização.

B) Somente a quantidade de letras do método.

C) Apenas o nome da classe.

D) Exclusivamente a ordem dos arquivos.

E) A ausência de qualquer regra.

**Gabarito: A.** Um caminho que contorne a validação pode permitir estado inválido.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 17. Médio — seção 25.5

Manter referências nos dois sentidos entre objetos exige:

A) Confirmar cada campo separadamente.

B) Ignorar uma das direções.

C) Criar identidades iguais para todos os objetos.

D) Eliminar todos os métodos.

E) Coordenar alterações para preservar sua consistência.

**Gabarito: E.** Referências inversas não devem divergir quando a associação muda.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — seção 25.5

Coleta de lixo de objetos inalcançáveis equivale a implementar todas as regras de integridade referencial do negócio?

A) Sim, se houver uma classe raiz.

B) Não, porque coleta de lixo nunca remove objetos.

C) Não; a política de alcançabilidade não cobre necessariamente essas regras.

D) Sim, desde que não existam índices.

E) Sim, são conceitos idênticos.

**Gabarito: C.** Gerenciar memória ou persistência por referências não substitui a semântica de exclusão exigida pelo domínio.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 19. Médio — seção 25.5

Uma linguagem unificada para programa e banco busca reduzir:

A) A necessidade de qualquer tipo.

B) A possibilidade de usar consultas.

C) A existência de dados persistentes.

D) O descasamento entre os modelos e formas de acesso usados nessas camadas.

E) A necessidade de regras de negócio.

**Gabarito: D.** A integração pode reduzir conversões conceituais, sem eliminar os demais requisitos de um SGBD.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — seção 25.5

Qual avaliação respeita a análise crítica de Date sobre sistemas de objetos?

A) Métodos substituem a necessidade de dados.

B) Persistência dispensa recuperação.

C) Tipos, operadores e encapsulamento são úteis, mas não dispensam integridade e consultas adequadas.

D) Identidade resolve automaticamente qualquer restrição.

E) Objetos tornam toda consulta ad hoc desnecessária.

**Gabarito: C.** O capítulo examina tanto recursos úteis quanto insuficiências de certas abordagens.

**Fonte:** DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Capítulo 25, seção 25.5, páginas 1326–1336 do PDF fornecido (numeração do arquivo). Questão original de estudo; não é questão oficial do CP-T.
