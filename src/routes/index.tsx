import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Heart, Church, Radio, GraduationCap, Music2, Mic2 } from "lucide-react";
import hero from "@/assets/performance-1.jpg";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FineTune Music — Live Band & Music Organization" },
      { name: "description", content: "Book FineTune Music — a contemporary repertoire band for concerts, weddings, ceremonies, outreach, and live entertainment across Nigeria." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Heart, title: "Weddings & Ceremonies", desc: "Full live band coverage for marriages, naming ceremonies, anniversaries, house warmings and burials.", tag: "Live Band" },
  { icon: Church, title: "Religious Services", desc: "Praise teams, guest ministers, conventions, retreats, praise nights and concerts.", tag: "Ministration" },
  { icon: Radio, title: "Street Jamz", desc: "Outdoor live concerts twice a year — secular and praise-and-worship formats for the community.", tag: "Outreach" },
  { icon: GraduationCap, title: "School of Music", desc: "Voice training, instrumentation, performance, and artist development under seasoned tutors.", tag: "Education" },
  { icon: Music2, title: "FT Studio", desc: "A fully equipped recording studio for albums, singles, and end-to-end artist production.", tag: "Production" },
];

const TRACKLIST = [
  { n: "01", t: "Mega Family Live", d: "05:12" },
  { n: "02", t: "Worship Atmosphere", d: "04:38" },
  { n: "03", t: "Street Jamz", d: "03:55" },
  { n: "04", t: "All for Your Glory", d: "06:21" },
  { n: "05", t: "Aso Ebi (Wedding Cut)", d: "04:02" },
  { n: "06", t: "Highlife Interlude", d: "03:18" },
];

const ALBUMS = [
  { title: "Mega Family Live", year: "2024", cover: "/images/cover1.jpg" },
  { title: "Worship Sessions", year: "2023", cover: "/images/cover2.jpg" },
  { title: "Street Jamz", year: "2022", cover: "/images/cover3.jpg" },
];

const VIDEOS = [
  { src: "/videos/clip1.mp4", poster: "/posters/clip1.jpg" },
  { src: "/videos/clip2.mp4", poster: "/posters/clip2.jpg" },
  { src: "/videos/clip3.mp4", poster: "/posters/clip3.jpg" },
  { src: "/videos/clip4.mp4", poster: "/posters/clip4.jpg" },
];

