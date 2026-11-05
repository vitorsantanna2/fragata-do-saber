# Questões de estudo — C. J. Date, 8ª edição

O livro fornecido tem 27 capítulos e 1.623 páginas no arquivo PDF. Este lote contém **520 questões originais, 20 por capítulo de 2 a 27**. Com as 20 questões do [piloto do capítulo 1](date_capitulo_01_piloto.md), são **540 questões**. Os apêndices não fazem parte deste lote. A seleção é representativa dos temas dos capítulos; não pretende esgotar todas as seções ou exercícios do livro.

## Importação

Execute no SQL Editor do Supabase o [SQL único dos capítulos 2 a 27](../../supabase/seeds/date_capitulos_02_27_completo.sql), usando uma conta administrativa e após configurar a tabela public.questions. Alternativamente, use os SQLs individuais abaixo. Não é necessário executar as duas opções: os IDs são os mesmos, e conflitos por ID são ignorados sem alterar registros já existentes.

Os novos itens são classificados em **CP-T / Informática / Banco de Dados**, com origem **bibliografia**, sem ano de prova e com **is_published = false**. Eles precisam de revisão e publicação no painel administrativo para ficarem disponíveis aos alunos. Nenhum SQL foi executado no banco por este processo.

O SQL único não inclui o capítulo 1. Se necessário, importe também o [SQL do piloto](../../supabase/seeds/date_capitulo_01_piloto.sql). Executar os arquivos não modifica o código da plataforma, nem os filtros das trilhas.

## Fonte e convenções

Referência: DATE, C. J. Introdução a Sistemas de Bancos de Dados. Tradução da 8ª edição. Elsevier, 2004. Cada item indica capítulo, seção e páginas **do arquivo PDF**. O intervalo é o da seção usada como apoio; não representa uma citação literal do enunciado ou comentário.

O PDF apresenta inconsistências: o capítulo 23 repete o título “Apoio à decisão”, embora trate de dados temporais; o capítulo 25 repete “Sistemas baseados em lógica”, embora trate de objetos. Neste índice usamos títulos descritivos do conteúdo. Os cabeçalhos 24.5/24.6 nas páginas 1326/1337 correspondem às seções 25.5/25.6, e 25.2/25.3 nas páginas 1361/1372 correspondem às seções 26.2/26.3, conforme as aberturas dos próprios capítulos. O mapeamento registra essas correções sem alterar o PDF.

As questões são originais e não oficiais. Discussões sobre posições do autor e recursos de produtos são situadas no contexto da edição. A dificuldade é editorial e pode ser recalibrada. Revise também adequação ao edital e profundidade desejada antes de publicar.

## Lotes

