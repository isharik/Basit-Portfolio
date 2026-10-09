"use client";

import { useEffect } from "react";

export function ClickSound() {
  useEffect(() => {
    let context: AudioContext | null = null;
    const play = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest("a, button")) return;
      try {
        context ??= new AudioContext();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(720, context.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(460, context.currentTime + 0.025);
        gain.gain.setValueAtTime(0.018, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.035);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(); oscillator.stop(context.currentTime + 0.04);
      } catch { /* Sound is optional; interaction must never depend on it. */ }
    };
    document.addEventListener("pointerdown", play);
    return () => document.removeEventListener("pointerdown", play);
  }, []);
  return null;
}
