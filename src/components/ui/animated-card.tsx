"use client";

import { motion } from "motion/react";

export function AnimatedCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div
    className={`animated-card-shell ${className}`}
    initial={{ opacity: 0, y: 18, rotateX: 2 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
    whileHover={{ y: -7, rotateX: 1.5, rotateY: -1.2, scale: 1.008 }}
  >{children}</motion.div>;
}
