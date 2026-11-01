-- Revisões programadas. Execute depois de supabase_user_progress_setup.sql.
create table if not exists public.user_review_schedules (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  due_date date not null,
  state jsonb not null check (jsonb_typeof(state) = 'object'),
  updated_at timestamptz not null,
  primary key (user_id, question_id),
  check (state ?& array['dueDate', 'intervalDays', 'streak', 'previousStreak', 'confidence', 'lastCorrect', 'lastAttemptId', 'lastReviewedAt', 'updatedAt']),
  check (state ->> 'dueDate' = due_date::text),
  check ((state ->> 'updatedAt')::timestamptz = updated_at),
  check (state ->> 'confidence' is null or state ->> 'confidence' in ('sure', 'unsure', 'guess'))
);

-- Uma sincronização atrasada não pode sobrescrever uma revisão mais recente.
create or replace function public.keep_newest_review_schedule()
returns trigger language plpgsql set search_path = '' as $$
begin
  if new.updated_at < old.updated_at then return null; end if;
  return new;
end;
$$;
drop trigger if exists keep_newest_review_schedule on public.user_review_schedules;
create trigger keep_newest_review_schedule before update on public.user_review_schedules
  for each row execute function public.keep_newest_review_schedule();
create index if not exists user_review_schedules_due_idx on public.user_review_schedules (user_id, due_date);
alter table public.user_review_schedules enable row level security;
revoke all on public.user_review_schedules from anon, authenticated;
grant select, insert, update on public.user_review_schedules to authenticated;

drop policy if exists "Users can read their own reviews" on public.user_review_schedules;
create policy "Users can read their own reviews" on public.user_review_schedules
  for select to authenticated using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
drop policy if exists "Users can insert their own reviews" on public.user_review_schedules;
create policy "Users can insert their own reviews" on public.user_review_schedules
  for insert to authenticated with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
drop policy if exists "Users can update their own reviews" on public.user_review_schedules;
create policy "Users can update their own reviews" on public.user_review_schedules
  for update to authenticated using (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  ) with check (
    user_id = (select auth.uid())
    and coalesce((select auth.jwt() ->> 'is_anonymous')::boolean, true) = false
  );
