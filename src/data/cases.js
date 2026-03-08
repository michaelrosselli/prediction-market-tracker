export const CASES = [
  // ─── KALSHI ───────────────────────────────────────────────
  {
    id: "kalshi-nevada",
    platform: "Kalshi",
    state: "Nevada",
    court: "D. Nev. / 9th Circuit",
    caseType: "State Enforcement + Appeal",
    parties: { plaintiff: "Nevada Gaming Control Board", defendant: "KalshiEX LLC" },
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
      { date: "Feb 2026", event: "CFTC files amicus brief in 9th Circuit supporting Kalshi" },
      { date: "Mar 2026", event: "Kalshi seeks federal court stay pending appeal" },
      { date: "Apr 16, 2026", event: "9th Circuit oral arguments scheduled" }
    ],
    filings: [
      { label: "CFTC Amicus Brief Coverage", url: "https://www.gamblinginsider.com/news/112482/cftc-backs-crypto-com-nevada-prediction-market-appeal" }
    ],
    significance: "HIGH",
    notes: "Bellwether case. A 9th Circuit ruling will set precedent for all western states. Nevada's strategy of litigating in state court has succeeded so far. CFTC's amicus filing is its first direct litigation involvement."
  },
  {
    id: "kalshi-massachusetts",
    platform: "Kalshi",
    state: "Massachusetts",
    court: "Mass. Superior Court / 1st Circuit",
    caseType: "State AG Lawsuit",
    parties: { plaintiff: "Massachusetts AG Andrea Joy Campbell", defendant: "KalshiEX LLC" },
    coreIssue: "Whether Kalshi's sports event contracts constitute illegal sports wagering under Massachusetts gaming law.",
    status: "active",
    statusLabel: "Injunction Issued",
    lastDevelopment: "Massachusetts judge issued preliminary injunction blocking Kalshi from offering sports contracts to state residents. Court paused enforcement pending appeal. Polymarket preemptively sued Massachusetts in federal court in February 2026. 38 state AGs filed amicus briefs supporting Massachusetts.",
    lastUpdated: "2026-03-04",
    nextEvent: "Appeal hearing — date TBD",
    keyDates: [
      { date: "Sep 2025", event: "AG Campbell files lawsuit against Kalshi" },
      { date: "Jan 2026", event: "Judge issues preliminary injunction against Kalshi sports contracts" },
      { date: "Jan 2026", event: "Court pauses enforcement pending appeal" },
      { date: "Feb 2026", event: "Polymarket preemptively sues Massachusetts in federal court" }
    ],
    filings: [
      { label: "MA AG Press Release", url: "https://www.mass.gov/orgs/office-of-attorney-general" }
    ],
    significance: "HIGH",
    notes: "Massachusetts ruling cited by other states as model authority. 38 AGs signed amicus letter supporting the state. First state court to issue injunction blocking sports contracts."
  },
  {
    id: "kalshi-newjersey",
    platform: "Kalshi",
    state: "New Jersey",
    court: "D.N.J. / 3rd Circuit",
    caseType: "Federal Preemption Fight",
    parties: { plaintiff: "KalshiEX LLC", defendant: "New Jersey Division of Gaming Enforcement" },
    coreIssue: "Federal preemption of New Jersey gaming enforcement; whether CFTC jurisdiction over DCMs displaces state gaming authority.",
    status: "active",
    statusLabel: "Injunction Granted",
    lastDevelopment: "Federal court granted Kalshi preliminary injunction on April 28, 2025, supporting federal preemption. New Jersey cited Massachusetts ruling in its 3rd Circuit appeal. Over 60 tribes and 34 state regulators filed amicus briefs supporting New Jersey.",
    lastUpdated: "2026-02-01",
    nextEvent: "3rd Circuit briefing — ongoing",
    keyDates: [
      { date: "Early 2025", event: "New Jersey Gaming Commission challenges Kalshi" },
      { date: "Apr 28, 2025", event: "Federal court grants Kalshi preliminary injunction" },
      { date: "Summer 2025", event: "60 tribes and 34 state regulators file amicus briefs for NJ" },
      { date: "Feb 2026", event: "NJ cites Massachusetts ruling in 3rd Circuit appeal" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "One of Kalshi's few federal court wins. Outcome will bind the entire 3rd Circuit — New Jersey, Pennsylvania, and Delaware."
  },
  {
    id: "kalshi-maryland",
    platform: "Kalshi",
    state: "Maryland",
    court: "D. Md.",
    caseType: "State Enforcement Challenge",
    parties: { plaintiff: "Maryland Gaming Commission", defendant: "KalshiEX LLC" },
    coreIssue: "Whether Maryland can enforce state gaming laws against a CFTC-regulated prediction market.",
    status: "active",
    statusLabel: "Injunction Denied",
    lastDevelopment: "Federal court denied Kalshi's motion for preliminary injunction on August 1, 2025 (Judge Adam B. Abelson), ruling that Maryland gaming regulations apply. Case continues on the merits at the appellate level.",
    lastUpdated: "2026-02-01",
    nextEvent: "Appellate review — ongoing",
    keyDates: [
      { date: "2025", event: "Maryland Gaming Commission challenges Kalshi" },
      { date: "Aug 1, 2025", event: "Court denies Kalshi preliminary injunction (Judge Abelson)" },
      { date: "Early 2026", event: "Case moves to appellate review" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Loss for Kalshi at the preliminary injunction stage. Along with Nevada, forms part of the pattern courts have established against Kalshi."
  },
  {
    id: "kalshi-michigan",
    platform: "Kalshi",
    state: "Michigan",
    court: "Mich. Circuit Court",
    caseType: "State AG Lawsuit",
    parties: { plaintiff: "Michigan AG Dana Nessel / MGCB", defendant: "KalshiEX LLC" },
    coreIssue: "Whether Kalshi violates Michigan gaming law by offering sports event contracts without state licensing.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Michigan AG Dana Nessel filed lawsuit against Kalshi in state court (March 2026). Michigan Gaming Control Board had been investigating since April 2025. Polymarket and Coinbase simultaneously filed preemptive federal lawsuits against the state.",
    lastUpdated: "2026-03-04",
    nextEvent: "Initial hearing — imminent",
    keyDates: [
      { date: "Apr 2025", event: "Michigan Gaming Control Board opens investigation" },
      { date: "Mar 2026", event: "AG Nessel files lawsuit in state court against Kalshi" },
      { date: "Mar 2026", event: "Polymarket and Coinbase file preemptive federal suits" }
    ],
    filings: [],
    significance: "HIGH",
    notes: "Michigan's state-court-first strategy mirrors Nevada and Massachusetts. Simultaneous federal filings by Polymarket and Coinbase mark the most aggressive industry response yet."
  },
  {
    id: "kalshi-tennessee",
    platform: "Kalshi",
    state: "Tennessee",
    court: "M.D. Tenn.",
    caseType: "State Enforcement + Federal TRO",
    parties: { plaintiff: "KalshiEX LLC", defendant: "Tennessee Sports Wagering Council" },
    coreIssue: "Whether Tennessee's cease-and-desist and $25,000-per-violation fines can be enforced against a CFTC-regulated DCM.",
    status: "active",
    statusLabel: "TRO in Place",
    lastDevelopment: "Tennessee sent cease-and-desist letters to Kalshi, Polymarket, and Crypto.com on January 9, 2026. Kalshi filed a federal lawsuit the same day. Federal judge granted Kalshi a TRO blocking state enforcement while the court considers preemption.",
    lastUpdated: "2026-02-01",
    nextEvent: "Preliminary injunction hearing — pending",
    keyDates: [
      { date: "Jan 9, 2026", event: "Tennessee issues cease-and-desist to Kalshi, Polymarket, Crypto.com" },
      { date: "Jan 9, 2026", event: "Kalshi files federal lawsuit" },
      { date: "Jan 2026", event: "Federal judge grants Kalshi TRO blocking state enforcement" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Tennessee backed by 37 AGs who signed a letter supporting the multi-state enforcement position."
  },
  {
    id: "kalshi-newyork",
    platform: "Kalshi",
    state: "New York",
    court: "S.D.N.Y.",
    caseType: "Class Action",
    parties: { plaintiff: "Class action plaintiffs (fraud claims)", defendant: "KalshiEX LLC" },
    coreIssue: "Alleged deceptive trading practices; separate from state gaming preemption fight.",
    status: "active",
    statusLabel: "Class Action Filed",
    lastDevelopment: "Class action filed in November 2025 alleging deceptive trading practices. SDNY U.S. Attorney Jay Clayton stated in February 2026 that his office expects fraud prosecutions related to prediction market trading. New York AG has also warned against prediction market trades.",
    lastUpdated: "2026-02-10",
    nextEvent: "Class certification briefing — ongoing",
    keyDates: [
      { date: "Nov 2025", event: "Class action filed in SDNY alleging fraud" },
      { date: "Feb 2026", event: "NY AG warns against prediction market trades" },
      { date: "Feb 5, 2026", event: "SDNY U.S. Atty Clayton signals fraud prosecution focus" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Different legal theory from preemption cases — targets platform conduct directly. SDNY focus on insider trading adds criminal enforcement risk."
  },
  // ─── POLYMARKET ───────────────────────────────────────────
  {
    id: "polymarket-michigan",
    platform: "Polymarket",
    state: "Michigan",
    court: "E.D. Mich.",
    caseType: "Platform Preemptive Federal Suit",
    parties: { plaintiff: "QCX LLC (Polymarket US)", defendant: "Michigan AG Dana Nessel / MGCB" },
    coreIssue: "Whether the Commodity Exchange Act grants exclusive CFTC authority over event contracts, preempting Michigan's attempt to regulate.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Polymarket's U.S. entity QCX LLC filed preemptive lawsuit in federal court against Michigan AG and MGCB within 24 hours of Michigan suing Kalshi (March 2026).",
    lastUpdated: "2026-03-04",
    nextEvent: "Michigan AG expected to seek remand to state court",
    keyDates: [
      { date: "Mar 2026", event: "QCX LLC files preemptive federal lawsuit against Michigan" }
    ],
    filings: [],
    significance: "HIGH",
    notes: "First time a platform filed preemptively in a state where it hadn't yet been sued — signals industry shift to offensive legal strategy."
  },
  {
    id: "polymarket-nevada",
    platform: "Polymarket",
    state: "Nevada",
    court: "D. Nev.",
    caseType: "State Enforcement Action",
    parties: { plaintiff: "Nevada Gaming Control Board", defendant: "QCX LLC (Polymarket US)" },
    coreIssue: "Whether Polymarket's sports event contracts constitute unlicensed wagering under Nevada gaming law.",
    status: "active",
    statusLabel: "TRO Issued",
    lastDevelopment: "Nevada Gaming Control Board filed civil enforcement action against Polymarket in January 2026. Nevada court issued a TRO blocking Polymarket from offering event contracts to Nevada residents. Polymarket seeking to remove case to federal court.",
    lastUpdated: "2026-02-01",
    nextEvent: "Hearing on remand — pending",
    keyDates: [
      { date: "Jan 16, 2026", event: "NGCB files civil enforcement action against Polymarket" },
      { date: "Jan 2026", event: "Nevada court issues TRO blocking Polymarket in state" }
    ],
    filings: [],
    significance: "HIGH",
    notes: "First direct legal action against Polymarket since its U.S. relaunch. Faces higher burden than Kalshi to remove to federal court."
  },
  {
    id: "polymarket-massachusetts",
    platform: "Polymarket",
    state: "Massachusetts",
    court: "D. Mass.",
    caseType: "Platform Preemptive Federal Suit",
    parties: { plaintiff: "QCX LLC (Polymarket US)", defendant: "Massachusetts AG Andrea Joy Campbell" },
    coreIssue: "Whether CFTC jurisdiction preempts Massachusetts from enforcing state gambling laws against federally regulated prediction markets.",
    status: "active",
    statusLabel: "Recently Filed",
    lastDevelopment: "Polymarket filed preemptive federal lawsuit against Massachusetts in February 2026, following the state court injunction against Kalshi.",
    lastUpdated: "2026-02-10",
    nextEvent: "Initial briefing — pending",
    keyDates: [
      { date: "Feb 2026", event: "QCX LLC files preemptive federal lawsuit against Massachusetts" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Mirrors Polymarket's Michigan strategy. Platform CLO: 'These are national markets with critical questions that must be resolved in federal court.'"
  },
  // ─── COINBASE ─────────────────────────────────────────────
  {
    id: "coinbase-michigan",
    platform: "Coinbase",
    state: "Michigan",
    court: "E.D. Mich.",
    caseType: "Platform Preemptive Federal Suit",
    parties: { plaintiff: "Coinbase", defendant: "Michigan AG Dana Nessel" },
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
    filings: [],
    significance: "HIGH",
    notes: "Direct test of federal preemption for crypto-based event products. Oral argument outcome will be closely watched by Kalshi and Polymarket for Michigan strategy."
  },
  {
    id: "coinbase-connecticut-illinois",
    platform: "Coinbase",
    state: "Connecticut / Illinois",
    court: "D. Conn. / N.D. Ill.",
    caseType: "Platform Preemptive Federal Suits",
    parties: { plaintiff: "Coinbase", defendant: "Connecticut DCP / Illinois Gaming Board" },
    coreIssue: "Federal preemption of state cease-and-desist orders targeting Coinbase's event contract products.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Coinbase filed lawsuits in Connecticut and Illinois in December 2025. Connecticut federal court previously granted Kalshi temporary protection from state enforcement.",
    lastUpdated: "2026-01-15",
    nextEvent: "Briefing schedules — ongoing",
    keyDates: [
      { date: "Dec 3, 2025", event: "Connecticut DCP issues cease-and-desist to Kalshi, Polymarket, Crypto.com" },
      { date: "Dec 2025", event: "Coinbase files suits in CT and IL" },
      { date: "Dec 2025", event: "Federal court grants Kalshi TRO blocking Connecticut enforcement" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Connecticut and Illinois are part of a coordinated multi-state enforcement wave."
  },
  // ─── CRYPTO.COM ───────────────────────────────────────────
  {
    id: "cryptocom-nevada",
    platform: "Crypto.com",
    state: "Nevada",
    court: "D. Nev. / 9th Circuit",
    caseType: "State Enforcement + Appeal",
    parties: { plaintiff: "Nevada Gaming Control Board", defendant: "Crypto.com (Foris DAX)" },
    coreIssue: "Whether sports event contracts qualify as 'swaps' under the CEA, granting CFTC exclusive jurisdiction over state gaming regulators.",
    status: "active",
    statusLabel: "On Appeal",
    lastDevelopment: "U.S. District Judge Andrew Gordon denied Crypto.com's preliminary injunction in October 2025, ruling sports event contracts fall outside the CEA because they are based on sporting outcomes, not binary events. Crypto.com suspended Nevada operations November 3, 2025 and appealed to the 9th Circuit. CFTC filed amicus brief supporting Crypto.com.",
    lastUpdated: "2026-03-01",
    nextEvent: "9th Circuit appeal — briefing ongoing",
    keyDates: [
      { date: "May 2025", event: "Nevada Gaming Control Board issues cease-and-desist to Crypto.com" },
      { date: "Oct 2025", event: "Court denies Crypto.com preliminary injunction (Judge Gordon)" },
      { date: "Nov 3, 2025", event: "Crypto.com suspends Nevada operations" },
      { date: "Feb 2026", event: "CFTC files amicus brief in 9th Circuit supporting Crypto.com" }
    ],
    filings: [
      { label: "CFTC Amicus Coverage", url: "https://www.gamblinginsider.com/news/112482/cftc-backs-crypto-com-nevada-prediction-market-appeal" }
    ],
    significance: "HIGH",
    notes: "Judge Gordon's ruling that sports event contracts don't qualify as 'swaps' under the CEA is the most adverse legal ruling issued against the industry so far — it's the theory Kalshi is fighting in the 9th Circuit."
  },
  {
    id: "cryptocom-multistate",
    platform: "Crypto.com",
    state: "Multi-State",
    court: "Various",
    caseType: "Multi-State Enforcement",
    parties: { plaintiff: "AZ, MD, MA, MI, IL, NJ, OH, CT Regulators", defendant: "Crypto.com (Foris DAX)" },
    coreIssue: "Whether Crypto.com's sports event contracts violate state gaming laws across multiple jurisdictions.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Crypto.com has withdrawn from nine states following cease-and-desist orders: Arizona, Maryland, Massachusetts, Michigan, Illinois, New Jersey, Nevada, Ohio, and New York. Continues operating in approximately 40 states.",
    lastUpdated: "2026-01-15",
    nextEvent: "Ongoing multi-state enforcement proceedings",
    keyDates: [
      { date: "Mar–Jun 2025", event: "Multiple states issue cease-and-desist orders" },
      { date: "Oct 2025", event: "Nevada court denies injunction; Crypto.com withdraws from state" },
      { date: "Dec 2, 2025", event: "Crypto.com withdraws from Arizona" },
      { date: "Dec 2025", event: "Withdraws from MD, MA, MI, IL, NJ, OH; never operated in NY" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Crypto.com's retreat from nine states contrasts sharply with Kalshi's strategy of fighting enforcement everywhere. Reflects different regulatory footprints and risk tolerances."
  },
  // ─── ROBINHOOD ────────────────────────────────────────────
  {
    id: "robinhood-multistate",
    platform: "Robinhood",
    state: "Multi-State",
    court: "Various",
    caseType: "Multi-State Enforcement",
    parties: { plaintiff: "NJ, MD, CT, NV Regulators", defendant: "Robinhood Derivatives LLC" },
    coreIssue: "Whether Robinhood's event contracts (offered through Kalshi's DCM) constitute unlicensed sports betting subject to state regulation.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Robinhood named in cease-and-desist orders from New Jersey, Maryland, Connecticut, and Nevada. Robinhood geofenced access in several states. Argues it routes through Kalshi's CFTC-regulated DCM and is therefore protected by federal law.",
    lastUpdated: "2026-02-01",
    nextEvent: "Multi-state enforcement proceedings — ongoing",
    keyDates: [
      { date: "Mar 2025", event: "NJ and MD send cease-and-desist to Robinhood" },
      { date: "May 2025", event: "Nevada NGCB issues cease-and-desist to Robinhood" },
      { date: "Dec 3, 2025", event: "Connecticut DCP issues cease-and-desist to Robinhood" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "Robinhood's prediction markets became its largest revenue driver — 9 billion contracts and 1 million users. Its exposure tracks Kalshi's because it routes through Kalshi's DCM."
  },
  // ─── UNDERDOG ─────────────────────────────────────────────
  {
    id: "underdog-arizona",
    platform: "Underdog",
    state: "Arizona",
    court: "Arizona ADG (Administrative)",
    caseType: "License Revocation",
    parties: { plaintiff: "Arizona Department of Gaming", defendant: "Underdog Fantasy" },
    coreIssue: "Whether Underdog's partnership with Crypto.com to offer prediction markets violates Arizona gaming law and its DFS license.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Arizona ADG issued notice of intent to revoke Underdog's fantasy sports operator license on December 5, 2025 due to its Crypto.com partnership. Underdog has contested the revocation and remains authorized to operate DFS pending administrative appeal.",
    lastUpdated: "2026-01-15",
    nextEvent: "Administrative appeal — ongoing",
    keyDates: [
      { date: "Sep 2025", event: "Underdog launches prediction markets via Crypto.com partnership" },
      { date: "Sep 15, 2025", event: "Arizona ADG warns Underdog about Crypto.com relationship" },
      { date: "Dec 5, 2025", event: "ADG issues notice of intent to revoke Underdog DFS license" },
      { date: "Dec 2025", event: "Underdog contests revocation; DFS license intact pending appeal" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "First case where a state targeted a licensed DFS operator for partnering with a DCM. Sets a template for states to pressure gaming licensees into cutting ties with prediction markets."
  },
  // ─── DRAFTKINGS ───────────────────────────────────────────
  {
    id: "draftkings-nevada",
    platform: "DraftKings",
    state: "Nevada",
    court: "Nevada Gaming Control Board (Regulatory)",
    caseType: "Regulatory / License Surrender",
    parties: { plaintiff: "Nevada Gaming Control Board", defendant: "DraftKings Inc." },
    coreIssue: "Whether DraftKings can hold a Nevada gaming license and simultaneously operate prediction markets that Nevada deems unlicensed gambling.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "Nevada Gaming Control Board approved DraftKings' withdrawal of its pending sports betting license applications in November 2025. NGCB stated DraftKings' intent to offer prediction markets is 'incompatible' with Nevada gaming participation. DraftKings subsequently launched prediction markets in 38 states.",
    lastUpdated: "2026-01-15",
    nextEvent: "Monitoring prediction market expansion",
    keyDates: [
      { date: "Nov 2025", event: "NGCB approves DraftKings' withdrawal of Nevada license applications" },
      { date: "Dec 19, 2025", event: "DraftKings Predictions launches in 38 states" }
    ],
    filings: [],
    significance: "MEDIUM",
    notes: "DraftKings' 2025 10-K mentioned prediction markets 86 times (vs. 0 in 2024). Exiting Nevada was a calculated trade-off — it had no sportsbook there anyway. Both DraftKings and FanDuel surrendered Nevada licenses to pursue prediction markets nationally."
  },
  // ─── TRIBAL ───────────────────────────────────────────────
  {
    id: "tribal-kalshi-robinhood",
    platform: "Tribal",
    state: "Multi-State",
    court: "E.D. Wis. / Various Federal Courts",
    caseType: "Tribal Gaming Rights",
    parties: { plaintiff: "Ho-Chunk Nation + Multiple Tribal Groups", defendant: "KalshiEX LLC / Robinhood Derivatives" },
    coreIssue: "Whether prediction markets violate the Indian Gaming Regulatory Act by offering sports event contracts affecting tribal gaming territories.",
    status: "active",
    statusLabel: "Active Litigation",
    lastDevelopment: "The Ho-Chunk Nation filed a federal lawsuit accusing Kalshi and Robinhood of undermining tribal gaming exclusivity. California tribal groups filed similar suits. Over 60 tribes submitted amicus briefs supporting state enforcement actions. Expert Daniel Wallach predicts the 9th Circuit will rule that prediction markets constitute gaming on tribal lands.",
    lastUpdated: "2026-02-01",
    nextEvent: "Multi-district coordination — ongoing",
    keyDates: [
      { date: "Mar 2025", event: "60+ tribes send letter to CFTC opposing prediction markets" },
      { date: "Summer 2025", event: "60 tribes file amicus briefs in NJ case supporting state" },
      { date: "Late 2025", event: "Ho-Chunk Nation files federal lawsuit against Kalshi and Robinhood" },
      { date: "2026", event: "California tribal groups file additional lawsuits" }
    ],
    filings: [],
    significance: "HIGH",
    notes: "Tribal litigation adds a distinct legal framework — IGRA — that CFTC preemption arguments may not reach. Expert predictions favor tribal interests in 9th Circuit."
  }
];

export const PLATFORMS = ["All", "Kalshi", "Polymarket", "Coinbase", "Crypto.com", "Robinhood", "Underdog", "DraftKings", "Tribal"];

export const PLATFORM_COLORS = {
  Kalshi: "#22D3EE",
  Polymarket: "#818CF8",
  Coinbase: "#34D399",
  "Crypto.com": "#F97316",
  Robinhood: "#22C55E",
  Underdog: "#A78BFA",
  DraftKings: "#FACC15",
  Tribal: "#F472B6",
};

export const STATUSES = ["All", "active", "stayed", "resolved"];

export const LEGAL_ARGUMENTS = [
  {
    id: "field-preemption",
    title: "CEA Field Preemption",
    description: "The Commodity Exchange Act grants CFTC exclusive jurisdiction over event contracts, preempting the entire field and leaving no room for state gaming law.",
    platformWins: 2,
    stateWins: 3,
    pendingCases: 10,
    trend: "States winning more at preliminary injunction stage in state courts; platforms winning federal court removal fights.",
    keyCase: "Kalshi v. Nevada — 9th Circuit, Apr 16, 2026"
  },
  {
    id: "swap-classification",
    title: "Sports Contracts as 'Swaps'",
    description: "Whether sports event contracts qualify as 'swaps' under the CEA. If yes, CFTC has exclusive jurisdiction. If no, states can regulate as gambling.",
    platformWins: 0,
    stateWins: 1,
    pendingCases: 6,
    trend: "Judge Gordon (Nevada) ruled sports outcome-based contracts do NOT qualify as swaps — the most adverse ruling yet for the industry.",
    keyCase: "Crypto.com v. Nevada — D. Nev., Oct 2025"
  },
  {
    id: "igra-tribal",
    title: "IGRA Tribal Gaming Rights",
    description: "Prediction markets affecting tribal gaming territories may violate the Indian Gaming Regulatory Act, regardless of CFTC status.",
    platformWins: 0,
    stateWins: 0,
    pendingCases: 3,
    trend: "Newly emerging. Tribal suits add a distinct framework that CFTC preemption arguments may not reach.",
    keyCase: "Ho-Chunk Nation v. Kalshi & Robinhood — E.D. Wis."
  },
  {
    id: "licensee-pressure",
    title: "Licensee Partner Liability",
    description: "States threatening to revoke gaming licenses held by operators who partner with DCMs — indirect enforcement to force market exit.",
    platformWins: 0,
    stateWins: 1,
    pendingCases: 2,
    trend: "Arizona's action against Underdog is the first successful use. Ohio, Illinois, and Michigan issued similar licensee warnings.",
    keyCase: "Arizona ADG v. Underdog — Dec 2025"
  }
];

export const STATE_POSTURES = {
  NV: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi", "Polymarket", "Crypto.com", "Robinhood"] },
  MA: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi", "Polymarket"] },
  NJ: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi", "Robinhood"] },
  MD: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi", "Crypto.com"] },
  MI: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi", "Polymarket", "Coinbase"] },
  CT: { posture: "enforcement", label: "Cease & Desist Issued", cases: ["Kalshi", "Robinhood", "Crypto.com"] },
  IL: { posture: "litigation", label: "Active Litigation", cases: ["Coinbase"] },
  TN: { posture: "litigation", label: "Active Litigation", cases: ["Kalshi"] },
  NY: { posture: "enforcement", label: "Enforcement Warning + Class Action", cases: ["Kalshi", "NY AG"] },
  AZ: { posture: "enforcement", label: "License Action", cases: ["Underdog / Crypto.com"] },
  OH: { posture: "enforcement", label: "Regulatory Warning", cases: ["Kalshi", "Crypto.com"] },
  MT: { posture: "enforcement", label: "Cease & Desist", cases: ["Kalshi"] },
  LA: { posture: "warning", label: "Regulatory Warning", cases: ["Licensed operators"] },
  AR: { posture: "warning", label: "AG Opinion (Illegal)", cases: ["All operators"] },
  WA: { posture: "warning", label: "Regulatory Warning", cases: ["Kalshi"] },
  CA: { posture: "permissive", label: "No Enforcement Action", cases: [] },
  TX: { posture: "permissive", label: "No Enforcement Action", cases: [] },
  FL: { posture: "permissive", label: "No Enforcement Action", cases: [] },
};
