import { useState, useEffect } from "react";
import { CASES, PLATFORMS, PLATFORM_COLORS, LEGAL_ARGUMENTS, STATE_POSTURES } from "./data/cases";

const STATUS_CONFIG = {
  "On Appeal":            { color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  dot: "#F59E0B" },
  "Injunction Issued":    { color: "#EF4444", bg: "rgba(239,68,68,0.12)",   dot: "#EF4444" },
  "Injunction Granted":   { color: "#10B981", bg: "rgba(16,185,129,0.12)",  dot: "#10B981" },
  "Injunction Denied":    { color: "#EF4444", bg: "rgba(239,68,68,0.12)",   dot: "#EF4444" },
  "TRO Issued":           { color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  dot: "#F59E0B" },
  "TRO in Place":         { color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  dot: "#F59E0B" },
  "Recently Filed":       { color: "#60A5FA", bg: "rgba(96,165,250,0.12)",  dot: "#60A5FA" },
  "Active Litigation":    { color: "#A78BFA", bg: "rgba(167,139,250,0.12)", dot: "#A78BFA" },
  "Oral Arguments Imminent": { color: "#FB923C", bg: "rgba(251,146,60,0.12)", dot: "#FB923C" },
  "Class Action Filed":   { color: "#F472B6", bg: "rgba(244,114,182,0.12)", dot: "#F472B6" },
};

const SIG_CONFIG = {
  HIGH:   { color: "#EF4444", label: "HIGH SIGNIFICANCE" },
  MEDIUM: { color: "#F59E0B", label: "MEDIUM SIGNIFICANCE" },
  LOW:    { color: "#6B7280", label: "LOW SIGNIFICANCE" },
};

const POSTURE_CONFIG = {
  litigation:  { color: "#EF4444", bg: "rgba(239,68,68,0.15)",  label: "Active Litigation" },
  enforcement: { color: "#F59E0B", bg: "rgba(245,158,11,0.15)", label: "Enforcement Action" },
  warning:     { color: "#F97316", bg: "rgba(249,115,22,0.15)", label: "Regulatory Warning" },
  permissive:  { color: "#22C55E", bg: "rgba(34,197,94,0.15)",  label: "No Action Taken" },
};

// ── US State abbreviations and positions for the map ──────────
const US_STATES = {
  AL:{name:"Alabama",x:610,y:400},AK:{name:"Alaska",x:120,y:480},AZ:{name:"Arizona",x:165,y:355},
  AR:{name:"Arkansas",x:555,y:380},CA:{name:"California",x:105,y:295},CO:{name:"Colorado",x:285,y:305},
  CT:{name:"Connecticut",x:755,y:205},DE:{name:"Delaware",x:730,y:255},FL:{name:"Florida",x:645,y:460},
  GA:{name:"Georgia",x:635,y:400},HI:{name:"Hawaii",x:220,y:500},ID:{name:"Idaho",x:195,y:215},
  IL:{name:"Illinois",x:565,y:285},IN:{name:"Indiana",x:595,y:280},IA:{name:"Iowa",x:530,y:255},
  KS:{name:"Kansas",x:445,y:325},KY:{name:"Kentucky",x:620,y:320},LA:{name:"Louisiana",x:545,y:430},
  ME:{name:"Maine",x:790,y:155},MD:{name:"Maryland",x:715,y:262},MA:{name:"Massachusetts",x:770,y:195},
  MI:{name:"Michigan",x:600,y:225},MN:{name:"Minnesota",x:505,y:200},MS:{name:"Mississippi",x:575,y:410},
  MO:{name:"Missouri",x:535,y:320},MT:{name:"Montana",x:255,y:185},NE:{name:"Nebraska",x:435,y:285},
  NV:{name:"Nevada",x:145,y:275},NH:{name:"New Hampshire",x:770,y:175},NJ:{name:"New Jersey",x:735,y:245},
  NM:{name:"New Mexico",x:270,y:380},NY:{name:"New York",x:720,y:195},NC:{name:"North Carolina",x:680,y:340},
  ND:{name:"North Dakota",x:435,y:195},OH:{name:"Ohio",x:645,y:275},OK:{name:"Oklahoma",x:455,y:370},
  OR:{name:"Oregon",x:130,y:210},PA:{name:"Pennsylvania",x:690,y:245},RI:{name:"Rhode Island",x:770,y:207},
  SC:{name:"South Carolina",x:665,y:375},SD:{name:"South Dakota",x:430,y:235},TN:{name:"Tennessee",x:610,y:355},
  TX:{name:"Texas",x:430,y:415},UT:{name:"Utah",x:215,y:290},VT:{name:"Vermont",x:760,y:170},
  VA:{name:"Virginia",x:685,y:295},WA:{name:"Washington",x:140,y:168},WV:{name:"West Virginia",x:675,y:290},
  WI:{name:"Wisconsin",x:560,y:220},WY:{name:"Wyoming",x:285,y:245},DC:{name:"D.C.",x:718,y:270},
};

