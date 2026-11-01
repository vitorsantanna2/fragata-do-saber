-- Sincronização opcional do estado da ofensiva de estudos entre dispositivos.
-- Execute depois de supabase_access_gate.sql.

create table if not exists public.user_offensive_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  total_offensives integer not null default 0,
  current_streak integer not null default 0,
  best_streak integer not null default 0,
  last_offensive_date date,
  offensive_logged_today boolean not null default false,
  joined_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id)
);

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'user_offensive_state'
      and column_name = 'last_offensive_date'
      and data_type = 'timestamp with time zone'
  ) then
    alter table public.user_offensive_state
      alter column last_offensive_date type date
      using (last_offensive_date at time zone 'UTC')::date;
  end if;
end;
$$;

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

create or replace function public.record_simulation_offensive()
returns setof public.user_offensive_state
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  today_date date := (pg_catalog.now() at time zone 'America/Sao_Paulo')::date;
  account_created_at timestamptz;
  state_row public.user_offensive_state%rowtype;
  next_streak integer;
begin
  if current_user_id is null
    or coalesce((auth.jwt() ->> 'is_anonymous')::boolean, true) then
    raise exception 'A permanent authenticated account is required to record a synced offensive.';
  end if;

  select auth_user.created_at
    into account_created_at
  from auth.users as auth_user
  where auth_user.id = current_user_id;

  if account_created_at is null then
    raise exception 'Could not find account creation date.';
  end if;

  insert into public.user_offensive_state (user_id, joined_at)
  values (current_user_id, account_created_at)
  on conflict (user_id) do nothing;

  select *
    into state_row
  from public.user_offensive_state
  where user_id = current_user_id
  for update;

  if state_row.last_offensive_date is distinct from today_date then
    if state_row.last_offensive_date = today_date - 1 then
      next_streak := state_row.current_streak + 1;
    else
      next_streak := 1;
    end if;

    update public.user_offensive_state
    set total_offensives = state_row.total_offensives + 1,
        current_streak = next_streak,
        best_streak = pg_catalog.greatest(state_row.best_streak, next_streak),
        last_offensive_date = today_date,
        offensive_logged_today = true,
        joined_at = account_created_at,
        updated_at = pg_catalog.now()
    where user_id = current_user_id;
  else
    update public.user_offensive_state
    set offensive_logged_today = true,
        joined_at = account_created_at,
        updated_at = pg_catalog.now()
    where user_id = current_user_id;
  end if;

  return query
    select *
    from public.user_offensive_state
    where user_id = current_user_id;
end;
$$;

revoke all on function public.record_simulation_offensive() from public, anon;
grant execute on function public.record_simulation_offensive() to authenticated;
