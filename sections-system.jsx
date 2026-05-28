// sections-system.jsx — Section 06: Design system tokens + components showcase

function ColorChip({ name, value, contrast, fg }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 14, alignItems: "center", padding: "12px 14px", borderRadius: 10, background: "var(--paper)", border: "1px solid var(--hairline)" }}>
      <div style={{ width: "100%", height: 56, borderRadius: 8, background: value, border: value === "#FFFFFF" ? "1px solid var(--hairline)" : "none" }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>{value}</div>
      </div>
      <div style={{ fontSize: 10, color: "var(--ink-3)", textAlign: "right" }}>
        <div>AA: {contrast}</div>
        <div style={{ marginTop: 2, color: "var(--ink-4)" }}>{fg}</div>
      </div>
    </div>
  );
}

function TypeSample({ label, family, size, weight, tracking, lh, sample }) {
  return (
    <div style={{ padding: "20px 0", borderTop: "1px solid var(--hairline)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)", fontWeight: 600 }}>{label}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-3)" }}>
          {family} · {size}/{lh} · {weight} · {tracking}
        </div>
      </div>
      <div style={{ fontFamily: family, fontSize: size, fontWeight: weight, letterSpacing: tracking, lineHeight: lh, color: "var(--ink)", margin: 0 }}>
        {sample}
      </div>
    </div>
  );
}

