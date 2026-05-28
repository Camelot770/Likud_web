// shared.jsx — primitives, lang dictionaries, UI atoms used across the doc

const LANGS = [
  { code: "he", label: "עברית", short: "HE", dir: "rtl", font: '"Heebo", "Rubik", system-ui, sans-serif' },
  { code: "en", label: "English", short: "EN", dir: "ltr", font: '"Rubik", system-ui, sans-serif' },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr", font: '"Rubik", system-ui, sans-serif' },
];

const LangCtx = React.createContext({ lang: "he", setLang: () => {} });

// --- shared "site content" dictionary used by Home + Pages mocks ---
const CONTENT = {
  he: {
    nav: { home: "ראשי", about: "המפלגה", leadership: "הנהגה", positions: "עמדות", news: "חדשות", media: "מדיה", primaries: "בחירות פנימיות", join: "הצטרפות", branches: "סניפים", contact: "צרו קשר" },
    cta: { join: "הצטרפות", support: "תרומה", subscribe: "להירשם לעדכונים", more: "להמשיך לקרוא", all: "כל החדשות" },
    breaking: "בזק",
    heroSlogan: "ישראל חזקה. עתיד בטוח.",
    heroLead: "המפלגה הליברלית-לאומית של ישראל. ארבעים שנה של אחריות לאומית, ביטחון ושוק חופשי.",
    heroPortrait: "בנימין נתניהו · יו״ר המפלגה",
    positionsKicker: "עמדות הליכוד",
    positionsTitle: "מה אנחנו מאמינים",
    positionsList: [
      { title: "ביטחון לאומי", text: "ריבונות ישראלית, צה״ל חזק, הרתעה אזורית." },
      { title: "כלכלה חופשית", text: "מסים נמוכים, יוזמה פרטית, צמיחה לכל." },
      { title: "מדיניות חוץ", text: "חיזוק הברית עם ארה״ב, הסכמי אברהם, גבולות בטוחים." },
      { title: "חברה ומשפט", text: "איזון בין רשויות, חופש הביטוי, אחריות אזרחית." },
      { title: "התיישבות", text: "פיתוח יהודה ושומרון, הגליל והנגב." },
      { title: "ערכי המורשת", text: "מחויבות למורשת היהודית, לזיכרון ולשפה העברית." },
    ],
    newsKicker: "חדשות והודעות",
    newsTitle: "מהבמה ומהשטח",
    videoKicker: "וידאו",
    videoTitle: "מדברים אל האזרחים",
    branchesKicker: "סניפים בכל הארץ",
    branchesTitle: "הליכוד קרוב אליכם",
    branchesLede: "120 סניפים פעילים, מקרית שמונה עד אילת.",
    statsTitle: "המפלגה במספרים",
    stats: [
      { n: "120+", l: "סניפים בארץ" }, { n: "32", l: "ח״כים בכנסת" }, { n: "150K+", l: "חברי מפלגה" }, { n: "1973", l: "מאז" },
    ],
    newsletterTitle: "להישאר מעודכנים",
    newsletterLede: "מקבלים הודעות, ראיונות וסיכומי שבוע ישירות לתיבת הדואר.",
    newsletterPh: "כתובת אימייל",
    footerLegal: "© 2026 מפלגת הליכוד. כל הזכויות שמורות.",
    footerMeta: ["מדיניות פרטיות", "הצהרת נגישות", "פנו אלינו"],
  },
  en: {
    nav: { home: "Home", about: "Party", leadership: "Leadership", positions: "Positions", news: "News", media: "Media", primaries: "Primaries", join: "Membership", branches: "Branches", contact: "Contact" },
    cta: { join: "Join the Likud", support: "Donate", subscribe: "Subscribe", more: "Read more", all: "All news" },
    breaking: "Breaking",
    heroSlogan: "Strong Israel. Secure Future.",
    heroLead: "Israel's national-liberal party. Four decades of national responsibility, security, and the free market.",
    heroPortrait: "Benjamin Netanyahu · Party Chairman",
    positionsKicker: "Likud positions",
    positionsTitle: "What we stand for",
    positionsList: [
      { title: "National Security", text: "Israeli sovereignty, a strong IDF, regional deterrence." },
      { title: "Free Economy", text: "Low taxes, private initiative, growth for all." },
      { title: "Foreign Policy", text: "The U.S. alliance, the Abraham Accords, defensible borders." },
      { title: "Society & Justice", text: "Balance between branches, free speech, civic responsibility." },
      { title: "Settlement", text: "Developing Judea, Samaria, the Galilee, and the Negev." },
      { title: "Heritage", text: "Commitment to Jewish heritage, memory, and the Hebrew language." },
    ],
    newsKicker: "News & statements",
    newsTitle: "From the floor and the field",
    videoKicker: "Video",
    videoTitle: "Speaking to the public",
    branchesKicker: "Branches across Israel",
    branchesTitle: "Likud, close to you",
    branchesLede: "120 active branches, from Kiryat Shmona to Eilat.",
    statsTitle: "The party in numbers",
    stats: [
      { n: "120+", l: "branches in Israel" }, { n: "32", l: "MKs in the Knesset" }, { n: "150K+", l: "party members" }, { n: "1973", l: "founded" },
    ],
    newsletterTitle: "Stay informed",
    newsletterLede: "Statements, interviews, and a weekly digest, straight to your inbox.",
    newsletterPh: "Email address",
    footerLegal: "© 2026 The Likud Party. All rights reserved.",
    footerMeta: ["Privacy", "Accessibility", "Contact us"],
  },
  ru: {
    nav: { home: "Главная", about: "Партия", leadership: "Руководство", positions: "Позиции", news: "Новости", media: "Медиа", primaries: "Первичные выборы", join: "Вступить", branches: "Отделения", contact: "Контакты" },
    cta: { join: "Вступить в Ликуд", support: "Поддержать", subscribe: "Подписаться", more: "Подробнее", all: "Все новости" },
    breaking: "Главное",
    heroSlogan: "Сильный Израиль. Надёжное будущее.",
    heroLead: "Национально-либеральная партия Израиля. Сорок лет ответственности за страну, безопасности и свободного рынка.",
    heroPortrait: "Биньямин Нетаньяху · Председатель партии",
    positionsKicker: "Позиции Ликуда",
    positionsTitle: "Во что мы верим",
    positionsList: [
      { title: "Безопасность", text: "Израильский суверенитет, сильный ЦАХАЛ, региональное сдерживание." },
      { title: "Свободная экономика", text: "Низкие налоги, частная инициатива, рост для всех." },
      { title: "Внешняя политика", text: "Союз с США, «соглашения Авраама», защищаемые границы." },
      { title: "Общество и суд", text: "Баланс властей, свобода слова, гражданская ответственность." },
      { title: "Поселения", text: "Развитие Иудеи и Самарии, Галилеи и Негева." },
      { title: "Наследие", text: "Верность еврейскому наследию, памяти и языку иврит." },
    ],
    newsKicker: "Новости и заявления",
    newsTitle: "С трибуны и с земли",
    videoKicker: "Видео",
    videoTitle: "Говорим с гражданами",
    branchesKicker: "Отделения по всей стране",
    branchesTitle: "Ликуд рядом с вами",
    branchesLede: "120 активных отделений: от Кирьят-Шмоны до Эйлата.",
    statsTitle: "Партия в цифрах",
    stats: [
      { n: "120+", l: "отделений в Израиле" }, { n: "32", l: "депутата в Кнессете" }, { n: "150K+", l: "членов партии" }, { n: "1973", l: "год основания" },
    ],
    newsletterTitle: "Будьте в курсе",
    newsletterLede: "Заявления, интервью и еженедельный дайджест — прямо на почту.",
    newsletterPh: "Адрес электронной почты",
    footerLegal: "© 2026 Партия Ликуд. Все права защищены.",
    footerMeta: ["Конфиденциальность", "Доступность", "Контакты"],
  },
};

