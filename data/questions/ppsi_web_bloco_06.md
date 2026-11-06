# PPSI Web — bloco 6: Sessões e controle de acesso

20 questões originais: dez de conceito e dez de aplicação. CP-T / Informática / Segurança da Informação. Todos os itens são **rascunhos**.

[SQL](../../supabase/seeds/ppsi_web_bloco_06.sql) · [Índice](ppsi_web_README.md)

## 1. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Token de sessão gerado com aleatoriedade adequada para dificultar sua dedução.”?

A) Atributo Secure

B) Restrição de domínio e caminho do cookie

C) Identificador de sessão imprevisível

D) Encerramento efetivo no logout

E) Negação na indisponibilidade da configuração de segurança

**Gabarito: C.** Identificador de sessão imprevisível: Token de sessão gerado com aleatoriedade adequada para dificultar sua dedução.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 2. Médio — aplicação

O gerador de tokens é revisado para impedir que o próximo identificador seja adivinhado. Que propriedade se busca garantir?

A) Identificador de sessão imprevisível

B) Encerramento efetivo no logout

C) Autorização em cada requisição

D) Restrição de domínio e caminho do cookie

E) Atributo HttpOnly

**Gabarito: A.** Identificador de sessão imprevisível: Token de sessão gerado com aleatoriedade adequada para dificultar sua dedução.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 3. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Limitação do escopo de envio do cookie de sessão ao site e aos caminhos pertinentes.”?

A) Identificador de sessão imprevisível

B) Proteção contra CSRF por token associado

C) Autorização em cada requisição

D) Renovação do identificador após autenticação

E) Restrição de domínio e caminho do cookie

**Gabarito: E.** Restrição de domínio e caminho do cookie: Limitação do escopo de envio do cookie de sessão ao site e aos caminhos pertinentes.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 4. Médio — aplicação

Um cookie passa a ser enviado somente ao domínio e ao caminho necessários. Que configuração restringiu seu alcance?

A) Autorização em cada requisição

B) Encerramento efetivo no logout

C) Restrição de domínio e caminho do cookie

D) Expiração da sessão

E) Identificador de sessão imprevisível

**Gabarito: C.** Restrição de domínio e caminho do cookie: Limitação do escopo de envio do cookie de sessão ao site e aos caminhos pertinentes.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 28 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 5. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Invalidação completa da sessão associada à saída do usuário.”?

A) Expiração da sessão

B) Identificador de sessão imprevisível

C) Atributo Secure

D) Restrição de domínio e caminho do cookie

E) Encerramento efetivo no logout

**Gabarito: E.** Encerramento efetivo no logout: Invalidação completa da sessão associada à saída do usuário.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 6. Médio — aplicação

Depois da saída, reutilizar o token antigo não deve restabelecer acesso. Que efeito o logout precisa produzir?

A) Atributo HttpOnly

B) Identificador de sessão imprevisível

C) Renovação do identificador após autenticação

D) Encerramento efetivo no logout

E) Negação na indisponibilidade da configuração de segurança

**Gabarito: D.** Encerramento efetivo no logout: Invalidação completa da sessão associada à saída do usuário.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 7. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Limitação da duração da sessão conforme os riscos e as necessidades do negócio.”?

A) Negação na indisponibilidade da configuração de segurança

B) Restrição de domínio e caminho do cookie

C) Expiração da sessão

D) Atributo HttpOnly

E) Encerramento efetivo no logout

**Gabarito: C.** Expiração da sessão: Limitação da duração da sessão conforme os riscos e as necessidades do negócio.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 8. Médio — aplicação

Uma sessão deixa de permanecer válida indefinidamente e passa a ter prazo compatível com o serviço. Que controle de duração foi adotado?

A) Negação na indisponibilidade da configuração de segurança

B) Expiração da sessão

C) Atributo Secure

D) Atributo HttpOnly

E) Encerramento efetivo no logout

**Gabarito: B.** Expiração da sessão: Limitação da duração da sessão conforme os riscos e as necessidades do negócio.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 9. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Substituição do token anterior por um novo identificador quando ocorre o login.”?

A) Atributo Secure

B) Restrição de domínio e caminho do cookie

C) Negação na indisponibilidade da configuração de segurança

D) Proteção contra CSRF por token associado

E) Renovação do identificador após autenticação

**Gabarito: E.** Renovação do identificador após autenticação: Substituição do token anterior por um novo identificador quando ocorre o login.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 10. Médio — aplicação

O identificador usado antes do login é desativado e outro é emitido após a autenticação. Que tratamento do token está sendo aplicado?

A) Atributo Secure

B) Restrição de domínio e caminho do cookie

C) Autorização em cada requisição

D) Renovação do identificador após autenticação

E) Proteção contra CSRF por token associado

**Gabarito: D.** Renovação do identificador após autenticação: Substituição do token anterior por um novo identificador quando ocorre o login.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 29 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 11. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Verificação de um valor complementar ligado à sessão ou à requisição em operações sensíveis.”?

A) Negação na indisponibilidade da configuração de segurança

