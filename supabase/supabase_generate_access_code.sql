with generated as materialized (
  select upper(encode(extensions.gen_random_bytes(12), 'hex')) as code
),
saved as (
  insert into public.access_codes (code_hash, label, expires_at)
  select
    extensions.crypt(code, extensions.gen_salt('bf')),
    'Acesso mensal',
    now() + interval '1 month'
  from generated
  returning id, label, expires_at
)
select generated.code, saved.id, saved.label, saved.expires_at
from generated
cross join saved;