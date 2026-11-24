import { Link } from "@tanstack/react-router";
import { caseStudies, caseStudySlug } from "@/lib/site";
import { Arrow } from "./ui";

export function CaseCard({ c, big = false, index }: { c: (typeof caseStudies)[number]; big?: boolean; index?: number }) {
  return (
    <Link to="/case-study/$slug" params={{ slug: caseStudySlug(c) }} className={`group reveal relative flex flex-col ${big ? "md:col-span-2 lg:row-span-2" : ""}`}>
      <div className={`relative overflow-hidden bg-ink ${big ? "aspect-[4/3] lg:flex-1" : "aspect-[4/3]"}`}>
        <img src={c.img} alt={`${c.client} ${c.focus} case study`} loading="lazy" className="h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-105" />
        <span className="absolute right-4 top-4 grid h-12 w-12 scale-75 place-items-center rounded-full bg-lime text-ink opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"><Arrow /></span>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-rose transition-transform duration-700 group-hover:scale-x-100" />
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-foreground/15 py-5">
        <div>
          <p className="kicker text-muted-foreground">{c.industry} · {c.focus}</p>
          <h3 className={`mt-2 font-display font-bold tracking-[-0.03em] text-primary transition-colors group-hover:text-rose ${big ? "text-3xl sm:text-5xl" : "text-2xl"}`}>{c.client}</h3>
        </div>
        {index !== undefined && <span className="font-display text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>}
      </div>
    </Link>
  );
}
