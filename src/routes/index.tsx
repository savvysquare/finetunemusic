import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
    <div className="mx-auto max-w-6xl px-6 sm:px-10">
      {/* HERO — editorial, generous whitespace */}
      <section className="pt-20 sm:pt-32 pb-24">
        <div className="label-mono">FineTune Music · Est. 2015 · Lagos</div>
        <h1 className="mt-10 text-mega text-[44px] sm:text-[64px] lg:text-[80px] max-w-4xl">
          A band that <em>edifies</em><br/>the music mind.
        </h1>
        <div className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <p className="text-lg sm:text-xl text-foreground/75 max-w-xl leading-relaxed">
            FineTune Music is a contemporary repertoire band and educational consult — performing weddings, concerts, ceremonies and worship services across Nigeria, while raising the next generation of instrumentalists.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link to="/book" className="pill pill-primary">Book the band <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/music" className="pill pill-ghost">Listen</Link>
          </div>
        </div>
      </section>

      {/* FULL-BLEED HERO IMAGE */}
      <section className="pb-24">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <img src={hero} alt="FineTune Music live" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <span>Live at concert · Lagos</span>
          <span className="text-display text-foreground">FineTune Music — 2024</span>
        </div>
      </section>

      {/* STATS — editorial row */}
      <section className="editorial-rule py-16 grid sm:grid-cols-3 gap-10">
        {[
          { n: "10+", l: "Years on stage across Nigeria" },
          { n: "500+", l: "Weddings, concerts & ceremonies" },
          { n: "20+", l: "Artists trained through our school" },
        ].map((s) => (
          <div key={s.n}>
            <div className="text-display text-4xl sm:text-5xl text-gold">{s.n}</div>
            <div className="mt-3 text-sm text-muted-foreground max-w-[14rem]">{s.l}</div>
          </div>
        ))}
      </section>

      {/* MARQUEE — quiet */}
      <div className="editorial-rule overflow-hidden py-8">
        <div className="marquee whitespace-nowrap flex gap-16 text-3xl text-display text-foreground/40">
          {[...Array(2)].map((_,i)=>(<span key={i} className="flex items-center gap-16 px-8">
            <span>Weddings</span><span className="text-gold">·</span>
            <span>Concerts</span><span className="text-gold">·</span>
            <span>Burials</span><span className="text-gold">·</span>
            <span>Namings</span><span className="text-gold">·</span>
            <span>House Warmings</span><span className="text-gold">·</span>
            <span>Street Jamz</span><span className="text-gold">·</span>
            <span>Outreach</span><span className="text-gold">·</span>
            <span>Worship</span><span className="text-gold">·</span>
          </span>))}
        </div>
      </div>

      {/* WORK / SERVICES — editorial list */}
      <section className="editorial-rule py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16">
          <div className="label-mono">What we do</div>
          <h2 className="text-mega text-4xl sm:text-6xl">
            Three pillars. <em>One sound.</em>
          </h2>
        </div>
        <div className="space-y-0">
          {[
            { n: "01", title: "Entertainment", desc: "Live band for weddings, concerts, religious services, naming, burials, street jamz and corporate events." },
            { n: "02", title: "Education", desc: "FineTune School of Music & School of Instrumentalists — voice, technique, and stage performance." },
            { n: "03", title: "Promotion", desc: "FT Studio — recording, artist development, and distribution for gospel and contemporary music." },
          ].map((s) => (
            <div key={s.n} className="editorial-rule grid sm:grid-cols-[80px_1fr_auto] gap-6 py-10 items-start group">
              <div className="text-display text-2xl text-gold">{s.n}</div>
              <div>
                <h3 className="text-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-3 text-foreground/70 max-w-xl">{s.desc}</p>
              </div>
              <Link to="/services" className="text-sm text-muted-foreground group-hover:text-gold inline-flex items-center gap-1">Explore <ArrowUpRight className="h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC PREVIEW */}
      <section className="editorial-rule py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-mono">Selected work</div>
            <h2 className="mt-6 text-mega text-4xl sm:text-6xl">Hear the band.</h2>
          </div>
          <Link to="/music" className="pill pill-ghost">All tracks <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
        </div>
      </section>

      {/* FOUNDER — editorial split */}
      <section className="editorial-rule py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img src={leader} alt="Banjo Henry" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="lg:pt-12">
          <div className="label-mono">A note from the founder</div>
          <h2 className="mt-6 text-mega text-4xl sm:text-5xl">
            Birthed in Lagos. <em>Built for the world.</em>
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed text-lg">
            FineTune Music was birthed by the inspiration of God Almighty in 2015 by Banjo Henry in Lagos — first as <em>Dexterity Music</em>, then pinned as <strong>FineTune Music</strong>. A contemporary repertoire institution, controlled and induced with professionalism nurtured by experience.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Registered with the Corporate Affairs Commission as <strong>FineTune Music World and Educational Consult</strong> (RC 3558250) since 25th January 2022.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <img src={leader} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="text-display text-lg">Banjo Henry — HenriHope</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase">Founder & Band Leader</div>
            </div>
          </div>
          <Link to="/about" className="mt-10 pill pill-ghost inline-flex">Read the full story <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* GALLERY — editorial grid */}
      <section className="editorial-rule py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-mono">Gallery</div>
            <h2 className="mt-6 text-mega text-4xl sm:text-6xl">On stage.</h2>
          </div>
          <Link to="/gallery" className="pill pill-ghost">Full gallery <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-8 aspect-[4/3] overflow-hidden rounded-2xl"><img src={hero} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" /></div>
          <div className="col-span-12 sm:col-span-4 aspect-[3/4] overflow-hidden rounded-2xl"><img src={leader} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" /></div>
          <div className="col-span-6 sm:col-span-4 aspect-square overflow-hidden rounded-2xl"><img src={group} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" /></div>
          <div className="col-span-6 sm:col-span-8 aspect-[2/1] overflow-hidden rounded-2xl"><img src={hero} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" /></div>
        </div>
      </section>

      {/* CTA — editorial closer */}
      <section className="editorial-rule py-32 text-center">
        <div className="label-mono">Booking · Available now</div>
        <h2 className="mt-10 text-mega text-5xl sm:text-7xl lg:text-8xl max-w-4xl mx-auto">
          Let's make your moment <em>unforgettable.</em>
        </h2>
        <p className="mt-8 text-foreground/70 max-w-xl mx-auto text-lg">Tell us about your event. We respond within 24 hours.</p>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link to="/book" className="pill pill-primary">Book the band <ArrowUpRight className="h-4 w-4" /></Link>
          <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="pill pill-ghost">Chat on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
