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
  return (
    <Section id="work">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{capabilities.kicker}</Kicker>
        <h2 className="slogan text-3xl sm:text-4xl md:text-5xl text-neutral-900">
          {capabilities.title}
        </h2>
      </div>

      <ul
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {capabilities.items.map((item) => (
          <CapabilityCard key={item.title} item={item} />
        ))}
      </ul>
    </Section>
  );
}

function CapabilityCard({ item }: { item: Capability }) {
  const Icon = iconMap[item.icon];
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-5 hover:border-neutral-900 transition-colors">
      <Icon size={24} strokeWidth={1.5} className="text-neutral-900" />
      <h3 className="text-base font-medium text-neutral-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">
        {item.description}
      </p>
    </li>
  );
}