function SectionSystem() {
  return (
    <section className="doc-section" id="system">
      <div className="section-head">
        <span className="section-num">06 · Дизайн-система</span>
        <h2 className="section-title">Токены и компоненты</h2>
        <p className="section-lede">Минимальный, но достаточный набор. Цвет — 8 токенов. Шрифт — две гарнитуры. Компоненты — десять, всё остальное собирается из них.</p>
      </div>

      {/* ===== COLORS ===== */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>Цвет</h3>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px", maxWidth: 600 }}>Доминанта — синий израильского флага. Красный — точечно, только для важных CTA и breaking-индикатора. Никаких градиентов, никаких полупрозрачных слоёв.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          <ColorChip name="Likud Blue / Primary"   value="#0038B8" contrast="8.4:1"  fg="white" />
          <ColorChip name="Likud Blue / Deep"      value="#002A6E" contrast="12.1:1" fg="white" />
          <ColorChip name="Likud Blue / Ink"       value="#001541" contrast="17.6:1" fg="white" />
          <ColorChip name="Likud Blue / Soft"      value="#E6EDF8" contrast="14.9:1" fg="ink" />
          <ColorChip name="Likud Red / Accent"     value="#C8102E" contrast="6.2:1"  fg="white" />
          <ColorChip name="Ink / Body"             value="#0A1426" contrast="17.8:1" fg="white" />
          <ColorChip name="Ink / Muted"            value="#38465C" contrast="9.1:1"  fg="white" />
          <ColorChip name="Paper / Surface"        value="#FFFFFF" contrast="—"      fg="ink" />
        </div>

        <h4 style={{ marginTop: 32, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Правила применения</h4>
        <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65 }}>
          <li><strong>Primary Blue (#0038B8)</strong> — все основные действия, активные состояния навигации, ссылки, лого.</li>
          <li><strong>Blue Deep (#002A6E)</strong> — текст на синих фонах, рамки в hover-состоянии, акценты в плотных блоках.</li>
          <li><strong>Blue Ink (#001541)</strong> — тёмные секции (футер, видео-блок), не пытаемся имитировать pure black.</li>
          <li><strong>Blue Soft (#E6EDF8)</strong> — фон секций, плашки иконок, заливка чипов «выбрано».</li>
          <li><strong>Red (#C8102E)</strong> — только важные CTA в hero, breaking-индикатор. Никогда не для рамок или фонов крупнее 24px.</li>
        </ul>
      </div>

      {/* ===== TYPE ===== */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>Типографика</h3>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px", maxWidth: 600 }}>
          Иврит — Heebo. Латиница и кириллица — Rubik. Шрифты подобраны так, чтобы вертикальная метрика и оптический вес совпадали между языками — RTL-страница и LTR-страница ощущаются как одна.
        </p>

        <div className="surface surface-pad" style={{ background: "var(--paper)" }}>
          <TypeSample label="Display 1 · Hero"   family='"Rubik", system-ui, sans-serif' size="72px" weight={800} tracking="-0.035em" lh="1.02" sample="Сильный Израиль. Надёжное будущее." />
          <TypeSample label="Display 1 · Hero (иврит)" family='"Heebo", "Rubik", sans-serif' size="72px" weight={800} tracking="-0.035em" lh="1.02" sample="ישראל חזקה. עתיד בטוח." />
          <TypeSample label="Display 2 · Section" family='"Rubik", system-ui, sans-serif' size="48px" weight={700} tracking="-0.025em" lh="1.05" sample="Во что мы верим" />
          <TypeSample label="Heading 1"           family='"Rubik", system-ui, sans-serif' size="32px" weight={700} tracking="-0.02em"  lh="1.15" sample="Национальная безопасность Израиля" />
          <TypeSample label="Heading 2"           family='"Rubik", system-ui, sans-serif' size="22px" weight={600} tracking="-0.01em"  lh="1.3"  sample="Три опоры безопасности" />
          <TypeSample label="Body · Large"        family='"Rubik", system-ui, sans-serif' size="19px" weight={400} tracking="0"        lh="1.55" sample="Национально-либеральная партия Израиля. Сорок лет ответственности за страну, безопасности и свободного рынка." />
          <TypeSample label="Body · Base"         family='"Rubik", system-ui, sans-serif' size="17px" weight={400} tracking="0"        lh="1.6"  sample="Безопасность Израиля — не политическая позиция, а условие существования. Любая дискуссия должна начинаться с этого тезиса." />
          <TypeSample label="Body · Small"        family='"Rubik", system-ui, sans-serif' size="14px" weight={500} tracking="0"        lh="1.5"  sample="Заявление председателя · 28 мая 2026" />
          <TypeSample label="Kicker · UPPERCASE"  family='"Rubik", system-ui, sans-serif' size="11px" weight={600} tracking="0.16em"  lh="1.2"  sample="ПОЗИЦИИ ЛИКУДА" />
          <TypeSample label="Mono · Mark"         family='"JetBrains Mono", monospace'    size="12px" weight={500} tracking="0.04em"  lh="1.5"  sample="01 · /positions/security" />
        </div>
      </div>

      {/* ===== SPACING + RADII + SHADOW ===== */}
      <div style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Шаг 8</h4>
          <h3 style={{ margin: "8px 0 16px", fontSize: 18, letterSpacing: "-0.01em" }}>Отступы</h3>
          {[4, 8, 12, 16, 24, 32, 48, 64, 96].map(n => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6, fontSize: 12, color: "var(--ink-3)" }}>
              <div style={{ width: n, height: 8, background: "var(--likud-blue)" }} />
              <span style={{ fontFamily: "var(--font-mono)" }}>{n}px</span>
            </div>
          ))}
        </div>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Скругления</h4>
          <h3 style={{ margin: "8px 0 16px", fontSize: 18, letterSpacing: "-0.01em" }}>Радиусы</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {[
              ["sm", 6], ["md", 10], ["lg", 14], ["xl", 20], ["pill", 999],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
                <div style={{ width: 56, height: 56, borderRadius: v, background: "var(--likud-blue-soft)", border: "1px solid var(--hairline-strong)" }} />
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}>{k} · {v}{typeof v === "number" ? "px" : ""}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="surface surface-pad">
          <h4 style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)" }}>Тени</h4>
          <h3 style={{ margin: "8px 0 16px", fontSize: 18, letterSpacing: "-0.01em" }}>Глубина</h3>
          {[
            { l: "shadow-1 · card resting", s: "0 1px 2px rgba(10,20,38,0.04), 0 4px 12px rgba(10,20,38,0.04)" },
            { l: "shadow-2 · card hover", s: "0 2px 4px rgba(10,20,38,0.04), 0 12px 32px rgba(10,20,38,0.08)" },
            { l: "shadow-3 · modal / focal", s: "0 16px 48px -12px rgba(0,42,110,0.22)" },
          ].map((x, i) => (
            <div key={i} style={{ padding: 16, borderRadius: 10, background: "white", boxShadow: x.s, marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{x.l}</div>
              <div style={{ fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--font-mono)", marginTop: 4 }}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MOTION TOKENS ===== */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>Движение</h3>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px", maxWidth: 600 }}>Спокойное, целевое. Без bouncing, parallax-сцен, scroll-anchored Lottie. Партийный сайт — не визитка студии.</p>

        <div className="surface" style={{ overflow: "auto" }}>
          <table className="spec">
            <thead><tr><th>Токен</th><th>Значение</th><th>Где</th></tr></thead>
            <tbody>
              <tr><td className="mono">--ease</td><td className="mono">cubic-bezier(0.22, 1, 0.36, 1)</td><td>Всё, что движется.</td></tr>
              <tr><td className="mono">--dur-fast</td><td className="mono">180ms</td><td>Hover, focus.</td></tr>
              <tr><td className="mono">--dur</td><td className="mono">260ms</td><td>Раскрытие меню, табы, аккордеоны.</td></tr>
              <tr><td className="mono">--dur-slow</td><td className="mono">460ms</td><td>Переходы между состояниями страницы.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== TOKENS AS CSS ===== */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>Токены как CSS / JSON</h3>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px", maxWidth: 600 }}>Один источник истины. Tailwind тянет из этих переменных через <code>theme.extend.colors</code>.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <pre className="code" style={{ margin: 0, fontSize: 11.5, maxHeight: 380, overflow: "auto" }}>{`:root {
  /* Brand */
  --likud-blue:      #0038B8;
  --likud-blue-deep: #002A6E;
  --likud-blue-ink:  #001541;
  --likud-blue-soft: #E6EDF8;
  --likud-red:       #C8102E;

  /* Ink */
  --ink:    #0A1426;
  --ink-2:  #38465C;
  --ink-3:  #6E7A8E;
  --paper:  #FFFFFF;
  --paper-2: #FAFBFD;
  --hairline: #E3E7EE;

  /* Type */
  --font-display: "Rubik", "Heebo", system-ui, sans-serif;
  --font-body:    "Rubik", "Heebo", system-ui, sans-serif;

  /* Layout */
  --container: 1280px;
  --pad: clamp(20px, 4vw, 48px);

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 999px;

  /* Motion */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur: 260ms;
  --dur-slow: 460ms;
}`}</pre>
          <pre className="code" style={{ margin: 0, fontSize: 11.5, maxHeight: 380, overflow: "auto" }}>{`{
  "color": {
    "blue":      "#0038B8",
    "blueDeep":  "#002A6E",
    "blueInk":   "#001541",
    "blueSoft":  "#E6EDF8",
    "red":       "#C8102E",
    "ink":       "#0A1426",
    "ink2":      "#38465C",
    "ink3":      "#6E7A8E",
    "paper":     "#FFFFFF",
    "hairline":  "#E3E7EE"
  },
  "font": {
    "display": "Rubik, Heebo, system-ui, sans-serif",
    "body":    "Rubik, Heebo, system-ui, sans-serif"
  },
  "radius":  { "sm": 6, "md": 10, "lg": 14, "pill": 999 },
  "shadow":  {
    "card":  "0 1px 2px rgba(10,20,38,.04), 0 4px 12px rgba(10,20,38,.04)",
    "hover": "0 2px 4px rgba(10,20,38,.04), 0 12px 32px rgba(10,20,38,.08)",
    "focal": "0 16px 48px -12px rgba(0,42,110,.22)"
  },
  "motion":  {
    "ease":     "cubic-bezier(0.22, 1, 0.36, 1)",
    "fast":     "180ms",
    "default":  "260ms",
    "slow":     "460ms"
  }
}`}</pre>
        </div>
      </div>

      {/* ===== COMPONENT LIBRARY ===== */}
      <div>
        <h3 style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>Компонент-библиотека</h3>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px", maxWidth: 600 }}>10 компонентов закрывают весь сайт. Каждый написан как «маленький дизайн» — у каждого есть варианты, состояния и правила.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 16 }}>
          <CompCard name="Button" variants="primary · secondary · ghost · destructive">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <button style={{ background: "var(--likud-blue)", color: "white", border: 0, borderRadius: 999, padding: "12px 22px", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Вступить</button>
              <button style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--hairline)", borderRadius: 999, padding: "12px 22px", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Поддержать</button>
              <button style={{ background: "transparent", color: "var(--likud-blue)", border: 0, padding: "12px 0", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>Подробнее <ArrowNext size={14} dir="ltr" /></button>
              <button style={{ background: "var(--likud-red)", color: "white", border: 0, borderRadius: 999, padding: "12px 22px", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Срочно</button>
            </div>
          </CompCard>

          <CompCard name="LangSwitch" variants="HE · EN · RU · auto-detect">
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ display: "inline-flex", padding: 4, borderRadius: 999, border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                {LANGS.map((L, i) => (
                  <span key={L.code} style={{
                    padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                    background: i === 0 ? "var(--likud-blue)" : "transparent",
                    color: i === 0 ? "white" : "var(--ink-2)",
                  }}>{L.short}</span>
                ))}
              </div>
              <span style={{ fontSize: 11, color: "var(--ink-3)" }}>cookie · Accept-Language</span>
            </div>
          </CompCard>

          <CompCard name="NewsCard" variants="standard · video · document · breaking">
            <div style={{ border: "1px solid var(--hairline)", borderRadius: 12, overflow: "hidden", background: "var(--paper)" }}>
              <Plate label="Заявление" tone="soft" ratio="16/9" />
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)", marginBottom: 8 }}>
                  <span style={{ color: "var(--likud-blue)", fontWeight: 600 }}>ЗАЯВЛЕНИЕ</span>
                  <span><bdi>28.05.2026</bdi></span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>«Безопасность Израиля — святыня»</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 8 }}>Канцелярия председателя</div>
              </div>
            </div>
          </CompCard>

          <CompCard name="PositionCard" variants="6 направлений · sidebar nav">
            <div style={{ padding: 20, border: "1px solid var(--hairline)", borderRadius: 12, background: "var(--paper)" }}>
              <div style={{ width: 36, height: 36, background: "var(--likud-blue-soft)", borderRadius: 8, marginBottom: 14, display: "grid", placeItems: "center", color: "var(--likud-blue-deep)" }}>
                <PositionIcon i={0} />
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>Безопасность</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 6, lineHeight: 1.5 }}>Израильский суверенитет, сильный ЦАХАЛ, региональное сдерживание.</div>
              <div style={{ fontSize: 12, color: "var(--likud-blue)", fontWeight: 600, marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>Подробнее <ArrowNext size={12} dir="ltr" /></div>
            </div>
          </CompCard>

          <CompCard name="Header" variants="transparent → sticky · with skip-link">
            <div style={{ border: "1px solid var(--hairline)", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ background: "var(--paper)", padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--hairline)" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}><LikudMark size={24} />
                  <span style={{ fontSize: 12, fontWeight: 700 }}>LIKUD</span>
                </div>
                <span style={{ fontSize: 10, color: "var(--ink-3)" }}>Главная · Партия · Позиции · Новости</span>
                <span style={{ fontSize: 10 }}><span style={{ padding: "2px 6px", background: "var(--likud-blue)", color: "white", borderRadius: 999 }}>Вступить</span></span>
              </div>
              <div style={{ padding: "8px 14px", background: "var(--paper-2)", fontSize: 10, color: "var(--ink-3)" }}>top-bar: дата · доступность · языки</div>
            </div>
          </CompCard>

          <CompCard name="Footer" variants="4 колонки · юр. блок · соцсети">
            <div style={{ background: "var(--likud-blue-ink)", color: "white", padding: 16, borderRadius: 10, fontSize: 11 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
                <div>Штаб партии</div><div>О партии</div><div>Позиции</div><div>Контакты</div>
              </div>
              <div style={{ paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.6)", fontSize: 10, display: "flex", justifyContent: "space-between" }}>
                <span>© 2026 Likud</span><span>Privacy · Accessibility</span>
              </div>
            </div>
          </CompCard>

          <CompCard name="NewsletterForm" variants="inline · stacked · embedded">
            <div style={{ display: "flex", gap: 0, background: "var(--paper)", borderRadius: 999, padding: 4, border: "1px solid var(--hairline)" }}>
              <input placeholder="Email" style={{ flex: 1, border: 0, outline: 0, padding: "10px 18px", fontSize: 13, background: "transparent" }} />
              <button style={{ background: "var(--likud-blue)", color: "white", border: 0, borderRadius: 999, padding: "10px 18px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>Подписаться</button>
            </div>
          </CompCard>

          <CompCard name="DonationCTA" variants="hero embed · sticky bottom · inline">
            <div style={{ padding: 18, background: "var(--likud-blue-ink)", borderRadius: 12, color: "white" }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Поддержать партию</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>В соответствии с законом о финансировании партий</div>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {["₪50", "₪100", "₪200", "Свободно"].map((v, i) => (
                  <span key={i} style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)", fontSize: 11, fontWeight: 600, background: i === 1 ? "var(--likud-blue)" : "transparent" }}>{v}</span>
                ))}
              </div>
              <button style={{ width: "100%", background: "var(--likud-red)", color: "white", border: 0, borderRadius: 999, padding: "10px", fontSize: 12.5, fontWeight: 600 }}>Перейти к оплате</button>
            </div>
          </CompCard>

          <CompCard name="RegionMap" variants="взаимодействует с таблицей">
            <div style={{ padding: 14, background: "var(--likud-blue-mist)", borderRadius: 10, display: "grid", placeItems: "center" }}>
              <IsraelMap markers={BRANCH_MARKERS.slice(0, 5)} width={140} height={220} fg="var(--likud-blue)" bg="rgba(0,56,184,0.08)" />
            </div>
          </CompCard>

          <CompCard name="VideoEmbed" variants="captions on · no-autoplay · CMS">
            <div style={{ aspectRatio: "16/9", background: "var(--likud-blue-ink)", borderRadius: 10, position: "relative", overflow: "hidden", display: "grid", placeItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: "rgba(255,255,255,0.94)", display: "grid", placeItems: "center" }}>
                <svg viewBox="0 0 24 24" width={22} height={22} fill="var(--likud-blue-deep)"><path d="M8 5l12 7-12 7V5z" /></svg>
              </div>
              <div style={{ position: "absolute", left: 12, bottom: 12, fontSize: 10, color: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 999, background: "rgba(0,0,0,0.4)" }}>14:32</div>
            </div>
          </CompCard>
        </div>
      </div>
    </section>
  );
}

function CompCard({ name, variants, children }) {
  return (
    <div style={{ background: "var(--paper-2)", border: "1px solid var(--hairline)", borderRadius: 14, overflow: "hidden" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--hairline)", background: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{variants}</div>
      </div>
      <div style={{ padding: 20 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { SectionSystem, ColorChip, TypeSample, CompCard });