// News — real headlines from likud.org.il
const NEWS = {
  he: [
    { tag: "הודעה", date: "14 במאי 2026", title: "עדכון אמצעי התשלום לגביית דמי החבר", source: "הליכוד" },
    { tag: "הודעה", date: "11 בפברואר 2026", title: "הודעה בדבר עדכון דמי החבר בתנועת הליכוד – החל ממרץ 2026", source: "הליכוד" },
    { tag: "בית הדין", date: "2026", title: "החלטות בית הדין לשנת 2026", source: "בית הדין של תנועת הליכוד" },
    { tag: "ועידה", date: "2026", title: "ועידת הליכוד ה-5 – כל המידע", source: "מזכירות התנועה" },
    { tag: "בחירות", date: "2025", title: "קביעת אגרה להגשת עתירות בבית הדין", source: "ועדת הבחירות" },
    { tag: "בית הדין", date: "2025", title: "החלטות בית הדין לשנת 2025 – מאגר", source: "בית הדין" },
  ],
  en: [
    { tag: "Notice", date: "14 May 2026", title: "Update of payment methods for membership fees", source: "Likud" },
    { tag: "Notice", date: "11 February 2026", title: "Notice on the update of membership fees — effective March 2026", source: "Likud" },
    { tag: "Beit Din", date: "2026", title: "Internal Court rulings, 2026", source: "Likud Internal Court" },
    { tag: "Convention", date: "2026", title: "5th Likud Convention — full information", source: "Party Secretariat" },
    { tag: "Elections", date: "2025", title: "Filing fee set for petitions to the Internal Court", source: "Elections Committee" },
    { tag: "Beit Din", date: "2025", title: "Internal Court rulings, 2025 — archive", source: "Beit Din" },
  ],
  ru: [
    { tag: "Уведомление", date: "14 мая 2026", title: "Обновление способов оплаты членских взносов", source: "Ликуд" },
    { tag: "Уведомление", date: "11 февраля 2026", title: "Об обновлении членских взносов в движении Ликуд — с марта 2026", source: "Ликуд" },
    { tag: "Бейт-Дин", date: "2026", title: "Решения Бейт-Дин (партсуда) за 2026 год", source: "Бейт-Дин движения Ликуд" },
    { tag: "Съезд", date: "2026", title: "5-й съезд Ликуда — вся информация", source: "Секретариат партии" },
    { tag: "Выборы", date: "2025", title: "Установлена пошлина за подачу петиций в Бейт-Дин", source: "Комиссия по выборам" },
    { tag: "Бейт-Дин", date: "2025", title: "Решения Бейт-Дин за 2025 год — архив", source: "Бейт-Дин" },
  ],
};

