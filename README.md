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

- Node.js 22.12 ou superior na série 22 (a mesma série usada pelos workflows)
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

Os scripts SQL ficam em `supabase/`. Os arquivos CSV de importação ficam em `data/imports/` e continuam ignorados pelo Git quando o nome termina em `_importacao.csv`.

Execute os scripts pelo **SQL Editor** do Supabase nesta ordem:

1. `supabase/supabase_questions_setup.sql` — tabela de questões e políticas de leitura.
2. `supabase/supabase_access_gate.sql` — validação por código de acesso.
3. `supabase/supabase_user_progress_setup.sql` — tabela de progresso sincronizado e políticas RLS.
4. `supabase/supabase_mind_maps_setup.sql` — catálogo de mapas e bucket privado `mind-maps`.
5. `supabase/supabase_admin_questions_setup.sql` — painel administrativo, bucket de imagens de questões e permissões administrativas para questões e mapas.
6. `supabase/supabase_offline_questions_setup.sql` — download autenticado de gabaritos para correção offline no Android.
7. `supabase/supabase_simulation_answers_setup.sql` — correção online com respostas independentes por simulado.
8. `supabase/supabase_scheduled_reviews_setup.sql` — sincronização dos agendamentos de revisão entre dispositivos.

Habilite **Anonymous Sign-Ins**, o provedor **Email** e **Manual Linking** nas configurações de Auth do Supabase. Manual Linking é necessário para converter a sessão anônima existente em uma conta com e-mail. Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` em `.env.local` para desenvolvimento. No GitHub Pages, configure os mesmos valores em **Settings → Secrets and variables → Actions → Variables**.

### Conta administrativa

Crie uma conta de e-mail e senha em **Authentication → Users**. Copie o UUID do usuário e cadastre-o na tabela `public.admin_users`:

```sql
insert into public.admin_users (user_id)
values ('UUID-DA-CONTA-AQUI')
on conflict (user_id) do nothing;
```

O painel pode ser aberto diretamente por [fragatadosaber.online/#admin](https://fragatadosaber.online/#admin), inclusive ao atualizar a página ou abrir o endereço em outra aba. No ambiente local, acrescente `#admin` ao endereço do app. O link **Acesso administrativo** também está disponível na tela de acesso. O painel exige login com uma conta administrativa.

Ele permite revisar e publicar questões e mapas. Administradores podem enviar imagens de questões (PNG, JPG ou WebP, até 10 MB) e arquivos de mapas (PDF, PNG, JPG ou WebP, até 25 MB). Os mapas ficam no bucket privado.

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

Para publicar uma versão de teste no GitHub Releases, crie e envie uma tag no formato `v*`, por exemplo `v1.0.0-beta.3`. O workflow `.github/workflows/android-release.yml` compila um APK de release assinado com a chave permanente e o anexa a uma pré-release. Os releases antigos de depuração permanecem inalterados. Atualize também o `versionCode` em `android/app/build.gradle` ao preparar outra versão.

As artes originais e os arquivos derivados ficam em `android/assets/`. Os recursos nativos do ícone e da tela de abertura ficam em `android/app/src/main/res/`.

## Modo offline e progresso local

No Android, questões consultadas enquanto há conexão são armazenadas em SQLite junto com seus gabaritos e explicações. Execute `supabase/supabase_offline_questions_setup.sql` no Supabase para habilitar esse download. Para preparar o estudo offline, abra com internet cada concurso e modalidade que pretende estudar e aguarde o carregamento terminar. Os simulados e a lista de questões usam os gabaritos baixados para corrigir as alternativas no aparelho, sem consultar o Supabase a cada resposta, inclusive se o aparelho estiver conectado.

Use **Baixar para offline** nos mapas mentais. Os arquivos dos mapas são guardados no armazenamento privado do app; PDFs abrem em um leitor instalado e imagens abrem no próprio app.

O acesso offline pode continuar por até 30 dias após a última validação online, desde que haja questões ou mapas baixados no aparelho. Respostas, questões reveladas, favoritos, filtros e o concurso/modo de estudo atual são salvos localmente. O último simulado também preserva a lista de questões sorteadas, as respostas e os gabaritos vistos para continuar no mesmo aparelho; ao gerar outro, o contador do simulado começa em zero. Para contas vinculadas, respostas e favoritos são sincronizados quando a internet volta; sem conta, permanecem somente no aparelho. Imagens de questões carregadas por URL ainda precisam de conexão.

