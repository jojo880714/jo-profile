import { IconBrandThreads, IconBrandGithub, IconMail } from "@tabler/icons-react";
import type { Content } from "@/lib/content";
import { social } from "@/lib/content";

export function Footer({ footer }: { footer: Content["footer"] }) {
  return (
    <footer className="border-t border-neutral-200 px-6 sm:px-8 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-neutral-500">
          {footer.copyright}
        </p>
        <ul className="flex items-center gap-4">
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
          <li>
            <a
              href={`mailto:${social.email}`}
              aria-label={footer.email}
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <IconMail size={18} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
