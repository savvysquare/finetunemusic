import { createFileRoute } from "@tanstack/react-router";
import leader from "@/assets/leader.jpg";
import group from "@/assets/group.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — FineTune Music" }, { name: "description", content: "FineTune Music is a CAC-registered contemporary music band and educational consult founded by Banjo Henry in Lagos, Nigeria." }] }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-widest text-primary mb-3">About</div>
      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">Professionalism nurtured by experience.</h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        FINETUNE is a contemporary music band and entertainment organization dedicated to meeting the demands of the present musical needs — edifying the music mind, promoting musicians, and raising the next generation of artists.
      </p>

      <div className="my-12 aspect-[16/9] rounded-3xl overflow-hidden">
        <img src={group} alt="The FineTune team" className="h-full w-full object-cover" />
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p>Music is one important aspect of any program or occasion — it refreshes the soul, stirs the atmosphere, and is recorded as one of the vehicles that conveys man from the world into the realm of immortality and satisfaction.</p>
        <p>FineTune Music Organization was birthed by the inspiration of God Almighty in 2015 by <strong className="text-foreground">Banjo Henry (HenriHope)</strong> in Lagos. Initially named "Dexterity Music", it was finally pinned as <strong className="text-foreground">FineTune Music</strong>. It is a Contemporary Repertoire orientated institution, controlled and induced with professionalism nurtured by experience.</p>
      </div>

      <div className="my-16 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-2xl font-bold">Motto</h3>
          <p className="mt-3 text-muted-foreground italic">"Professionalism nurtured by experience to edify your music mind."</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-2xl font-bold">Thematic areas</h3>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>1. Education</li><li>2. Entertainment</li><li>3. Promotion</li>
          </ul>
        </div>
      </div>

      <h2 className="font-display text-3xl font-bold mt-12">Goals & Objectives</h2>
      <ul className="mt-6 space-y-3 text-muted-foreground">
        <li>— To build an organization that gave themselves to the ministry of music more than just a passion.</li>
        <li>— Producing up-to-date quality music.</li>
        <li>— Providing a channel through which music ministers could pass their messages to the public.</li>
        <li>— Raising a team of talented music ministers who could meet the needs of the audience.</li>
        <li>— Evangelizing through music.</li>
        <li>— Entertaining at events: house warming, burial, marriage, naming ceremony, and more.</li>
      </ul>

      <div className="mt-16 grid md:grid-cols-[1fr_2fr] gap-8 items-center rounded-3xl border border-border/60 bg-card p-8">
        <img src={leader} alt="Banjo Henry" className="rounded-2xl aspect-square object-cover w-full" />
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-2">Founder</div>
          <h3 className="font-display text-3xl font-bold">Banjo Henry</h3>
          <p className="text-muted-foreground">aka HenriHope · Band Leader, Vocalist</p>
          <p className="mt-4 text-muted-foreground">Founded FineTune in Lagos in 2015 with a vision to give talented musicians a home — to mentor, build, and platform them on the path of their entertaining pursuit.</p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-8">
        <div className="text-xs uppercase tracking-widest text-primary mb-2">Certification</div>
        <h3 className="font-display text-2xl font-bold">Officially registered</h3>
        <p className="mt-3 text-muted-foreground">Registered with the Corporate Affairs Commission as <strong className="text-foreground">FineTune Music World and Educational Consult</strong>, business name registration no. <strong className="text-foreground">3558250</strong>, dated 25th January 2022. General nature of business: Music Production and Educational Services.</p>
      </div>
    </div>
  );
}
