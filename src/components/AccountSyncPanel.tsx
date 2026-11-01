import { useEffect, useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'

export function AccountSyncPanel({
  onClose,
  onSync,
  onUseExistingAccount,
  syncStatus,
}: {
  onClose: () => void
  onSync: () => void
  onUseExistingAccount: (email: string) => void
  syncStatus: 'local' | 'offline' | 'syncing' | 'synced' | 'error'
}) {
  const [user, setUser] = useState<{ email: string | null; is_anonymous: boolean; email_confirmed_at?: string | null } | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [step, setStep] = useState<'email' | 'confirm' | 'password' | 'complete'>('email')
  const [passwordSetupRequired, setPasswordSetupRequired] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let active = true
    void supabase?.auth.getUser().then(({ data }) => {
      if (!active || !data.user) return
      setUser({ email: data.user.email ?? null, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      const setupKey = `fragata-password-setup:${data.user.id}`
      const pendingPassword = window.localStorage.getItem(setupKey) === 'true'
      if (pendingPassword) {
        setPasswordSetupRequired(true)
        setEmail(window.localStorage.getItem(`fragata-link-email:${data.user.id}`) ?? data.user.email ?? '')
        setStep(data.user.email_confirmed_at ? 'password' : 'confirm')
      } else if (!data.user.is_anonymous && data.user.email) {
        setEmail(data.user.email)
        setStep('complete')
      }
    })
    return () => { active = false }
  }, [])

  async function sendConfirmation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { data, error: updateError } = await supabase.auth.updateUser({ email: email.trim() })
    if (updateError) setError(`Não foi possível vincular o e-mail: ${updateError.message}`)
    else if (data.user?.email_confirmed_at) {
      if (data.user.id) window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      if (data.user.id) window.localStorage.setItem(`fragata-link-email:${data.user.id}`, email.trim())
      setPasswordSetupRequired(true)
      setStep('password')
      setNotice('E-mail confirmado. Agora crie uma senha para entrar em outros aparelhos.')
    } else {
      if (data.user?.id) window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      if (data.user?.id) window.localStorage.setItem(`fragata-link-email:${data.user.id}`, email.trim())
      setStep('confirm')
      setNotice(`Enviamos a confirmação para ${email.trim()}. Confirme o endereço e volte a esta tela.`)
    }
    setBusy(false)
  }

  async function confirmEmail() {
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { error: refreshError } = await supabase.auth.refreshSession()
    const { data, error: userError } = await supabase.auth.getUser()
    if (refreshError || userError || !data.user?.email_confirmed_at) {
      setError('Ainda não conseguimos confirmar o e-mail. Abra o link enviado e tente novamente.')
    } else {
      setUser({ email: data.user.email ?? null, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      window.localStorage.setItem(`fragata-password-setup:${data.user.id}`, 'true')
      window.localStorage.removeItem(`fragata-link-email:${data.user.id}`)
      setPasswordSetupRequired(true)
      setEmail(data.user.email ?? email)
      setStep('password')
      setNotice('E-mail confirmado. Agora crie uma senha para entrar em outros aparelhos.')
    }
    setBusy(false)
  }

  async function createPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return
    setBusy(true); setError(''); setNotice('')
    const { data, error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) setError(`Não foi possível criar a senha: ${updateError.message}`)
    else {
      setUser({ email: data.user.email ?? email, is_anonymous: Boolean(data.user.is_anonymous), email_confirmed_at: data.user.email_confirmed_at })
      window.localStorage.removeItem(`fragata-password-setup:${data.user.id}`)
      window.localStorage.removeItem(`fragata-link-email:${data.user.id}`)
      setPasswordSetupRequired(false)
      setStep('complete')
      setNotice('Conta pronta. Seu progresso será sincronizado quando houver conexão.')
      setPassword('')
      onSync()
    }
    setBusy(false)
  }

  async function switchToExistingAccount() {
    if (!supabase) return
    setBusy(true); setError('')
    const { error: signOutError } = await supabase.auth.signOut()
    if (signOutError) setError(`Não foi possível sair da sessão atual: ${signOutError.message}`)
    else onUseExistingAccount(email.trim())
    setBusy(false)
  }

  const permanentUser = user !== null && !user.is_anonymous && !passwordSetupRequired && step === 'complete'

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="w-full max-w-lg rounded-2xl bg-white p-6 text-ink shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="account-sync-title">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-sea">Conta opcional</p><h2 id="account-sync-title" className="mt-1 font-display text-2xl font-extrabold">Sincronizar progresso</h2></div><button className="rounded-lg border border-line px-3 py-2 text-sm font-bold" type="button" onClick={onClose}>Fechar</button></div>
        <p className="mt-3 text-sm leading-6 text-muted">Seu acesso por código continua funcionando sem conta. Vincule um e-mail e uma senha para levar respostas e favoritos a outros aparelhos.</p>
        {permanentUser ? <div className="mt-5 rounded-xl bg-sea-light p-4"><p className="text-sm font-bold">Conta vinculada: {user.email}</p><p className="mt-1 text-xs leading-5 text-muted">O progresso é salvo localmente e sincronizado quando há conexão.</p><button className="mt-3 rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="button" disabled={syncStatus === 'syncing' || syncStatus === 'offline'} onClick={onSync}>{syncStatus === 'syncing' ? 'Sincronizando…' : 'Sincronizar agora'}</button><p className="mt-2 text-xs text-muted" aria-live="polite">{syncStatus === 'synced' ? 'Tudo sincronizado.' : syncStatus === 'offline' ? 'Sem conexão. O progresso será enviado quando a internet voltar.' : syncStatus === 'error' ? 'Falha na sincronização. Tente novamente.' : ''}</p></div>
          : step === 'email' ? <form className="mt-5 space-y-3" onSubmit={(event) => void sendConfirmation(event)}><label className="block text-sm font-bold">Seu e-mail<input autoComplete="email" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><button className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? 'Enviando…' : 'Enviar confirmação do e-mail'}</button></form>
          : step === 'confirm' ? <div className="mt-5"><p className="rounded-lg bg-sea-light p-3 text-sm leading-6">{notice}</p><button className="mt-3 w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="button" disabled={busy} onClick={() => void confirmEmail()}>{busy ? 'Conferindo…' : 'Já confirmei o e-mail'}</button><button className="mt-3 w-full text-sm font-bold text-muted underline" type="button" onClick={() => setStep('email')}>Usar outro e-mail</button></div>
          : <form className="mt-5 space-y-3" onSubmit={(event) => void createPassword(event)}><p className="text-sm text-muted">E-mail confirmado: <strong>{user?.email ?? email}</strong></p><label className="block text-sm font-bold">Crie uma senha<input autoComplete="new-password" className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required /></label><button className="w-full rounded-lg bg-sea px-4 py-3 text-sm font-extrabold text-white disabled:opacity-60" type="submit" disabled={busy}>{busy ? 'Salvando…' : 'Criar senha e ativar sincronização'}</button></form>}
        {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm leading-5 text-red-800" role="alert">{error}</p>}
        {notice && step !== 'confirm' && <p className="mt-3 rounded-lg bg-green-50 p-3 text-sm leading-5 text-green-800" role="status">{notice}</p>}
        {user?.is_anonymous && <button className="mt-3 text-sm font-bold text-sea underline disabled:opacity-60" type="button" disabled={busy} onClick={() => void switchToExistingAccount()}>Já tenho uma conta: sair e entrar nela</button>}
        <p className="mt-5 text-xs leading-5 text-muted">Se você entrar numa conta já existente, o progresso local e o da conta serão mesclados por questão, priorizando a alteração mais recente.</p>
      </section>
    </div>
  )
}
