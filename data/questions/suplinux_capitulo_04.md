# CIAA — capítulo 4: Tipos de arquivos

10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/suplinux_capitulo_04.sql) · [Índice](suplinux_README.md)

## 1. Fácil — conceito

No estudo de “Tipos de arquivos” em CIAA, qual conceito corresponde à descrição: “Estrutura que registra metadados do arquivo; o nome é associado ao número do inode por uma entrada de diretório.”?

A) Hard link

B) Link simbólico

C) Inode

D) Diretório

E) Arquivo regular

**Gabarito: C.** Inode: Estrutura que registra metadados do arquivo; o nome é associado ao número do inode por uma entrada de diretório.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 34–35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 2. Médio — aplicação

Uma análise procura permissões e proprietário em uma estrutura que não armazena o nome do arquivo. Que estrutura deve examinar?

A) Link simbólico

B) Arquivo regular

C) Inode

D) Hard link

E) Diretório

**Gabarito: C.** Inode: Estrutura que registra metadados do arquivo; o nome é associado ao número do inode por uma entrada de diretório.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 34–35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 3. Fácil — conceito

No estudo de “Tipos de arquivos” em CIAA, qual conceito corresponde à descrição: “Tipo de arquivo que armazena conteúdo convencional, como texto ou dados de um programa.”?

A) Inode

B) Hard link

C) Link simbólico

D) Arquivo regular

E) Diretório

**Gabarito: D.** Arquivo regular: Tipo de arquivo que armazena conteúdo convencional, como texto ou dados de um programa.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 4. Médio — aplicação

Um documento de texto é classificado pelo tipo de arquivo, sem depender da extensão de seu nome. Em qual categoria se enquadra?

A) Diretório

B) Hard link

C) Link simbólico

D) Inode

E) Arquivo regular

**Gabarito: E.** Arquivo regular: Tipo de arquivo que armazena conteúdo convencional, como texto ou dados de um programa.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 5. Fácil — conceito

No estudo de “Tipos de arquivos” em CIAA, qual conceito corresponde à descrição: “Tipo de arquivo que organiza entradas associando nomes a arquivos e subdiretórios.”?

A) Diretório

B) Inode

C) Link simbólico

D) Hard link

E) Arquivo regular

**Gabarito: A.** Diretório: Tipo de arquivo que organiza entradas associando nomes a arquivos e subdiretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 6. Médio — aplicação

Qual tipo de arquivo organiza nomes e referências a outros arquivos na hierarquia?

A) Link simbólico

B) Diretório

C) Hard link

D) Inode

E) Arquivo regular

**Gabarito: B.** Diretório: Tipo de arquivo que organiza entradas associando nomes a arquivos e subdiretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 35 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 7. Fácil — conceito

No estudo de “Tipos de arquivos” em CIAA, qual conceito corresponde à descrição: “Nome adicional para o mesmo arquivo e inode, dentro do mesmo sistema de arquivos.”?

A) Arquivo regular

B) Hard link

C) Link simbólico

D) Inode

E) Diretório

**Gabarito: B.** Hard link: Nome adicional para o mesmo arquivo e inode, dentro do mesmo sistema de arquivos.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 36 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 8. Médio — aplicação

Dois nomes no mesmo sistema de arquivos apontam para o mesmo inode e refletem alterações no mesmo conteúdo. Que vínculo existe?

A) Link simbólico

B) Diretório

C) Inode

D) Hard link

E) Arquivo regular

**Gabarito: D.** Hard link: Nome adicional para o mesmo arquivo e inode, dentro do mesmo sistema de arquivos.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 36 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 9. Fácil — conceito

No estudo de “Tipos de arquivos” em CIAA, qual conceito corresponde à descrição: “Arquivo que referencia um caminho e pode ficar quebrado se seu destino deixar de existir.”?

A) Link simbólico

B) Diretório

C) Arquivo regular

D) Hard link

E) Inode

**Gabarito: A.** Link simbólico: Arquivo que referencia um caminho e pode ficar quebrado se seu destino deixar de existir.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 37 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 10. Médio — aplicação

Um atalho para um caminho permanece presente depois que o destino é removido. Que tipo de link explica esse comportamento?

A) Hard link

B) Arquivo regular

C) Diretório

D) Inode

E) Link simbólico

**Gabarito: E.** Link simbólico: Arquivo que referencia um caminho e pode ficar quebrado se seu destino deixar de existir.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 4: Tipos de arquivos, páginas 37 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.
