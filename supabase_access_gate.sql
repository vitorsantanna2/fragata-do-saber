create extension if not exists pgcrypto with schema extensions;

create table if not exists public.access_codes (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null,
  label text not null,
  expires_at timestamptz not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.access_grants (
  user_id uuid primary key references auth.users(id) on delete cascade,
  access_code_id uuid not null references public.access_codes(id),
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.access_codes enable row level security;
alter table public.access_grants enable row level security;

revoke all on public.access_codes from anon, authenticated;
revoke all on public.access_grants from anon, authenticated;

create or replace function public.has_active_access()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.access_grants as grant_row
    join public.access_codes as code_row
      on code_row.id = grant_row.access_code_id
    where grant_row.user_id = auth.uid()
      and grant_row.expires_at > pg_catalog.now()
      and code_row.is_active
      and code_row.expires_at > pg_catalog.now()
  );
$$;

create or replace function public.redeem_access_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  matched_code_id uuid;
  matched_expires_at timestamptz;
begin
  if auth.uid() is null or pg_catalog.length(pg_catalog.btrim(p_code)) = 0 then
    return false;
  end if;

  select code_row.id, code_row.expires_at
    into matched_code_id, matched_expires_at
  from public.access_codes as code_row
  where code_row.is_active
    and code_row.expires_at > pg_catalog.now()
    and code_row.code_hash = extensions.crypt(pg_catalog.btrim(p_code), code_row.code_hash)
  limit 1;

  if matched_code_id is null then
    return false;
  end if;

  insert into public.access_grants (user_id, access_code_id, expires_at)
  values (auth.uid(), matched_code_id, matched_expires_at)
  on conflict (user_id) do update
    set access_code_id = excluded.access_code_id,
        expires_at = excluded.expires_at,
        created_at = pg_catalog.now();

  return true;
end;
$$;

revoke all on function public.has_active_access() from public, anon;
revoke all on function public.redeem_access_code(text) from public, anon;
grant execute on function public.has_active_access() to authenticated;
grant execute on function public.redeem_access_code(text) to authenticated;

revoke select on public.questions from anon;
grant select on public.questions to authenticated;

drop policy if exists "Public can read published questions" on public.questions;
drop policy if exists "Access code holders can read published questions" on public.questions;

create policy "Access code holders can read published questions"
  on public.questions
  for select
  to authenticated
  using (is_published = true and public.has_active_access());