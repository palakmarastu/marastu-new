import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { blogPosts, SITE_URL } from "@/lib/site";
import { Arrow, CtaBand, Eyebrow, useReveal } from "@/components/site/ui";
import { BlogCard } from "@/components/site/BlogCard";
import { Button } from "@/components/ui/button";

type BlogSearch = { q?: string | undefined; category?: string | undefined; page?: number | undefined };

export const Route = createFileRoute("/blog")({
  validateSearch: (search: Record<string, unknown>): BlogSearch => ({
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    category: typeof search["category"] === "string" ? search["category"] : undefined,
    page: Number.isInteger(Number(search["page"])) && Number(search["page"]) > 0 ? Number(search["page"]) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Insights — Marastu® Blog" },
      { name: "description", content: "SEO, link building, paid media and GA4 insights from the Marastu® team." },
      { property: "og:title", content: "Insights — Marastu®" },
      { property: "og:description", content: "Practical digital marketing insights from Marastu®." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog/` }],
  }),
  component: Blog,
});

function Blog() {
  useReveal();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const filtered = blogPosts.filter((post) => (!search.category || post.category === search.category) && `${post.title} ${post.excerpt}`.toLowerCase().includes((search.q ?? "").trim().toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 6));
  const page = Math.min(search.page ?? 1, totalPages);
  const visible = filtered.slice((page - 1) * 6, page * 6);
  const featured = blogPosts[0];
  return (
    <>
      <section className="px-5 pb-12 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[90rem]">
          <Eyebrow className="text-primary">Insights</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] text-primary sm:text-7xl lg:text-8xl">Ideas for<br /><span className="serif-i">smarter growth.</span></h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">SEO, link building, paid media and GA4 insights from the Marastu® team.</p>
        </div>
      </section>
      {featured && <section className="px-5 pb-16 sm:px-10">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group mx-auto grid max-w-[90rem] overflow-hidden bg-secondary lg:grid-cols-12">
          <div className="aspect-[16/10] overflow-hidden lg:col-span-7"><img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" /></div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:col-span-5">
            <p className="text-xs font-bold uppercase text-primary">Latest insight / {featured.category}</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{featured.title}</h2>
            <p className="mt-5 line-clamp-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-8 flex items-center justify-between border-t border-primary/20 pt-6 font-bold text-primary">Read article <Arrow /></span>
          </div>
        </Link>
      </section>}
      <section className="px-5 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-border py-6">
            <div aria-label="Article categories" className="flex flex-wrap gap-2">
              {["All insights", ...categories].map((category) => <Button key={category} variant={(search.category ?? "All insights") === category ? "default" : "ghost"} onClick={() => navigate({ search: { ...search, category: category === "All insights" ? undefined : category, page: undefined } })}>{category}</Button>)}
            </div>
            <label className="relative block w-full sm:w-72"><span className="sr-only">Search articles</span><Search aria-hidden className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input type="search" placeholder="Search articles" value={search.q ?? ""} onChange={(event) => navigate({ search: { ...search, q: event.target.value || undefined, page: undefined }, replace: true, resetScroll: false })} className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" /></label>
          </div>
          <p aria-live="polite" className="my-8 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
          {visible.length ? <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{visible.map((post) => <BlogCard key={post.slug} post={post} />)}</div> : <div className="py-16 text-center"><h2 className="text-2xl font-bold">No articles found</h2><p className="mt-3 text-muted-foreground">Try another search or browse all insights.</p><Button variant="outline" className="mt-6" onClick={() => navigate({ search: {} })}><X />Clear filters</Button></div>}
          {totalPages > 1 && <nav aria-label="Blog pagination" className="mt-14 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => <Button key={number} aria-label={`Page ${number}`} aria-current={page === number ? "page" : undefined} variant={page === number ? "default" : "outline"} onClick={() => navigate({ search: { ...search, page: number }, resetScroll: false })}>{number}</Button>)}</nav>}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
