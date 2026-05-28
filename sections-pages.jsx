// sections-pages.jsx — Section 05: mockups of the remaining page types
// Each rendered in Russian (LTR), one-up, with browser chrome.
// The pattern carries over to he/en via the same content dictionary.

const PAGE_C = {
  blue: "#0038B8", blueDeep: "#002A6E", blueInk: "#001541",
  blueSoft: "#E6EDF8", blueMist: "#F3F6FB",
  red: "#C8102E",
  ink: "#0A1426", ink2: "#38465C", ink3: "#6E7A8E",
  paper: "#FFFFFF", paper2: "#FAFBFD", hair: "#E3E7EE",
};

// Mini-header used in every page mock — keeps things consistent
function MiniHeader({ active = "Главная" }) {
  const c = PAGE_C;
  return (
    <header style={{ background: c.paper, borderBottom: `1px solid ${c.hair}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LikudMark size={36} bg={c.blue} />
          <div style={{ fontWeight: 800, letterSpacing: "-0.02em", fontSize: 16 }}>LIKUD</div>
        </div>
        <nav style={{ display: "flex", gap: 24, fontSize: 14, fontWeight: 500 }}>
          {["Главная", "Партия", "Руководство", "Позиции", "Новости", "Отделения", "Первичные выборы"].map(n => (
            <span key={n} style={{
              color: n === active ? c.blue : c.ink2,
              borderBottom: n === active ? `2px solid ${c.blue}` : "none",
              paddingBottom: 3,
            }}>{n}</span>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "inline-flex", gap: 2, padding: 3, border: `1px solid ${c.hair}`, borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
            <span style={{ padding: "4px 8px", borderRadius: 999, color: c.ink3 }}>HE</span>
            <span style={{ padding: "4px 8px", borderRadius: 999, color: c.ink3 }}>EN</span>
            <span style={{ padding: "4px 8px", borderRadius: 999, background: c.blue, color: "white" }}>RU</span>
          </div>
          <button style={{ background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "9px 18px", fontSize: 13, fontWeight: 600 }}>Вступить</button>
        </div>
      </div>
    </header>
  );
}

function BreadCrumb({ items }) {
  const c = PAGE_C;
  return (
    <div style={{ fontSize: 12, color: c.ink3, padding: "20px 32px 0", maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, alignItems: "center" }}>
      {items.map((x, i) => (
        <React.Fragment key={i}>
          <span style={{ color: i === items.length - 1 ? c.ink : c.ink3 }}>{x}</span>
          {i < items.length - 1 ? <span style={{ color: c.ink4 }}>/</span> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

// ====================== PAGE: Position detail ======================
function PagePosition({ bare = false }) {
  const c = PAGE_C;
  const positions = ["Безопасность", "Экономика", "Внешняя политика", "Общество", "Поселения", "Наследие"];
  const active = "Безопасность";
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Позиции" />}
      <BreadCrumb items={["Позиции", "Безопасность"]} />

      <section style={{ padding: "48px 32px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0, 1fr) 280px", gap: 56, alignItems: "start" }}>
          {/* Sidebar TOC */}
          <aside style={{ position: "sticky", top: 24 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 14 }}>Все позиции</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 4 }}>
              {positions.map(p => (
                <li key={p} style={{
                  padding: "10px 14px", borderRadius: 8,
                  background: p === active ? c.blueSoft : "transparent",
                  color: p === active ? c.blueDeep : c.ink2,
                  fontWeight: p === active ? 600 : 500,
                  fontSize: 13.5,
                  borderLeft: p === active ? `2px solid ${c.blue}` : "2px solid transparent",
                }}>{p}</li>
              ))}
            </ul>
          </aside>

          {/* Article */}
          <article>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>Позиция Ликуда</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, letterSpacing: "-0.03em", fontWeight: 800, margin: "12px 0 16px", lineHeight: 1.02, textWrap: "balance" }}>
              Национальная<br/>безопасность Израиля
            </h1>
            <p style={{ fontSize: 20, color: c.ink2, lineHeight: 1.5, margin: "0 0 32px", maxWidth: 640 }}>
              Израильский суверенитет, сильный ЦАХАЛ и региональное сдерживание — три опоры, на которых строится наша позиция по безопасности.
            </p>
            <div style={{ display: "flex", gap: 18, fontSize: 12.5, color: c.ink3, paddingBottom: 24, borderBottom: `1px solid ${c.hair}` }}>
              <span>Обновлено: <bdi>28 мая 2026</bdi></span>
              <span>Раздел: Безопасность</span>
              <span>Связанных материалов: 14</span>
            </div>

            <div style={{ fontSize: 17, lineHeight: 1.7, color: c.ink, marginTop: 32, maxWidth: 640 }}>
              <p style={{ marginTop: 0 }}>Безопасность Израиля — не политическая позиция, а условие существования. Ликуд считает, что любая дискуссия о внутренней или внешней политике страны должна начинаться с этого тезиса и им же поверяться.</p>

              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, letterSpacing: "-0.02em", margin: "40px 0 14px", fontWeight: 700 }}>Три опоры</h2>

              {[
                { n: "01", h: "Суверенное право на оборону", t: "Государство Израиль не должно отчитываться ни перед кем за решения, принимаемые в защиту своих граждан. Соглашения и форматы — допустимы; согласование права на самооборону — нет." },
                { n: "02", h: "Сильный ЦАХАЛ", t: "Армия — единственный институт, в котором не может быть бюджетных компромиссов. Технологическое превосходство, профессиональный костяк, всеобщая обязанность." },
                { n: "03", h: "Региональное сдерживание", t: "Расширение Соглашений Авраама и продолжение жёсткой линии в отношении Ирана и его прокси — основа стабильности, а не «эскалации»." },
              ].map(b => (
                <div key={b.n} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 18, padding: "22px 0", borderBottom: `1px solid ${c.hair}` }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: c.blue, fontWeight: 600 }}>{b.n}</div>
                  <div>
                    <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 6 }}>{b.h}</div>
                    <p style={{ margin: 0, fontSize: 16, color: c.ink2, lineHeight: 1.6 }}>{b.t}</p>
                  </div>
                </div>
              ))}

              {/* Pull-quote */}
              <blockquote style={{
                margin: "40px 0", padding: "28px 32px",
                borderLeft: `3px solid ${c.blue}`, background: c.blueMist,
                fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500,
                lineHeight: 1.35, letterSpacing: "-0.01em",
                color: c.ink, fontStyle: "normal",
              }}>
                «Свобода без безопасности — иллюзия. Безопасность без свободы — тирания. Мы отвечаем за обе.»
                <footer style={{ marginTop: 14, fontSize: 13, color: c.ink3, fontWeight: 400 }}>— Из заявления Председателя партии, май 2026</footer>
              </blockquote>
            </div>
          </article>

          {/* Right rail: related */}
          <aside>
            <div style={{ position: "sticky", top: 24, display: "grid", gap: 16 }}>
              <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12, background: c.paper2 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>Связанные документы</div>
                {["Программа партии · гл. 3", "Резолюция съезда 2025", "Заявление по Газе, март 2026"].map((x, i) => (
                  <div key={i} style={{ padding: "10px 0", borderTop: i === 0 ? 0 : `1px solid ${c.hair}`, fontSize: 13.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{x}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: c.ink3 }}>PDF</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>Последние заявления по теме</div>
                {["Заявление Председателя · 28.05", "Брифинг Министра обороны · 26.05", "Реакция фракции · 25.05"].map((x, i) => (
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

// ====================== PAGE: News index ======================
function PageNews({ bare = false }) {
  const c = PAGE_C;
  const items = [
    { type: "Заявление",   date: "28.05.2026", title: "Заявление Председателя: «Безопасность Израиля — святыня»", excerpt: "Полный текст заявления, переданного по итогам заседания кабинета.", read: "5 мин" },
    { type: "Новости",     date: "27.05.2026", title: "5-й съезд Ликуда соберётся в Биньяней ха-Ума 18 июня", excerpt: "Делегатов от регионов изберут до 10 июня. Регистрация прессы открыта.", read: "3 мин" },
    { type: "Пресс-релиз", date: "26.05.2026", title: "Фракция Ликуда внесла поправки ко второму чтению закона о бюджете", excerpt: "32 поправки касаются прежде всего обороны, образования и поддержки семей резервистов.", read: "4 мин" },
    { type: "Видео",       date: "26.05.2026", title: "Премьер-министр в Кнессете: «Мы не вернёмся в 6 октября»", excerpt: "Запись выступления на пленарном заседании, продолжительность 14 минут.", read: "14 мин" },
    { type: "Документ",    date: "25.05.2026", title: "Опубликованы решения партийного суда (Бейт-Дин) за апрель", excerpt: "12 решений, включая 3 апелляции по итогам внутренних выборов.", read: "PDF" },
    { type: "Заявление",   date: "24.05.2026", title: "Заявление по итогам встречи с госсекретарём США", excerpt: "Союз с США остаётся опорой региональной стабильности.", read: "3 мин" },
  ];
  const types = ["Все", "Заявления", "Новости", "Пресс-релизы", "Видео", "Документы"];
  const tags = ["Безопасность", "Экономика", "Кнессет", "Первичные выборы", "Соглашения Авраама", "Бейт-Дин"];
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Новости" />}
      <BreadCrumb items={["Новости"]} />
      <section style={{ padding: "32px 32px 64px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.02 }}>Новости и заявления</h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: "12px 0 0", maxWidth: 640 }}>Оперативная коммуникация партии: с трибуны Кнессета, из штаба и с земли.</p>
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${c.hair}`, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "inline-flex", gap: 4, padding: 4, borderRadius: 999, background: c.paper2, border: `1px solid ${c.hair}` }}>
            {types.map((t, i) => (
              <span key={t} style={{
                padding: "8px 14px", fontSize: 13, fontWeight: 600, borderRadius: 999,
                background: i === 0 ? c.blue : "transparent",
                color: i === 0 ? "white" : c.ink2,
              }}>{t}</span>
            ))}
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }}>
            <input placeholder="Поиск по новостям…" style={{
              border: `1px solid ${c.hair}`, borderRadius: 999, padding: "10px 18px",
              fontSize: 13.5, width: 260, fontFamily: "inherit", outline: 0,
            }} />
            <span style={{ fontSize: 12, color: c.ink3 }}>За месяц: 47 материалов</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 280px", gap: 48, alignItems: "start" }}>
          {/* List */}
          <div>
            {items.map((n, i) => (
              <article key={i} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, padding: "28px 0", borderTop: i === 0 ? 0 : `1px solid ${c.hair}` }}>
                <Plate label={n.type} tone={i % 3 === 0 ? "deep" : i % 3 === 1 ? "soft" : "mist"} ratio="4/3" />
                <div>
                  <div style={{ display: "flex", gap: 14, fontSize: 12, color: c.ink3, marginBottom: 10, alignItems: "center" }}>
                    <span style={{ color: c.blue, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.06 }}>{n.type}</span>
                    <span><bdi>{n.date}</bdi></span>
                    <span>·</span>
                    <span>{n.read}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 8px", lineHeight: 1.25 }}>{n.title}</h2>
                  <p style={{ margin: 0, fontSize: 15, color: c.ink2, lineHeight: 1.55, maxWidth: 560 }}>{n.excerpt}</p>
                  <div style={{ marginTop: 14, fontSize: 13, color: c.blue, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Читать <ArrowNext size={14} dir="ltr" />
                  </div>
                </div>
              </article>
            ))}
            {/* pagination */}
            <div style={{ marginTop: 32, display: "flex", gap: 6, alignItems: "center", justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map(n => (
                <span key={n} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: n === 1 ? c.blue : "transparent",
                  color: n === 1 ? "white" : c.ink2,
                  display: "grid", placeItems: "center",
                  fontSize: 13, fontWeight: 600,
                  border: n === 1 ? "none" : `1px solid ${c.hair}`,
                }}>{n}</span>
              ))}
              <span style={{ marginInlineStart: 6, fontSize: 13, color: c.ink3 }}>… 23</span>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ display: "grid", gap: 18 }}>
            <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 12 }}>Темы</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tags.map(t => (
                  <span key={t} style={{
                    padding: "6px 12px", borderRadius: 999,
                    background: "white", border: `1px solid ${c.hair}`,
                    fontSize: 12, color: c.ink2, fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 10 }}>Подписка</div>
              <p style={{ fontSize: 13, color: c.ink2, margin: "0 0 12px", lineHeight: 1.5 }}>Еженедельный дайджест заявлений и решений партии.</p>
              <button style={{ width: "100%", background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "10px 0", fontSize: 13, fontWeight: 600 }}>Подписаться</button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

// ====================== PAGE: Leader / profile ======================
function PageLeader({ bare = false }) {
  const c = PAGE_C;
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Руководство" />}
      <section style={{ background: c.blueInk, color: "white", padding: "80px 32px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: "#6E9DFF", fontWeight: 600 }}>Председатель партии</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 72, letterSpacing: "-0.035em", fontWeight: 800, margin: "16px 0 24px", lineHeight: 1, color: "white" }}>
              Биньямин<br/>Нетаньяху
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.78)", lineHeight: 1.5, margin: 0, maxWidth: 540 }}>
              Премьер-министр Государства Израиль. Председатель Ликуда с 2005 года. Депутат Кнессета с 1988 года.
            </p>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
              {[
                { n: "1949", l: "Год рождения" },
                { n: "1996", l: "Первый срок премьера" },
                { n: "32", l: "Депутата фракции" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "20px 0",
                  borderRight: i === 2 ? 0 : "1px solid rgba(255,255,255,0.18)",
                  paddingLeft: i === 0 ? 0 : 24,
                  paddingRight: i === 2 ? 0 : 24,
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "white" }}>{s.n}</div>
                  <div style={{ marginTop: 6, fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 0.08 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div><Plate label="Биньямин Нетаньяху · Председатель партии" tone="deep" ratio="4/5" src="images/netanyahu.jpg" /></div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 32px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "200px minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
        <aside style={{ position: "sticky", top: 24 }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3, marginBottom: 14 }}>На этой странице</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6, fontSize: 13.5 }}>
            {["Биография", "Карьера в политике", "Позиции", "Последние выступления", "Фракция", "Контакты офиса"].map((x, i) => (
              <li key={x} style={{ padding: "8px 12px", borderRadius: 6, color: i === 0 ? c.blueDeep : c.ink2, background: i === 0 ? c.blueSoft : "transparent", fontWeight: i === 0 ? 600 : 500 }}>{x}</li>
            ))}
          </ul>
        </aside>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.025em", margin: "0 0 18px", fontWeight: 700 }}>Биография</h2>
          <p style={{ fontSize: 18, color: c.ink2, lineHeight: 1.65, maxWidth: 720, margin: "0 0 16px" }}>
            Биньямин Нетаньяху родился в Тель-Авиве в 1949 году. Прошёл службу в спецназе Сайерет Маткаль, участвовал в нескольких операциях, был ранен в ходе освобождения захваченного самолёта Sabena.
          </p>
          <p style={{ fontSize: 18, color: c.ink2, lineHeight: 1.65, maxWidth: 720, margin: "0 0 32px" }}>
            После службы — учёба в Массачусетском технологическом институте, работа в частном секторе, должность зам. главы миссии Израиля в США, посла в ООН. С 1988 года — депутат Кнессета.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.025em", margin: "48px 0 18px", fontWeight: 700 }}>Фракция Ликуда</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              "Председатель", "Министр обороны", "Министр финансов",
              "Министр иностранных дел", "Председатель коалиции", "Зам. министра",
            ].map((role, i) => (
              <div key={i} style={{ padding: 18, border: `1px solid ${c.hair}`, borderRadius: 12, display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 999, background: c.blueSoft }} />
                <div>
                  <div style={{ fontSize: 11, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.06 }}>{role}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>Имя Фамилия</div>
                </div>
              </div>
            ))}
          </div>
          <button style={{ marginTop: 24, background: "transparent", color: c.blue, border: `1px solid ${c.blueSoft}`, borderRadius: 999, padding: "12px 24px", fontSize: 14, fontWeight: 600 }}>Все депутаты фракции</button>
        </div>
      </section>
    </div>
  );
}

