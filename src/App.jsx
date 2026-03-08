import { useState, useEffect } from "react";
import { CASES, PLATFORMS } from "./data/cases";

const STATUS_CONFIG = {
  "On Appeal": { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", dot: "#F59E0B" },
  "Injunction Issued": { color: "#EF4444", bg: "rgba(239,68,68,0.12)", dot: "#EF4444" },
  "Injunction Granted": { color: "#10B981", bg: "rgba(16,185,129,0.12)", dot: "#10B981" },
  "Injunction Denied": { color: "#EF4444", bg: "rgba(239,68,68,0.12)", dot: "#EF4444" },
  "TRO Issued": { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", dot: "#F59E0B" },
  "TRO in Place": { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", dot: "#F59E0B" },
  "Recently Filed": { color: "#60A5FA", bg: "rgba(96,165,250,0.12)", dot: "#60A5FA" },
  "Active Litigation": { color: "#A78BFA", bg: "rgba(167,139,250,0.12)", dot: "#A78BFA" },
  "Oral Arguments Imminent": { color: "#FB923C", bg: "rgba(251,146,60,0.12)", dot: "#FB923C" },
  "Class Action Filed": { color: "#F472B6", bg: "rgba(244,114,182,0.12)", dot: "#F472B6" },
};

const SIG_CONFIG = {
  HIGH: { color: "#EF4444", label: "HIGH SIGNIFICANCE" },
  MEDIUM: { color: "#F59E0B", label: "MEDIUM SIGNIFICANCE" },
  LOW: { color: "#6B7280", label: "LOW SIGNIFICANCE" },
};

const PLATFORM_COLORS = {
  Kalshi: "#22D3EE",
  Polymarket: "#818CF8",
  Coinbase: "#34D399",
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
        fontFamily: "'Sora', sans-serif", lineHeight: 1.6, }}>
        {c.coreIssue}
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14, marginTop: 4 }}>
        <p style={{ margin: "0 0 8px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
          Latest Development
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#CBD5E1", fontFamily: "'Sora', sans-serif",
          lineHeight: 1.6, }}>
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
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)",
          fontFamily: "'IBM Plex Mono', monospace" }}>
          Updated {c.lastUpdated}
        </span>
        <span style={{ fontSize: "11px", color: SIG_CONFIG[c.significance]?.color,
          fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: "0.06em" }}>
          {SIG_CONFIG[c.significance]?.label}
        </span>
      </div>
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

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [activeCase, setActiveCase] = useState(null);
  const [aiUpdate, setAiUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateTime, setUpdateTime] = useState(null);

  const filtered = CASES.filter(c =>
    selectedPlatform === "All" || c.platform === selectedPlatform
  );

  const highCount = CASES.filter(c => c.significance === "HIGH").length;
  const platformCounts = PLATFORMS.slice(1).reduce((acc, p) => {
    acc[p] = CASES.filter(c => c.platform === p).length;
    return acc;
  }, {});

  const fetchAiUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/update");
      const data = await res.json();
      if (data.summary) {
        setAiUpdate(data.summary);
        setUpdateTime(new Date().toLocaleTimeString());
      }
    } catch (err) {
      setAiUpdate("Unable to fetch live update. Please try again shortly.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAiUpdate();
  }, []);

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

      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,13,26,0.8)",
        backdropFilter: "blur(12px)",
        position: "sticky", top: 0, zIndex: 100,
        padding: "0 40px",
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
              Prediction Market Litigation Tracker
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)",
              fontFamily: "'IBM Plex Mono', monospace" }}>
              {CASES.length} Active Cases · {highCount} High Significance
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6,
              padding: "4px 10px", borderRadius: "20px",
              background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22D3EE",
                boxShadow: "0 0 8px #22D3EE", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: "10px", color: "#22D3EE",
                fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: "0.08em" }}>
                LIVE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 80px" }}>

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
            Real-time tracking of all active litigation between state gaming regulators and
            CFTC-registered prediction market exchanges. The outcome of these cases will
            determine whether federal law preempts state gambling regulation nationwide.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 12, marginBottom: 40 }}>
          {[
            { label: "Total Active Cases", value: CASES.length, color: "#22D3EE" },
            { label: "High Significance", value: highCount, color: "#EF4444" },
            { label: "Kalshi Cases", value: platformCounts.Kalshi, color: PLATFORM_COLORS.Kalshi },
            { label: "Polymarket Cases", value: platformCounts.Polymarket, color: PLATFORM_COLORS.Polymarket },
            { label: "Coinbase Cases", value: platformCounts.Coinbase, color: PLATFORM_COLORS.Coinbase },
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

        <div style={{
          marginBottom: 40,
          padding: "20px 24px",
          background: "linear-gradient(135deg, rgba(34,211,238,0.05) 0%, rgba(129,140,248,0.05) 100%)",
          border: "1px solid rgba(34,211,238,0.15)",
          borderRadius: "4px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, #22D3EE, transparent)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#22D3EE",
                  fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em",
                  textTransform: "uppercase" }}>⚡ AI Intelligence Digest</span>
                {updateTime && (
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)",
                    fontFamily: "'IBM Plex Mono', monospace" }}>· Updated {updateTime}</span>
                )}
              </div>
              {loading ? (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{ width: 6, height: 6, borderRadius: "50%",
                        background: "#22D3EE", opacity: 0.6,
                        animation: `bounce 1.2s ${i * 0.2}s infinite` }} />
                    ))}
                  </div>
                  <span style={{ fontSize: "13px", color: "rgba(148,163,184,0.6)",
                    fontFamily: "'Sora', sans-serif" }}>Scanning live legal news with Claude…</span>
                </div>
              ) : (
                <p style={{ margin: 0, fontSize: "13px", color: "rgba(203,213,225,0.8)",
                  lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
                  {aiUpdate || "Click 'Refresh Intelligence' to fetch the latest case developments."}
                </p>
              )}
            </div>
            <button onClick={fetchAiUpdate} disabled={loading} style={{
              padding: "10px 20px", border: "1px solid rgba(34,211,238,0.3)",
              background: "rgba(34,211,238,0.08)", borderRadius: "4px",
              color: "#22D3EE", fontSize: "11px", fontWeight: 700,
              fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em",
              textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.5 : 1, w
