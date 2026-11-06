# Questões — Design Patterns com Java

**200 questões originais, 20 por capítulo, cobrindo os 10 capítulos do PDF fornecido.** Fonte: GUERRA, Eduardo. Design Patterns com Java: projeto orientado a objetos guiado por padrões. Casa do Código, 2014 (ano indicado no arquivo fornecido).

O subtítulo conferido na capa é **Projeto orientado a objetos guiado por padrões**. O PDF tem versão editorial **16.1.7**, indicada no sumário. O ano **2014** foi informado pelo nome do arquivo e não foi confirmado no texto editorial extraído; esse limite está explícito nas referências. A versão editorial não foi interpretada como data de publicação.

## Importação

Use o [SQL completo](../../supabase/seeds/guerra_completo.sql) ou os SQLs individuais. Execute após configurar public.questions e com uma conta administrativa. Os dois formatos usam os mesmos IDs e ON CONFLICT (id) DO NOTHING preserva registros e revisões já existentes.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false e **is_published=false**. Gabaritos indexados de 0 a 4. Nada foi enviado ao Supabase.

## Seleção editorial e referências

Cada capítulo seleciona dez conceitos ou regras e trabalha cada um em uma questão de identificação e outra de aplicação. As situações são originais e não transcrevem exercícios ou listagens do livro. Trata-se de uma seleção representativa, sem cobertura de todos os detalhes e exemplos. Padrões, técnicas, papéis e consequências são distinguidos conforme os enunciados.

Os pares são intencionais; evite apresentá-los juntos quando isso facilitar uma avaliação. As dificuldades Fácil e Médio são classificações editoriais preliminares. São quatro gabaritos de cada letra por capítulo. Revise o conteúdo, a clareza dos distratores e os gabaritos antes da publicação.

O PDF tem **272 páginas físicas**. Os capítulos ocupam as páginas **23 a 267**; material preliminar, índice remissivo e bibliografia não geraram capítulos adicionais. As referências indicam posições no PDF, sem equivalência presumida com a paginação impressa. O PDF e a extração integral não são incluídos no repositório. As APIs e ferramentas mencionadas são tratadas no contexto da obra, sem recomendação de versões atuais.

## Capítulos

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
| 1 | Entendendo Padrões de Projeto | 23–41 | [Revisar](guerra_capitulo_01.md) | [SQL](../../supabase/seeds/guerra_capitulo_01.sql) |
| 2 | Reuso Através de Herança | 42–65 | [Revisar](guerra_capitulo_02.md) | [SQL](../../supabase/seeds/guerra_capitulo_02.sql) |
| 3 | Delegando Comportamento com Composição | 66–97 | [Revisar](guerra_capitulo_03.md) | [SQL](../../supabase/seeds/guerra_capitulo_03.sql) |
| 4 | Composição Recursiva | 98–119 | [Revisar](guerra_capitulo_04.md) | [SQL](../../supabase/seeds/guerra_capitulo_04.sql) |
| 5 | Envolvendo Objetos | 120–141 | [Revisar](guerra_capitulo_05.md) | [SQL](../../supabase/seeds/guerra_capitulo_05.sql) |
| 6 | Estratégias de Criação de Objetos | 142–161 | [Revisar](guerra_capitulo_06.md) | [SQL](../../supabase/seeds/guerra_capitulo_06.sql) |
| 7 | Modularidade | 162–185 | [Revisar](guerra_capitulo_07.md) | [SQL](../../supabase/seeds/guerra_capitulo_07.sql) |
| 8 | Adicionando Operações | 186–219 | [Revisar](guerra_capitulo_08.md) | [SQL](../../supabase/seeds/guerra_capitulo_08.sql) |
| 9 | Gerenciando Muitos Objetos | 220–247 | [Revisar](guerra_capitulo_09.md) | [SQL](../../supabase/seeds/guerra_capitulo_09.sql) |
| 10 | Indo Além do Básico | 248–267 | [Revisar](guerra_capitulo_10.md) | [SQL](../../supabase/seeds/guerra_capitulo_10.sql) |

## Manutenção e validação

Edite [guerra_conceitos.txt](guerra_conceitos.txt), com referência capítulo:página-inicial-página-final, resposta, definição e situação original separados por barras verticais. Os limites estão em [guerra_metadata.json](guerra_metadata.json).

Execute node data/questions/generate-guerra.cjs para gerar, node data/questions/generate-guerra.cjs --check para conferir a reprodução e node data/questions/validate-guerra.cjs para validar os artefatos.

Os checks conferem contagens, referências, alternativas distintas, índices dos gabaritos, IDs e enunciados únicos, equivalência entre JSON e SQL e preservação de revisões na reimportação. A execução SQL usa uma adaptação sintática em SQLite na memória; não equivale a executar em PostgreSQL/Supabase nem substitui revisão pedagógica.
