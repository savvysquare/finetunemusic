import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="FineTune Music" className="h-9 w-9 rounded-full object-cover ring-1 ring-primary/40" />
          <span className="font-display font-bold text-lg tracking-tight">FineTune<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/book" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[var(--gold-glow)] transition-colors">
            Book Now
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1 glass">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/book" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Book Now</Link>
        </div>
      )}
    </header>
  );
}
