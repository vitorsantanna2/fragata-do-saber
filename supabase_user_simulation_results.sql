-- Histórico de simulados concluídos, sincronizado entre dispositivos.
-- Execute depois de supabase_user_progress_setup.sql.

create table if not exists public.user_simulation_results (
  user_id uuid not null references auth.users(id) on delete cascade,
  simulation_id text not null,
  exam_id text not null,
  exam_title text,
  study_mode text not null check (study_mode in ('exam-questions', 'bibliography-questions')),
  total_questions smallint not null check (total_questions > 0),
  correct_answers smallint not null check (correct_answers >= 0),
  wrong_answers smallint not null check (wrong_answers >= 0),
  score numeric(5,2) not null check (score >= 0 and score <= 100),
  completed_at timestamptz not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, simulation_id)
);

create index if not exists user_simulation_results_user_completed_idx
  on public.user_simulation_results (user_id, completed_at desc);

alter table public.user_simulation_results enable row level security;
revoke all on public.user_simulation_results from anon, authenticated;
grant select, insert, update, delete on public.user_simulation_results to authenticated;

drop policy if exists "Users can read their own simulation results" on public.user_simulation_results;
create policy "Users can read their own simulation results"
  on public.user_simulation_results
  for select
  to authenticated
  using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can insert their own simulation results" on public.user_simulation_results;
create policy "Users can insert their own simulation results"
  on public.user_simulation_results
  for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can update their own simulation results" on public.user_simulation_results;
create policy "Users can update their own simulation results"
  on public.user_simulation_results
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

drop policy if exists "Users can delete their own simulation results" on public.user_simulation_results;
create policy "Users can delete their own simulation results"
  on public.user_simulation_results
  for delete
  to authenticated
  using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
