"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

type Intensity = "subtle" | "medium" | "strong";
type Beam = { x: number; y: number; width: number; length: number; angle: number; speed: number; opacity: number; hue: number; pulse: number; pulseSpeed: number };

function createBeam(width: number, height: number): Beam {
  return { x: Math.random() * width, y: height + Math.random() * height, width: 42 + Math.random() * 80, length: height * 2.2, angle: -35 + Math.random() * 10, speed: .35 + Math.random() * .65, opacity: .1 + Math.random() * .12, hue: 190 + Math.random() * 65, pulse: Math.random() * Math.PI * 2, pulseSpeed: .012 + Math.random() * .02 };
}

export function BeamsBackground({ intensity = "medium" }: { intensity?: Intensity }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intensityMap = { subtle: .55, medium: .8, strong: 1 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let beams: Beam[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      beams = Array.from({ length: 24 }, () => createBeam(window.innerWidth, window.innerHeight));
    };
    const animate = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.save(); context.filter = "blur(28px)";
      beams.forEach(beam => {
        beam.y -= beam.speed; beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) { beam.y = window.innerHeight + 120; beam.x = Math.random() * window.innerWidth; }
        context.save(); context.translate(beam.x, beam.y); context.rotate(beam.angle * Math.PI / 180);
        const alpha = beam.opacity * (.82 + Math.sin(beam.pulse) * .18) * intensityMap[intensity];
        const gradient = context.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 68%, 0)`);
        gradient.addColorStop(.18, `hsla(${beam.hue}, 85%, 68%, ${alpha * .5})`);
        gradient.addColorStop(.5, `hsla(${beam.hue}, 85%, 68%, ${alpha})`);
        gradient.addColorStop(.88, `hsla(${beam.hue}, 85%, 68%, ${alpha * .35})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 68%, 0)`);
        context.fillStyle = gradient; context.fillRect(-beam.width / 2, 0, beam.width, beam.length); context.restore();
      });
      context.restore(); frame = requestAnimationFrame(animate);
    };
    resize(); animate(); window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(frame); };
  }, [intensity]);

  return <div className="beams-background" aria-hidden="true"><canvas ref={canvasRef} /><motion.div className="beams-wash" animate={{ opacity: [.12, .2, .12] }} transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }} /></div>;
}
