import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — FineTune Music" }, { name: "description", content: "Reach FineTune Music via WhatsApp, phone, email, or social media. Based in Lagos, Nigeria." }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Contact</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Let's talk music.</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">The fastest way to reach us is WhatsApp. For booking inquiries, please use our booking form.</p>

      <a href="https://wa.me/2348149732788?text=Hello%20FineTune%20Music!" target="_blank" rel="noreferrer" className="mt-10 flex items-center gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 hover:bg-[#25D366]/15 transition-colors">
        <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center"><MessageCircle className="h-7 w-7 text-white" /></div>
        <div>
          <div className="font-display text-xl font-bold">Chat on WhatsApp</div>
          <div className="text-sm text-muted-foreground">+234 814 973 2788 · Tap to open</div>
        </div>
      </a>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {[
          { icon: Phone, label: "Phone", value: "+234 811 358 1125", href: "tel:+2348113581125" },
          { icon: Mail, label: "Email", value: "musicismylife_h@yahoo.com", href: "mailto:musicismylife_h@yahoo.com" },
          { icon: MapPin, label: "Office", value: "27 College Road, Ifako-Ijaye, Ogba, Lagos" },
          { icon: Instagram, label: "Instagram", value: "@iam_finetunemusic", href: "https://instagram.com/iam_finetunemusic" },
          { icon: Facebook, label: "Facebook", value: "Henri Hope", href: "https://www.facebook.com/Momore01" },
          { icon: MessageCircle, label: "TikTok", value: "@finetunemusicofficial", href: "https://tiktok.com/@finetunemusicofficial" },
        ].map((c,i) => (
          <a key={i} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-2xl border border-border/60 bg-card p-5 flex items-center gap-4 hover:border-primary/60 transition-colors">
            <c.icon className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="font-medium truncate">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
