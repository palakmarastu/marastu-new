import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { services, contact, logoDark, logoWhite } from "@/lib/site";
import { BtnDot, btnCls } from "./ui";

const industries = [{ label: "Dental Digital Marketing", href: "https://www.marastu.com/dental-digital-marketing/" }];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const onDark = path === "/" && !scrolled && !open;
  const linkCls = `link-u px-3 py-2 text-sm font-semibold transition ${onDark ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground/75 hover:text-foreground"}`;
  return (
    <>
      <header className="sticky top-0 z-50 h-[4.5rem] px-3 pt-3 sm:px-6">
        <nav aria-label="Main" className={`mx-auto flex max-w-[90rem] items-center justify-between gap-3 rounded-full border px-4 py-2 transition-all duration-700 sm:px-5 ${scrolled || open ? "max-w-6xl border-border bg-background/80 shadow-lift backdrop-blur-xl" : "border-transparent"}`}>
          <Link to="/" aria-label="Marastu — home" className="shrink-0">
            <img src={onDark || open ? logoWhite : logoDark} alt="Marastu®" width={233} height={36} className="h-7 w-auto transition-opacity duration-500" />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            <li><Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "!bg-[length:100%_1px]" }}>Home</Link></li>
            <li className="group relative">
              <button className={`${linkCls} inline-flex items-center gap-1`} aria-haspopup="true">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button>
              <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-lift">
                  {services.map((s) => (
                    <Link key={s.slug} to="/$service" params={{ service: s.slug }} className="group/i rounded-2xl p-3 transition hover:bg-secondary">
                      <span className="block font-display font-semibold">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.short}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="group relative">
              <button className={`${linkCls} inline-flex items-center gap-1`} aria-haspopup="true">Industries <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button>
              <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-border bg-card p-3 shadow-lift">
                  {industries.map((i) => <a key={i.href} href={i.href} className="block rounded-2xl p-3 font-display font-semibold transition hover:bg-secondary">{i.label}</a>)}
                </div>
              </div>
            </li>
            <li><Link to="/case-study" className={linkCls} activeProps={{ className: "!bg-[length:100%_1px]" }}>Case Studies</Link></li>
            <li><Link to="/who-we-are" className={linkCls} activeProps={{ className: "!bg-[length:100%_1px]" }}>About Us</Link></li>
            <li><Link to="/blog" className={linkCls} activeProps={{ className: "!bg-[length:100%_1px]" }}>Insights</Link></li>
            <li><Link to="/contact-us" className={linkCls} activeProps={{ className: "!bg-[length:100%_1px]" }}>Contact</Link></li>
          </ul>
          <div className="flex items-center gap-2">
            <Link to="/contact-us" className={btnCls("rose", "hidden !py-2 !pl-5 !pr-2 text-sm sm:inline-flex")}>Let's Talk <BtnDot /></Link>
            <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)} className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink transition hover:rotate-90 lg:hidden">
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>
      <div className={`grain fixed inset-0 z-40 overflow-y-auto bg-aurora px-6 pb-10 pt-28 text-primary-foreground transition-all duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}>
        <ul className="space-y-1">
          {([["Home", "/"], ["Case Studies", "/case-study"], ["About Us", "/who-we-are"], ["Insights", "/blog"], ["Contact", "/contact-us"]] as const).map(([l, h], i) => (
            <li key={h}><Link to={h} className="flex items-baseline gap-3 py-1 font-display text-5xl font-bold tracking-[-0.04em] transition hover:translate-x-2 hover:text-lime"><span className="kicker opacity-50">0{i + 1}</span>{l}</Link></li>
          ))}
        </ul>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] opacity-60">Services</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => <Link key={s.slug} to="/$service" params={{ service: s.slug }} className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm hover:bg-primary-foreground/10">{s.name}</Link>)}
        </div>
        <a href={`tel:${contact.india.tel}`} className="mt-10 block text-lg font-semibold text-lime">{contact.india.phone}</a>
      </div>
    </>
  );
}
