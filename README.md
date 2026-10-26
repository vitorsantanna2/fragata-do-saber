<div align="center">
  <img src="public/logo.png" alt="Fragata do Saber" width="180" />
  <h1>Fragata do Saber</h1>
  <p>Questões e simulados para concursos navais, com acesso web e aplicativo Android.</p>
  <a href="https://fragatadosaber.online">Acessar o Fragata do Saber</a>
</div>

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Configuração do Supabase](#configuração-do-supabase)
- [Aplicativo Android](#aplicativo-android)
- [Modo offline](#modo-offline)
- [Adicionar questões](#adicionar-questões)
- [Acesso por código](#acesso-por-código)
- [Implantação](#implantação)
- [Scripts](#scripts)

## Sobre o projeto

O Fragata do Saber é uma plataforma de estudo para concursos navais. A pessoa escolhe um concurso, filtra questões por ano ou tópico, responde e acompanha o resultado do simulado.

Concursos atualmente disponíveis:

- EA-HSG
- Quadro Técnico - Informática (CP-T)
- Cursos expeditos cadastrados na interface

## Funcionalidades

- Questões e alternativas carregadas do Supabase.
- Filtros por tópico e ano da prova.
- Correção imediata e resultado do simulado calculado sobre 100 pontos.
- Fórmulas em LaTeX renderizadas com KaTeX.
- Imagens e texto complementar associados às questões.
- Acesso compartilhado por código, sem cadastro identificável por pessoa.
- No Quadro Técnico, opções para questões de provas, questões de bibliografia e mapas mentais. As duas últimas áreas ainda aguardam conteúdo.
- Aplicativo Android com ícone próprio, tela de abertura e cache local de questões.

## Tecnologias

- React 19, TypeScript e Vite 8
- Tailwind CSS 4
- Supabase: PostgreSQL, autenticação anônima e Storage
- Capacitor 8 e SQLite no Android
- KaTeX
- GitHub Actions e GitHub Pages

## Começando

### Pré-requisitos

- Node.js 22 ou compatível com o Vite do projeto
- npm
- Um projeto Supabase configurado para carregar questões e validar os códigos de acesso

### Instalação

```bash
git clone https://github.com/vitorsantanna2/fragata-do-saber.git
cd fragata-do-saber
npm install
```

### Variáveis de ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```dotenv
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publishable
```

Use somente a chave `publishable` no frontend. Nunca coloque uma chave `service_role` em variáveis `VITE_` ou no repositório.

### Executar localmente

```bash
npm run dev
```

## Configuração do Supabase

1. Crie um projeto Supabase.
2. No **SQL Editor**, execute `supabase_questions_setup.sql` para criar ou atualizar `public.questions`.
3. Execute `supabase_access_gate.sql` para criar as tabelas, funções de acesso e políticas RLS.
4. Em **Authentication → Providers**, habilite **Anonymous Sign-Ins**.
5. Se as questões usarem imagens, crie um bucket público chamado `question-images` no **Storage**.
6. Copie a URL e a chave `publishable` do projeto para `.env.local`.

A política RLS permite consultar questões publicadas somente para sessões com acesso válido. A chave `publishable` é pública por natureza; a proteção dos dados depende das funções e políticas RLS configuradas no banco.

## Aplicativo Android

O app Android usa Capacitor. Para compilar, instale o Android Studio, o SDK Android e o JDK 21. No Android Studio, configure o JDK 21 como **Gradle JDK**. O caminho local do SDK fica em `android/local.properties`; esse arquivo não deve ser compartilhado.

Compile o site e sincronize os arquivos e plugins Android:

```bash
npm run android:sync
```

Abra o projeto no Android Studio:

```bash
npm run android:open
```

Ou compile um APK de depuração no Windows:

```powershell
cd android
.\gradlew.bat assembleDebug
```

O APK fica em `android/app/build/outputs/apk/debug/app-debug.apk`. Instale o APK recém-gerado no aparelho para conferir as alterações.

As artes originais e os arquivos derivados ficam em `android/assets/`. Os recursos nativos do ícone e da abertura estão em `android/app/src/main/res/`. Durante a checagem inicial de acesso, `public/splash-screen.jpg` aparece por pelo menos 0,9 segundo. A imagem cabe inteira na tela, sem cortar as laterais; o fundo azul preenche o espaço restante. No Android 12 ou superior, a tela nativa do sistema aparece primeiro com o ícone do app.

## Modo offline

No Android, as questões consultadas com conexão são armazenadas em SQLite no aparelho. Ao abrir uma prova, o app mostra primeiro as questões salvas e tenta atualizá-las pelo Supabase. Para estudar sem conexão, abra o app online e acesse antes as questões que pretende revisar.

O acesso offline pode continuar por até 30 dias após a última validação online, desde que existam questões em cache. O cache inclui enunciados, alternativas, gabaritos e explicações. Imagens associadas por URL não são baixadas para o dispositivo. Respostas e favoritos ainda não são salvos nem sincronizados. Mapas mentais e questões de bibliografia ainda não estão ligados a conteúdo no banco.

O banco local `fragata_saber` e suas tabelas são criados automaticamente no primeiro início do app.

## Adicionar questões

Cada questão ocupa uma linha em `public.questions`:

| Campo | Uso |
| --- | --- |
| `year`, `exam`, `exam_color`, `question_number` | Identificação da prova |
| `subject`, `topic`, `difficulty` | Classificação; tópico e dificuldade podem ficar vazios |
| `statement` | Enunciado antes de uma imagem |
| `statement_after_image` | Texto opcional depois da imagem |
| `image_url`, `image_alt` | URL da imagem e descrição acessível |
| `options` | Array JSON de alternativas |
| `correct_option` | Índice da resposta correta, começando em zero (A = 0) |
| `explanation` | Comentário exibido com o gabarito |
| `source` | Origem da questão para conferência |
| `is_published` | Use `false` durante a revisão e `true` para publicar |

Para importar questões em lote, use **Table Editor → questions → Import data from CSV**. Mantenha `options` como JSON válido em uma única célula e revise o OCR, as alternativas e o gabarito antes de publicar. Questões anuladas não devem ser publicadas.

Para incluir imagens, envie-as ao bucket `question-images` e salve a URL em `image_url`. Escreva fórmulas em LaTeX entre cifrões, por exemplo `$x^{-2}$` ou `$(A+B)^2$`.

## Acesso por código

O acesso é compartilhado por código e usa uma sessão anônima do Supabase. Para gerar um código mensal, execute `supabase_generate_access_code.sql` no **SQL Editor**. O código é exibido uma vez; somente seu hash fica salvo no banco. Guarde o valor retornado e envie-o às pessoas autorizadas.

Para mudar a validade ou o rótulo do código, ajuste `interval '1 month'` e `Acesso mensal` no script antes de executá-lo.

## Implantação

O workflow `.github/workflows/deploy.yml` publica o site no GitHub Pages a cada push para `main` ou quando iniciado manualmente. Em **Settings → Pages**, escolha **GitHub Actions** como origem.

Configure estas variáveis em **Settings → Secrets and variables → Actions → Variables**:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

O site usa o domínio configurado em `public/CNAME`: [fragatadosaber.online](https://fragatadosaber.online).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento |
| `npm run build` | Executa o typecheck e gera o build de produção |
| `npm run preview` | Pré-visualiza o build localmente |
| `npm run lint` | Analisa o código com Oxlint |
| `npm run android:sync` | Compila o site e sincroniza o projeto Android |
| `npm run android:open` | Abre o projeto Android no Android Studio |
| `npm run android:run` | Compila e executa em um dispositivo Android conectado |
