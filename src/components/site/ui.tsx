import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, whatsappHref } from "@/lib/site";

export function useReveal(dep?: unknown) {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal:not(.in), .reveal-line:not(.in), .draw-x:not(.in), [data-reveal]:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

export function Arrow({ className = "" }: { className?: string }) {
  return <ArrowUpRight aria-hidden className={`inline-block h-[1.1em] w-[1.1em] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`} />;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`kicker flex items-center gap-3 ${className}`}><span className="h-1.5 w-1.5 rotate-45 bg-current" />{children}</p>;
}

/** Large headline revealed line-by-line with a mask. */
export function Lines({ lines, className = "" }: { lines: ReactNode[]; className?: string }) {
  return <>{lines.map((l, i) => <span key={i} className={`reveal-line ${className}`}><span style={{ transitionDelay: `${i * 90}ms` }}>{l}</span></span>)}</>;
}

type BtnTone = "rose" | "lime" | "ink" | "light";
const tones: Record<BtnTone, string> = {
  rose: "bg-rose text-primary-foreground [--btn-sweep:var(--ink)] [--btn-dot-fg:var(--rose)]",
  lime: "bg-lime text-ink [--btn-sweep:var(--background)] [--btn-sweep-fg:var(--ink)] [--btn-dot-fg:var(--lime)]",
  ink: "bg-ink text-primary-foreground [--btn-sweep:var(--rose)] [--btn-dot-fg:var(--ink)]",
  light: "border border-current/25 [--btn-sweep:var(--ink)] [--btn-dot-fg:var(--background)]",
};
export function btnCls(tone: BtnTone = "rose", extra = "") { return `group btn ${tones[tone]} ${extra}`; }
export function BtnDot() { return <span className="btn-dot"><ArrowUpRight className="h-4 w-4" /></span>; }

const ctaField = "w-full border border-ink/15 bg-ink/[0.03] px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-primary focus:bg-card focus:ring-4 focus:ring-primary/15";

export function CtaBand({ title = "Ready to Make Your Next Growth Move?", body = "Let's build a smarter digital strategy that turns your ambitions into measurable results." }: { title?: string; body?: string }) {
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
    <section className="relative overflow-hidden bg-background text-ink">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
      <div aria-hidden className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-lime/25 blur-3xl" />
      <div aria-hidden className="absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full border border-ink/10" />
      <div aria-hidden className="absolute -right-10 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-primary/20" />
      <div className="relative mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-10 sm:py-36 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow className="text-primary">Let's Marastu®</Eyebrow>
          <h2 className="text-section mt-8"><Lines lines={[title]} /></h2>
          <p className="mt-8 max-w-md border-t border-ink/15 pt-8 text-lg text-ink/70">{body}</p>
        </div>
        <form onSubmit={submit} noValidate className="self-start border border-ink/10 bg-card p-6 shadow-lift sm:p-10">
          <p className="font-display text-2xl font-bold tracking-tight">Book a strategy call</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Name *<input name="name" required maxLength={100} className={`${ctaField} mt-2`} /></label>
            <label className="block text-sm font-medium">Email *<input name="email" type="email" required maxLength={255} className={`${ctaField} mt-2`} /></label>
            <label className="block text-sm font-medium">Phone *<input name="phone" type="tel" required maxLength={20} className={`${ctaField} mt-2`} /></label>
            <label className="block text-sm font-medium">I'm interested in<select name="service" className={`${ctaField} mt-2 [&>option]:text-ink`}>{services.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Not sure yet</option></select></label>
            <label className="block text-sm font-medium sm:col-span-2">Tell us about your goals<textarea name="message" rows={4} maxLength={800} className={`${ctaField} mt-2`} /></label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm font-medium text-rose">{error}</p>}
          <button type="submit" className={btnCls("lime", "mt-6 w-full justify-center sm:w-auto")}>Send via WhatsApp <BtnDot /></button>
        </form>
      </div>
    </section>
  );
}
