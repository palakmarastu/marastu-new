import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/site";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = items[i] ?? items[0];
  if (!t) return null;
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  return (
    <div className="grid gap-12 border-t border-foreground/15 pt-12 lg:grid-cols-12">
      <article key={i} className="relative animate-in fade-in slide-in-from-bottom-6 duration-700 lg:col-span-8">
        <span aria-hidden className="serif-i absolute -left-2 -top-10 select-none text-[10rem] leading-none text-accent/40 sm:-left-6">“</span>
        <h3 className="relative font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-primary">{t.title}</h3>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.body}</p>
        <div className="mt-10 flex items-center gap-4">
          <span className="grid h-12 w-12 rotate-45 place-items-center bg-lime font-display font-bold text-ink"><span className="-rotate-45">{t.name[0]}</span></span>
          <div className="ml-2"><p className="font-semibold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.location}</p></div>
        </div>
      </article>
      <div className="flex flex-col justify-between gap-8 lg:col-span-4">
        <ol className="border-t border-foreground/10">
          {items.map((x, k) => (
            <li key={x.name}><button onClick={() => setI(k)} aria-current={k === i} className={`group flex w-full items-center justify-between border-b border-foreground/10 py-3.5 text-left text-sm transition-all duration-500 ${k === i ? "pl-4 text-rose" : "hover:pl-2 hover:text-primary"}`}><span className="flex items-center gap-3 font-semibold"><span className={`h-1.5 w-1.5 rotate-45 bg-current transition ${k === i ? "opacity-100" : "opacity-0"}`} />{x.name}</span><span className="text-muted-foreground">{x.location.split(",").pop()}</span></button></li>
          ))}
        </ol>
        <div className="flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-14 w-14 place-items-center rounded-full border border-foreground/20 transition duration-500 hover:-translate-x-1 hover:border-primary"><ChevronLeft /></button>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition duration-500 hover:translate-x-1 hover:bg-rose"><ChevronRight /></button>
          <span className="ml-auto font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
