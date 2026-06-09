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
      className={`scroll-mt-24 px-6 sm:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28 md:pt-24 md:pb-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/**
 * Kicker label: a 6px yellow accent square + a small, restrained
 * label. The accent square is the brand colour echo so the yellow
 * isn't isolated at the hero. CJK rendering drops the uppercase
 * treatment via globals.css (looks heavy on Chinese).
 */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="kicker flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-block h-[6px] w-[6px] rounded-[2px] bg-[#ffca40]"
      />
      <span>{children}</span>
    </p>
  );
}
