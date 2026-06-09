// ─────────────────────────────────────────────────────────────
// OUTSTANDING PLACEHOLDERS — fill before public launch:
//   1. social.threads  → fill in Threads profile URL
//   2. social.github   → fill in GitHub profile URL
//   3. social.cv       → upload CV PDF to /public/cv.pdf and set
//                        cv: "/cv.pdf"  (Jo hasn't made the CV yet)
//   4. Hero illustration is an inline SVG node graph in
//      app/[lang]/sections/Hero.tsx — swap for a real illustration
//      asset if/when one exists.
//
// Punctuation policy for ZH content:
//   - 逗號／句號／問號／冒號／引號／括號 全部用全形
//     （，。？：「」（））
//   - 破折號用 ——（雙）
//   - 數字範圍用半形 –（en-dash），例：5–7、2024–
//   - CJK ↔ 英文／數字 之間留半形空格
// EN content with mixed CJK: English first, Chinese in parens on
// first occurrence, e.g. "Joysee Travel (揪西歡玩)".
// ─────────────────────────────────────────────────────────────

export type Lang = "en" | "zh";

export const LANGS: Lang[] = ["en", "zh"];

export type NavItem = { href: string; label: string };

export type Capability = {
  icon: "package" | "robot" | "code" | "handshake" | "users";
  title: string;
  description: string;
  stack: string;
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
  };
  now: {
    label: string;
    prefix: string;
    items: string[];
  };
  capabilities: {
    kicker: string;
    title: string;
    items: Capability[];
    stackLabel: string;
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
    inlineCTA: string;
  };
};

