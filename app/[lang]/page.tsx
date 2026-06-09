import { notFound } from "next/navigation";
import { content, LANGS, type Lang } from "@/lib/content";
import { Navigation } from "@/components/Navigation";
import { Hero } from "./sections/Hero";
import { NowBar } from "./sections/NowBar";
import { Capabilities } from "./sections/Capabilities";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
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
        <CTA cta={c.cta} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
