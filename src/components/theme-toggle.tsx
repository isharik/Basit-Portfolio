"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }
  return <button className={`icon-button ${className}`} onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} theme`} title={`Switch to ${dark ? "light" : "dark"} theme`}>
    {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
  </button>;
}