O banco local `fragata_saber` e suas tabelas são criados automaticamente na primeira inicialização do app.

Se o aparelho já tinha questões salvas por uma versão que não baixava gabaritos, abra os concursos novamente com internet depois de atualizar o app. As questões antigas sem gabarito precisam dessa atualização antes de poderem ser corrigidas offline. A versão web continua validando cada resposta online.

### Área do concurso (modo foco)

Ao escolher um concurso ou curso, o aluno entra em uma área de estudos com os recursos disponíveis para essa seleção. No CP-T de Informática, a área reúne questões de provas, bibliografia, mapas mentais, revisões programadas e desempenho. O concurso escolhido fica salvo no aparelho e é restaurado ao reabrir o app.

Os indicadores, revisões pendentes, questões para revisar e simulados concluídos são filtrados pelo concurso e pela especialidade selecionados. **Minha área** retorna à página do concurso; **Trocar concurso** abre o catálogo para escolher outro. O logotipo também retorna à área atual. A seleção de foco funciona offline.

O catálogo de concursos fica em `src/lib/exams.ts`; os recursos e o recorte de dados de cada área ficam em `src/lib/studyFocus.ts`. Essa organização permite acrescentar módulos como trilhas e caderno de erros dentro da área de cada concurso.

### Painel de desempenho

Use **Meu desempenho** no cabeçalho para consultar questões respondidas, acertos, erros e aproveitamento, com filtros por concurso e matéria. A tela também lista questões erradas para abrir e revisar. O painel usa o progresso e as questões já carregadas neste aparelho, portanto funciona offline para o conteúdo estudado ou baixado anteriormente.

Os resultados de respostas já validadas são preservados ao reabrir o app. Quando há conexão, o app também recupera as respostas registradas para a sessão ou conta atual. Cada simulado concluído tem um identificador próprio e aparece no histórico, mesmo que outros simulados tenham a mesma nota no mesmo dia. A ofensiva continua sendo contabilizada por dia.

Na web, a correção de cada simulado usa respostas independentes: responder uma questão novamente em outro simulado não reutiliza a alternativa de uma tentativa anterior. Execute `supabase/supabase_simulation_answers_setup.sql` para habilitar essa correção no servidor. Os downloads de questões usam paginação e o cache offline só é substituído após a conclusão de todas as páginas e gabaritos.

### Revisão programada

Abra **Revisões** no cabeçalho para acessar as questões previstas para hoje e as atrasadas, com filtros por concurso e matéria. Cada resposta corrigida na lista de questões, nos simulados ou na própria revisão entra no agendamento. Respostas antigas com correção conhecida também são incluídas a partir das datas do progresso salvo.

Depois de responder, use **Sabia**, **Fiquei em dúvida** ou **Chutei**. Acertos avaliados como **Sabia** em dias diferentes seguem os intervalos iniciais de 1, 3, 7, 15, 30 e 60 dias. Erros, dúvidas, chutes e respostas ainda sem avaliação ficam para o dia seguinte. Alterar a avaliação de uma mesma resposta não conta como outra revisão, e repetir a questão no mesmo dia não aumenta o intervalo.

Na revisão, a alternativa antiga não aparece marcada: é preciso tentar responder novamente para consultar a correção e a explicação. No Android, questões já baixadas podem ser revisadas offline. Questões indisponíveis no aparelho precisam ser baixadas com internet. O agendamento usa o calendário de São Paulo e é salvo no aparelho; contas vinculadas podem sincronizá-lo após executar `supabase/supabase_scheduled_reviews_setup.sql` no Supabase. Esses intervalos são uma regra inicial da plataforma, não uma previsão individual de esquecimento.

### Sincronizar entre dispositivos

