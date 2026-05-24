import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-primary/40" />
            <span className="font-display font-bold text-lg">FineTune<span className="text-primary">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Professionalism nurtured by experience to edify your music mind. Est. 2015 by Banjo Henry (HenriHope).</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/music" className="hover:text-primary">Music</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-primary">Book Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +234 811 358 1125</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> WhatsApp: +234 814 973 2788</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> musicismylife_h@yahoo.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> 27 College Road, Ifako-Ijaye, Ogba, Lagos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://www.facebook.com/Momore01" target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-2"><Facebook className="h-4 w-4" /> Henri Hope</a></li>
            <li><a href="https://instagram.com/iam_finetunemusic" target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> @iam_finetunemusic</a></li>
            <li><a href="https://tiktok.com/@finetunemusicofficial" target="_blank" rel="noreferrer" className="hover:text-primary">TikTok: @finetunemusicofficial</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FineTune Music World & Educational Consult. RC 3558250. #FineTuneMusic #HenriHope
      </div>
    </footer>
  );
}
