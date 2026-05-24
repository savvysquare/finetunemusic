import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Admin Login — FineTune Music" }] }),
  component: Auth,
});

function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login"|"signup">("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { if (data.session) navigate({ to: "/bookings" }); });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email"));
    const password = String(f.get("password"));
    setLoading(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/bookings` } });
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. Ask the admin to grant you access.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return toast.error(error.message);
      navigate({ to: "/bookings" });
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 py-20">
      <div className="rounded-3xl border border-border/60 bg-card p-8">
        <LogIn className="h-8 w-8 text-primary" />
        <h1 className="mt-4 font-display text-3xl font-bold">Admin access</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to view booking requests.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div><label className="text-sm font-medium">Email</label><input name="email" type="email" required className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary" /></div>
          <div><label className="text-sm font-medium">Password</label><input name="password" type="password" required minLength={6} className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary" /></div>
          <button disabled={loading} className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50">{loading ? "..." : mode === "login" ? "Sign in" : "Create account"}</button>
        </form>
        <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="mt-4 text-xs text-muted-foreground hover:text-primary">
          {mode === "login" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
        <Link to="/" className="mt-6 block text-xs text-muted-foreground hover:text-primary">← Back to site</Link>
      </div>
    </div>
  );
}
