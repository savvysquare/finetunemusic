import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/performance-1.jpg";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — FineTune Music" }, { name: "description", content: "FineTune Music live performances, studio sessions and band photography." }] }),
  component: Gallery,
});

// Unique frames only — no repeats, no video posters
const TILES: { src: string; alt: string; span: string }[] = [
  { src: hero,   alt: "Mega Family Live concert",   span: "col-span-12 sm:col-span-8 row-span-3" },
  { src: g5,     alt: "Vocalist in worship",        span: "col-span-6  sm:col-span-4 row-span-3" },
  { src: g1,     alt: "Stage silhouette",           span: "col-span-6  sm:col-span-5 row-span-2" },
  { src: leader, alt: "HenriHope on stage",         span: "col-span-6  sm:col-span-3 row-span-2" },
  { src: g4,     alt: "Saxophonist in the spotlight", span: "col-span-12 sm:col-span-4 row-span-2" },
  { src: g3,     alt: "Hands raised at worship",    span: "col-span-12 sm:col-span-8 row-span-2" },
  { src: group,  alt: "The FineTune team",          span: "col-span-6  sm:col-span-4 row-span-2" },
  { src: g2,     alt: "Drummer hands close-up",     span: "col-span-6  sm:col-span-4 row-span-2" },
  { src: g6,     alt: "Studio session",             span: "col-span-12 sm:col-span-4 row-span-2" },
];

function Gallery() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 sm:px-10 pt-24 pb-12">
        <div className="label-mono mb-5">Our Gallery</div>
        <h1 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-7xl leading-[0.9] max-w-4xl">
          Moments <span className="text-gold italic font-light">in motion.</span>
        </h1>
        <p className="mt-6 max-w-xl text-foreground/70 text-lg">From stage lights to studio sessions — a visual diary of FineTune Music.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10 pb-24">
        <div className="grid grid-cols-12 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {TILES.map((t) => (
            <figure key={t.src + t.alt} className={`relative overflow-hidden rounded-2xl group ${t.span}`}>
              <img src={t.src} alt={t.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-widest text-foreground/80 opacity-0 group-hover:opacity-100 transition">{t.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 py-24 text-center">
          <div className="label-mono justify-center mb-5">Booking 2025</div>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-4xl sm:text-6xl leading-[0.95]">
            Want us at your <span className="text-gold italic font-light">next event?</span>
          </h2>
          <div className="mt-10"><Link to="/book" className="pill pill-primary">Book the band <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </div>
  );
}
