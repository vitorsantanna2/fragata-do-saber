-- Progresso das trilhas. Reexecutável; não depende do catálogo de questões.
create table if not exists public.user_track_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  track_id text not null check (length(track_id) between 1 and 120),
  step_id text not null check (length(step_id) between 1 and 120),
  status text not null check (status in ('not-started', 'studying', 'completed')),
  updated_at timestamptz not null check (isfinite(updated_at)),
  primary key (user_id, track_id, step_id)
);

-- Reabrir uma etapa grava not-started: excluir a linha permitiria ressuscitar
-- uma conclusão antiga ao sincronizar outro aparelho que ficou offline.
create or replace function public.keep_newest_track_progress()
returns trigger language plpgsql set search_path = '' as $$
begin
  if new.updated_at < old.updated_at
    or (new.updated_at = old.updated_at and new.status collate "C" < old.status collate "C") then
    return null;
  end if;
  return new;
end;
$$;
drop trigger if exists keep_newest_track_progress on public.user_track_progress;
create trigger keep_newest_track_progress before update on public.user_track_progress
  for each row execute function public.keep_newest_track_progress();

alter table public.user_track_progress enable row level security;
revoke all on public.user_track_progress from anon, authenticated;
grant select, insert, update on public.user_track_progress to authenticated;

drop policy if exists "Users can read their own track progress" on public.user_track_progress;
create policy "Users can read their own track progress" on public.user_track_progress
  for select to authenticated using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
drop policy if exists "Users can insert their own track progress" on public.user_track_progress;
create policy "Users can insert their own track progress" on public.user_track_progress
  for insert to authenticated with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
drop policy if exists "Users can update their own track progress" on public.user_track_progress;
create policy "Users can update their own track progress" on public.user_track_progress
  for update to authenticated using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  ) with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
