# Questões — UML: guia do usuário

**660 questões originais, 20 por capítulo, para os 33 capítulos do PDF fornecido (757 páginas).** Em cada capítulo foram selecionados dez conceitos, cada qual trabalhado em uma questão de identificação e outra de aplicação. É uma seleção representativa para estudo, sem pretensão de cobrir todo o conteúdo. Os apêndices e o glossário não têm lotes próprios.

## Importação

Use o [SQL único](../../supabase/seeds/uml_completo.sql) no SQL Editor do Supabase após configurar public.questions, com acesso administrativo, ou os SQLs por capítulo. As duas formas usam os mesmos IDs. ON CONFLICT (id) DO NOTHING preserva registros e alterações já existentes.

Classificação: **CP-T / Informática / Engenharia de Software**, question_type=bibliography, year=null, is_annulled=false, **is_published=false**. O índice do gabarito varia de 0 a 4. A geração e a validação são locais; nenhum registro foi enviado ao Supabase.

## Fonte e contexto

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: guia do usuário**. Tradução de Fábio Freitas da Silva e Cristina de Amorim Machado. Elsevier, 2012, 12ª reimpressão; tradução de The Unified Modeling Language User Guide, 2nd ed. O prefácio da edição recebida trata da **UML 2.0**.

As páginas são posições físicas no PDF recebido, sem correspondência presumida com a paginação impressa. Cada referência informa o intervalo do capítulo como apoio, e não uma citação pontual de frase. O capítulo 3 utiliza o exemplo histórico de applet como material de modelagem; isso não constitui recomendação de plataforma atual. No capítulo 24, as funções temporais sugeridas pelos autores são tratadas como convenções auxiliares, não como funções oficiais da UML.

As questões e explicações são originais, sem transcrição dos exercícios do livro e sem atribuição de caráter oficial ao CP-T. As dificuldades Fácil e Médio são classificações editoriais iniciais. Revise a precisão dos enunciados, a plausibilidade dos distratores e a dificuldade antes da publicação. Os pares de questões revisitam deliberadamente o mesmo conceito; evite apresentá-los juntos se a repetição prejudicar uma avaliação.

## Capítulos

