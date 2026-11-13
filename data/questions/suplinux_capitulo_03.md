# CIAA — capítulo 3: Sistema de arquivos e estrutura de diretórios

10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/suplinux_capitulo_03.sql) · [Índice](suplinux_README.md)

## 1. Fácil — conceito

No estudo de “Sistema de arquivos e estrutura de diretórios” em CIAA, qual conceito corresponde à descrição: “Dispositivo de bloco preparado para integrar o armazenamento gerenciado pelo LVM.”?

A) Diretório raiz (/)

B) Volume físico (PV)

C) Volume lógico (LV)

D) Diretório /home

E) Grupo de volumes (VG)

**Gabarito: B.** Volume físico (PV): Dispositivo de bloco preparado para integrar o armazenamento gerenciado pelo LVM.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 2. Médio — aplicação

Um disco é preparado como unidade básica de armazenamento para integrar um grupo LVM. Que camada ele passa a representar?

A) Diretório /home

B) Volume lógico (LV)

C) Diretório raiz (/)

D) Volume físico (PV)

E) Grupo de volumes (VG)

**Gabarito: D.** Volume físico (PV): Dispositivo de bloco preparado para integrar o armazenamento gerenciado pelo LVM.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 3. Fácil — conceito

No estudo de “Sistema de arquivos e estrutura de diretórios” em CIAA, qual conceito corresponde à descrição: “Agrupamento de volumes físicos que fornece espaço para volumes lógicos no LVM.”?

A) Grupo de volumes (VG)

B) Volume físico (PV)

C) Diretório /home

D) Diretório raiz (/)

E) Volume lógico (LV)

**Gabarito: A.** Grupo de volumes (VG): Agrupamento de volumes físicos que fornece espaço para volumes lógicos no LVM.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 4. Médio — aplicação

Uma equipe reúne capacidade de vários PVs em um conjunto de armazenamento. Que camada LVM está criando?

A) Volume físico (PV)

B) Volume lógico (LV)

C) Diretório /home

D) Grupo de volumes (VG)

E) Diretório raiz (/)

**Gabarito: D.** Grupo de volumes (VG): Agrupamento de volumes físicos que fornece espaço para volumes lógicos no LVM.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 5. Fácil — conceito

No estudo de “Sistema de arquivos e estrutura de diretórios” em CIAA, qual conceito corresponde à descrição: “Unidade lógica alocada a partir de um grupo de volumes e utilizável como dispositivo de bloco.”?

A) Diretório raiz (/)

B) Volume lógico (LV)

C) Volume físico (PV)

D) Diretório /home

E) Grupo de volumes (VG)

**Gabarito: B.** Volume lógico (LV): Unidade lógica alocada a partir de um grupo de volumes e utilizável como dispositivo de bloco.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 6. Médio — aplicação

Dentro de um VG, é criada uma unidade para receber um sistema de arquivos. Que camada do LVM foi criada?

A) Diretório /home

B) Grupo de volumes (VG)

C) Volume lógico (LV)

D) Volume físico (PV)

E) Diretório raiz (/)

**Gabarito: C.** Volume lógico (LV): Unidade lógica alocada a partir de um grupo de volumes e utilizável como dispositivo de bloco.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 7. Fácil — conceito

No estudo de “Sistema de arquivos e estrutura de diretórios” em CIAA, qual conceito corresponde à descrição: “Ponto superior da árvore de diretórios, abaixo do qual se organiza a hierarquia de arquivos.”?

A) Volume lógico (LV)

B) Grupo de volumes (VG)

C) Diretório raiz (/)

D) Diretório /home

E) Volume físico (PV)

**Gabarito: C.** Diretório raiz (/): Ponto superior da árvore de diretórios, abaixo do qual se organiza a hierarquia de arquivos.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 8. Médio — aplicação

Qual diretório representa o topo da árvore de caminhos de um sistema Linux?

A) Diretório raiz (/)

B) Diretório /home

C) Volume físico (PV)

D) Volume lógico (LV)

E) Grupo de volumes (VG)

**Gabarito: A.** Diretório raiz (/): Ponto superior da árvore de diretórios, abaixo do qual se organiza a hierarquia de arquivos.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 9. Fácil — conceito

No estudo de “Sistema de arquivos e estrutura de diretórios” em CIAA, qual conceito corresponde à descrição: “Local tradicional para os diretórios pessoais dos usuários comuns.”?

A) Diretório raiz (/)

B) Grupo de volumes (VG)

C) Volume físico (PV)

D) Volume lógico (LV)

E) Diretório /home

**Gabarito: E.** Diretório /home: Local tradicional para os diretórios pessoais dos usuários comuns.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 10. Médio — aplicação

Onde ficam tradicionalmente os diretórios pessoais das contas comuns, como o diretório de trabalho de um aluno?

A) Volume físico (PV)

B) Diretório raiz (/)

C) Volume lógico (LV)

D) Grupo de volumes (VG)

E) Diretório /home

**Gabarito: E.** Diretório /home: Local tradicional para os diretórios pessoais dos usuários comuns.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 3: Sistema de arquivos e estrutura de diretórios, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.
