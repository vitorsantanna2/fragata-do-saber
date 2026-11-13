# CIAA — capítulo 13: Estratégias de backup / RAID

10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/suplinux_capitulo_13.sql) · [Índice](suplinux_README.md)

## 1. Fácil — conceito

No estudo de “Estratégias de backup / RAID” em CIAA, qual conceito corresponde à descrição: “Cópia de todos os dados incluídos no escopo definido para a operação.”?

A) RAID 1

B) Backup on-line

C) Backup diferencial

D) Backup total

E) RAID 0

**Gabarito: D.** Backup total: Cópia de todos os dados incluídos no escopo definido para a operação.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 87 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 2. Médio — aplicação

Uma rotina copia todos os arquivos selecionados para proteção, sem filtrar apenas os alterados. Que tipo de backup realiza?

A) Backup diferencial

B) RAID 1

C) Backup total

D) RAID 0

E) Backup on-line

**Gabarito: C.** Backup total: Cópia de todos os dados incluídos no escopo definido para a operação.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 87 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 3. Fácil — conceito

No estudo de “Estratégias de backup / RAID” em CIAA, qual conceito corresponde à descrição: “Cópia das alterações acumuladas desde o último backup total.”?

A) Backup total

B) Backup on-line

C) Backup diferencial

D) RAID 1

E) RAID 0

**Gabarito: C.** Backup diferencial: Cópia das alterações acumuladas desde o último backup total.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 88 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 4. Médio — aplicação

Uma rotina copia a cada execução todas as mudanças acumuladas desde a última cópia completa. Que tipo de backup descreve?

A) Backup total

B) Backup on-line

C) RAID 0

D) Backup diferencial

E) RAID 1

**Gabarito: D.** Backup diferencial: Cópia das alterações acumuladas desde o último backup total.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 88 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 5. Fácil — conceito

No estudo de “Estratégias de backup / RAID” em CIAA, qual conceito corresponde à descrição: “Cópia realizada enquanto o sistema ou serviço permanece em funcionamento, exigindo suporte adequado à consistência.”?

A) Backup on-line

B) Backup diferencial

C) Backup total

D) RAID 0

E) RAID 1

**Gabarito: A.** Backup on-line: Cópia realizada enquanto o sistema ou serviço permanece em funcionamento, exigindo suporte adequado à consistência.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 89 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 6. Médio — aplicação

Uma aplicação continua operando durante a cópia e oferece suporte à consistência desse procedimento. Qual modo de backup está sendo usado?

A) Backup diferencial

B) RAID 1

C) Backup total

D) RAID 0

E) Backup on-line

**Gabarito: E.** Backup on-line: Cópia realizada enquanto o sistema ou serviço permanece em funcionamento, exigindo suporte adequado à consistência.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 89 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 7. Fácil — conceito

No estudo de “Estratégias de backup / RAID” em CIAA, qual conceito corresponde à descrição: “Distribuição dos dados entre discos sem redundância para suportar falha de um deles.”?

A) Backup diferencial

B) RAID 0

C) Backup total

D) RAID 1

E) Backup on-line

**Gabarito: B.** RAID 0: Distribuição dos dados entre discos sem redundância para suportar falha de um deles.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 92 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 8. Médio — aplicação

Um conjunto distribui dados entre discos, mas não mantém redundância para a falha de uma unidade. Que nível de RAID está representado?

A) Backup on-line

B) RAID 0

C) Backup diferencial

D) RAID 1

E) Backup total

**Gabarito: B.** RAID 0: Distribuição dos dados entre discos sem redundância para suportar falha de um deles.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 92 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 9. Fácil — conceito

No estudo de “Estratégias de backup / RAID” em CIAA, qual conceito corresponde à descrição: “Organização que mantém cópias espelhadas dos dados em mais de um disco.”?

A) RAID 1

B) Backup on-line

C) Backup diferencial

D) Backup total

E) RAID 0

**Gabarito: A.** RAID 1: Organização que mantém cópias espelhadas dos dados em mais de um disco.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 92 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 10. Médio — aplicação

Dois discos mantêm cópias espelhadas para que os dados continuem disponíveis se um deles falhar. Que nível de RAID foi escolhido?

A) Backup diferencial

B) Backup on-line

C) RAID 0

D) Backup total

E) RAID 1

**Gabarito: E.** RAID 1: Organização que mantém cópias espelhadas dos dados em mais de um disco.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 13: Estratégias de backup / RAID, páginas 92 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.
