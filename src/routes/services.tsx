import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Mic2, Music2, Users, Radio, MapPin, Heart, Church } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — FineTune Music" }, { name: "description", content: "Live band for weddings, concerts, religious services, naming ceremonies, burials, outreach. Music school, instrumentation training, and studio production." }] }),
  component: Services,
});

const groups = [
  { title: "Education", icon: GraduationCap, items: [
    { icon: Mic2, title: "School of Music", desc: "Voice training, genre mastery, performance, healthy living for artists. Practical assessments through ministrations, concerts, and studio sessions." },
    { icon: Music2, title: "School of Instrumentalists", desc: "Drums, keys, bass, and more. We train and raise instrumentalists for every kind of stage and synergic playing with any artist." },
    { icon: Users, title: "Campus Invasion", desc: "Partnership with campus fellowships to schedule live concerts featuring our team and institutional artists." },
  ]},
  { title: "Entertainment", icon: Mic2, items: [
    { icon: Heart, title: "Weddings & Ceremonies", desc: "Full live band coverage for marriages, naming ceremonies, house warmings, anniversaries, and burials." },
    { icon: Church, title: "Religious Services", desc: "Praise teams, guest ministers, conventions, retreats, praise nights and praise concerts." },
    { icon: Radio, title: "Street Jamz", desc: "Outdoor live concerts twice a year — secular and praise-and-worship formats designed to gather and bless communities." },
    { icon: MapPin, title: "Rural Invasion", desc: "Annual missions tour to rural communities — using music to illuminate, uplift, and reach the unreached." },
  ]},
  { title: "Promotion", icon: Music2, items: [
    { icon: Music2, title: "FT Studio", desc: "A fully equipped recording studio for album production, single releases, and artist development." },
    { icon: Radio, title: "Artist Promotion", desc: "Partnerships across the right quarters to give gospel artists the visibility their gift deserves." },
  ]},
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">Services</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Everything music. <span className="text-gradient-gold">All in one place.</span></h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">From the stage to the studio to the classroom — a complete music ecosystem built on professionalism and experience.</p>

      <div className="mt-16 space-y-20">
        {groups.map(g => (
          <div key={g.title}>
            <div className="flex items-center gap-3 mb-8">
              <g.icon className="h-7 w-7 text-primary" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold">{g.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map(it => (
                <div key={it.title} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/60 transition-colors">
                  <it.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-background p-10 text-center">
        <h3 className="font-display text-3xl sm:text-4xl font-bold">Let's create something unforgettable.</h3>
        <p className="mt-3 text-muted-foreground">Custom packages available for every kind of event.</p>
        <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-gold">Request a quote</Link>
      </div>
    </div>
  );
}
