import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2, Mic2, GraduationCap, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { TrackCard } from "@/components/track-card";
import { TRACKS } from "@/lib/tracks";
import hero from "@/assets/performance-1.jpg";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "FineTune Music — Live Band & Music Organization" }, { name: "description", content: "Book FineTune Music — a contemporary repertoire band for concerts, weddings, ceremonies, outreach, and live entertainment across Nigeria." }] }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-radial">
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-28 sm:pt-32 sm:pb-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <Sparkles className="h-3 w-3" /> Edifying Your Music Mind · Since 2015
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl">
            The sound that <span className="text-gradient-gold">moves</span> the moment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            FineTune is a contemporary music band and entertainment organization — live performances, studio production, and a school for the next generation of artists and instrumentalists.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-gold hover:scale-[1.02] transition-transform">
              Book the band <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/music" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary/60">
              Listen to our sound
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[["10+","Years on stage"],["500+","Events served"],["20+","Artists raised"]].map(([n,l]) => (
              <div key={l}><div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold">{n}</div><div className="text-xs text-muted-foreground mt-1">{l}</div></div>
            ))}
          </div>
        </div>
        {/* marquee */}
        <div className="border-y border-border/50 overflow-hidden py-4 bg-card/40">
          <div className="marquee whitespace-nowrap flex gap-12 text-xl font-display font-semibold text-muted-foreground/60">
            {[...Array(2)].map((_,i)=>(<span key={i} className="flex items-center gap-12">
              <span>WEDDINGS</span><span className="text-primary">✦</span>
              <span>CONCERTS</span><span className="text-primary">✦</span>
              <span>BURIALS</span><span className="text-primary">✦</span>
              <span>NAMINGS</span><span className="text-primary">✦</span>
              <span>HOUSE WARMINGS</span><span className="text-primary">✦</span>
              <span>STREET JAMZ</span><span className="text-primary">✦</span>
              <span>OUTREACH</span><span className="text-primary">✦</span>
              <span>CHURCH SERVICES</span><span className="text-primary">✦</span>
            </span>))}
          </div>
        </div>
      </section>

      {/* MUSIC PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-2">Live & Studio</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Hear the band</h2>
          </div>
          <Link to="/music" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">All tracks <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary mb-2">What we do</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Three pillars. One sound.</h2>
          <p className="mt-4 text-muted-foreground">Education, Entertainment, and Promotion — a complete music ecosystem.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Education", desc: "School of Music and School of Instrumentalists. We train voices, build technique, and raise artists with discipline.", points: ["Voice training", "Instrumentation", "Stage performance"] },
            { icon: Mic2, title: "Entertainment", desc: "Live band for every occasion — weddings, concerts, religious services, naming, burials, street jamz, and outreach.", points: ["Weddings & ceremonies", "Religious services", "Street & live concerts"] },
            { icon: Music2, title: "Promotion", desc: "Studio recording, artist development, and gospel music promotion through our equipped FT Studio.", points: ["Album production", "Artist visibility", "Distribution"] },
          ].map((s,i) => (
            <div key={i} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/60 transition-colors">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map(p => <li key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={leader} alt="Banjo Henry" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-xs uppercase tracking-widest text-primary">Founder & Band Leader</div>
              <div className="font-display text-3xl font-bold">Banjo Henry <span className="text-muted-foreground text-xl">— HenriHope</span></div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-2">Our Story</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Birthed in Lagos. Built for the world.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              FineTune Music Organization was birthed by the inspiration of God Almighty in 2015 by Banjo Henry in Lagos — first as <em>Dexterity Music</em>, then pinned as <strong className="text-foreground">FineTune Music</strong>. It is a contemporary repertoire institution, controlled and induced with professionalism nurtured by experience.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Registered with the Corporate Affairs Commission as <strong className="text-foreground">FineTune Music World and Educational Consult</strong> (RC 3558250) since 25th January 2022.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">Read the full story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">On stage</h2>
          <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">Full gallery <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[hero, leader, group, hero].map((img,i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl ${i===0?'col-span-2 row-span-2 aspect-square':'aspect-square'}`}>
              <img src={img} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-background p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />
          <div className="relative">
            <Calendar className="h-10 w-10 text-primary mx-auto" />
            <h2 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">Ready to make your event unforgettable?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Tell us about your event. We respond within 24 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-gold">Book the band <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary/60">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
