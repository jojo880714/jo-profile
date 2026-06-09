import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Per-locale metadata lives on [lang]/page.tsx. Root metadata is the
// fallback used by /_not-found and the root redirect.
export const metadata: Metadata = {
  metadataBase: new URL("https://jo-profile.vercel.app"),
  title: "Jo Lin — Marketing Operations PM, systems builder",
  description:
    "Marketing Operations PM with five years in study abroad — AI and automation to make one person's output feel like a small team. At TKB 放洋留遊學. Founder of Joysee Travel (揪西歡玩).",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read pathname from the middleware-injected header so we can set
  // <html lang> server-side without hardcoding "en".
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const htmlLang = pathname.startsWith("/zh") ? "zh-Hant" : "en";

  return (
    <html
      lang={htmlLang}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
