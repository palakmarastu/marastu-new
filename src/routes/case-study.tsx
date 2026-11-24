import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { caseStudies, caseStudySlug, verifiedResults, SITE_URL } from "@/lib/site";
import { Arrow, CtaBand, Eyebrow, useReveal } from "@/components/site/ui";

type CaseSearch = { service?: string | undefined };

export const Route = createFileRoute("/case-study")({
  validateSearch: (search: Record<string, unknown>): CaseSearch => ({ service: typeof search["service"] === "string" && caseStudies.some((c) => c.focus === search["service"]) ? search["service"] : undefined }),
  head: () => ({
    meta: [
      { title: "Case Studies — Marastu® Results" },
      { name: "description", content: "Explore Marastu® case studies across digital marketing, SEO, local SEO, AI search, Google Ads and social media for Enclave Dental." },
      { property: "og:title", content: "Case Studies — Marastu®" },
      { property: "og:description", content: "Real client work and verified results from Marastu®." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/case-study/` }],
  }),
  component: CasePage,
});

function CasePage() {
  const { service } = Route.useSearch();
  const navigate = Route.useNavigate();
  useReveal(service);
  const featured = caseStudies.find((c) => c.focus === "Digital Marketing");
  const visible = caseStudies.filter((c) => !service || c.focus === service);
  return (
    <>
      <section className="px-5 pb-12 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <Eyebrow className="text-rose">Case studies</Eyebrow>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] text-primary sm:text-7xl lg:text-8xl">Work that<br /><span className="serif-i">moves the numbers.</span></h1>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-3">Real client work across SEO, local SEO, AI SEO, Google Ads and social media.</p>
        </div>
      </section>
      {featured && !service && <section className="px-5 pb-16 sm:px-10"><Link to="/case-study/$slug" params={{ slug: caseStudySlug(featured) }} className="group relative mx-auto block max-w-[90rem] overflow-hidden bg-ink">
        <img src={featured.img} alt="Enclave Dental digital marketing case study" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none sm:aspect-[16/9] lg:aspect-[21/9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-surface-inverse sm:p-10 lg:p-12"><p className="text-xs font-bold uppercase text-lime">Featured project · Dental · Digital Marketing</p><h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{featured.title}</h2><div className="mt-6 flex items-center justify-between gap-4 border-t border-surface-inverse/25 pt-5"><span className="text-sm">Enclave Dental · Lake Mary, Florida</span><span className="flex shrink-0 items-center gap-2 text-sm font-bold text-lime">View case study <Arrow /></span></div></div>
      </Link></section>}
      <section className="px-5 pb-20 sm:px-10 sm:pb-28">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-wrap items-center justify-between gap-5 border-y border-border py-5"><div aria-label="Filter case studies" className="flex flex-wrap gap-2">{["All work", ...caseStudies.map((c) => c.focus)].map((focus) => <Button key={focus} variant={(service ?? "All work") === focus ? "default" : "ghost"} aria-pressed={(service ?? "All work") === focus} onClick={() => navigate({ search: { service: focus === "All work" ? undefined : focus }, resetScroll: false })}>{focus}</Button>)}</div><p aria-live="polite" className="text-sm text-muted-foreground">{visible.length} {visible.length === 1 ? "case study" : "case studies"}</p></div>
          <div className="mt-12 grid gap-x-10 gap-y-16 lg:grid-cols-12">
            {visible.map((c, i) => <article key={c.href} className={`min-w-0 ${i % 4 === 0 || i % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"} ${i % 2 ? "lg:pt-16" : ""}`}>
              <Link to="/case-study/$slug" params={{ slug: caseStudySlug(c) }} className="group block focus-visible:outline focus-visible:outline-ring">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary"><img src={c.img} alt={`${c.client} ${c.focus} case study`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" /><span className="absolute left-4 top-4 bg-surface-inverse px-3 py-2 text-xs font-bold text-ink">{c.focus}</span><span aria-hidden className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45"><Arrow /></span></div>
                <div className="mt-5 flex items-center justify-between text-xs font-semibold text-muted-foreground"><span>{c.client} / {c.industry}</span><span>{String(caseStudies.indexOf(c) + 1).padStart(2, "0")}</span></div>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-primary sm:text-3xl">{c.title}</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.summary}</p><span className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-primary">View case study <Arrow /></span>
              </Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-16 text-surface-inverse sm:px-10">
        <p className="mx-auto mb-8 max-w-[90rem] text-xs font-bold uppercase text-lime">Results from published client reviews</p>
        <dl className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
          {verifiedResults.map((r, i) => <div key={r.label} className={`reveal py-6 pr-4 ${i > 0 ? "lg:border-l lg:border-primary-foreground/15 lg:pl-8" : ""}`}><dd className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.06em] text-lime">{r.k}</dd><dt className="mt-3 font-semibold">{r.label}</dt><dd className="mt-1 text-xs text-primary-foreground/50">Client review · {r.who}</dd></div>)}
        </dl>
      </section>
      <CtaBand />
    </>
  );
}