// ====================== PAGE: Join / membership ======================
function PageJoin({ bare = false }) {
  const c = PAGE_C;
  const [path, setPath] = React.useState("member");
  const [form, setForm] = React.useState({ name: "", id: "", phone: "", email: "" });
  const [touched, setTouched] = React.useState({});
  const errs = {
    name: touched.name && !form.name.trim() ? "Укажите имя" : "",
    id: touched.id && !/^\d{9}$/.test(form.id) ? "Теудат-зеут — 9 цифр" : "",
    phone: touched.phone && !/^\+?\d{8,}$/.test(form.phone.replace(/\s/g, "")) ? "Укажите телефон" : "",
    email: touched.email && !/^\S+@\S+\.\S+$/.test(form.email) ? "Проверьте email" : "",
  };
  const valid = !errs.name && !errs.id && !errs.phone && !errs.email && form.name && form.id && form.phone && form.email;

  const paths = [
    { k: "member",  t: "Член партии",  d: "Право голоса на первичных выборах, доступ к решениям съезда." },
    { k: "vol",     t: "Волонтёр",      d: "Помощь в кампаниях, на участках, в региональных отделениях." },
    { k: "donate",  t: "Поддержать",     d: "Пожертвование в соответствии с законом о финансировании партий." },
    { k: "sub",     t: "Получать рассылку", d: "Еженедельный дайджест без вступления." },
  ];
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Главная" />}
      <section style={{ background: c.blueMist, padding: "64px 32px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>Вступление и поддержка</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", margin: "12px 0 16px", lineHeight: 1.02 }}>
            Выберите, как вы хотите участвовать
          </h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: 0, maxWidth: 640, lineHeight: 1.55 }}>
            Четыре пути. Любой — это часть партии. Любой можно выбрать прямо сейчас.
          </p>
        </div>
      </section>

      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        {/* Path picker */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          {paths.map(p => (
            <button key={p.k} onClick={() => setPath(p.k)} style={{
              textAlign: "left", border: 0, cursor: "pointer", fontFamily: "inherit",
              padding: 20, borderRadius: 14,
              background: path === p.k ? c.blueInk : c.paper,
              color: path === p.k ? "white" : c.ink,
              borderTop: `4px solid ${path === p.k ? c.blue : c.hair}`,
              boxShadow: path === p.k ? "0 12px 32px -8px rgba(0,42,110,0.4)" : "none",
              transition: "all var(--dur) var(--ease)",
            }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.1, color: path === p.k ? "rgba(255,255,255,0.6)" : c.ink3 }}>Шаг 1</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8, letterSpacing: "-0.01em" }}>{p.t}</div>
              <div style={{ fontSize: 12.5, color: path === p.k ? "rgba(255,255,255,0.72)" : c.ink2, marginTop: 8, lineHeight: 1.5 }}>{p.d}</div>
            </button>
          ))}
        </div>

        {/* Form */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <div style={{ padding: 32, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.paper }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 8px" }}>Шаг 2 · Ваши данные</h2>
            <p style={{ fontSize: 14, color: c.ink3, margin: "0 0 24px" }}>Данные используются только для оформления членства согласно закону.</p>

            <div style={{ display: "grid", gap: 16 }}>
              {[
                { k: "name", l: "Полное имя", ph: "Имя и фамилия" },
                { k: "id", l: "Теудат-зеут (תעודת זהות)", ph: "9 цифр" },
                { k: "phone", l: "Телефон", ph: "+972 5_ ___ ____" },
                { k: "email", l: "Email", ph: "you@example.com" },
              ].map(f => (
                <div key={f.k}>
                  <label style={{ fontSize: 12, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.08, fontWeight: 600 }}>{f.l}</label>
                  <input
                    placeholder={f.ph}
                    value={form[f.k]}
                    onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                    onBlur={() => setTouched({ ...touched, [f.k]: true })}
                    style={{
                      width: "100%", marginTop: 6,
                      border: `1px solid ${errs[f.k] ? c.red : c.hair}`,
                      borderRadius: 10, padding: "12px 14px",
                      fontSize: 14.5, fontFamily: "inherit", outline: "none",
                      background: c.paper,
                    }} />
                  {errs[f.k] && <div style={{ marginTop: 6, fontSize: 12, color: c.red }}>{errs[f.k]}</div>}
                </div>
              ))}

              <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 8, fontSize: 13, color: c.ink2, lineHeight: 1.5 }}>
                <input type="checkbox" style={{ marginTop: 4, accentColor: c.blue }} />
                <span>Я гражданин Государства Израиль, мне исполнилось 17 лет. Я согласен с уставом партии и политикой конфиденциальности.</span>
              </label>

              <button disabled={!valid} style={{
                marginTop: 8, background: valid ? c.blue : c.blueSoft,
                color: valid ? "white" : c.ink3,
                border: 0, borderRadius: 999, padding: "16px 28px",
                fontSize: 15, fontWeight: 600, cursor: valid ? "pointer" : "not-allowed", fontFamily: "inherit",
                transition: "background var(--dur) var(--ease)",
              }}>Подать заявление</button>
            </div>
          </div>

          {/* Trust column */}
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ padding: 22, border: `1px solid ${c.hair}`, borderRadius: 14, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3 }}>Юридическая нотация</div>
              <p style={{ fontSize: 13.5, color: c.ink2, margin: "10px 0 0", lineHeight: 1.55 }}>
                Членский взнос регулируется решением мазкирута партии. Пожертвования принимаются в соответствии с Законом о финансировании партий 1973 г. (см. подробнее на странице «Поддержать»).
              </p>
            </div>
            <div style={{ padding: 22, border: `1px solid ${c.hair}`, borderRadius: 14, background: c.paper2 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.12, color: c.ink3 }}>Что дальше</div>
              <ol style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 13.5, color: c.ink2, lineHeight: 1.7 }}>
                <li>SMS-подтверждение телефона</li>
                <li>Проверка членского статуса (до 48 часов)</li>
                <li>Письмо с подтверждением и личным номером члена партии</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ====================== PAGE: Branches index ======================
