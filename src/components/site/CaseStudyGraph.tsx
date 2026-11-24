import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, MapPin, Sparkles, MousePointer2, Heart } from "lucide-react";
import { digitalMarketingGraphs, digitalMarketingJourney } from "@/lib/site";

const fills = { muted: "fill-muted-foreground", lime: "fill-lime", accent: "fill-accent", rose: "fill-rose" };
const icons = [Search, MapPin, Sparkles, MousePointer2, Heart];

export function CaseStudyGraph({ sectionId }: { sectionId: string }) {
  if (sectionId === "connected-results") {
    return <div aria-label="Five-channel patient journey" className="my-8">
      <ol className="grid gap-0 sm:grid-cols-2 xl:grid-cols-5">
        {digitalMarketingJourney.map((step, i) => {
          const Icon = icons[i] ?? Search;
          return <li key={step.channel} className="relative border-l-2 border-accent pb-8 pl-6 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pr-6 sm:pt-6">
            <span aria-hidden="true" className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-rose sm:-top-[7px] sm:left-0" />
            <Link to="/case-study/$slug" params={{ slug: step.slug }} className="group block h-full focus-visible:outline focus-visible:outline-ring">
              <div className="flex items-center gap-3 text-primary"><Icon className="h-5 w-5" /><span className="text-xs font-bold">{step.channel}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" /></div>
              <h3 className="mt-5 text-lg font-extrabold text-primary">{step.stage}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </Link>
          </li>;
        })}
      </ol>
      <div className="flex items-center justify-between gap-6 border-y border-border py-5 text-sm font-bold text-primary"><span>Discovery → Trust → Action</span><span className="text-rose">One connected patient journey</span></div>
    </div>;
  }
  if (!(sectionId in digitalMarketingGraphs)) return null;
  const graph = digitalMarketingGraphs[sectionId as keyof typeof digitalMarketingGraphs];
  const max = Math.max(...graph.rows.map((row) => row.value));
  return <figure aria-label={graph.caption} className="my-8 bg-secondary px-5 py-8 sm:px-8">
    <figcaption className="mb-8 text-xs font-bold uppercase leading-relaxed text-primary">{graph.caption}</figcaption>
    <dl className="space-y-7">
      {graph.rows.map((row) => <div key={row.label}>
        <div className="mb-3 flex items-end justify-between gap-4"><dt className="text-sm font-semibold text-primary">{row.label}</dt><dd className="text-xl font-extrabold text-primary sm:text-2xl">{row.display}</dd></div>
        <svg aria-hidden="true" viewBox="0 0 600 28" preserveAspectRatio="none" className="h-7 w-full overflow-visible">
          {[0, 150, 300, 450, 600].map((x) => <line key={x} x1={x} x2={x} y1="-5" y2="33" className="stroke-border" />)}
          <rect width={(row.value / max) * 600} height="28" className={fills[row.tone]} />
        </svg>
      </div>)}
    </dl>
    {graph.metrics.length > 0 && <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-6">{graph.metrics.map((metric) => <div key={metric.label}><dd className="text-3xl font-extrabold text-primary">{metric.value}</dd><dt className="mt-2 text-xs font-semibold text-muted-foreground">{metric.label}</dt></div>)}</dl>}
  </figure>;
}

export function GraphedCaseSection({ sectionId, html }: { sectionId: string; html: string }) {
  const introEnd = html.indexOf("</p>") + 4;
  const takeaways = html.indexOf("Key Takeaways");
  const closing = sectionId === "connected-results" ? html.slice(html.indexOf("<p>Digital growth")) : takeaways >= 0 ? `<h3>Key Takeaways</h3>${html.slice(html.indexOf("<ul>", takeaways))}` : "";
  return <>
    <div className="blog-prose case-prose" dangerouslySetInnerHTML={{ __html: html.slice(0, introEnd) }} />
    <CaseStudyGraph sectionId={sectionId} />
    <div className="blog-prose case-prose" dangerouslySetInnerHTML={{ __html: closing }} />
  </>;
}