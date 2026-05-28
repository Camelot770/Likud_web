// sections-doc.jsx — text-heavy sections (intro, sitemap, wireframes, RTL, tech, hero code, refs)

// ========== 1. APPROACH ==========
function SectionIntro() {
  return (
    <section className="doc-section" id="approach">
      <div className="section-head">
        <span className="section-num">01 · Подход</span>
        <h2 className="section-title">Краткое резюме подхода</h2>
        <p className="section-lede">До переходим к deliverables — пять предпосылок, которые задают всю остальную работу.</p>
      </div>

      <div className="prose" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
        <div>
          <h4>RTL — первичен</h4>
          <p>Дизайн делается «на иврите вперёд». Латинские локали — производные. Это значит: визуальное направление чтения, начало макета, направление каруселей и стрелок, позиция переключателя языков — всё прорабатывается сначала под RTL, а уже потом адаптируется под LTR. Так мы избегаем привычной ловушки, когда RTL получается «зеркальной кальки».</p>
        </div>
        <div>
          <h4>Партийный, не активистский</h4>
          <p>Визуально — близко к качественному институциональному медиа: спокойная сетка, крупная типографика, hairline-разделители, тёмно-синий и белый, никаких неонов и градиентов. Партия с пятидесятилетней историей не должна выглядеть как стартап и не должна кричать.</p>
        </div>
        <div>
          <h4>Мобайл + sticky-CTA</h4>
          <p>≈70% трафика — мобильный. Главная сцена работает с одной руки: липкая нижняя панель с двумя главными действиями — «Вступить» и «Поддержать». Десктоп получает то же сообщение, но через широкие hero-блоки и боковую навигацию.</p>
        </div>
        <div>
          <h4>Новости и заявления — в центре</h4>
          <p>Главная — это не презентация партии, а «пульт оперативной коммуникации». Сразу под hero идёт лента последних заявлений с фильтром по типу: новость, заявление, пресс-релиз, видео. Это закрывает половину сценариев использования сайта.</p>
        </div>
        <div>
          <h4>Доступность — как продуктовое требование, а не маркер</h4>
          <p>WCAG 2.1 AA, контрасты ≥4.5:1, видимые focus-кольца, переключатель размера шрифта (сохраняем функцию из текущего сайта), корректные <code>lang</code> и <code>dir</code> на корне — это не «отдельный модуль», а сквозное требование к каждому компоненту.</p>
        </div>
      </div>
    </section>
  );
}

