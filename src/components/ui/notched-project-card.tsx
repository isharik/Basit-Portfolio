"use client";

import { ArrowUpRight } from "lucide-react";

export function NotchedProjectCard({ title, description, image, badge, tags }: { title: string; description: string; image: string; badge: string; tags: string[] }) {
  return <article className="notched-project-card">
    <div className="notched-cover"><img src={image} alt="" /><div className="notched-cover-wash" /><span className="notched-badge">{badge}</span><span className="notched-disc" aria-hidden="true"><ArrowUpRight size={20} /></span></div>
    <div className="notched-copy"><h3>{title}</h3><p>{description}</p><ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
  </article>;
}
