<div align="center">
  <img src="public/logo.png" alt="Fragata do Saber" width="180" />
  <h1>Fragata do Saber</h1>
  <p>Plataforma de questões, simulados e mapas mentais para concursos navais.</p>
  <a href="https://fragatadosaber.online">Acessar o Fragata do Saber</a>
</div>

## Sobre o projeto

O Fragata do Saber ajuda na preparação para concursos navais. O projeto oferece uma aplicação web e um aplicativo Android, com acesso por código e suporte a estudo offline no Android.

## Recursos

- Questões de provas e questões baseadas em livros e apostilas.
- Busca no enunciado e filtros por concurso, matéria, tópico, ano e bibliografia.
- Correção imediata, explicações, favoritos e simulados com pontuação.
- Mapas mentais em PDF e imagem, com zoom para imagens.
- Painel administrativo para revisar, cadastrar e publicar questões e mapas.
- App Android com SQLite, download de mapas para acesso offline.
- Progresso local de respostas, questões reveladas e favoritos, com sincronização opcional por conta.

Sem criar conta, o progresso fica somente no aparelho. Vinculando um e-mail e uma senha, o app pode sincronizar o progresso entre dispositivos.

## Tecnologias

- React, TypeScript e Vite
- Tailwind CSS
- Supabase: PostgreSQL, Auth, Row Level Security e Storage
- Capacitor e SQLite no Android
- KaTeX para fórmulas matemáticas

## Começando

### Pré-requisitos

