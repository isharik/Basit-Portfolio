import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Footer } from "@/components/footer";
import ElsewhereHero from "@/components/ui/elsewhere-hero";
import { Reveal } from "@/components/reveal";
import { ExperienceCarousel } from "@/components/experience-carousel";
import { Tilt } from "@/components/tilt";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";
import { education, profile, projects, skills, socials } from "@/lib/content";

function Heading({ number, title, text }: { number: string; title: string; text?: string }) {
  return <div className="section-heading"><span>{number}</span><div><h2>{title}</h2>{text && <p>{text}</p>}</div></div>;
}

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, address: { "@type": "PostalAddress", addressLocality: "Anantnag", addressRegion: "Jammu & Kashmir", addressCountry: "IN" }, url: "https://basitbashir.dev" };
  return <><ElsewhereHero headline="Building practical AI systems for information that matters." subline={profile.summary} primaryCta={{ label: "View selected work", href: "#projects" }} /><main id="main-content">

    <section id="about" className="section container"><Reveal><Heading number="01" title="About" /></Reveal><div className="offset-content about-layout"><Reveal><div>{profile.about.map(p => <p key={p}>{p}</p>)}</div></Reveal><Reveal delay={80}><aside className="focus-list"><p className="tiny-label">Focus areas</p>{profile.focusAreas.map((area, i) => <div key={area}><span>0{i + 1}</span>{area}</div>)}</aside></Reveal></div></section>

    <section id="experience" className="section container"><Reveal><Heading number="02" title="Experience" text="Technical work grounded in data, evaluation, and digital performance." /></Reveal><ExperienceCarousel /></section>

    <section id="projects" className="section container"><Reveal><Heading number="03" title="Selected work" text="A document intelligence tool built around context-aware answers." /></Reveal><div className="offset-content projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 65}><Tilt><NotchedProjectCard title={project.title} badge={project.label} description={`${project.description} ${project.details}`} image="/wallhaven-4g99pq.jpg" tags={project.tags} /></Tilt></Reveal>)}</div></section>

    <section id="skills" className="section container"><Reveal><Heading number="04" title="Skills" /></Reveal><div className="offset-content skills-list">{skills.map((group, index) => <Reveal key={group.label} delay={index * 50}><div className="skill-row"><h3>{group.label}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div></section>

    <section id="education" className="section container"><Reveal><Heading number="05" title="Education & credentials" /></Reveal><div className="offset-content education-list">{education.map((item, index) => <Reveal key={item.title} delay={index * 55}><article className="education-item"><span className="tiny-label">{item.type}</span><div><h3>{item.title}</h3><p>{item.org}</p>{item.note && <p className="note">{item.note}</p>}</div><time>{item.period}</time></article></Reveal>)}</div></section>

    <section id="contact" className="contact-section"><div className="container"><Reveal><p className="eyebrow">06 · Contact</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p>For collaboration or opportunities, reach out directly.</p><div className="contact-links"><a className="button primary" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>{socials.map(social => <a key={social.label} className="button secondary" href={social.href} target="_blank" rel="noreferrer"><Linkedin size={18} />{social.label}<ArrowUpRight size={16} /></a>)}</div><a className="back-top" href="#home">Back to top <ArrowUpRight size={16} /></a></Reveal></div></section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
