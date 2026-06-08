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
      className={`scroll-mt-20 px-6 sm:px-8 py-16 sm:py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}
