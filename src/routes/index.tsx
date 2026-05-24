import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Pause, Heart, Church, Radio, GraduationCap, Music2, Mic2, Users, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import hero from "@/assets/leader.jpg";
import leader from "@/assets/performance-1.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FineTune Music — Live Band & Music Organization" },
      { name: "description", content: "Book FineTune Music — a contemporary repertoire band for concerts, weddings, ceremonies, outreach, and live entertainment across Nigeria." },
    ],
  }),
  component: Home,
});

const SERVICE_STACKS = [
  {
    name: "Education",
    items: [
      { icon: Mic2, title: "School of Music", desc: "Voice training, genre mastery, performance, and artist development." },
      { icon: Music2, title: "School of Instrumentalists", desc: "Drums, keys, bass — raising instrumentalists for any stage." },
      { icon: Users, title: "Campus Invasion", desc: "Live concerts with campus fellowships and institutional artists." },
    ],
  },
  {
    name: "Entertainment",
    items: [
      { icon: Heart, title: "Weddings & Ceremonies", desc: "Full live band for marriages, naming ceremonies, anniversaries, burials." },
      { icon: Church, title: "Religious Services", desc: "Praise teams, guest ministers, conventions, retreats, praise nights." },
      { icon: Radio, title: "Street Jamz", desc: "Outdoor live concerts — secular and praise formats for communities." },
      { icon: MapPin, title: "Rural Invasion", desc: "Annual missions tour — music to uplift and reach the unreached." },
    ],
  },
  {
    name: "Promotion",
    items: [
      { icon: Music2, title: "FT Studio", desc: "Fully equipped studio for album production and artist development." },
      { icon: Radio, title: "Artist Promotion", desc: "Partnerships giving gospel artists the visibility their gift deserves." },
      { icon: GraduationCap, title: "Talent Development", desc: "End-to-end nurturing from raw talent to stage-ready artist." },
    ],
  },
];

const TRACKLIST = Array.from({ length: 7 }, (_, i) => ({
  n: String(i + 1).padStart(2, "0"),
  t: `Track ${i + 1}`,
  src: `/audio/track${i + 1}.mp3`,
}));

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
        <img src={hero} alt="FineTune Music live" className="absolute inset-0 h-full w-full object-cover scale-105 object-[center_72%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16 sm:pb-24">
          <div className="label-mono text-foreground/70 mb-6">Listen to our latest album</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[48px] sm:text-[80px] lg:text-[112px] leading-[0.88] max-w-5xl">
            We Play <span className="text-gold italic font-light">Live,</span><br className="sm:hidden"/>{" "}
            Really <span className="text-gold italic font-light">Loud</span>
          </h1>

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

      {/* SERVICES — three stacks */}
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

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICE_STACKS.map((stack, idx) => (
              <div key={stack.name} className="relative rounded-3xl border border-border bg-background/40 p-7 flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="font-mono text-xs text-gold">({String(idx + 1).padStart(2, "0")})</div>
                  <div className="label-mono">Stack {idx + 1}</div>
                </div>
                <h3 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-4xl text-gold mb-8">
                  {stack.name}.
                </h3>
                <ul className="divide-y divide-border border-t border-border flex-1">
                  {stack.items.map((it) => (
                    <li key={it.title} className="py-5 flex gap-4 group">
                      <div className="h-10 w-10 shrink-0 rounded-xl border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition">
                        <it.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-semibold uppercase tracking-tight text-base">{it.title}</div>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKLIST + ALBUM ART — playable */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl group">
          <img src="/images/cover1.jpg" alt="Mega Family Live" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="label-mono text-foreground/80 mb-2">Featured Album</div>
            <div className="font-display text-3xl font-extrabold uppercase">Mega Family Live</div>
            <div className="text-sm text-foreground/70 mt-1">FineTune Music · 2024 · 7 Tracks</div>
          </div>
        </div>
        <div>
          <div className="label-mono mb-4">Album · Tracklist</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-5xl leading-[0.95] mb-10">
            Mega Family <span className="text-gold italic font-light">live.</span>
          </h2>
          <Tracklist />
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

      {/* MUSIC VIDEOS */}
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

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
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

function Tracklist() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<Record<number, string>>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    TRACKLIST.forEach((tr, i) => {
      const a = new Audio();
      a.preload = "metadata";
      a.src = tr.src;
      a.addEventListener("loadedmetadata", () => {
        const m = Math.floor(a.duration / 60);
        const s = Math.floor(a.duration % 60).toString().padStart(2, "0");
        setDuration((d) => ({ ...d, [i]: `${m}:${s}` }));
      });
    });
  }, []);

  const toggle = (i: number) => {
    if (activeIdx === i && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setActiveIdx(null);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const a = new Audio(TRACKLIST[i].src);
    audioRef.current = a;
    a.addEventListener("timeupdate", () => {
      setProgress((a.currentTime / (a.duration || 1)) * 100);
    });
    a.addEventListener("ended", () => {
      setActiveIdx(null);
      setProgress(0);
    });
    a.play();
    setActiveIdx(i);
    setProgress(0);
  };

  return (
    <ul className="divide-y divide-border border-y border-border">
      {TRACKLIST.map((tr, i) => {
        const isActive = activeIdx === i;
        return (
          <li key={tr.n} className="relative grid grid-cols-[40px_1fr_auto_auto] items-center gap-4 py-4 group">
            <span className={`font-mono text-xs ${isActive ? "text-gold" : "text-muted-foreground"}`}>{tr.n}</span>
            <span className={`font-display text-base sm:text-lg font-semibold transition ${isActive ? "text-gold" : "group-hover:text-gold"}`}>{tr.t}</span>
            <span className="font-mono text-xs text-muted-foreground">{duration[i] ?? "—:—"}</span>
            <button
              onClick={() => toggle(i)}
              aria-label={isActive ? "Pause" : "Play"}
              className={`h-8 w-8 rounded-full flex items-center justify-center transition ${isActive ? "bg-gold text-background" : "bg-border/40 group-hover:bg-gold group-hover:text-background"}`}
            >
              {isActive ? <Pause className="h-3.5 w-3.5" fill="currentColor" /> : <Play className="h-3.5 w-3.5 ml-0.5" fill="currentColor" />}
            </button>
            {isActive && (
              <div className="absolute bottom-0 left-0 h-px bg-gold transition-all" style={{ width: `${progress}%` }} />
            )}
          </li>
        );
      })}
    </ul>
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
