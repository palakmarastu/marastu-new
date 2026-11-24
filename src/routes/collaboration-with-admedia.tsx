import { createFileRoute } from "@tanstack/react-router";
import { adMediaImg, contact, SITE_URL } from "@/lib/site";
import { CtaBand, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/collaboration-with-admedia")({
  head: () => ({
    meta: [
      { title: "Marastu® + AD Media — Australian Partnership" },
      { name: "description", content: "Marastu® and AD Media: local Australian strategy and storytelling combined with global-scale delivery and technical excellence." },
      { property: "og:title", content: "Marastu® + AD Media" },
      { property: "og:description", content: "A strategic collaboration delivering smarter digital solutions in Australia." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/collaboration-with-admedia/` }],
  }),
  component: Partner,
});

function Partner() {
  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="text-primary">Partnership · Australia</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-primary">Marastu® + AD Media</h1>
            <p className="mt-4 text-xl font-semibold">A Strategic Collaboration Delivering Smarter Digital Solutions</p>
            <p className="mt-6 text-muted-foreground">Marastu® is proud to announce a new partnership with AD Media, a trusted Australian digital marketing agency that has built its reputation on transparency, creativity, and measurable results for Australian businesses.</p>
            <p className="mt-4 text-muted-foreground">Together, we bring you the best of both worlds: local strategy and storytelling with global-scale delivery and technical excellence. If you're looking for a digital partner that combines strategic thinking with smart execution, let's talk.</p>
            <p className="mt-6 text-sm"><span className="font-semibold">Sydney:</span> {contact.sydney.address} · <a className="text-primary underline" href={`tel:${contact.sydney.tel}`}>{contact.sydney.phone}</a></p>
          </div>
          <img src={adMediaImg} alt="Marastu and AD Media collaboration" className="w-full rounded-none bg-secondary object-cover" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
