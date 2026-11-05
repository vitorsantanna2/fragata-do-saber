# Questões — Implantando a Governança de TI

**360 questões originais, 20 por capítulo, cobrindo os 18 capítulos do PDF fornecido (652 páginas).** Seleção representativa, com conceitos e situações de aplicação; não cobre cada parágrafo. Os casos do capítulo 18 são tratados como relatos históricos anônimos do livro.

## Importação

Execute o [SQL único](../../supabase/seeds/governanca_completo.sql) no SQL Editor do Supabase após configurar public.questions, com acesso administrativo. Alternativamente, use os SQLs por capítulo. Ambos usam os mesmos IDs; ON CONFLICT (id) DO NOTHING preserva registros e edições existentes.

Classificação: **CP-T / Informática / Governança de TI**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Revise os rascunhos no painel antes de publicar. A geração é local e não acessa o Supabase.

## Fonte e contexto

FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz de. **Implantando a Governança de TI: da estratégia à gestão dos processos e serviços. 4ª edição. Brasport, 2014.**

As questões acompanham a edição recebida, incluindo COBIT 5, ITIL 2011, modelos e normas nas versões nela descritas. Regulamentações e estruturas governamentais são cobradas expressamente como conteúdo histórico de 2014, sem afirmar sua vigência atual. As páginas indicam a posição no arquivo PDF; a página impressa 1 corresponde à página 22 do arquivo. Referências de seção identificam o intervalo de apoio; capítulos sem subseções numeradas usam o intervalo do capítulo.

As questões e comentários são originais, não transcrições de exercícios nem questões oficiais do CP-T. Dificuldades editoriais: Fácil, Médio e Difícil; devem ser calibradas durante a revisão pedagógica.

## Capítulos

| Capítulo | Tema | Questões | Revisão | Importação |
| --- | --- | ---: | --- | --- |
| 1 | Governança de TI | 20 | [Revisar](governanca_capitulo_01.md) | [SQL](../../supabase/seeds/governanca_capitulo_01.sql) |
| 2 | Governança Corporativa e Regulamentações de Compliance | 20 | [Revisar](governanca_capitulo_02.md) | [SQL](../../supabase/seeds/governanca_capitulo_02.sql) |
| 3 | O Modelo de Governança de TI | 20 | [Revisar](governanca_capitulo_03.md) | [SQL](../../supabase/seeds/governanca_capitulo_03.sql) |
| 4 | Os Papéis da Governança de TI na Organização | 20 | [Revisar](governanca_capitulo_04.md) | [SQL](../../supabase/seeds/governanca_capitulo_04.sql) |
| 5 | Modelos de Melhores Práticas e o Modelo de Governança de TI | 20 | [Revisar](governanca_capitulo_05.md) | [SQL](../../supabase/seeds/governanca_capitulo_05.sql) |
| 6 | Modelos Abrangentes de Governança de TI | 20 | [Revisar](governanca_capitulo_06.md) | [SQL](../../supabase/seeds/governanca_capitulo_06.sql) |
| 7 | Modelos para Gerenciamento de Serviços de TI | 20 | [Revisar](governanca_capitulo_07.md) | [SQL](../../supabase/seeds/governanca_capitulo_07.sql) |
| 8 | Modelos para Processos de Software | 20 | [Revisar](governanca_capitulo_08.md) | [SQL](../../supabase/seeds/governanca_capitulo_08.sql) |
| 9 | Modelos para Gerenciamento de Projetos | 20 | [Revisar](governanca_capitulo_09.md) | [SQL](../../supabase/seeds/governanca_capitulo_09.sql) |
| 10 | Modelos para Segurança da Informação – ISO/IEC 27001 e 27002 | 20 | [Revisar](governanca_capitulo_10.md) | [SQL](../../supabase/seeds/governanca_capitulo_10.sql) |
| 11 | Modelos para Gerenciamento de Sourcing | 20 | [Revisar](governanca_capitulo_11.md) | [SQL](../../supabase/seeds/governanca_capitulo_11.sql) |
| 12 | Modelos para Disciplinas Complementares à Governança de TI | 20 | [Revisar](governanca_capitulo_12.md) | [SQL](../../supabase/seeds/governanca_capitulo_12.sql) |
| 13 | Extensões e Derivações do Conceito de Governança de TI | 20 | [Revisar](governanca_capitulo_13.md) | [SQL](../../supabase/seeds/governanca_capitulo_13.sql) |
| 14 | Novas Tecnologias e a Governança de TI | 20 | [Revisar](governanca_capitulo_14.md) | [SQL](../../supabase/seeds/governanca_capitulo_14.sql) |
| 15 | Governança de TI para Pequenas e Médias Empresas | 20 | [Revisar](governanca_capitulo_15.md) | [SQL](../../supabase/seeds/governanca_capitulo_15.sql) |
| 16 | Governança de TI no Governo | 20 | [Revisar](governanca_capitulo_16.md) | [SQL](../../supabase/seeds/governanca_capitulo_16.sql) |
| 17 | Como Implantar a Governança de TI | 20 | [Revisar](governanca_capitulo_17.md) | [SQL](../../supabase/seeds/governanca_capitulo_17.sql) |
| 18 | Estudos de Casos | 20 | [Revisar](governanca_capitulo_18.md) | [SQL](../../supabase/seeds/governanca_capitulo_18.sql) |

## Manutenção e validação

Edite [governanca_questoes.txt](governanca_questoes.txt) e [governanca_metadata.json](governanca_metadata.json), depois execute:

```sh
node data/questions/generate-governanca.cjs
node data/questions/generate-governanca.cjs --check
node data/questions/validate-governanca.cjs
```

Cada linha editorial tem nove campos: referência de seção ou capítulo, dificuldade, enunciado, resposta correta, quatro distratores e explicação. O gerador confere contagens, referências, cinco alternativas distintas, IDs e enunciados únicos, inclusive em relação aos lotes de Date e Deitel. Distribui quatro respostas de cada letra por capítulo; JSON e SQL usam índices de 0 a 4. Os checks estruturais não substituem a revisão pedagógica.

O validador executa uma adaptação sintática dos SQLs em SQLite na memória, compara os 360 registros aos JSONs e confere reimportação, preservação de edições e ausência de colisões com Date e Deitel. Isso não representa execução nem validação do servidor PostgreSQL/Supabase. Intervalos de referências podem compartilhar a página na qual uma seção termina e outra começa.

O PDF e a extração integral não são incluídos no repositório. O script prepare-governanca.cjs permite reconstruir o mapa inicial a partir da extração temporária, mas ajustes editoriais do mapa devem ser preservados.