function Home() {
  return (
    <div>
      {/* CINEMATIC HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="FineTune Music live" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16 sm:pb-24">
          <div className="label-mono text-foreground/70 mb-6">Listen to our latest album</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[56px] sm:text-[96px] lg:text-[132px] leading-[0.88] max-w-5xl">
            We play <span className="text-gold italic font-light">loud,</span><br/>
            really <span className="text-gold italic font-light">live.</span>
          </h1>

          {/* floating album card */}
          <div className="mt-12 lg:absolute lg:right-10 lg:bottom-24 lg:mt-0">
            <div className="flex items-center gap-5 bg-card/90 backdrop-blur-md border border-border rounded-2xl p-4 pr-6 max-w-md shadow-2xl">
              <div className="relative h-20 w-20 shrink-0 rounded-xl overflow-hidden">
                <img src="/images/cover1.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="label-mono text-[0.6rem] mb-1">Now Streaming</div>
                <div className="text-display text-lg truncate">Mega Family Live</div>
                <div className="text-xs text-muted-foreground">FineTune Music · 2024</div>
              </div>
              <Link to="/music" aria-label="Play" className="h-11 w-11 shrink-0 rounded-full bg-gold text-background flex items-center justify-center hover:scale-110 transition">
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={leader} alt="Banjo Henry" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div>
            <div className="label-mono mb-5">About FineTune</div>
            <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
              We Roar Loud, <span className="text-gold italic font-light">really loud.</span>
            </h2>
            <p className="mt-8 text-foreground/75 text-lg leading-relaxed">
              <strong className="text-foreground">FineTune Music</strong> is a contemporary repertoire band birthed in Lagos in 2015 by Banjo Henry — a movement of musicians built on professionalism, hunger, and a relentless love for sound. We play weddings, concerts, worship services, and street jamz across Nigeria.
            </p>
            <p className="mt-4 text-foreground/65 leading-relaxed">
              Registered with the Corporate Affairs Commission as <strong className="text-foreground">FineTune Music World and Educational Consult</strong> (RC 3558250) — and home to FineTune School of Instrumentalists.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="font-display italic text-3xl text-gold">~ HenriHope</div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Founder · Band Leader</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (replaces tour) */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="label-mono mb-4">What we do</div>
              <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
                Our <span className="text-gold italic font-light">services.</span>
              </h2>
            </div>
            <Link to="/services" className="pill pill-ghost">All services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {SERVICES.map((s) => (
              <Link key={s.title} to="/book" className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[80px_1fr_1fr_auto] gap-6 items-center py-7 group hover:bg-card/60 transition px-2">
                <div className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight">{s.title}</div>
                <div className="hidden sm:block text-sm text-muted-foreground max-w-md">{s.desc}</div>
                <div className="text-xs uppercase tracking-widest text-gold whitespace-nowrap flex items-center gap-2">
                  {s.tag} <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKLIST + ALBUM ART */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl group">
          <img src="/images/cover1.jpg" alt="Mega Family Live" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="label-mono text-foreground/80 mb-2">Featured Album</div>
            <div className="font-display text-3xl font-extrabold uppercase">Mega Family Live</div>
            <div className="text-sm text-foreground/70 mt-1">FineTune Music · 2024 · 12 Tracks</div>
          </div>
        </div>
        <div>
          <div className="label-mono mb-4">Album · Tracklist</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-5xl leading-[0.95] mb-10">
            Mega Family <span className="text-gold italic font-light">live.</span>
          </h2>
          <ul className="divide-y divide-border border-y border-border">
            {TRACKLIST.map((tr) => (
              <li key={tr.n} className="grid grid-cols-[40px_1fr_auto_auto] items-center gap-4 py-4 group">
                <span className="font-mono text-xs text-muted-foreground">{tr.n}</span>
                <span className="font-display text-base sm:text-lg font-semibold group-hover:text-gold transition">{tr.t}</span>
                <span className="font-mono text-xs text-muted-foreground">{tr.d}</span>
                <button className="h-8 w-8 rounded-full bg-border/40 group-hover:bg-gold group-hover:text-background flex items-center justify-center transition">
                  <Play className="h-3.5 w-3.5 ml-0.5" fill="currentColor" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ALBUMS GRID */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label-mono justify-center mb-4">Latest Albums</div>
            <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
              Check another <span className="text-gold italic font-light">albums.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">Studio recordings and live cuts captured across years of ministry and performance.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {ALBUMS.map((a) => (
              <div key={a.title} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img src={a.cover} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-gold text-background flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition">
                      <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xl font-bold uppercase">{a.title}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Stream on · Spotify · Apple · YouTube</div>
                  </div>
                  <div className="font-mono text-xs text-gold">{a.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 py-24 text-center">
          <div className="font-display text-2xl sm:text-4xl leading-snug italic text-foreground/90">
            “Beautiful music is the art of the prophets that can calm the agitations of the soul — one of the most magnificent and delightful presents God has given us.”
          </div>
          <div className="mt-8 label-mono justify-center">Banjo Henry · HenriHope</div>
        </div>
      </section>

      {/* MUSIC VIDEOS — no labels */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-mono mb-4">Watch</div>
            <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
              Music <span className="text-gold italic font-light">videos.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Live cuts, behind the scenes, and the energy of FineTune on stage.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {VIDEOS.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </div>
      </section>

      {/* GALLERY — fresh photos, no video posters, no repeats */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="label-mono mb-4">Our Gallery</div>
              <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
                Captured moments <span className="text-gold italic font-light">on stage.</span>
              </h2>
            </div>
            <Link to="/gallery" className="pill pill-ghost">Full gallery <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid grid-cols-12 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
            <GalleryTile src={g1} alt="Stage silhouette" className="col-span-12 sm:col-span-7 row-span-3" />
            <GalleryTile src={leader} alt="HenriHope frontman" className="col-span-6 sm:col-span-5 row-span-2" />
            <GalleryTile src={g2} alt="Drummer close up" className="col-span-6 sm:col-span-5 row-span-1" />
            <GalleryTile src={g3} alt="Crowd worship" className="col-span-12 sm:col-span-8 row-span-2" />
            <GalleryTile src={g4} alt="Saxophonist" className="col-span-6 sm:col-span-4 row-span-2" />
            <GalleryTile src={g5} alt="Vocalist in worship" className="col-span-6 sm:col-span-4 row-span-2" />
            <GalleryTile src={group} alt="The FineTune team" className="col-span-6 sm:col-span-4 row-span-2" />
            <GalleryTile src={g6} alt="Studio mic" className="col-span-12 sm:col-span-4 row-span-2" />
          </div>
        </div>
      </section>

      {/* CTA — NEW MUSIC ON THE WAY */}
      <section className="relative overflow-hidden">
        <img src={g3} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 py-32 text-center">
          <div className="label-mono justify-center mb-6">Booking 2025</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-7xl lg:text-8xl leading-[0.9]">
            New music <span className="text-gold italic font-light">is on<br/>the way.</span>
          </h2>
          <p className="mt-8 text-foreground/70 text-lg max-w-xl mx-auto">Book FineTune for your wedding, concert, worship service, or street jam. We respond within 24 hours.</p>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Link to="/book" className="pill pill-primary">Book the band <ArrowUpRight className="h-4 w-4" /></Link>
            <a href="https://wa.me/2348149732788" target="_blank" rel="noreferrer" className="pill pill-ghost">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function VideoCard({ src, poster }: { src: string; poster: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
      <video
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        onMouseEnter={(e) => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
        onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition" />
      <div className="absolute bottom-5 right-5">
        <div className="h-12 w-12 shrink-0 rounded-full bg-gold text-background flex items-center justify-center group-hover:scale-110 transition shadow-xl">
          <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

function GalleryTile({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl group ${className ?? ""}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">{alt}</figcaption>
    </figure>
  );
}
