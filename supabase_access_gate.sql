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

create table if not exists public.question_answer_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  selected_option smallint not null check (selected_option between 0 and 4),
  correct_option smallint not null check (correct_option between 0 and 4),
  is_correct boolean not null,
  explanation text,
  submitted_at timestamptz not null default now(),
  primary key (user_id, question_id)
);

alter table public.access_codes enable row level security;
alter table public.access_grants enable row level security;
alter table public.question_answer_attempts enable row level security;

revoke all on public.access_codes from anon, authenticated;
revoke all on public.access_grants from anon, authenticated;
revoke all on public.question_answer_attempts from anon, authenticated;
grant select on public.question_answer_attempts to authenticated;

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

drop policy if exists "Users can read their own question answer attempts"
  on public.question_answer_attempts;
create policy "Users can read their own question answer attempts"
  on public.question_answer_attempts
  for select
  to authenticated
  using (user_id = auth.uid() and public.has_active_access());

create or replace function public.submit_question_answer(
  p_question_id uuid,
  p_selected_option smallint
)
returns setof public.question_answer_attempts
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  question_options jsonb;
  answer_option smallint;
  answer_explanation text;
  previous_attempt public.question_answer_attempts%rowtype;
begin
  if current_user_id is null or not public.has_active_access() then
    raise exception 'An active access code is required to answer questions.';
  end if;

  select *
    into previous_attempt
  from public.question_answer_attempts
  where user_id = current_user_id
    and question_id = p_question_id;

  if found then
    return next previous_attempt;
    return;
  end if;

  select question_row.options, question_row.correct_option, question_row.explanation
    into question_options, answer_option, answer_explanation
  from public.questions as question_row
  where question_row.id = p_question_id
    and question_row.is_published
    and not question_row.is_annulled;

  if not found or answer_option is null then
    raise exception 'Question is unavailable.';
  end if;

  if p_selected_option is null
    or p_selected_option < 0
    or p_selected_option >= jsonb_array_length(question_options) then
    raise exception 'Selected option is invalid.';
  end if;

  insert into public.question_answer_attempts (
    user_id, question_id, selected_option, correct_option, is_correct, explanation
  )
  values (
    current_user_id,
    p_question_id,
    p_selected_option,
    answer_option,
    p_selected_option = answer_option,
    answer_explanation
  )
  on conflict (user_id, question_id) do nothing;

  return query
    select *
    from public.question_answer_attempts
    where user_id = current_user_id
      and question_id = p_question_id;
end;
$$;

revoke all on function public.submit_question_answer(uuid, smallint) from public, anon;
grant execute on function public.submit_question_answer(uuid, smallint) to authenticated;

revoke select on public.questions from anon, authenticated;
grant select (
  id, year, question_number, question_type, subject, topic, difficulty, exam,
  exam_color, statement, statement_after_image, image_url, image_alt, options,
  source, is_annulled, is_published, created_at
) on public.questions to authenticated;

drop policy if exists "Public can read published questions" on public.questions;
drop policy if exists "Authenticated users can read published questions" on public.questions;
drop policy if exists "Question access awaits access gate" on public.questions;
drop policy if exists "Access code holders can read published questions" on public.questions;

create policy "Access code holders can read published questions"
  on public.questions
  for select
  to authenticated
  using (is_published = true and public.has_active_access());
