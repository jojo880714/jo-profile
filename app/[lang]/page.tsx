import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, LANGS, type Lang } from "@/lib/content";
import { Navigation } from "@/components/Navigation";
import { Hero } from "./sections/Hero";
import { NowBar } from "./sections/NowBar";
import { Capabilities } from "./sections/Capabilities";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { OutsideWork } from "./sections/OutsideWork";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Jo Lin — Marketing Operations PM, systems builder",
    description:
      "Marketing Operations PM with five years in study abroad. One person carrying product, systems, vendor work and community in parallel — AI and automation to make one person's output feel like a small team.",
  },
  zh: {
    title: "Jo Lin — 行銷營運 PM，系統建構者",
    description:
      "做行銷營運 PM 5 年。在留遊學產業同時扛產品、系統、廠商和社群，用 AI 跟自動化把單人產出放大。下班後做 side product、辦活動、寫工具。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langKey = (LANGS.includes(lang as Lang) ? lang : "en") as Lang;
  const m = META[langKey];
  const url = `/${langKey}`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: "/en",
        "zh-Hant": "/zh",
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      siteName: "Jo Lin",
      locale: langKey === "zh" ? "zh_TW" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) {
    notFound();
  }
  const c = content[lang as Lang];

  return (
    <>
      <Navigation lang={lang as Lang} nav={c.nav} />
      <main>
        <Hero hero={c.hero} />
        <NowBar now={c.now} />
        <Capabilities capabilities={c.capabilities} />
        <About about={c.about} />
        <Projects projects={c.projects} />
        <Experience experience={c.experience} />
        <OutsideWork outsideWork={c.outsideWork} />
        <CTA cta={c.cta} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
