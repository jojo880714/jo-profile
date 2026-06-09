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
      kicker: "Marketing Operations PM · Systems builder",
      slogan: "One operator, team-sized output.",
      intro:
        "I'm Jo — a Marketing Operations PM with five years in study abroad. I carry product, systems, vendor work and community in parallel, using AI and automation to make one person's output feel like a small team. After hours, I ship side products, run events and build tools.",
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
      title: "Five lanes. One operator.",
      stackLabel: "Stack",
      items: [
        {
          icon: "package",
          title: "Product operations",
          description:
            "I turn fuzzy asks into specs, workflows and launches.",
          stack: "OKRs · Notion · Roadmaps · Linear",
        },
        {
          icon: "robot",
          title: "AI & automation",
          description:
            "Claude, Claude Code and Google Apps Script take the repetitive work off the table.",
          stack: "Cursor · Claude API · Webhooks",
        },
        {
          icon: "code",
          title: "Full-stack prototyping",
          description:
            "Next.js + Supabase for fast 0→1 systems that actually get used.",
          stack: "TypeScript · React · Tailwind · PostgreSQL",
        },
        {
          icon: "handshake",
          title: "Vendor & ops",
          description:
            "Vendor calls, contract review, CRM flows and ops details — I keep the moving parts aligned.",
          stack: "LINE OA · CRM · Contract review · Process docs",
        },
        {
          icon: "users",
          title: "Community building",
          description:
            "Communities from zero — events, retention, content rhythm and the long game.",
          stack: "LINE Bot · LIFF · Threads · Instagram · Figma",
        },
      ],
    },
    about: {
      kicker: "About me",
      slogan: "Systems as leverage.",
      paragraphs: [
        "I work as a generalist — ops, product, engineering and community all land on my desk. My belief is simple: tools are leverage. The fastest way to scale one operator is to turn vague human requests into systems that keep running.",
        "The part I like most is taking a messy human workflow apart: where it breaks, what repeats, what can be handed to a system. Prototype the fix, ship it, watch it save a week of work — then move to the next bottleneck.",
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
      title: "Recent things I've shipped.",
      items: [
        {
          meta: "PRODUCT · 2025",
          title: "XiXi Market (惜惜市集)",
          description:
            "A vendor onboarding and management system built with Next.js + Supabase — from data model to deployment, shipped solo.",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "A LINE-native event registration platform, wired through LIFF, Edge Functions and Tally.",
          tags: "vite · supabase · liff",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads automation v16",
          description:
            "Three-account scheduling, metric snapshots, CTA triggers and monthly recaps — all running inside one GAS project.",
          tags: "gas · meta api · sheets",
        },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Where I've been building.",
      items: [
        {
          year: "2024–",
          location: "Taipei",
          title: "Marketing Operations PM",
          org: "TKB 放洋留遊學",
          bullets: [
            "Built and launched the company's first study-abroad product line, covering product setup and enablement training for 300+ regional sales staff.",
            "Led the launch-season summer campaign for the new product line, bringing in 260 qualified leads and NT$1M+ in first-season revenue.",
            "Shipped 6 internal systems end to end (React + Firebase + Supabase + Google Apps Script + AI APIs), covering vendor lifecycle management, AI-generated content CMS, dual-version quotation automation and multi-account social analytics — including a booth recruitment system delivered in 3 weeks for a recurring 2-events × 30-booths-per-month cadence.",
            "Grew the company's Threads channel 25× (69 → 1,700 followers in one year) and built the campus ambassador program from scratch, from recruitment to operating playbook.",
          ],
        },
        {
          year: "2023–",
          location: "Side",
          title: "Founder & community operator",
          org: "Joysee Travel (揪西歡玩)",
          bullets: [
            "Founded Joysee Travel (揪西歡玩), an outdoor-activity community running 5–7 themed gatherings per year for 500+ cumulative participants — with 2,400+ Threads followers and a rare 60% female audience in the sports / outdoor space.",
            "Built JoySee Event Command Center (活動指揮中心), an event-ops system covering registration, LINE-integrated notifications, tiered member management, payment verification and Google Sheets auto-sync.",
            "Brought AI tools into live event formats, including Bluffing King (唬爛王), and built an interactive presentation system to make the on-site experience more participatory.",
          ],
        },
      ],
    },
    cta: {
      kicker: "Let's talk",
      slogan: "Let's build something useful.",
      paragraph:
        "Automating an ops process? Building a 0→1 side product? Looking for a generalist who can move across ops, product and engineering? Let's talk.",
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
      slogan: "一個人，撐起一支小隊的產出。",
      intro:
        "我是 Jo，做行銷營運 PM 5 年。白天在留遊學產業同時扛產品、系統、廠商和社群，用 AI 跟自動化把單人產出放大。下班後做 side product、辦活動，也寫一些讓自己少加班的工具。",
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
      title: "五條線，一個人扛。",
      stackLabel: "工具",
      items: [
        {
          icon: "package",
          title: "產品營運",
          description: "需求丟過來，我會拆成規格、流程和上線順序，最後把產品推到使用者手上。",
          stack: "OKRs · Notion · 路徑規劃 · 流程設計",
        },
        {
          icon: "robot",
          title: "AI 與自動化",
          description: "把重複到煩的事交給 Claude、Claude Code 和 GAS，人只留在需要判斷的地方。",
          stack: "Cursor · Claude API · Webhooks",
        },
        {
          icon: "code",
          title: "全端開發",
          description: "用 Next.js + Supabase 快速兜 0→1 系統，先讓流程跑起來，再慢慢補強。",
          stack: "TypeScript · React · Tailwind · PostgreSQL",
        },
        {
          icon: "handshake",
          title: "廠商與營運",
          description: "廠商談判、合約、流程、CRM 都碰得到；目標是讓合作不要靠記憶和人情撐。",
          stack: "LINE OA · CRM · 合約審核 · 流程文件",
        },
        {
          icon: "users",
          title: "社群經營",
          description: "社群從零跑起來之後，活動、留存、內容節奏都是長期戰。",
          stack: "LINE Bot · LIFF · Threads · Instagram · Figma",
        },
      ],
    },
    about: {
      kicker: "關於我",
      slogan: "用系統放大自己。",
      paragraphs: [
        "我是 generalist，營運、產品、技術、社群都會碰。我的工作方法很簡單：先把混亂的需求看懂，再把它變成會自己跑的系統。工具是槓桿，一個人要撐起團隊感，靠的不是硬扛，是把事情兜順。",
        "我最喜歡把混亂的人工作業拆開看：哪裡卡，哪裡重複，哪裡其實可以交給系統。先打一版能用的原型，推上線，看它省下一週工，再回頭處理下一個瓶頸。",
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
            "用 Next.js + Supabase 兜出來的攤位招商和管理系統。攤商進件、審核、通知一路跑完；架構、資料庫到部署都是我自己收。",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "LINE 裡就能完成報名的活動平台。LIFF、Edge Functions 和 Tally 串在一起，讓報名、名單、後續通知少掉很多手工。",
          tags: "vite · supabase · liff",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads 自動化系統 v16",
          description:
            "三個 Threads 帳號的排程、數據快照、CTA 觸發、月報整理，全塞進一個 GAS 專案裡跑。",
          tags: "gas · meta api · sheets",
        },
      ],
    },
    experience: {
      kicker: "經歷",
      title: "我在哪些地方實戰過。",
      items: [
        {
          year: "2024–",
          location: "Taipei",
          title: "Marketing Operations PM",
          org: "TKB 放洋留遊學",
          bullets: [
            "把公司第一條遊學產品線從 0 推出來，產品建置、流程整理，到 300+ 區域業務的銷售培訓都一起扛。",
            "主導新產品線暑期 launch 行銷，帶進 260 位精準名單，首季轉出 NT$1M+ 營收。",
            "任職期間 ship 6 套內部系統（React + Firebase + Supabase + GAS + AI APIs），涵蓋廠商生命週期管理、AI 內容 CMS、雙版本報價自動化、多帳號社群數據監控；其中招商系統 3 週上線，支援每月 2 場 × 30 攤的活動節奏。",
            "把公司 Threads 帳號一年拉到 25 倍成長（69 → 1,700 追蹤），也從零做起校園大使制度，包含招募和執行規則。",
          ],
        },
        {
          year: "2023–",
          location: "Side",
          title: "Founder & community operator",
          org: "揪西歡玩 Joysee Travel",
          bullets: [
            "創辦揪西歡玩 Joysee Travel，從戶外揪團社群慢慢跑成固定活動品牌。每年 5–7 場主題活動，累計 500+ 參與者；Threads 2,400+ 追蹤，女性受眾 60%，在運動／戶外社群裡算少見。",
            "自建 JoySee 活動指揮中心，把報名、LINE 通知、會員分層、付款審核、Google Sheets 同步全部串起來，撐住社群固定辦活動的節奏。",
            "把 AI 工具放進現場活動裡玩，像「唬爛王」即興簡報挑戰，也順手做了互動式簡報系統，讓參與者不是只坐著看。",
          ],
        },
      ],
    },
    cta: {
      kicker: "聊一下",
      slogan: "來做點有用的東西吧。",
      paragraph:
        "有一段營運流程想自動化？有 0→1 side product 想找人一起兜？或是你需要一個能在營運、產品、技術之間切換的 generalist？可以來聊。",
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
