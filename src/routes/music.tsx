import { createFileRoute } from "@tanstack/react-router";
import { TrackCard } from "@/components/track-card";
import { TRACKS } from "@/lib/tracks";

export const Route = createFileRoute("/music")({
  head: () => ({ meta: [{ title: "Music — FineTune Music" }, { name: "description", content: "Listen to live performances and studio recordings from FineTune Music." }] }),
  component: Music,
});

function Music() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Listen</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Our sound</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Curated previews from live concerts and studio sessions.</p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRACKS.map((t,i) => <TrackCard key={i} track={t} index={i} />)}
      </div>
    </div>
  );
}