// --- UI atoms ---

function LangSwitch({ value, onChange, compact }) {
  return (
    <div role="tablist" style={{
      display: "inline-flex",
      gap: 0,
      padding: 4,
      borderRadius: 999,
      border: "1px solid var(--hairline)",
      background: "var(--paper)",
    }}>
      {LANGS.map(L => (
        <button key={L.code}
          role="tab"
          aria-selected={value === L.code}
          onClick={() => onChange(L.code)}
          style={{
            border: 0, cursor: "pointer",
            padding: compact ? "5px 10px" : "6px 14px",
            borderRadius: 999,
            background: value === L.code ? "var(--likud-blue)" : "transparent",
            color: value === L.code ? "white" : "var(--ink-2)",
            fontSize: 12, fontWeight: 600, letterSpacing: 0.02,
            fontFamily: "var(--font-body)",
            transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
          }}>
          {L.short}
        </button>
      ))}
    </div>
  );
}

// Image plate — if `src` is provided, renders a real photo; otherwise a documentary silhouette.
function Plate({ label, ratio = "4/5", tone = "blue", style, src }) {
  const palettes = {
    blue:  { bg: "#0A2058", grain: "rgba(255,255,255,0.04)", chip: "rgba(255,255,255,0.85)", accent: "#0038B8" },
    deep:  { bg: "#001541", grain: "rgba(255,255,255,0.03)", chip: "rgba(255,255,255,0.85)", accent: "#0038B8" },
    soft:  { bg: "#E6EDF8", grain: "rgba(0,42,110,0.04)",   chip: "var(--ink)",              accent: "#0038B8" },
    mist:  { bg: "#F1F4F9", grain: "rgba(0,42,110,0.03)",   chip: "var(--ink)",              accent: "#0038B8" },
  };
  const p = palettes[tone] || palettes.blue;
  const dark = tone === "blue" || tone === "deep";
  return (
    <div style={{
      position: "relative",
      aspectRatio: ratio,
      borderRadius: 14,
      overflow: "hidden",
      background: p.bg,
      ...style,
    }}>
      {src ? (
        <img src={src} alt={label || ""} loading="lazy" style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top",
          display: "block",
        }} />
      ) : (
        <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ display: "block" }}>
          <rect x="0" y="155" width="200" height="85" fill={dark ? "#06133A" : "#DCE2EC"} />
          <ellipse cx="100" cy="115" rx="42" ry="50" fill={dark ? "#1B2E63" : "#C4CFE1"} opacity="0.9" />
          <path d="M30 240 C 40 175, 70 158, 100 158 C 130 158, 160 175, 170 240 Z"
                fill={dark ? "#13245A" : "#CFD8E8"} />
          <rect x="0" y="220" width="200" height="3" fill={p.accent} opacity="0.9" />
          <rect x="172" y="14" width="14" height="9" rx="1" fill="none" stroke={p.accent} strokeWidth="1" opacity="0.6" />
          <line x1="172" y1="17.5" x2="186" y2="17.5" stroke={p.accent} strokeWidth="0.6" opacity="0.6" />
          <line x1="172" y1="19.5" x2="186" y2="19.5" stroke={p.accent} strokeWidth="0.6" opacity="0.6" />
        </svg>
      )}
      {label && (
        <div style={{
          position: "absolute", left: 12, bottom: 10,
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 10px",
          background: src ? "rgba(0,0,0,0.55)" : (dark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.7)"),
          backdropFilter: "blur(8px)",
          borderRadius: 999,
          color: src ? "white" : p.chip,
          fontSize: 10.5,
          letterSpacing: 0.04,
          fontWeight: 500,
          border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.06)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: p.accent }} />
          {label}
        </div>
      )}
    </div>
  );
}

