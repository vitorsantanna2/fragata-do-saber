import type { Dispatch, FormEvent, SetStateAction } from 'react'

type AccessGateProps = {
  accessCode: string
  setAccessCode: Dispatch<SetStateAction<string>>
  accessError: string
  checkingCode: boolean
  supabaseConfigured: boolean
  onAccessSubmit: (event: FormEvent<HTMLFormElement>) => void
  showAccountCreate: boolean
  setShowAccountCreate: Dispatch<SetStateAction<boolean>>
  showAccountLogin: boolean
  setShowAccountLogin: Dispatch<SetStateAction<boolean>>
  accountCreateEmail: string
  setAccountCreateEmail: Dispatch<SetStateAction<string>>
  accountCreatePassword: string
  setAccountCreatePassword: Dispatch<SetStateAction<string>>
  accountCreateConfirmPassword: string
  setAccountCreateConfirmPassword: Dispatch<SetStateAction<string>>
  creatingAccount: boolean
  onAccountCreate: (event: FormEvent<HTMLFormElement>) => void
  accountLoginEmail: string
  setAccountLoginEmail: Dispatch<SetStateAction<string>>
  accountLoginPassword: string
  setAccountLoginPassword: Dispatch<SetStateAction<string>>
  onAccountLogin: (event: FormEvent<HTMLFormElement>) => void
  publicAsset: (path: string) => string
}

export function AccessGate({
  accessCode,
  setAccessCode,
  accessError,
  checkingCode,
  supabaseConfigured,
  onAccessSubmit,
  showAccountCreate,
  setShowAccountCreate,
  showAccountLogin,
  setShowAccountLogin,
  accountCreateEmail,
  setAccountCreateEmail,
  accountCreatePassword,
  setAccountCreatePassword,
  accountCreateConfirmPassword,
  setAccountCreateConfirmPassword,
  creatingAccount,
  onAccountCreate,
  accountLoginEmail,
  setAccountLoginEmail,
  accountLoginPassword,
  setAccountLoginPassword,
  onAccountLogin,
  publicAsset,
}: AccessGateProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-5 py-10 text-ink">
      <section className="w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
        <img className="mb-6 h-14 w-24 rounded-md object-contain" src={publicAsset('logo.png')} alt="Fragata do Saber" />
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Acesso restrito</p>
        <h1 className="mt-2 font-display text-2xl font-extrabold">Digite seu código de acesso</h1>
        <p className="mt-2 text-sm leading-6 text-muted">Use o código recebido para acessar os concursos e simulados.</p>
        <form className="mt-6 space-y-4" onSubmit={onAccessSubmit}>
          <label className="block text-sm font-bold text-ink" htmlFor="access-code">
            Código de acesso
            <input
              autoCapitalize="characters"
              autoComplete="one-time-code"
              className="mt-2 block w-full rounded-lg border border-line px-3 py-3 font-medium outline-none transition placeholder:text-muted/60 focus:border-sea focus:ring-2 focus:ring-sea/10"
              id="access-code"
              onChange={(event) => setAccessCode(event.target.value)}
              placeholder="Digite o código"
              required
              value={accessCode}
            />
          </label>
          {accessError && <p className="text-sm leading-5 text-red-700" role="alert">{accessError}</p>}
          <button
            className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-60"
            disabled={checkingCode || !accessCode.trim() || !supabaseConfigured}
            type="submit"
          >
            {checkingCode ? 'Validando...' : 'Acessar'}
          </button>
        </form>
        {showAccountCreate ? (
          <form className="mt-5 space-y-3 rounded-xl border border-line p-4" onSubmit={(event) => void onAccountCreate(event)}>
            <p className="text-xs leading-5 text-muted">Crie sua conta para sincronizar o progresso entre aparelhos.</p>
            <label className="block text-sm font-bold">E-mail<input autoComplete="username" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={accountCreateEmail} onChange={(event) => setAccountCreateEmail(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountCreatePassword} onChange={(event) => setAccountCreatePassword(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Confirme a senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountCreateConfirmPassword} onChange={(event) => setAccountCreateConfirmPassword(event.target.value)} required /></label>
            <button className="w-full rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={creatingAccount}>{creatingAccount ? 'Criando…' : 'Criar conta'}</button>
            <p className="text-xs leading-5 text-muted">Depois de criar, informe seu código de acesso acima para liberar os estudos.</p>
            <button className="mt-3 w-full text-sm font-bold text-muted underline" type="button" onClick={() => { setShowAccountCreate(false); setShowAccountLogin(false) }}>Voltar</button>
          </form>
        ) : showAccountLogin ? (
          <form className="mt-5 space-y-3 rounded-xl border border-line p-4" onSubmit={(event) => void onAccountLogin(event)}>
            <p className="text-xs leading-5 text-muted">Ao entrar, o progresso salvo neste aparelho será mesclado à conta.</p>
            <p className="text-sm font-bold">Entrar na conta de sincronização</p>
            <label className="block text-sm font-bold">E-mail<input autoComplete="username" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={accountLoginEmail} onChange={(event) => setAccountLoginEmail(event.target.value)} required /></label>
            <label className="block text-sm font-bold">Senha<input autoComplete="current-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" value={accountLoginPassword} onChange={(event) => setAccountLoginPassword(event.target.value)} required /></label>
            <button className="w-full rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={checkingCode}>{checkingCode ? 'Entrando…' : 'Entrar e sincronizar'}</button>
            <p className="text-xs leading-5 text-muted">O acesso por código continua independente. Se a conta ainda não tiver autorização ativa, informe seu código acima.</p>
          </form>
        ) : (
          <div className="mt-4 space-y-2">
            <button className="w-full rounded-lg border border-sea px-4 py-2.5 text-sm font-bold text-sea hover:bg-sea-light" type="button" onClick={() => setShowAccountLogin(true)}>Já tenho conta · entrar e sincronizar</button>
            <button className="w-full rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-sea hover:bg-sea-light" type="button" onClick={() => setShowAccountCreate(true)}>Não tem conta? Criar conta</button>
          </div>
        )}
        <a className="mt-5 block w-full rounded-lg border border-line px-4 py-2.5 text-center text-sm font-bold text-muted transition hover:border-sea hover:text-sea" href="#admin">
          Acesso administrativo
        </a>
      </section>
    </main>
  )
}
