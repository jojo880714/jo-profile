import {
  IconPackage,
  IconRobot,
  IconCode,
  IconHeartHandshake,
  IconUsers,
} from "@tabler/icons-react";
import { Section, Kicker } from "@/components/Section";
import type { Capability, Content } from "@/lib/content";

const iconMap = {
  package: IconPackage,
  robot: IconRobot,
  code: IconCode,
  handshake: IconHeartHandshake,
  users: IconUsers,
} as const;

export function Capabilities({
  capabilities,
}: {
  capabilities: Content["capabilities"];
}) {
  const [feature, ...rest] = capabilities.items;

  return (
    <Section id="what-i-do">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{capabilities.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {capabilities.title}
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {feature && (
          <FeatureCard item={feature} stackLabel={capabilities.stackLabel} />
        )}
        {rest.map((item) => (
          <CapabilityCard
            key={item.title}
            item={item}
            stackLabel={capabilities.stackLabel}
          />
        ))}
      </ul>
    </Section>
  );
}

function FeatureCard({
  item,
  stackLabel,
}: {
  item: Capability;
  stackLabel: string;
}) {
  const Icon = iconMap[item.icon];
  return (
    <li className="card-surface md:col-span-2 p-7 md:p-9 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
          <Icon size={20} strokeWidth={1.5} />
        </span>
        <h3 className="text-xl md:text-2xl font-medium text-neutral-900 tracking-tight">
          {item.title}
        </h3>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-neutral-700 max-w-xl">
        {item.description}
      </p>
      {item.proof && (
        <p className="text-sm text-neutral-700 max-w-xl">
          <span className="hl">{item.proof}</span>
        </p>
      )}
      <div className="mt-auto pt-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
          {stackLabel}
        </p>
        <p className="font-mono text-[12px] text-neutral-600 leading-relaxed">
          {item.stack}
        </p>
      </div>
    </li>
  );
}

function CapabilityCard({
  item,
  stackLabel,
}: {
  item: Capability;
  stackLabel: string;
}) {
  const Icon = iconMap[item.icon];
  return (
    <li className="card-surface p-6 flex flex-col gap-3">
      <Icon size={22} strokeWidth={1.5} className="text-neutral-900" />
      <h3 className="text-base font-medium text-neutral-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">
        {item.description}
      </p>
      {item.proof && (
        <p className="text-[13px] text-neutral-700 leading-relaxed">
          <span className="hl">{item.proof}</span>
        </p>
      )}
      <div className="mt-auto pt-3 border-t border-neutral-200/70">
        <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
          {stackLabel}
        </p>
        <p className="font-mono text-[11px] text-neutral-500 leading-relaxed">
          {item.stack}
        </p>
      </div>
    </li>
  );
}
