-- Adiciona coluna is_simulation para distinguir simulados de estudo normal.
-- Execute depois de supabase_user_simulation_results.sql.

alter table public.user_simulation_results
  add column if not exists is_simulation boolean not null default true;
