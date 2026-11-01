-- Adiciona coluna is_simulation para distinguir simulados de estudo normal.
-- Execute depois de supabase_user_simulation_results.sql.

alter table public.user_simulation_results
  add column if not exists is_simulation boolean not null default false;

-- Registros antigos (sem valor definido) são tratados como não-simulados
-- e não aparecerão no painel de desempenho.
update public.user_simulation_results
  set is_simulation = false
  where is_simulation is null;
