import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Compass, BarChart3, MessagesSquare, SlidersHorizontal, Cpu, Globe2, Plus } from "lucide-react";
import { categories, serviceBySlug, testimonials, verifiedResults, caseStudies, caseStudySlug, reviewLinks, clientLogos, adMediaImg, SITE_URL, contact, blogPosts } from "@/lib/site";
import { Arrow, Eyebrow, CtaBand, useReveal, Lines, btnCls, BtnDot } from "@/components/site/ui";
import { HeroGraphic } from "@/components/site/HeroGraphic";
import { Testimonials } from "@/components/site/Testimonials";
import { CaseCard } from "@/components/site/CaseCard";
import { BlogCard } from "@/components/site/BlogCard";

const orgLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "Marastu®", url: SITE_URL,
  areaServed: ["US", "GB", "AU", "AE", "IN"],
  address: { "@type": "PostalAddress", streetAddress: "Level 3, Ratnanjali Square, 316, Prernatirth Derasar Rd, Prahlad Nagar", addressLocality: "Ahmedabad", postalCode: "380015", addressCountry: "IN" },
  telephone: contact.india.phone, sameAs: ["https://clutch.co/profile/marastu", "https://www.trustpilot.com/review/marastu.com"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marastu® — SEO, Performance Marketing & GA4 Agency" },
      { name: "description", content: "Marastu® combines strategy, creativity and technology to turn digital opportunities into measurable growth — SEO, link building, paid media and GA4." },
      { property: "og:title", content: "Marastu® — Your Growth Deserves More Than Marketing" },
      { property: "og:description", content: "SEO, performance marketing and analytics for businesses in the USA, UK, Australia, UAE and India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgLd) }],
  }),
  component: Index,
});

const why = [
  { icon: Compass, t: "Strategic approach", b: "Every engagement starts with your business goals, not a package." },
  { icon: BarChart3, t: "Data-driven decisions", b: "Accurate GA4 tracking means we act on what's real." },
  { icon: MessagesSquare, t: "Transparent communication", b: "Clear plans, honest reporting, regular calls." },
  { icon: SlidersHorizontal, t: "Customized strategies", b: "Tailored to your market, stage and budget." },
  { icon: Cpu, t: "Technical expertise", b: "GTM, GA4, migrations and technical SEO in-house." },
  { icon: Globe2, t: "International delivery", b: "Clients across the USA, UK, Australia, UAE and India." },
];
const steps = [["Discover", "We learn your business, audience, competitors and current data."], ["Strategize", "A prioritised roadmap tied to measurable goals."], ["Execute", "Our specialists ship the work — on time, every month."], ["Optimize & Scale", "We measure, refine and double down on what works."]];
const catStyle = [
  { hover: "hover:bg-primary hover:text-primary-foreground", dot: "bg-accent" },
  { hover: "hover:bg-rose hover:text-primary-foreground", dot: "bg-rose" },
  { hover: "hover:bg-lime hover:text-ink", dot: "bg-lime" },
];

