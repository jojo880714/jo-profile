import type { Content } from "@/lib/content";

export function NowBar({ now }: { now: Content["now"] }) {
  return (
    <div className="border-t border-b border-neutral-100 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-6 sm:px-8 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-600">
        <span className="inline-flex items-center rounded-sm bg-[#ffca40] px-2 py-[2px] text-neutral-900 font-medium tracking-wider">
          {now.label}
        </span>
        <span className="text-neutral-500">{now.prefix}</span>
        <span className="text-neutral-300" aria-hidden="true">
          ·
        </span>
        {now.items.map((item, i) => (
          <span key={item} className="flex items-center gap-x-4">
            <span className="text-neutral-900">{item}</span>
            {i < now.items.length - 1 && (
              <span className="text-neutral-300" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
