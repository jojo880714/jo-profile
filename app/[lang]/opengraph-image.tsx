import { ImageResponse } from "next/og";
import { LANGS, type Lang } from "@/lib/content";

export const alt = "Jo Lin — Marketing Operations PM, builder of systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const META: Record<Lang, { slogan: string; sub: string }> = {
  en: {
    slogan: "Ship like a team of one.",
    sub: "Jo Lin · Marketing Operations PM · Builder of systems",
  },
  zh: {
    slogan: "一個人，做一支團隊的事。",
    sub: "Jo Lin · 行銷營運 PM · 系統建構者",
  },
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langKey = (LANGS.includes(lang as Lang) ? lang : "en") as Lang;
  const m = META[langKey];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: JO disc echoing the hero illustration */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              background: "#ffca40",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 999,
                background: "#0a0a0a",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              JO
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a3a3a3",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            jo-profile.vercel.app
          </div>
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          {m.slogan}
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            letterSpacing: "0.04em",
          }}
        >
          {m.sub}
        </div>
      </div>
    ),
    size,
  );
}
