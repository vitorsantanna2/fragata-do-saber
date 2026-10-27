-- Sincronização opcional de respostas e favoritos entre dispositivos.
-- Execute depois de supabase_questions_setup.sql e supabase_access_gate.sql.

create table if not exists public.user_question_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  selected_option smallint,
  is_favorite boolean not null default false,
  is_revealed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id),
  constraint user_question_progress_selected_option_check
    check (selected_option is null or selected_option between 0 and 4)
);

create index if not exists user_question_progress_user_updated_idx
  on public.user_question_progress (user_id, updated_at desc);

alter table public.user_question_progress enable row level security;
revoke all on public.user_question_progress from anon, authenticated;
grant select, insert, update on public.user_question_progress to authenticated;

drop policy if exists "Users can read their own study progress" on public.user_question_progress;
create policy "Users can read their own study progress"
  on public.user_question_progress
  for select
  to authenticated
  using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can insert their own study progress" on public.user_question_progress;
create policy "Users can insert their own study progress"
  on public.user_question_progress
  for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );

drop policy if exists "Users can update their own study progress" on public.user_question_progress;
create policy "Users can update their own study progress"
  on public.user_question_progress
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
