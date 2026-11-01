-- Gabaritos para estudo offline. Execute depois de supabase_access_gate.sql.
-- O download exige uma sessão autenticada com código de acesso válido.
-- Os gabaritos baixados são armazenados no aparelho para correção local.

create or replace function public.get_offline_question_answers(p_question_ids uuid[])
returns table (question_id uuid, correct_option smallint, explanation text)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not public.has_active_access() then
    raise exception 'An active access code is required to download offline questions.';
  end if;

  if p_question_ids is null or cardinality(p_question_ids) > 100 then
    raise exception 'Request up to 100 question IDs at a time.';
  end if;

  return query
    select question_row.id, question_row.correct_option, question_row.explanation
    from public.questions as question_row
    where question_row.id = any(p_question_ids)
      and question_row.is_published
      and not question_row.is_annulled
      and question_row.correct_option is not null
      and question_row.correct_option >= 0
      and question_row.correct_option < jsonb_array_length(question_row.options);
end;
$$;

revoke all on function public.get_offline_question_answers(uuid[]) from public, anon;
grant execute on function public.get_offline_question_answers(uuid[]) to authenticated;
