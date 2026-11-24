import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPostBySlug, blogPosts, SITE_URL } from "@/lib/site";
import { BlogCard } from "@/components/site/BlogCard";
import { CtaBand, Eyebrow, useReveal } from "@/components/site/ui";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog_/$slug")({
  beforeLoad: ({ params }) => { if (!blogPostBySlug(params.slug)) throw notFound(); },
  head: ({ params }) => {
    const post = blogPostBySlug(params.slug);
    const title = post ? `${post.title} — Marastu® Insights` : "Article not found — Marastu®";
    const description = post?.excerpt ?? "This Marastu article is unavailable.";
    return {
      meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: `${SITE_URL}/blog/${params.slug}/` }],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}/` }],
      scripts: post ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.date, author: { "@type": "Organization", name: "Marastu®" } }) }] : [],
    };
  },
  notFoundComponent: () => <section className="px-5 py-40 text-center"><h1 className="text-4xl font-bold text-primary">Article not found</h1><Link to="/blog" className="mt-6 inline-block font-bold text-primary">Back to insights</Link></section>,
  component: Article,
});

function Article() {
  const { slug } = Route.useParams();
  useReveal(slug);
  const post = blogPostBySlug(slug);
  if (!post) return null;
  const related = [...blogPosts.filter((item) => item.slug !== slug && item.category === post.category), ...blogPosts.filter((item) => item.slug !== slug && item.category !== post.category)].slice(0, 3);
  return <>
    <header className="mx-auto max-w-[90rem] px-5 pb-12 pt-32 sm:px-10 sm:pt-40">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><ArrowLeft className="h-4 w-4" />All insights</Link>
      <Eyebrow className="mt-10 text-primary">{post.category}</Eyebrow>
      <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[1.12] text-primary sm:text-5xl lg:text-6xl">{post.title}</h1>
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"><span className="font-bold text-foreground">Marastu®</span><time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time><span>{post.readingMinutes} min read</span></div>
    </header>
    <div className="mx-auto max-w-[90rem] px-5 sm:px-10"><img src={post.image} alt={post.title} className="aspect-[16/9] max-h-[36rem] w-full object-cover" /></div>
    <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:py-24">
      <aside className="lg:col-span-3"><nav aria-label="In this article" className="border-t border-border pt-6 lg:sticky lg:top-28"><h2 className="text-sm font-bold text-primary">In this article</h2><ol className="mt-5 space-y-3">{post.toc.filter((item) => item.level === 2).map((item) => <li key={item.id}><a href={`#${item.id}`} className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary">{item.title}</a></li>)}</ol></nav></aside>
      <article className="blog-prose min-w-0 max-w-3xl lg:col-span-8" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    <section className="bg-secondary px-5 py-20 sm:px-10"><div className="mx-auto max-w-[90rem]"><Eyebrow className="text-primary">Keep reading</Eyebrow><h2 className="mb-10 mt-4 text-3xl font-bold text-primary sm:text-4xl">More insights.</h2><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></div></section>
    <CtaBand />
  </>;
}