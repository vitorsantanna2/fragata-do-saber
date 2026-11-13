# CIAA — capítulo 12: Firewall

10 questões originais: cinco de conceito e cinco de aplicação. C-Exp-SupLinux / Linux / Linux. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/suplinux_capitulo_12.sql) · [Índice](suplinux_README.md)

## 1. Fácil — conceito

No estudo de “Firewall” em CIAA, qual conceito corresponde à descrição: “Comando apresentado para consultar o estado do serviço firewalld.”?

A) systemctl start firewalld

B) systemctl status firewalld

C) iptables -L

D) firewall-cmd --reload

E) systemctl enable firewalld

**Gabarito: B.** systemctl status firewalld: Comando apresentado para consultar o estado do serviço firewalld.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 2. Médio — aplicação

Um operador quer consultar o estado do serviço de firewall sem iniciá-lo nem mudar sua configuração. Qual comando deve escolher?

A) systemctl status firewalld

B) firewall-cmd --reload

C) systemctl enable firewalld

D) systemctl start firewalld

E) iptables -L

**Gabarito: A.** systemctl status firewalld: Comando apresentado para consultar o estado do serviço firewalld.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 3. Fácil — conceito

No estudo de “Firewall” em CIAA, qual conceito corresponde à descrição: “Comando apresentado para listar regras das cadeias iptables.”?

A) systemctl start firewalld

B) firewall-cmd --reload

C) systemctl enable firewalld

D) iptables -L

E) systemctl status firewalld

**Gabarito: D.** iptables -L: Comando apresentado para listar regras das cadeias iptables.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 4. Médio — aplicação

Qual comando do capítulo lista as regras iptables em vez de consultar o estado de um serviço?

A) systemctl status firewalld

B) systemctl start firewalld

C) firewall-cmd --reload

D) iptables -L

E) systemctl enable firewalld

**Gabarito: D.** iptables -L: Comando apresentado para listar regras das cadeias iptables.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 5. Fácil — conceito

No estudo de “Firewall” em CIAA, qual conceito corresponde à descrição: “Comando apresentado para iniciar o serviço firewalld na sessão atual.”?

A) systemctl enable firewalld

B) systemctl start firewalld

C) iptables -L

D) systemctl status firewalld

E) firewall-cmd --reload

**Gabarito: B.** systemctl start firewalld: Comando apresentado para iniciar o serviço firewalld na sessão atual.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 6. Médio — aplicação

O serviço de firewall está parado e deve ser iniciado imediatamente. Qual comando realiza essa ação?

A) firewall-cmd --reload

B) systemctl enable firewalld

C) systemctl start firewalld

D) iptables -L

E) systemctl status firewalld

**Gabarito: C.** systemctl start firewalld: Comando apresentado para iniciar o serviço firewalld na sessão atual.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 7. Fácil — conceito

No estudo de “Firewall” em CIAA, qual conceito corresponde à descrição: “Comando apresentado para habilitar o serviço firewalld na inicialização do sistema.”?

A) systemctl status firewalld

B) systemctl start firewalld

C) systemctl enable firewalld

D) firewall-cmd --reload

E) iptables -L

**Gabarito: C.** systemctl enable firewalld: Comando apresentado para habilitar o serviço firewalld na inicialização do sistema.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 8. Médio — aplicação

Qual comando configura o serviço de firewall para ser iniciado no boot, sem que habilitar equivalha por si só a iniciar agora?

A) iptables -L

B) firewall-cmd --reload

C) systemctl status firewalld

D) systemctl start firewalld

E) systemctl enable firewalld

**Gabarito: E.** systemctl enable firewalld: Comando apresentado para habilitar o serviço firewalld na inicialização do sistema.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 9. Fácil — conceito

No estudo de “Firewall” em CIAA, qual conceito corresponde à descrição: “Comando apresentado para recarregar a configuração do firewalld.”?

A) firewall-cmd --reload

B) systemctl status firewalld

C) systemctl start firewalld

D) systemctl enable firewalld

E) iptables -L

**Gabarito: A.** firewall-cmd --reload: Comando apresentado para recarregar a configuração do firewalld.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.

## 10. Médio — aplicação

Após preparar alterações persistentes no firewalld, qual comando apresentado solicita o recarregamento de sua configuração?

A) systemctl enable firewalld

B) systemctl status firewalld

C) systemctl start firewalld

D) iptables -L

E) firewall-cmd --reload

**Gabarito: E.** firewall-cmd --reload: Comando apresentado para recarregar a configuração do firewalld.

**Fonte:** MARINHA DO BRASIL. Centro de Instrução Almirante Alexandrino. Guia de estudo C-EXP-SUP-LINUX-PR. 2021. Apostila fornecida: Apostiala C-Exp-SupLinux-PR Alterada.pdf. Capítulo 12: Firewall, páginas 86 do PDF fornecido. Questão original de estudo; não é questão oficial do C-Exp-SupLinux.
