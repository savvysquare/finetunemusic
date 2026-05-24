
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "users view own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);
create policy "admins manage roles" on public.user_roles for all to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  event_type text not null,
  event_date date not null,
  location text not null,
  budget text,
  message text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
alter table public.bookings enable row level security;

create policy "anyone can submit booking" on public.bookings for insert to anon, authenticated with check (true);
create policy "admins view bookings" on public.bookings for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admins update bookings" on public.bookings for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admins delete bookings" on public.bookings for delete to authenticated using (public.has_role(auth.uid(), 'admin'));
