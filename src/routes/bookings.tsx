import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Calendar, Mail, Phone, MapPin, LogOut, Trash2 } from "lucide-react";

type Booking = {
  id: string; full_name: string; email: string; phone: string; event_type: string;
  event_date: string; location: string; budget: string | null; message: string | null;
  status: string; created_at: string;
};

export const Route = createFileRoute("/bookings")({
  head: () => ({ meta: [{ title: "Bookings — Admin" }, { name: "robots", content: "noindex" }] }),
  component: BookingsPage,
});

function BookingsPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [authedEmail, setAuthedEmail] = useState<string | null>(null);
  const [needsRole, setNeedsRole] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<{
    sessionUser: any;
    rolesData: any;
    rolesError: any;
    bookingsError: any;
    bookingsCount: number | null;
  }>({
    sessionUser: null,
    rolesData: null,
    rolesError: null,
    bookingsError: null,
    bookingsCount: null,
  });

  useEffect(() => { void init(); }, []);

  async function init() {
    const pwd = sessionStorage.getItem("admin_password");
    if (pwd !== "HenriHope") {
      navigate({ to: "/auth" });
      return;
    }

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setAuthedEmail(session.user.email ?? null);
      setUserId(session.user.id);
    }
    
    await load();
  }

  async function load() {
    setLoading(true);
    const pwd = sessionStorage.getItem("admin_password") || "";
    const { data, error } = await supabase.rpc("get_bookings_secure", { admin_password: pwd });
    setLoading(false);
    
    setDebugInfo(prev => ({
      ...prev,
      bookingsError: error ? error.message : null,
      bookingsCount: data ? data.length : 0,
    }));

    if (error) { 
      toast.error("Access denied or session expired. Please sign in again.");
      sessionStorage.removeItem("admin_password");
      navigate({ to: "/auth" });
      return; 
    }
    setBookings((data || []) as Booking[]);
  }

  async function setStatus(id: string, status: string) {
    const pwd = sessionStorage.getItem("admin_password") || "";
    const { error } = await supabase.rpc("update_booking_status_secure", {
      admin_password: pwd,
      booking_id: id,
      new_status: status
    });
    if (error) return toast.error(error.message);
    setBookings(b => b.map(x => x.id === id ? { ...x, status } : x));
  }

  async function remove(id: string) {
    if (!confirm("Delete this booking?")) return;
    const pwd = sessionStorage.getItem("admin_password") || "";
    const { error } = await supabase.rpc("delete_booking_secure", {
      admin_password: pwd,
      booking_id: id
    });
    if (error) return toast.error(error.message);
    setBookings(b => b.filter(x => x.id !== id));
  }

  async function logout() { 
    sessionStorage.removeItem("admin_password");
    await supabase.auth.signOut(); 
    navigate({ to: "/auth" }); 
  }


  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-1">Admin</div>
          <h1 className="font-display text-4xl font-bold">Bookings</h1>
          <p className="text-sm text-muted-foreground mt-1">{bookings.length} request{bookings.length === 1 ? "" : "s"} · signed in as {authedEmail}</p>
        </div>
        <button onClick={logout} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/60"><LogOut className="h-4 w-4" /> Sign out</button>
      </div>

      {loading ? <div className="mt-12 text-center text-muted-foreground">Loading…</div> :
       bookings.length === 0 ? <div className="mt-16 text-center text-muted-foreground">No bookings yet.</div> :
      <div className="mt-8 grid gap-4">
        {bookings.map(b => (
          <div key={b.id} className="rounded-2xl border border-border/60 bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-xl font-bold">{b.full_name}</h3>
                  <StatusBadge status={b.status} />
                  <span className="text-xs text-muted-foreground">{b.event_type}</span>
                </div>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {new Date(b.event_date).toLocaleDateString(undefined, { dateStyle: "long" })}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {b.location}</div>
                  <a href={`mailto:${b.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> {b.email}</a>
                  <a href={`https://wa.me/${b.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> {b.phone}</a>
                </div>
                {b.budget && <div className="mt-2 text-sm"><span className="text-muted-foreground">Budget:</span> {b.budget}</div>}
                {b.message && <p className="mt-3 text-sm bg-background/50 rounded-lg p-3 border border-border/60">{b.message}</p>}
                <div className="mt-2 text-xs text-muted-foreground">Submitted {new Date(b.created_at).toLocaleString()}</div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <select value={b.status} onChange={e => setStatus(b.id, e.target.value)} className="rounded-lg bg-input border border-border px-2 py-1.5 text-xs">
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button onClick={() => remove(b.id)} className="text-xs text-muted-foreground hover:text-destructive inline-flex items-center gap-1"><Trash2 className="h-3 w-3" /> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>}

      <div className="mt-12 p-6 rounded-2xl border border-dashed border-border bg-card/20 text-foreground">
        <h4 className="text-sm font-semibold mb-3">Debug Information</h4>
        <pre className="text-xs overflow-auto max-h-60 p-3 bg-black/40 rounded-lg text-emerald-400">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string,string> = {
    pending: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    contacted: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    confirmed: "bg-primary/15 text-primary border-primary/30",
    completed: "bg-green-500/15 text-green-300 border-green-500/30",
    cancelled: "bg-red-500/15 text-red-300 border-red-500/30",
  };
  return <span className={`text-xs px-2 py-0.5 rounded-full border ${map[status] || ""}`}>{status}</span>;
}
