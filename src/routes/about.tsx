import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";
import g1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — FineTune Music" }, { name: "description", content: "FineTune Music is a CAC-registered contemporary music band and educational consult founded by Banjo Henry in Lagos, Nigeria." }] }),
  component: About,
});

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={g1} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16">
          <div className="label-mono text-foreground/70 mb-6">About FineTune</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[44px] sm:text-[80px] lg:text-[112px] leading-[0.88] max-w-5xl">
            <span className="text-gold italic font-light">Nurtured by<br/>experience.</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <img src={group} alt="The FineTune team" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div>
          <div className="label-mono mb-5">Our Story</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-5xl leading-[0.95]">
            Birthed in 2015, <span className="text-gold italic font-light">built for<br/>generations.</span>
          </h2>
          <p className="mt-8 text-foreground/75 text-lg leading-relaxed">
            FINETUNE is a contemporary music band and entertainment organization dedicated to meeting the demands of the present musical needs — edifying the music mind, promoting musicians, and raising the next generation of artists.
          </p>
          <p className="mt-4 text-foreground/65 leading-relaxed">
            Birthed by the inspiration of God Almighty in 2015 by <strong className="text-foreground">Banjo Henry (HenriHope)</strong> in Lagos. Initially named "Dexterity Music", it was finally pinned as <strong className="text-foreground">FineTune Music</strong> — a Contemporary Repertoire institution controlled and induced with professionalism nurtured by experience.
          </p>
        </div>
      </section>

      {/* VALUES — two columns */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 grid md:grid-cols-2 gap-10">
          <div>
            <div className="label-mono mb-4">Motto</div>
            <div className="font-display text-3xl sm:text-4xl italic text-foreground/90 leading-snug">
              "Professionalism nurtured by experience to edify your music mind."
            </div>
          </div>
          <div>
            <div className="label-mono mb-4">Thematic Areas</div>
            <ul className="divide-y divide-border border-y border-border">
              {["Education","Entertainment","Promotion"].map((t,i) => (
                <li key={t} className="flex items-center justify-between py-5">
                  <span className="font-display text-xl sm:text-2xl uppercase font-semibold">{t}</span>
                  <span className="font-mono text-xs text-gold">0{i+1}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-28">
        <div className="label-mono mb-4">Goals & Objectives</div>
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95] mb-12">
          Why we <span className="text-gold italic font-light">exist.</span>
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {[
            "Build an organization that gave themselves to the ministry of music more than a passion.",
            "Produce up-to-date quality music.",
            "Provide a channel through which music ministers pass their messages to the public.",
            "Raise a team of talented music ministers who meet the needs of any audience.",
            "Evangelize through music.",
            "Entertain at events: weddings, naming ceremonies, burials, house warmings, and more.",
          ].map((g,i) => (
            <li key={i} className="grid grid-cols-[60px_1fr] gap-6 py-6 group">
              <span className="font-mono text-sm text-gold">0{i+1}</span>
              <span className="font-display text-lg sm:text-xl text-foreground/85 group-hover:text-foreground transition">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FOUNDER */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={leader} alt="Banjo Henry" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div>
            <div className="label-mono mb-5">Founder</div>
            <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
              Banjo <span className="text-gold italic font-light">Henry.</span>
            </h2>
            <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">aka HenriHope · Band Leader · Vocalist</p>
            <p className="mt-8 text-foreground/75 text-lg leading-relaxed">
              Founded FineTune in Lagos in 2015 with a vision to give talented musicians a home — to mentor, build, and platform them on the path of their entertaining pursuit.
            </p>
          </div>
        </div>
      </section>

      {/* CERT + CTA */}
      <section className="mx-auto max-w-4xl px-6 sm:px-10 py-28 text-center">
        <div className="label-mono justify-center mb-5">Certification</div>
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-3xl sm:text-5xl leading-[0.95]">
          Officially <span className="text-gold italic font-light">registered.</span>
        </h2>
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
          Registered with the Corporate Affairs Commission as <strong className="text-foreground">FineTune Music World and Educational Consult</strong>, business name registration no. <strong className="text-foreground">3558250</strong>, dated 25th January 2022.
        </p>
        <div className="mt-10"><Link to="/book" className="pill pill-primary">Book the band <ArrowUpRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
}
