import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Admin Login — FineTune Music" }] }),
  component: Auth,
});

function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        if (data.session.user.email === "admin@finetunemusic.com") {
          navigate({ to: "/bookings" });
        }
      }
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const password = String(f.get("password"));

    if (password !== "HenriHope") {
      toast.error("Incorrect password");
      return;
    }

    sessionStorage.setItem("admin_password", password);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: "admin@finetunemusic.com",
      password: "HenriHope",
    });

    if (error) {
      // Fallback: if user doesn't exist, sign up and try to claim the admin role
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: "admin@finetunemusic.com",
        password: "HenriHope",
      });

      if (signUpError) {
        setLoading(false);
        return toast.error("Authentication failed. Please contact the administrator.");
      }

      if (signUpData.session) {
        await supabase.from("user_roles").insert({
          user_id: signUpData.session.user.id,
          role: "admin"
        }).catch(() => {});
        setLoading(false);
        navigate({ to: "/bookings" });
      } else {
        // Attempt login one more time after registration
        const { error: retryError } = await supabase.auth.signInWithPassword({
          email: "admin@finetunemusic.com",
          password: "HenriHope",
        });
        setLoading(false);
        if (!retryError) {
          navigate({ to: "/bookings" });
        } else {
          toast.error("Account created. Please try signing in again.");
        }
      }
    } else {
      setLoading(false);
      navigate({ to: "/bookings" });
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 py-20">
      <div className="rounded-3xl border border-border/60 bg-card p-8">
        <Lock className="h-8 w-8 text-primary" />
        <h1 className="mt-4 font-display text-3xl font-bold">Admin access</h1>
        <p className="mt-2 text-sm text-muted-foreground">Enter password to view booking requests.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-foreground"
            />
          </div>
          <button
            disabled={loading}
            className="w-full rounded-full bg-gold text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Verifying..." : "Access Dashboard"}
          </button>
        </form>
        <Link to="/" className="mt-6 block text-xs text-muted-foreground hover:text-primary">← Back to site</Link>
      </div>
    </div>
  );
}

