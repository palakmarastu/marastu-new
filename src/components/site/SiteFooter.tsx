import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import { contact, services, reviewLinks, socials, logoWhite } from "@/lib/site";

const socialIcon = { LinkedIn: Linkedin, Instagram } as const;

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink px-5 pb-28 pt-24 text-primary-foreground sm:px-10 sm:pb-10">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(180deg,transparent,black_60%)]" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logoWhite} alt="Marastu®" width={233} height={36} className="mb-6 h-8 w-auto" />
            <p className="max-w-sm text-primary-foreground/65">A digital marketing agency helping businesses in the USA, UK, Australia, UAE and India grow through SEO, performance marketing and analytics.</p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcon[s.name as keyof typeof socialIcon];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={`Marastu® on ${s.name}`} title={`${s.name} ↗`} className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/30 text-primary-foreground transition duration-500 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-ink">
                    <Icon size={17} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>
          <nav aria-label="Services" className="lg:col-span-3">
            <p className="kicker text-primary-foreground/45">Services</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => <li key={s.slug}><Link to="/$service" params={{ service: s.slug }} className="link-u text-primary-foreground/80 hover:text-lime">{s.name}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Company" className="lg:col-span-2">
            <p className="kicker text-primary-foreground/45">Company</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/who-we-are" className="link-u text-primary-foreground/80 hover:text-lime">About Us</Link></li>
              <li><Link to="/case-study" className="link-u text-primary-foreground/80 hover:text-lime">Case Studies</Link></li>
              <li><Link to="/blog" className="link-u text-primary-foreground/80 hover:text-lime">Insights</Link></li>
              <li><Link to="/collaboration-with-admedia" className="link-u text-primary-foreground/80 hover:text-lime">AD Media Partnership</Link></li>
              <li><Link to="/contact-us" className="link-u text-primary-foreground/80 hover:text-lime">Contact</Link></li>
            </ul>
          </nav>
          <address className="space-y-8 text-sm not-italic lg:col-span-3">
            <div><p className="kicker text-primary-foreground/45">Ahmedabad</p><p className="mt-3 text-primary-foreground/70">{contact.india.address}</p><a href={`tel:${contact.india.tel}`} className="link-u mt-2 inline-block font-semibold text-lime">{contact.india.phone}</a></div>
            <div><p className="kicker text-primary-foreground/45">Sydney · {contact.sydney.note}</p><p className="mt-3 text-primary-foreground/70">{contact.sydney.address}</p></div>
          </address>
        </div>
        <div className="grid grid-cols-2 gap-3 pb-14 sm:flex sm:flex-wrap sm:items-center">
          {reviewLinks.map((r) => <a key={r.name} href={r.href} target="_blank" rel="noreferrer" title={`Reviewed on ${r.name}`} className="flex h-16 items-center justify-center rounded-lg bg-surface-inverse px-5 transition duration-500 hover:-translate-y-0.5 hover:bg-surface-inverse/85"><img src={r.logo} alt={`Reviewed on ${r.name}`} loading="lazy" className={`w-auto max-w-full object-contain ${r.name === "Google Partner" ? "h-12" : "h-8"}`} /></a>)}
        </div>
        <p aria-hidden className="select-none bg-gradient-to-b from-primary-foreground/25 to-transparent bg-clip-text font-display text-[clamp(2.5rem,9vw,8rem)] font-bold leading-[0.8] tracking-[-0.07em] text-transparent">Marastu®</p>
        <div className="mt-8 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Marastu®. All rights reserved.</p>
          <div className="flex gap-6"><a className="link-u" href="https://www.marastu.com/privacy-policy/">Privacy Policy</a><a className="link-u" href="https://www.marastu.com/terms-and-conditions/">Terms and Conditions</a></div>
        </div>
      </div>
    </footer>
  );
}
