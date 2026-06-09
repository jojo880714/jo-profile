import type { Content } from "@/lib/content";

/**
 * Hero illustration — abstract "team of one" node graph.
 * One operator at the center (yellow ring) connected by dashed
 * lines to six labeled satellites (the systems Jo ships).
 */
function HeroIllustration() {
  // Six satellites: a mix of squares (systems / dashboards) and
  // circles (channels / communities) to vary the rhythm.
  const satellites = [
    { x: 50, y: 56, shape: "rect", label: "PM" },
    { x: 200, y: 48, shape: "rect", label: "GAS" },
    { x: 232, y: 132, shape: "circle", label: "AI" },
    { x: 200, y: 218, shape: "rect", label: "OPS" },
    { x: 50, y: 218, shape: "circle", label: "JS" },
    { x: 18, y: 132, shape: "circle", label: "TKB" },
  ];

  return (
    <svg
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern
          id="hero-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="0.6" fill="#e5e5e5" />
        </pattern>
      </defs>
      <rect width="260" height="260" fill="url(#hero-grid)" />

      {satellites.map((s, i) => (
        <line
          key={`l-${i}`}
          x1="130"
          y1="130"
          x2={s.x}
          y2={s.y}
          stroke="#a3a3a3"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      ))}

      {satellites.map((s, i) =>
        s.shape === "rect" ? (
          <g key={`n-${i}`}>
            <rect
              x={s.x - 14}
              y={s.y - 14}
              width="28"
              height="28"
              rx="4"
              fill="#ffffff"
              stroke="#0a0a0a"
              strokeWidth="1.5"
            />
            <text
              x={s.x}
              y={s.y + 3}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="7"
              fontWeight="500"
              fill="#0a0a0a"
              letterSpacing="0.05em"
            >
              {s.label}
            </text>
          </g>
        ) : (
          <g key={`n-${i}`}>
            <circle
              cx={s.x}
              cy={s.y}
              r="15"
              fill="#ffffff"
              stroke="#0a0a0a"
              strokeWidth="1.5"
            />
            <text
              x={s.x}
              y={s.y + 3}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="7"
              fontWeight="500"
              fill="#0a0a0a"
              letterSpacing="0.05em"
            >
              {s.label}
            </text>
          </g>
        )
      )}

      {/* Center: operator (one person) */}
      <circle cx="130" cy="130" r="28" fill="#ffca40" />
      <circle cx="130" cy="130" r="22" fill="#0a0a0a" />
      <text
        x="130"
        y="134"
        textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="9"
        fontWeight="500"
        fill="#ffffff"
        letterSpacing="0.05em"
      >
        JO
      </text>
    </svg>
  );
}


export function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section
      id="top"
      className="px-6 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="slogan text-[36px] leading-[1.1] sm:text-5xl md:text-[64px] md:leading-[1.05] text-neutral-900">
            {hero.slogan}
          </h1>
          <p className="max-w-xl text-base md:text-lg text-neutral-600 leading-relaxed">
            {hero.intro}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-sm justify-self-center md:justify-self-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
