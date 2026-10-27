create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  year smallint,
  question_type text not null default 'exam' check (question_type in ('exam', 'bibliography')),
  subject text not null,
  exam text not null,
  exam_color text,
  question_number smallint,
  topic text,
  difficulty text,
  statement text not null,
  statement_after_image text,
  image_url text,
  image_alt text,
  options jsonb not null,
  correct_option smallint,
  explanation text,
  source text,
  is_annulled boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.questions
  add column if not exists exam_color text,
  add column if not exists question_type text not null default 'exam',
  add column if not exists question_number smallint,
  add column if not exists topic text,
  add column if not exists difficulty text,
  add column if not exists source text,
  add column if not exists statement_after_image text,
  add column if not exists image_url text,
  add column if not exists image_alt text,
  add column if not exists is_annulled boolean not null default false,
  alter column difficulty drop not null,
  alter column year drop not null,
  alter column correct_option drop not null;

alter table public.questions
  drop constraint if exists questions_question_type_check;

alter table public.questions
  add constraint questions_question_type_check
    check (question_type in ('exam', 'bibliography'));

alter table public.questions
  drop constraint if exists questions_bibliography_source_check;

alter table public.questions
  add constraint questions_bibliography_source_check
    check (
      not is_published
      or question_type != 'bibliography'
      or nullif(pg_catalog.btrim(source), '') is not null
    );

alter table public.questions
  drop constraint if exists questions_check,
  drop constraint if exists questions_options_check,
  drop constraint if exists questions_correct_option_check;

alter table public.questions
  add constraint questions_options_check
    check (
      not is_published
      or (
        jsonb_typeof(options) = 'array'
        and jsonb_array_length(options) between 2 and 5
      )
    ),
  add constraint questions_correct_option_check
    check (
      not is_published
      or (
        correct_option is not null
        and correct_option >= 0
        and correct_option < jsonb_array_length(options)
      )
    );

create index if not exists questions_exam_subject_type_year_idx
  on public.questions (exam, subject, question_type, year desc, question_number);

alter table public.questions enable row level security;

revoke select on public.questions from anon;
grant select on public.questions to authenticated;

drop policy if exists "Public can read published questions"
  on public.questions;
drop policy if exists "Access code holders can read published questions"
  on public.questions;
drop policy if exists "Authenticated users can read published questions"
  on public.questions;

do $$
begin
  if pg_catalog.to_regprocedure('public.has_active_access()') is not null then
    execute 'create policy "Access code holders can read published questions"
      on public.questions for select to authenticated
      using (is_published = true and public.has_active_access())';
  else
    -- Não libera questões até que o script supabase_access_gate.sql
    -- crie a política com validação do código de acesso.
    execute 'create policy "Question access awaits access gate"
      on public.questions for select to authenticated
      using (false)';
  end if;
end;
$$;