Todos têm 20 questões, cinco alternativas e uma resposta correta.

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
| 1 | Por que fazer a Modelagem? | 31–44 | [Revisar](uml_capitulo_01.md) | [SQL](../../supabase/seeds/uml_capitulo_01.sql) |
| 2 | Introdução à UML | 46–80 | [Revisar](uml_capitulo_02.md) | [SQL](../../supabase/seeds/uml_capitulo_02.sql) |
| 3 | Hello, World! | 82–93 | [Revisar](uml_capitulo_03.md) | [SQL](../../supabase/seeds/uml_capitulo_03.sql) |
| 4 | Classes | 95–111 | [Revisar](uml_capitulo_04.md) | [SQL](../../supabase/seeds/uml_capitulo_04.sql) |
| 5 | Relacionamentos | 113–131 | [Revisar](uml_capitulo_05.md) | [SQL](../../supabase/seeds/uml_capitulo_05.sql) |
| 6 | Mecanismos | 133–151 | [Revisar](uml_capitulo_06.md) | [SQL](../../supabase/seeds/uml_capitulo_06.sql) |
| 7 | Diagramas | 153–173 | [Revisar](uml_capitulo_07.md) | [SQL](../../supabase/seeds/uml_capitulo_07.sql) |
| 8 | Diagramas de Classes | 175–192 | [Revisar](uml_capitulo_08.md) | [SQL](../../supabase/seeds/uml_capitulo_08.sql) |
| 9 | Classes Avançadas | 194–215 | [Revisar](uml_capitulo_09.md) | [SQL](../../supabase/seeds/uml_capitulo_09.sql) |
| 10 | Relacionamentos Avançados | 217–241 | [Revisar](uml_capitulo_10.md) | [SQL](../../supabase/seeds/uml_capitulo_10.sql) |
| 11 | Interfaces, Tipos e Funções | 243–257 | [Revisar](uml_capitulo_11.md) | [SQL](../../supabase/seeds/uml_capitulo_11.sql) |
| 12 | Pacotes | 259–273 | [Revisar](uml_capitulo_12.md) | [SQL](../../supabase/seeds/uml_capitulo_12.sql) |
| 13 | Instâncias | 275–287 | [Revisar](uml_capitulo_13.md) | [SQL](../../supabase/seeds/uml_capitulo_13.sql) |
| 14 | Diagramas de Objetos | 289–298 | [Revisar](uml_capitulo_14.md) | [SQL](../../supabase/seeds/uml_capitulo_14.sql) |
| 15 | Componentes | 300–319 | [Revisar](uml_capitulo_15.md) | [SQL](../../supabase/seeds/uml_capitulo_15.sql) |
| 16 | Interações | 321–341 | [Revisar](uml_capitulo_16.md) | [SQL](../../supabase/seeds/uml_capitulo_16.sql) |
| 17 | Casos de Uso | 343–361 | [Revisar](uml_capitulo_17.md) | [SQL](../../supabase/seeds/uml_capitulo_17.sql) |
| 18 | Diagramas de Casos de Uso | 363–375 | [Revisar](uml_capitulo_18.md) | [SQL](../../supabase/seeds/uml_capitulo_18.sql) |
| 19 | Diagramas de Interação | 377–400 | [Revisar](uml_capitulo_19.md) | [SQL](../../supabase/seeds/uml_capitulo_19.sql) |
| 20 | Diagramas de Atividades | 402–428 | [Revisar](uml_capitulo_20.md) | [SQL](../../supabase/seeds/uml_capitulo_20.sql) |
| 21 | Eventos e Sinais | 430–442 | [Revisar](uml_capitulo_21.md) | [SQL](../../supabase/seeds/uml_capitulo_21.sql) |
| 22 | Máquinas de Estados | 444–475 | [Revisar](uml_capitulo_22.md) | [SQL](../../supabase/seeds/uml_capitulo_22.sql) |
| 23 | Processos e Threads | 477–493 | [Revisar](uml_capitulo_23.md) | [SQL](../../supabase/seeds/uml_capitulo_23.sql) |
| 24 | Tempo e Espaço | 495–505 | [Revisar](uml_capitulo_24.md) | [SQL](../../supabase/seeds/uml_capitulo_24.sql) |
| 25 | Diagramas de Estados | 507–522 | [Revisar](uml_capitulo_25.md) | [SQL](../../supabase/seeds/uml_capitulo_25.sql) |
| 26 | Artefatos | 524–537 | [Revisar](uml_capitulo_26.md) | [SQL](../../supabase/seeds/uml_capitulo_26.sql) |
| 27 | Implantação | 539–548 | [Revisar](uml_capitulo_27.md) | [SQL](../../supabase/seeds/uml_capitulo_27.sql) |
| 28 | Colaborações | 550–567 | [Revisar](uml_capitulo_28.md) | [SQL](../../supabase/seeds/uml_capitulo_28.sql) |
| 29 | Padrões e Frameworks | 569–584 | [Revisar](uml_capitulo_29.md) | [SQL](../../supabase/seeds/uml_capitulo_29.sql) |
| 30 | Diagramas de Artefatos | 586–604 | [Revisar](uml_capitulo_30.md) | [SQL](../../supabase/seeds/uml_capitulo_30.sql) |
| 31 | Diagramas de Implantação | 606–620 | [Revisar](uml_capitulo_31.md) | [SQL](../../supabase/seeds/uml_capitulo_31.sql) |
| 32 | Sistemas e Modelos | 622–635 | [Revisar](uml_capitulo_32.md) | [SQL](../../supabase/seeds/uml_capitulo_32.sql) |
| 33 | Aplicando a UML | 637–641 | [Revisar](uml_capitulo_33.md) | [SQL](../../supabase/seeds/uml_capitulo_33.sql) |

## Manutenção e validação

Edite [uml_conceitos.txt](uml_conceitos.txt), cujas linhas contêm capítulo, resposta, definição e pergunta de aplicação. O [gerador](generate-uml.cjs) contém o mapa de capítulos e as exclusões entre alternativas semanticamente próximas. Os arquivos JSON e Markdown por capítulo e todos os SQLs são derivados desses dados.

```sh
node data/questions/generate-uml.cjs
node data/questions/generate-uml.cjs --check
node data/questions/validate-uml.cjs
```

O gerador confere contagens, cinco alternativas distintas, enunciados únicos, IDs fixos e quatro gabaritos de cada letra por capítulo. O validador compara todos os campos importáveis dos JSONs com os SQLs, verifica reimportação e preservação de edições, e combina os IDs com os lotes de Date, Deitel e Governança. Ele usa uma adaptação sintática do SQL em SQLite na memória; não valida a execução do servidor PostgreSQL/Supabase. Checks estruturais não substituem revisão pedagógica.

O PDF e sua extração integral não são incluídos no repositório.
