"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = node.getBoundingClientRect();
    node.style.setProperty("--tilt-x", `${((event.clientX - box.left) / box.width - .5) * 5}deg`);
    node.style.setProperty("--tilt-y", `${((event.clientY - box.top) / box.height - .5) * -5}deg`);
  };
  const reset = () => { ref.current?.style.setProperty("--tilt-x", "0deg"); ref.current?.style.setProperty("--tilt-y", "0deg"); };
  return <div ref={ref} className={cn("tilt", className)} onPointerMove={move} onPointerLeave={reset}>{children}</div>;
}
