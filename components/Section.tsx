import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 sm:px-8 py-16 sm:py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/**
 * Kicker label: yellow accent square + mono uppercase text. The
 * accent square is the brand colour echo so the yellow doesn't
 * sit isolated at the hero.
 */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="kicker flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-block h-[10px] w-[10px] bg-[#ffca40]"
      />
      <span>{children}</span>
    </p>
  );
}
