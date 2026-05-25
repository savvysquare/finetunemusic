-- Secure RPC function to select bookings using the admin password
CREATE OR REPLACE FUNCTION public.get_bookings_secure(admin_password text)
RETURNS TABLE (
  id uuid,
  full_name text,
  email text,
  phone text,
  event_type text,
  event_date date,
  location text,
  budget text,
  message text,
  status text,
  created_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF admin_password = 'HenriHope' THEN
    RETURN QUERY SELECT 
      b.id,
      b.full_name,
      b.email,
      b.phone,
      b.event_type,
      b.event_date,
      b.location,
      b.budget,
      b.message,
      b.status,
      b.created_at
    FROM public.bookings b
    ORDER BY b.created_at DESC;
  ELSE
    RAISE EXCEPTION 'Invalid password';
  END IF;
END;
$$;

-- Secure RPC function to update booking status using the admin password
CREATE OR REPLACE FUNCTION public.update_booking_status_secure(
  admin_password text,
  booking_id uuid,
  new_status text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF admin_password = 'HenriHope' THEN
    UPDATE public.bookings
    SET status = new_status
    WHERE id = booking_id;
  ELSE
    RAISE EXCEPTION 'Invalid password';
  END IF;
END;
$$;

-- Secure RPC function to delete a booking using the admin password
CREATE OR REPLACE FUNCTION public.delete_booking_secure(
  admin_password text,
  booking_id uuid
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF admin_password = 'HenriHope' THEN
    DELETE FROM public.bookings
    WHERE id = booking_id;
  ELSE
    RAISE EXCEPTION 'Invalid password';
  END IF;
END;
$$;
