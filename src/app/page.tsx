import { ArrowDownRight, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { ExperienceCarousel } from "@/components/experience-carousel";
import { Welcome } from "@/components/welcome";
import { Tilt } from "@/components/tilt";
import { education, profile, projects, skills, socials } from "@/lib/content";

function Heading({ number, title, text }: { number: string; title: string; text?: string }) {
  return <div className="section-heading"><span>{number}</span><div><h2>{title}</h2>{text && <p>{text}</p>}</div></div>;
}

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, address: { "@type": "PostalAddress", addressLocality: "Anantnag", addressRegion: "Jammu & Kashmir", addressCountry: "IN" }, url: "https://basitbashir.dev" };
  return <><Navbar /><main id="main-content">
    <section id="home" className="hero container" aria-labelledby="hero-title"><Reveal><p className="eyebrow"><Welcome /> · {profile.eyebrow}</p></Reveal><Reveal delay={60}><h1 id="hero-title">Building practical <em>AI systems</em><br />for information that matters.</h1></Reveal><Reveal delay={120}><p className="hero-summary">{profile.summary}</p></Reveal><Reveal delay={180}><div className="hero-actions"><a className="button primary" href="#contact">Get in touch <ArrowDownRight size={18} /></a><a className="button secondary" href="#projects">View work <ArrowDownRight size={18} /></a></div></Reveal><Reveal delay={230}><div className="hero-meta"><span>Based in {profile.location}</span><span>Computer Science · Batch of 2024</span></div></Reveal></section>

    <section id="about" className="section container"><Reveal><Heading number="01" title="About" /></Reveal><div className="offset-content about-layout"><Reveal><div>{profile.about.map(p => <p key={p}>{p}</p>)}</div></Reveal><Reveal delay={80}><aside className="focus-list"><p className="tiny-label">Focus areas</p>{profile.focusAreas.map((area, i) => <div key={area}><span>0{i + 1}</span>{area}</div>)}</aside></Reveal></div></section>

    <section id="experience" className="section container"><Reveal><Heading number="02" title="Experience" text="Technical work grounded in data, evaluation, and digital performance." /></Reveal><ExperienceCarousel /></section>

    <section id="projects" className="section container"><Reveal><Heading number="03" title="Selected work" text="A document intelligence tool built around context-aware answers." /></Reveal><div className="offset-content projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 65}><Tilt><article className="project"><div className="project-top"><span>{project.label}</span><ArrowUpRight size={20} aria-hidden="true" /></div><h3>{project.title}</h3><p>{project.description}</p><p className="project-detail">{project.details}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Tilt></Reveal>)}</div></section>

    <section id="skills" className="section container"><Reveal><Heading number="04" title="Skills" /></Reveal><div className="offset-content skills-list">{skills.map((group, index) => <Reveal key={group.label} delay={index * 50}><div className="skill-row"><h3>{group.label}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div></section>

    <section id="education" className="section container"><Reveal><Heading number="05" title="Education & credentials" /></Reveal><div className="offset-content education-list">{education.map((item, index) => <Reveal key={item.title} delay={index * 55}><article className="education-item"><span className="tiny-label">{item.type}</span><div><h3>{item.title}</h3><p>{item.org}</p>{item.note && <p className="note">{item.note}</p>}</div><time>{item.period}</time></article></Reveal>)}</div></section>

    <section id="contact" className="contact-section"><div className="container"><Reveal><p className="eyebrow">06 · Contact</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p>For collaboration or opportunities, reach out directly.</p><div className="contact-links"><a className="button primary" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>{socials.map(social => <a key={social.label} className="button secondary" href={social.href} target="_blank" rel="noreferrer"><Linkedin size={18} />{social.label}<ArrowUpRight size={16} /></a>)}</div><a className="back-top" href="#home">Back to top <ArrowUpRight size={16} /></a></Reveal></div></section>
  </main><Footer /><a className="skip-link" href="#main-content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
