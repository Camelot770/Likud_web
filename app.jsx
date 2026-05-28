// app.jsx — top-level orchestrator with sidebar nav, cover, sections, tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "he"
}/*EDITMODE-END*/;

const SECTIONS = [
  { id: "approach",   t: "Подход" },
  { id: "ia",         t: "Карта сайта · 3 языка" },
  { id: "wireframes", t: "Wireframes главной" },
  { id: "home",       t: "Hi-fi прототип главной" },
  { id: "pages",      t: "Остальные страницы" },
  { id: "system",     t: "Дизайн-система" },
  { id: "rtl",        t: "RTL-гайд" },
  { id: "tech",       t: "Технические рекомендации" },
  { id: "hero-code",  t: "Hero · код" },
  { id: "references", t: "Референсы" },
];

function Cover() {
  return (
    <section className="cover" id="cover">
      <span className="cover-kicker">Design concept · v0.1 · 2026</span>
      <h1 className="cover-title">Ликуд — <em>новый сайт</em></h1>
      <p className="cover-sub">
        Дизайн-концепция и UX-структура нового официального сайта партии Ликуд. Три языка, иврит — primary (RTL), доверительная партийная подача без startup-эстетики. Документ описывает подход, информационную архитектуру, дизайн-систему и содержит рабочий hi-fi прототип главной страницы во всех трёх локалях.
      </p>
      <dl className="cover-meta">
        <div><dt>Стек</dt><dd>Next.js 14 · TypeScript · Tailwind · next-intl</dd></div>
        <div><dt>Языки</dt><dd>עברית (primary) · English · Русский</dd></div>
        <div><dt>Документ</dt><dd>10 разделов · 1 hi-fi · 6 шаблонов</dd></div>
        <div><dt>Доступность</dt><dd>WCAG 2.1 AA</dd></div>
      </dl>
    </section>
  );
}

function DocNav({ active }) {
  return (
    <aside className="doc-aside">
      <div className="brandmark">
        <div className="brandmark-logo">L</div>
        <div className="brandmark-text">
          <span className="brandmark-name">Ликуд · Design Doc</span>
          <span className="brandmark-kicker">v0.1 · 2026</span>
        </div>
      </div>

      <div className="doc-nav-kicker">Содержание</div>
      <nav className="doc-nav">
        <ol>
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a href={"#" + s.id} className={active === s.id ? "is-active" : ""}>{s.t}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="doc-meta">
        <b>Чтение по диагонали:</b> начните с раздела 04 (живой прототип главной) — он показывает, к чему ведут все предыдущие решения.
      </div>
    </aside>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState("approach");

  // Scrollspy
  React.useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      // pick the entry with the largest intersectionRatio that is intersecting
      let best = null;
      entries.forEach(e => {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e;
      });
      if (best) setActive(best.target.id);
    }, { rootMargin: "-30% 0% -55% 0%", threshold: [0, 0.2, 0.5, 1] });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="doc">
      <DocNav active={active} />
      <main className="doc-main">
        <Cover />
        <SectionIntro />
        <SectionIA />
        <SectionWireframes />
        <SectionHome globalLang={t.lang} setGlobalLang={(v) => setTweak("lang", v)} />
        <SectionPages />
        <SectionSystem />
        <SectionRTL />
        <SectionTech />
        <SectionHeroCode />
        <SectionReferences />

        <TweaksPanel title="Tweaks">
          <TweakSection label="Язык prototype" />
          <TweakRadio
            label="Активный язык"
            value={t.lang}
            options={["he", "en", "ru"]}
            onChange={(v) => setTweak("lang", v)} />
          <div style={{ padding: "8px 12px 0", fontSize: 11, color: "var(--ink-3)", lineHeight: 1.5 }}>
            Меняет язык в режиме «Один — крупно» в разделе 04. В режиме «Три рядом» все три рендерятся одновременно.
          </div>
        </TweaksPanel>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
