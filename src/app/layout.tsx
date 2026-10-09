import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/content";
import { ClickSound } from "@/components/click-sound";
import { StaticMeshGradient } from "@/components/ui/static-mesh-gradient";
import { WelcomeScreen } from "@/components/welcome";

export const metadata: Metadata = {
  title: `${profile.name} — Data Science & AI Solutions`,
  description: "Portfolio of Basit Bashir, a Computer Science Engineer building practical data science, RAG, and AI solutions.",
  keywords: ["Basit Bashir", "data science", "generative AI", "RAG", "Python", "machine learning"],
  metadataBase: new URL("https://basitbashir.dev"),
  alternates: { canonical: "/" },
  openGraph: { title: `${profile.name} — Data Science & AI Solutions`, description: "Practical data science, RAG, and intelligent applications.", url: "/", type: "website", images: ["/og.svg"] },
  twitter: { card: "summary_large_image", title: `${profile.name} — Data Science & AI Solutions`, description: "Practical data science, RAG, and intelligent applications.", images: ["/og.svg"] },
  robots: { index: true, follow: true },
};

const beforePaint = `(()=>{try{const t=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',t?t==='dark':d);document.documentElement.classList.add('js')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: beforePaint }} /></head><body><StaticMeshGradient /><WelcomeScreen /><ClickSound />{children}</body></html>;
}