B) Atributo Secure

C) Expiração da sessão

D) Proteção contra CSRF por token associado

E) Identificador de sessão imprevisível

**Gabarito: D.** Proteção contra CSRF por token associado: Verificação de um valor complementar ligado à sessão ou à requisição em operações sensíveis.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 12. Médio — aplicação

Uma operação exige um token complementar à sessão para verificar a legitimidade da solicitação. Qual proteção complementar apresentada no guia está sendo usada?

A) Identificador de sessão imprevisível

B) Encerramento efetivo no logout

C) Renovação do identificador após autenticação

D) Proteção contra CSRF por token associado

E) Atributo HttpOnly

**Gabarito: D.** Proteção contra CSRF por token associado: Verificação de um valor complementar ligado à sessão ou à requisição em operações sensíveis.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 13. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Configuração do cookie que restringe seu envio a conexões seguras.”?

A) Atributo Secure

B) Encerramento efetivo no logout

C) Identificador de sessão imprevisível

D) Restrição de domínio e caminho do cookie

E) Proteção contra CSRF por token associado

**Gabarito: A.** Atributo Secure: Configuração do cookie que restringe seu envio a conexões seguras.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 14. Médio — aplicação

Um cookie de autenticação precisa ser transmitido apenas por conexão segura. Qual atributo configura essa restrição?

A) Renovação do identificador após autenticação

B) Atributo Secure

C) Negação na indisponibilidade da configuração de segurança

D) Autorização em cada requisição

E) Proteção contra CSRF por token associado

**Gabarito: B.** Atributo Secure: Configuração do cookie que restringe seu envio a conexões seguras.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 15. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Configuração que impede a leitura do cookie por scripts do lado cliente.”?

A) Atributo HttpOnly

B) Expiração da sessão

C) Restrição de domínio e caminho do cookie

D) Identificador de sessão imprevisível

E) Negação na indisponibilidade da configuração de segurança

**Gabarito: A.** Atributo HttpOnly: Configuração que impede a leitura do cookie por scripts do lado cliente.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 16. Médio — aplicação

O token não precisa ser lido por JavaScript e a equipe bloqueia esse acesso ao cookie. Qual atributo atende a essa finalidade?

A) Atributo HttpOnly

B) Negação na indisponibilidade da configuração de segurança

C) Encerramento efetivo no logout

D) Renovação do identificador após autenticação

E) Identificador de sessão imprevisível

**Gabarito: A.** Atributo HttpOnly: Configuração que impede a leitura do cookie por scripts do lado cliente.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 30 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 17. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Verificação da permissão de acesso em todas as solicitações, incluindo chamadas diretas ao servidor.”?

A) Identificador de sessão imprevisível

B) Restrição de domínio e caminho do cookie

C) Atributo HttpOnly

D) Atributo Secure

E) Autorização em cada requisição

**Gabarito: E.** Autorização em cada requisição: Verificação da permissão de acesso em todas as solicitações, incluindo chamadas diretas ao servidor.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 18. Médio — aplicação

Ocultar o botão não impede uma chamada direta à operação. Que verificação precisa ocorrer a cada solicitação recebida?

A) Restrição de domínio e caminho do cookie

B) Expiração da sessão

C) Autorização em cada requisição

D) Renovação do identificador após autenticação

E) Atributo Secure

**Gabarito: C.** Autorização em cada requisição: Verificação da permissão de acesso em todas as solicitações, incluindo chamadas diretas ao servidor.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 19. Fácil — conceito

No estudo de “Sessões e controle de acesso” no guia PPSI, qual conceito corresponde à descrição: “Recusa de acesso quando as informações necessárias à decisão de autorização não podem ser obtidas.”?

A) Restrição de domínio e caminho do cookie

B) Negação na indisponibilidade da configuração de segurança

C) Proteção contra CSRF por token associado

D) Renovação do identificador após autenticação

E) Expiração da sessão

**Gabarito: B.** Negação na indisponibilidade da configuração de segurança: Recusa de acesso quando as informações necessárias à decisão de autorização não podem ser obtidas.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.

## 20. Médio — aplicação

A aplicação não consegue ler sua configuração de permissões e recusa a operação. Qual comportamento de falha segura foi aplicado?

A) Proteção contra CSRF por token associado

B) Negação na indisponibilidade da configuração de segurança

C) Autorização em cada requisição

D) Expiração da sessão

E) Encerramento efetivo no logout

**Gabarito: B.** Negação na indisponibilidade da configuração de segurança: Recusa de acesso quando as informações necessárias à decisão de autorização não podem ser obtidas.

**Fonte:** BRASIL. Secretaria de Governo Digital. Guia de Requisitos Mínimos de Privacidade e Segurança da Informação para Aplicações Web. PPSI, versão 2.0, 15/04/2023 conforme histórico de versões (capa: abril de 2022). Seção 3.2.4–3.2.5; bloco editorial 6: Sessões e controle de acesso, páginas 31 do PDF fornecido. Questão original de estudo; não é questão oficial do CP-T.
