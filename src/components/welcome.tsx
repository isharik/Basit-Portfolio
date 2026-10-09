"use client";

import { useEffect, useState } from "react";

const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "नमस्ते", "السلام علیکم", "你好", "こんにちは", "안녕하세요"];

export function WelcomeScreen() {
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const timers = greetings.slice(1).map((_, index) => window.setTimeout(() => setIndex(index + 1), (index + 1) * 360));
    timers.push(window.setTimeout(() => setClosing(true), greetings.length * 360 + 380));
    timers.push(window.setTimeout(() => setComplete(true), greetings.length * 360 + 820));
    return () => timers.forEach(window.clearTimeout);
  }, []);
  if (complete) return null;
  return <div className={`welcome-screen ${closing ? "is-closing" : ""}`} aria-live="polite" aria-label="Welcome"><span key={greetings[index]}>{greetings[index]}</span></div>;
}

export function Welcome() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % greetings.length), 1150);
    return () => window.clearInterval(timer);
  }, []);
  return <span key={greetings[index]} className="welcome" aria-label="Welcome">{greetings[index]}</span>;
}