const navItemsEN: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I do" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const navItemsZH: NavItem[] = [
  { href: "#about", label: "關於" },
  { href: "#what-i-do", label: "我能做什麼" },
  { href: "#projects", label: "作品" },
  { href: "#experience", label: "經歷" },
  { href: "#contact", label: "聯絡" },
];

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      items: navItemsEN,
      langToggle: { en: "EN", zh: "中" },
    },
    hero: {
      kicker: "Marketing Operations PM · Builder of systems",
      slogan: "Ship like a team of one.",
      intro:
        "I'm Jo — five years operating as a PM in the study-abroad industry. One person carrying product, systems, vendor negotiation and community at once. AI and automation are how I scale a single person into a cross-functional team. After hours I ship side products, run events and write tools.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch",
    },
    now: {
      label: "Now",
      prefix: "Currently shipping",
      items: ["Event system", "Market system", "Language-school CMS"],
    },
    capabilities: {
      kicker: "What I do",
      title: "Five lanes, one operator.",
      stackLabel: "Stack",
      items: [
        {
          icon: "package",
          title: "Product operations",
          description:
            "From spec to launch, I take products live on my own.",
          stack: "OKRs · Notion · Roadmaps · Linear",
        },
        {
          icon: "robot",
          title: "AI & automation",
          description:
            "Claude · Claude Code · Google Apps Script to remove busywork.",
          stack: "Cursor · Claude API · Webhooks",
        },
        {
          icon: "code",
          title: "Full-stack prototyping",
          description:
            "Next.js + Supabase to build 0→1 systems end to end.",
          stack: "TypeScript · React · Tailwind · PostgreSQL",
        },
        {
          icon: "handshake",
          title: "Vendor & ops",
          description:
            "Negotiating with vendors, reviewing contracts, designing the process.",
          stack: "LINE OA · CRM · Contract review · Process docs",
        },
        {
          icon: "users",
          title: "Community building",
          description:
            "Starting communities from zero — events, retention, the long game.",
          stack: "LINE Bot · LIFF · Threads · Instagram · Figma",
        },
      ],
    },
    about: {
      kicker: "About me",
      slogan: "Leverage through systems.",
      paragraphs: [
        "I work as a generalist — ops, product, engineering and community are all on my desk. My belief: tools are leverage. The cleanest way to scale a single operator is to turn fuzzy asks into systems that run themselves.",
        "My favourite part of the job is reverse-engineering a messy human process into a clean machine. Find the bottleneck, prototype the fix, ship it, watch it remove a week of work — then go find the next bottleneck.",
      ],
      metrics: [
        { value: "5+", label: "Years operating" },
        { value: "9+", label: "Systems shipped" },
        { value: "3", label: "Communities built" },
        { value: "1", label: "Team size" },
      ],
    },
    projects: {
      kicker: "Selected projects",
      title: "Things I built recently.",
      items: [
        {
          meta: "PRODUCT · 2025",
          title: "XiXi Market (惜惜市集)",
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
      kicker: "Experience",
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
          org: "Joysee Travel (揪西歡玩)",
          bullets: [
            "Founded Joysee Travel, an outdoor-activity community running 5–7 themed gatherings per year for 500+ cumulative participants — a sports-leaning audience with 2,400+ Threads followers and an unusual 60% female composition (rare for the sports / outdoor vertical).",
            "Built JoySee Event Command Center (活動指揮中心), an end-to-end event-ops system covering registration, LINE-integrated notifications, tiered member management, payment verification and Google Sheets auto-sync — supporting the community's recurring event cadence.",
            "Integrated AI tools into live event formats (e.g. the Bluffing King (唬爛王) improv presentation challenge) and built a complementary interactive presentation system to enrich on-site participant engagement.",
          ],
        },
      ],
    },
    cta: {
      kicker: "Let's talk",
      slogan: "Let's build something useful.",
      paragraph:
        "Got an ops process that's worth automating? A 0→1 side product looking for a builder? Need a generalist who can move across ops, product and engineering? Any of these — let's chat.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Download CV",
    },
    footer: {
      copyright: "© 2026 Jo Lin · Built with Next.js · Source on GitHub",
      threads: "Threads",
      github: "GitHub",
      email: "Email",
      inlineCTA: "Get in touch →",
    },
  },
  zh: {
    nav: {
      items: navItemsZH,
      langToggle: { en: "EN", zh: "中" },
    },
    hero: {
      kicker: "Marketing Operations PM · 系統建構者",
      slogan: "一個人，做一支團隊的事。",
      intro:
        "我是 Jo，做營運 PM 五年。在留遊學產業一個人同時扛產品、系統、廠商跟社群，靠 AI 跟自動化，把一個人擴成一支跨職能團隊。下班後做 side product、辦活動、寫工具。",
      ctaPrimary: "看看我的作品",
      ctaSecondary: "跟我聊聊",
    },
    now: {
      label: "Now",
      prefix: "正在做",
      items: ["活動系統", "市集系統", "語校 CMS"],
    },
    capabilities: {
      kicker: "我能做什麼",
      title: "五條線，一個人。",
      stackLabel: "工具",
      items: [
        {
          icon: "package",
          title: "產品營運",
          description: "從需求到上線，獨立把產品做出來。",
          stack: "OKRs · Notion · 路徑規劃 · 流程設計",
        },
        {
          icon: "robot",
          title: "AI 與自動化",
          description: "Claude · Claude Code · GAS——把繁雜流程自動化。",
          stack: "Cursor · Claude API · Webhooks",
        },
        {
          icon: "code",
          title: "全端開發",
          description: "Next.js + Supabase 撐 0→1 系統。",
          stack: "TypeScript · React · Tailwind · PostgreSQL",
        },
        {
          icon: "handshake",
          title: "廠商與營運",
          description: "廠商談判、合約審核、流程設計一條龍。",
          stack: "LINE OA · CRM · 合約審核 · 流程文件",
        },
        {
          icon: "users",
          title: "社群經營",
          description: "從 0 開始建立社群、辦活動、撐留存。",
          stack: "LINE Bot · LIFF · Threads · Instagram · Figma",
        },
      ],
    },
    about: {
      kicker: "關於我",
      slogan: "用系統放大自己。",
      paragraphs: [
        "我是個 generalist——營運、產品、技術、社群，這四件事我都做。我深信：工具就是槓桿。要把一個人撐成一支團隊，唯一的辦法就是把模糊的需求變成會自己跑的系統。",
        "我最享受的時刻：把一個亂七八糟的人為流程，反推成一台乾淨的機器。找出瓶頸、打一個原型、上線、看它砍掉一週的工——然後去找下一個瓶頸。",
      ],
      metrics: [
        { value: "5+", label: "年營運經驗" },
        { value: "9+", label: "上線系統" },
        { value: "3", label: "經營社群" },
        { value: "1", label: "團隊人數" },
      ],
    },
    projects: {
      kicker: "精選作品",
      title: "最近做的東西。",
      items: [
        {
          meta: "PRODUCT · 2025",
          title: "惜惜市集",
          description:
            "用 Next.js + Supabase 蓋的攤位招商與管理系統，從架構到部署一人完成。",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "LINE 原生的活動報名平台：LIFF + Edge Functions + Tally 整合。",
          tags: "vite · supabase · liff",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads 自動化系統 v16",
          description:
            "三帳號排程、指標快照、CTA 觸發、月度摘要——一個 GAS 專案搞定。",
          tags: "gas · meta api · sheets",
        },
      ],
    },
    experience: {
      kicker: "經歷",
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
    cta: {
      kicker: "聊一下",
      slogan: "來做點有用的東西吧。",
      paragraph:
        "有想自動化的營運流程嗎？想做一個 0→1 的 side product，卻找不到合適的夥伴？或者你需要一個能在營運、產品、技術之間切換的 generalist？這些都歡迎來聊。",
      ctaPrimary: "跟我聊聊",
      ctaSecondary: "下載履歷",
    },
    footer: {
      copyright: "© 2026 Jo Lin · Built with Next.js · Source on GitHub",
      threads: "Threads",
      github: "GitHub",
      email: "Email",
      inlineCTA: "聯絡我 →",
    },
  },
};

export const social = {
  email: "jojo880714@gmail.com",
  // TODO: fill in real Threads URL (e.g. https://www.threads.net/@handle)
  threads: "",
  // TODO: fill in real GitHub URL (e.g. https://github.com/handle)
  github: "",
  // TODO: Jo hasn't made the CV yet. Once ready, drop the PDF into
  // /public/cv.pdf and change this to "/cv.pdf".
  cv: "",
};
