-- Drop and recreate user_roles policies to allow admin@finetunemusic.com to manage roles
DROP POLICY IF EXISTS "admins manage roles" ON public.user_roles;
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (
  public.has_role(auth.uid(), 'admin') OR auth.jwt() ->> 'email' = 'admin@finetunemusic.com'
) WITH CHECK (
  public.has_role(auth.uid(), 'admin') OR auth.jwt() ->> 'email' = 'admin@finetunemusic.com'
);

-- Allow anyone to insert the first admin role if no admin exists yet (chicken-and-egg fix)
DROP POLICY IF EXISTS "allow_first_admin_role" ON public.user_roles;
CREATE POLICY "allow_first_admin_role" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (
  NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
);

-- Drop and recreate bookings policies to allow admin@finetunemusic.com to view/update/delete bookings directly
DROP POLICY IF EXISTS "admins view bookings" ON public.bookings;
CREATE POLICY "admins view bookings" ON public.bookings FOR SELECT TO authenticated USING (
  public.has_role(auth.uid(), 'admin') OR auth.jwt() ->> 'email' = 'admin@finetunemusic.com'
);

DROP POLICY IF EXISTS "admins update bookings" ON public.bookings;
CREATE POLICY "admins update bookings" ON public.bookings FOR UPDATE TO authenticated USING (
  public.has_role(auth.uid(), 'admin') OR auth.jwt() ->> 'email' = 'admin@finetunemusic.com'
);

DROP POLICY IF EXISTS "admins delete bookings" ON public.bookings;
CREATE POLICY "admins delete bookings" ON public.bookings FOR DELETE TO authenticated USING (
  public.has_role(auth.uid(), 'admin') OR auth.jwt() ->> 'email' = 'admin@finetunemusic.com'
);
