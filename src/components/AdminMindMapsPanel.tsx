import { useEffect, useRef, useState, type FormEvent } from 'react'
import { adminSupabase } from '../lib/adminSupabase'

type MapRecord = {
  id: string
  title: string
  subject: string
  description: string | null
  storage_path: string
  content_type: string
  sort_order: number
  is_published: boolean
  updated_at: string
}

type MapDraft = Omit<MapRecord, 'id' | 'updated_at'> & { id: string | null; file: File | null }
const columns = 'id,title,subject,description,storage_path,content_type,sort_order,is_published,updated_at'
const acceptedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp']

function blankDraft(): MapDraft {
  return { id: null, title: '', subject: '', description: '', storage_path: '', content_type: 'application/pdf', sort_order: 0, is_published: false, file: null }
}

export default function AdminMindMapsPanel() {
  const [maps, setMaps] = useState<MapRecord[]>([])
  const [draft, setDraft] = useState<MapDraft | null>(null)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function refresh() {
    if (!adminSupabase) return
    setLoading(true)
    const { data, error: queryError } = await adminSupabase.from('mind_maps').select(columns).order('subject').order('sort_order').order('title')
    if (queryError) setError(`Falha ao carregar mapas: ${queryError.message}`)
    else { setMaps((data ?? []) as MapRecord[]); setError('') }
    setLoading(false)
  }

  useEffect(() => { void refresh() }, [])

  function editMap(map: MapRecord) {
    setDraft({ ...map, file: null })
    setError('')
    setNotice('')
  }

  async function save(event: FormEvent<HTMLFormElement>, publish: boolean) {
    event.preventDefault()
    if (!adminSupabase || !draft) return
    setBusy(true); setError(''); setNotice('')
    let uploadedPath = draft.storage_path
    try {
      if (draft.file) {
        if (!acceptedTypes.includes(draft.file.type)) throw new Error('Use um arquivo PDF, PNG, JPG ou WebP.')
        if (draft.file.size > 25 * 1024 * 1024) throw new Error('O arquivo deve ter no máximo 25 MB.')
        const ext = draft.file.name.split('.').pop()?.toLowerCase() || 'bin'
        uploadedPath = `admin/${crypto.randomUUID()}.${ext}`
        const { error: uploadError } = await adminSupabase.storage.from('mind-maps').upload(uploadedPath, draft.file, { contentType: draft.file.type, cacheControl: '3600', upsert: false })
        if (uploadError) throw uploadError
      }
      if (!uploadedPath) throw new Error('Envie o arquivo do mapa mental antes de salvar.')
      const payload = {
        title: draft.title.trim(), subject: draft.subject.trim(), description: draft.description?.trim() || null,
        storage_path: uploadedPath, content_type: draft.file?.type ?? draft.content_type,
        sort_order: Number(draft.sort_order) || 0, is_published: publish,
      }
      const result = draft.id
        ? await adminSupabase.from('mind_maps').update(payload).eq('id', draft.id).select(columns).single()
        : await adminSupabase.from('mind_maps').insert(payload).select(columns).single()
      if (result.error) throw result.error
      setDraft({ ...(result.data as MapRecord), file: null })
      setNotice(publish ? 'Mapa salvo e publicado.' : 'Rascunho salvo; ainda não aparece para os estudantes.')
      await refresh()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível salvar o mapa mental.')
    } finally { setBusy(false) }
  }

  return <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.6fr)]">
    <section className="h-fit rounded-xl border border-line bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3"><h2 className="font-display text-lg font-extrabold">Mapas mentais</h2><button className="rounded-lg bg-sea px-3 py-2 text-xs font-extrabold text-white" type="button" onClick={() => { setDraft(blankDraft()); setError(''); setNotice('') }}>Novo mapa</button></div>
      <p className="mt-3 text-xs text-muted">{maps.length} mapas cadastrados</p>
      {loading && <p className="mt-3 text-sm text-muted">Carregando…</p>}
      {maps.map((map) => <button key={map.id} className={`mt-2 w-full rounded-lg border p-3 text-left ${draft?.id === map.id ? 'border-sea bg-sea-light' : 'border-line hover:border-sea'}`} type="button" onClick={() => editMap(map)}><span className="block text-sm font-bold">{map.title}</span><span className="mt-1 block text-xs text-muted">{map.subject} · {map.is_published ? 'Publicado' : 'Rascunho'}</span></button>)}
      {!loading && maps.length === 0 && <p className="mt-3 text-sm text-muted">Nenhum mapa cadastrado.</p>}
    </section>
    <section className="rounded-xl border border-line bg-white p-4 sm:p-6">
      {!draft ? <p className="text-sm text-muted">Selecione um mapa para editar ou crie um novo.</p> : <form className="space-y-4" onSubmit={(event) => void save(event, (event.nativeEvent as SubmitEvent).submitter?.id === 'publish-map')}>
        <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-lg font-extrabold">{draft.id ? 'Editar mapa mental' : 'Novo mapa mental'}</h2><span className="text-xs font-bold text-muted">{draft.is_published ? 'Publicado' : 'Rascunho'}</span></div>
        <label className="block text-sm font-bold">Título<input required className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} /></label>
        <label className="block text-sm font-bold">Matéria<input required className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" value={draft.subject} onChange={(e) => setDraft({ ...draft, subject: e.target.value })} /></label>
        <label className="block text-sm font-bold">Descrição<textarea className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" rows={3} value={draft.description ?? ''} onChange={(e) => setDraft({ ...draft, description: e.target.value })} /></label>
        <label className="block text-sm font-bold">Arquivo PDF ou imagem (até 25 MB)<input ref={inputRef} className="mt-1 block w-full rounded-lg border border-line p-2 text-sm" type="file" accept="application/pdf,image/png,image/jpeg,image/webp" onChange={(e) => setDraft({ ...draft, file: e.target.files?.[0] ?? null })} /></label>
        <p className="text-xs text-muted">{draft.file ? `Novo arquivo: ${draft.file.name}` : draft.storage_path ? `Arquivo atual: ${draft.storage_path}` : 'Nenhum arquivo enviado.'}</p>
        <label className="block text-sm font-bold">Ordem de exibição<input className="mt-1 block w-full rounded-lg border border-line px-3 py-2.5 font-medium" type="number" value={draft.sort_order} onChange={(e) => setDraft({ ...draft, sort_order: Number(e.target.value) })} /></label>
        {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">{error}</p>}{notice && <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800">{notice}</p>}
        <div className="flex flex-wrap gap-2"><button disabled={busy} className="rounded-lg border border-line px-4 py-2.5 text-sm font-bold disabled:opacity-60" type="submit">{busy ? 'Salvando…' : 'Salvar rascunho'}</button><button id="publish-map" disabled={busy} className="rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-60" type="submit">{busy ? 'Salvando…' : 'Salvar e publicar'}</button></div>
      </form>}
    </section>
  </div>
}
