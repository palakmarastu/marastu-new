/**
 * Original "Vastu growth mandala": a 3×3 Vastu Purusha grid inside a compass of
 * eight directions, with a rising growth path through the centre — the brand idea
 * of fixing your "Marketing Vastu" made visual.
 */
export function HeroGraphic({ y = 0 }: { y?: number }) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const path = [[120, 380], [175, 330], [215, 345], [262, 268], [318, 284], [372, 182], [420, 120]];
  return (
    <div className="relative aspect-square w-full" style={{ transform: `translateY(${y * -0.06}px) rotate(${y * 0.01}deg)` }}>
      <svg viewBox="0 0 540 540" className="h-full w-full overflow-visible" role="img" aria-label="Vastu-inspired compass with a rising growth line">
        <defs>
          <linearGradient id="mg-line" x1="0" x2="1" y1="1" y2="0"><stop offset="0" stopColor="var(--accent)" /><stop offset="1" stopColor="var(--lime)" /></linearGradient>
          <radialGradient id="mg-glow"><stop offset="0" stopColor="var(--accent)" stopOpacity=".45" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></radialGradient>
          <path id="mg-ring" d="M270 270 m-232 0 a232 232 0 1 1 464 0 a232 232 0 1 1 -464 0" />
        </defs>
        <circle cx="270" cy="270" r="250" fill="url(#mg-glow)" />
        <g className="animate-spin-slow" style={{ transformOrigin: "270px 270px" }}>
          <text fill="currentColor" opacity=".55" fontSize="13" letterSpacing="6" fontWeight="600"><textPath href="#mg-ring">LET US FIX YOUR MARKETING VASTU · STRATEGY · CREATIVITY · TECHNOLOGY · </textPath></text>
        </g>
        <circle cx="270" cy="270" r="210" fill="none" stroke="currentColor" strokeOpacity=".18" />
        <circle cx="270" cy="270" r="150" fill="none" stroke="currentColor" strokeOpacity=".12" strokeDasharray="2 6" />
        {dirs.map((d, i) => {
          const a = (i * 45 - 90) * (Math.PI / 180);
          const x1 = 270 + Math.cos(a) * 150, y1 = 270 + Math.sin(a) * 150, x2 = 270 + Math.cos(a) * 210, y2 = 270 + Math.sin(a) * 210;
          return <g key={d}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity={i % 2 ? ".2" : ".45"} /><text x={270 + Math.cos(a) * 190} y={270 + Math.sin(a) * 190 + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" opacity=".5">{i % 2 ? "" : d}</text></g>;
        })}
        {/* Vastu Purusha grid */}
        <g transform="rotate(45 270 270)">
          <rect x="150" y="150" width="240" height="240" fill="none" stroke="currentColor" strokeOpacity=".22" />
          {[230, 310].map((v) => <g key={v}><line x1={v} y1="150" x2={v} y2="390" stroke="currentColor" strokeOpacity=".12" /><line x1="150" y1={v} x2="390" y2={v} stroke="currentColor" strokeOpacity=".12" /></g>)}
        </g>
        <rect x="150" y="150" width="240" height="240" fill="none" stroke="currentColor" strokeOpacity=".3" />
        {[230, 310].map((v) => <g key={v}><line x1={v} y1="150" x2={v} y2="390" stroke="currentColor" strokeOpacity=".14" /><line x1="150" y1={v} x2="390" y2={v} stroke="currentColor" strokeOpacity=".14" /></g>)}
        <rect x="230" y="230" width="80" height="80" fill="var(--lime)" opacity=".9" className="hero-pop" style={{ animationDelay: ".9s" }} />
        <path d={`M${path.map((p) => p.join(" ")).join(" L")}`} fill="none" stroke="url(#mg-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="hero-draw" />
        {path.map(([x, yy], i) => <circle key={i} cx={x} cy={yy} r={i === path.length - 1 ? 9 : 4} fill={i === path.length - 1 ? "var(--rose)" : "currentColor"} className="hero-pop" style={{ animationDelay: `${0.4 + i * 0.14}s` }} />)}
        <circle cx="420" cy="120" r="22" fill="none" stroke="var(--rose)" strokeOpacity=".5" className="hero-pop" style={{ animationDelay: "1.5s" }} />
      </svg>
    </div>
  );
}
