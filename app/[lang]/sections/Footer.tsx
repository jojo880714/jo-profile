import { IconBrandThreads, IconBrandGithub, IconMail } from "@tabler/icons-react";
import type { Content } from "@/lib/content";
import { social } from "@/lib/content";

export function Footer({ footer }: { footer: Content["footer"] }) {
  // Collapse to a clean "© / Get in touch" footer until the social URLs
  // are filled in. Once any social link is set, render the full icon row.
  const hasSocialIcons = Boolean(social.threads || social.github);

  return (
    <footer className="border-t border-neutral-200 px-6 sm:px-8 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-neutral-500">
          {footer.copyright}
        </p>

        {hasSocialIcons ? (
          <ul className="flex items-center gap-4">
            {social.threads && (
              <li>
                <a
                  href={social.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footer.threads}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <IconBrandThreads size={18} strokeWidth={1.5} />
                </a>
              </li>
            )}
            {social.github && (
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footer.github}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <IconBrandGithub size={18} strokeWidth={1.5} />
                </a>
              </li>
            )}
            {social.email && (
              <li>
                <a
                  href={`mailto:${social.email}`}
                  aria-label={footer.email}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <IconMail size={18} strokeWidth={1.5} />
                </a>
              </li>
            )}
          </ul>
        ) : (
          social.email && (
            <a
              href={`mailto:${social.email}`}
              className="font-mono text-[11px] text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              {footer.inlineCTA}
            </a>
          )
        )}
      </div>
    </footer>
  );
}
