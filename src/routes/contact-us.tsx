import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { contact, founderPhoto, services, SITE_URL, whatsappHref } from "@/lib/site";
import { Arrow, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Marastu® — Book a Strategy Call" },
      { name: "description", content: "Talk to Marastu® in Ahmedabad or Sydney. Introduce yourself and we'll respond within 24 hours." },
      { property: "og:title", content: "Contact Marastu®" },
      { property: "og:description", content: "Let's start the conversation — we respond within 24 hours." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact-us/` }],
  }),
  component: Contact,
});

const field = "w-full rounded-2xl border border-input bg-card px-4 py-3.5 text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20";

function Contact() {
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim(), email = String(f.get("email") || "").trim(), phone = String(f.get("phone") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || phone.length < 6) { setError("Please add your name, a valid email and phone number."); return; }
    setError("");
    const msg = `Hi Marastu, I'm ${name}.\nEmail: ${email}\nPhone: ${phone}\nInterested in: ${f.get("service")}\n${String(f.get("message") || "").slice(0, 800)}`;
    window.open(whatsappHref(msg), "_blank", "noopener");
  }
  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow className="text-primary">Contact us</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-primary">Namaste,</h1>
          <p className="mt-4 text-xl">It's time to transform your challenges into opportunities.</p>
          <div className="mt-8 flex items-center gap-4 rounded-lg bg-secondary p-4">
            <img src={founderPhoto} alt="Rahul Doshi" className="h-16 w-16 rounded-full bg-lime object-cover" />
            <p className="text-sm"><span className="block font-display text-lg font-semibold text-primary">Hi! I'm Rahul, Founder & CEO of Marastu®.</span>Let's start the conversation. Introduce yourself, and we'll respond within 24 hours.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[contact.india, contact.sydney].map((o) => (
              <div key={o.city} className="rounded-lg border border-border bg-card p-6">
                <p className="font-display text-lg font-semibold text-primary">{o.city}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.address}</p>
                <a href={`tel:${o.tel}`} className="mt-3 inline-flex items-center gap-2 font-semibold text-primary"><Phone className="h-4 w-4" />{o.phone}</a>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} noValidate className="rounded-none border border-border bg-card p-6 shadow-lift sm:p-10 lg:col-span-7">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary">Book a strategy call</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Name *<input name="name" required maxLength={100} className={`${field} mt-2`} /></label>
            <label className="block text-sm font-medium">Email *<input name="email" type="email" required maxLength={255} className={`${field} mt-2`} /></label>
            <label className="block text-sm font-medium">Phone *<input name="phone" type="tel" required maxLength={20} className={`${field} mt-2`} /></label>
            <label className="block text-sm font-medium">I'm interested in<select name="service" className={`${field} mt-2`}>{services.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Not sure yet</option></select></label>
            <label className="block text-sm font-medium sm:col-span-2">Tell us about your goals<textarea name="message" rows={5} maxLength={800} className={`${field} mt-2`} /></label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm font-medium text-destructive">{error}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-4 font-semibold text-primary-foreground shadow-cta transition hover:scale-[1.03]">Send via WhatsApp <MessageCircle className="h-5 w-5" /></button>
            <a href={`tel:${contact.india.tel}`} className="group inline-flex items-center gap-2 font-semibold text-primary">Or call {contact.india.phone} <Arrow /></a>
          </div>
        </form>
      </div>
    </section>
  );
}
