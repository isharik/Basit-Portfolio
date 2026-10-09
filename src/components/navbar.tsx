"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); }), { rootMargin: "-35% 0px -55% 0px" });
    nav.forEach(item => { const el = document.querySelector(item.href); if (el) observer.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  return <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
    <nav className="nav container" aria-label="Main navigation">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>BB<span>.</span></a>
      <div className="nav-links" aria-label="Desktop navigation">{nav.map(item => <a key={item.href} className={active === item.href ? "active" : ""} href={item.href}>{item.label}</a>)}</div>
      <div className="nav-actions"><ThemeToggle /><button className="icon-button menu-button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </nav>
    {open && <div className="mobile-menu"><div className="container">{nav.map(item => <a key={item.href} href={item.href} className={active === item.href ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</a>)}</div></div>}
  </header>;
}
