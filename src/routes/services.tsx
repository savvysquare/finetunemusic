import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Mic2, Music2, Users, Radio, MapPin, Heart, Church } from "lucide-react";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — FineTune Music" }, { name: "description", content: "Live band for weddings, concerts, religious services, naming ceremonies, burials, outreach. Music school, instrumentation training, and studio production." }] }),
  component: Services,
});

const GROUPS = [
  { title: "Education", items: [
    { icon: Mic2, title: "School of Music", desc: "Voice training, genre mastery, performance, and healthy living for artists. Practical assessments via ministrations, concerts, and studio sessions." },
    { icon: Music2, title: "School of Instrumentalists", desc: "Drums, keys, bass, and more. We raise instrumentalists for any kind of stage and synergic playing with any artist." },
    { icon: Users, title: "Campus Invasion", desc: "Partnership with campus fellowships to schedule live concerts featuring our team and institutional artists." },
  ]},
  { title: "Entertainment", items: [
    { icon: Heart, title: "Weddings & Ceremonies", desc: "Full live band coverage for marriages, naming ceremonies, house warmings, anniversaries, and burials." },
    { icon: Church, title: "Religious Services", desc: "Praise teams, guest ministers, conventions, retreats, praise nights and praise concerts." },
    { icon: Radio, title: "Street Jamz", desc: "Outdoor live concerts twice a year — secular and praise formats designed to gather and bless communities." },
    { icon: MapPin, title: "Rural Invasion", desc: "Annual missions tour to rural communities — using music to illuminate, uplift, and reach the unreached." },
  ]},
  { title: "Promotion", items: [
    { icon: Music2, title: "FT Studio", desc: "A fully equipped recording studio for album production, single releases, and artist development." },
    { icon: Radio, title: "Artist Promotion", desc: "Partnerships across the right quarters to give gospel artists the visibility their gift deserves." },
  ]},
];

function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={g4} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16">
          <div className="label-mono text-foreground/70 mb-6">What we do</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[44px] sm:text-[80px] lg:text-[112px] leading-[0.88]">
            Everything <span className="text-gold italic font-light">music.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28 space-y-24">
        {GROUPS.map((g, idx) => (
          <div key={g.title}>
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <div className="label-mono mb-4">{`(0${idx+1}) — ${g.title}`}</div>
                <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-5xl leading-[0.95]">
                  {g.title} <span className="text-gold italic font-light">stack.</span>
                </h2>
              </div>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {g.items.map((it) => (
                <div key={it.title} className="grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_1fr] gap-6 items-center py-7 group hover:bg-card/40 transition px-2">
                  <div className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight">{it.title}</div>
                  <div className="hidden sm:block text-sm text-muted-foreground">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 py-24 text-center">
          <div className="label-mono justify-center mb-5">Get a quote</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
            Let's create something <span className="text-gold italic font-light">unforgettable.</span>
          </h2>
          <p className="mt-6 text-foreground/70">Custom packages available for every kind of event.</p>
          <div className="mt-10"><Link to="/book" className="pill pill-primary">Request a quote <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </div>
  );
}
