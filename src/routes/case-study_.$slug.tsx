import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { caseStudies, caseStudyBySlug, caseStudySlug, caseStudySections, SITE_URL } from "@/lib/site";
import { CtaBand, Eyebrow, useReveal } from "@/components/site/ui";
import { CaseCard } from "@/components/site/CaseCard";
import { GraphedCaseSection } from "@/components/site/CaseStudyGraph";

export const Route = createFileRoute("/case-study_/$slug")({
  beforeLoad: ({ params }) => { if (!caseStudyBySlug(params.slug)) throw notFound(); },
  head: ({ params }) => {
    const study = caseStudyBySlug(params.slug);
    const title = study ? `${study.client} — ${study.focus} Case Study | Marastu®` : "Case study not found — Marastu®";
    const description = study?.summary ?? "This Marastu case study is unavailable.";
    return {
      meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: `${SITE_URL}/case-study/${params.slug}/` }],
      links: [{ rel: "canonical", href: `${SITE_URL}/case-study/${params.slug}/` }],
    };
  },
  notFoundComponent: () => <section className="px-5 py-40 text-center"><h1 className="text-4xl font-bold text-primary">Case study not found</h1><Link to="/case-study" className="mt-6 inline-block font-bold text-primary">All case studies</Link></section>,
  component: CaseDetail,
});

function CaseDetail() {
  const { slug } = Route.useParams();
  useReveal(slug);
  const study = caseStudyBySlug(slug);
  if (!study) return null;
  const sections = caseStudySections(slug);
  const related = caseStudies.filter((item) => caseStudySlug(item) !== slug).slice(0, 3);
  return <>
    <header className="mx-auto max-w-[90rem] px-5 pb-12 pt-32 sm:px-10 sm:pt-40">
      <Link to="/case-study" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><ArrowLeft className="h-4 w-4" />All case studies</Link>
      <Eyebrow className="mt-10 text-rose">{study.client} / {study.focus}</Eyebrow>
      <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[1.12] text-primary sm:text-5xl lg:text-6xl">{study.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
      <dl className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-3"><div><dt className="text-xs text-muted-foreground">Client</dt><dd className="mt-2 font-bold">{study.client}</dd></div><div><dt className="text-xs text-muted-foreground">Industry</dt><dd className="mt-2 font-bold">{study.industry}</dd></div><div><dt className="text-xs text-muted-foreground">Services</dt><dd className="mt-2 font-bold">{study.focus}</dd></div></dl>
    </header>
    <div className="mx-auto max-w-[90rem] px-5 sm:px-10"><img src={study.img} alt={`${study.client} ${study.focus}`} className="aspect-[16/9] max-h-[38rem] w-full object-cover" /></div>
    <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:py-24">
      <aside className="lg:col-span-3"><nav aria-label="Case study contents" className="border-t border-border pt-6 lg:sticky lg:top-28"><h2 className="text-sm font-bold text-primary">Inside the project</h2><ol className="mt-5 space-y-3">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm leading-relaxed text-muted-foreground hover:text-primary">{section.title}</a></li>)}</ol></nav></aside>
      <article className="min-w-0 lg:col-span-9">{sections.map((section, i) => <section id={section.id} key={section.id} className="scroll-mt-28 border-t border-border py-10 first:pt-6"><p className="text-xs font-bold text-rose">{String(i + 1).padStart(2, "0")}</p><h2 className="mb-6 mt-3 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">{section.title}</h2>{slug === "enclave-dental-digital-marketing" && ["seo-impact", "sem-impact", "smm-impact", "connected-results"].includes(section.id) ? <GraphedCaseSection sectionId={section.id} html={section.html} /> : <div className="blog-prose case-prose" dangerouslySetInnerHTML={{ __html: section.html }} />}</section>)}</article>
    </div>
    <section className="bg-secondary px-5 py-20 sm:px-10"><div className="mx-auto max-w-[90rem]"><Eyebrow className="text-primary">More work</Eyebrow><h2 className="mb-10 mt-4 text-3xl font-bold text-primary">Explore the connected strategy.</h2><div className="grid gap-10 md:grid-cols-3">{related.map((item) => <CaseCard key={item.href} c={item} />)}</div></div></section>
    <CtaBand />
  </>;
}