// Israel-shape SVG (stylized) — used in branches block
function IsraelMap({ markers = [], width = 260, height = 380, fg = "var(--likud-blue)", bg = "rgba(0,56,184,0.06)" }) {
  // A stylized hand-drawn outline approximating Israel
  const path = "M 70 8 L 96 22 L 104 38 L 118 52 L 130 78 L 142 110 L 150 138 L 158 168 L 162 196 L 158 218 L 150 242 L 138 268 L 124 292 L 108 318 L 92 344 L 78 366 L 70 376 L 64 358 L 60 332 L 56 306 L 54 278 L 56 250 L 60 218 L 64 186 L 60 158 L 50 134 L 40 110 L 36 86 L 40 62 L 50 40 L 60 22 Z";
  return (
    <svg viewBox="0 0 200 380" width={width} height={height} style={{ display: "block" }}>
      <path d={path} fill={bg} stroke={fg} strokeWidth="1.2" strokeLinejoin="round" />
      {markers.map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r={m.big ? 5 : 3} fill={fg} />
          {m.big ? <circle cx={m.x} cy={m.y} r="10" fill="none" stroke={fg} strokeWidth="0.8" opacity="0.4" /> : null}
        </g>
      ))}
    </svg>
  );
}

// Israel branch markers — coords mapped to the stylized path
const BRANCH_MARKERS = [
  { x: 96,  y: 30,  big: true,  name: "Kiryat Shmona" },
  { x: 108, y: 78,  name: "Haifa" },
  { x: 118, y: 120, name: "Netanya" },
  { x: 138, y: 150, name: "Tel Aviv", big: true },
  { x: 154, y: 178, name: "Jerusalem", big: true },
  { x: 144, y: 200, name: "Beersheba" },
  { x: 120, y: 250, name: "Mitzpe Ramon" },
  { x: 80,  y: 350, name: "Eilat" },
  { x: 106, y: 102, name: "Hadera" },
  { x: 158, y: 222, name: "Arad" },
];

// arrow icon (direction-aware): "next" arrow respects rtl/ltr — use --start/--end visually
function ArrowNext({ size = 16, dir = "ltr" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
      style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none", transition: "transform var(--dur) var(--ease)" }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Likud logo mark (simple inline) — stylized "ל" cube
function LikudMark({ size = 32, color = "white", bg = "var(--likud-blue)" }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: Math.max(4, size * 0.18),
      background: bg, color: color,
      display: "grid", placeItems: "center",
      fontFamily: "var(--font-display)", fontWeight: 800,
      letterSpacing: "-0.04em",
      fontSize: size * 0.5,
    }}>
      <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>הל</span>
    </div>
  );
}

// expose
Object.assign(window, {
  LANGS, LangCtx, CONTENT, NEWS,
  LangSwitch, Plate, IsraelMap, BRANCH_MARKERS, ArrowNext, LikudMark,
});