Depois de entrar com o código de acesso, abra **Sincronizar** no cabeçalho e informe um e-mail. Confirme o endereço pelo e-mail recebido e crie uma senha. A conta é vinculada à sessão atual, preservando o UUID usado pela autorização do código. Em outro aparelho, escolha **Já tenho conta · entrar e sincronizar** na tela de acesso. Se o código de acesso não estiver mais válido, informe um novo código; a conta não substitui essa validação.

O app mantém o progresso no aparelho e envia as alterações quando fica online. A sincronização mescla por questão e usa a alteração mais recente; as políticas RLS permitem que cada conta permanente acesse apenas o próprio progresso. Execute `supabase/supabase_user_progress_setup.sql` no projeto antes de ativar esse recurso.

## Gerenciar mapas mentais

No painel administrativo, abra a aba **Mapas mentais** para cadastrar ou editar título, matéria, descrição, ordem de exibição e publicação. Selecione um PDF ou uma imagem PNG, JPG ou WebP de até 25 MB. Salve como rascunho durante a revisão ou publique para disponibilizar aos estudantes com acesso válido.

O app Android baixa cada mapa para uso offline. Ao substituir o arquivo, o painel cria um caminho novo no Storage e atualiza os metadados; na próxima sincronização o app reconhece a versão nova.

## Gerenciar questões

As questões ficam em `public.questions`. Use `question_type = 'exam'` para questões originadas de provas e `question_type = 'bibliography'` para questões baseadas em livros ou apostilas. Para questões bibliográficas do Quadro Técnico, mantenha `exam = 'CP-T'`, informe a referência em `source` e classifique a questão com `subject` e `topic`.

No painel administrativo, é possível revisar os campos e a prévia, salvar rascunhos, publicar e retirar questões de publicação. Imagens podem ser enviadas pelo formulário ou vinculadas por URL externa. Fórmulas podem ser escritas em LaTeX entre cifrões, por exemplo `$x^{-2}$` ou `$(A+B)^2$`.

## Acesso por código

O acesso de estudo é compartilhado por código e usa uma sessão anônima do Supabase, sem cadastro individual. Para gerar um código mensal, execute `supabase/supabase_generate_access_code.sql` no **SQL Editor**. O código é exibido uma vez; somente seu hash fica armazenado no banco. Guarde o valor retornado e envie-o às pessoas autorizadas.

## Implantação

O workflow `.github/workflows/ci.yml` instala as dependências, executa o lint, compila o projeto e roda os testes nos pull requests destinados à `main`. Ele também pode ser iniciado manualmente.

O workflow `.github/workflows/deploy.yml` é acionado a cada push para `main` ou quando iniciado manualmente. Ele reutiliza o CI e só publica o site no GitHub Pages depois que todas as verificações passam. Em **Settings → Pages**, selecione **GitHub Actions** como origem.

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

### Trilhas de estudo do CP-T/2026

No foco **Quadro Técnico – Informática**, abra **Trilhas de estudo**. O catálogo em `src/lib/studyTracks.ts` organiza a bibliografia fornecida (páginas 113–114) em quatro trilhas e 14 etapas. A ordem e os objetivos são sugestões pedagógicas; não constituem uma transcrição nem uma garantia de cobertura completa do programa do edital. A citação incompleta “BRASIL. Ministério da Economia.” não foi complementada por suposição.

Cada etapa apresenta objetivos, referências, marcação de leitura e um atalho de prática mista, reunindo questões de provas e da bibliografia. O vínculo com questões usa correspondência exata de tópicos normalizados, limitada ao CP-T/Informática; novos rótulos do banco devem ser incluídos em `topics`. Etapas sem questões correspondentes continuam disponíveis para estudo. Os resultados de prática não marcam automaticamente o conteúdo como estudado.