- Node.js compatível com o Vite usado pelo projeto
- npm
- Um projeto Supabase configurado (veja [Configuração do Supabase](#configuração-do-supabase))

### Instalação

```bash
git clone https://github.com/vitorsantanna2/fragata-do-saber.git
cd fragata-do-saber
npm install
```

Crie `.env.local` na raiz:

```dotenv
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publishable
```

Use somente a chave `publishable` no frontend. Nunca coloque uma chave `service_role` em variáveis `VITE_` ou no repositório.

Inicie o servidor local:

```bash
npm run dev
```

## Configuração do Supabase

Execute os scripts pelo **SQL Editor** do Supabase nesta ordem:

1. `supabase_questions_setup.sql` — tabela de questões e políticas de leitura.
2. `supabase_access_gate.sql` — validação por código de acesso.
3. `supabase_user_progress_setup.sql` — tabela de progresso sincronizado e políticas RLS.
4. `supabase_mind_maps_setup.sql` — catálogo de mapas e bucket privado `mind-maps`.
5. `supabase_admin_questions_setup.sql` — painel administrativo, bucket de imagens de questões e permissões administrativas para questões e mapas.

Habilite **Anonymous Sign-Ins**, o provedor **Email** e **Manual Linking** nas configurações de Auth do Supabase. Manual Linking é necessário para converter a sessão anônima existente em uma conta com e-mail. Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` em `.env.local` para desenvolvimento. No GitHub Pages, configure os mesmos valores em **Settings → Secrets and variables → Actions → Variables**.

### Conta administrativa

Crie uma conta de e-mail e senha em **Authentication → Users**. Copie o UUID do usuário e cadastre-o na tabela `public.admin_users`:

```sql
insert into public.admin_users (user_id)
values ('UUID-DA-CONTA-AQUI')
on conflict (user_id) do nothing;
```

O painel pode ser aberto pelo link **Painel administrativo** no app. Ele permite revisar e publicar questões e mapas. Administradores podem enviar imagens de questões (PNG, JPG ou WebP, até 10 MB) e arquivos de mapas (PDF, PNG, JPG ou WebP, até 25 MB). Os mapas ficam no bucket privado.

As alterações administrativas são protegidas por RLS no banco. A chave `publishable` do frontend não concede privilégios administrativos.

## Aplicativo Android

O projeto Android usa Capacitor. Instale o Android Studio, o SDK Android e o JDK 21. Configure o JDK 21 como **Gradle JDK** no Android Studio. O caminho local do SDK fica em `android/local.properties`, que não deve ser compartilhado.

Compile o site e sincronize os arquivos e plugins Android:

```bash
npm run android:sync
```

Abra o projeto no Android Studio:

```bash
npm run android:open
```

Para compilar um APK de depuração no Windows:

```powershell
cd android
.\gradlew.bat assembleDebug
```

O APK fica em `android/app/build/outputs/apk/debug/app-debug.apk`. Instale o APK recém-gerado no aparelho para conferir as alterações.

Para publicar uma versão de teste no GitHub Releases, crie e envie uma tag no formato `v*`, por exemplo `v1.0.0-beta.3`. O workflow `.github/workflows/android-release.yml` compila o APK e o anexa a uma pré-release. O APK de depuração não está assinado para a Play Store. Atualize também o `versionCode` em `android/app/build.gradle` ao preparar outra versão.

As artes originais e os arquivos derivados ficam em `android/assets/`. Os recursos nativos do ícone e da tela de abertura ficam em `android/app/src/main/res/`.

## Modo offline e progresso local

No Android, questões consultadas enquanto há conexão são armazenadas em SQLite. Para preparar o estudo offline, acesse online as questões que pretende revisar e use **Baixar para offline** nos mapas mentais. Os arquivos dos mapas são guardados no armazenamento privado do app; PDFs abrem em um leitor instalado e imagens abrem no próprio app.

O acesso offline pode continuar por até 30 dias após a última validação online, desde que haja questões ou mapas baixados no aparelho. Respostas, questões reveladas, favoritos, filtros e o concurso/modo de estudo atual são salvos localmente. O último simulado também preserva a lista de questões sorteadas, as respostas e os gabaritos vistos para continuar no mesmo aparelho; ao gerar outro, o contador do simulado começa em zero. Para contas vinculadas, respostas e favoritos são sincronizados quando a internet volta; sem conta, permanecem somente no aparelho. Imagens de questões carregadas por URL ainda precisam de conexão.

O banco local `fragata_saber` e suas tabelas são criados automaticamente na primeira inicialização do app.

### Painel de desempenho

Use **Meu desempenho** no cabeçalho para consultar questões respondidas, acertos, erros e aproveitamento, com filtros por concurso e matéria. A tela também lista questões erradas para abrir e revisar. O painel usa o progresso e as questões já carregadas neste aparelho, portanto funciona offline para o conteúdo estudado ou baixado anteriormente.

### Sincronizar entre dispositivos

Depois de entrar com o código de acesso, abra **Sincronizar** no cabeçalho e informe um e-mail. Confirme o endereço pelo e-mail recebido e crie uma senha. A conta é vinculada à sessão atual, preservando o UUID usado pela autorização do código. Em outro aparelho, escolha **Já tenho conta · entrar e sincronizar** na tela de acesso. Se o código de acesso não estiver mais válido, informe um novo código; a conta não substitui essa validação.

O app mantém o progresso no aparelho e envia as alterações quando fica online. A sincronização mescla por questão e usa a alteração mais recente; as políticas RLS permitem que cada conta permanente acesse apenas o próprio progresso. Execute `supabase_user_progress_setup.sql` no projeto antes de ativar esse recurso.

## Gerenciar mapas mentais

No painel administrativo, abra a aba **Mapas mentais** para cadastrar ou editar título, matéria, descrição, ordem de exibição e publicação. Selecione um PDF ou uma imagem PNG, JPG ou WebP de até 25 MB. Salve como rascunho durante a revisão ou publique para disponibilizar aos estudantes com acesso válido.

O app Android baixa cada mapa para uso offline. Ao substituir o arquivo, o painel cria um caminho novo no Storage e atualiza os metadados; na próxima sincronização o app reconhece a versão nova.

## Gerenciar questões

As questões ficam em `public.questions`. Use `question_type = 'exam'` para questões originadas de provas e `question_type = 'bibliography'` para questões baseadas em livros ou apostilas. Para questões bibliográficas do Quadro Técnico, mantenha `exam = 'CP-T'`, informe a referência em `source` e classifique a questão com `subject` e `topic`.

No painel administrativo, é possível revisar os campos e a prévia, salvar rascunhos, publicar e retirar questões de publicação. Imagens podem ser enviadas pelo formulário ou vinculadas por URL externa. Fórmulas podem ser escritas em LaTeX entre cifrões, por exemplo `$x^{-2}$` ou `$(A+B)^2$`.

## Acesso por código

O acesso de estudo é compartilhado por código e usa uma sessão anônima do Supabase, sem cadastro individual. Para gerar um código mensal, execute `supabase_generate_access_code.sql` no **SQL Editor**. O código é exibido uma vez; somente seu hash fica armazenado no banco. Guarde o valor retornado e envie-o às pessoas autorizadas.

## Implantação

O workflow `.github/workflows/deploy.yml` publica o site no GitHub Pages a cada push para `main` ou quando iniciado manualmente. Em **Settings → Pages**, selecione **GitHub Actions** como origem.

O domínio do site é configurado em `public/CNAME`: [fragatadosaber.online](https://fragatadosaber.online).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Executa o typecheck e gera o build de produção |
| `npm run preview` | Pré-visualiza o build local |
| `npm run lint` | Analisa o código com Oxlint |
| `npm run android:sync` | Compila o site e sincroniza o projeto Android |
| `npm run android:open` | Abre o projeto Android no Android Studio |
| `npm run android:run` | Compila e executa em um dispositivo Android conectado |
