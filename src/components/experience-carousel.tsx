"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { experience } from "@/lib/content";

export function ExperienceCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "ArrowLeft") setActive(index => Math.max(0, index - 1)); if (event.key === "ArrowRight") setActive(index => Math.min(experience.length - 1, index + 1)); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <div className="experience-carousel offset-content">
    <div className="carousel-toolbar"><p className="carousel-count"><span>0{active + 1}</span> / 0{experience.length}</p><button className="carousel-next" onClick={() => setActive(index => (index + 1) % experience.length)} aria-label="Show next experience">Select a card to explore <ArrowRight size={15} /></button></div>
    <div className="carousel-stage" aria-live="polite">
      {experience.map((item, index) => { const offset = index - active; const position = offset === 0 ? "is-active" : offset === -1 ? "is-prev" : offset === 1 ? "is-next" : "is-hidden"; return <article key={item.company} className={`experience-card ${position}`} tabIndex={position === "is-active" ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") setActive(index); }}><div className="experience-card-top"><span className="timeline-period">{item.period}</span><span className="card-index">0{index + 1}</span></div><div><div className="role-line"><h3>{item.role}</h3><span>{item.location}</span></div><p className="company">{item.company}</p><p className="item-description">{item.description}</p><ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul></div><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>})}
    </div>
    <div className="carousel-dots" aria-label="Experience slides">{experience.map((item, index) => <button key={item.company} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show experience ${index + 1}`} />)}</div>
  </div>;
}
