import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2, Mic2, GraduationCap, Calendar } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* HERO — editorial split with dashed frame */}
      <section className="grid-frame mt-6 rounded-none">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-dashed border-border">
            <div className="label-mono">Live Music Organization</div>
            <h1 className="mt-5 text-display text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.95] font-semibold">
              The sound that moves the moment, made by FineTune Music.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] text-muted-foreground leading-relaxed">
              A contemporary repertoire band and entertainment organization — live performances, studio production, and a school raising the next generation of instrumentalists.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/book" className="pill pill-primary">Book the band <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/music" className="pill pill-ghost">Listen to our sound</Link>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full">
            <img src={hero} alt="FineTune Music performing live" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        {/* stat cards strip — Crescent-style pastel info cards */}
        <div className="grid sm:grid-cols-3 border-t border-dashed border-border">
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-dashed border-border">
            <div className="info-card info-blue">
              <div className="text-display text-4xl font-semibold">10+ <span className="text-muted-foreground text-2xl font-normal">years</span></div>
              <div className="mt-6 text-sm text-muted-foreground">on stage across Nigeria since 2015</div>
            </div>
          </div>
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-dashed border-border">
            <div className="info-card info-green">
              <div className="text-display text-4xl font-semibold">500+ <span className="text-muted-foreground text-2xl font-normal">events</span></div>
              <div className="mt-6 text-sm text-muted-foreground">weddings, concerts, ceremonies, services</div>
            </div>
          </div>
          <div className="p-8">
            <div className="info-card info-peach">
              <div className="text-display text-4xl font-semibold">20+ <span className="text-muted-foreground text-2xl font-normal">artists</span></div>
              <div className="mt-6 text-sm text-muted-foreground">trained through our school & studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}
      <div className="border-x border-b border-dashed border-border overflow-hidden py-5">
        <div className="marquee whitespace-nowrap flex gap-12 text-2xl text-display text-muted-foreground">
          {[...Array(2)].map((_,i)=>(<span key={i} className="flex items-center gap-12 px-6">
            <span>Weddings</span><span className="text-primary">✦</span>
            <span>Concerts</span><span className="text-primary">✦</span>
            <span>Burials</span><span className="text-primary">✦</span>
            <span>Namings</span><span className="text-primary">✦</span>
            <span>House Warmings</span><span className="text-primary">✦</span>
            <span>Street Jamz</span><span className="text-primary">✦</span>
            <span>Outreach</span><span className="text-primary">✦</span>
            <span>Church Services</span><span className="text-primary">✦</span>
          </span>))}
        </div>
      </div>

      {/* MUSIC PREVIEW */}
      <section className="py-20 border-x border-b border-dashed border-border px-6 sm:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="label-mono">Live & Studio</div>
            <h2 className="mt-2 text-display text-4xl sm:text-5xl font-semibold">Hear the band</h2>
          </div>
          <Link to="/music" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">All tracks <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 border-x border-b border-dashed border-border px-6 sm:px-10">
        <div className="max-w-3xl">
          <div className="label-mono">What we do</div>
          <h2 className="mt-2 text-display text-4xl sm:text-5xl font-semibold">Three pillars. One sound.</h2>
          <p className="mt-4 text-muted-foreground">Education, Entertainment, and Promotion — a complete music ecosystem.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Education", tint: "info-blue", desc: "School of Music and School of Instrumentalists. We train voices, build technique, and raise artists with discipline.", points: ["Voice training", "Instrumentation", "Stage performance"] },
            { icon: Mic2, title: "Entertainment", tint: "info-green", desc: "Live band for every occasion — weddings, concerts, religious services, naming, burials, street jamz, and outreach.", points: ["Weddings & ceremonies", "Religious services", "Street & live concerts"] },
            { icon: Music2, title: "Promotion", tint: "info-peach", desc: "Studio recording, artist development, and gospel music promotion through our equipped FT Studio.", points: ["Album production", "Artist visibility", "Distribution"] },
          ].map((s,i) => (
            <div key={i} className={`info-card ${s.tint}`}>
              <s.icon className="h-7 w-7" />
              <h3 className="mt-5 text-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 text-sm">
                {s.points.map(p => <li key={p} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground" /> {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 border-x border-b border-dashed border-border px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={leader} alt="Banjo Henry" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div>
            <div className="label-mono">Our Story</div>
            <h2 className="mt-2 text-display text-4xl sm:text-5xl font-semibold">Birthed in Lagos. Built for the world.</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              FineTune Music Organization was birthed by the inspiration of God Almighty in 2015 by Banjo Henry in Lagos — first as <em>Dexterity Music</em>, then pinned as <strong>FineTune Music</strong>. It is a contemporary repertoire institution, controlled and induced with professionalism nurtured by experience.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Registered with the Corporate Affairs Commission as <strong>FineTune Music World and Educational Consult</strong> (RC 3558250) since 25th January 2022.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-muted px-4 py-3">
              <img src={leader} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">Banjo Henry — HenriHope</div>
                <div className="text-xs text-muted-foreground">Founder & Band Leader, FineTune Music</div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about" className="pill pill-ghost">Read the full story <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 border-x border-b border-dashed border-border px-6 sm:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="label-mono">Gallery</div>
            <h2 className="mt-2 text-display text-4xl sm:text-5xl font-semibold">On stage</h2>
          </div>
          <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">Full gallery <ArrowRight className="h-4 w-4" /></Link>
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
      <section className="my-12 grid-frame">
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-8 p-10 sm:p-14">
          <div>
            <div className="label-mono inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> Booking</div>
            <h2 className="mt-3 text-display text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-3xl">Ready to make your event unforgettable?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">Tell us about your event. We respond within 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="pill pill-primary">Book the band <ArrowRight className="h-4 w-4" /></Link>
            <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="pill pill-ghost">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
