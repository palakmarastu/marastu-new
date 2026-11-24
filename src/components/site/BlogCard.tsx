import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/lib/site";
import { Arrow } from "./ui";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group min-w-0">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block focus-visible:outline focus-visible:outline-ring">
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
          <span className="text-primary">{post.category}</span><span aria-hidden>·</span><span>{post.readingMinutes} min read</span>
        </div>
        <h3 className="mt-3 flex items-start justify-between gap-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">{post.title}<Arrow className="mt-1 shrink-0" /></h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <time dateTime={post.date} className="mt-5 block border-t border-border pt-4 text-xs text-muted-foreground">{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
      </Link>
    </article>
  );
}