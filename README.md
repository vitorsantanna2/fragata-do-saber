<div align="center">
  <img src="public/logo.png" alt="Fragata do Saber" width="240" />
  <h1>Fragata do Saber</h1>
  <p>Banco de questões e simulados para concursos navais.</p>
</div>

---

## Índice

- [Sobre](#sobre)
- [Recursos](#recursos)
- [Tecnologias](#tecnologias)
- [Executar localmente](#executar-localmente)
- [Configurar o Supabase](#configurar-o-supabase)
- [Adicionar questões](#adicionar-questões)
- [Acesso por código](#acesso-por-código)
- [Publicar no GitHub Pages](#publicar-no-github-pages)
- [Scripts](#scripts)

## Sobre

O Fragata do Saber ajuda candidatos a estudar por questões de provas anteriores. A pessoa escolhe um concurso, filtra questões por ano ou tópico, responde e acompanha o resultado do simulado.

Concursos disponíveis na interface:

- EA-HSG
- Quadro Técnico - Informática (CP-T)

## Recursos

- Questões e alternativas carregadas do Supabase.
- Filtros por tópico e ano da prova.
- Correção imediata, com indicação visual de acerto ou erro.
- Resultado do simulado calculado sobre 100 pontos, com pesos iguais.
- Suporte a expressões matemáticas em LaTeX com KaTeX.
- Imagens e texto complementar antes ou depois de uma figura.
- Acesso restrito por código com validade.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Tailwind CSS 4
- Supabase: PostgreSQL, Storage.
- KaTeX
- GitHub Actions e GitHub Pages

## Executar localmente

**Pré-requisitos:** Node.js 22 ou compatível e npm.

```bash
git clone https://github.com/vitorsantanna2/fragata-do-saber.git
cd fragata-do-saber
npm install
```

Crie `.env.local` na raiz do projeto:

```dotenv
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publishable
```

Use somente a chave `publishable` no frontend. Nunca coloque uma chave `service_role` em variáveis `VITE_` ou no repositório.

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

## Configurar o Supabase

1. Crie um projeto Supabase.
2. No **SQL Editor**, execute `supabase_questions_setup.sql` para criar ou atualizar a tabela `public.questions`.
3. Execute `supabase_access_gate.sql` para instalar as tabelas e funções de códigos de acesso e as políticas RLS.
4. Em **Authentication → Providers**, habilite **Anonymous Sign-Ins**.
5. Crie um bucket público `question-images` em **Storage** se as questões usarem imagens.
6. Copie a URL e a chave publishable do projeto para `.env.local`.

A política RLS permite consultar questões publicadas somente a sessões com acesso válido. A chave publishable é pública por natureza; a proteção dos dados depende das funções e políticas RLS configuradas no banco.

## Adicionar questões

Cada questão ocupa uma linha em `public.questions`. Os campos principais são:

| Campo | Uso |
| --- | --- |
| `year`, `exam`, `exam_color`, `question_number` | Identificação da prova |
| `subject`, `topic`, `difficulty` | Classificação; dificuldade e tópico podem ficar vazios |
| `statement` | Enunciado antes de uma imagem |
| `statement_after_image` | Texto opcional depois da imagem |
| `image_url`, `image_alt` | URL pública da imagem e descrição acessível |
| `options` | Array JSON de alternativas |
| `correct_option` | Índice da resposta correta, começando em zero (A = 0) |
| `explanation` | Comentário exibido ao abrir o gabarito |
| `source` | Origem da questão para conferência |
| `is_published` | Deixe `false` durante revisão; use `true` para exibir no site |

Para importar em lote, use **Table Editor → questions → Import data from CSV**. CSVs devem manter `options` como JSON válido em uma única célula. Revise OCR, alternativas e gabarito antes de publicar. Questões anuladas devem ser omitidas do banco.

Para imagens, recorte a figura do PDF, envie-a ao bucket `question-images` e salve sua URL em `image_url`. Fórmulas podem ser escritas em LaTeX entre cifrões, por exemplo `$x^{-2}$` ou `$(A+B)^2$`.

## Acesso por código

O acesso é compartilhado por código e não cria uma conta identificável por pessoa. Para gerar um código, abra `supabase_generate_access_code.sql` no **SQL Editor** e execute a consulta. Ela retorna o código uma vez, grava somente o hash no banco e define validade de um mês. Guarde o código retornado e envie-o apenas às pessoas selecionadas.

Para mudar validade ou rótulo, ajuste `interval '1 month'` e o texto `Acesso mensal` nessa consulta antes de executá-la. Um código compartilhado pode ser repassado; isso restringe acesso casual, mas não substitui proteção contra DDoS. Configure também limites de requisições e mitigação contra bots na hospedagem e no Supabase.

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy.yml` publica automaticamente a cada push para `main`.

1. No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como origem.
2. Em **Settings → Secrets and variables → Actions → Variables**, adicione:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
3. Envie as alterações para `main` ou execute o workflow **Deploy to GitHub Pages** na aba **Actions**.

O site do repositório deve ficar disponível em `https://vitorsantanna2.github.io/fragata-do-saber/`. O build do Vite usa esse subcaminho automaticamente no GitHub Actions. GitHub Pages é gratuito para repositórios públicos; um domínio próprio é opcional.

## Scripts

```bash
npm run dev      # servidor local
npm run build    # typecheck e build de produção
npm run preview  # pré-visualizar dist localmente
npm run lint     # analisar código com Oxlint
```
