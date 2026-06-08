export type Lang = "en" | "zh";

export const LANGS: Lang[] = ["en", "zh"];

export type NavItem = { href: string; label: string };

export type Capability = {
  icon: "package" | "robot" | "code" | "handshake" | "users";
  title: string;
  description: string;
};

export type Metric = { value: string; label: string };

export type Project = {
  meta: string;
  title: string;
  description: string;
  tags: string;
};

export type ExperienceItem = {
  year: string;
  location: string;
  title: string;
  org: string;
  bullets: string[];
};

export type SkillGroup = { label: string; items: string };

export type Content = {
  nav: {
    items: NavItem[];
    langToggle: { en: string; zh: string };
  };
  hero: {
    kicker: string;
    slogan: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    illustrationTodo: string;
  };
  capabilities: {
    kicker: string;
    title: string;
    items: Capability[];
  };
  about: {
    kicker: string;
    slogan: string;
    paragraphs: string[];
    metrics: Metric[];
  };
  projects: {
    kicker: string;
    title: string;
    items: Project[];
  };
  experience: {
    kicker: string;
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: SkillGroup[];
  };
  cta: {
    kicker: string;
    slogan: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    copyright: string;
    threads: string;
    github: string;
    email: string;
  };
};

const navAnchors: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      items: navAnchors,
      langToggle: { en: "EN", zh: "中" },
    },
    hero: {
      kicker: "Operations PM · Builder of systems",
      slogan: "Ship like a team of one.",
      intro:
        "Hi, I'm Jo — a 5-year ops PM who uses AI and automation to turn one person into a cross-functional team. At a study-abroad company I run product, systems, vendor deals and community at the same time. On the side I build products, run events, and ship tools.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch",
      illustrationTodo: "TODO: hero illustration placeholder",
    },
    capabilities: {
      kicker: "// What I do",
      title: "Five lanes, one operator.",
      items: [
        {
          icon: "package",
          title: "Product operations",
          description:
            "From spec to launch, I take products live on my own.",
        },
        {
          icon: "robot",
          title: "AI & automation",
          description:
            "Claude · Claude Code · Google Apps Script to remove busywork.",
        },
        {
          icon: "code",
          title: "Full-stack prototyping",
          description:
            "Next.js + Supabase to build 0→1 systems end to end.",
        },
        {
          icon: "handshake",
          title: "Vendor & ops",
          description:
            "Negotiating with vendors, reviewing contracts, designing the process.",
        },
        {
          icon: "users",
          title: "Community building",
          description:
            "Starting communities from zero — events, retention, the long game.",
        },
      ],
    },
    about: {
      kicker: "// About me",
      slogan: "Leverage through systems.",
      paragraphs: [
        "I'm a generalist across ops, product, engineering and community. At TKB 放洋留遊學 I work as an Operations PM — PM, systems architect, vendor lead and marketing-ops in one role — using tools to scale a single person's output.",
        "I believe tools are leverage. I write code with Claude / Claude Code, run backends on Supabase, and automate ops with Google Apps Script. I love taking a fuzzy ask, breaking it into a system, and shipping it.",
      ],
      metrics: [
        { value: "5+", label: "Years in ops" },
        { value: "9+", label: "Systems shipped" },
        { value: "3", label: "Communities built" },
        { value: "1", label: "Team size" },
      ],
    },
    projects: {
      kicker: "// Selected projects",
      title: "Things I built recently.",
      items: [
        {
          meta: "PRODUCT · 2025",
          title: "惜惜市集 (XiXi Market)",
          description:
            "Vendor onboarding and management system on Next.js + Supabase. Architecture to deploy, shipped solo.",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "LINE-native event registration platform — LIFF + Edge Functions + Tally integration.",
          tags: "vite · supabase · liff",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads automation v16",
          description:
            "Three-account scheduling, metric snapshots, CTA triggers and a monthly recap, all on a single GAS project.",
          tags: "gas · meta api · sheets",
        },
      ],
    },
    experience: {
      kicker: "// Experience",
      title: "Where I've been operating.",
      items: [
        {
          year: "2024–",
          location: "Taipei",
          title: "Marketing Operations PM",
          org: "TKB 放洋留遊學",
          bullets: [
            "Designed and launched the company's first study-abroad product line from concept to market, including end-to-end product build and enablement training for 300+ regional sales staff.",
            "Drove the launch-season summer campaign for the new product line, generating 260 qualified leads and converting to NT$1M+ in first-season revenue.",
            "Shipped 6 internal systems end-to-end (React + Firebase + Supabase + Google Apps Script + AI APIs), spanning vendor lifecycle management, AI-generated content CMS, dual-version quotation automation, and multi-account social analytics — including a booth recruitment system built in 3 weeks for a recurring 2-events × 30-booths-per-month cadence.",
            "Grew the company's Threads channel 25× (69 → 1,700 followers in one year) and established a campus ambassador program from scratch, including recruitment and execution framework.",
          ],
        },
        {
          year: "2023–",
          location: "Side",
          title: "Founder & community operator",
          org: "Joysee Travel 揪西歡玩",
          bullets: [
            "Founded Joysee Travel, an outdoor-activity community running 5–7 themed gatherings per year for 500+ cumulative participants — a sports-leaning audience with 2,400+ Threads followers and an unusual 60% female composition (rare for the sports / outdoor vertical).",
            "Built JoySee 活動指揮中心 (Event Command Center), an end-to-end event-ops system covering registration, LINE-integrated notifications, tiered member management, payment verification and Google Sheets auto-sync — supporting the community's recurring event cadence.",
            "Integrated AI tools into live event formats (e.g. the “Bluffing King” improv presentation challenge) and built a complementary interactive presentation system to enrich on-site participant engagement.",
          ],
        },
      ],
    },
    skills: {
      kicker: "// Skills",
      title: "Stack I reach for.",
      groups: [
        {
          label: "OPERATIONS",
          items: "Product strategy · Vendor mgmt · OKRs · Process design",
        },
        {
          label: "DEV STACK",
          items: "Next.js · React · TypeScript · Supabase · PostgreSQL",
        },
        {
          label: "AUTOMATION",
          items: "Google Apps Script · Webhooks · API integration",
        },
        {
          label: "AI TOOLS",
          items: "Claude · Claude Code · Cursor · Claude API",
        },
        {
          label: "DESIGN & CONTENT",
          items: "Figma · Canva · Threads · Instagram · Short-form video",
        },
        {
          label: "COMMUNITY",
          items: "LINE Bot · LIFF · Event design · Community retention",
        },
      ],
    },
    cta: {
      kicker: "// Let's talk",
      slogan: "Let's build something useful.",
      paragraph:
        "Got an ops process worth automating? A 0→1 side product you want to ship? Need a generalist who can move across ops, product and engineering? I'd love to chat.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Download CV",
    },
    footer: {
      copyright: "© 2026 Jo Lin · Built with Next.js · Source on GitHub",
      threads: "Threads",
      github: "GitHub",
      email: "Email",
    },
  },
  zh: {
    nav: {
      items: [
        { href: "#about", label: "About" },
        { href: "#work", label: "Work" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
      ],
      langToggle: { en: "EN", zh: "中" },
    },
    hero: {
      kicker: "Operations PM · Builder of systems",
      slogan: "一個人,一支團隊。",
      intro:
        "Hi, I'm Jo — 5 年行銷營運 PM，用 AI 與自動化把一個人變成一支跨職能團隊。在留遊學產業同時負責產品、系統、廠商談判與社群,業餘做產品、辦活動、寫工具。",
      ctaPrimary: "看看我的作品",
      ctaSecondary: "跟我聊聊",
      illustrationTodo: "TODO: hero illustration placeholder",
    },
    capabilities: {
      kicker: "// What I do",
      title: "五條線,一個人。",
      items: [
        {
          icon: "package",
          title: "Product operations",
          description: "從需求到上線,獨立把產品做出來。",
        },
        {
          icon: "robot",
          title: "AI & automation",
          description: "Claude · Claude Code · GAS 把流程自動化。",
        },
        {
          icon: "code",
          title: "Full-stack prototyping",
          description: "Next.js + Supabase 蓋 0→1 系統。",
        },
        {
          icon: "handshake",
          title: "Vendor & ops",
          description: "廠商談判、合約審核、流程設計。",
        },
        {
          icon: "users",
          title: "Community building",
          description: "從 0 開始建立社群、辦活動、撐留存。",
        },
      ],
    },
    about: {
      kicker: "// About me",
      slogan: "用系統放大自己。",
      paragraphs: [
        "我是橫跨營運、產品、技術、社群的多面手。在 TKB 放洋留遊學任 Operations PM,身兼 PM、系統架構、廠商談判、行銷營運,用工具放大一個人的產出。",
        "我相信工具是 leverage。用 Claude / Claude Code 寫程式、用 Supabase 撐後端、用 GAS 自動化營運。我喜歡把模糊的需求拆成可執行的系統,再把它做出來。",
      ],
      metrics: [
        { value: "5+", label: "年營運經驗" },
        { value: "9+", label: "上線系統" },
        { value: "3", label: "經營社群" },
        { value: "1", label: "團隊人數" },
      ],
    },
    projects: {
      kicker: "// Selected projects",
      title: "最近做的東西。",
      items: [
        {
          meta: "PRODUCT · 2025",
          title: "惜惜市集",
          description:
            "Next.js + Supabase 攤位招商與管理系統,從架構到部署一人完成。",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "LINE 活動報名平台,LIFF + Edge Functions + Tally 整合。",
          tags: "vite · supabase · liff",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads 自動化系統 v16",
          description:
            "三帳號排程、指標快照、CTA 觸發、月度摘要,一個 GAS 專案搞定。",
          tags: "gas · meta api · sheets",
        },
      ],
    },
    experience: {
      kicker: "// Experience",
      title: "我待過的地方。",
      items: [
        {
          year: "2024–",
          location: "Taipei",
          title: "Marketing Operations PM",
          org: "TKB 放洋留遊學",
          bullets: [
            "設計並推出公司首條遊學產品線，從產品建置到全區 300+ 業務的銷售培訓。",
            "主導新產品線的暑期 launch 行銷，帶入 260 位精準客戶名單，首季轉換營收破百萬。",
            "任職期間端到端 ship 6 套內部系統（React + Firebase + Supabase + GAS + AI APIs），涵蓋廠商生命週期管理、AI 內容生成 CMS、雙版本報價自動化、多帳號社群數據監控，含 3 週交付的招商系統，支援每月 2 場 × 30 攤的講座節奏。",
            "公司 Threads 帳號一年成長 25 倍（69 → 1,700 追蹤），從 0 創立校園大使制度與執行辦法。",
          ],
        },
        {
          year: "2023–",
          location: "Side",
          title: "Founder & community operator",
          org: "揪西歡玩 Joysee Travel",
          bullets: [
            "創辦揪西歡玩 Joysee Travel，戶外活動揪團社群，年辦 5–7 場主題活動，累計 500+ 參與者；社群定位偏運動／戶外，Threads 累積 2,400+ 追蹤、受眾女性佔 60%（運動社群中少見的性別組合）。",
            "自建 JoySee 活動指揮中心，端到端活動營運系統：報名、LINE 自動化通知、分層會員管理、付款憑證審核、Google Sheets 自動同步，支援社群常態活動運作。",
            "將 AI 工具導入現場活動體驗（如「唬爛王」即興簡報挑戰），並自建互動式簡報系統提升現場參與感。",
          ],
        },
      ],
    },
    skills: {
      kicker: "// Skills",
      title: "我常用的工具。",
      groups: [
        {
          label: "OPERATIONS",
          items: "Product strategy · Vendor mgmt · OKRs · Process design",
        },
        {
          label: "DEV STACK",
          items: "Next.js · React · TypeScript · Supabase · PostgreSQL",
        },
        {
          label: "AUTOMATION",
          items: "Google Apps Script · Webhooks · API integration",
        },
        {
          label: "AI TOOLS",
          items: "Claude · Claude Code · Cursor · Claude API",
        },
        {
          label: "DESIGN & CONTENT",
          items: "Figma · Canva · Threads · IG · 短影音",
        },
        {
          label: "COMMUNITY",
          items: "LINE Bot · LIFF · 活動企劃 · 社群留存",
        },
      ],
    },
    cta: {
      kicker: "// Let's talk",
      slogan: "來做點有用的東西吧。",
      paragraph:
        "有想自動化的營運流程？有想做 0→1 的 side product？需要一個橫跨營運、產品、技術的 generalist？歡迎聊聊。",
      ctaPrimary: "跟我聊聊",
      ctaSecondary: "下載履歷",
    },
    footer: {
      copyright: "© 2026 Jo Lin · Built with Next.js · Source on GitHub",
      threads: "Threads",
      github: "GitHub",
      email: "Email",
    },
  },
};

export const social = {
  email: "jojo880714@gmail.com",
  threads: "https://www.threads.net/@jojo880714",
  github: "https://github.com/jojowu",
  cv: "#",
};
