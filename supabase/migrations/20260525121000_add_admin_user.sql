-- Enable pgcrypto if it isn't already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

-- Create admin user with email admin@finetunemusic.com and password HenriHope
-- if they don't already exist in auth.users
INSERT INTO auth.users (
  id,
  instance_id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
SELECT
  'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0',
  '00000000-0000-0000-0000-000000000000',
  'authenticated',
  'authenticated',
  'admin@finetunemusic.com',
  extensions.crypt('HenriHope', extensions.gen_salt('bf', 10)),
  now(),
  null,
  null,
  '{"provider": "email", "providers": ["email"]}'::jsonb,
  '{}'::jsonb,
  now(),
  now(),
  '',
  '',
  '',
  ''
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'admin@finetunemusic.com'
);

-- Create corresponding auth identity
INSERT INTO auth.identities (
  id,
  user_id,
  identity_data,
  provider,
  last_sign_in_at,
  created_at,
  updated_at
)
SELECT
  'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0',
  'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0',
  jsonb_build_object('sub', 'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0', 'email', 'admin@finetunemusic.com'),
  'email',
  now(),
  now(),
  now()
WHERE NOT EXISTS (
  SELECT 1 FROM auth.identities WHERE user_id = 'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0'
);

-- Ensure the user has the admin role
INSERT INTO public.user_roles (user_id, role)
SELECT 'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0', 'admin'::public.app_role
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles WHERE user_id = 'd0d0d0d0-d0d0-d0d0-d0d0-d0d0d0d0d0d0' AND role = 'admin'
);