// ========== 2. IA / SITEMAP ==========
function SectionIA() {
  const rows = [
    ["home",        "ראשי",                       "Home",                  "Главная",                   "Hero, лента, позиции, CTA"],
    ["about",       "המפלגה",                     "Party",                 "Партия",                    "История, идеология, устав, символика"],
    ["leadership",  "הנהגה",                       "Leadership",            "Руководство",               "Лидер, фракция, министры, история"],
    ["positions",   "עמדות",                       "Positions",             "Позиции",                   "6 направлений, отдельные страницы"],
    ["news",        "חדשות",                       "News",                  "Новости",                  "Лента + теги + фильтр"],
    ["media",       "מדיה",                        "Media",                 "Медиа",                     "Видео, фото, кампании"],
    ["primaries",   "בחירות פנימיות",              "Primaries",             "Первичные выборы",          "Процесс + решения Бейт-Дина"],
    ["join",        "הצטרפות",                     "Membership",            "Вступление",                "Член, волонтёр, пожертвование, рассылка"],
    ["branches",    "סניפים",                      "Branches",              "Региональные отделения",    "Карта Израиля + список"],
    ["contact",     "צרו קשר",                     "Contact",               "Контакты",                  "Формы, реквизиты, пресса"],
  ];
  return (
    <section className="doc-section tint" id="ia">
      <div className="section-head">
        <span className="section-num">02 · Информационная архитектура</span>
        <h2 className="section-title">Карта сайта на трёх языках</h2>
        <p className="section-lede">Десять корневых разделов. Иврит — primary, английский и русский — производные с собственным контентом, не «переводы один-в-один».</p>
      </div>

      <div className="surface" style={{ overflow: "auto" }}>
        <table className="spec">
          <thead>
            <tr>
              <th className="mono" style={{ width: 120 }}>Slug</th>
              <th>עברית (he)</th>
              <th>English (en)</th>
              <th>Русский (ru)</th>
              <th>Цель раздела</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([slug, he, en, ru, goal]) => (
              <tr key={slug}>
                <td className="mono" style={{ color: "var(--likud-blue-deep)" }}>/{slug}</td>
                <td dir="rtl" style={{ fontFamily: '"Heebo", "Rubik", sans-serif', fontWeight: 600 }}>{he}</td>
                <td style={{ fontWeight: 600 }}>{en}</td>
                <td style={{ fontWeight: 600 }}>{ru}</td>
                <td style={{ color: "var(--ink-2)" }}>{goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
        <div>
          <h4>Главная (/)</h4>
          <p><strong>Цель:</strong> за 8 секунд показать, кто партия, что она делает сегодня и куда нажать. <strong>Блоки:</strong> hero, лента новостей, 6 позиций, видео-обращение, статистика, карта отделений, рассылка. <strong>CTA:</strong> «Вступить» (primary), «Поддержать» (secondary). <strong>CMS:</strong> hero (флаг), новости (3 последние), видео (последнее).</p>
        </div>
        <div>
          <h4>Позиции (/positions, /positions/:slug)</h4>
          <p><strong>Цель:</strong> показать чёткую идеологическую позицию без агитационной истерики. <strong>Блоки:</strong> тезис, контекст, цитаты лидеров, связанные документы, связанные новости. <strong>CMS:</strong> структурированный MDX-документ с автором, датой, связями.</p>
        </div>
        <div>
          <h4>Новости (/news, /news/:slug)</h4>
          <p><strong>Цель:</strong> оперативная коммуникация. <strong>Блоки:</strong> лента, фильтр по типу (новость/заявление/пресс-релиз/видео), теги, поиск. <strong>CMS:</strong> headless с типизацией постов.</p>
        </div>
        <div>
          <h4>Первичные выборы (/primaries)</h4>
          <p><strong>Цель:</strong> заменить нынешнюю свалку PDF. <strong>Блоки:</strong> объяснение процесса, расписание, решения Бейт-Дина (структурированный архив с поиском и тегами), результаты прошлых первичных. <strong>CMS:</strong> отдельная коллекция «Документы», PDF — как attachment, а не как основной контент.</p>
        </div>
        <div>
          <h4>Вступление и поддержка (/join)</h4>
          <p><strong>Цель:</strong> единый funnel: член партии, волонтёр, пожертвование, рассылка. <strong>Блоки:</strong> 4 пути, форма для каждого, юридическая нотация (израильский закон о финансировании партий), благодарность. <strong>CMS:</strong> ничего, формы — через сервис.</p>
        </div>
        <div>
          <h4>Региональные отделения (/branches)</h4>
          <p><strong>Цель:</strong> найти ближайший филиал. <strong>Блоки:</strong> карта Израиля с маркерами, список с поиском по городу, страница филиала (председатель, адрес, контакты, ближайшие события). <strong>CMS:</strong> коллекция «Отделения».</p>
        </div>
      </div>
    </section>
  );
}

// ========== 3. WIREFRAMES ==========
function SectionWireframes() {
  const wires = [
    { n: "01", name: "Top bar + sticky header",   role: "Брендинг, главная навигация, переключатель языка, мини-CTA «Вступить»" },
    { n: "02", name: "Hero",                       role: "Портрет лидера, короткий лозунг, 2 CTA, статус-строка («горящее заявление»)" },
    { n: "03", name: "Лента новостей",             role: "3 последние карточки по типу + ссылка «все новости»" },
    { n: "04", name: "Позиции (6 карточек)",       role: "Сетка 3×2 на десктопе, 1 колонка на мобильном, иконка + название + тезис" },
    { n: "05", name: "Видео-блок",                 role: "Последнее обращение лидера, full-bleed, без автоплея, captions on" },
    { n: "06", name: "Статистика партии",          role: "Большие числа на тёмно-синем фоне, hairline-разделители" },
    { n: "07", name: "Карта отделений",            role: "Контурная карта Израиля + список филиалов рядом" },
    { n: "08", name: "Рассылка",                   role: "Inline-форма, GDPR-чек, ссылка на политику" },
    { n: "09", name: "Footer",                     role: "Развёрнутая навигация, юр. блок, языки, соцсети" },
    { n: "10", name: "Sticky mobile CTA",          role: "Только мобайл: «Вступить» / «Поддержать», sticky bottom, не перекрывает контент" },
  ];

  return (
    <section className="doc-section" id="wireframes">
      <div className="section-head">
        <span className="section-num">03 · Wireframes</span>
        <h2 className="section-title">Главная — поэкранно</h2>
        <p className="section-lede">10 секций сверху вниз. Слева — ASCII-схема для иврит-варианта (RTL), справа — назначение каждой секции и CMS-привязки.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 32, alignItems: "start" }}>
        {/* RTL ASCII */}
        <div className="surface">
          <div className="surface-head">
            <div className="head-title">RTL (he) — ASCII-схема</div>
            <div className="head-meta">dir="rtl"</div>
          </div>
          <pre className="mono" style={{ border: 0, borderRadius: 0, background: "var(--paper)" }}>{`
┌──────────────────────────────────────────────────┐
│  הצטרפות [CTA]   EN RU |  עמדות  חדשות  הנהגה  ⟪לוגו⟫ │ ← 01 sticky header (RTL)
├──────────────────────────────────────────────────┤
│                                                  │
│   [פורטרט        ישראל חזקה.  ⟸                  │
│    הראש          עתיד בטוח.                       │
│    ראש           הצטרפות  ▸    תרומה  ▸           │ ← 02 hero (portrait LEFT in RTL)
│    הממשלה]       בזק: ◉ הצהרת ראש המפלגה כעת   │
│                                                  │
├──────────────────────────────────────────────────┤
│   חדשות והודעות                  כל החדשות ⟸    │
│   [▦ הצהרה] [▦ חדשות] [▦ וידאו] [▦ מסמך]      │ ← 03 news strip (4 cards RTL)
├──────────────────────────────────────────────────┤
│   עמדות הליכוד · מה אנחנו מאמינים                │
│   ┌─────┬─────┬─────┐                            │
│   │ ביט │ כלכ │ חוץ │                            │
│   ├─────┼─────┼─────┤                            │ ← 04 6 positions, 3×2
│   │ חבר │ התי │ מור │                            │
│   └─────┴─────┴─────┘                            │
├──────────────────────────────────────────────────┤
│   ╔══════════════════════════════════════════╗  │
│   ║   ▶  וידאו · נאום אחרון של ראש המפלגה   ║  │ ← 05 video
│   ╚══════════════════════════════════════════╝  │
├──────────────────────────────────────────────────┤
│   המפלגה במספרים                                  │
│   120 │ 32 │ 150K+ │ 50                          │ ← 06 stats (dark blue band)
├──────────────────────────────────────────────────┤
│   סניפים בכל הארץ              [רשימת סניפים]    │
│   [מפת ישראל עם נקודות]                          │ ← 07 branches map
├──────────────────────────────────────────────────┤
│   להישאר מעודכנים                                 │
│   [____ אימייל ____] [להירשם]                     │ ← 08 newsletter
├──────────────────────────────────────────────────┤
│   FOOTER · נווט מלא · יצירת קשר · שפות           │ ← 09 footer
├──────────────────────────────────────────────────┤
│  [הצטרפות] [תרומה]    (mobile only, sticky)      │ ← 10 mobile CTA
└──────────────────────────────────────────────────┘`}</pre>
        </div>

        {/* Wire descriptions */}
        <div className="surface">
          <div className="surface-head">
            <div className="head-title">Назначение каждой секции</div>
            <div className="head-meta">10 секций · CMS-tied</div>
          </div>
          <div style={{ padding: 0 }}>
            {wires.map(w => (
              <div key={w.n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, padding: "14px 18px", borderBottom: "1px solid var(--hairline)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--likud-blue)", marginTop: 2 }}>{w.n}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13.5, color: "var(--ink)" }}>{w.name}</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 4, lineHeight: 1.5 }}>{w.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LTR mirror note */}
      <div className="surface" style={{ marginTop: 32 }}>
        <div className="surface-head">
          <div className="head-title">LTR-зеркало (en / ru)</div>
          <div className="head-meta">dir="ltr"</div>
        </div>
        <div style={{ padding: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          <div><h4 style={{ margin: "0 0 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Что зеркалится</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: "var(--ink-2)" }}>
              <li>Логотип — слева</li>
              <li>Главная навигация — слева</li>
              <li>Языки и CTA — справа</li>
              <li>Стрелки в каруселях — вправо</li>
              <li>Hero-портрет — справа, текст — слева</li>
            </ul>
          </div>
          <div><h4 style={{ margin: "0 0 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Что НЕ зеркалится</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: "var(--ink-2)" }}>
              <li>Числа и даты (всегда LTR)</li>
              <li>Латиница в цитатах</li>
              <li>Логотипы партнёров</li>
              <li>Иконки воспроизведения видео</li>
              <li>Карта Израиля и схемы</li>
            </ul>
          </div>
          <div><h4 style={{ margin: "0 0 6px", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Меняется по смыслу</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: "var(--ink-2)" }}>
              <li>Иконка «следующая новость» — поворот</li>
              <li>Позиция аватара в карточке</li>
              <li>Текст-выравнивание форм</li>
              <li>Бордер карточки (start/end)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== 7. RTL GUIDE ==========
function SectionRTL() {
  return (
    <section className="doc-section tint" id="rtl">
      <div className="section-head">
        <span className="section-num">07 · RTL-гайд</span>
        <h2 className="section-title">Работа с ивритом, без ловушек</h2>
        <p className="section-lede">Правила, которые превращают «зеркальный CSS» в полноценный RTL-макет. Tailwind 3.3+ имеет нативную поддержку <code>rtl:</code>, <code>ltr:</code> и логических утилит — пользуемся ими.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Принцип</h4>
          <h3 style={{ margin: "8px 0 8px", fontSize: 18, fontWeight: 600 }}>Логические свойства вместо физических</h3>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
            Везде <code>margin-inline-start</code> / <code>padding-inline-end</code>, никаких <code>margin-left</code> / <code>padding-right</code>. В Tailwind — <code>ms-4</code>, <code>pe-6</code>, <code>start-0</code>, <code>end-0</code>, <code>text-start</code>, <code>text-end</code>.
          </p>
        </div>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Принцип</h4>
          <h3 style={{ margin: "8px 0 8px", fontSize: 18, fontWeight: 600 }}>Числа и даты — bidi-isolate</h3>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
            В RTL-абзаце оборачиваем <code>{'<bdi>28.05.2026</bdi>'}</code> или <code>{'<span dir="ltr">12:30</span>'}</code>. Иначе браузер «съест» пунктуацию.
          </p>
        </div>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Принцип</h4>
          <h3 style={{ margin: "8px 0 8px", fontSize: 18, fontWeight: 600 }}>Иконки — направление-aware</h3>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
            «Дальше», «больше», «в архив» — стрелка переворачивается. Делается через <code>rtl:rotate-180</code> или CSS-логику. Иконка play, плюс, поиск — НЕ переворачиваются.
          </p>
        </div>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Принцип</h4>
          <h3 style={{ margin: "8px 0 8px", fontSize: 18, fontWeight: 600 }}>Шрифт по локали</h3>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
            Иврит — <code>Heebo</code> (или Rubik с ивритским subset). Латиница / кириллица — <code>Rubik</code>. На корне переключаем через <code>font-family</code> по <code>:lang(he)</code>.
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: 48, fontSize: 22, letterSpacing: "-0.01em" }}>Tailwind-классы, которые используем</h3>
      <div className="surface" style={{ overflow: "auto", marginTop: 12 }}>
        <table className="spec">
          <thead><tr><th>Сценарий</th><th>Физический (НЕ так)</th><th>Логический (правильно)</th></tr></thead>
          <tbody>
            <tr><td>Отступ от логотипа до меню</td><td className="mono">ml-8</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>ms-8</td></tr>
            <tr><td>Кнопка-стрелка справа</td><td className="mono">right-0</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>end-0</td></tr>
            <tr><td>Выравнивание текста в карточке</td><td className="mono">text-left</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>text-start</td></tr>
            <tr><td>Поворот стрелки в RTL</td><td className="mono">—</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>rtl:rotate-180</td></tr>
            <tr><td>Граница только с одной стороны</td><td className="mono">border-l</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>border-s</td></tr>
            <tr><td>Скругление углов карточки</td><td className="mono">rounded-tl-lg</td><td className="mono" style={{ color: "var(--likud-blue-deep)" }}>rounded-ss-lg</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ========== 8. TECH ==========
function SectionTech() {
  return (
    <section className="doc-section" id="tech">
      <div className="section-head">
        <span className="section-num">08 · Технические рекомендации</span>
        <h2 className="section-title">Next.js, локали, CMS, SEO, производительность</h2>
        <p className="section-lede">Стек уже задан: Next.js (App Router) + TypeScript + Tailwind. Ниже — конкретика, как мы это собираем.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 32, alignItems: "start" }}>
        <div className="surface">
          <div className="surface-head"><div className="head-title">Структура папок</div><div className="head-meta">app router · i18n routing</div></div>
          <pre className="mono" style={{ border: 0, borderRadius: 0, background: "var(--paper)" }}>{`app/
├── [locale]/
│   ├── layout.tsx          ← <html lang={locale} dir={dir}>
│   ├── page.tsx            ← главная
│   ├── about/
│   ├── leadership/
│   ├── positions/
│   │   ├── page.tsx        ← листинг
│   │   └── [slug]/page.tsx ← страница позиции
│   ├── news/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── primaries/
│   ├── join/
│   ├── branches/
│   │   └── [slug]/page.tsx
│   └── contact/
├── api/
│   ├── newsletter/route.ts
│   ├── join/route.ts
│   └── donate/route.ts     ← POST → платёжный шлюз
└── globals.css

content/                    ← MDX, синхронизируется с CMS
├── positions/
├── news/
└── branches/

messages/
├── he.json
├── en.json
└── ru.json

lib/
├── i18n.ts                 ← next-intl config
├── cms.ts                  ← headless client (Sanity / Strapi)
└── seo.ts                  ← hreflang, sitemap, OG`}</pre>
        </div>

        <div className="surface">
          <div className="surface-head"><div className="head-title">Локали и i18n</div><div className="head-meta">next-intl</div></div>
          <div style={{ padding: 22 }}>
            <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Маршрутизация</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}><code>/he</code> — primary, без редиректа на корне (он отдаёт RTL-главную). <code>/en</code>, <code>/ru</code> — параллельные. На корне <code>/</code> — middleware, читающий <code>Accept-Language</code>, fallback на <code>he</code>.</p>
            <h4 style={{ margin: "20px 0 0", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Запоминание выбора</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>Cookie <code>NEXT_LOCALE</code>, срок жизни 1 год. Переключатель — не редирект, а replace, чтобы сохранить scroll и состояние.</p>
            <h4 style={{ margin: "20px 0 0", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>RTL/LTR</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>В <code>layout.tsx</code> рендерим <code>{`<html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>`}</code>. Tailwind: <code>{`darkMode: 'class'`}</code>, <code>{`screens: { ... }`}</code>, плагин <code>tailwindcss-rtl</code> (или нативные логические утилиты v3.3+).</p>
          </div>
        </div>

        <div className="surface">
          <div className="surface-head"><div className="head-title">CMS-подход</div><div className="head-meta">headless · MDX-first</div></div>
          <div style={{ padding: 22 }}>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 0 }}>
              Headless CMS — <strong>Sanity</strong> или <strong>Strapi</strong> (self-hosted, важно для партии). Коллекции: <code>news</code>, <code>positions</code>, <code>leaders</code>, <code>branches</code>, <code>documents</code>, <code>pages</code>. Контент — структурированный JSON + portable text. Длинные статьи — <strong>MDX</strong> в репозитории, с превью в CMS.
            </p>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
              Каждая сущность — три языковых поля (<code>he</code>, <code>en</code>, <code>ru</code>), но не как «обязательная калька»: новость может выходить только на иврите, тогда <code>en/ru</code> показывает плашку «Originally published in Hebrew → перейти к ивритской версии».
            </p>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
              Документы (PDF Бейт-Дина и комиссии) — отдельная коллекция с типизацией: <code>type</code>, <code>date</code>, <code>summary</code>, <code>attachment</code>. Никаких «загрузил PDF в Joomla и забыл», как сейчас.
            </p>
          </div>
        </div>

        <div className="surface">
          <div className="surface-head"><div className="head-title">SEO и производительность</div><div className="head-meta">LCP &lt; 2.5s · A11Y AA</div></div>
          <div style={{ padding: 22 }}>
            <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>hreflang</h4>
            <pre className="mono" style={{ border: 0, fontSize: 11.5, padding: "10px 0" }}>{`<link rel="alternate" hreflang="he" href="/he/..." />
<link rel="alternate" hreflang="en" href="/en/..." />
<link rel="alternate" hreflang="ru" href="/ru/..." />
<link rel="alternate" hreflang="x-default" href="/he/..." />`}</pre>
            <h4 style={{ margin: "12px 0 0", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Sitemap</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>Раздельные <code>sitemap-he.xml</code>, <code>sitemap-en.xml</code>, <code>sitemap-ru.xml</code> + индекс <code>sitemap.xml</code>. Генерируем через <code>next-sitemap</code>.</p>
            <h4 style={{ margin: "12px 0 0", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Картинки и LCP</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
              <code>next/image</code> с AVIF + WebP, hero — priority, остальные — lazy. Hero-портрет — 1600×2000, отдаётся через CDN. Шрифты — <code>next/font/google</code>, subsets <code>hebrew</code>, <code>cyrillic</code>, <code>latin</code>, <code>display=swap</code>.
            </p>
            <h4 style={{ margin: "12px 0 0", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>OpenGraph</h4>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>Динамические OG-картинки через <code>@vercel/og</code> — заголовок поста + бренд-фрейм. Twitter card <code>summary_large_image</code>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== 9. HERO CODE ==========
function SectionHeroCode() {
  const [tab, setTab] = React.useState("he");
  const code = {
    he: `<section className="grid lg:grid-cols-12 gap-8 py-20" dir="rtl">
  <div className="lg:col-span-7 order-2 lg:order-1">
    <p className="text-sm font-medium tracking-wide text-blue-700">
      <span className="inline-block w-2 h-2 rounded-full bg-red-600 me-2 animate-pulse" />
      <bdi>בזק</bdi> · הצהרת יו״ר המפלגה כעת
    </p>
    <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance">
      ישראל חזקה.<br/>עתיד בטוח.
    </h1>
    <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
      המפלגה הליברלית-לאומית של ישראל. ארבעים שנה של אחריות לאומית,
      ביטחון ושוק חופשי.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/he/join" className="rounded-full bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800">
        הצטרפות לליכוד
      </a>
      <a href="/he/join/donate" className="rounded-full border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">
        תרומה
      </a>
    </div>
  </div>
  <div className="lg:col-span-5 order-1 lg:order-2">
    <Image src="/portraits/chairman.jpg" alt="יו״ר המפלגה"
      width={800} height={1000} priority
      className="rounded-2xl aspect-[4/5] object-cover" />
  </div>
</section>`,
    en: `<section className="grid lg:grid-cols-12 gap-8 py-20" dir="ltr">
  <div className="lg:col-span-7">
    <p className="text-sm font-medium tracking-wide text-blue-700">
      <span className="inline-block w-2 h-2 rounded-full bg-red-600 me-2 animate-pulse" />
      Breaking · Chairman statement live now
    </p>
    <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance">
      Strong Israel.<br/>Secure Future.
    </h1>
    <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
      Israel's national-liberal party. Four decades of national
      responsibility, security, and the free market.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/en/join" className="rounded-full bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800">
        Join the Likud
      </a>
      <a href="/en/join/donate" className="rounded-full border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">
        Donate
      </a>
    </div>
  </div>
  <div className="lg:col-span-5">
    <Image src="/portraits/chairman.jpg" alt="Party Chairman"
      width={800} height={1000} priority
      className="rounded-2xl aspect-[4/5] object-cover" />
  </div>
</section>`,
    ru: `<section className="grid lg:grid-cols-12 gap-8 py-20" dir="ltr">
  <div className="lg:col-span-7">
    <p className="text-sm font-medium tracking-wide text-blue-700">
      <span className="inline-block w-2 h-2 rounded-full bg-red-600 me-2 animate-pulse" />
      Главное · Заявление председателя сейчас
    </p>
    <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance">
      Сильный Израиль.<br/>Надёжное будущее.
    </h1>
    <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
      Национально-либеральная партия Израиля. Сорок лет ответственности
      за страну, безопасности и свободного рынка.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/ru/join" className="rounded-full bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800">
        Вступить в Ликуд
      </a>
      <a href="/ru/join/donate" className="rounded-full border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">
        Поддержать
      </a>
    </div>
  </div>
  <div className="lg:col-span-5">
    <Image src="/portraits/chairman.jpg" alt="Председатель партии"
      width={800} height={1000} priority
      className="rounded-2xl aspect-[4/5] object-cover" />
  </div>
</section>`,
  };
  return (
    <section className="doc-section ink" id="hero-code">
      <div className="section-head">
        <span className="section-num">09 · Hero — пример кода</span>
        <h2 className="section-title">HTML + Tailwind, рабочий RTL</h2>
        <p className="section-lede">Один шаблон — три локали. Различие только в направлении (<code>dir</code>) и порядке колонок через <code>order-1</code> / <code>order-2</code> в RTL.</p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {LANGS.map(L => (
          <button key={L.code} onClick={() => setTab(L.code)}
            style={{
              padding: "8px 16px", borderRadius: 999,
              border: "1px solid " + (tab === L.code ? "transparent" : "rgba(255,255,255,0.18)"),
              background: tab === L.code ? "var(--likud-blue)" : "transparent",
              color: tab === L.code ? "white" : "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer",
              transition: "all var(--dur-fast) var(--ease)",
            }}>{L.label} · {L.code}</button>
        ))}
      </div>
      <pre className="code" style={{ whiteSpace: "pre", maxHeight: 540, overflow: "auto" }}>{code[tab]}</pre>
    </section>
  );
}

// ========== 10. REFERENCES ==========
function SectionReferences() {
  const refs = [
    { name: "CDU.de",                 cat: "Партия (DE, центр-правая)",   url: "cdu.de",                 note: "Спокойная типографика, ясная иерархия позиций, серьёзный фотостиль. Эталон институциональной правоцентристской подачи." },
    { name: "Les Républicains",       cat: "Партия (FR, центр-правая)",   url: "republicains.fr",        note: "Сильный синий, крупные кнопки CTA, агрессивная новостная лента — ровно то, что нужно действующей политической силе." },
    { name: "Conservatives.com",      cat: "Партия (UK, центр-правая)",   url: "conservatives.com",      note: "Очень функциональный hero, разделение «обращение лидера» и «вступить/пожертвовать». Хорошее разделение оперативной и идеологической коммуникации." },
    { name: "GOV.UK",                 cat: "Институциональный",            url: "gov.uk",                 note: "Эталон доступности и плотности информации. Не визуальный референс, но методический — как структурировать государственный/политический контент для всех." },
    { name: "The Atlantic",           cat: "Медиа (типографика)",          url: "theatlantic.com",        note: "Образец типографики на длинных формах. Используем как референс для страниц «Позиции» и «Новости» — читабельность, ритм, рассказ." },
  ];
  return (
    <section className="doc-section tint" id="references">
      <div className="section-head">
        <span className="section-num">10 · Референсы</span>
        <h2 className="section-title">Пять сайтов, на которые мы смотрим</h2>
        <p className="section-lede">Не для копирования визуала, а для калибровки планки и понимания, что считается «институциональной» подачей.</p>
      </div>
      <div className="surface" style={{ overflow: "hidden" }}>
        {refs.map((r, i) => (
          <div key={r.name} style={{
            display: "grid",
            gridTemplateColumns: "minmax(200px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(280px, 2fr)",
            gap: 16, padding: "20px 24px",
            borderBottom: i === refs.length - 1 ? 0 : "1px solid var(--hairline)",
            alignItems: "baseline",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>{r.name}</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-3)" }}>{r.cat}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--likud-blue-deep)" }}>{r.url}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{r.note}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 64, padding: 32, borderTop: "1px solid var(--hairline)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: "var(--ink-3)" }}>Конец документа</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", marginTop: 6 }}>Готовы переходить к Figma и спринт-плану.</div>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>v0.1 · design · 2026</div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionIntro, SectionIA, SectionWireframes, SectionRTL, SectionTech, SectionHeroCode, SectionReferences });
