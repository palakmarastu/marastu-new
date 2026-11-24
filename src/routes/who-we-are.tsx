import { createFileRoute, Link } from "@tanstack/react-router";
import { founderPhoto, SITE_URL, contact } from "@/lib/site";
import { Arrow, CtaBand, Eyebrow, useReveal } from "@/components/site/ui";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "About Marastu® — Who We Are" },
      { name: "description", content: "Meet Marastu®, the Ahmedabad-based digital marketing agency led by founder Rahul Doshi, serving clients in the USA, UK, Australia, UAE and India." },
      { property: "og:title", content: "About Marastu® — Who We Are" },
      { property: "og:description", content: "The people and principles behind Marastu®." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/who-we-are/` }],
  }),
  component: About,
});

function About() {
  useReveal();
  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow className="text-primary">Who we are</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-primary">Namaste. We fix your <span className="text-accent">Marketing Vastu.</span></h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">It's time to transform your challenges into opportunities. Marastu® brings well-rounded perspectives to achieve effective marketing outcomes — with strategy, technical depth and honest communication.</p>
          </div>
          <figure className="reveal relative overflow-hidden rounded-none bg-lime lg:col-span-5">
            <img src={founderPhoto} alt="Rahul Doshi, Founder & CEO of Marastu®" className="w-full object-cover" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/90 p-4 backdrop-blur"><p className="font-display font-semibold text-primary">Rahul Doshi</p><p className="text-sm text-muted-foreground">Founder & CEO · Chief Link Building Strategist</p></figcaption>
          </figure>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[["Ahmedabad", contact.india.address], ["Sydney", `${contact.sydney.address} — ${contact.sydney.note}.`], ["Markets", "USA · UK · Australia · UAE · India"]].map(([t, b]) => (
            <div key={t} className="reveal rounded-none border border-border bg-card p-8"><h2 className="font-display text-2xl font-semibold text-primary">{t}</h2><p className="mt-3 text-muted-foreground">{b}</p></div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl"><Link to="/collaboration-with-admedia" className="group inline-flex items-center gap-2 font-semibold text-primary">About our AD Media partnership <Arrow /></Link></div>
      </section>
      <CtaBand />
    </>
  );
}
