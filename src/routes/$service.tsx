import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { serviceBySlug, services, testimonials, toneCls, SITE_URL, caseStudies } from "@/lib/site";
import { Arrow, Eyebrow, CtaBand, useReveal } from "@/components/site/ui";
import { Testimonials } from "@/components/site/Testimonials";
import { CaseCard } from "@/components/site/CaseCard";

export const Route = createFileRoute("/$service")({
  loader: ({ params }) => {
    const s = serviceBySlug(params.service);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? serviceBySlug(loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Service not found — Marastu®" }, { name: "robots", content: "noindex" }] };
    const title = `${s.name} Services — Marastu®`;
    return {
      meta: [
        { title }, { name: "description", content: s.value.slice(0, 158) },
        { property: "og:title", content: title }, { property: "og:description", content: s.value.slice(0, 158) },
        { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/${s.slug}/` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = serviceBySlug(slug)!;
  useReveal(slug);
  const proof = testimonials.filter((t) => t.service === s.proof);
  const tone = toneCls[s.tone];
  const caseMatch = caseStudies.filter((c) => s.category === "performance" ? c.focus.includes("Ads") : s.category === "seo" ? c.focus.includes("SEO") : false);

  return (
    <>
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / <span>{s.name}</span></nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>{s.short}</span>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.04em] text-primary">{s.headline}</h1>
            </div>
            <div className="space-y-6 lg:col-span-4">
              <p className="text-lg text-muted-foreground">{s.value}</p>
              <Link to="/contact-us" className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-4 font-semibold text-primary-foreground shadow-cta transition hover:scale-[1.03]">Let's Marastu® <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-12">
          <div className={`reveal rounded-none p-8 sm:p-12 md:col-span-7 ${tone}`}>
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{s.overview}</p>
          </div>
          <div className="reveal rounded-none border border-border bg-card p-8 sm:p-10 md:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-primary">Problems we solve</h2>
            <ul className="mt-6 space-y-4">{s.problems.map((p) => <li key={p} className="flex gap-3 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />{p}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal text-section text-primary">Our methodology</h2>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.method.map(([t, b], i) => (
              <li key={t} className="group reveal rounded-none border border-border bg-card p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="font-display text-5xl font-bold text-primary/15 transition group-hover:text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
          <ul className="reveal mt-10 flex flex-wrap gap-3">
            {s.benefits.map((b) => <li key={b} className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-medium text-secondary-foreground"><Check className="h-4 w-4 text-primary" />{b}</li>)}
          </ul>
        </div>
      </section>

      {(proof.length > 0 || caseMatch.length > 0) && (
        <section className="bg-secondary/60 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="reveal mb-12 text-section text-primary">Proof</h2>
            {proof.length > 0 && <Testimonials items={proof} />}
            {caseMatch.length > 0 && <div className="mt-8 grid gap-5 md:grid-cols-3">{caseMatch.slice(0, 3).map((c) => <CaseCard key={c.href} c={c} />)}</div>}
          </div>
        </section>
      )}

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <h2 className="reveal text-section text-primary lg:col-span-4">FAQs</h2>
          <div className="space-y-3 lg:col-span-8">
            {s.faqs.map(([q, a]) => (
              <details key={q} className="group reveal rounded-lg border border-border bg-card p-6 open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-primary">{q}<Plus className="h-5 w-5 shrink-0 transition group-open:rotate-45" /></summary>
                <p className="mt-4 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Let's talk about your ${s.short}.`} />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-primary">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {s.related.map((r) => services.find((x) => x.slug === r)!).map((r) => (
              <Link key={r.slug} to="/$service" params={{ service: r.slug }} className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <span><span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.short}</span><span className="font-display text-xl font-semibold text-primary">{r.name}</span></span>
                <Arrow className="text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
