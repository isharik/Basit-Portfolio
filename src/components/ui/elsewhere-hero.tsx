"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Volume2, VolumeX, Sun, Moon } from "lucide-react";

type LinkItem = { label: string; href: string };

export interface ElsewhereHeroProps {
  daySrc?: string;
  nightSrc?: string;
  brand?: string;
  links?: LinkItem[];
  navCta?: LinkItem | false;
  headline?: string;
  subline?: string;
  primaryCta?: LinkItem;
  listenLabel?: string;
  listenOffLabel?: string;
  soundHint?: string;
  signature?: { name: string; url: string } | false;
  objectPosition?: string;
  className?: string;
  style?: CSSProperties;
}

const DAY = "https://cdn.21st.dev/assets/mirror/a6/a639af57ee941fdd518c604efb043501ad0e815dcce9f7efba850998bafa3453.mp4";
const NIGHT = "https://cdn.21st.dev/assets/mirror/4b/4badf32b0bc920a2fd1b066182eee89e98d8615f680e01fb19ff62fb56e86872.mp4";

export default function ElsewhereHero({
  daySrc = DAY, nightSrc = NIGHT, brand = "Basit Bashir",
  links = [{ label: "About", href: "#about" }, { label: "Experience", href: "#experience" }, { label: "Selected work", href: "#projects" }],
  navCta = { label: "Get in touch", href: "#contact" },
  headline = "Building practical AI systems.",
  subline = "Data science, retrieval systems, and intelligent applications for information that matters.",
  primaryCta = { label: "Explore the work", href: "#projects" },
  listenLabel = "Listen", listenOffLabel = "Pause sound", soundHint = "Turn on the sound",
  signature = { name: "Basit Bashir", url: "#home" }, objectPosition = "50% 50%", className, style,
}: ElsewhereHeroProps) {
  const dayRef = useRef<HTMLVideoElement>(null);
  const nightRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<{ ctx: AudioContext; master: GainNode; nodes: OscillatorNode[]; timer: number } | null>(null);
  const [night, setNight] = useState(false);
  const [muted, setMuted] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => { const raf = requestAnimationFrame(() => setShown(true)); return () => { cancelAnimationFrame(raf); audioRef.current?.ctx.close(); }; }, []);

  function toggleSound() {
    if (!audioRef.current) {
      const Ctx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx(); const master = ctx.createGain(); master.gain.value = 0.0001; master.connect(ctx.destination);
      const drone = ctx.createOscillator(); drone.type = "sine"; drone.frequency.value = 110; drone.connect(master); drone.start();
      const shimmer = ctx.createOscillator(); shimmer.type = "sine"; shimmer.frequency.value = 110.8; shimmer.connect(master); shimmer.start();
      const timer = window.setInterval(() => { const o = ctx.createOscillator(); const g = ctx.createGain(); o.type = "triangle"; o.frequency.value = 320 + Math.random() * 260; g.gain.setValueAtTime(.0001, ctx.currentTime); g.gain.exponentialRampToValueAtTime(.06, ctx.currentTime + .01); g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .12); o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + .14); }, 900 + Math.random() * 700);
      audioRef.current = { ctx, master, nodes: [drone, shimmer], timer }; master.gain.linearRampToValueAtTime(.16, ctx.currentTime + .5); setMuted(false); return;
    }
    const a = audioRef.current; if (a.ctx.state === "suspended") a.ctx.resume();
    const next = !muted; a.master.gain.linearRampToValueAtTime(next ? .0001 : .16, a.ctx.currentTime + .35); setMuted(next);
  }

  const rise = (delay: number): CSSProperties => ({ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(14px)", transition: `opacity .8s ease ${delay}s, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}s` });
  return <section id="home" className={`elsewhere-hero ${className ?? ""}`} style={style} aria-label={brand}>
    <video ref={dayRef} src={daySrc} autoPlay loop muted playsInline preload="auto" aria-hidden="true" style={{ ...videoStyle, objectPosition, opacity: night ? 0 : 1 }} />
    <video ref={nightRef} src={nightSrc} autoPlay loop muted playsInline preload="auto" aria-hidden="true" style={{ ...videoStyle, objectPosition, opacity: night ? 1 : 0 }} />
    <div className="elsewhere-wash" />
    <header className="elsewhere-nav" style={rise(0)}><a className="elsewhere-brand" href="#home">{brand}</a><nav>{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>{navCta && <a className="elsewhere-pill elsewhere-small" href={navCta.href}>{navCta.label}</a>}</header>
    <div className="elsewhere-copy"><p className="elsewhere-kicker" style={rise(.1)}>DATA SCIENCE · GENERATIVE AI · RAG SYSTEMS</p><h1 style={rise(.18)}>{headline}</h1><p className="elsewhere-sub" style={rise(.28)}>{subline}</p><div className="elsewhere-ctas" style={rise(.38)}><a className="elsewhere-pill elsewhere-primary" href={primaryCta.href}>{primaryCta.label} ↗</a><button className="elsewhere-pill elsewhere-glass" onClick={toggleSound} aria-pressed={!muted}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}{muted ? listenLabel : listenOffLabel}</button></div></div>
    <div className="elsewhere-controls"><button className="elsewhere-icon" onClick={() => setNight(value => !value)} aria-label={night ? "Switch to day" : "Switch to night"}>{night ? <Moon size={17} /> : <Sun size={17} />}</button><button className="elsewhere-icon" onClick={toggleSound} aria-label={muted ? "Unmute ambient sound" : "Mute ambient sound"}>{muted ? <VolumeX size={17} /> : <Volume2 size={17} />}</button>{muted && <span>{soundHint}</span>}</div>
    {signature && <span className="elsewhere-signature">by <a href={signature.url}>{signature.name}</a></span>}
    <style>{styles}</style>
  </section>;
}

const videoStyle: CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 1.2s ease" };
const styles = `.elsewhere-hero{position:relative;isolation:isolate;height:100svh;min-height:620px;overflow:hidden;background:#06130f;color:#f5f3ec;font-family:Inter,system-ui,sans-serif}.elsewhere-hero video{z-index:-2}.elsewhere-wash{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.54),rgba(0,0,0,.18) 42%,rgba(0,0,0,.4));pointer-events:none}.elsewhere-nav{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:clamp(16px,3vh,28px) clamp(20px,4vw,56px)}.elsewhere-brand{text-transform:uppercase;letter-spacing:.28em;font-size:12px;color:#f5f3ec}.elsewhere-nav nav{display:flex;gap:clamp(18px,3vw,36px)}.elsewhere-nav nav a{font-size:13px;color:rgba(245,243,236,.82);transition:color .25s}.elsewhere-nav nav a:hover{color:#fff}.elsewhere-copy{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:90px 24px 60px}.elsewhere-kicker{font:11px ui-monospace,monospace;letter-spacing:.16em;color:#9ddff2}.elsewhere-copy h1{max-width:14ch;margin:16px 0 0;font-size:clamp(48px,8vw,112px);font-weight:500;line-height:.95;letter-spacing:-.055em;text-shadow:0 3px 30px rgba(0,0,0,.35)}.elsewhere-sub{max-width:40ch;margin:22px 0 0;font-size:clamp(16px,1.6vw,20px);line-height:1.5;color:rgba(245,243,236,.88)}.elsewhere-ctas{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:30px}.elsewhere-pill{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 21px;border-radius:999px;border:1px solid transparent;font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:transform .22s ease,background .25s ease,border-color .25s ease}.elsewhere-pill:hover{transform:translateY(-2px)}.elsewhere-primary{background:#f5f3ec;color:#0a0d08}.elsewhere-glass,.elsewhere-small{color:#f5f3ec;background:rgba(245,243,236,.12);border-color:rgba(245,243,236,.28);backdrop-filter:blur(14px)}.elsewhere-small{height:38px;padding:0 15px;font-size:12px}.elsewhere-controls{position:absolute;left:clamp(20px,4vw,56px);bottom:clamp(20px,4vh,38px);z-index:2;display:flex;align-items:center;gap:10px}.elsewhere-icon{display:grid;place-items:center;width:42px;height:42px;padding:0;border:1px solid rgba(245,243,236,.24);border-radius:50%;background:rgba(245,243,236,.1);color:#f5f3ec;cursor:pointer;backdrop-filter:blur(14px)}.elsewhere-controls span,.elsewhere-signature{font-size:12px;color:rgba(245,243,236,.68)}.elsewhere-signature{position:absolute;right:clamp(20px,4vw,56px);bottom:clamp(20px,4vh,38px);z-index:2}.elsewhere-signature a{color:inherit}@media(max-width:720px){.elsewhere-nav nav{display:none}.elsewhere-copy h1{font-size:clamp(44px,14vw,76px)}.elsewhere-controls span{display:none}}@media(prefers-reduced-motion:reduce){.elsewhere-hero video,.elsewhere-pill{transition:none!important}}`;