function StatusBadge({ label }) {
  const cfg = STATUS_CONFIG[label] || { color: "#9CA3AF", bg: "rgba(156,163,175,0.12)", dot: "#9CA3AF" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: "3px 10px", borderRadius: "20px",
      background: cfg.bg, border: `1px solid ${cfg.color}22`,
      fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em",
      color: cfg.color, fontFamily: "'IBM Plex Mono', monospace",
      textTransform: "uppercase",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0,
        boxShadow: `0 0 6px ${cfg.dot}` }} />
      {label}
    </span>
  );
}

function CaseCard({ c, onClick }) {
  const platColor = PLATFORM_COLORS[c.platform] || "#9CA3AF";
  return (
    <div onClick={() => onClick(c)} style={{
      background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.7) 100%)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderTop: `2px solid ${platColor}`,
      borderRadius: "4px",
      padding: "22px 24px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      position: "relative",
      backdropFilter: "blur(8px)",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.border = `1px solid ${platColor}40`;
      e.currentTarget.style.borderTop = `2px solid ${platColor}`;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${platColor}20`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
      e.currentTarget.style.borderTop = `2px solid ${platColor}`;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
            color: platColor, fontFamily: "'IBM Plex Mono', monospace",
            textTransform: "uppercase", padding: "2px 8px",
            border: `1px solid ${platColor}40`, borderRadius: "3px",
            background: `${platColor}10`,
          }}>{c.platform}</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", fontFamily: "'IBM Plex Mono', monospace" }}>
            {c.caseType}
          </span>
        </div>
        <StatusBadge label={c.statusLabel} />
      </div>

      <h3 style={{ margin: "0 0 6px", fontSize: "17px", fontWeight: 700, color: "#F1F5F9",
        fontFamily: "'Sora', sans-serif", lineHeight: 1.3 }}>
        {c.platform} v. {c.state}
      </h3>

      <p style={{ margin: "0 0 14px", fontSize: "12px", color: "#64748B",
        fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.02em" }}>
        {c.court}
      </p>

      <p style={{ margin: "0 0 16px", fontSize: "13px", color: "rgba(203,213,225,0.75)",
        fontFamily: "'Sora', sans-serif", lineHeight: 1.6 }}>
        {c.coreIssue}
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14, marginTop: 4 }}>
        <p style={{ margin: "0 0 8px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
          Latest Development
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#CBD5E1", fontFamily: "'Sora', sans-serif", lineHeight: 1.6 }}>
          {c.lastDevelopment.length > 180 ? c.lastDevelopment.slice(0, 180) + "…" : c.lastDevelopment}
        </p>
      </div>

      {c.nextEvent && (
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "10px", color: "#F59E0B", fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>⏱ NEXT:</span>
          <span style={{ fontSize: "12px", color: "rgba(245,158,11,0.8)", fontFamily: "'Sora', sans-serif" }}>
            {c.nextEvent}
          </span>
        </div>
      )}

      <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", fontFamily: "'IBM Plex Mono', monospace" }}>
          Updated {c.lastUpdated}
        </span>
        <span style={{ fontSize: "11px", color: SIG_CONFIG[c.significance]?.color,
          fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: "0.06em" }}>
          {SIG_CONFIG[c.significance]?.label}
        </span>
      </div>

      {c.filings && c.filings.length > 0 && (
        <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex", gap: 8, flexWrap: "wrap" }}>
          {c.filings.map((f, i) => (
            <a key={i} href={f.url} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ fontSize: "10px", color: platColor, fontFamily: "'IBM Plex Mono', monospace",
                textDecoration: "none", border: `1px solid ${platColor}30`, borderRadius: "3px",
                padding: "2px 8px", background: `${platColor}08`,
                display: "inline-flex", alignItems: "center", gap: 4 }}>
              ↗ {f.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Modal({ c, onClose }) {
  const platColor = PLATFORM_COLORS[c.platform] || "#9CA3AF";
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
      zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }} onClick={onClose}>
      <div style={{
        background: "linear-gradient(135deg, #0F172A 0%, #0D1B2E 100%)",
        border: `1px solid ${platColor}30`,
        borderTop: `3px solid ${platColor}`,
        borderRadius: "6px", width: "100%", maxWidth: "680px",
        maxHeight: "85vh", overflowY: "auto", padding: "32px",
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: platColor,
                fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase",
                padding: "2px 8px", border: `1px solid ${platColor}40`, borderRadius: "3px" }}>
                {c.platform}
              </span>
              <StatusBadge label={c.statusLabel} />
            </div>
            <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#F1F5F9",
              fontFamily: "'Sora', sans-serif" }}>
              {c.platform} v. {c.state}
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#475569",
              fontFamily: "'IBM Plex Mono', monospace" }}>{c.court} · {c.caseType}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569",
            cursor: "pointer", fontSize: "22px", padding: "0 4px", lineHeight: 1 }}>✕</button>
        </div>

        <Section title="Core Issue" color={platColor}>
          <p style={{ margin: 0, fontSize: "14px", color: "#CBD5E1", lineHeight: 1.7,
            fontFamily: "'Sora', sans-serif" }}>{c.coreIssue}</p>
        </Section>

        <Section title="Latest Development" color={platColor}>
          <p style={{ margin: 0, fontSize: "14px", color: "#CBD5E1", lineHeight: 1.7,
            fontFamily: "'Sora', sans-serif" }}>{c.lastDevelopment}</p>
        </Section>

        <Section title="Key Timeline" color={platColor}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {c.keyDates.map((kd, i) => (
              <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 14, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: platColor,
                    marginTop: 5, flexShrink: 0, boxShadow: `0 0 8px ${platColor}` }} />
                  {i < c.keyDates.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: `${platColor}30`, marginTop: 4 }} />
                  )}
                </div>
                <div style={{ paddingBottom: 4 }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: platColor,
                    fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.05em" }}>{kd.date}</span>
                  <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#94A3B8",
                    fontFamily: "'Sora', sans-serif", lineHeight: 1.5 }}>{kd.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {c.nextEvent && (
          <Section title="Next Scheduled Event" color="#F59E0B">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: "18px" }}>⏱</span>
              <span style={{ fontSize: "14px", color: "rgba(245,158,11,0.9)",
                fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>{c.nextEvent}</span>
            </div>
          </Section>
        )}

        {c.filings && c.filings.length > 0 && (
          <Section title="Source Documents & Filings" color={platColor}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {c.filings.map((f, i) => (
                <a key={i} href={f.url} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 14px", borderRadius: "4px",
                  background: `${platColor}08`, border: `1px solid ${platColor}25`,
                  color: platColor, textDecoration: "none",
                  fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600,
                  transition: "all 0.15s",
                }}>
                  <span>↗</span>
                  <span>{f.label}</span>
                </a>
              ))}
            </div>
          </Section>
        )}

        {c.notes && (
          <Section title="Analyst Notes" color="#A78BFA">
            <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic",
              fontFamily: "'Sora', sans-serif", borderLeft: "2px solid #A78BFA40", paddingLeft: 12 }}>
              {c.notes}
            </p>
          </Section>
        )}

        <div style={{ marginTop: 24, padding: "12px 16px", background: "rgba(255,255,255,0.03)",
          borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center",
          border: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.08em", textTransform: "uppercase" }}>Parties</span>
            <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748B",
              fontFamily: "'IBM Plex Mono', monospace" }}>
              {c.parties.plaintiff} v. {c.parties.defendant}
            </p>
          </div>
          <span style={{ fontSize: "11px", color: SIG_CONFIG[c.significance]?.color,
            fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
            {SIG_CONFIG[c.significance]?.label}
          </span>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ margin: "0 0 10px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
        color: color || "#64748B", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
        — {title}
      </p>
      {children}
    </div>
  );
}

// ── State of the Law Summary Panel ─────────────────────────
function LawSummary() {
  const totalCases = CASES.length;
  const platforms = CASES.filter(c => c.parties.plaintiff.match(/Kalshi|Polymarket|Coinbase|Crypto|Robinhood|Underdog|DraftKings|QCX/));
  const platformWins = CASES.filter(c => c.statusLabel === "Injunction Granted" || c.statusLabel === "TRO in Place").length;
  const stateWins = CASES.filter(c => c.statusLabel === "Injunction Denied" || c.statusLabel === "Injunction Issued" || c.statusLabel === "TRO Issued").length;
  const appeals = CASES.filter(c => c.statusLabel === "On Appeal").length;
  const recent = CASES.filter(c => c.statusLabel === "Recently Filed").length;

  return (
    <div style={{
      marginBottom: 40,
      padding: "28px 32px",
      background: "linear-gradient(135deg, rgba(34,211,238,0.04) 0%, rgba(129,140,248,0.04) 100%)",
      border: "1px solid rgba(34,211,238,0.12)",
      borderRadius: "4px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, #22D3EE, transparent)" }} />

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <div style={{ height: 1, width: 20, background: "#22D3EE" }} />
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
          color: "#22D3EE", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
          State of the Law
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 24 }}>
        <ScoreCard label="Platform Court Wins" value={platformWins} color="#22D3EE"
          sub="Injunctions or TROs blocking state enforcement" />
        <ScoreCard label="State Court Wins" value={stateWins} color="#EF4444"
          sub="Courts upholding state gaming authority" />
        <ScoreCard label="Cases on Appeal" value={appeals} color="#F59E0B"
          sub="Appellate review pending; no final ruling" />
        <ScoreCard label="Recently Filed" value={recent} color="#60A5FA"
          sub="New cases entered in last 90 days" />
      </div>

      <div style={{ padding: "16px 20px", background: "rgba(0,0,0,0.2)", borderRadius: "4px",
        border: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ margin: "0 0 8px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.35)", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
          Current Trajectory
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "rgba(203,213,225,0.8)", lineHeight: 1.7,
          fontFamily: "'Sora', sans-serif" }}>
          A clear pattern has emerged: <strong style={{ color: "#EF4444" }}>states win when they file in state court</strong>;{" "}
          <strong style={{ color: "#22D3EE" }}>platforms win when they can remove to federal court</strong>.
          The central unresolved question — whether sports event contracts qualify as "swaps" under the Commodity Exchange Act —
          will likely be answered by the 9th Circuit in the Nevada case, with oral arguments on{" "}
          <strong style={{ color: "#F59E0B" }}>April 16, 2026</strong>. Multiple legal experts anticipate eventual Supreme Court review.
        </p>
      </div>
    </div>
  );
}

function ScoreCard({ label, value, color, sub }) {
  return (
    <div>
      <div style={{ fontSize: "32px", fontWeight: 800, color, lineHeight: 1,
        fontFamily: "'IBM Plex Mono', monospace", marginBottom: 6 }}>{value}</div>
      <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)",
        fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase",
        letterSpacing: "0.06em", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: "11px", color: "rgba(148,163,184,0.6)", fontFamily: "'Sora', sans-serif" }}>{sub}</div>
    </div>
  );
}

// ── Jurisdiction Risk Map ───────────────────────────────────
function JurisdictionMap() {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  return (
    <div style={{
      marginBottom: 40,
      padding: "28px 32px",
      background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.7) 100%)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "4px",
      position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <div style={{ height: 1, width: 20, background: "#818CF8" }} />
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
          color: "#818CF8", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
          Jurisdiction Risk Map
        </span>
      </div>
      <p style={{ margin: "0 0 20px", fontSize: "12px", color: "rgba(148,163,184,0.6)",
        fontFamily: "'Sora', sans-serif" }}>
        State-by-state enforcement posture. Hover over a state for details.
      </p>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
        {Object.entries(POSTURE_CONFIG).map(([key, cfg]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "2px", background: cfg.color, opacity: 0.8 }} />
            <span style={{ fontSize: "10px", color: "rgba(148,163,184,0.7)",
              fontFamily: "'IBM Plex Mono', monospace" }}>{cfg.label}</span>
          </div>
        ))}
      </div>

      {/* SVG Map */}
      <div style={{ position: "relative", width: "100%", overflowX: "auto" }}>
        <svg viewBox="0 0 900 560" style={{ width: "100%", maxWidth: 860 }}>
          {Object.entries(US_STATES).map(([abbr, state]) => {
            const posture = STATE_POSTURES[abbr];
            const cfg = posture ? POSTURE_CONFIG[posture.posture] : null;
            const isHovered = hoveredState === abbr;
            const fill = cfg ? cfg.color : "rgba(255,255,255,0.08)";
            const opacity = cfg ? (isHovered ? 1 : 0.65) : (isHovered ? 0.3 : 0.15);
            return (
              <g key={abbr}
                onMouseEnter={(e) => { setHoveredState(abbr); setTooltip({ x: e.clientX, y: e.clientY }); }}
                onMouseLeave={() => setHoveredState(null)}
                style={{ cursor: posture ? "pointer" : "default" }}>
                <circle
                  cx={state.x} cy={state.y} r={abbr === "DC" ? 4 : 14}
                  fill={fill} opacity={opacity}
                  stroke={isHovered ? "#fff" : "rgba(255,255,255,0.1)"}
                  strokeWidth={isHovered ? 1.5 : 0.5}
                />
                <text x={state.x} y={state.y + 1} textAnchor="middle" dominantBaseline="middle"
                  fontSize={abbr === "DC" ? 5 : 7}
                  fill={cfg ? "#fff" : "rgba(255,255,255,0.4)"}
                  fontFamily="IBM Plex Mono, monospace" fontWeight="700"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {abbr}
                </text>
                {cfg && (
                  <circle cx={state.x + 10} cy={state.y - 10} r={3}
                    fill={cfg.color} opacity={0.9}
                    style={{ animation: posture.posture === "litigation" ? "pulse 2s infinite" : "none" }} />
                )}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredState && STATE_POSTURES[hoveredState] && (
          <div style={{
            position: "fixed",
            left: tooltip.x + 12, top: tooltip.y - 8,
            background: "#0F172A", border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "4px", padding: "10px 14px", zIndex: 999,
            pointerEvents: "none", maxWidth: 240,
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#F1F5F9",
              fontFamily: "'Sora', sans-serif", marginBottom: 4 }}>
              {US_STATES[hoveredState]?.name}
            </div>
            <div style={{ fontSize: "10px", fontWeight: 700,
              color: POSTURE_CONFIG[STATE_POSTURES[hoveredState].posture]?.color,
              fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em",
              textTransform: "uppercase", marginBottom: 6 }}>
              {STATE_POSTURES[hoveredState].label}
            </div>
            {STATE_POSTURES[hoveredState].cases.length > 0 && (
              <div style={{ fontSize: "11px", color: "rgba(148,163,184,0.8)",
                fontFamily: "'Sora', sans-serif" }}>
                Parties: {STATE_POSTURES[hoveredState].cases.join(", ")}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Legal Arguments Tracker ─────────────────────────────────
function ArgumentsTracker() {
  return (
    <div style={{
      marginBottom: 40,
      background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.7) 100%)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "4px",
      overflow: "hidden",
    }}>
      <div style={{ padding: "22px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ height: 1, width: 20, background: "#34D399" }} />
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
            color: "#34D399", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
            Key Legal Arguments Tracker
          </span>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "rgba(148,163,184,0.6)",
          fontFamily: "'Sora', sans-serif" }}>
          How each core legal theory is faring across all active cases
        </p>
      </div>

      {LEGAL_ARGUMENTS.map((arg, i) => (
        <div key={arg.id} style={{
          padding: "20px 28px",
          borderBottom: i < LEGAL_ARGUMENTS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            flexWrap: "wrap", gap: 12, marginBottom: 10 }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h4 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700, color: "#F1F5F9",
                fontFamily: "'Sora', sans-serif" }}>{arg.title}</h4>
              <p style={{ margin: 0, fontSize: "12px", color: "rgba(148,163,184,0.7)",
                fontFamily: "'Sora', sans-serif", lineHeight: 1.6 }}>{arg.description}</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              <MiniScore label="Platform Wins" value={arg.platformWins} color="#22D3EE" />
              <MiniScore label="State Wins" value={arg.stateWins} color="#EF4444" />
              <MiniScore label="Pending" value={arg.pendingCases} color="#94A3B8" />
            </div>
          </div>
          <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)",
            borderRadius: "3px", borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
            <p style={{ margin: "0 0 4px", fontSize: "10px", fontWeight: 700,
              color: "rgba(255,255,255,0.35)", fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.08em", textTransform: "uppercase" }}>Current Trend</p>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(148,163,184,0.8)",
              fontFamily: "'Sora', sans-serif", lineHeight: 1.6 }}>{arg.trend}</p>
            <p style={{ margin: "6px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.3)",
              fontFamily: "'IBM Plex Mono', monospace" }}>Key case: {arg.keyCase}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniScore({ label, value, color }) {
  return (
    <div style={{ textAlign: "center", minWidth: 52 }}>
      <div style={{ fontSize: "22px", fontWeight: 800, color, lineHeight: 1,
        fontFamily: "'IBM Plex Mono', monospace" }}>{value}</div>
      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", marginTop: 2,
        fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase",
        letterSpacing: "0.04em", lineHeight: 1.3 }}>{label}</div>
    </div>
  );
}

// ── Main App ────────────────────────────────────────────────
export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [activeCase, setActiveCase] = useState(null);
  const lastUpdated = "March 8, 2026";

  const filtered = CASES.filter(c =>
    selectedPlatform === "All" || c.platform === selectedPlatform
  );

  const highCount = CASES.filter(c => c.significance === "HIGH").length;
  const platformCounts = PLATFORMS.slice(1).reduce((acc, p) => {
    acc[p] = CASES.filter(c => c.platform === p).length;
    return acc;
  }, {});

  const casesWithFilings = CASES.filter(c => c.filings && c.filings.length > 0).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060D1A",
      backgroundImage: `
        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 40% 40% at 85% 20%, rgba(129,140,248,0.05) 0%, transparent 50%),
        linear-gradient(180deg, #060D1A 0%, #080F1F 100%)
      `,
      fontFamily: "'Sora', sans-serif",
      color: "#F1F5F9",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,13,26,0.8)", backdropFilter: "blur(12px)",
        position: "sticky", top: 0, zIndex: 100, padding: "0 40px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex",
          justifyContent: "space-between", alignItems: "center", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: "4px",
              background: "linear-gradient(135deg, #22D3EE, #818CF8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 800, color: "#060D1A" }}>⚖</div>
            <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em",
              color: "#F1F5F9", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
              Prediction Market Litigation Dashboard
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)",
              fontFamily: "'IBM Plex Mono', monospace" }}>
              {CASES.length} Cases · {highCount} High Significance
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6,
              padding: "4px 10px", borderRadius: "20px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)",
                fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: "0.08em" }}>
                UPDATED {lastUpdated.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 80px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "#22D3EE" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em",
              color: "#22D3EE", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
              Federal vs. State · CFTC Jurisdiction
            </span>
          </div>
          <h1 style={{ margin: "0 0 16px", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
            lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F8FAFC" }}>
            The Battle for Prediction<br />
            <span style={{ background: "linear-gradient(90deg, #22D3EE, #818CF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Market Jurisdiction
            </span>
          </h1>
          <p style={{ margin: 0, fontSize: "15px", color: "rgba(148,163,184,0.8)",
            lineHeight: 1.7, maxWidth: 600 }}>
            Tracking the ongoing litigation regarding prediction markets and event contracts.
            Created by{" "}
            <a href="https://www.linkedin.com/in/michaelarosselli" target="_blank" rel="noreferrer"
              style={{ color: "#22D3EE", textDecoration: "none", fontWeight: 600,
                borderBottom: "1px solid rgba(34,211,238,0.4)" }}>
              Michael Rosselli
            </a>
            {" "}and powered by{" "}
            <a href="https://claude.ai" target="_blank" rel="noreferrer"
              style={{ color: "#818CF8", textDecoration: "none", fontWeight: 600,
                borderBottom: "1px solid rgba(129,140,248,0.4)" }}>
              Claude
            </a>
            .
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 12, marginBottom: 40 }}>
          {[
            { label: "Total Active Cases", value: CASES.length, color: "#22D3EE" },
            { label: "High Significance", value: highCount, color: "#EF4444" },
            { label: "Platforms Affected", value: PLATFORMS.length - 1, color: "#818CF8" },
            { label: "States Involved", value: Object.keys(STATE_POSTURES).length, color: "#34D399" },
            { label: "Cases With Filings", value: casesWithFilings, color: "#F97316" },
          ].map(s => (
            <div key={s.label} style={{
              padding: "16px 20px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
            }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: s.color, lineHeight: 1,
                marginBottom: 6, fontFamily: "'IBM Plex Mono', monospace" }}>{s.value}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)",
                fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em",
                textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Feature 1: State of the Law */}
        <LawSummary />

        {/* Feature 2: Jurisdiction Risk Map */}
        <JurisdictionMap />

        {/* Feature 3: Legal Arguments Tracker */}
        <ArgumentsTracker />

        {/* Platform filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {PLATFORMS.map(p => {
            const isActive = selectedPlatform === p;
            const color = PLATFORM_COLORS[p] || "#94A3B8";
            return (
              <button key={p} onClick={() => setSelectedPlatform(p)} style={{
                padding: "7px 16px",
                background: isActive ? `${color}18` : "rgba(255,255,255,0.03)",
                border: isActive ? `1px solid ${color}50` : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
                color: isActive ? color : "rgba(255,255,255,0.45)",
                fontSize: "11px", fontWeight: 600,
                fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.15s",
              }}>
                {p === "All" ? `All Platforms (${CASES.length})` : `${p} (${platformCounts[p] || 0})`}
              </button>
            );
          })}
        </div>

        {/* Case grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
          {filtered.map(c => <CaseCard key={c.id} c={c} onClick={setActiveCase} />)}
        </div>

        {/* About + Footer */}
        <div style={{
          marginTop: 72, paddingTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ height: 1, width: 20, background: "#818CF8" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                color: "#818CF8", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
                About This Dashboard
              </span>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: "14px", color: "rgba(148,163,184,0.8)",
              lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
              This dashboard tracks active litigation across all major prediction market platforms —
              Kalshi, Polymarket, Coinbase, Crypto.com, Robinhood, Underdog, DraftKings, and tribal gaming interests.
              It includes a jurisdiction risk map, a tracker of how each core legal argument is faring in court,
              a summary of where the law currently stands, and links to source filings where available.
            </p>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "rgba(148,163,184,0.8)",
              lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
              Click any case card for a full breakdown of parties, timeline, and significance.
            </p>
            {/* Footer links */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 4 }}>
              <a href="https://www.linkedin.com/in/michaelarosselli" target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6,
                  color: "rgba(148,163,184,0.6)", textDecoration: "none",
                  fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace",
                  transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#22D3EE"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(148,163,184,0.6)"}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
              <a href="https://github.com/michaelarosselli/prediction-market-tracker" target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6,
                  color: "rgba(148,163,184,0.6)", textDecoration: "none",
                  fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace",
                  transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#818CF8"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(148,163,184,0.6)"}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ height: 1, width: 20, background: "#22D3EE" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                color: "#22D3EE", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
                Disclaimer
              </span>
            </div>
            <p style={{ margin: "0 0 24px", fontSize: "13px", color: "rgba(100,116,139,0.8)",
              lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
              This dashboard is for informational purposes only. Case summaries are compiled from
              public reporting and court records. Always verify case status against official court
              dockets. Nothing here constitutes legal advice.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10,
              padding: "12px 16px", background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px",
              width: "fit-content" }}>
              <span style={{ fontSize: "18px" }}>✦</span>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.4)",
                  fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em",
                  textTransform: "uppercase", marginBottom: 2 }}>Powered By</div>
                <a href="https://claude.ai" target="_blank" rel="noreferrer"
                  style={{ fontSize: "13px", fontWeight: 700, color: "#F1F5F9",
                    fontFamily: "'Sora', sans-serif", textDecoration: "none" }}>
                  Claude by Anthropic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeCase && <Modal c={activeCase} onClose={() => setActiveCase(null)} />}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; background: #060D1A; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
      `}</style>
    </div>
  );
}
