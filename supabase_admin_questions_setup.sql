-- Painel administrativo para revisão/publicação de questões e mapas mentais.
-- Execute depois de supabase_questions_setup.sql, supabase_access_gate.sql
-- e supabase_mind_maps_setup.sql.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users as admin_row
    where admin_row.user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- As imagens são públicas para exibição nas questões; somente administradores
-- autenticados podem enviar, substituir ou remover arquivos.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'question-images',
  'question-images',
  true,
  10485760,
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins can upload question images" on storage.objects;
create policy "Admins can upload question images"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'question-images' and public.is_admin());

drop policy if exists "Admins can update question images" on storage.objects;
create policy "Admins can update question images"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'question-images' and public.is_admin())
  with check (bucket_id = 'question-images' and public.is_admin());

drop policy if exists "Admins can delete question images" on storage.objects;
create policy "Admins can delete question images"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'question-images' and public.is_admin());

-- RLS continua protegendo as escritas. Usuários comuns mantêm apenas
-- a leitura de questões publicadas permitida pela política de acesso por código.
grant select, insert, update, delete on public.questions to authenticated;

drop policy if exists "Admins can manage questions" on public.questions;
create policy "Admins can manage questions"
  on public.questions
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Administradores também podem cadastrar, editar e publicar mapas mentais.
grant select, insert, update, delete on public.mind_maps to authenticated;

drop policy if exists "Admins can manage mind maps" on public.mind_maps;
create policy "Admins can manage mind maps"
  on public.mind_maps
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins can upload mind map files" on storage.objects;
create policy "Admins can upload mind map files"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'mind-maps' and public.is_admin());

drop policy if exists "Admins can update mind map files" on storage.objects;
create policy "Admins can update mind map files"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'mind-maps' and public.is_admin())
  with check (bucket_id = 'mind-maps' and public.is_admin());

drop policy if exists "Admins can delete mind map files" on storage.objects;
create policy "Admins can delete mind map files"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'mind-maps' and public.is_admin());

-- Provisionamento inicial:
-- 1. Crie uma conta de administrador em Supabase Dashboard > Authentication > Users.
-- 2. Copie o UUID dessa conta e execute:
-- insert into public.admin_users (user_id)
-- values ('UUID-DA-CONTA-AQUI')
-- on conflict (user_id) do nothing;
-- Para remover o acesso administrativo, apague a linha correspondente de admin_users.
