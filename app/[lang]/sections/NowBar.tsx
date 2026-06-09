import type { Content } from "@/lib/content";

export function NowBar({ now }: { now: Content["now"] }) {
  return (
    <div className="border-t border-b border-neutral-200/70 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-x-5 gap-y-3 px-6 sm:px-8 py-4">
        <span className="inline-flex items-center rounded-sm bg-[#ffca40] px-2 py-[2px] font-mono text-[11px] uppercase tracking-wider text-neutral-900 font-medium">
          {now.label}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
          {now.prefix}
        </span>

        {now.items.map((item, i) => (
          <span
            key={`${item.context}-${item.text}-${i}`}
            className="inline-flex items-center gap-1.5 font-mono text-[11px]"
          >
            <span className="text-neutral-400 uppercase tracking-wider">
              {item.context}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-neutral-900">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