O catálogo acompanha o aplicativo e pode ser consultado offline. A prática mista carrega e armazena os dois bancos separadamente; offline, usa as origens já baixadas no aplicativo nativo. Para ter ambas disponíveis, abra a prática mista com internet antes. A retomada de simulados preserva a trilha e a etapa de origem. O progresso das trilhas é salvo por ID da conta (`study_tracks_v1:<userId>`), em SQLite no aplicativo e localStorage no navegador, e sincronizado no Supabase para contas não anônimas. Execute `supabase/supabase_track_progress_setup.sql` no SQL Editor antes de usar a sincronização. O script cria a tabela `user_track_progress`, políticas de acesso por usuário e um trigger que impede gravações antigas de substituir novas. Reabrir uma etapa grava `not-started`, sem excluir o registro. A alteração mais recente prevalece e empates têm desempate determinístico. Marcações do formato antigo são migradas com data-base antiga, sem sobrescrever alterações recentes da nuvem. A sincronização ocorre após alterações, ao reconectar, ao retornar ao aplicativo e por verificação periódica a cada 30 segundos, mesmo fora da tela de trilhas. Falhas de rede ou tabela ainda não criada mantêm o progresso local e permitem nova tentativa. Use a mesma conta nos aparelhos; alterações ainda não enviadas são perdidas ao limpar os dados locais. Preserve os IDs das trilhas e etapas ao editar o conteúdo para manter as marcações existentes.

### Isolamento de contas no dispositivo

Respostas, favoritos, revisões, histórico e simulados em andamento usam `study_progress_v1:<userId>`; ofensivas usam `offensive_state_v1:<userId>`. O modo sem sessão usa o sufixo `guest` e não é importado automaticamente para contas autenticadas. A troca de usuário limpa o estado em memória, encerra o simulado ativo e ignora retornos assíncronos da sessão anterior. A sincronização confere o ID esperado antes de consultar ou enviar o progresso.

Os registros antigos sem sufixo (`study_progress_v1` e `offensive_state_v1`) permanecem no armazenamento como backup, mas não são atribuídos automaticamente a uma conta, pois não identificam o proprietário. O progresso já sincronizado será recuperado ao entrar na conta com internet. Dados exclusivamente locais do formato antigo exigem recuperação explícita após identificar a conta correta. Esta alteração não exige SQL e não remove possíveis misturas que já tenham sido enviadas ao servidor anteriormente.

Na área de foco, **Provas Antigas** mantém apenas questões de provas. **Simulador de Questões** reúne todas as questões de provas e da bibliografia do CP-T, sem o recorte por etapa das trilhas. Os simulados sorteiam questões desse conjunto, respeitando os filtros escolhidos antes de iniciar. O identificador interno `bibliography-questions` foi mantido para compatibilidade com o histórico e a retomada de simulados; essa área agora carrega as duas origens. Não é necessária alteração de SQL.

### Mapas mentais nas etapas das trilhas

Execute `supabase/supabase_mind_map_tracks_setup.sql` após o setup de mapas mentais. No painel administrativo, abra **Mapas mentais**, edite um mapa e marque uma ou mais **Etapas relacionadas**. Salve e publique. As associações usam as chaves estáveis `trilha/etapa` (por exemplo, `cpt-2026-infra/so`). As mesmas políticas de acesso do catálogo continuam valendo.

Dentro de cada etapa, o aluno vê os mapas relacionados e pode abri-los ou baixá-los no aplicativo. A leitura e o download não marcam automaticamente a etapa como estudada. Ao fechar uma imagem, permanece na trilha; PDFs baixados no Android usam o leitor nativo. Os vínculos ficam no cache SQLite para uso offline. Atualizar apenas título, descrição ou vínculos preserva o arquivo baixado; substituir o arquivo deve usar um novo `storage_path`, como já faz o editor administrativo.

Mapas sem vínculos explícitos são associados por correspondência exata da matéria com o título/assuntos da etapa, ignorando acentos e maiúsculas. A matéria genérica “Informática” não coloca o mesmo mapa em todas as etapas. O catálogo continua legível antes da migração, mas salvar vínculos no administrador exige executar o novo SQL. Não foi feita atribuição manual de mapas no banco remoto.

### Leitura de mapas no celular

O leitor de imagens ocupa a tela inteira, respeita as áreas seguras do aparelho e oferece botões de ampliar, reduzir, ajustar à tela e ajustar à largura. É possível ampliar com dois dedos, navegar arrastando e usar a rolagem normal com mouse/teclado. A imagem ampliada ocupa uma área rolável real, permitindo alcançar suas bordas sem depender de deslocamentos negativos. Ao mudar a orientação, o mapa é ajustado novamente à tela.

