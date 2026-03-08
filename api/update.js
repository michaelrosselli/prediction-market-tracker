export const config = {
  runtime: "edge",
};

let cachedResponse = null;
let cacheTimestamp = null;
const CACHE_TTL_SECONDS = 6 * 60 * 60;

export default async function handler(req) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (cachedResponse && cacheTimestamp) {
    const age = (Date.now() - cacheTimestamp) / 1000;
    if (age < CACHE_TTL_SECONDS) {
      return new Response(
        JSON.stringify({ ...cachedResponse, cached: true, cacheAge: Math.round(age) }),
        { headers }
      );
    }
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ summary: "Configuration error: API key not set.", error: true }),
      { status: 500, headers }
    );
  }

  const today = new Date().toISOString().split("T")[0];

  const systemPrompt = `You are a legal analyst specializing in CFTC regulation and prediction market litigation. You provide concise, accurate, professionally-written intelligence digests on active lawsuits between state gaming regulators and CFTC-registered prediction market exchanges. Write for an audience of legal and compliance professionals. Be factual, precise, and cite specific courts and rulings. Avoid speculation. Today's date is ${today}.`;

  const userPrompt = `Search for the very latest developments (past 7 days if possible) in the ongoing legal battles between state gaming regulators and CFTC-registered prediction market platforms including Kalshi, Polymarket, Coinbase, and others.

Key active cases to check for updates:
- Kalshi v. Nevada Gaming Control Board (D. Nev. / 9th Circuit — oral arguments April 16, 2026)
- Massachusetts AG v. KalshiEX (Mass. Superior Court — injunction issued)
- Michigan AG Nessel v. KalshiEX (Michigan state court — filed March 2026)
- QCX LLC (Polymarket) v. Michigan AG (E.D. Mich. — preemptive federal suit, March 2026)
- Polymarket v. Massachusetts (D. Mass. — preemptive federal suit, Feb 2026)
- Coinbase v. Michigan (E.D. Mich. — oral arguments imminent)
- Coinbase v. Connecticut / Illinois (filed Dec 2025)
- Kalshi v. Tennessee Sports Wagering Council (M.D. Tenn. — TRO in place)
- Kalshi class action (S.D.N.Y. — fraud claims, filed Nov 2025)
- Kalshi v. New Jersey (D.N.J. / 3rd Circuit — preliminary injunction granted Apr 2025)

Write a 3-4 sentence intelligence digest summarizing: (1) the most significant recent development, (2) the overall trajectory of the litigation, and (3) anything practitioners should watch in the next 30 days. Be specific about court names, dates, and outcomes. Do not use markdown formatting — plain prose only.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        system: systemPrompt,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ summary: "Live update temporarily unavailable. Showing cached case data.", error: true }),
        { status: 200, headers }
      );
    }

    const data = await response.json();

    let summary = "";
    for (const block of data.content || []) {
      if (block.type === "text" && block.text) {
        summary += block.text;
      }
    }

    summary = summary.trim() || "No new developments found in the past 7 days. All tracked cases remain active.";

    const result = { summary, generatedAt: new Date().toISOString(), cached: false };
    cachedResponse = result;
    cacheTimestamp = Date.now();

    return new Response(JSON.stringify(result), { headers });

  } catch (err) {
    return new Response(
      JSON.stringify({
        summary: "Live update temporarily unavailable. All tracked cases remain active — see case cards for latest known status.",
        error: true,
      }),
      { status: 200, headers }
    );
  }
}