| Capítulo | Tema | Questões | Revisão | SQL |
| --- | --- | ---: | --- | --- |
| 2 | Arquitetura de sistemas de bancos de dados | 20 | [Ler](date_capitulo_02.md) | [Importar](../../supabase/seeds/date_capitulo_02.sql) |
| 3 | Introdução aos bancos de dados relacionais | 20 | [Ler](date_capitulo_03.md) | [Importar](../../supabase/seeds/date_capitulo_03.sql) |
| 4 | Uma introdução à SQL | 20 | [Ler](date_capitulo_04.md) | [Importar](../../supabase/seeds/date_capitulo_04.sql) |
| 5 | Tipos | 20 | [Ler](date_capitulo_05.md) | [Importar](../../supabase/seeds/date_capitulo_05.sql) |
| 6 | Relações | 20 | [Ler](date_capitulo_06.md) | [Importar](../../supabase/seeds/date_capitulo_06.sql) |
| 7 | Álgebra relacional | 20 | [Ler](date_capitulo_07.md) | [Importar](../../supabase/seeds/date_capitulo_07.sql) |
| 8 | Cálculo relacional | 20 | [Ler](date_capitulo_08.md) | [Importar](../../supabase/seeds/date_capitulo_08.sql) |
| 9 | Integridade | 20 | [Ler](date_capitulo_09.md) | [Importar](../../supabase/seeds/date_capitulo_09.sql) |
| 10 | Visões | 20 | [Ler](date_capitulo_10.md) | [Importar](../../supabase/seeds/date_capitulo_10.sql) |
| 11 | Dependências funcionais | 20 | [Ler](date_capitulo_11.md) | [Importar](../../supabase/seeds/date_capitulo_11.sql) |
| 12 | Normalização: 1FN, 2FN, 3FN e FNBC | 20 | [Ler](date_capitulo_12.md) | [Importar](../../supabase/seeds/date_capitulo_12.sql) |
| 13 | Normalização: formas normais superiores | 20 | [Ler](date_capitulo_13.md) | [Importar](../../supabase/seeds/date_capitulo_13.sql) |
| 14 | Modelagem semântica | 20 | [Ler](date_capitulo_14.md) | [Importar](../../supabase/seeds/date_capitulo_14.sql) |
| 15 | Recuperação | 20 | [Ler](date_capitulo_15.md) | [Importar](../../supabase/seeds/date_capitulo_15.sql) |
| 16 | Concorrência | 20 | [Ler](date_capitulo_16.md) | [Importar](../../supabase/seeds/date_capitulo_16.sql) |
| 17 | Segurança | 20 | [Ler](date_capitulo_17.md) | [Importar](../../supabase/seeds/date_capitulo_17.sql) |
| 18 | Otimização | 20 | [Ler](date_capitulo_18.md) | [Importar](../../supabase/seeds/date_capitulo_18.sql) |
| 19 | Falta de informações | 20 | [Ler](date_capitulo_19.md) | [Importar](../../supabase/seeds/date_capitulo_19.sql) |
| 20 | Herança de tipo | 20 | [Ler](date_capitulo_20.md) | [Importar](../../supabase/seeds/date_capitulo_20.sql) |
| 21 | Bancos de dados distribuídos | 20 | [Ler](date_capitulo_21.md) | [Importar](../../supabase/seeds/date_capitulo_21.sql) |
| 22 | Apoio à decisão | 20 | [Ler](date_capitulo_22.md) | [Importar](../../supabase/seeds/date_capitulo_22.sql) |
| 23 | Dados temporais | 20 | [Ler](date_capitulo_23.md) | [Importar](../../supabase/seeds/date_capitulo_23.sql) |
| 24 | Sistemas baseados em lógica | 20 | [Ler](date_capitulo_24.md) | [Importar](../../supabase/seeds/date_capitulo_24.sql) |
| 25 | Bancos de dados de objetos | 20 | [Ler](date_capitulo_25.md) | [Importar](../../supabase/seeds/date_capitulo_25.sql) |
| 26 | Bancos de dados relacional/objeto | 20 | [Ler](date_capitulo_26.md) | [Importar](../../supabase/seeds/date_capitulo_26.sql) |
| 27 | A World Wide Web e XML | 20 | [Ler](date_capitulo_27.md) | [Importar](../../supabase/seeds/date_capitulo_27.sql) |

## Manutenção e validação

A fonte editorial é [date_capitulos_02_27.txt](date_capitulos_02_27.txt): cada linha contém seção, enunciado, resposta correta, quatro distratores e comentário, separados por barras verticais. [date_capitulos_metadata.json](date_capitulos_metadata.json) guarda o mapa de páginas das seções. Edite essas fontes e regenere os arquivos; os JSONs, Markdown e SQLs por capítulo são derivados.

Para regenerar: node data/questions/generate-date-chapters.cjs

Para validar sem escrever: node data/questions/generate-date-chapters.cjs --check

O gerador verifica contagens, campos obrigatórios, cinco alternativas distintas, ausência de enunciados repetidos, referências mapeadas, UUIDs únicos e gabaritos balanceados. Em cada capítulo há quatro respostas de cada letra, distribuídas sem um ciclo fixo. Os índices de gabarito nos JSONs e SQLs vão de zero a quatro.

A validação automática é estrutural e não substitui revisão pedagógica. O comando --check também verifica que os arquivos derivados correspondem às fontes editoriais. O gerador não conecta ao Supabase nem publica questões.
