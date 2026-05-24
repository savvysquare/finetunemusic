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
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-dashed border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="FineTune Music" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-display font-semibold text-[17px] tracking-tight">FineTune Music</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="px-3 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/bookings" className="hidden sm:inline text-[13.5px] text-muted-foreground hover:text-foreground">Login</Link>
          <Link to="/book" className="hidden sm:inline-flex pill pill-primary !py-2 !px-4 !text-[13.5px]">
            Book the band
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-dashed border-border px-4 py-3 flex flex-col gap-1 bg-background">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/book" onClick={() => setOpen(false)} className="mt-2 pill pill-primary justify-center">Book the band</Link>
        </div>
      )}
    </header>
  );
}
