import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2, Mic2, GraduationCap, Calendar, Sparkles, Heart, Star, CheckCircle2 } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-8 py-8">
      {/* HERO — PiggyVest big friendly */}
      <section className="section-soft section-gold relative overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <div>
            <span className="label-mono"><Sparkles className="inline h-3 w-3 mr-1" /> Live Music Organization · Est. 2015</span>
            <h1 className="mt-6 text-mega text-[48px] sm:text-[72px] lg:text-[88px]">
              The band that makes your <span className="text-gradient-gold">moment unforgettable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] text-foreground/75 leading-relaxed">
              FineTune Music is a contemporary repertoire band powering weddings, concerts, ceremonies and worship across Nigeria — with the heart of a school that trains the next generation.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/book" className="pill pill-primary">Book the band <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/music" className="pill pill-ghost">Hear our sound</Link>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-foreground/70">
              <div className="flex -space-x-2">
                {[leader, group, hero].map((s,i)=>(<img key={i} src={s} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground"><Star className="h-3.5 w-3.5 fill-primary text-primary" /><Star className="h-3.5 w-3.5 fill-primary text-primary" /><Star className="h-3.5 w-3.5 fill-primary text-primary" /><Star className="h-3.5 w-3.5 fill-primary text-primary" /><Star className="h-3.5 w-3.5 fill-primary text-primary" /> <span className="ml-1 font-semibold">500+ events delivered</span></div>
                <div className="text-xs">Trusted by couples, churches & corporates</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glow-gold">
              <img src={hero} alt="FineTune Music live" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 info-card info-lilac max-w-[200px] hidden sm:block">
              <div className="text-display text-3xl font-bold">10+</div>
              <div className="text-xs text-foreground/70 mt-1">years on stage across Nigeria</div>
            </div>
            <div className="absolute -top-5 -right-5 info-card info-green max-w-[180px] hidden sm:block">
              <Heart className="h-5 w-5" />
              <div className="text-display text-lg font-bold mt-2">Worship · Wedding · Stage</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="grid sm:grid-cols-3 gap-5">
        <div className="info-card info-blue">
          <div className="text-display text-4xl font-bold">10+ <span className="text-foreground/60 text-xl font-normal">yrs</span></div>
          <div className="mt-3 text-sm text-foreground/70">On stage across Nigeria since 2015</div>
        </div>
        <div className="info-card info-green">
          <div className="text-display text-4xl font-bold">500+ <span className="text-foreground/60 text-xl font-normal">events</span></div>
          <div className="mt-3 text-sm text-foreground/70">Weddings, concerts, ceremonies, services</div>
        </div>
        <div className="info-card info-peach">
          <div className="text-display text-4xl font-bold">20+ <span className="text-foreground/60 text-xl font-normal">artists</span></div>
          <div className="mt-3 text-sm text-foreground/70">Trained through our school & studio</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="rounded-full border border-border overflow-hidden py-4 bg-card">
        <div className="marquee whitespace-nowrap flex gap-12 text-xl text-display text-muted-foreground">
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

      {/* SERVICES — alternating image + soft card, PiggyVest style */}
      <section className="section-soft section-blue">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-mono">Entertainment</span>
            <h2 className="mt-5 text-mega text-4xl sm:text-5xl lg:text-6xl">Live music, <br/>built for every occasion.</h2>
            <p className="mt-5 text-foreground/75 max-w-lg">Weddings, concerts, religious services, naming ceremonies, burials, street jamz and corporate events — our band brings energy and excellence to every stage.</p>
            <ul className="mt-7 space-y-3">
              {["Weddings & ceremonies","Religious services & worship","Street & live concerts","Corporate & private events"].map(t=>(
                <li key={t} className="flex items-center gap-2.5 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Link to="/book" className="mt-8 pill pill-primary inline-flex">Book us now <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden">
            <img src={group} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-soft section-green">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-square rounded-[2rem] overflow-hidden">
            <img src={leader} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="label-mono">Education</span>
            <h2 className="mt-5 text-mega text-4xl sm:text-5xl lg:text-6xl">A school <br/>for tomorrow's voices.</h2>
            <p className="mt-5 text-foreground/75 max-w-lg">The FineTune School of Music & School of Instrumentalists raises disciplined, gifted artists — from voice technique to stage performance.</p>
            <ul className="mt-7 space-y-3">
              {["Voice training","Instrumentation","Stage performance","Artist development"].map(t=>(
                <li key={t} className="flex items-center gap-2.5 text-sm"><GraduationCap className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Link to="/services" className="mt-8 pill pill-ghost inline-flex">Explore programs <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-soft section-peach">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-mono">Promotion · FT Studio</span>
            <h2 className="mt-5 text-mega text-4xl sm:text-5xl lg:text-6xl">Studio-grade <br/>sound, on tape.</h2>
            <p className="mt-5 text-foreground/75 max-w-lg">From recording to artist visibility and distribution — our fully equipped FT Studio is built for gospel and contemporary music excellence.</p>
            <ul className="mt-7 space-y-3">
              {["Album production","Artist visibility","Distribution & promotion"].map(t=>(
                <li key={t} className="flex items-center gap-2.5 text-sm"><Music2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Link to="/music" className="mt-8 pill pill-ghost inline-flex">Listen to our work <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden">
            <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* MUSIC PREVIEW */}
      <section className="section-soft section-lilac">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="label-mono">Live & Studio</span>
            <h2 className="mt-4 text-mega text-4xl sm:text-5xl lg:text-6xl">Hear the band.</h2>
          </div>
          <Link to="/music" className="pill pill-ghost">All tracks <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-soft section-blue">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img src={leader} alt="Banjo Henry" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div>
            <span className="label-mono">Our Story</span>
            <h2 className="mt-5 text-mega text-4xl sm:text-5xl lg:text-6xl">Birthed in Lagos. Built for the world.</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              FineTune Music was birthed by the inspiration of God Almighty in 2015 by Banjo Henry in Lagos — first as <em>Dexterity Music</em>, then pinned as <strong>FineTune Music</strong>. A contemporary repertoire institution, controlled and induced with professionalism nurtured by experience.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Registered with the Corporate Affairs Commission as <strong>FineTune Music World and Educational Consult</strong> (RC 3558250) since 25th January 2022.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-card border border-border px-4 py-3">
              <img src={leader} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">Banjo Henry — HenriHope</div>
                <div className="text-xs text-muted-foreground">Founder & Band Leader</div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about" className="pill pill-ghost">Read the full story <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-soft">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="label-mono">Gallery</span>
            <h2 className="mt-4 text-mega text-4xl sm:text-5xl lg:text-6xl">On stage.</h2>
          </div>
          <Link to="/gallery" className="pill pill-ghost">Full gallery <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[hero, leader, group, hero].map((img,i) => (
            <div key={i} className={`relative overflow-hidden rounded-[1.75rem] ${i===0?'col-span-2 row-span-2 aspect-square':'aspect-square'}`}>
              <img src={img} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-soft section-gold text-center">
        <span className="label-mono inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> Booking</span>
        <h2 className="mt-5 text-mega text-4xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto">Ready to make your event unforgettable?</h2>
        <p className="mt-5 text-foreground/75 max-w-xl mx-auto">Tell us about your event. We respond within 24 hours.</p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center">
          <Link to="/book" className="pill pill-primary">Book the band <ArrowRight className="h-4 w-4" /></Link>
          <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="pill pill-ghost">Chat on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
