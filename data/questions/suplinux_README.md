# C-Exp-SupLinux — questões da apostila

140 questões originais, dez por capítulo nos 14 capítulos do guia do CIAA de 2021 (96 páginas físicas). Fonte: MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Arquivo fornecido: Apostiala C-Exp-SupLinux-PR Alterada.pdf. A denominação exibida no aplicativo segue o pedido: C-Exp-SupLinux.

Classificação: exam=C-Exp-SupLinux, subject=Linux, topic=Linux, question_type=bibliography, year=null. Todas as questões são rascunhos (is_published=false). Não são provas oficiais. Nada foi enviado ao Supabase.

O curso foi adicionado ao catálogo em Cursos expeditos, com acesso a Questões da apostila. O aplicativo consulta o banco pelo identificador exato do curso. Para disponibilizar as questões, execute o [SQL completo](../../supabase/seeds/suplinux_completo.sql) no SQL Editor com conta administrativa após configurar public.questions; revise e publique os itens pelo fluxo administrativo existente. Enquanto forem rascunhos não aparecem para alunos. A alteração do catálogo também precisa ser incluída na publicação do aplicativo.

Cada capítulo seleciona cinco conceitos, cada um com identificação e aplicação. Há cinco alternativas e gabaritos equilibrados por capítulo. A dificuldade é preliminar; a seleção é representativa e não cobre todas as seções. Convém separar os pares e revisar os distratores antes de publicar.

Referências indicam páginas físicas do PDF. O PDF e sua extração não integram o repositório. Não foram executados os comandos de instalação e configuração contidos no documento.

Notas editoriais: o guia contém inconsistências. As questões distinguem particionamento de formatação e limitam partições estendidas/lógicas ao esquema MBR; distinguem start de enable; não reproduzem a confusão entre backup incremental e diferencial; descrevem links simbólicos por caminho sem afirmar que não possuem inode; a umask remove bits da base de criação, e sticky bit restringe remoção/renomeação, sem garantir sigilo de leitura. Não reproduzem o exemplo de desativação do firewall na instalação do Apache, números históricos de participação de mercado ou afirmações sobre suporte FTP nativo no Apache HTTP Server. Ferramentas e menus correspondem ao contexto do guia de 2021, sem alegação sobre versões atuais.

| Capítulo | Tema | Páginas do PDF | Revisão | Importação |
| --- | --- | --- | --- | --- |
| 1 | Introdução ao Linux | 8–20 | [Revisar](suplinux_capitulo_01.md) | [SQL](../../supabase/seeds/suplinux_capitulo_01.sql) |
| 2 | Instalação do Linux | 21–24 | [Revisar](suplinux_capitulo_02.md) | [SQL](../../supabase/seeds/suplinux_capitulo_02.sql) |
| 3 | Sistema de arquivos e estrutura de diretórios | 25–33 | [Revisar](suplinux_capitulo_03.md) | [SQL](../../supabase/seeds/suplinux_capitulo_03.sql) |
| 4 | Tipos de arquivos | 34–37 | [Revisar](suplinux_capitulo_04.md) | [SQL](../../supabase/seeds/suplinux_capitulo_04.sql) |
| 5 | Introdução ao shell | 38–55 | [Revisar](suplinux_capitulo_05.md) | [SQL](../../supabase/seeds/suplinux_capitulo_05.sql) |
| 6 | Permissões e propriedades de arquivos | 56–63 | [Revisar](suplinux_capitulo_06.md) | [SQL](../../supabase/seeds/suplinux_capitulo_06.sql) |
| 7 | Recursos do shell Bash | 64–69 | [Revisar](suplinux_capitulo_07.md) | [SQL](../../supabase/seeds/suplinux_capitulo_07.sql) |
| 8 | Edição de arquivos texto com o VI/VIM/Nano | 70–76 | [Revisar](suplinux_capitulo_08.md) | [SQL](../../supabase/seeds/suplinux_capitulo_08.sql) |
| 9 | Gerenciamento de pacotes | 77–81 | [Revisar](suplinux_capitulo_09.md) | [SQL](../../supabase/seeds/suplinux_capitulo_09.sql) |
| 10 | Webmin | 82–83 | [Revisar](suplinux_capitulo_10.md) | [SQL](../../supabase/seeds/suplinux_capitulo_10.sql) |
| 11 | Apache - servidor Web | 84–85 | [Revisar](suplinux_capitulo_11.md) | [SQL](../../supabase/seeds/suplinux_capitulo_11.sql) |
| 12 | Firewall | 86–86 | [Revisar](suplinux_capitulo_12.md) | [SQL](../../supabase/seeds/suplinux_capitulo_12.sql) |
| 13 | Estratégias de backup / RAID | 87–92 | [Revisar](suplinux_capitulo_13.md) | [SQL](../../supabase/seeds/suplinux_capitulo_13.sql) |
| 14 | Ferramentas de rede | 93–96 | [Revisar](suplinux_capitulo_14.md) | [SQL](../../supabase/seeds/suplinux_capitulo_14.sql) |

Fontes: [conceitos](suplinux_conceitos.txt), [metadados](suplinux_metadata.json).

```text
node data/questions/generate-suplinux.cjs
node data/questions/generate-suplinux.cjs --check
node data/questions/validate-suplinux.cjs
```

A validação confere contagens, páginas, alternativas, gabaritos, unicidade e equivalência JSON/SQL, com reimportação preservando revisões. Usa SQLite em memória com adaptação sintática; não equivale a executar PostgreSQL/Supabase nem substitui revisão pedagógica.
