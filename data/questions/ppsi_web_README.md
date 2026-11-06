# Questões — Requisitos mínimos para aplicações Web

**200 questões originais em dez blocos temáticos**, baseadas no guia da Secretaria de Governo Digital (SGD), PPSI, versão 2.0. O PDF tem 55 páginas físicas. A capa indica abril de 2022, enquanto o histórico da página 3 atribui a versão 2.0 a **15/04/2023**. Essa divergência está preservada nas referências.

## Uso

[SQL completo](../../supabase/seeds/ppsi_web_completo.sql). Também há JSON, Markdown e SQL por bloco. Execute os seeds após configurar public.questions, com conta administrativa. Os IDs são fixos e ON CONFLICT (id) DO NOTHING preserva registros e revisões anteriores.

Classificação: **CP-T / Informática / Segurança da Informação**; question_type=bibliography, year=null, is_annulled=false, **is_published=false**. Gabaritos de 0 a 4. Nada foi enviado ao Supabase.

## Organização e escopo

Os blocos são uma organização editorial das seções do guia, e não dez capítulos do documento. O PDF contém três capítulos. Os blocos 1 e 2 correspondem aos capítulos 1 e 2; os demais distribuem as seções do capítulo 3, incluindo todas as 14 categorias de segurança. O campo chapter indica o bloco editorial por compatibilidade com os bancos anteriores; section preserva a seção ou faixa de seções de origem.

Cada bloco seleciona dez conceitos ou controles, com uma questão de identificação e outra de aplicação para cada um. As situações e definições são originais. A cobertura é representativa: não há uma questão para cada requisito numerado. Cada bloco tem dez itens fáceis, dez médios e quatro respostas de cada letra. Os pares são intencionais; evite apresentá-los juntos em avaliações. Dificuldades são classificações editoriais preliminares.

As referências indicam posições físicas no PDF e o contexto da versão fornecida. O material não atesta vigência de normas, suficiência de conformidade nem atualidade de recomendações técnicas. Não foram reproduzidas recomendações históricas sobre troca periódica obrigatória de senhas, bloqueio do gerenciador de senhas ou robots.txt como proteção de acesso. A seleção evita tratar consentimento como única base para tratamento de dados ou anonimização como obrigação indiscriminada. O PDF e sua extração integral não são incluídos no repositório.

## Blocos

| Bloco | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
| 1 | Diretrizes gerais | 8–11 | [Revisar](ppsi_web_bloco_01.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_01.sql) |
| 2 | Requisitos gerais e ambiente | 12–14 | [Revisar](ppsi_web_bloco_02.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_02.sql) |
| 3 | Requisitos específicos de privacidade | 15–20 | [Revisar](ppsi_web_bloco_03.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_03.sql) |
| 4 | Validação de entrada e codificação de saída | 21–24 | [Revisar](ppsi_web_bloco_04.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_04.sql) |
| 5 | Autenticação e credenciais | 24–28 | [Revisar](ppsi_web_bloco_05.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_05.sql) |
| 6 | Sessões e controle de acesso | 28–33 | [Revisar](ppsi_web_bloco_06.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_06.sql) |
| 7 | Criptografia, erros e logs | 33–38 | [Revisar](ppsi_web_bloco_07.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_07.sql) |
| 8 | Proteção de dados e comunicações | 38–41 | [Revisar](ppsi_web_bloco_08.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_08.sql) |
| 9 | Configuração e banco de dados | 41–45 | [Revisar](ppsi_web_bloco_09.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_09.sql) |
| 10 | Arquivos, memória e codificação | 45–51 | [Revisar](ppsi_web_bloco_10.md) | [SQL](../../supabase/seeds/ppsi_web_bloco_10.sql) |

## Manutenção e validação

Fontes editoriais: [conceitos](ppsi_web_conceitos.txt) e [metadados](ppsi_web_metadata.json). Cada linha contém bloco:páginas, resposta, definição e situação original, separados por barras verticais.

Execute:

~~~text
node data/questions/generate-ppsi_web.cjs
node data/questions/generate-ppsi_web.cjs --check
node data/questions/validate-ppsi_web.cjs
~~~

A validação verifica contagens, páginas, seções, alternativas, gabaritos, unicidade, equivalência JSON/SQL e preservação de revisões ao reimportar. A execução local usa SQLite em memória com adaptação sintática do SQL. Não substitui execução em PostgreSQL/Supabase nem revisão técnica e pedagógica. Todos os itens permanecem em rascunho.
