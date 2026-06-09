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
// EN content with mixed CJK: keep Chinese brand names (TKB 放洋留遊學,
// Joysee Travel 揪西歡玩) verbatim, don't romanize "Fun Study Abroad".
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

export type MetricGroup = { label: string; items: Metric[] };

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

export type ReadingItem = { title: string; note: string };

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
    metricGroups: MetricGroup[];
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
    education: string;
  };
  outsideWork: {
    kicker: string;
    title: string;
    paragraph: string;
    readingLabel: string;
    reading: ReadingItem[];
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
      items: [
        "Event system",
        "Market system",
        "Language-school CMS",
        "Cursor + Claude Code workflow",
        "Joysee indoor event",
      ],
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
        "I build operating systems for marketing teams. At TKB 放洋留遊學, I launched the company's first study tour product line, trained 300+ salespeople, and turned a summer launch into 260 leads and NT$1M+ first-quarter revenue. I also shipped 6 internal systems across vendor management, quote automation, AI content CMS, social monitoring and partnership ops.",
        "My work started in marketing, but the real leverage came when I began turning repeatable tasks into software. SOPs help teams remember; systems help teams move. I started with Google Apps Script, then moved into React, Supabase, Firebase, LINE Bot, Claude, Cursor and Claude Code to build tools that remove operational drag.",
        "Now I work like a team of one: one operator, many systems, fast feedback loops. I like messy workflows, scattered data and jobs still held together by spreadsheets and memory. Next, I want to keep building at the edge of marketing, operations, AI automation and community.",
      ],
      metricGroups: [
        {
          label: "Profile",
          items: [
            { value: "5+", label: "Years operating" },
            { value: "2", label: "Communities built" },
            { value: "1", label: "Team of one" },
            { value: "3+", label: "Side projects shipped" },
          ],
        },
        {
          label: "Track record",
          items: [
            { value: "6", label: "Internal systems shipped" },
            { value: "NT$1M+", label: "First-quarter revenue" },
            { value: "500+", label: "Community participants" },
            { value: "25×", label: "Threads growth in a year" },
          ],
        },
      ],
    },
    projects: {
      kicker: "Selected projects",
      title: "Recent things I've shipped.",
      items: [
        {
          meta: "SIDE PROJECT · 2025",
          title: "XiXi Market (惜惜市集)",
          description:
            "Built a booth recruitment and management system for a friend's offline market — product structure, vendor intake, admin workflow, email delivery and deployment, end to end.",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "LINE-native event registration platform for Joysee Travel. LIFF, Edge Functions and Tally integration connect registration, member data, notifications and event ops into one flow.",
          tags: "liff · edge functions · tally · supabase · line bot",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads automation v16",
          description:
            "Multi-account social ops were too manual — scheduling, monitoring, reporting, engagement all needed attention. Moved the whole workflow into one Google Apps Script project.",
          tags: "gas · threads api · sheets · claude api",
        },
        {
          meta: "INTERNAL · 2024",
          title: "Vendor lifecycle system",
          description:
            "Built an internal vendor workflow for TKB 放洋留遊學 — turned scattered Drive files and Sheets into one trackable process for sourcing, evaluation, contracts, review and handover.",
          tags: "react · firebase · gas · claude api · drive api",
        },
        {
          meta: "INTERNAL · 2024",
          title: "Dual-version quotation engine",
          description:
            "A quotation engine that separates internal and client-facing versions, connecting pricing rules, margin logic, seasonal adjustments, PDF generation and Drive filing.",
          tags: "gas · sheets · drive · pdf generation",
        },
        {
          meta: "INTERNAL · 2024",
          title: "AI content CMS",
          description:
            "AI-assisted CMS for study tour consultants. Turns structured school data into reusable comparison pages, sales materials and pre-consultation content via Claude API.",
          tags: "react · typescript · supabase · claude api · cms",
        },
        {
          meta: "INTERNAL · 2024",
          title: "TKB partnership booth system",
          description:
            "A 3-week TKB-internal booth recruitment system, supporting a 2-events × 30-booths-per-month seminar cadence. Separate from XiXi Market.",
          tags: "gas · sheets · forms · drive · event ops",
        },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Where I've been building.",
      education:
        "B.B.A., National Taipei University of Business (國立台北商業大學) · 2017–2021",
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
        {
          year: "2023–2024",
          location: "Taipei",
          title: "Independent marketing consultant & early entrepreneurial projects",
          org: "Self-directed",
          bullets: [
            "Built websites, landing pages, SEO plans and content systems for brands across education, events, lifestyle and local services.",
            "Shipped 10+ WordPress sites and campaign pages from brief to launch, covering information architecture, copywriting, tracking setup and conversion flow.",
            "Ran early product and community experiments across events, content and social — 10 large social events, 500+ participants, and content reaching 100K+ monthly organic views.",
          ],
        },
        {
          year: "2021–2023",
          location: "Taipei",
          title: "Marketing Specialist",
          org: "ASUS Cloud",
          bullets: [
            "Built campaign pages, SEO content, newsletters and social posts for a B2B cloud product line, keeping web and social channels on a consistent publishing rhythm.",
            "Improved WordPress pages, campaign tracking, content structure and keyword coverage, contributing to 35% YoY organic traffic growth.",
            "Supported webinars and product events from registration flow to post-event follow-up, including one event with 600+ professional attendees.",
          ],
        },
      ],
    },
    outsideWork: {
      kicker: "Off the clock",
      title: "People, not networking.",
      paragraph:
        "Outside work, I design ways for people to meet without making it feel like networking. Outdoor trips, casual games, indoor activities and improv-style events all feed back into how I think about product. People join for the activity, but they return for the feeling.",
      readingLabel: "Reading & learning",
      reading: [
        {
          title: "Working in Public",
          note: "On public creation, community trust and long-term participation — feeds my thinking on community-led product.",
        },
        {
          title: "Shape Up",
          note: "How Basecamp turns fuzzy asks into shippable product bets. Fits my product + systems workflow.",
        },
        {
          title: "High Output Management",
          note: "Andy Grove's playbook on org leverage — turning one person's judgement into a team's repeatable process.",
        },
        {
          title: "Cursor + Claude Code workflow",
          note: "Continuously refining my AI-assisted development flow so prototypes, internal tools and side projects ship faster.",
        },
        {
          title: "Prompt engineering for operations",
          note: "Prompts not as copywriting toys, but inside reporting, document triage, CMS, event interaction and ops flows.",
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
      items: [
        "活動系統",
        "市集系統",
        "語校 CMS",
        "Cursor + Claude Code workflow",
        "Joysee 室內活動",
      ],
    },
    capabilities: {
      kicker: "我能做什麼",
      title: "五條線，一個人扛。",
      stackLabel: "工具",
      items: [
        {
          icon: "package",
          title: "產品營運",
          description:
            "需求丟過來，我會拆成規格、流程和上線順序，最後把產品推到使用者手上。",
          stack: "OKRs · Notion · 路徑規劃 · 流程設計",
        },
        {
          icon: "robot",
          title: "AI 與自動化",
          description:
            "把重複到煩的事交給 Claude、Claude Code 和 GAS，人只留在需要判斷的地方。",
          stack: "Cursor · Claude API · Webhooks",
        },
        {
          icon: "code",
          title: "全端開發",
          description:
            "用 Next.js + Supabase 快速兜 0→1 系統，先讓流程跑起來，再慢慢補強。",
          stack: "TypeScript · React · Tailwind · PostgreSQL",
        },
        {
          icon: "handshake",
          title: "廠商與營運",
          description:
            "廠商談判、合約、流程、CRM 都碰得到；目標是讓合作不要靠記憶和人情撐。",
          stack: "LINE OA · CRM · 合約審核 · 流程文件",
        },
        {
          icon: "users",
          title: "社群經營",
          description:
            "社群從零跑起來之後，活動、留存、內容節奏都是長期戰。",
          stack: "LINE Bot · LIFF · Threads · Instagram · Figma",
        },
      ],
    },
    about: {
      kicker: "關於我",
      slogan: "用系統放大自己。",
      paragraphs: [
        "我一路從行銷、活動、社群做進營運系統。前面幾年做品牌、內容、SEO、活動跟轉換；到 TKB 放洋留遊學後，開始一邊推遊學產品線，一邊把廠商、報價、內容、社群、招商流程寫成內部工具。",
        "後來越做越確定一件事：很多團隊卡住，不是策略不夠，而是流程太靠人撐。SOP 可以提醒人怎麼做，但系統才會讓事情穩定發生。我從 Google Apps Script 開始自動化，慢慢走到 React + Supabase。",
        "現在的工作方式比較像 team of one。一個 operator，背後是一組系統。先看資料怎麼流、誰會接手、哪裡容易斷，再決定什麼該變成軟體。接下來想繼續做行銷、營運、AI automation 跟 community 交界上的產品。",
      ],
      metricGroups: [
        {
          label: "身份",
          items: [
            { value: "5+", label: "年營運經驗" },
            { value: "2", label: "經營社群" },
            { value: "1", label: "團隊人數" },
            { value: "3+", label: "上線 side project" },
          ],
        },
        {
          label: "戰績",
          items: [
            { value: "6", label: "上線內部系統" },
            { value: "NT$1M+", label: "首季營收" },
            { value: "500+", label: "社群累計參與" },
            { value: "25×", label: "Threads 一年成長" },
          ],
        },
      ],
    },
    projects: {
      kicker: "精選作品",
      title: "最近做的東西。",
      items: [
        {
          meta: "SIDE PROJECT · 2025",
          title: "惜惜市集",
          description:
            "朋友辦線下市集，我幫他做攤位招商與管理系統。從攤商報名、後台管理、信件通知到部署都自己處理，讓籌備流程不用只靠表單跟人工對資料。",
          tags: "next.js · supabase · resend",
        },
        {
          meta: "PRODUCT · 2025",
          title: "joysee.travel",
          description:
            "Joysee 的活動原本靠表單、訊息跟人工整理撐著。我用 LIFF、Edge Functions 與 Tally integration 串起報名、會員資料、LINE 通知與活動營運。",
          tags: "liff · edge functions · tally · supabase · line bot",
        },
        {
          meta: "AUTOMATION · 2024",
          title: "Threads 自動化 v16",
          description:
            "多帳號社群最麻煩的是每個環節都要人盯：排程、監控、報表、互動。我把整套流程收進一個 Google Apps Script 專案，讓日常營運穩定跑起來。",
          tags: "gas · threads api · sheets · claude api",
        },
        {
          meta: "INTERNAL · 2024",
          title: "廠商生命週期管理系統",
          description:
            "遊學廠商資料原本散在 Drive、Sheets 跟交接文件裡。我把找廠商、評估、簽約、文件審查與交接整理成一條可追蹤的內部流程。",
          tags: "react · firebase · gas · claude api · drive api",
        },
        {
          meta: "INTERNAL · 2024",
          title: "雙版本報價自動化",
          description:
            "報價不能只求快，也要避免把內部成本寄出去。我做出對內與對外雙版本報價流程，串起價格規則、毛利、旺季加價、PDF 產生與 Drive 歸檔。",
          tags: "gas · sheets · drive · pdf generation",
        },
        {
          meta: "INTERNAL · 2024",
          title: "AI 內容生成 CMS",
          description:
            "顧問準備諮詢內容時，最花時間的是整理學校資料跟比較頁。我做了 AI 內容 CMS，用 Claude API 把語校資料轉成可重複使用的顧問素材。",
          tags: "react · typescript · supabase · claude api · cms",
        },
        {
          meta: "INTERNAL · 2024",
          title: "TKB 招商系統",
          description:
            "這套是 TKB 內部講座用的招商系統，和惜惜市集不同。3 週內交付，用來支援每月 2 場 × 30 攤的活動配置、攤商資訊與現場管理。",
          tags: "gas · sheets · forms · drive · event ops",
        },
      ],
    },
    experience: {
      kicker: "經歷",
      title: "我在哪些地方實戰過。",
      education:
        "國立台北商業大學 企業管理系 學士 · 2017–2021",
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
        {
          year: "2023–2024",
          location: "Taipei",
          title: "獨立行銷顧問 ＋ 早期創業實驗",
          org: "Self-directed",
          bullets: [
            "一邊做行銷顧問接案，一邊跑早期創業與創作型 side project，題材橫跨教育、活動、生活風格與在地服務。",
            "從需求訪談到上線交付，做了 10+ 個 WordPress 官網與 campaign page，包含資訊架構、文案、追蹤設定與轉換流程。",
            "跑過活動、內容、社群等創業實驗，包含 10 場大型社交活動、500+ 參與者，以及每月自然流量破 10 萬次的內容專案。",
          ],
        },
        {
          year: "2021–2023",
          location: "Taipei",
          title: "Marketing Specialist",
          org: "ASUS Cloud",
          bullets: [
            "做 B2B 雲端產品線的活動頁、SEO 內容、電子報與社群貼文，維持網站與社群的穩定更新節奏。",
            "調整 WordPress 官網、頁面結構、活動追蹤與關鍵字布局，帶動自然流量年增 35%。",
            "支援 webinar 與產品活動，從報名流程到會後名單追蹤都有參與，其中一場活動累積 600+ 專業參與者。",
          ],
        },
      ],
    },
    outsideWork: {
      kicker: "工作之外",
      title: "我在意的是人，不是 networking。",
      paragraph:
        "工作之外，我很常在想怎麼讓人自然認識彼此，而不是硬聊、硬社交。戶外活動、輕旅行、室內遊戲、即興簡報，最後都會回到同一件事：人一開始是為了活動而來，但會不會回來，通常取決於那天的感覺。",
      readingLabel: "最近在讀 / 在學",
      reading: [
        {
          title: "Working in Public",
          note: "研究公開創作、社群信任與長期參與，對我思考 community-led product 很有幫助。",
        },
        {
          title: "Shape Up",
          note: "學怎麼把模糊需求切成可交付的 product bets，適合我現在一邊做產品、一邊做系統的工作方式。",
        },
        {
          title: "High Output Management",
          note: "補組織槓桿與管理底層邏輯，特別是怎麼把個人判斷變成團隊可重複的流程。",
        },
        {
          title: "Cursor + Claude Code",
          note: "持續整理自己的 AI-assisted development workflow，讓原型、內部工具與 side project 更快走到上線。",
        },
        {
          title: "Prompt engineering for operations",
          note: "把 prompt 放進報表、文件分類、內容 CMS、活動互動與營運流程，而不只是拿來寫文案。",
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
