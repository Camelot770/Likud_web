// sections-pages.jsx — multilingual page components (he/en/ru) used by the site router.
// Each Page accepts { lang, bare } and renders in the active locale with correct dir.

const PAGE_C = {
  blue: "#0038B8", blueDeep: "#002A6E", blueInk: "#001541",
  blueSoft: "#E6EDF8", blueMist: "#F3F6FB",
  red: "#C8102E",
  ink: "#0A1426", ink2: "#38465C", ink3: "#6E7A8E", ink4: "#A6B1C2",
  paper: "#FFFFFF", paper2: "#FAFBFD", hair: "#E3E7EE",
};

const fontOf = (lang) => lang === "he"
  ? '"Heebo", "Rubik", system-ui, sans-serif'
  : '"Rubik", system-ui, sans-serif';

const dirOf = (lang) => lang === "he" ? "rtl" : "ltr";

// --------- MiniHeader (shown only in design-doc mockups; the real site uses SiteHeader) ---------
function MiniHeader({ lang = "ru", active = "home" }) {
  const c = PAGE_C;
  const t = CONTENT[lang];
  const dir = dirOf(lang);
  const items = [
    { id: "home", l: t.nav.home },
    { id: "about", l: t.nav.about },
    { id: "leadership", l: t.nav.leadership },
    { id: "positions", l: t.nav.positions },
    { id: "news", l: t.nav.news },
    { id: "branches", l: t.nav.branches },
    { id: "primaries", l: t.nav.primaries },
  ];
  return (
    <header dir={dir} style={{ background: c.paper, borderBottom: `1px solid ${c.hair}`, fontFamily: fontOf(lang) }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LikudMark size={36} bg={c.blue} />
          <div style={{ fontWeight: 800, letterSpacing: "-0.02em", fontSize: 16 }}>{lang === "he" ? "הליכוד" : "LIKUD"}</div>
        </div>
        <nav style={{ display: "flex", gap: 24, fontSize: 14, fontWeight: 500 }}>
          {items.map(n => (
            <span key={n.id} style={{
              color: n.id === active ? c.blue : c.ink2,
              borderBottom: n.id === active ? `2px solid ${c.blue}` : "none",
              paddingBottom: 3,
            }}>{n.l}</span>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "inline-flex", gap: 2, padding: 3, border: `1px solid ${c.hair}`, borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
            {LANGS.map(L => (
              <span key={L.code} style={{
                padding: "4px 8px", borderRadius: 999,
                background: L.code === lang ? c.blue : "transparent",
                color: L.code === lang ? "white" : c.ink3,
              }}>{L.short}</span>
            ))}
          </div>
          <button style={{ background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "9px 18px", fontSize: 13, fontWeight: 600 }}>{t.cta.join}</button>
        </div>
      </div>
    </header>
  );
}

function BreadCrumb({ items, lang = "ru" }) {
  const c = PAGE_C;
  const dir = dirOf(lang);
  // items may be strings (last is current) or { text, href }
  const norm = items.map((x, i) => typeof x === "string" ? { text: x, href: null } : x);
  return (
    <div dir={dir} style={{ fontSize: 12, color: c.ink3, padding: "20px 32px 0", maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, alignItems: "center", fontFamily: fontOf(lang), flexWrap: "wrap" }}>
      {norm.map((x, i) => {
        const isLast = i === norm.length - 1;
        const label = isLast || !x.href
          ? <span style={{ color: isLast ? c.ink : c.ink3 }}>{x.text}</span>
          : <a href={x.href} style={{ color: c.ink3, textDecoration: "underline", textUnderlineOffset: 3 }}>{x.text}</a>;
        return (
          <React.Fragment key={i}>
            {label}
            {!isLast ? <span style={{ color: c.ink4 }}>{dir === "rtl" ? "«" : "/"}</span> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ====================== Position detail ==========================
const POSITION_DETAILS = {
  he: {
    kicker: "עמדת הליכוד",
    title: "ביטחון לאומי",
    titleBreak: ["ביטחון לאומי", "של מדינת ישראל"],
    lead: "ריבונות ישראלית, צה״ל חזק, הרתעה אזורית — שלוש האדנים שעליהם בנויה עמדת הליכוד בנושאי ביטחון.",
    breadcrumbs: [{ text: "עמדות", href: "#/positions" }, "ביטחון לאומי"],
    metaUpdated: "עודכן: 28 במאי 2026", metaSection: "סעיף: ביטחון", metaCount: "מסמכים קשורים: 14",
    intro: "ביטחון ישראל אינו עמדה פוליטית — הוא תנאי קיום. הליכוד סובר שכל דיון על מדיניות פנים או חוץ חייב להתחיל מהאמירה הזו ולהיבחן מולה.",
    threePillarsHeading: "שלוש אדנים",
    pillars: [
      { n: "01", h: "זכות ריבונית להגנה עצמית", t: "מדינת ישראל אינה חייבת דין וחשבון לאיש על החלטות שמטרתן להגן על אזרחיה. הסכמים ופורמטים — כן; קבלת אישור על זכות הגנה עצמית — לא." },
      { n: "02", h: "צה״ל חזק", t: "הצבא הוא המוסד היחיד שבו אין מקום לפשרות תקציביות. עליונות טכנולוגית, גרעין מקצועי, שירות חובה לכלל." },
      { n: "03", h: "הרתעה אזורית", t: "הרחבת הסכמי אברהם והמשך קו תקיף מול איראן ושלוחותיה — יסוד של יציבות, לא של ׳הסלמה׳." },
    ],
    pull: "״חירות בלי ביטחון — אשליה. ביטחון בלי חירות — עריצות. אנו אחראים לשתיהן.״",
    pullFoot: "— מהצהרת יו״ר המפלגה, מאי 2026",
    relatedDocsTitle: "מסמכים קשורים",
    relatedDocs: ["מצע המפלגה · פרק 3", "החלטת ועידה 2025", "הצהרת המפלגה בנושא ביטחון, מרץ 2026"],
    relatedStmtsTitle: "הצהרות אחרונות בנושא",
    relatedStmts: ["הצהרת יו״ר · 28.05", "תדריך שר הביטחון · 26.05", "תגובת הסיעה · 25.05"],
    allPositionsTitle: "כל העמדות",
  },
  en: {
    kicker: "Likud Position",
    title: "National Security",
    titleBreak: ["National Security", "of the State of Israel"],
    lead: "Israeli sovereignty, a strong IDF, and regional deterrence — the three pillars of the Likud's security position.",
    breadcrumbs: [{ text: "Positions", href: "#/positions" }, "National Security"],
    metaUpdated: "Updated: 28 May 2026", metaSection: "Section: Security", metaCount: "Related documents: 14",
    intro: "Israel's security is not a political position — it is a condition of existence. The Likud holds that any debate on domestic or foreign policy must begin from this premise and be measured against it.",
    threePillarsHeading: "Three pillars",
    pillars: [
      { n: "01", h: "Sovereign right to self-defense", t: "The State of Israel owes no one an account for decisions made to protect its citizens. Agreements and formats — yes; receiving permission for the right of self-defense — no." },
      { n: "02", h: "A strong IDF", t: "The army is the one institution in which there is no room for budget compromises. Technological superiority, a professional core, universal conscription." },
      { n: "03", h: "Regional deterrence", t: "Expanding the Abraham Accords and maintaining a firm line against Iran and its proxies — a foundation of stability, not of 'escalation'." },
    ],
    pull: "\"Freedom without security is an illusion. Security without freedom is tyranny. We are responsible for both.\"",
    pullFoot: "— From the Chairman's statement, May 2026",
    relatedDocsTitle: "Related documents",
    relatedDocs: ["Party Platform · ch. 3", "Convention Resolution 2025", "Party Statement on Gaza, March 2026"],
    relatedStmtsTitle: "Recent statements on the topic",
    relatedStmts: ["Chairman's statement · 28.05", "Minister of Defense briefing · 26.05", "Faction response · 25.05"],
    allPositionsTitle: "All positions",
  },
  ru: {
    kicker: "Позиция Ликуда",
    title: "Национальная безопасность Израиля",
    titleBreak: ["Национальная", "безопасность Израиля"],
    lead: "Израильский суверенитет, сильный ЦАХАЛ и региональное сдерживание — три опоры, на которых строится позиция Ликуда по безопасности.",
    breadcrumbs: [{ text: "Позиции", href: "#/positions" }, "Безопасность"],
    metaUpdated: "Обновлено: 28 мая 2026", metaSection: "Раздел: Безопасность", metaCount: "Связанных материалов: 14",
    intro: "Безопасность Израиля — не политическая позиция, а условие существования. Ликуд считает, что любая дискуссия о внутренней или внешней политике страны должна начинаться с этого тезиса и им же поверяться.",
    threePillarsHeading: "Три опоры",
    pillars: [
      { n: "01", h: "Суверенное право на оборону", t: "Государство Израиль не должно отчитываться ни перед кем за решения, принимаемые в защиту своих граждан. Соглашения и форматы — допустимы; согласование права на самооборону — нет." },
      { n: "02", h: "Сильный ЦАХАЛ", t: "Армия — единственный институт, в котором не может быть бюджетных компромиссов. Технологическое превосходство, профессиональный костяк, всеобщая обязанность." },
      { n: "03", h: "Региональное сдерживание", t: "Расширение Соглашений Авраама и продолжение жёсткой линии в отношении Ирана и его прокси — основа стабильности, а не «эскалации»." },
    ],
    pull: "«Свобода без безопасности — иллюзия. Безопасность без свободы — тирания. Мы отвечаем за обе.»",
    pullFoot: "— Из заявления Председателя партии, май 2026",
    relatedDocsTitle: "Связанные документы",
    relatedDocs: ["Программа партии · гл. 3", "Резолюция съезда 2025", "Заявление по Газе, март 2026"],
    relatedStmtsTitle: "Последние заявления по теме",
    relatedStmts: ["Заявление Председателя · 28.05", "Брифинг Министра обороны · 26.05", "Реакция фракции · 25.05"],
    allPositionsTitle: "Все позиции",
  },
};

function PagePosition({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const t = CONTENT[lang];
  const p = POSITION_DETAILS[lang];
  const dir = dirOf(lang);
  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="positions" />}
      <BreadCrumb lang={lang} items={p.breadcrumbs} />

      <section style={{ padding: "48px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px minmax(0, 1fr) 280px", gap: 48, alignItems: "start" }}>
          <aside style={{ position: "sticky", top: 24 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 14 }}>{p.allPositionsTitle}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 4 }}>
              {t.positionsList.map((pp, i) => (
                <li key={i}>
                  <a href={i === 0 ? "#/position-detail" : "#/positions"} style={{
                    display: "block",
                    padding: "10px 14px", borderRadius: 8,
                    background: i === 0 ? c.blueSoft : "transparent",
                    color: i === 0 ? c.blueDeep : c.ink2,
                    fontWeight: i === 0 ? 600 : 500,
                    fontSize: 13.5,
                    borderInlineStart: i === 0 ? `2px solid ${c.blue}` : "2px solid transparent",
                    textDecoration: "none",
                  }}>{pp.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <article>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{p.kicker}</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.03em", fontWeight: 800, margin: "12px 0 16px", lineHeight: 1.02, textWrap: "balance" }}>
              {p.titleBreak[0]}<br/>{p.titleBreak[1]}
            </h1>
            <p style={{ fontSize: 20, color: c.ink2, lineHeight: 1.5, margin: "0 0 28px", maxWidth: 640 }}>{p.lead}</p>
            <div style={{ display: "flex", gap: 18, fontSize: 12.5, color: c.ink3, paddingBottom: 24, borderBottom: `1px solid ${c.hair}`, flexWrap: "wrap" }}>
              <span>{p.metaUpdated}</span>
              <span>{p.metaSection}</span>
              <span>{p.metaCount}</span>
            </div>

            <div style={{ fontSize: 17, lineHeight: 1.7, color: c.ink, marginTop: 32, maxWidth: 720 }}>
              <p style={{ marginTop: 0 }}>{p.intro}</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, letterSpacing: "-0.02em", margin: "40px 0 14px", fontWeight: 700 }}>{p.threePillarsHeading}</h2>
              {p.pillars.map(b => (
                <div key={b.n} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 18, padding: "22px 0", borderBottom: `1px solid ${c.hair}` }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: c.blue, fontWeight: 600 }}>{b.n}</div>
                  <div>
                    <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 6 }}>{b.h}</div>
                    <p style={{ margin: 0, fontSize: 16, color: c.ink2, lineHeight: 1.6 }}>{b.t}</p>
                  </div>
                </div>
              ))}

              <blockquote style={{
                margin: "40px 0", padding: "28px 32px",
                borderInlineStart: `3px solid ${c.blue}`, background: c.blueMist,
                fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500,
                lineHeight: 1.35, letterSpacing: "-0.01em", color: c.ink, fontStyle: "normal",
              }}>
                {p.pull}
                <footer style={{ marginTop: 14, fontSize: 13, color: c.ink3, fontWeight: 400 }}>{p.pullFoot}</footer>
              </blockquote>
            </div>
          </article>

          <aside>
            <div style={{ position: "sticky", top: 24, display: "grid", gap: 16 }}>
              <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12, background: c.paper2 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>{p.relatedDocsTitle}</div>
                {p.relatedDocs.map((x, i) => (
                  <div key={i} style={{ padding: "10px 0", borderTop: i === 0 ? 0 : `1px solid ${c.hair}`, fontSize: 13.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{x}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: c.ink3 }}>PDF</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>{p.relatedStmtsTitle}</div>
                {p.relatedStmts.map((x, i) => (
                  <div key={i} style={{ padding: "10px 0", borderTop: i === 0 ? 0 : `1px solid ${c.hair}`, fontSize: 13.5 }}>{x}</div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

// ====================== News list ==========================
const NEWS_LABELS = {
  he: {
    title: "חדשות והודעות",
    lede: "תקשורת שוטפת של המפלגה: מעל הבמה, מהמטה ומהשטח.",
    breadcrumbs: ["חדשות"],
    types: ["הכל", "הודעות", "בית הדין", "ועידה", "בחירות"],
    typeMap: { "Notice": "הודעה", "Beit Din": "בית הדין", "Convention": "ועידה", "Elections": "בחירות", "הודעה": "הודעה", "בית הדין": "בית הדין", "ועידה": "ועידה", "בחירות": "בחירות" },
    searchPh: "חיפוש בחדשות…",
    perMonth: "החודש: 12 פריטים",
    tagsTitle: "נושאים",
    tags: ["ביטחון", "כלכלה", "כנסת", "בחירות פנימיות", "הסכמי אברהם", "בית הדין"],
    subscribeTitle: "הרשמה",
    subscribeText: "תקציר שבועי של הצהרות והחלטות המפלגה.",
    readMore: "להמשך",
  },
  en: {
    title: "News & Statements",
    lede: "The party's operative communication: from the Knesset floor, from headquarters, and from the field.",
    breadcrumbs: ["News"],
    types: ["All", "Notices", "Beit Din", "Convention", "Elections"],
    typeMap: { "Notice": "Notice", "Beit Din": "Beit Din", "Convention": "Convention", "Elections": "Elections" },
    searchPh: "Search news…",
    perMonth: "This month: 12 items",
    tagsTitle: "Topics",
    tags: ["Security", "Economy", "Knesset", "Primaries", "Abraham Accords", "Beit Din"],
    subscribeTitle: "Subscribe",
    subscribeText: "Weekly digest of party statements and decisions.",
    readMore: "Read",
  },
  ru: {
    title: "Новости и заявления",
    lede: "Оперативная коммуникация партии: с трибуны Кнессета, из штаба и с земли.",
    breadcrumbs: ["Новости"],
    types: ["Все", "Уведомления", "Бейт-Дин", "Съезд", "Выборы"],
    typeMap: { "Уведомление": "Уведомление", "Бейт-Дин": "Бейт-Дин", "Съезд": "Съезд", "Выборы": "Выборы" },
    searchPh: "Поиск по новостям…",
    perMonth: "За месяц: 12 материалов",
    tagsTitle: "Темы",
    tags: ["Безопасность", "Экономика", "Кнессет", "Первичные выборы", "Соглашения Авраама", "Бейт-Дин"],
    subscribeTitle: "Подписка",
    subscribeText: "Еженедельный дайджест заявлений и решений партии.",
    readMore: "Читать",
  },
};

function PageNews({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const t = CONTENT[lang];
  const L = NEWS_LABELS[lang];
  const news = NEWS[lang];
  const dir = dirOf(lang);
  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="news" />}
      <BreadCrumb lang={lang} items={L.breadcrumbs} />
      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.02 }}>{L.title}</h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: "12px 0 0", maxWidth: 640 }}>{L.lede}</p>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${c.hair}`, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "inline-flex", gap: 4, padding: 4, borderRadius: 999, background: c.paper2, border: `1px solid ${c.hair}` }}>
            {L.types.map((typ, i) => (
              <span key={typ} style={{
                padding: "8px 14px", fontSize: 13, fontWeight: 600, borderRadius: 999,
                background: i === 0 ? c.blue : "transparent",
                color: i === 0 ? "white" : c.ink2,
              }}>{typ}</span>
            ))}
          </div>
          <div style={{ marginInlineStart: "auto", display: "flex", gap: 10, alignItems: "center" }}>
            <input placeholder={L.searchPh} style={{
              border: `1px solid ${c.hair}`, borderRadius: 999, padding: "10px 18px",
              fontSize: 13.5, width: 260, fontFamily: "inherit", outline: 0,
              textAlign: dir === "rtl" ? "right" : "left",
            }} />
            <span style={{ fontSize: 12, color: c.ink3 }}>{L.perMonth}</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 280px", gap: 48, alignItems: "start" }}>
          <div>
            {news.map((n, i) => (
              <article key={i} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, padding: "28px 0", borderTop: i === 0 ? 0 : `1px solid ${c.hair}` }}>
                <Plate label={n.tag} tone={i % 3 === 0 ? "deep" : i % 3 === 1 ? "soft" : "mist"} ratio="4/3" />
                <div>
                  <div style={{ display: "flex", gap: 14, fontSize: 12, color: c.ink3, marginBottom: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ color: c.blue, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.06 }}>{n.tag}</span>
                    <span><bdi>{n.date}</bdi></span>
                    <span>·</span>
                    <span>{n.source}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 8px", lineHeight: 1.3 }}>{n.title}</h2>
                  <div style={{ marginTop: 14, fontSize: 13, color: c.blue, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {L.readMore} <ArrowNext size={14} dir={dir} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside style={{ display: "grid", gap: 18 }}>
            <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 12 }}>{L.tagsTitle}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {L.tags.map(tg => (
                  <span key={tg} style={{ padding: "6px 12px", borderRadius: 999, background: "white", border: `1px solid ${c.hair}`, fontSize: 12, color: c.ink2, fontWeight: 500 }}>{tg}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>{L.subscribeTitle}</div>
              <p style={{ fontSize: 13, color: c.ink2, margin: "0 0 12px", lineHeight: 1.5 }}>{L.subscribeText}</p>
              <button style={{ width: "100%", background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{t.cta.subscribe}</button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

// ====================== Leader (Netanyahu) ==========================
// Real Likud Knesset Members (25th Knesset, public information).
// Roles deliberately generic ("Knesset Member" / "ח״כ" / "Депутат") to avoid stale cabinet specifics.
const FACTION_MKS = [
  { he: "בנימין נתניהו",      en: "Benjamin Netanyahu",     ru: "Биньямин Нетаньяху",     role: { he: "יו״ר המפלגה · ראש הממשלה", en: "Chairman · Prime Minister", ru: "Председатель · Премьер-министр" }, primary: true },
  { he: "יריב לוין",          en: "Yariv Levin",            ru: "Ярив Левин",             role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "ישראל כ״ץ",          en: "Israel Katz",            ru: "Исраэль Кац",            role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "אלי כהן",            en: "Eli Cohen",              ru: "Эли Коэн",               role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "מירי רגב",           en: "Miri Regev",             ru: "Мири Регев",             role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "אמיר אוחנה",         en: "Amir Ohana",             ru: "Амир Охана",             role: { he: "יו״ר הכנסת", en: "Speaker of the Knesset", ru: "Спикер Кнессета" } },
  { he: "אבי דיכטר",          en: "Avi Dichter",            ru: "Ави Дихтер",             role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "יולי אדלשטיין",      en: "Yuli Edelstein",         ru: "Юлий Эдельштейн",        role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
  { he: "ניר ברקת",           en: "Nir Barkat",             ru: "Нир Баркат",             role: { he: "ח״כ מטעם הליכוד", en: "Likud MK", ru: "Депутат Кнессета от Ликуда" } },
];

const LEADER_PAGE = {
  he: {
    kicker: "יו״ר המפלגה",
    name: ["בנימין", "נתניהו"],
    lead: "ראש ממשלת ישראל. יו״ר הליכוד מאז 2005. חבר כנסת מאז 1988.",
    stats: [ { n: "1949", l: "שנת לידה" }, { n: "1996", l: "כהונה ראשונה כראש ממשלה" }, { n: "32", l: "ח״כים בסיעה" } ],
    tocTitle: "בעמוד זה",
    toc: ["ביוגרפיה", "קריירה פוליטית", "עמדות", "נאומים אחרונים", "הסיעה", "פנייה ללשכה"],
    bioTitle: "ביוגרפיה",
    bioParas: [
      "בנימין נתניהו נולד בתל אביב בשנת 1949. שירת ביחידת המטכ״ל ׳סיירת מטכ״ל׳, השתתף במספר מבצעים ונפצע בעת חילוץ נוסעי מטוס סבנה שנחטף.",
      "לאחר השירות — לימודים ב-MIT, עבודה במגזר הפרטי, סגן ראש המשלחת הישראלית בארה״ב, שגריר באו״ם. מאז 1988 — חבר כנסת. ב-1996 נבחר לראשונה לראש ממשלה.",
    ],
    factionTitle: "סיעת הליכוד",
    factionMore: "כל חברי הסיעה",
  },
  en: {
    kicker: "Chairman of the Party",
    name: ["Benjamin", "Netanyahu"],
    lead: "Prime Minister of the State of Israel. Chairman of the Likud since 2005. Member of Knesset since 1988.",
    stats: [ { n: "1949", l: "Year of birth" }, { n: "1996", l: "First term as PM" }, { n: "32", l: "MKs in the faction" } ],
    tocTitle: "On this page",
    toc: ["Biography", "Political career", "Positions", "Recent speeches", "The faction", "Office contact"],
    bioTitle: "Biography",
    bioParas: [
      "Benjamin Netanyahu was born in Tel Aviv in 1949. He served in the elite Sayeret Matkal special-forces unit, took part in several operations and was wounded during the rescue of the hijacked Sabena aircraft.",
      "After his service — studies at MIT, a private-sector career, Deputy Chief of Mission in Washington, Ambassador to the UN. He has been a Member of Knesset since 1988 and was first elected Prime Minister in 1996.",
    ],
    factionTitle: "The Likud Knesset faction",
    factionMore: "All members of the faction",
  },
  ru: {
    kicker: "Председатель партии",
    name: ["Биньямин", "Нетаньяху"],
    lead: "Премьер-министр Государства Израиль. Председатель Ликуда с 2005 года. Депутат Кнессета с 1988 года.",
    stats: [ { n: "1949", l: "Год рождения" }, { n: "1996", l: "Первый срок премьера" }, { n: "32", l: "Депутата фракции" } ],
    tocTitle: "На этой странице",
    toc: ["Биография", "Политическая карьера", "Позиции", "Последние выступления", "Фракция", "Канцелярия"],
    bioTitle: "Биография",
    bioParas: [
      "Биньямин Нетаньяху родился в Тель-Авиве в 1949 году. Прошёл службу в элитном подразделении «Сайерет Маткаль», участвовал в нескольких операциях, был ранен в ходе освобождения пассажиров захваченного самолёта Sabena.",
      "После службы — учёба в Массачусетском технологическом институте (MIT), работа в частном секторе, заместитель главы миссии Израиля в США, посол в ООН. С 1988 года — депутат Кнессета. В 1996 году впервые избран премьер-министром.",
    ],
    factionTitle: "Фракция Ликуда в Кнессете",
    factionMore: "Все депутаты фракции",
  },
};

function PageLeader({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const L = LEADER_PAGE[lang];
  const dir = dirOf(lang);
  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="leadership" />}
      <section style={{ background: c.blueInk, color: "white", padding: "72px 32px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: "#6E9DFF", fontWeight: 600 }}>{L.kicker}</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 72px)", letterSpacing: "-0.035em", fontWeight: 800, margin: "16px 0 20px", lineHeight: 1.02, color: "white" }}>
              {L.name[0]}<br/>{L.name[1]}
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.78)", lineHeight: 1.5, margin: 0, maxWidth: 540 }}>{L.lead}</p>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
              {L.stats.map((s, i) => (
                <div key={i} style={{
                  padding: "20px 0",
                  borderInlineEnd: i === 2 ? 0 : "1px solid rgba(255,255,255,0.18)",
                  paddingInlineStart: i === 0 ? 0 : 24,
                  paddingInlineEnd: i === 2 ? 0 : 24,
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "white" }}><bdi>{s.n}</bdi></div>
                  <div style={{ marginTop: 6, fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 0.08 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div><Plate label={[L.kicker, L.name.join(" ")].join(" · ")} tone="deep" ratio="4/5" src="images/netanyahu.jpg" /></div>
        </div>
      </section>

      <section style={{ padding: "72px 32px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "200px minmax(0, 1fr)", gap: 48, alignItems: "start" }}>
        <aside style={{ position: "sticky", top: 24 }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 14 }}>{L.tocTitle}</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6, fontSize: 13.5 }}>
            {L.toc.map((x, i) => (
              <li key={x} style={{ padding: "8px 12px", borderRadius: 6, color: i === 0 ? c.blueDeep : c.ink2, background: i === 0 ? c.blueSoft : "transparent", fontWeight: i === 0 ? 600 : 500 }}>{x}</li>
            ))}
          </ul>
        </aside>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.025em", margin: "0 0 18px", fontWeight: 700 }}>{L.bioTitle}</h2>
          {L.bioParas.map((p, i) => (
            <p key={i} style={{ fontSize: 18, color: c.ink2, lineHeight: 1.65, maxWidth: 720, margin: i === 0 ? "0 0 16px" : "0 0 32px" }}>{p}</p>
          ))}

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.025em", margin: "48px 0 18px", fontWeight: 700 }}>{L.factionTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {FACTION_MKS.map((mk, i) => (
              <div key={i} style={{
                padding: 18,
                border: `1px solid ${mk.primary ? c.blue : c.hair}`,
                borderRadius: 12,
                display: "flex", gap: 14, alignItems: "center",
                background: mk.primary ? c.blueMist : c.paper,
              }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 999, background: mk.primary ? c.blueDeep : c.blueSoft, color: mk.primary ? "white" : c.blueDeep, display: "grid", placeItems: "center", fontWeight: 700, fontSize: 14 }}>
                  {(mk.en.split(" ").map(w => w[0]).join("").slice(0, 2))}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.06, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mk.role[lang]}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{mk[lang]}</div>
                </div>
              </div>
            ))}
          </div>
          <button style={{ marginTop: 24, background: "transparent", color: c.blue, border: `1px solid ${c.blueSoft}`, borderRadius: 999, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{L.factionMore}</button>
        </div>
      </section>
    </div>
  );
}

// ====================== Join (membership) ==========================
const JOIN_PAGE = {
  he: {
    kicker: "הצטרפות ותמיכה",
    title: "בחרו כיצד תרצו להשתתף",
    lede: "ארבע דרכים. כל אחת — חלק מהמפלגה. כל אחת — בחירה כאן ועכשיו.",
    paths: [
      { k: "member",  t: "חבר/ת מפלגה", d: "זכות הצבעה בבחירות הפנימיות, גישה להחלטות הוועידה." },
      { k: "vol",     t: "מתנדב/ת",      d: "סיוע בקמפיינים, בקלפיות, בסניפים הפריפריאליים." },
      { k: "donate",  t: "תרומה",        d: "תרומה בהתאם לחוק מימון מפלגות." },
      { k: "sub",     t: "ניוזלטר",      d: "תקציר שבועי גם בלי הצטרפות פורמלית." },
    ],
    step2: "שלב 2 · הפרטים שלכם",
    note: "הפרטים נשמרים אך ורק לצורך רישום החברות לפי החוק.",
    fields: [
      { k: "name", l: "שם מלא", ph: "שם ושם משפחה" },
      { k: "id", l: "תעודת זהות", ph: "9 ספרות" },
      { k: "phone", l: "טלפון", ph: "+972 5_ ___ ____" },
      { k: "email", l: "אימייל", ph: "you@example.com" },
    ],
    errs: { name: "הזינו שם", id: "תעודת זהות — 9 ספרות", phone: "הזינו טלפון", email: "בדקו אימייל" },
    legal: "אני אזרח/ית מדינת ישראל, מלאו לי 17. אני מסכים/ה לחוקת המפלגה ולמדיניות הפרטיות.",
    submit: "הגשת בקשה",
    trustTitleA: "נקודות משפט",
    trustTextA: "דמי החבר נקבעים בהחלטת מזכירות המפלגה. תרומות מתקבלות לפי חוק מימון מפלגות, 1973.",
    trustTitleB: "מה הלאה",
    trustList: ["אימות SMS של הטלפון", "בדיקת סטטוס חבר (עד 48 שעות)", "מכתב אישור ומספר חבר אישי"],
  },
  en: {
    kicker: "Membership and support",
    title: "Choose how you want to take part",
    lede: "Four paths. Each is part of the party. Each can be chosen right now.",
    paths: [
      { k: "member",  t: "Party member",   d: "Voting rights in internal elections, access to convention decisions." },
      { k: "vol",     t: "Volunteer",       d: "Help in campaigns, at polling stations, in regional branches." },
      { k: "donate",  t: "Donate",          d: "A contribution in line with the Israeli Party Funding Law." },
      { k: "sub",     t: "Newsletter",      d: "Weekly digest, without formal membership." },
    ],
    step2: "Step 2 · Your details",
    note: "Details are kept only for processing membership under the law.",
    fields: [
      { k: "name", l: "Full name", ph: "First and last name" },
      { k: "id", l: "Israeli ID (Teudat Zehut)", ph: "9 digits" },
      { k: "phone", l: "Phone", ph: "+972 5_ ___ ____" },
      { k: "email", l: "Email", ph: "you@example.com" },
    ],
    errs: { name: "Enter your name", id: "Israeli ID is 9 digits", phone: "Enter your phone", email: "Check the email" },
    legal: "I am a citizen of the State of Israel aged 17 or above. I agree to the party constitution and privacy policy.",
    submit: "Submit application",
    trustTitleA: "Legal note",
    trustTextA: "Membership fees are set by the Party Secretariat. Donations are accepted under the Party Funding Law, 1973.",
    trustTitleB: "What's next",
    trustList: ["SMS verification of the phone", "Membership check (up to 48 hours)", "Confirmation letter with your personal member number"],
  },
  ru: {
    kicker: "Вступление и поддержка",
    title: "Выберите, как вы хотите участвовать",
    lede: "Четыре пути. Любой — это часть партии. Любой можно выбрать прямо сейчас.",
    paths: [
      { k: "member",  t: "Член партии",  d: "Право голоса на первичных выборах, доступ к решениям съезда." },
      { k: "vol",     t: "Волонтёр",      d: "Помощь в кампаниях, на участках, в региональных отделениях." },
      { k: "donate",  t: "Поддержать",     d: "Пожертвование в соответствии с законом о финансировании партий." },
      { k: "sub",     t: "Получать рассылку", d: "Еженедельный дайджест без вступления." },
    ],
    step2: "Шаг 2 · Ваши данные",
    note: "Данные используются только для оформления членства согласно закону.",
    fields: [
      { k: "name", l: "Полное имя", ph: "Имя и фамилия" },
      { k: "id", l: "Теудат-зеут (תעודת זהות)", ph: "9 цифр" },
      { k: "phone", l: "Телефон", ph: "+972 5_ ___ ____" },
      { k: "email", l: "Email", ph: "you@example.com" },
    ],
    errs: { name: "Укажите имя", id: "Теудат-зеут — 9 цифр", phone: "Укажите телефон", email: "Проверьте email" },
    legal: "Я гражданин Государства Израиль, мне исполнилось 17 лет. Я согласен с уставом партии и политикой конфиденциальности.",
    submit: "Подать заявление",
    trustTitleA: "Юридическая нотация",
    trustTextA: "Членский взнос регулируется решением мазкирута партии. Пожертвования принимаются в соответствии с Законом о финансировании партий 1973 г.",
    trustTitleB: "Что дальше",
    trustList: ["SMS-подтверждение телефона", "Проверка членского статуса (до 48 часов)", "Письмо с подтверждением и личным номером члена партии"],
  },
};

function PageJoin({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const L = JOIN_PAGE[lang];
  const dir = dirOf(lang);
  const [path, setPath] = React.useState("member");
  const [form, setForm] = React.useState({ name: "", id: "", phone: "", email: "" });
  const [touched, setTouched] = React.useState({});
  const errs = {
    name: touched.name && !form.name.trim() ? L.errs.name : "",
    id: touched.id && !/^\d{9}$/.test(form.id) ? L.errs.id : "",
    phone: touched.phone && !/^\+?\d{8,}$/.test(form.phone.replace(/\s/g, "")) ? L.errs.phone : "",
    email: touched.email && !/^\S+@\S+\.\S+$/.test(form.email) ? L.errs.email : "",
  };
  const valid = !errs.name && !errs.id && !errs.phone && !errs.email && form.name && form.id && form.phone && form.email;

  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="home" />}
      <section style={{ background: c.blueMist, padding: "64px 32px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{L.kicker}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "12px 0 16px", lineHeight: 1.02, textWrap: "balance" }}>{L.title}</h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: 0, maxWidth: 640, lineHeight: 1.55 }}>{L.lede}</p>
        </div>
      </section>

      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 32 }}>
          {L.paths.map(p => (
            <button key={p.k} onClick={() => setPath(p.k)} style={{
              textAlign: dir === "rtl" ? "right" : "left", border: 0, cursor: "pointer", fontFamily: "inherit",
              padding: 20, borderRadius: 14,
              background: path === p.k ? c.blueInk : c.paper,
              color: path === p.k ? "white" : c.ink,
              borderTop: `4px solid ${path === p.k ? c.blue : c.hair}`,
              boxShadow: path === p.k ? "0 12px 32px -8px rgba(0,42,110,0.4)" : "none",
              transition: "all 260ms cubic-bezier(0.22,1,0.36,1)",
            }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.1, color: path === p.k ? "rgba(255,255,255,0.6)" : c.ink3 }}>{lang === "he" ? "שלב 1" : lang === "en" ? "Step 1" : "Шаг 1"}</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8, letterSpacing: "-0.01em" }}>{p.t}</div>
              <div style={{ fontSize: 12.5, color: path === p.k ? "rgba(255,255,255,0.72)" : c.ink2, marginTop: 8, lineHeight: 1.5 }}>{p.d}</div>
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 48, alignItems: "start" }}>
          <div style={{ padding: 32, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.paper }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{L.step2}</h2>
            <p style={{ fontSize: 14, color: c.ink3, margin: "0 0 24px" }}>{L.note}</p>
            <div style={{ display: "grid", gap: 16 }}>
              {L.fields.map(f => (
                <div key={f.k}>
                  <label style={{ fontSize: 12, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.08, fontWeight: 600 }}>{f.l}</label>
                  <input
                    placeholder={f.ph}
                    value={form[f.k]}
                    onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                    onBlur={() => setTouched({ ...touched, [f.k]: true })}
                    dir={f.k === "id" || f.k === "phone" || f.k === "email" ? "ltr" : dir}
                    style={{
                      width: "100%", marginTop: 6,
                      border: `1px solid ${errs[f.k] ? c.red : c.hair}`,
                      borderRadius: 10, padding: "12px 14px",
                      fontSize: 14.5, fontFamily: "inherit", outline: "none",
                      background: c.paper, textAlign: dir === "rtl" && !(f.k === "id" || f.k === "phone" || f.k === "email") ? "right" : "left",
                    }} />
                  {errs[f.k] && <div style={{ marginTop: 6, fontSize: 12, color: c.red }}>{errs[f.k]}</div>}
                </div>
              ))}
              <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 8, fontSize: 13, color: c.ink2, lineHeight: 1.5 }}>
                <input type="checkbox" style={{ marginTop: 4, accentColor: c.blue }} />
                <span>{L.legal}</span>
              </label>
              <button disabled={!valid} style={{
                marginTop: 8, background: valid ? c.blue : c.blueSoft,
                color: valid ? "white" : c.ink3,
                border: 0, borderRadius: 999, padding: "16px 28px",
                fontSize: 15, fontWeight: 600, cursor: valid ? "pointer" : "not-allowed", fontFamily: "inherit",
              }}>{L.submit}</button>
            </div>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ padding: 22, border: `1px solid ${c.hair}`, borderRadius: 14, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3 }}>{L.trustTitleA}</div>
              <p style={{ fontSize: 13.5, color: c.ink2, margin: "10px 0 0", lineHeight: 1.55 }}>{L.trustTextA}</p>
            </div>
            <div style={{ padding: 22, border: `1px solid ${c.hair}`, borderRadius: 14, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3 }}>{L.trustTitleB}</div>
              <ol style={{ margin: "10px 0 0", paddingInlineStart: 18, fontSize: 13.5, color: c.ink2, lineHeight: 1.7 }}>
                {L.trustList.map((x, i) => <li key={i}>{x}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ====================== Branches ==========================
// Major Israeli cities with active Likud branches.
const BRANCHES_DATA = [
  { he: ["תל אביב-יפו", "מחוז דן", "המלך ג׳ורג׳ 38, תל אביב"],
    en: ["Tel Aviv-Yafo", "Dan District", "38 King George St., Tel Aviv"],
    ru: ["Тель-Авив-Яффо", "Округ Дан", "ул. Кинг-Джордж, 38, Тель-Авив"], headquarters: true },
  { he: ["ירושלים", "מחוז ירושלים", "סניף ירושלים"],
    en: ["Jerusalem", "Jerusalem District", "Jerusalem branch"],
    ru: ["Иерусалим", "Округ Иерусалим", "Иерусалимское отделение"], district: true },
  { he: ["חיפה", "מחוז חיפה", "סניף חיפה"],
    en: ["Haifa", "Haifa District", "Haifa branch"],
    ru: ["Хайфа", "Округ Хайфа", "Отделение Хайфы"], district: true },
  { he: ["באר שבע", "מחוז הדרום", "סניף באר שבע"],
    en: ["Beersheba", "Southern District", "Beersheba branch"],
    ru: ["Беэр-Шева", "Южный округ", "Отделение Беэр-Шевы"], district: true },
  { he: ["ראשון לציון", "מחוז המרכז", "סניף ראשון לציון"],
    en: ["Rishon LeZion", "Central District", "Rishon LeZion branch"],
    ru: ["Ришон-ле-Цион", "Центральный округ", "Отделение Ришон-ле-Цион"] },
  { he: ["פתח תקווה", "מחוז המרכז", "סניף פתח תקווה"],
    en: ["Petah Tikva", "Central District", "Petah Tikva branch"],
    ru: ["Петах-Тиква", "Центральный округ", "Отделение Петах-Тиква"] },
  { he: ["נתניה", "מחוז השרון", "סניף נתניה"],
    en: ["Netanya", "Sharon District", "Netanya branch"],
    ru: ["Нетания", "Округ Шарон", "Отделение Нетании"] },
  { he: ["אשדוד", "מחוז הדרום", "סניף אשדוד"],
    en: ["Ashdod", "Southern District", "Ashdod branch"],
    ru: ["Ашдод", "Южный округ", "Отделение Ашдода"] },
  { he: ["ראשון השרון - הרצליה", "מחוז השרון", "סניף הרצליה"],
    en: ["Herzliya", "Sharon District", "Herzliya branch"],
    ru: ["Герцлия", "Округ Шарон", "Отделение Герцлии"] },
  { he: ["קריית שמונה", "מחוז הצפון", "סניף קריית שמונה"],
    en: ["Kiryat Shmona", "Northern District", "Kiryat Shmona branch"],
    ru: ["Кирьят-Шмона", "Северный округ", "Отделение Кирьят-Шмоны"] },
  { he: ["טבריה", "מחוז הצפון", "סניף טבריה"],
    en: ["Tiberias", "Northern District", "Tiberias branch"],
    ru: ["Тверия", "Северный округ", "Отделение Тверии"] },
  { he: ["אילת", "מחוז הדרום", "סניף אילת"],
    en: ["Eilat", "Southern District", "Eilat branch"],
    ru: ["Эйлат", "Южный округ", "Отделение Эйлата"] },
];

const BRANCH_LABELS = {
  he: {
    title: "120+ סניפים בכל הארץ",
    lede: "מקריית שמונה ועד אילת. כל סניף — אנשים שאפשר לגשת אליהם, לכתוב או להתקשר.",
    breadcrumbs: ["סניפים אזוריים"],
    searchPh: "חיפוש לפי עיר או מחוז…",
    allDistricts: "כל המחוזות",
    districts: ["צפון", "דן", "השרון", "מרכז", "ירושלים", "דרום"],
    showing: (n) => `מוצגים ${n} מתוך 120+`,
    loadMore: "לטעון עוד",
    hqTag: "מטה ארצי",
    districtTag: "סניף מחוזי",
    mapHint: "מפה אינטראקטיבית · 120+ נקודות",
  },
  en: {
    title: "120+ branches across Israel",
    lede: "From Kiryat Shmona to Eilat. Every branch — real people you can visit, write to, or call.",
    breadcrumbs: ["Regional branches"],
    searchPh: "Search by city or district…",
    allDistricts: "All districts",
    districts: ["North", "Dan", "Sharon", "Central", "Jerusalem", "South"],
    showing: (n) => `Showing ${n} of 120+`,
    loadMore: "Load more",
    hqTag: "Party HQ",
    districtTag: "District branch",
    mapHint: "Interactive map · 120+ markers",
  },
  ru: {
    title: "120+ отделений по всей стране",
    lede: "От Кирьят-Шмоны до Эйлата. Каждое отделение — это люди, к которым можно прийти, написать или позвонить.",
    breadcrumbs: ["Региональные отделения"],
    searchPh: "Поиск по городу или округу…",
    allDistricts: "Все округа",
    districts: ["Север", "Дан", "Шарон", "Центр", "Иерусалим", "Юг"],
    showing: (n) => `Показано ${n} из 120+`,
    loadMore: "Загрузить ещё",
    hqTag: "Штаб партии",
    districtTag: "Окружное отделение",
    mapHint: "Интерактивная карта · 120+ точек",
  },
};

function PageBranches({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const L = BRANCH_LABELS[lang];
  const dir = dirOf(lang);
  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="branches" />}
      <BreadCrumb lang={lang} items={L.breadcrumbs} />

      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 360px", gap: 48, alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "16px 0 16px", lineHeight: 1.04 }}>{L.title}</h1>
            <p style={{ fontSize: 18, color: c.ink2, margin: "0 0 28px", maxWidth: 600, lineHeight: 1.55 }}>{L.lede}</p>

            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <input placeholder={L.searchPh} style={{
                flex: "1 1 220px", minWidth: 0,
                border: `1px solid ${c.hair}`, borderRadius: 999,
                padding: "12px 22px", fontSize: 14, fontFamily: "inherit", outline: 0,
                textAlign: dir === "rtl" ? "right" : "left",
              }} />
              <select style={{
                border: `1px solid ${c.hair}`, borderRadius: 999,
                padding: "12px 18px", fontSize: 13.5, fontFamily: "inherit", background: c.paper,
              }}>
                <option>{L.allDistricts}</option>
                {L.districts.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>

            <div style={{ border: `1px solid ${c.hair}`, borderRadius: 14, overflow: "hidden" }}>
              {BRANCHES_DATA.map((r, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "minmax(160px, 1fr) minmax(120px, 0.8fr) minmax(200px, 1.4fr) 28px",
                  gap: 18, padding: "16px 20px",
                  borderTop: i === 0 ? 0 : `1px solid ${c.hair}`,
                  alignItems: "center", background: c.paper,
                }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{r[lang][0]}</div>
                    {(r.headquarters || r.district) && (
                      <div style={{ marginTop: 4, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: c.blue, fontWeight: 600, letterSpacing: 0.04, textTransform: "uppercase" }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: c.blue }} />
                        {r.headquarters ? L.hqTag : L.districtTag}
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: 13, color: c.ink3 }}>{r[lang][1]}</div>
                  <div style={{ fontSize: 13, color: c.ink2 }}>{r[lang][2]}</div>
                  <ArrowNext size={16} dir={dir} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: c.ink3, textAlign: "center" }}>
              {L.showing(BRANCHES_DATA.length)} · <span style={{ color: c.blue, fontWeight: 600, cursor: "pointer" }}>{L.loadMore}</span>
            </div>
          </div>

          <aside style={{ position: "sticky", top: 24, padding: 24, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.blueMist }}>
            <IsraelMap markers={BRANCH_MARKERS} width={280} height={440} fg={c.blue} bg="rgba(0,56,184,0.08)" />
            <div style={{ marginTop: 16, fontSize: 12, color: c.ink3, textAlign: "center" }}>{L.mapHint}</div>
          </aside>
        </div>
      </section>
    </div>
  );
}

// ====================== Contact ==========================
const CONTACT_PAGE = {
  he: {
    kicker: "צרו קשר",
    title: "פנו אלינו",
    lede: "מטה המפלגה, דוברות, סניפים אזוריים ופניות אישיות — כל ערוץ מוביל לתשובה.",
    channels: [
      { h: "מטה המפלגה", l: "המלך ג׳ורג׳ 38, תל אביב · ת.ד. 56216, תל-אביב 6156101", e: "info@likud.org.il", p: "+972-3-6210666" },
      { h: "דוברות",      l: "לעיתונאים בלבד",                                            e: "press@likud.org.il", p: "+972-3-6210666" },
      { h: "לשכה משפטית", l: "פניות בנוגע לחוקת המפלגה ובית הדין",                       e: "legal@likud.org.il",  p: "+972-3-6210666" },
      { h: "פניות חברים", l: "חברות, התפקדות ובחירות פנימיות",                            e: "members@likud.org.il", p: "+972-3-6210666" },
    ],
    formTitle: "כתבו לנו",
    formNote: "אנו עונים תוך 3 ימי עבודה.",
    fields: ["שם", "אימייל", "נושא", "הודעה"],
    legal: "אני מסכים/ה לעיבוד מידע אישי לפי מדיניות הפרטיות.",
    submit: "שליחת הודעה",
    breadcrumbs: ["צרו קשר"],
  },
  en: {
    kicker: "Contact",
    title: "Get in touch",
    lede: "Party HQ, the press office, regional branches, and personal inquiries — every channel leads to a reply.",
    channels: [
      { h: "Party HQ",        l: "38 King George St., Tel Aviv · P.O.B. 56216, Tel Aviv 6156101", e: "info@likud.org.il", p: "+972-3-6210666" },
      { h: "Press Office",     l: "Journalists only",                                              e: "press@likud.org.il", p: "+972-3-6210666" },
      { h: "Legal Office",     l: "Constitution and Beit Din inquiries",                            e: "legal@likud.org.il",  p: "+972-3-6210666" },
      { h: "Members Inquiries", l: "Membership and internal elections",                              e: "members@likud.org.il", p: "+972-3-6210666" },
    ],
    formTitle: "Write to us",
    formNote: "We respond within 3 business days.",
    fields: ["Name", "Email", "Subject", "Message"],
    legal: "I agree to the processing of personal data per the privacy policy.",
    submit: "Send message",
    breadcrumbs: ["Contact"],
  },
  ru: {
    kicker: "Контакты",
    title: "Свяжитесь с нами",
    lede: "Партийный штаб, пресс-служба, региональные отделения и личные обращения — каждый канал ведёт к ответу.",
    channels: [
      { h: "Штаб партии",       l: "ул. Кинг-Джордж, 38, Тель-Авив · а/я 56216, Тель-Авив 6156101", e: "info@likud.org.il", p: "+972-3-6210666" },
      { h: "Пресс-служба",       l: "Только для журналистов",                                       e: "press@likud.org.il", p: "+972-3-6210666" },
      { h: "Юридический отдел", l: "Обращения по уставу и Бейт-Дин",                              e: "legal@likud.org.il",  p: "+972-3-6210666" },
      { h: "Обращения членов",  l: "По вопросам членства и первичных",                              e: "members@likud.org.il", p: "+972-3-6210666" },
    ],
    formTitle: "Написать",
    formNote: "Мы отвечаем в течение 3 рабочих дней.",
    fields: ["Имя", "Email", "Тема", "Сообщение"],
    legal: "Я согласен с обработкой персональных данных в соответствии с политикой конфиденциальности.",
    submit: "Отправить сообщение",
    breadcrumbs: ["Контакты"],
  },
};

function PageContact({ lang = "ru", bare = false }) {
  const c = PAGE_C;
  const L = CONTACT_PAGE[lang];
  const dir = dirOf(lang);
  return (
    <div lang={lang} dir={dir} style={{ fontFamily: fontOf(lang), color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader lang={lang} active="home" />}
      <BreadCrumb lang={lang} items={L.breadcrumbs} />
      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{L.kicker}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "12px 0 24px", lineHeight: 1.02 }}>{L.title}</h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: "0 0 36px", maxWidth: 540, lineHeight: 1.55 }}>{L.lede}</p>

          {L.channels.map((x, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "minmax(160px, 1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)", gap: 18,
              padding: "20px 0", borderTop: `1px solid ${c.hair}`, alignItems: "baseline",
            }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{x.h}</div>
              <div style={{ fontSize: 14, color: c.ink2 }}>{x.l}</div>
              <div style={{ fontSize: 13, color: c.blueDeep, fontFamily: "var(--font-mono)", direction: "ltr" }}><bdi>{x.e}</bdi></div>
              <div style={{ fontSize: 13, color: c.blueDeep, fontFamily: "var(--font-mono)", direction: "ltr" }}><bdi>{x.p}</bdi></div>
            </div>
          ))}
        </div>

        <ContactForm lang={lang} dir={dir} L={L} c={c} />

      </section>
    </div>
  );
}

// ===== Section wrapper (used by design-doc.html) =====
function SectionPages() {
  const [lang, setLang] = React.useState("ru");
  const [page, setPage] = React.useState("position");
  const pages = [
    { k: "position", t: { he: "עמדה (פירוט)", en: "Position (detail)", ru: "Позиция (деталь)" } },
    { k: "news",     t: { he: "חדשות",         en: "News",              ru: "Новости (лента)" } },
    { k: "leader",   t: { he: "מנהיג",         en: "Leader",            ru: "Лидер партии" } },
    { k: "join",     t: { he: "הצטרפות",       en: "Membership",        ru: "Вступление" } },
    { k: "branches", t: { he: "סניפים",        en: "Branches",          ru: "Отделения" } },
    { k: "contact",  t: { he: "צרו קשר",       en: "Contact",           ru: "Контакты" } },
  ];
  const compMap = { position: PagePosition, news: PageNews, leader: PageLeader, join: PageJoin, branches: PageBranches, contact: PageContact };
  const Comp = compMap[page];

  return (
    <section className="doc-section bleed" id="pages">
      <div className="section-head">
        <span className="section-num">05 · Остальные страницы</span>
        <h2 className="section-title">Шесть страниц — шесть шаблонов</h2>
        <p className="section-lede">Главная задаёт визуальную ось; остальные страницы строятся по тем же правилам, но решают другие задачи. Переключайте.</p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
        {pages.map(p => (
          <button key={p.k} onClick={() => setPage(p.k)} style={{
            padding: "8px 16px", borderRadius: 999,
            border: page === p.k ? "1px solid transparent" : "1px solid var(--hairline)",
            background: page === p.k ? "var(--likud-blue)" : "var(--paper)",
            color: page === p.k ? "white" : "var(--ink-2)",
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>{p.t[lang]}</button>
        ))}
        <div style={{ marginInlineStart: "auto" }}>
          <LangSwitch value={lang} onChange={setLang} compact />
        </div>
      </div>

      <FramedPage Comp={Comp} lang={lang} />
    </section>
  );
}

function FramedPage({ Comp, lang = "ru" }) {
  const [w, setW] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(es => { for (const e of es) setW(e.contentRect.width); });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const designW = 1280;
  const scale = w ? Math.min(1, w / designW) : 0.8;
  const containerH = 1100;
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", background: "var(--paper)", border: "1px solid var(--hairline)" }}>
      <div ref={ref} style={{ width: "100%", height: containerH, overflow: "auto", background: "white", position: "relative" }}>
        <div style={{ width: designW, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <Comp lang={lang} />
        </div>
      </div>
    </div>
  );
}

function ContactForm({ lang, dir, L, c }) {
  const [vals, setVals] = React.useState({ name: "", email: "", subject: "", body: "" });
  const [agreed, setAgreed] = React.useState(false);
  const [state, setState] = React.useState("idle"); // idle | ok | bad

  const keys = ["name", "email", "subject", "body"];
  const okMsg = lang === "he" ? "תודה! פנייתכם התקבלה."
    : lang === "en" ? "Thanks — your message has been received."
    : "Спасибо! Ваше сообщение принято.";
  const badMsg = lang === "he" ? "בדקו את השדות והאישור"
    : lang === "en" ? "Please complete all fields and confirm consent"
    : "Заполните все поля и подтвердите согласие";

  const onSubmit = (e) => {
    e.preventDefault();
    const okEmail = /^\S+@\S+\.\S+$/.test(vals.email);
    if (!agreed || !vals.name.trim() || !okEmail || !vals.subject.trim() || !vals.body.trim()) {
      setState("bad");
      return;
    }
    setState("ok");
    setVals({ name: "", email: "", subject: "", body: "" });
    setAgreed(false);
  };

  return (
    <form onSubmit={onSubmit} noValidate style={{ padding: 28, border: `1px solid ${state === "bad" ? c.red : c.hair}`, borderRadius: 16, background: c.paper2 }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: 0, fontWeight: 700, letterSpacing: "-0.015em" }}>{L.formTitle}</h2>
      <p style={{ fontSize: 13, color: c.ink3, margin: "6px 0 24px" }}>{L.formNote}</p>
      <div style={{ display: "grid", gap: 14 }}>
        {L.fields.map((fl, i) => {
          const k = keys[i];
          return (
            <div key={fl}>
              <label style={{ fontSize: 12, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.08, fontWeight: 600 }}>{fl}</label>
              {i === 3 ? (
                <textarea
                  rows="4"
                  value={vals[k]}
                  onChange={e => { setVals({ ...vals, [k]: e.target.value }); if (state !== "idle") setState("idle"); }}
                  style={{ width: "100%", marginTop: 6, border: `1px solid ${c.hair}`, borderRadius: 10, padding: "12px 14px", fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none", textAlign: dir === "rtl" ? "right" : "left" }} />
              ) : (
                <input
                  type={i === 1 ? "email" : "text"}
                  value={vals[k]}
                  onChange={e => { setVals({ ...vals, [k]: e.target.value }); if (state !== "idle") setState("idle"); }}
                  style={{ width: "100%", marginTop: 6, border: `1px solid ${c.hair}`, borderRadius: 10, padding: "12px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", textAlign: dir === "rtl" ? "right" : "left" }} />
              )}
            </div>
          );
        })}
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12.5, color: c.ink2, lineHeight: 1.5 }}>
          <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ marginTop: 3, accentColor: c.blue }} />
          <span>{L.legal}</span>
        </label>
        <button type="submit" style={{ background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "14px 28px", fontSize: 14.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 4 }}>{L.submit}</button>
        {state === "ok" && <div style={{ marginTop: 8, fontSize: 13.5, color: c.blueDeep, fontWeight: 600 }}>{okMsg}</div>}
        {state === "bad" && <div style={{ marginTop: 8, fontSize: 13.5, color: c.red, fontWeight: 600 }}>{badMsg}</div>}
      </div>
    </form>
  );
}

Object.assign(window, {
  SectionPages, FramedPage,
  PagePosition, PageNews, PageLeader, PageJoin, PageBranches, PageContact,
  MiniHeader, BreadCrumb, FACTION_MKS, BRANCHES_DATA, ContactForm,
});
