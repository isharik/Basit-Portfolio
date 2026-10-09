import { nav, profile, socials } from "@/lib/content";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><a className="footer-name" href="#home">{profile.name}</a><p>{profile.role}</p></div><nav aria-label="Footer navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}{socials.map(social => <a key={social.href} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</nav><p className="copyright">© {new Date().getFullYear()} {profile.name}</p></div></footer>;
}
