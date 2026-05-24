import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, MessageCircle, Calendar } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [{ title: "Book Us — FineTune Music" }, { name: "description", content: "Book FineTune Music for your wedding, concert, religious service, or ceremony. We respond within 24 hours." }] }),
  component: Book,
});

const EVENT_TYPES = ["Wedding", "Concert", "Religious Service", "Naming Ceremony", "Burial", "House Warming", "Birthday", "Corporate Event", "Outreach", "Other"];

function Book() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      full_name: String(f.get("full_name")),
      email: String(f.get("email")),
      phone: String(f.get("phone")),
      event_type: String(f.get("event_type")),
      event_date: String(f.get("event_date")),
      location: String(f.get("location")),
      budget: String(f.get("budget") || "") || null,
      message: String(f.get("message") || "") || null,
    });
    setLoading(false);
    if (error) { toast.error("Could not submit booking. Please try WhatsApp."); return; }
    setDone(true);
    toast.success("Booking request received!");
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
        <h1 className="mt-6 font-display text-4xl font-bold">Booking received!</h1>
        <p className="mt-3 text-muted-foreground">Thank you. We'll respond within 24 hours. For urgent matters, message us on WhatsApp.</p>
        <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3 flex items-center gap-2"><Calendar className="h-3 w-3" /> Booking</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Book the band</h1>
      <p className="mt-4 text-muted-foreground">Tell us about your event. We respond within 24 hours.</p>

      <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field name="full_name" label="Full name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="phone" label="Phone / WhatsApp" required />
          <div>
            <label className="text-sm font-medium">Event type *</label>
            <select name="event_type" required className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
              {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <Field name="event_date" label="Event date" type="date" required />
          <Field name="location" label="Location / Venue" required />
          <div className="sm:col-span-2"><Field name="budget" label="Estimated budget (optional)" placeholder="e.g. ₦300,000 — ₦500,000" /></div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Tell us more</label>
            <textarea name="message" rows={4} placeholder="Describe the event, expected guest count, songs you'd love..." className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button disabled={loading} type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-gold disabled:opacity-50">
            {loading ? "Submitting..." : "Send booking request"}
          </button>
          <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary/60">
            <MessageCircle className="h-4 w-4" /> Or chat on WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}

function Field({ name, label, type="text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