function PageBranches({ bare = false }) {
  const c = PAGE_C;
  const rows = [
    ["Тель-Авив",      "Округ Дан",      "ул. Мецада, 7",          "Анна Леви",     "тел: 03-XXX-XXXX", true],
    ["Иерусалим",      "Округ Иерусалим", "ул. Кинг-Джордж, 32",   "Йосеф Коэн",    "тел: 02-XXX-XXXX", true],
    ["Хайфа",          "Округ Хайфа",    "ул. ха-Намаль, 11",      "Дина Голан",    "тел: 04-XXX-XXXX", false],
    ["Беэр-Шева",      "Округ Юг",       "ул. Бен-Цви, 19",        "Дани Перец",    "тел: 08-XXX-XXXX", false],
    ["Нетания",        "Округ Шарон",    "ул. Герцль, 6",          "Михаль Авни",   "тел: 09-XXX-XXXX", false],
    ["Ашдод",          "Округ Юг",       "ул. ха-Шомер, 22",       "Идо Кацав",     "тел: 08-XXX-XXXX", false],
    ["Кирьят-Шмона",   "Округ Север",    "ул. ха-Хагана, 4",       "Мири Шани",     "тел: 04-XXX-XXXX", false],
    ["Эйлат",          "Округ Юг",       "ул. ха-Тмарим, 18",      "Эли Бен-Шимон", "тел: 08-XXX-XXXX", false],
  ];
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Отделения" />}
      <BreadCrumb items={["Региональные отделения"]} />

      <section style={{ padding: "32px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 380px", gap: 56, alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", margin: "16px 0 16px", lineHeight: 1.04 }}>
              120 отделений по всей стране
            </h1>
            <p style={{ fontSize: 18, color: c.ink2, margin: "0 0 32px", maxWidth: 600, lineHeight: 1.55 }}>
              От Кирьят-Шмоны до Эйлата. Каждое отделение — это люди, к которым можно прийти, написать или позвонить.
            </p>

            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <input placeholder="Поиск по городу или округу…" style={{
                flex: 1, border: `1px solid ${c.hair}`, borderRadius: 999,
                padding: "12px 22px", fontSize: 14, fontFamily: "inherit", outline: 0,
              }} />
              <select style={{
                border: `1px solid ${c.hair}`, borderRadius: 999,
                padding: "12px 18px", fontSize: 13.5, fontFamily: "inherit", background: c.paper,
              }}>
                <option>Все округа</option>
                <option>Север</option>
                <option>Дан</option>
                <option>Юг</option>
              </select>
            </div>

            <div style={{ border: `1px solid ${c.hair}`, borderRadius: 14, overflow: "hidden" }}>
              {rows.map((r, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "minmax(120px, 0.8fr) 0.8fr 1.2fr 1fr 30px",
                  gap: 18, padding: "18px 22px",
                  borderTop: i === 0 ? 0 : `1px solid ${c.hair}`,
                  alignItems: "center", background: c.paper,
                }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{r[0]}</div>
                    {r[5] && <div style={{ marginTop: 4, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: c.blue, fontWeight: 600, letterSpacing: 0.04 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: c.blue }} />ОКРУЖНОЙ</div>}
                  </div>
                  <div style={{ fontSize: 13, color: c.ink3 }}>{r[1]}</div>
                  <div style={{ fontSize: 13, color: c.ink2 }}>{r[2]}</div>
                  <div style={{ fontSize: 13, color: c.ink2 }}>{r[3]} · <span style={{ color: c.ink3 }}>{r[4]}</span></div>
                  <ArrowNext size={16} dir="ltr" />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: c.ink3, textAlign: "center" }}>Показано 8 из 120 · <span style={{ color: c.blue, fontWeight: 600 }}>Загрузить ещё</span></div>
          </div>

          <aside style={{ position: "sticky", top: 24, padding: 24, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.blueMist }}>
            <IsraelMap markers={BRANCH_MARKERS} width={300} height={460} fg={c.blue} bg="rgba(0,56,184,0.08)" />
            <div style={{ marginTop: 16, fontSize: 12, color: c.ink3, textAlign: "center" }}>Кликабельная карта · 120 точек</div>
          </aside>
        </div>
      </section>
    </div>
  );
}

// ====================== PAGE: Contact ======================
function PageContact({ bare = false }) {
  const c = PAGE_C;
  return (
    <div lang="ru" dir="ltr" style={{ fontFamily: "var(--font-body)", color: c.ink, background: c.paper, width: bare ? "100%" : 1280 }}>
      {!bare && <MiniHeader active="Главная" />}
      <section style={{ padding: "64px 32px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>Контакты</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", margin: "12px 0 24px", lineHeight: 1.02 }}>Свяжитесь с нами</h1>
          <p style={{ fontSize: 18, color: c.ink2, margin: "0 0 36px", maxWidth: 540, lineHeight: 1.55 }}>
            Партийный штаб, пресс-служба, региональные отделения и личные обращения — каждый канал ведёт к ответу.
          </p>

          {[
            { h: "Штаб партии",       l: "ул. Кинг-Джордж, 38, Тель-Авив · а/я 56216, Тель-Авив 6156101", e: "info@likud.org.il", p: "+972-3-6210666" },
            { h: "Пресс-служба",       l: "Только для журналистов",            e: "press@likud.org.il", p: "+972-3-6210666" },
            { h: "Юридический отдел", l: "Обращения по уставу и Бейт-Дин",   e: "legal@likud.org.il",  p: "+972-3-6210666" },
            { h: "Обращения членов",  l: "По вопросам членства и первичных", e: "members@likud.org.il", p: "+972-3-6210666" },
          ].map((x, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "minmax(180px, 1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)", gap: 24,
              padding: "22px 0", borderTop: `1px solid ${c.hair}`, alignItems: "baseline",
            }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{x.h}</div>
              <div style={{ fontSize: 14, color: c.ink2 }}>{x.l}</div>
              <div style={{ fontSize: 13.5, color: c.blueDeep, fontFamily: "var(--font-mono)" }}>{x.e}</div>
              <div style={{ fontSize: 13.5, color: c.blueDeep, fontFamily: "var(--font-mono)" }}>{x.p}</div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div style={{ padding: 28, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.paper2 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: 0, fontWeight: 700, letterSpacing: "-0.015em" }}>Написать</h2>
          <p style={{ fontSize: 13, color: c.ink3, margin: "6px 0 24px" }}>Мы отвечаем в течение 3 рабочих дней.</p>
          <div style={{ display: "grid", gap: 14 }}>
            {["Имя", "Email", "Тема", "Сообщение"].map((l, i) => (
              <div key={l}>
                <label style={{ fontSize: 12, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.08, fontWeight: 600 }}>{l}</label>
                {i === 3 ? (
                  <textarea rows="4" style={{ width: "100%", marginTop: 6, border: `1px solid ${c.hair}`, borderRadius: 10, padding: "12px 14px", fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none" }} />
                ) : (
                  <input style={{ width: "100%", marginTop: 6, border: `1px solid ${c.hair}`, borderRadius: 10, padding: "12px 14px", fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                )}
              </div>
            ))}
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12.5, color: c.ink2, lineHeight: 1.5 }}>
              <input type="checkbox" style={{ marginTop: 3, accentColor: c.blue }} />
              <span>Я согласен с обработкой персональных данных в соответствии с политикой конфиденциальности.</span>
            </label>
            <button style={{ background: c.blue, color: "white", border: 0, borderRadius: 999, padding: "14px 28px", fontSize: 14.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 4 }}>Отправить сообщение</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== Section wrapper for all pages =====

function SectionPages() {
  const [page, setPage] = React.useState("position");
  const pages = [
    { k: "position", t: "Позиция (деталь)" },
    { k: "news",     t: "Новости (лента)" },
    { k: "leader",   t: "Лидер партии" },
    { k: "join",     t: "Вступление" },
    { k: "branches", t: "Отделения" },
    { k: "contact",  t: "Контакты" },
  ];
  const compMap = { position: PagePosition, news: PageNews, leader: PageLeader, join: PageJoin, branches: PageBranches, contact: PageContact };
  const Comp = compMap[page];

  return (
    <section className="doc-section bleed" id="pages">
      <div className="section-head">
        <span className="section-num">05 · Остальные страницы</span>
        <h2 className="section-title">Шесть страниц — шесть шаблонов</h2>
        <p className="section-lede">Главная задаёт визуальную ось; остальные страницы строятся по тем же правилам, но решают другие задачи. Переключайте, чтобы посмотреть.</p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {pages.map(p => (
          <button key={p.k} onClick={() => setPage(p.k)} style={{
            padding: "8px 16px", borderRadius: 999,
            border: page === p.k ? "1px solid transparent" : "1px solid var(--hairline)",
            background: page === p.k ? "var(--likud-blue)" : "var(--paper)",
            color: page === p.k ? "white" : "var(--ink-2)",
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer",
            transition: "all var(--dur-fast) var(--ease)",
          }}>{p.t}</button>
        ))}
      </div>

      <FramedPage Comp={Comp} />

      <div style={{ marginTop: 24, padding: 18, background: "var(--likud-blue-mist)", border: "1px solid var(--hairline)", borderRadius: 12, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
        <strong style={{ color: "var(--ink)" }}>Заметка о шаблоне:</strong> страница позиций — двухколоночная статья с навигацией слева и связанными материалами справа. Новости — стандартная лента с фильтром и тегами. Лидер — биографическая страница с tagged-роли блоком фракции. Вступление — funnel из 4 путей с валидируемой формой. Отделения — таблица + карта. Контакты — структурированный список каналов с формой.
      </div>
    </section>
  );
}

function FramedPage({ Comp }) {
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
  // Heights vary per page — use enough to show what's needed.
  const containerH = 1100;
  return (
    <BrowserFrame lang="ru" dir="ltr">
      <div ref={ref} style={{ width: "100%", height: containerH, overflow: "auto", background: "white", position: "relative" }}>
        <div style={{ width: designW, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <Comp />
        </div>
      </div>
    </BrowserFrame>
  );
}

Object.assign(window, { SectionPages, PagePosition, PageNews, PageLeader, PageJoin, PageBranches, PageContact, MiniHeader });
