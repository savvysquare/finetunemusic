import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowUpRight } from "lucide-react";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — FineTune Music" }, { name: "description", content: "Reach FineTune Music via WhatsApp, phone, email, or social media. Based in Lagos, Nigeria." }] }),
  component: Contact,
});

const CHANNELS = [
  { icon: Phone, label: "Phone", value: "+234 811 358 1125", href: "tel:+2348113581125" },
  { icon: Mail, label: "Email", value: "musicismylife_h@yahoo.com", href: "mailto:musicismylife_h@yahoo.com" },
  { icon: MapPin, label: "Office", value: "27 College Road, Ifako-Ijaye, Ogba, Lagos" },
  { icon: Instagram, label: "Instagram", value: "@iam_finetunemusic", href: "https://instagram.com/iam_finetunemusic" },
  { icon: Facebook, label: "Facebook", value: "Henri Hope", href: "https://www.facebook.com/Momore01" },
  { icon: MessageCircle, label: "TikTok", value: "@finetunemusicofficial", href: "https://tiktok.com/@finetunemusicofficial" },
];

function Contact() {
  return (
    <div>
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={g6} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16">
          <div className="label-mono text-foreground/70 mb-6">Contact</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[44px] sm:text-[80px] lg:text-[112px] leading-[0.88]">
            Let's talk <span className="text-gold italic font-light">music.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 sm:px-10 py-20">
        <a href="https://wa.me/2348149732788?text=Hello%20FineTune%20Music!" target="_blank" rel="noreferrer" className="group flex items-center gap-5 rounded-3xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 sm:p-8 hover:bg-[#25D366]/15 transition">
          <div className="h-16 w-16 rounded-full bg-[#25D366] flex items-center justify-center shrink-0"><MessageCircle className="h-7 w-7 text-white" /></div>
          <div className="flex-1">
            <div className="label-mono mb-1">Fastest reply</div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold uppercase">Chat on WhatsApp</div>
            <div className="text-sm text-muted-foreground mt-1">+234 814 973 2788 · Tap to open</div>
          </div>
          <ArrowUpRight className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition" />
        </a>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid grid-cols-[auto_1fr_auto] gap-6 items-center py-6 group hover:bg-card/40 transition px-2"
            >
              <div className="h-12 w-12 rounded-xl border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="label-mono mb-1">{c.label}</div>
                <div className="font-display text-lg sm:text-xl">{c.value}</div>
              </div>
              {c.href && <ArrowUpRight className="h-5 w-5 text-foreground/40 group-hover:text-gold transition" />}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