function Index() {
  useReveal();
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setY(window.scrollY)); };
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  const featured = caseStudies[0];
  if (!featured) return null;
  const rest = caseStudies.slice(1);

  return (
    <>
      {/* HERO — dark stage, oversized type, Vastu mandala */}
      <section className="grain relative -mt-[4.5rem] overflow-hidden bg-aurora pt-[4.5rem] text-primary-foreground">
        <div aria-hidden className="bg-grid absolute inset-0 [mask-image:linear-gradient(180deg,black,transparent_85%)]" />
        <div className="relative mx-auto grid max-w-[90rem] gap-6 px-5 pb-10 pt-16 sm:px-10 sm:pt-24 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:content-between lg:pb-12">
          <div className="lg:col-span-12" style={{ transform: `translateY(${y * -0.15}px)`, opacity: Math.max(0, 1 - y / 800) }}>
            <h1 className="text-hero mt-4 max-w-[13ch] lg:max-w-none">
              <span className="hero-rise block overflow-hidden"><span>Your growth</span></span>
              <span className="hero-rise block overflow-hidden"><span style={{ animationDelay: ".12s" }}>deserves <span className="serif-i hero-shine">more</span></span></span>
              <span className="hero-rise block overflow-hidden"><span style={{ animationDelay: ".24s" }}>than marketing<span className="hero-dot text-rose">.</span></span></span>
            </h1>
          </div>
          <div className="pointer-events-none absolute right-[-12%] top-24 w-[85vw] max-w-[44rem] text-primary-foreground opacity-40 sm:opacity-60 lg:right-[-8%] lg:top-[45%] lg:w-[42vw] lg:-translate-y-1/2 lg:opacity-100">
            <HeroGraphic y={y} />
          </div>
          <div className="relative mt-10 grid gap-8 border-t border-primary-foreground/15 pt-8 lg:col-span-12 lg:grid-cols-12 lg:items-end">
            <p className="max-w-md text-lg text-primary-foreground/75 lg:col-span-5">We combine strategy, creativity and technology to turn digital opportunities into measurable business growth.</p>
            <div className="flex flex-wrap gap-3 lg:col-span-4">
              <Link to="/contact-us" className={btnCls("rose")}>Let's Talk Growth <BtnDot /></Link>
              <a href="#expertise" className="group btn text-primary-foreground [--btn-sweep:var(--primary-foreground)] [--btn-sweep-fg:var(--ink)] border border-primary-foreground/30">Explore Our Expertise</a>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/60 lg:col-span-3 lg:justify-end">
              {["SEO", "Link Building", "Paid Media", "GA4 & GTM"].map((s) => <li key={s} className="flex items-center gap-2"><span className="h-1 w-1 rotate-45 bg-lime" />{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST — full-bleed, logos edge to edge */}
      <section aria-labelledby="trust" className="border-b border-border py-12 sm:py-16">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-6 px-5 sm:px-10">
          <h2 id="trust" className="kicker text-muted-foreground">Trusted by · Reviewed on</h2>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {reviewLinks.map((r) => <a key={r.name} href={r.href} target="_blank" rel="noreferrer" title={`Reviewed on ${r.name}`} className="transition duration-500 hover:-translate-y-0.5 hover:opacity-70"><img src={r.logo} alt={`Reviewed on ${r.name}`} loading="lazy" className={`w-auto object-contain ${r.name === "Google Partner" ? "h-16 sm:h-20" : "h-11 sm:h-13"}`} /></a>)}
          </div>
        </div>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-20 pr-20 sm:gap-28 sm:pr-28">
            {[...clientLogos, ...clientLogos].map((c, i) => <img key={i} src={c.src} alt={i < clientLogos.length ? c.name : ""} aria-hidden={i >= clientLogos.length} loading="lazy" className="h-10 w-auto opacity-50 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:h-12" />)}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — editorial index rows */}
      <section id="expertise" className="scroll-mt-24 px-5 py-24 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-rose">Expertise / 01</Eyebrow>
              <h2 className="text-section mt-6 text-primary"><Lines lines={["What we do", <span key="b" className="serif-i text-foreground/60">—three disciplines,</span>, "one growth team."]} /></h2>
            </div>
            <p className="reveal text-lg text-muted-foreground lg:col-span-4">Pick where you want to start — we'll connect the rest.</p>
          </div>
          <div className="mt-16 border-t border-foreground/15">
            {categories.map((c, i) => (
              <article key={c.key} className={`group reveal relative grid gap-6 border-b border-foreground/15 px-2 py-10 transition-colors duration-700 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-14 ${catStyle[i]?.hover}`}>
                <span className="kicker opacity-50 lg:col-span-1">0{i + 1}</span>
                <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] transition-transform duration-700 group-hover:translate-x-3 lg:col-span-6">{c.title}</h3>
                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed opacity-70">{c.subs.join(" · ")}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {c.links.map((slug) => <Link key={slug} to="/$service" params={{ service: slug }} className="group/l link-u relative z-10 inline-flex items-center gap-1 text-sm font-bold">{serviceBySlug(slug)?.name} <Arrow /></Link>)}
                  </div>
                </div>
                <span aria-hidden className={`hidden h-14 w-14 place-items-center justify-self-end rounded-full transition duration-700 group-hover:rotate-45 group-hover:bg-current/10 lg:col-span-1 lg:grid`}><Plus className="h-6 w-6" /></span>
                <span aria-hidden className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-700 group-hover:scale-y-100 ${catStyle[i]?.dot}`} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — sticky statement + hairline matrix */}
      <section className="grain relative overflow-hidden bg-ink px-5 py-24 text-primary-foreground sm:px-10 sm:py-40">
        <div aria-hidden className="absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <Eyebrow className="text-lime">Why Marastu / 02</Eyebrow>
            <h2 className="text-section mt-6"><Lines lines={["Not just another", "marketing agency.", <span key="g" className="serif-i text-lime">Your growth partner.</span>]} /></h2>
            <p className="reveal mt-8 max-w-md text-lg text-primary-foreground/70">Well-rounded perspectives to achieve effective marketing outcomes — from people who care about your results as much as you do.</p>
          </div>
          <ol className="grid border-l border-t border-primary-foreground/15 sm:grid-cols-2 lg:col-span-7">
            {why.map(({ icon: I, t, b }, i) => (
              <li key={t} className="group reveal relative border-b border-r border-primary-foreground/15 p-8 transition-colors duration-500 hover:bg-primary-foreground/[0.04] sm:p-10" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                <div className="flex items-start justify-between">
                  <I aria-hidden className="h-8 w-8 text-lime transition duration-700 group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.4} />
                  <span className="font-display text-sm text-primary-foreground/40">0{i + 1}</span>
                </div>
                <h3 className="mt-14 font-display text-2xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 text-primary-foreground/60">{b}</p>
                <span aria-hidden className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-700 group-hover:scale-x-100" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS — numbers as the hero */}
      <section className="px-5 pt-24 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-rose">Proof / 03</Eyebrow>
              <h2 className="text-section mt-6 text-primary"><Lines lines={["Results our clients", <span key="t" className="serif-i">talk about.</span>]} /></h2>
            </div>
            <p className="reveal text-muted-foreground lg:col-span-4">Every figure below is quoted word-for-word from a published client review.</p>
          </div>
          <dl className="mt-16 grid grid-cols-2 border-t border-foreground/15 lg:grid-cols-4">
            {verifiedResults.map((r, i) => (
              <div key={r.label} className={`reveal group border-b border-foreground/15 py-10 pr-4 sm:py-14 ${i % 2 ? "pl-4 sm:pl-8" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <dt className="sr-only">{r.label}</dt>
                <dd className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-none tracking-[-0.06em] text-primary transition-colors duration-500 group-hover:text-rose">{r.k}</dd>
                <dd className="mt-4 font-semibold">{r.label}</dd>
                <dd className="mt-1 text-xs text-muted-foreground">Client review · {r.who}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CASE STUDIES — featured split + index list */}
      <section className="px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex items-end justify-between gap-6">
            <h2 className="kicker text-muted-foreground">Selected case studies</h2>
            <Link to="/case-study" className="group link-u inline-flex items-center gap-2 font-bold text-primary">All case studies <Arrow /></Link>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <Link to="/case-study/$slug" params={{ slug: caseStudySlug(featured) }} className="group reveal relative block overflow-hidden bg-ink lg:col-span-7">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={featured.img} alt={`${featured.client} ${featured.focus} case study`} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-[1.4s] ease-out group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 pt-24 text-primary-foreground sm:p-10 sm:pt-32">
                <div>
                  <p className="kicker text-lime">Featured · {featured.industry}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{featured.client} <span className="serif-i font-normal text-primary-foreground/70">{featured.focus}</span></h3>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-lime text-ink transition duration-500 group-hover:rotate-45"><Arrow /></span>
              </div>
            </Link>
            <ol className="border-t border-foreground/15 lg:col-span-5">
              {rest.map((c, i) => (
                <li key={c.href} className="reveal border-b border-foreground/15" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Link to="/case-study/$slug" params={{ slug: caseStudySlug(c) }} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5 transition-colors duration-500 hover:text-rose">
                    <span className="h-16 w-20 overflow-hidden bg-secondary"><img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" /></span>
                    <span>
                      <span className="kicker block text-muted-foreground">{c.industry} · 0{i + 2}</span>
                      <span className="mt-1 block font-display text-xl font-semibold tracking-tight sm:text-2xl">{c.client} — {c.focus}</span>
                    </span>
                    <Arrow className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* APPROACH — progress rail */}
      <section className="relative overflow-hidden bg-secondary px-5 py-24 sm:px-10 sm:py-36">
        <div aria-hidden className="bg-grid absolute inset-0 text-primary opacity-50" />
        <div className="relative mx-auto max-w-[90rem]">
          <Eyebrow className="text-primary">Process / 04</Eyebrow>
          <h2 className="text-section mt-6 text-primary"><Lines lines={[<>Our <span key="a" className="serif-i">approach</span></>]} /></h2>
          <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
            <span aria-hidden className="draw-x absolute left-0 right-0 top-[1.4rem] hidden h-px bg-primary md:block" />
            {steps.map(([t, b], i) => (
              <li key={t} className="group reveal relative" style={{ transitionDelay: `${200 + i * 150}ms` }}>
                <span className="relative grid h-11 w-11 rotate-45 place-items-center border border-primary bg-secondary transition duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <span className="-rotate-45 font-display text-sm font-bold">0{i + 1}</span>
                </span>
                <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight text-primary">{t}</h3>
                <p className="mt-3 max-w-xs text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INSIGHTS — blog cards */}
      <section className="px-5 py-24 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-primary">Insights / 05</Eyebrow>
              <h2 className="text-section mt-6 text-primary"><Lines lines={["Ideas for", <span key="i" className="serif-i">smarter growth.</span>]} /></h2>
            </div>
            <div className="reveal lg:col-span-4 lg:justify-self-end">
              <Link to="/blog" className={btnCls("ink")}>All Insights <BtnDot /></Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary px-5 py-24 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-rose">Voices / 06</Eyebrow>
              <h2 className="text-section mt-6 text-primary"><Lines lines={["Don't just take", <span key="w" className="serif-i">our words!</span>]} /></h2>
            </div>
            <p className="reveal text-lg text-muted-foreground lg:col-span-4">Read what our clients have to say about the services.</p>
          </div>
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="grain relative overflow-hidden bg-aurora text-primary-foreground">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(75%_75%_at_30%_50%,black,transparent)]" />
        <div aria-hidden className="absolute -left-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-primary-foreground/10" />
        <div aria-hidden className="absolute -left-10 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full border border-lime/25" />
        <div className="relative mx-auto grid max-w-[90rem] items-center gap-16 px-5 py-24 sm:px-10 sm:py-36 lg:grid-cols-12">
          <div className="reveal relative lg:col-span-6">
            <div className="aspect-[5/4] overflow-hidden border border-primary-foreground/15">
              <img src={adMediaImg} alt="Marastu and AD Media collaboration" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <span aria-hidden className="absolute -bottom-8 -right-4 grid h-28 w-28 place-items-center rounded-full bg-lime font-display text-6xl font-light text-ink shadow-cta sm:-right-8 sm:h-36 sm:w-36 sm:text-7xl animate-float">+</span>
            <p className="mt-6 kicker text-primary-foreground/50">Sydney · Surry Hills NSW</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow className="text-lime">Australia · Partnership</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">Marastu® <span className="serif-i font-normal text-rose">+</span> AD Media</h2>
            <p className="mt-6 text-xl font-semibold text-primary-foreground/90">A strategic collaboration delivering smarter digital solutions.</p>
            <p className="mt-5 text-primary-foreground/65">AD Media is a trusted Australian digital marketing agency with a reputation built on transparency, creativity, and measurable results. Together, we bring you the best of both worlds: local strategy and storytelling with global-scale delivery and technical excellence.</p>
            <ul className="mt-8 divide-y divide-primary-foreground/10 border-y border-primary-foreground/10">
              {[["Local strategy & storytelling", "On-the-ground insight from a trusted Australian team."], ["Global-scale delivery", "Technical excellence and execution at international scale."], ["One accountable partner", "Strategic thinking with smart, measurable execution."]].map(([t, d]) => (
                <li key={t} className="reveal flex items-baseline gap-4 py-4">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-lime" />
                  <p className="text-sm"><span className="font-bold">{t}</span> <span className="text-primary-foreground/55">— {d}</span></p>
                </li>
              ))}
            </ul>
            <Link to="/collaboration-with-admedia" className={btnCls("lime", "mt-10")}>Explore the partnership <BtnDot /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
