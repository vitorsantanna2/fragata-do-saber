-- Respostas independentes por simulado. Execute depois de supabase_access_gate.sql.
create table if not exists public.simulation_answer_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  simulation_id text not null check (length(simulation_id) between 1 and 200),
  question_id uuid not null references public.questions(id) on delete cascade,
  selected_option smallint not null check (selected_option between 0 and 4),
  correct_option smallint not null check (correct_option between 0 and 4),
  is_correct boolean not null,
  explanation text,
  submitted_at timestamptz not null default now(),
  primary key (user_id, simulation_id, question_id)
);

alter table public.simulation_answer_attempts enable row level security;
revoke all on public.simulation_answer_attempts from anon, authenticated;
grant select on public.simulation_answer_attempts to authenticated;

drop policy if exists "Users can read their own simulation attempts" on public.simulation_answer_attempts;
create policy "Users can read their own simulation attempts"
  on public.simulation_answer_attempts for select to authenticated
  using (user_id = auth.uid() and public.has_active_access());

create or replace function public.submit_simulation_answer(
  p_simulation_id text,
  p_question_id uuid,
  p_selected_option smallint
)
returns setof public.simulation_answer_attempts
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  question_options jsonb;
  answer_option smallint;
  answer_explanation text;
  attempt public.simulation_answer_attempts%rowtype;
begin
  if current_user_id is null or not public.has_active_access() then
    raise exception 'An active access code is required to answer questions.';
  end if;
  if p_simulation_id is null or length(btrim(p_simulation_id)) not between 1 and 200 then
    raise exception 'A simulation ID is required.';
  end if;

  select * into attempt
  from public.simulation_answer_attempts
  where user_id = current_user_id and simulation_id = p_simulation_id and question_id = p_question_id;
  if found then
    return next attempt;
    return;
  end if;

  select question_row.options, question_row.correct_option, question_row.explanation
    into question_options, answer_option, answer_explanation
  from public.questions as question_row
  where question_row.id = p_question_id and question_row.is_published and not question_row.is_annulled;
  if not found or answer_option is null then
    raise exception 'Question is unavailable.';
  end if;
  if p_selected_option is null or p_selected_option < 0 or p_selected_option >= jsonb_array_length(question_options) then
    raise exception 'Selected option is invalid.';
  end if;

  insert into public.simulation_answer_attempts (
    user_id, simulation_id, question_id, selected_option, correct_option, is_correct, explanation
  ) values (
    current_user_id, p_simulation_id, p_question_id, p_selected_option, answer_option,
    p_selected_option = answer_option, answer_explanation
  ) on conflict (user_id, simulation_id, question_id) do nothing;

  select * into attempt from public.simulation_answer_attempts
  where user_id = current_user_id and simulation_id = p_simulation_id and question_id = p_question_id;

  -- Mantém o resultado mais recente disponível para a recuperação do progresso.
  insert into public.question_answer_attempts as latest (
    user_id, question_id, selected_option, correct_option, is_correct, explanation, submitted_at
  ) values (
    attempt.user_id, attempt.question_id, attempt.selected_option, attempt.correct_option,
    attempt.is_correct, attempt.explanation, attempt.submitted_at
  ) on conflict (user_id, question_id) do update set
    selected_option = excluded.selected_option,
    correct_option = excluded.correct_option,
    is_correct = excluded.is_correct,
    explanation = excluded.explanation,
    submitted_at = excluded.submitted_at
  where latest.submitted_at <= excluded.submitted_at;

  return next attempt;
end;
$$;

revoke all on function public.submit_simulation_answer(text, uuid, smallint) from public, anon;
grant execute on function public.submit_simulation_answer(text, uuid, smallint) to authenticated;
