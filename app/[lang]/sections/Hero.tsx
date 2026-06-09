import type { Content } from "@/lib/content";

function HeroIllustration() {
  const satellites = [
    { x: 50, y: 56, shape: "rect" },
    { x: 200, y: 48, shape: "rect" },
    { x: 232, y: 132, shape: "circle" },
    { x: 200, y: 218, shape: "rect" },
    { x: 50, y: 218, shape: "circle" },
    { x: 18, y: 132, shape: "circle" },
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
          <circle cx="10" cy="10" r="0.6" fill="#d4d4d4" />
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
          <rect
            key={`n-${i}`}
            x={s.x - 12}
            y={s.y - 12}
            width="24"
            height="24"
            rx="4"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1.5"
          />
        ) : (
          <circle
            key={`n-${i}`}
            cx={s.x}
            cy={s.y}
            r="13"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1.5"
          />
        ),
      )}

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
      className="px-6 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28 md:pt-24 md:pb-36"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
        <div className="flex flex-col gap-5 md:gap-7">
          {hero.availability && (
            <span className="availability-badge self-start">
              <span className="dot" aria-hidden="true" />
              <span>{hero.availability}</span>
            </span>
          )}
          <p className="kicker">{hero.kicker}</p>
          <h1 className="slogan slogan-hero text-neutral-900">
            {hero.slogan}
          </h1>
          <p className="max-w-xl text-base md:text-lg text-neutral-600 leading-relaxed">
            {hero.intro}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="btn-press inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex items-center justify-center rounded-full border border-neutral-900 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white"
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
