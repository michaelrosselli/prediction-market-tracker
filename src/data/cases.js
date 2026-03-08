export const CASES = [
  {
    id: "kalshi-nevada",
    platform: "Kalshi",
    state: "Nevada",
    court: "D. Nev. / 9th Circuit",
    caseType: "State Enforcement + Appeal",
    parties: {
      plaintiff: "Nevada Gaming Control Board",
      defendant: "KalshiEX LLC"
    },
    coreIssue: "Whether CFTC-regulated event contracts constitute unlicensed sports wagering under Nevada gaming law; federal preemption of state gambling regulation.",
    status: "active",
    statusLabel: "On Appeal",
    lastDevelopment: "Nevada court reversed April 2025 preliminary injunction in November 2025, ruling prediction markets subject to state gaming law. Kalshi appealed to 9th Circuit. Oral arguments scheduled April 16, 2026. CFTC filed amicus brief supporting Kalshi.",
    lastUpdated: "2026-03-04",
    nextEvent: "9th Circuit oral arguments — April 16, 2026",
    keyDates: [
      { date: "Mar 2025", event: "Nevada Gaming Control Board issues cease-and-desist" },
      { date: "Apr 2025", event: "Federal court grants Kalshi preliminary injunction" },
      { date: "Nov 2025", event: "Court reverses injunction; rules state law applies" },
      { date: "Jan 2026", event: "Nevada files civil enforcement action against Polymarket" },
      { date: "Mar 2026", event: "Kalshi seeks federal court stay pending appeal" },
      { date: "Apr 16, 2026", event: "9th Circuit oral arguments scheduled" }
    ],
    significance: "HIGH",
    notes: "Bellwether case. A 9th Circuit ruling could set precedent for all western states. Nevada strategy of suing in state court rather than waiting for federal removal has succeeded so far."
  },
  {
    id: "kalshi-massachusetts",
    platform: "Kalshi",
    state: "Massachusetts",
    court: "Mass. Superior Court / 1st Circuit",
    caseType: "State AG Lawsuit",
    parties: {
      plaintiff: "Massachusetts AG Andrea Joy Campbell",
      defendant: "KalshiEX LLC"
    },
    coreIssue: "Whether Kalshi's sports event contracts constitute illegal sports wagering under Massachusetts gaming law, requiring state licensing.",
    status: "active",
    statusLabel: "Injunction Issued",
    lastDevelopment: "Massachusetts judge issued preliminary injunction blocking Kalshi from offering sports contracts to state residents without a gaming license. Court paused enforcement pending Kalshi's appeal. Polymarket preemptively sued Massachusetts in federal court in February 2026.",
    lastUpdated: "2026-03-04",
    nextEvent: "Appeal hearing — date TBD",
    keyDates: [
      { date: "Sep 2025", event: "AG Campbell files lawsuit against Kalshi" },
      { date: "Jan 2026", event: "Judge issues preliminary injunction against Kalshi sports contracts" },
      { date: "Jan 2026", event: "Court agrees to pause enforcement pending appeal" },
      { date: "Feb 2026", event: "Polymarket preemptively sues Massachusetts in federal court" }
    ],
    significance: "HIGH",
    notes: "Massachusetts ruling being cited by other states as model authority. 37 AGs signed letter supporting Massachusetts's position. First state court to issue injunction blocking sports contracts."
  },
  {
    id: "kalshi-newjersey",
    platform: "Kalshi",
    state: "New Jersey",
    court: "D.N.J. / 3rd Circuit",
    caseType: "Federal Preemption Fight",
    parties: {
      plaintiff: "KalshiEX LLC",
      defendant: "New Jersey Division of Gaming Enforcement"
    },
    coreIssue: "Federal preemption of New Jersey gaming enforcement; whether CFTC jurisdiction over DCMs displaces state gaming authority.",
    status: "active",
    statusLabel: "Injunction Granted",
    lastDevelopment: "Federal court granted Kalshi preliminary injunction on April 28, 2025, supporting federal preemption. New Jersey cited Massachusetts ruling in 3rd Circuit case arguing state jurisdiction remains intact.",
    lastUpdated: "2026-02-01",
    nextEvent: "3rd Circuit briefing ongoing",
    keyDates: [
      { date: "Early 2025", event: "New Jersey Gaming Commission challenges Kalshi" },
      { date: "Apr 28, 2025", event: "Federal court grants Kalshi preliminary injunction" },
      { date: "Feb 2026", event: "NJ cites Massachusetts ruling in 3rd Circuit appeal" }
    ],
    significance: "MEDIUM",
    notes: "One of the few federal court wins for Kalshi. Now being appealed. Outcome will affect all of the 3rd Circuit (NJ, PA, DE)."
  },
  {
    id: "kalshi-maryland",
    platform: "Kalshi",
    state: "Maryland",
    court: "D. Md.",
    caseType: "State Enforcement Challenge",
    parties: {
      plaintiff: "Maryland Gaming Commission",
      defendant: "KalshiEX LLC"
    },
    coreIssue: "Whether Maryland can enforce state gaming laws against a CFTC-regulated prediction market.",
    status: "active",
    statusLabel: "Injunction Denied",
    lastDevelopment: "Federal court denied Kalshi's motion for preliminary injunction on August 1, 2025 (Judge Adam B. Abelson), ruling that Maryland gaming regulations apply. Case continues on the merits.",
    lastUpdated: "2025-12-01",
    nextEvent: "Merits briefing — ongoing",
    keyDates: [
      { date: "2025", event: "Maryland Gaming Commission challenges Kalshi" },
      { date: "Aug 1, 2025", event: "Court denies Kalshi preliminary injunction (Judge Abelson)" }
    ],
    significance: "MEDIUM",
    notes: "A loss for Kalshi on the preemption argument at the preliminary injunction stage. Along with Nevada, forms part of the pattern courts are establishing against Kalshi."
  },
  {
    id: "kalshi-michigan",
    platform: "Kalshi",
    state: "Michigan",
    court: "Mich. Circuit Court / E.D. Mich.",
    caseType: "State AG Lawsuit",
    parties: {
      plaintiff: "Michigan AG Dana Nessel / Michigan Gaming Control Board",
      defendant: "KalshiEX LLC"
    },
    coreIssue: "Whether Kalshi violates Michigan gaming law by offering sports event contracts without state licensing.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Michigan AG Dana Nessel filed lawsuit against Kalshi in state court (March 2026), becoming the third state to sue directly. Michigan Gaming Control Board had been investigating since April 2025. Polymarket simultaneously filed preemptive federal lawsuit against Nessel and MGCB.",
    lastUpdated: "2026-03-04",
    nextEvent: "Initial hearing — imminent",
    keyDates: [
      { date: "Apr 2025", event: "Michigan Gaming Control Board opens investigation" },
      { date: "Oct 2025", event: "MGCB files letter with CFTC expressing concern" },
      { date: "Mar 2026", event: "AG Nessel files lawsuit in state court against Kalshi" },
      { date: "Mar 2026", event: "Polymarket preemptively sues Nessel in federal court" }
    ],
    significance: "HIGH",
    notes: "Breaking development. Michigan's strategy of filing in state court (same as Nevada/Massachusetts) is deliberate. Polymarket's preemptive federal filing is notably aggressive — first time a platform struck first in a state where it hadn't yet been sued."
  },
  {
    id: "polymarket-michigan",
    platform: "Polymarket",
    state: "Michigan",
    court: "E.D. Mich.",
    caseType: "Platform Preemptive Federal Suit",
    parties: {
      plaintiff: "QCX LLC (Polymarket US)",
      defendant: "Michigan AG Dana Nessel / MGCB"
    },
    coreIssue: "Whether Congress granted exclusive authority to CFTC over event contracts, preempting Michigan's attempt to regulate.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Polymarket's U.S. entity QCX LLC filed preemptive lawsuit in federal court against Michigan AG and MGCB within 24 hours of Michigan suing Kalshi (March 2026). Argues Commodity Exchange Act grants CFTC sole authority over event contracts.",
    lastUpdated: "2026-03-04",
    nextEvent: "Michigan AG expected to seek remand to state court",
    keyDates: [
      { date: "Mar 2026", event: "QCX LLC files preemptive federal lawsuit against Michigan" }
    ],
    significance: "HIGH",
    notes: "Polymarket's first offensive legal action in the U.S. Signals platforms are no longer playing defense. Michigan AG expected to argue for state court remand — a strategy that has worked for states previously."
  },
  {
    id: "polymarket-nevada",
    platform: "Polymarket",
    state: "Nevada",
    court: "D. Nev.",
    caseType: "State Enforcement Action",
    parties: {
      plaintiff: "Nevada Gaming Control Board",
      defendant: "QCX LLC (Polymarket US)"
    },
    coreIssue: "Whether Polymarket's sports event contracts constitute unlicensed wagering under Nevada gaming law.",
    status: "active",
    statusLabel: "TRO Issued",
    lastDevelopment: "Nevada Gaming Control Board filed civil enforcement action against Polymarket in January 2026. Nevada court issued a temporary restraining order blocking Polymarket from offering event contracts to Nevada residents. Polymarket seeking to move case to federal court.",
    lastUpdated: "2026-02-01",
    nextEvent: "Hearing on remand to state court — pending",
    keyDates: [
      { date: "Jan 16, 2026", event: "NGCB files civil enforcement action against Polymarket" },
      { date: "Jan 2026", event: "Nevada court issues TRO blocking Polymarket in state" }
    ],
    significance: "HIGH",
    notes: "First direct legal action against Polymarket since its U.S. relaunch. Polymarket faces a higher burden than Kalshi to remove to federal court — needs to show complete preemption rather than ordinary preemption."
  },
  {
    id: "polymarket-massachusetts",
    platform: "Polymarket",
    state: "Massachusetts",
    court: "D. Mass.",
    caseType: "Platform Preemptive Federal Suit",
    parties: {
      plaintiff: "QCX LLC (Polymarket US)",
      defendant: "Massachusetts AG Andrea Joy Campbell"
    },
    coreIssue: "Whether CFTC jurisdiction preempts Massachusetts from enforcing state gambling laws against federally regulated prediction markets.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Polymarket filed preemptive federal lawsuit against Massachusetts in February 2026, following the state court injunction against Kalshi. Argues national markets with jurisdictional questions must be resolved in federal court.",
    lastUpdated: "2026-02-10",
    nextEvent: "Initial briefing — pending",
    keyDates: [
      { date: "Feb 2026", event: "QCX LLC files preemptive federal lawsuit against Massachusetts" }
    ],
    significance: "MEDIUM",
    notes: "Mirrors Polymarket's Michigan strategy. Platform's CLO Neal Kumar: 'These are national markets with critical questions that must be resolved in federal court.'"
  },
  {
    id: "coinbase-michigan",
    platform: "Coinbase",
    state: "Michigan",
    court: "E.D. Mich.",
    caseType: "Platform Preemptive Federal Suit",
    parties: {
      plaintiff: "Coinbase",
      defendant: "Michigan AG Dana Nessel"
    },
    coreIssue: "Whether Michigan can regulate or prohibit CFTC-regulated event contracts offered through Coinbase.",
    status: "active",
    statusLabel: "Oral Arguments Imminent",
    lastDevelopment: "Coinbase filed suit in December 2025. Oral arguments due imminently. Polymarket and Kalshi are closely monitoring, expecting to use similar arguments in their own Michigan cases.",
    lastUpdated: "2026-03-04",
    nextEvent: "Oral arguments — imminent (week of Mar 10, 2026)",
    keyDates: [
      { date: "Dec 2025", event: "Coinbase files lawsuit against Michigan" },
      { date: "Mar 2026", event: "Oral arguments scheduled" }
    ],
    significance: "HIGH",
    notes: "Coinbase's case is a direct test of the federal preemption argument. Oral argument outcome will be closely watched by Kalshi and Polymarket for Michigan strategy."
  },
  {
    id: "coinbase-connecticut-illinois",
    platform: "Coinbase",
    state: "Connecticut / Illinois",
    court: "D. Conn. / N.D. Ill.",
    caseType: "Platform Preemptive Federal Suits",
    parties: {
      plaintiff: "Coinbase",
      defendant: "Connecticut DCP / Illinois Gaming Board"
    },
    coreIssue: "Federal preemption of state cease-and-desist orders targeting Coinbase's event contract products.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Coinbase filed lawsuits in Connecticut, Michigan, and Illinois in December 2025 challenging state efforts to control or prohibit prediction markets. Connecticut federal court previously granted Kalshi temporary protection from state enforcement.",
    lastUpdated: "2026-01-15",
    nextEvent: "Briefing schedules — ongoing",
    keyDates: [
      { date: "Dec 3, 2025", event: "Connecticut DCP issues cease-and-desist to Kalshi, Polymarket, Crypto.com" },
      { date: "Dec 2025", event: "Coinbase files suits in CT, MI, and IL" },
      { date: "Dec 2025", event: "Federal court grants Kalshi TRO blocking Connecticut enforcement" }
    ],
    significance: "MEDIUM",
    notes: "Connecticut and Illinois are part of a coordinated multi-state enforcement wave. Coinbase's suits test whether the federal preemption argument works for crypto-based event products, not just pure DCMs like Kalshi."
  },
  {
    id: "kalshi-tennessee",
    platform: "Kalshi",
    state: "Tennessee",
    court: "M.D. Tenn.",
    caseType: "State Enforcement + Federal TRO",
    parties: {
      plaintiff: "KalshiEX LLC (counter-plaintiff) / Tennessee Sports Wagering Council",
      defendant: "Tennessee Sports Wagering Council"
    },
    coreIssue: "Whether Tennessee's cease-and-desist order and $25,000-per-violation fines can be enforced against a CFTC-regulated DCM.",
    status: "active",
    statusLabel: "TRO in Place",
    lastDevelopment: "Tennessee sent cease-and-desist letters to Kalshi, Polymarket, and Crypto.com on January 9, 2026. Kalshi filed a federal lawsuit the same day. Federal judge granted Kalshi a temporary restraining order blocking Tennessee enforcement while the court considers preemption.",
    lastUpdated: "2026-02-01",
    nextEvent: "Preliminary injunction hearing — pending",
    keyDates: [
      { date: "Jan 9, 2026", event: "Tennessee issues cease-and-desist to Kalshi, Polymarket, Crypto.com" },
      { date: "Jan 9, 2026", event: "Kalshi files federal lawsuit" },
      { date: "Jan 2026", event: "Federal judge grants Kalshi TRO blocking state enforcement" }
    ],
    significance: "MEDIUM",
    notes: "Tennessee backed by 37 AGs who signed a letter supporting the multi-state enforcement position. Crypto.com also named in cease-and-desist alongside Kalshi and Polymarket."
  },
  {
    id: "kalshi-newyork",
    platform: "Kalshi",
    state: "New York",
    court: "S.D.N.Y.",
    caseType: "Class Action / Regulatory Scrutiny",
    parties: {
      plaintiff: "Class action plaintiffs (fraud claims)",
      defendant: "KalshiEX LLC"
    },
    coreIssue: "Alleged deceptive trading practices; separate from state gaming preemption fight.",
    status: "active",
    statusLabel: "Class Action Filed",
    lastDevelopment: "Class action lawsuit filed in November 2025 alleging deceptive trading practices. SDNY U.S. Attorney Jay Clayton stated in February 2026 that his office expects to see fraud prosecutions related to prediction market trading. New York AG has warned against prediction market trades.",
    lastUpdated: "2026-02-10",
    nextEvent: "Class certification briefing — ongoing",
    keyDates: [
      { date: "Nov 2025", event: "Class action lawsuit filed in SDNY alleging fraud" },
      { date: "Feb 2026", event: "NY AG warns against prediction market trades ahead of Super Bowl" },
      { date: "Feb 5, 2026", event: "SDNY U.S. Atty Clayton signals fraud prosecution focus" }
    ],
    significance: "MEDIUM",
    notes: "Different legal theory from preemption cases — targets platform conduct directly. SDNY focus on insider trading in prediction markets adds criminal enforcement risk on top of civil class action."
  }
];

export const PLATFORMS = ["All", "Kalshi", "Polymarket", "Coinbase"];
export const STATUSES = ["All", "active", "stayed", "resolved"];
