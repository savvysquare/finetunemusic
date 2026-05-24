import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/performance-1.jpg";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — FineTune Music" }, { name: "description", content: "FineTune Music live performances and band photography." }] }),
  component: Gallery,
});

const images = [
  { src: hero, label: "Mega Family Live" },
  { src: leader, label: "HenriHope on stage" },
  { src: group, label: "The FineTune team" },
  { src: hero, label: "Live ministration" },
  { src: leader, label: "Frontman energy" },
  { src: group, label: "Behind the curtain" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Gallery</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Moments in motion</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">From stage lights to studio sessions — a visual diary of FineTune.</p>
      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((im,i) => (
          <figure key={i} className="mb-4 break-inside-avoid relative overflow-hidden rounded-2xl group">
            <img src={im.src} alt={im.label} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm">{im.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
