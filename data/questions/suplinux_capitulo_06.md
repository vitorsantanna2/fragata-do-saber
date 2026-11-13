# CIAA — capítulo 6: Permissões e propriedades de arquivos

10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/suplinux_capitulo_06.sql) · [Índice](suplinux_README.md)

## 1. Fácil — conceito

No estudo de “Permissões e propriedades de arquivos” em CIAA, qual conceito corresponde à descrição: “Comando que altera os bits de permissão de arquivos ou diretórios.”?

A) Sticky bit

B) chown

C) chgrp

D) chmod

E) umask

**Gabarito: D.** chmod: Comando que altera os bits de permissão de arquivos ou diretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 57–58 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 2. Médio — aplicação

O dono de um arquivo quer alterar suas permissões de leitura e escrita. Que comando realiza essa mudança?

A) Sticky bit

B) chmod

C) chown

D) umask

E) chgrp

**Gabarito: B.** chmod: Comando que altera os bits de permissão de arquivos ou diretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 57–58 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 3. Fácil — conceito

No estudo de “Permissões e propriedades de arquivos” em CIAA, qual conceito corresponde à descrição: “Comando usado para alterar o proprietário de um arquivo e, opcionalmente, seu grupo, mediante autorização.”?

A) chown

B) Sticky bit

C) chmod

D) umask

E) chgrp

**Gabarito: A.** chown: Comando usado para alterar o proprietário de um arquivo e, opcionalmente, seu grupo, mediante autorização.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 59 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 4. Médio — aplicação

Um administrador precisa transferir a propriedade de um arquivo para outra conta. Que comando é apropriado?

A) chgrp

B) chmod

C) umask

D) chown

E) Sticky bit

**Gabarito: D.** chown: Comando usado para alterar o proprietário de um arquivo e, opcionalmente, seu grupo, mediante autorização.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 59 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 5. Fácil — conceito

No estudo de “Permissões e propriedades de arquivos” em CIAA, qual conceito corresponde à descrição: “Comando que altera o grupo associado a arquivos ou diretórios, respeitadas as permissões necessárias.”?

A) chown

B) umask

C) chmod

D) Sticky bit

E) chgrp

**Gabarito: E.** chgrp: Comando que altera o grupo associado a arquivos ou diretórios, respeitadas as permissões necessárias.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 60 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 6. Médio — aplicação

Qual comando tem como finalidade específica mudar o grupo de um arquivo?

A) chgrp

B) chown

C) umask

D) Sticky bit

E) chmod

**Gabarito: A.** chgrp: Comando que altera o grupo associado a arquivos ou diretórios, respeitadas as permissões necessárias.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 60 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 7. Fácil — conceito

No estudo de “Permissões e propriedades de arquivos” em CIAA, qual conceito corresponde à descrição: “Máscara que remove bits de permissão da base solicitada na criação de arquivos e diretórios.”?

A) chown

B) Sticky bit

C) umask

D) chgrp

E) chmod

**Gabarito: C.** umask: Máscara que remove bits de permissão da base solicitada na criação de arquivos e diretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 61 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 8. Médio — aplicação

Uma sessão deve restringir as permissões iniciais de arquivos futuros, sem modificar os existentes. Que mecanismo deve configurar?

A) chgrp

B) chmod

C) chown

D) Sticky bit

E) umask

**Gabarito: E.** umask: Máscara que remove bits de permissão da base solicitada na criação de arquivos e diretórios.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 61 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 9. Fácil — conceito

No estudo de “Permissões e propriedades de arquivos” em CIAA, qual conceito corresponde à descrição: “Bit que restringe a remoção e a renomeação de entradas em diretório compartilhado, em condições usuais, ao dono da entrada, dono do diretório ou usuário privilegiado.”?

A) chown

B) Sticky bit

C) umask

D) chgrp

E) chmod

**Gabarito: B.** Sticky bit: Bit que restringe a remoção e a renomeação de entradas em diretório compartilhado, em condições usuais, ao dono da entrada, dono do diretório ou usuário privilegiado.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 63 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 10. Médio — aplicação

Em uma pasta compartilhada com escrita para vários usuários, deseja-se impedir que cada um remova livremente arquivos dos demais. Que bit deve ser considerado?

A) chown

B) chmod

C) Sticky bit

D) umask

E) chgrp

**Gabarito: C.** Sticky bit: Bit que restringe a remoção e a renomeação de entradas em diretório compartilhado, em condições usuais, ao dono da entrada, dono do diretório ou usuário privilegiado.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 6: Permissões e propriedades de arquivos, páginas 63 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.