A página de fundo fica sem rolagem enquanto o leitor está aberto, e o foco retorna ao controle anterior ao fechar. PDFs no site usam a área completa do leitor e oferecem o botão “Abrir PDF” para o visualizador do navegador; no Android nativo, continua sendo usado o leitor de PDF do aparelho. O zoom melhora a navegação, mas a nitidez continua dependendo da resolução do arquivo enviado.

### Assinatura permanente do Android

Cadastre em **Settings → Secrets and variables → Actions** os secrets `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` e `ANDROID_KEY_PASSWORD`. O workflow restaura o keystore em um arquivo temporário de acesso restrito, verifica o alias, executa `assembleRelease`, valida a assinatura com `apksigner` e remove a chave temporária mesmo se houver falha. Nenhum arquivo de chave ou senha deve ser incluído no Git. Mantenha um backup seguro da chave original e das senhas.

Para testar a configuração sem publicar uma versão, abra **Actions → Android Release → Run workflow** na branch `main`. O APK assinado fica no artifact **fragata-do-saber-signed-apk**, disponível por sete dias. Enviar uma nova tag `v*` executa a mesma validação e publica o APK em GitHub Releases. Atualize `versionCode`, `versionName` e as notas em `releases/<tag>.md` ao preparar uma versão; não reutilize tags já publicadas. O envio e as instruções para a Play Store são um processo separado.

Para builds locais pelo Gradle, forneça as variáveis `ANDROID_KEYSTORE_PATH`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` e `ANDROID_KEY_PASSWORD` no ambiente. O projeto também continua podendo usar o assistente de assinatura do Android Studio. O workflow exige todas as chaves e só publica depois de validar a assinatura; nunca recorre à assinatura debug se faltar um secret. Instalações antigas assinadas com outra chave podem exigir desinstalação na primeira migração. Sincronize o progresso antes, pois desinstalar apaga os dados locais.

### Proteção de armazenamento e atualização automática

A leitura do progresso diferencia ausência de dados de erros de acesso ou formato inválido. Em caso de falha, o app preserva o registro existente, mantém a restauração pendente e bloqueia gravações e sincronização do progresso geral. Uma mensagem permite tentar novamente. Falhas ao salvar também são exibidas; a nova tentativa usa as respostas atuais em memória, sem recarregar uma versão antiga.

Para contas autenticadas com internet, o progresso geral é atualizado a cada 30 segundos enquanto a página está visível, ao retornar à página e ao reconectar. Falhas de rede são tentadas novamente nesses ciclos. As proteções por conta e contra respostas de sessões anteriores continuam valendo. Isso sincroniza respostas, favoritos, revisões, resultados e ofensivas; não transfere arquivos baixados nem o simulado em andamento para outro aparelho.

O catálogo de mapas é baixado com paginação antes da substituição. Só uma consulta completa bem-sucedida remove registros que deixaram de ser publicados, inclusive quando o catálogo publicado fica vazio. A atualização e as remoções são aplicadas em uma transação SQLite. Falhas de rede, páginas incompletas ou erros de gravação preservam o catálogo anterior. Os arquivos de mapas ainda publicados permanecem disponíveis offline; arquivos antigos sem registro não são oferecidos pelo catálogo. Nenhuma migração SQL adicional é necessária para essas correções.

### Atualização automática do botão de APK

O botão Android consulta o catálogo público de releases do próprio repositório, incluindo pré-releases. Seleciona a publicação mais recente com um APK do projeto cujo upload terminou e cujo tamanho é maior que zero. Rascunhos, tags sem release, uploads incompletos e artifacts de validações manuais não substituem o download. O workflow só torna o release público após gerar, assinar, verificar e anexar o APK; por isso a publicação passa a atualizar o botão sem editar a versão no código nem recompilar o site.

A consulta usa cache em memória de cinco minutos e é renovada ao abrir ou retornar à página. Em falhas temporárias, conserva o último link válido; sem um link conhecido, oferece a página oficial de releases. Não usa tokens nem secrets no navegador. O endereço do APK é aceito apenas para downloads deste repositório no GitHub. As regras de incremento de versão Android, assinatura e notas de release continuam sendo necessárias.
