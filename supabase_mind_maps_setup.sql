-- Catálogo de mapas mentais do Quadro Técnico.
-- Execute no SQL Editor do Supabase depois de supabase_access_gate.sql.

create table if not exists public.mind_maps (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text not null,
  description text,
  storage_path text not null unique,
  content_type text not null check (content_type in ('application/pdf', 'image/png', 'image/jpeg', 'image/webp')),
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists mind_maps_published_subject_order_idx
  on public.mind_maps (subject, sort_order, title)
  where is_published = true;

create or replace function public.set_mind_maps_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = pg_catalog.now();
  return new;
end;
$$;

drop trigger if exists mind_maps_updated_at on public.mind_maps;
create trigger mind_maps_updated_at
  before update on public.mind_maps
  for each row execute function public.set_mind_maps_updated_at();

alter table public.mind_maps enable row level security;
revoke all on public.mind_maps from anon, authenticated;
grant select on public.mind_maps to authenticated;

drop policy if exists "Access holders can read published mind maps" on public.mind_maps;
create policy "Access holders can read published mind maps"
  on public.mind_maps
  for select
  to authenticated
  using (is_published = true and public.has_active_access());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'mind-maps',
  'mind-maps',
  false,
  26214400,
  array['application/pdf', 'image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Access holders can read mind map files" on storage.objects;
create policy "Access holders can read mind map files"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'mind-maps' and public.has_active_access());

-- Para adicionar um mapa:
-- 1. Envie o arquivo pelo painel Storage para o bucket privado "mind-maps".
-- 2. Copie o caminho relativo do arquivo (ex.: informatica/redes/modelo-osi.pdf).
-- 3. Cadastre os metadados abaixo, deixando is_published=false até revisar:
-- insert into public.mind_maps (title, subject, description, storage_path, content_type, sort_order, is_published)
-- values ('Modelo OSI', 'Redes de computadores', 'Camadas e protocolos do modelo OSI.',
--         'informatica/redes/modelo-osi.pdf', 'application/pdf', 10, true);
-- Para atualizar um arquivo existente, use outro caminho ou apague os downloads antigos
-- antes de substituir o arquivo para que o app baixe a nova versão.
