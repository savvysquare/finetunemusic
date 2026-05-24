import { Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export type Track = { title: string; tag: string; src: string; cover: string };

export function TrackCard({ track, index }: { track: Track; index: number }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const a = ref.current; if (!a) return;
    const onTime = () => setProgress((a.currentTime / (a.duration || 1)) * 100);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => { a.removeEventListener("timeupdate", onTime); a.removeEventListener("ended", onEnd); };
  }, []);

  const toggle = () => {
    const a = ref.current; if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else {
      document.querySelectorAll<HTMLAudioElement>("audio[data-track]").forEach(o => { if (o !== a) o.pause(); });
      a.play(); setPlaying(true);
    }
  };

  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/60 transition-all">
      <div className="relative aspect-square overflow-hidden">
        <img src={track.cover} alt={track.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button onClick={toggle} aria-label={playing ? "Pause" : "Play"} className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-gold hover:scale-110 transition-transform">
          {playing ? <Pause className="h-6 w-6" fill="currentColor" /> : <Play className="h-6 w-6 ml-0.5" fill="currentColor" />}
        </button>
        {playing && (
          <div className="absolute bottom-5 left-4 flex items-end gap-0.5 h-6">
            {[0,1,2,3].map(i => (
              <span key={i} className="w-1 bg-primary eq-bar" style={{ height: "100%", animationDelay: `${i*0.15}s` }} />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wider text-primary mb-1">Track {String(index+1).padStart(2,'0')} · {track.tag}</div>
        <div className="font-display font-semibold">{track.title}</div>
        <div className="mt-3 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <audio ref={ref} src={track.src} preload="none" data-track />
    </div>
  );
}
