// sections-home.jsx — Section 04: live hi-fi home page mock rendered for he/en/ru

// A "browser chrome" wrapper for each language frame
function BrowserFrame({ lang, dir, children, scale = 1, onOpen }) {
  return (
    <div style={{
      borderRadius: 16,
      overflow: "hidden",
      background: "var(--paper)",
      border: "1px solid var(--hairline)",
      boxShadow: "var(--shadow-2)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 14px",
        background: "var(--paper-2)",
        borderBottom: "1px solid var(--hairline)",
        fontSize: 11.5,
        color: "var(--ink-3)",
      }}>
        <span style={{ display: "inline-flex", gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E0E4EC" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E0E4EC" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E0E4EC" }} />
        </span>
        <span style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)" }}>
          likud.org.il/{lang}
        </span>
        <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
          <span className="tag tag-ghost" style={{ padding: "2px 8px", fontSize: 10 }}>{lang.toUpperCase()} · {dir.toUpperCase()}</span>
        </span>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

// A scrolled-down "rendered page" — built as one compact column to fit in the frame
function HomeMock({ lang, scale = 0.7, condensed = true, chrome = true }) {
  const t = CONTENT[lang];
  const news = NEWS[lang];
  const dir = lang === "he" ? "rtl" : "ltr";
  const fontFam = lang === "he"
    ? '"Heebo", "Rubik", system-ui, sans-serif'
    : '"Rubik", system-ui, sans-serif';

  // Local design tokens for the mock — clean, blue, hairline
  const c = {
    blue: "#0038B8",
    blueDeep: "#002A6E",
    blueInk: "#001541",
    blueSoft: "#E6EDF8",
    blueMist: "#F3F6FB",
    red: "#C8102E",
    ink: "#0A1426",
    ink2: "#38465C",
    ink3: "#6E7A8E",
    paper: "#FFFFFF",
    paper2: "#FAFBFD",
    hair: "#E3E7EE",
  };

  // The condensed flag drops a couple of secondary sections, keeps everything else
  return (
    <div dir={dir} lang={lang} style={{
      fontFamily: fontFam,
      color: c.ink,
      background: c.paper,
      // We render at design width 1280 and scale down for the side-by-side
      width: 1280,
      transform: `scale(${scale})`,
      transformOrigin: dir === "rtl" ? "top right" : "top left",
    }}>
      {/* === TOP BAR === */}
      {chrome && (
      <div style={{
        borderBottom: `1px solid ${c.hair}`,
        fontSize: 12,
        color: c.ink3,
        background: c.paper2,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>
            {lang === "he" ? <bdi>חמישי, 28 במאי 2026 · י״ב סיון התשפ״ו</bdi>
              : lang === "en" ? "Thursday, May 28, 2026"
              : "Четверг, 28 мая 2026"}
          </span>
          <span style={{ display: "inline-flex", gap: 14, alignItems: "center" }}>
            <span>{lang === "he" ? "מצב נגישות" : lang === "en" ? "Accessibility" : "Доступность"}</span>
            <span>A− A A+</span>
          </span>
        </div>
      </div>
      )}

      {/* === HEADER === */}
      {chrome && (
      <header style={{ borderBottom: `1px solid ${c.hair}`, background: c.paper }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <LikudMark size={44} bg={c.blue} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>
                {lang === "he" ? "הליכוד" : "LIKUD"}
              </div>
              <div style={{ fontSize: 10, color: c.ink3, textTransform: "uppercase", letterSpacing: 0.14, marginTop: 4 }}>
                {lang === "he" ? "מפלגת הליכוד הרשמית" : lang === "en" ? "Official Likud Party" : "Официальный сайт партии Ликуд"}
              </div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 28, fontSize: 14.5, fontWeight: 500 }}>
            <a style={{ textDecoration: "none", color: c.blue, borderBottom: `2px solid ${c.blue}`, paddingBottom: 4 }}>{t.nav.home}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.about}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.leadership}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.positions}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.news}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.branches}</a>
            <a style={{ textDecoration: "none", color: c.ink2 }}>{t.nav.primaries}</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "inline-flex", gap: 2, padding: 3, border: `1px solid ${c.hair}`, borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
              {LANGS.map(L => (
                <span key={L.code} style={{
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: L.code === lang ? c.blue : "transparent",
                  color: L.code === lang ? "white" : c.ink3,
                }}>{L.short}</span>
              ))}
            </div>
            <button style={{
              background: c.blue, color: "white", border: 0, borderRadius: 999,
              padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer",
              fontFamily: "inherit",
            }}>{t.cta.join}</button>
          </div>
        </div>
      </header>
      )}

      {/* === HERO === */}
      <section style={{ background: c.paper, borderBottom: `1px solid ${c.hair}` }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "80px 32px 88px",
          display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: 64, alignItems: "center",
        }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontSize: 12.5, fontWeight: 600,
              color: c.red,
              background: "#FCE6EA",
              padding: "8px 14px",
              borderRadius: 999,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: c.red, boxShadow: `0 0 0 4px rgba(200,16,46,0.18)` }} />
              <span>{t.breaking} · {lang === "he" ? "הצהרת ראש המפלגה כעת" : lang === "en" ? "Chairman statement live now" : "Заявление председателя сейчас"}</span>
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontWeight: 800,
              margin: "28px 0 24px",
              textWrap: "balance",
            }}>{t.heroSlogan}</h1>
            <p style={{
              fontSize: 19, lineHeight: 1.55, color: c.ink2, maxWidth: 540, margin: 0,
              textWrap: "pretty",
            }}>{t.heroLead}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <button style={{
                background: c.blue, color: "white", border: 0, borderRadius: 999,
                padding: "16px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "inherit",
              }}>
                {t.cta.join} <ArrowNext size={16} dir={dir} />
              </button>
              <button style={{
                background: "transparent", color: c.ink, border: `1px solid ${c.hair}`, borderRadius: 999,
                padding: "16px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>{t.cta.support}</button>
            </div>
            {/* trust line */}
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 22, fontSize: 12, color: c.ink3 }}>
              <span>{lang === "he" ? "150K+ חברי מפלגה" : lang === "en" ? "150K+ members" : "150K+ членов"}</span>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: c.ink3 }} />
              <span>{lang === "he" ? "120 סניפים" : lang === "en" ? "120 branches" : "120 отделений"}</span>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: c.ink3 }} />
              <span>{lang === "he" ? "32 ח״כים" : lang === "en" ? "32 MKs" : "32 депутата"}</span>
            </div>
          </div>
          <div>
            <Plate label={t.heroPortrait} tone="deep" ratio="4/5" src="images/netanyahu.jpg" />
          </div>
        </div>
      </section>

      {/* === NEWS STRIP === */}
      <section style={{ background: c.paper2, borderBottom: `1px solid ${c.hair}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 36 }}>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{t.newsKicker}</div>
              <h2 style={{ fontSize: 40, fontFamily: "var(--font-display)", letterSpacing: "-0.025em", fontWeight: 700, margin: "8px 0 0" }}>{t.newsTitle}</h2>
            </div>
            <a style={{ color: c.blue, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              {t.cta.all} <ArrowNext size={14} dir={dir} />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {news.map((n, i) => (
              <article key={i} style={{
                background: c.paper, border: `1px solid ${c.hair}`, borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}>
                <Plate label={n.tag} tone={i % 2 ? "soft" : "mist"} ratio="16/10" />
                <div style={{ padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: c.ink3, marginBottom: 10 }}>
                    <span style={{ color: c.blue, fontWeight: 600 }}>{n.tag}</span>
                    <span><bdi>{n.date}</bdi></span>
                  </div>
                  <h3 style={{ fontSize: 16, lineHeight: 1.35, margin: 0, fontWeight: 600, letterSpacing: "-0.01em" }}>{n.title}</h3>
                  <div style={{ fontSize: 12, color: c.ink3, marginTop: 12 }}>{n.source}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === POSITIONS === */}
      <section style={{ background: c.paper, borderBottom: `1px solid ${c.hair}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{t.positionsKicker}</div>
              <h2 style={{ fontSize: 48, fontFamily: "var(--font-display)", letterSpacing: "-0.025em", fontWeight: 700, margin: "8px 0 0", maxWidth: 600 }}>{t.positionsTitle}</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: `1px solid ${c.hair}`, borderRadius: 16, overflow: "hidden" }}>
            {t.positionsList.map((p, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              return (
                <div key={i} style={{
                  padding: "32px 28px",
                  borderRight: col === 2 ? 0 : `1px solid ${c.hair}`,
                  borderBottom: row === 1 ? 0 : `1px solid ${c.hair}`,
                  background: c.paper,
                }}>
                  <div style={{ width: 36, height: 36, background: c.blueSoft, borderRadius: 8, marginBottom: 20, display: "grid", placeItems: "center", color: c.blueDeep }}>
                    <PositionIcon i={i} />
                  </div>
                  <h3 style={{ fontSize: 20, margin: "0 0 8px", fontWeight: 600, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, color: c.ink2, lineHeight: 1.55, margin: 0 }}>{p.text}</p>
                  <div style={{ marginTop: 18, fontSize: 13, color: c.blue, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                    {t.cta.more} <ArrowNext size={14} dir={dir} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === VIDEO === */}
      <section style={{ background: c.blueInk, color: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: "#6E9DFF", fontWeight: 600 }}>{t.videoKicker}</div>
              <h2 style={{ fontSize: 44, fontFamily: "var(--font-display)", letterSpacing: "-0.025em", fontWeight: 700, margin: "8px 0 20px", color: "white" }}>{t.videoTitle}</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, lineHeight: 1.55, margin: 0 }}>
                {lang === "he" ? "נאום הפתיחה בכנסת · 26 במאי 2026 · 14 דקות"
                  : lang === "en" ? "Knesset opening speech · May 26, 2026 · 14 min"
                  : "Открывающая речь в Кнессете · 26 мая 2026 · 14 мин"}
              </p>
              <button style={{
                marginTop: 28, background: "transparent",
                color: "white", border: `1px solid rgba(255,255,255,0.3)`,
                borderRadius: 999, padding: "14px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit",
              }}>{lang === "he" ? "כל הסרטונים" : lang === "en" ? "All videos" : "Все видео"}</button>
            </div>
            <div style={{
              aspectRatio: "16/9",
              background: "linear-gradient(135deg, #1B2E63, #0A2058)",
              borderRadius: 16, position: "relative", overflow: "hidden",
              border: `1px solid rgba(255,255,255,0.08)`,
            }}>
              {/* fake video bg */}
              <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                <rect x="0" y="115" width="320" height="65" fill="#06133A" />
                <ellipse cx="160" cy="85" rx="40" ry="50" fill="#1B2E63" />
                <path d="M70 180 C 80 130, 120 115, 160 115 C 200 115, 240 130, 250 180 Z" fill="#13245A" />
                <rect x="280" y="14" width="22" height="14" rx="1" fill="none" stroke="#0038B8" strokeWidth="0.8" />
              </svg>
              {/* play button */}
              <div style={{
                position: "absolute", inset: 0, display: "grid", placeItems: "center",
              }}>
                <div style={{
                  width: 84, height: 84, borderRadius: 999,
                  background: "rgba(255,255,255,0.94)",
                  display: "grid", placeItems: "center",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill={c.blueDeep}><path d="M8 5l12 7-12 7V5z" /></svg>
                </div>
              </div>
              <div style={{
                position: "absolute", left: 20, bottom: 18,
                fontSize: 11, color: "rgba(255,255,255,0.7)",
                padding: "4px 10px", borderRadius: 999, background: "rgba(0,0,0,0.35)",
              }}>
                <bdi>14:32</bdi>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === STATS === */}
      <section style={{ background: c.blue, color: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            borderRadius: 16, border: `1px solid rgba(255,255,255,0.18)`, overflow: "hidden",
          }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{
                padding: "36px 28px",
                borderRight: i === 3 ? 0 : `1px solid rgba(255,255,255,0.18)`,
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  <bdi>{s.n}</bdi>
                </div>
                <div style={{ marginTop: 10, fontSize: 13.5, color: "rgba(255,255,255,0.72)", textTransform: "uppercase", letterSpacing: 0.08 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BRANCHES MAP === */}
      <section style={{ background: c.paper, borderBottom: `1px solid ${c.hair}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.16, color: c.blue, fontWeight: 600 }}>{t.branchesKicker}</div>
              <h2 style={{ fontSize: 44, fontFamily: "var(--font-display)", letterSpacing: "-0.025em", fontWeight: 700, margin: "8px 0 16px" }}>{t.branchesTitle}</h2>
              <p style={{ fontSize: 16, color: c.ink2, lineHeight: 1.55, margin: "0 0 28px", maxWidth: 520 }}>{t.branchesLede}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: `1px solid ${c.hair}`, borderRadius: 12, overflow: "hidden" }}>
                {[
                  lang === "he" ? ["תל אביב", "ירושלים", "חיפה", "באר שבע", "אילת", "נתניה"]
                  : lang === "en" ? ["Tel Aviv", "Jerusalem", "Haifa", "Beersheba", "Eilat", "Netanya"]
                  : ["Тель-Авив", "Иерусалим", "Хайфа", "Беэр-Шева", "Эйлат", "Нетания"]
                ][0].map((name, i, arr) => (
                  <div key={i} style={{
                    padding: "14px 18px", fontSize: 14, fontWeight: 500,
                    borderBottom: i >= arr.length - 2 ? 0 : `1px solid ${c.hair}`,
                    borderRight: i % 2 === 0 ? `1px solid ${c.hair}` : 0,
                    display: "flex", justifyContent: "space-between",
                  }}>
                    <span>{name}</span>
                    <ArrowNext size={14} dir={dir} />
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              padding: 24, border: `1px solid ${c.hair}`, borderRadius: 16, background: c.blueMist,
              display: "grid", placeItems: "center",
            }}>
              <IsraelMap markers={BRANCH_MARKERS} width={240} height={420} fg={c.blue} bg="rgba(0,56,184,0.08)" />
            </div>
          </div>
        </div>
      </section>

      {/* === NEWSLETTER === */}
      <section style={{ background: c.blueSoft }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 36, fontFamily: "var(--font-display)", letterSpacing: "-0.025em", fontWeight: 700, margin: 0 }}>{t.newsletterTitle}</h2>
            <p style={{ fontSize: 16, color: c.ink2, margin: "12px 0 0", maxWidth: 460 }}>{t.newsletterLede}</p>
          </div>
          <div style={{ display: "flex", gap: 0, background: c.paper, borderRadius: 999, padding: 6, border: `1px solid ${c.hair}` }}>
            <input placeholder={t.newsletterPh} dir={dir} style={{
              flex: 1, border: 0, outline: 0, background: "transparent",
              padding: "14px 22px", fontSize: 15, fontFamily: "inherit",
              textAlign: dir === "rtl" ? "right" : "left",
            }} />
            <button style={{
              background: c.blue, color: "white", border: 0, borderRadius: 999,
              padding: "14px 28px", fontSize: 14.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>{t.cta.subscribe}</button>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      {chrome && (
      <footer style={{ background: c.blueInk, color: "white", padding: "64px 32px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: `1px solid rgba(255,255,255,0.12)` }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <LikudMark size={36} bg={c.blue} />
                <div style={{ fontWeight: 700, fontSize: 16 }}>{lang === "he" ? "הליכוד" : "LIKUD"}</div>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.68)", maxWidth: 320 }}>
                {lang === "he" ? "מטה המפלגה · רחוב מצדה 7, תל אביב · 6473307"
                  : lang === "en" ? "Party HQ · 7 Metzada St., Tel Aviv · 6473307"
                  : "Штаб партии · ул. Мецада, 7, Тель-Авив · 6473307"}
              </div>
            </div>
            {[
              { h: t.nav.about, links: [t.nav.about, t.nav.leadership, t.nav.primaries] },
              { h: t.nav.positions, links: [...t.positionsList.slice(0, 4).map(p => p.title)] },
              { h: t.nav.contact, links: [t.nav.contact, t.nav.branches, t.cta.subscribe] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 0.12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>{col.h}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 13.5 }}>
                  {col.links.map((l, j) => <li key={j} style={{ color: "rgba(255,255,255,0.85)" }}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
            <span>{t.footerLegal}</span>
            <span style={{ display: "inline-flex", gap: 18 }}>
              {t.footerMeta.map((m, i) => <span key={i}>{m}</span>)}
            </span>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}

// Inline icons (single stroke) for positions
function PositionIcon({ i }) {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = [
    // security: shield
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
    // economy: bars
    <g><path d="M3 20h18" /><rect x="5" y="11" width="3" height="6" /><rect x="11" y="7" width="3" height="10" /><rect x="17" y="13" width="3" height="4" /></g>,
    // foreign: globe
    <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></g>,
    // society: scales
    <g><path d="M12 3v18M5 8l-3 6h6l-3-6zM19 8l-3 6h6l-3-6z" /></g>,
    // settlement: home + lines
    <g><path d="M3 11l9-7 9 7v9H3z" /><path d="M9 20v-6h6v6" /></g>,
    // heritage: book/scroll
    <g><path d="M5 5h11a3 3 0 0 1 3 3v11H8a3 3 0 0 1-3-3V5z" /><path d="M9 9h7M9 13h7" /></g>,
  ];
  return <svg {...props}>{paths[i % paths.length]}</svg>;
}

// ========== 4. HOME — live mock, three languages side-by-side ==========
function SectionHome({ globalLang, setGlobalLang }) {
  const [mode, setMode] = React.useState("triple"); // triple | single
  const [focusLang, setFocusLang] = React.useState(globalLang);

  React.useEffect(() => { setFocusLang(globalLang); }, [globalLang]);

  return (
    <section className="doc-section bleed" id="home" style={{ background: "var(--paper-2)" }}>
      <div className="section-head">
        <span className="section-num">04 · Hi-fi прототип главной</span>
        <h2 className="section-title">Главная — в работе</h2>
        <p className="section-lede">Один макет, три локали. Слева — иврит (RTL, primary), посередине — английский (LTR), справа — русский (LTR). Все три собраны из одного компонента — это и есть смысл такой архитектуры.</p>
      </div>

      {/* mode switcher */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, alignItems: "center", flexWrap: "wrap" }}>
        <div role="tablist" style={{ display: "inline-flex", padding: 4, borderRadius: 999, border: "1px solid var(--hairline)", background: "var(--paper)" }}>
          <button onClick={() => setMode("triple")} style={modeBtn(mode === "triple")}>Три языка рядом</button>
          <button onClick={() => setMode("single")} style={modeBtn(mode === "single")}>Один — крупно</button>
        </div>
        {mode === "single" && (
          <LangSwitch value={focusLang} onChange={setFocusLang} />
        )}
        <div style={{ marginInlineStart: "auto", fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
          1280 × scroll · @1× design
        </div>
      </div>

      {mode === "triple" ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          alignItems: "start",
        }}>
          {["he", "en", "ru"].map(L => (
            <FramedScaledMock key={L} lang={L} />
          ))}
        </div>
      ) : (
        <FramedScaledMock lang={focusLang} large />
      )}

      {/* legend below */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 28 }}>
        {[
          { l: "RTL — что развернулось",       v: "Логотип ушёл вправо, навигация — тоже. Hero-портрет переехал слева, текст — справа. Стрелки CTA перевернулись." },
          { l: "Чего НЕ касались",              v: "Числа («150K+», «120», даты), карта Израиля, логотипы, иконки воспроизведения — направление не зависит от языка." },
          { l: "Шрифты по локали",              v: "Иврит — Heebo, en/ru — Rubik. Размеры и вес — одинаковые, чтобы оптическая плотность совпадала." },
          { l: "CTA как опорный жест",          v: "Синий → primary, прозрачный с hairline → secondary. Это единственный паттерн действий на всём сайте." },
        ].map((x, i) => (
          <div key={i} style={{ padding: 16, border: "1px solid var(--hairline)", borderRadius: 12, background: "var(--paper)" }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.1, color: "var(--ink-3)", marginBottom: 6 }}>{x.l}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function modeBtn(active) {
  return {
    border: 0, cursor: "pointer", padding: "8px 14px", borderRadius: 999,
    background: active ? "var(--likud-blue)" : "transparent",
    color: active ? "white" : "var(--ink-2)",
    fontSize: 13, fontWeight: 600, fontFamily: "var(--font-body)",
  };
}

// Wraps HomeMock in a frame at a useful scale
function FramedScaledMock({ lang, large }) {
  // We render the mock at 1280 wide and scale it to fit container
  const [w, setW] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setW(e.contentRect.width);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const designW = 1280;
  const scale = w ? Math.min(1, w / designW) : 0.7;
  // Mock renders very tall — we estimate the "scaled" height
  // The mock has ~ 3700px content height at 1280; scale accordingly
  const estimatedFullHeight = 3700;
  const height = estimatedFullHeight * scale;
  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <BrowserFrame lang={lang} dir={dir}>
      <div ref={ref} style={{
        position: "relative",
        width: "100%",
        height: large ? height : Math.min(height, 720),
        overflow: "hidden",
        background: "white",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          [dir === "rtl" ? "right" : "left"]: 0,
          width: designW,
          transformOrigin: dir === "rtl" ? "top right" : "top left",
          transform: `scale(${scale})`,
        }}>
          <HomeMock lang={lang} scale={1} />
        </div>
        {!large && (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.95) 100%)",
            pointerEvents: "none",
          }} />
        )}
        {!large && (
          <div style={{
            position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
            fontSize: 11, color: "var(--ink-3)", background: "var(--paper)",
            border: "1px solid var(--hairline)", borderRadius: 999, padding: "4px 12px",
            fontFamily: "var(--font-mono)",
          }}>
            scroll preview · 1/5
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}

Object.assign(window, { SectionHome, HomeMock, BrowserFrame, FramedScaledMock, PositionIcon });
