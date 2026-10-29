-- Sincronização opcional do estado da ofensiva de estudos entre dispositivos.
-- Execute depois de supabase_access_gate.sql.

create table if not exists public.user_offensive_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  total_offensives integer not null default 0,
  current_streak integer not null default 0,
  best_streak integer not null default 0,
  last_offensive_date timestamptz,
  offensive_logged_today boolean not null default false,
  joined_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id)
);

alter table public.user_offensive_state enable row level security;
revoke all on public.user_offensive_state from anon, authenticated;
grant select, insert, update on public.user_offensive_state to authenticated;

drop policy if exists "Users can read their own offensive state" on public.user_offensive_state;
create policy "Users can read their own offensive state"
  on public.user_offensive_state
  for select
  to authenticated
  using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can insert their own offensive state" on public.user_offensive_state;
create policy "Users can insert their own offensive state"
  on public.user_offensive_state
  for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can update their own offensive state" on public.user_offensive_state;
create policy "Users can update their own offensive state"
  on public.user_offensive_state
  for update
  to authenticated
  using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  )
  with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
