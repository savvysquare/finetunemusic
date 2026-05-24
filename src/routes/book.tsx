import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";

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
      <div className="mx-auto max-w-2xl px-6 sm:px-10 py-32 text-center">
        <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
        <div className="label-mono justify-center mt-8 mb-4">Confirmed</div>
        <h1 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
          Booking <span className="text-gold italic font-light">received.</span>
        </h1>
        <p className="mt-6 text-foreground/70">Thank you. We'll respond within 24 hours. For urgent matters, message us on WhatsApp.</p>
        <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="mt-10 pill pill-primary inline-flex">
          <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 sm:px-10 pt-24 pb-12">
        <div className="label-mono mb-5">Booking 2025</div>
        <h1 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-7xl lg:text-8xl leading-[0.88] max-w-4xl">
          Book the <span className="text-gold italic font-light">band.</span>
        </h1>
        <p className="mt-6 max-w-xl text-foreground/70 text-lg">Tell us about your event. We respond within 24 hours.</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 sm:px-10 pb-28">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card/40 p-6 sm:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="full_name" label="Full name" required />
            <Field name="email" label="Email" type="email" required />
            <Field name="phone" label="Phone / WhatsApp" required />
            <div>
              <label className="label-mono mb-2">Event type *</label>
              <select name="event_type" required className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-3 text-sm focus:outline-none focus:border-gold">
                {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <Field name="event_date" label="Event date" type="date" required />
            <Field name="location" label="Location / Venue" required />
            <div className="sm:col-span-2"><Field name="budget" label="Estimated budget (optional)" placeholder="e.g. ₦300,000 — ₦500,000" /></div>
            <div className="sm:col-span-2">
              <label className="label-mono mb-2">Tell us more</label>
              <textarea name="message" rows={4} placeholder="Describe the event, expected guest count, songs you'd love..." className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button disabled={loading} type="submit" className="pill pill-primary disabled:opacity-50">
              {loading ? "Submitting..." : "Send booking request"} <ArrowUpRight className="h-4 w-4" />
            </button>
            <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="pill pill-ghost">
              <MessageCircle className="h-4 w-4" /> Or chat on WhatsApp
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({ name, label, type="text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="label-mono mb-2">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full rounded-lg bg-input border border-border px-3 py-3 text-sm focus:outline-none focus:border-gold" />
    </div>
  );
}
