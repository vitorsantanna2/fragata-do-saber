create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  year smallint not null,
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
  add column if not exists question_number smallint,
  add column if not exists difficulty text,
  add column if not exists statement_after_image text,
  add column if not exists image_url text,
  add column if not exists image_alt text,
  add column if not exists is_annulled boolean not null default false,
  alter column difficulty drop not null,
  alter column correct_option drop not null;

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

alter table public.questions enable row level security;

grant select on public.questions to anon, authenticated;

drop policy if exists "Public can read published questions"
  on public.questions;

create policy "Public can read published questions"
  on public.questions
  for select
  to anon, authenticated
  using (is_published = true);