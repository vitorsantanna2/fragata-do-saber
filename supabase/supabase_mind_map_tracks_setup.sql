-- Execute depois de supabase_mind_maps_setup.sql.
-- Os vínculos usam os IDs estáveis das trilhas/etapas do aplicativo.
alter table public.mind_maps
  add column if not exists track_steps text[] not null default '{}';
-- As políticas existentes de mind_maps continuam restringindo a edição aos admins.
-- Exemplo (substitua o UUID pelo mapa desejado):
-- update public.mind_maps set track_steps = array['cpt-2026-infra/so'] where id = 'UUID';
