"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Content, Lang } from "@/lib/content";
import { resumeCTA, social } from "@/lib/content";

type NavigationProps = {
  lang: Lang;
  nav: Content["nav"];
};

export function Navigation({ lang, nav }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cvHref =
    social.cv ||
    `mailto:${social.email}?subject=${encodeURIComponent(
      "Request CV — Jo Lin",
    )}`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 sm:px-8 h-16">
        <Link
          href={`/${lang}`}
          className="text-sm font-medium tracking-tight text-neutral-900"
        >
          Jo Lin
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={cvHref}
            className="btn-press hidden sm:inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors"
          >
            {resumeCTA[lang]}
          </a>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <Link
              href="/en"
              aria-current={lang === "en" ? "page" : undefined}
              className={
                lang === "en"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900 transition-colors"
              }
            >
              {nav.langToggle.en}
            </Link>
            <span className="text-neutral-300">·</span>
            <Link
              href="/zh"
              aria-current={lang === "zh" ? "page" : undefined}
              className={
                lang === "zh"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900 transition-colors"
              }
            >
              {nav.langToggle.zh}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
