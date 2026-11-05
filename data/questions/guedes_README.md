# Questões — UML 2: uma abordagem prática

**360 questões originais, 20 por capítulo, cobrindo os 18 capítulos do PDF recebido.** Fonte: GUEDES, Gilleanes T. A. UML 2: uma abordagem prática. 3ª edição. Novatec, 2018. ISBN 978-85-7522-644-5. A edição baseia-se na UML 2.5.

## Importação

Use o [SQL único](../../supabase/seeds/guedes_completo.sql) ou os SQLs por capítulo, após configurar public.questions, com acesso administrativo. As duas formas usam os mesmos IDs. ON CONFLICT (id) DO NOTHING preserva registros e edições já existentes. O lote tem IDs próprios e pode coexistir com o livro UML: guia do usuário.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Os gabaritos usam índices de 0 a 4. A geração e a validação são locais; nada foi enviado ao Supabase.

## Seleção e referências

Em cada capítulo foram selecionados dez conceitos ou regras, cada qual trabalhado em uma questão de identificação e outra de aplicação. É uma seleção representativa, sem cobertura de cada parágrafo. O capítulo 17 aborda regras do estudo de caso fictício PizzaNet. As situações de aplicação são originais; não reproduzem os exercícios propostos ou suas soluções.

Os capítulos curtos, especialmente o capítulo 15, revisitam seus poucos conceitos em situações distintas. Os pares de identificação e aplicação são intencionais; evite apresentá-los juntos se isso prejudicar uma avaliação. As dificuldades Fácil e Médio são classificações editoriais preliminares. Revise os enunciados, distratores e gabaritos antes de publicar.

O PDF tem 657 páginas físicas, incluindo publicidade ao final. O conteúdo dos capítulos ocupa as páginas 18 a 647; a publicidade foi excluída. As referências indicam posições físicas do PDF, sem correspondência presumida com a paginação impressa. Quando há seção numerada, ela é indicada junto de seu intervalo de apoio. Intervalos podem compartilhar a página em que uma seção termina e outra começa.

O texto segue o contexto da edição recebida; não pressupõe que versões e ferramentas citadas continuem atuais. Os nomes <<instanceOf>>, <<merge>> e outras convenções são tratados conforme apresentados no livro. As questões são originais de estudo e não são questões oficiais do CP-T. O PDF e a extração integral não são incluídos no repositório.

## Capítulos

Cada capítulo tem 20 questões e cinco alternativas por questão.

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
| 1 | Introdução à UML | 18–48 | [Revisar](guedes_capitulo_01.md) | [SQL](../../supabase/seeds/guedes_capitulo_01.sql) |
| 2 | Orientação a Objetos | 49–59 | [Revisar](guedes_capitulo_02.md) | [SQL](../../supabase/seeds/guedes_capitulo_02.sql) |
| 3 | Diagrama de Casos de Uso | 60–132 | [Revisar](guedes_capitulo_03.md) | [SQL](../../supabase/seeds/guedes_capitulo_03.sql) |
| 4 | Diagrama de Classes | 133–252 | [Revisar](guedes_capitulo_04.md) | [SQL](../../supabase/seeds/guedes_capitulo_04.sql) |
| 5 | Diagrama de Objetos | 253–257 | [Revisar](guedes_capitulo_05.md) | [SQL](../../supabase/seeds/guedes_capitulo_05.sql) |
| 6 | Diagrama de Pacotes | 258–266 | [Revisar](guedes_capitulo_06.md) | [SQL](../../supabase/seeds/guedes_capitulo_06.sql) |
| 7 | Diagrama de Sequência | 267–331 | [Revisar](guedes_capitulo_07.md) | [SQL](../../supabase/seeds/guedes_capitulo_07.sql) |
| 8 | Diagrama de Comunicação | 332–344 | [Revisar](guedes_capitulo_08.md) | [SQL](../../supabase/seeds/guedes_capitulo_08.sql) |
| 9 | Diagrama de Máquina de Estados | 345–389 | [Revisar](guedes_capitulo_09.md) | [SQL](../../supabase/seeds/guedes_capitulo_09.sql) |
| 10 | Diagrama de Atividade | 390–439 | [Revisar](guedes_capitulo_10.md) | [SQL](../../supabase/seeds/guedes_capitulo_10.sql) |
| 11 | Diagrama de Visão Geral de Interação | 440–450 | [Revisar](guedes_capitulo_11.md) | [SQL](../../supabase/seeds/guedes_capitulo_11.sql) |
| 12 | Diagrama de Componentes | 451–467 | [Revisar](guedes_capitulo_12.md) | [SQL](../../supabase/seeds/guedes_capitulo_12.sql) |
| 13 | Diagrama de Implantação | 468–479 | [Revisar](guedes_capitulo_13.md) | [SQL](../../supabase/seeds/guedes_capitulo_13.sql) |
| 14 | Diagrama de Estrutura Composta | 480–487 | [Revisar](guedes_capitulo_14.md) | [SQL](../../supabase/seeds/guedes_capitulo_14.sql) |
| 15 | Diagrama de Tempo ou de Temporização | 488–489 | [Revisar](guedes_capitulo_15.md) | [SQL](../../supabase/seeds/guedes_capitulo_15.sql) |
| 16 | Diagrama de Perfil | 490–497 | [Revisar](guedes_capitulo_16.md) | [SQL](../../supabase/seeds/guedes_capitulo_16.sql) |
| 17 | Estudo de Caso — Sistema de Pizzaria Online — PizzaNet | 498–640 | [Revisar](guedes_capitulo_17.md) | [SQL](../../supabase/seeds/guedes_capitulo_17.sql) |
| 18 | A UML 2.5 | 641–647 | [Revisar](guedes_capitulo_18.md) | [SQL](../../supabase/seeds/guedes_capitulo_18.sql) |

## Manutenção e validação

Edite [guedes_conceitos.txt](guedes_conceitos.txt), com quatro campos por linha: referência de seção ou capítulo, resposta, definição e pergunta de aplicação. O mapa de capítulos e seções está em [guedes_metadata.json](guedes_metadata.json). O gerador mantém exclusões entre alternativas próximas para reduzir ambiguidades.

```sh
node data/questions/generate-guedes.cjs
node data/questions/generate-guedes.cjs --check
node data/questions/validate-guedes.cjs
```

Os checks conferem contagens, referências, cinco alternativas distintas, enunciados únicos, IDs próprios e quatro respostas de cada letra por capítulo. O validador compara os campos importáveis de todos os JSONs com os SQLs e verifica reimportação, preservação de edições e colisões com os lotes de Date, Deitel, Governança e Booch/Rumbaugh/Jacobson. A execução SQL usa uma adaptação sintática em SQLite na memória: não representa execução ou validação do servidor PostgreSQL/Supabase. Esses checks não substituem revisão pedagógica.
