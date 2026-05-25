import { createFileRoute } from "@tanstack/react-router";
import { TrackCard } from "@/components/track-card";
import { TRACKS } from "@/lib/tracks";
import g2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/music")({
  head: () => ({ meta: [{ title: "Music — FineTune Music" }, { name: "description", content: "Listen to live performances and studio recordings from FineTune Music." }] }),
  component: Music,
});

function Music() {
  return (
    <div>
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={g2} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-end pb-16">
          <div className="label-mono text-foreground/70 mb-6">Listen</div>
          <h1 className="font-display font-extrabold uppercase tracking-tighter text-[44px] sm:text-[80px] lg:text-[112px] leading-[0.88]">
            Our <span className="text-gold italic font-light">sound.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-20">
        <p className="max-w-xl text-foreground/70 text-lg mb-12">Curated previews from live concerts and studio sessions.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
        </div>
      </section>
    </div>
  );
}
