import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="text-display font-semibold text-lg">FineTune Music</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Professionalism nurtured by experience to edify your music mind. Est. 2015 by Banjo Henry (HenriHope).</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/music" className="hover:text-foreground">Music</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-foreground">Book Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>+234 811 358 1125</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>WhatsApp: +234 814 973 2788</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>musicismylife_h@yahoo.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /><span>27 College Road, Ifako-Ijaye, Ogba, Lagos</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://www.facebook.com/Momore01" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2"><Facebook className="h-4 w-4" /> Henri Hope</a></li>
            <li><a href="https://instagram.com/iam_finetunemusic" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> @iam_finetunemusic</a></li>
            <li><a href="https://tiktok.com/@finetunemusicofficial" target="_blank" rel="noreferrer" className="hover:text-foreground">TikTok: @finetunemusicofficial</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dashed border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FineTune Music World & Educational Consult. RC 3558250. #FineTuneMusic #HenriHope
      </div>
    </footer>
  );
}
