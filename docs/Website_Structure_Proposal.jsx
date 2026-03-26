import { useState } from "react";

// ── Brand tokens ──────────────────────────────────────────────
const C = {
  green:   "#25D366",
  dark:    "#075E54",
  teal:    "#128C7E",
  light:   "#DCF8C6",
  bg:      "#f7fdf9",
  ink:     "#0d1f1b",
  muted:   "#5a7a72",
  white:   "#ffffff",
  amber:   "#f59e0b",
  red:     "#ef4444",
  border:  "#d1ece3",
};

// ── Site map data ─────────────────────────────────────────────
const PAGES = [
  {
    id: "home",
    label: "Home",
    icon: "🏠",
    priority: "MVP",
    goal: "Convert visitors into strategy-call bookings",
    cta: "Book a Free Strategy Call",
    sections: [
      { name: "Hero", type: "conversion", desc: "Bold headline + sub-headline + dual CTA + phone mockup showing a live WhatsApp automation flow" },
      { name: "Problem Block", type: "empathy", desc: "6-icon grid of SME pain points: missed leads, slow replies, staff overload, no tracking, repeated questions, manual follow-ups" },
      { name: "Solution Block", type: "value", desc: "Side-by-side: Before (chaos) vs After (structured automation). Green checklist of 7 automation benefits" },
      { name: "How It Works", type: "process", desc: "4-step horizontal card flow: Strategy → Setup → Deploy → Optimize. Numbered, icon-driven, minimal copy" },
      { name: "Industries Grid", type: "targeting", desc: "6-card grid linking to industry landing pages: Real Estate, Clinics, Logistics, Schools, E-commerce, Insurance" },
      { name: "Impact Numbers", type: "credibility", desc: "Dark background stats strip: Faster responses · Higher conversion · Reduced workload · Scalable ops" },
      { name: "Authority Strip", type: "credibility", desc: "Founder MBA credential + WATI partner badge + East Africa focus callout" },
      { name: "Testimonials", type: "social-proof", desc: "3-card placeholder carousel. Real testimonials added post-launch. Interim: demo results or simulation stats" },
      { name: "Final CTA", type: "conversion", desc: "Full-width dark section: 'Ready to Turn WhatsApp Into a Growth Engine?' + single large CTA button" },
    ]
  },
  {
    id: "services",
    label: "Services",
    icon: "⚙️",
    priority: "MVP",
    goal: "Educate prospects on the full service portfolio and convert to consultation",
    cta: "Book a Free Consultation",
    sections: [
      { name: "Hero", type: "conversion", desc: "Headline: 'WhatsApp Automation Services for SMEs in East Africa'. Short intro paragraph + CTA" },
      { name: "Service 1 – Setup", type: "detail", desc: "Left text / Right feature list: API onboarding, WATI config, team routing, basic bot, training. Best for: first-timers" },
      { name: "Service 2 – Lead Conversion", type: "detail", desc: "Alternating layout. Qualification flows, routing logic, follow-up triggers. Ideal for: Real estate, insurance, education" },
      { name: "Service 3 – Customer Support", type: "detail", desc: "FAQ bots, appointment booking, escalation logic, delivery tracking. Before/after workload visual" },
      { name: "Service 4 – Broadcast Marketing", type: "detail", desc: "Segmentation, template approval, promotional campaigns, re-engagement flows. ROI angle" },
      { name: "Service 5 – Managed Ops", type: "detail", desc: "Monthly optimization retainer. Analytics, bot refinement, strategy sessions. Ongoing partnership framing" },
      { name: "Our Process", type: "process", desc: "6-step methodology: Map → Architect → Configure → Deploy → Train → Optimize" },
      { name: "CTA Block", type: "conversion", desc: "Let's design your WhatsApp automation system. Dual CTA: Book Consultation + Request Demo" },
    ]
  },
  {
    id: "industries",
    label: "Industries",
    icon: "🏢",
    priority: "MVP (2 at launch)",
    goal: "Industry-specific landing pages for SEO and targeted conversion",
    cta: "Book a Free [Industry] Automation Call",
    subpages: [
      { name: "Real Estate", icon: "🏢", priority: "Launch", desc: "Property inquiry automation, lead qualification, auto-brochure, viewing scheduler" },
      { name: "Clinics & Healthcare", icon: "🏥", priority: "Launch", desc: "Appointment booking bot, reminders, FAQ flow, patient intake forms" },
      { name: "Logistics & Courier", icon: "🚚", priority: "Month 4", desc: "Tracking bot, delivery notifications, COD updates, complaint routing" },
      { name: "Schools & Colleges", icon: "🎓", priority: "Month 4", desc: "Admissions bot, fee reminders, document checklist, event invites" },
      { name: "E-commerce & Retail", icon: "📦", priority: "Month 6", desc: "Order confirmation flows, payment reminders, cart recovery, upsell campaigns" },
      { name: "Insurance & Microfinance", icon: "🛡️", priority: "Month 6", desc: "Quote automation, policy Q&A, renewal reminders, claim routing" },
    ],
    sections: [
      { name: "Industry Hero", type: "conversion", desc: "Industry-specific headline, pain summary, CTA specific to sector" },
      { name: "Pain Points", type: "empathy", desc: "Icon list of 5–7 industry-specific problems. Resonates immediately with decision-makers" },
      { name: "Automation Flow", type: "process", desc: "Step-by-step visual: Customer message → Bot response → Routing → Outcome. Chat bubble mockups" },
      { name: "Benefits", type: "value", desc: "Industry-specific outcomes: e.g. for clinics: fewer missed appointments, faster response, reduced receptionist load" },
      { name: "Scenario Story", type: "credibility", desc: "Case-style paragraph: 'Imagine a clinic receiving 150 messages/day...' quantified impact story" },
      { name: "Investment Range", type: "pricing", desc: "Pricing range for this sector (e.g. $2,000–$4,500) with 'exact quote after assessment' framing" },
      { name: "CTA", type: "conversion", desc: "Industry-specific strategy call booking. Short intake fields on same page" },
    ]
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: "💰",
    priority: "MVP",
    goal: "Present transparent packages, handle objections, convert to consultation",
    cta: "Book Your Strategy Call",
    sections: [
      { name: "Hero", type: "conversion", desc: "Headline: 'Simple, Structured Pricing'. Sub: 'Professional implementation — not just software setup'" },
      { name: "3-Tier Cards", type: "pricing", desc: "Starter ($1,200+) · Growth ($2,500–$4,000, highlighted) · Advanced ($5,000–$9,000+). Features, monthly support, ideal-for tag per card" },
      { name: "Managed Ops Add-on", type: "pricing", desc: "Separate row below cards explaining $300–$3,000/mo retainer. Positioned as growth partner not extra cost" },
      { name: "What Affects Pricing", type: "education", desc: "6-factor list: business size, message volume, users, workflow complexity, industry, marketing needs" },
      { name: "Why We Don't Compete on Price", type: "positioning", desc: "Short, confident copy explaining the value vs cost equation. 'We are automation partners, not freelancers'" },
      { name: "FAQ Accordion", type: "objection-handling", desc: "Does pricing include WATI? / Implementation timeline? / Is ongoing support mandatory? / Training included?" },
      { name: "CTA", type: "conversion", desc: "Book Strategy Call → receive workflow assessment + automation roadmap + package recommendation" },
    ]
  },
  {
    id: "about",
    label: "About",
    icon: "👤",
    priority: "MVP",
    goal: "Build trust, establish authority, humanise the brand",
    cta: "Book a Consultation",
    sections: [
      { name: "Mission Hero", type: "brand", desc: "Bold mission statement: 'We help East African SMEs turn WhatsApp into a structured growth system'" },
      { name: "Why WhatsApp Matters Here", type: "context", desc: "East Africa market context: WhatsApp-first culture, SME communication reality, automation gap. Regional credibility" },
      { name: "Founder Profile", type: "authority", desc: "Two-column: Photo left / Bio right. MBA (University of East London), B2B CX Research, LG Electronics case study. Clean authority positioning" },
      { name: "MBA → Business Value Table", type: "authority", desc: "Side-by-side: Academic Research → Practical Application. Connects credentials directly to client outcomes" },
      { name: "Our Approach", type: "process", desc: "4-step philosophy: Analyze → Architect → Deploy → Optimize. Business improvement, not just software" },
      { name: "What Makes Us Different", type: "differentiation", desc: "4 pillars: Business-First Thinking · SME-Focused · Local Market Knowledge · Practical Automation" },
      { name: "Vision", type: "brand", desc: "'Leading WhatsApp automation partner for East African SMEs.' Future CRM + AI expansion mentioned briefly" },
      { name: "CTA", type: "conversion", desc: "'If your business depends on WhatsApp, it deserves structure.' → Book consultation button" },
    ]
  },
  {
    id: "strategy-call",
    label: "Book Strategy Call",
    icon: "📅",
    priority: "MVP",
    goal: "High-intent conversion page. Qualify prospects before the call",
    cta: "Confirm My Free Strategy Call",
    sections: [
      { name: "Page Hero", type: "conversion", desc: "Headline: 'Book Your Free WhatsApp Automation Strategy Call'. Sub: What you'll receive in 30 minutes" },
      { name: "What You'll Get", type: "value", desc: "4-point checklist: Workflow assessment · Automation roadmap · Package recommendation · Investment estimate" },
      { name: "Intake Form", type: "lead-capture", desc: "Fields: Name, Business Name, Industry (dropdown), Weekly WhatsApp inquiries (range), Current tools, Message. Filters serious clients" },
      { name: "Calendar Embed", type: "scheduling", desc: "Calendly or TidyCal embed. Mobile-optimised. Confirm step after form submission" },
      { name: "Trust Signals", type: "credibility", desc: "MBA badge · WATI partner badge · 'No hard sell' reassurance · Privacy note" },
    ]
  },
  {
    id: "blog",
    label: "Blog / Resources",
    icon: "📚",
    priority: "Month 4",
    goal: "SEO authority building, thought leadership, top-of-funnel traffic",
    cta: "Read Article → Book Strategy Call",
    sections: [
      { name: "Blog Index", type: "seo", desc: "Category filters: WhatsApp Automation · SME Growth · CX & Operations · East Africa Digital · Industry Guides" },
      { name: "Featured Post", type: "seo", desc: "Hero-style featured article slot. First post: 'Why East African SMEs Must Automate WhatsApp in 2025'" },
      { name: "Article Grid", type: "seo", desc: "Card grid with category tag, title, 2-line excerpt, read time. Minimum 4 articles at launch" },
      { name: "Newsletter CTA", type: "lead-capture", desc: "Email capture: 'Get WhatsApp automation insights for East African SMEs. No spam.'" },
    ],
    seedContent: [
      "Why Kenyan SMEs Must Automate WhatsApp",
      "How Clinics Can Reduce Missed Appointments With Automation",
      "Real Estate Lead Automation: A Complete Guide",
      "WhatsApp vs Traditional Customer Support: The Cost Comparison",
      "What Is WATI and Why It's the Best Tool for East African SMEs",
    ]
  },
  {
    id: "contact",
    label: "Contact",
    icon: "📞",
    priority: "MVP",
    goal: "Provide multiple contact touchpoints; secondary conversion for non-ready visitors",
    cta: "Send Message / Book a Call",
    sections: [
      { name: "Contact Form", type: "lead-capture", desc: "Name, Business, Industry, Message. Left column. Clean, short, low friction" },
      { name: "Direct Contact", type: "trust", desc: "Right column: WhatsApp click-to-chat button, Email, LinkedIn. Optional: Office location" },
      { name: "Calendar Link", type: "conversion", desc: "Below form: 'Prefer to jump straight in? Book a strategy call directly →'" },
    ]
  },
  {
    id: "legal",
    label: "Privacy & Terms",
    icon: "🔐",
    priority: "MVP",
    goal: "WhatsApp API compliance + professional credibility",
    cta: "—",
    sections: [
      { name: "Privacy Policy", type: "legal", desc: "Required for WhatsApp Business API compliance. Data collection, usage, storage, third-party (WATI)" },
      { name: "Terms of Service", type: "legal", desc: "Scope of services, payment terms, IP ownership, liability limitations" },
    ]
  },
];

const PRIORITY_COLORS = {
  "MVP":              { bg: "#dcfce7", text: "#166534", border: "#86efac" },
  "MVP (2 at launch)":{ bg: "#dcfce7", text: "#166534", border: "#86efac" },
  "Launch":           { bg: "#dcfce7", text: "#166534", border: "#86efac" },
  "Month 4":          { bg: "#fef9c3", text: "#854d0e", border: "#fde047" },
  "Month 6":          { bg: "#fee2e2", text: "#991b1b", border: "#fca5a5" },
};

const SECTION_TYPE_COLORS = {
  conversion:          { bg:"#dcfce7", text:"#166534" },
  empathy:             { bg:"#fce7f3", text:"#9d174d" },
  value:               { bg:"#dbeafe", text:"#1e40af" },
  process:             { bg:"#e0e7ff", text:"#3730a3" },
  targeting:           { bg:"#fef3c7", text:"#92400e" },
  credibility:         { bg:"#f3f4f6", text:"#374151" },
  "social-proof":      { bg:"#ecfdf5", text:"#065f46" },
  detail:              { bg:"#ede9fe", text:"#5b21b6" },
  pricing:             { bg:"#fff7ed", text:"#9a3412" },
  education:           { bg:"#f0fdf4", text:"#166534" },
  positioning:         { bg:"#fdf4ff", text:"#6b21a8" },
  "objection-handling":{ bg:"#fff1f2", text:"#9f1239" },
  brand:               { bg:"#f0f9ff", text:"#075985" },
  context:             { bg:"#fafafa", text:"#374151" },
  authority:           { bg:"#fef3c7", text:"#92400e" },
  differentiation:     { bg:"#f0fdfa", text:"#134e4a" },
  "lead-capture":      { bg:"#fff7ed", text:"#9a3412" },
  scheduling:          { bg:"#ecfdf5", text:"#065f46" },
  trust:               { bg:"#eff6ff", text:"#1e40af" },
  seo:                 { bg:"#f5f3ff", text:"#4c1d95" },
  legal:               { bg:"#f9fafb", text:"#6b7280" },
};

const NAV_STRUCTURE = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Industries ▾", target: "industries" },
  { label: "Pricing", target: "pricing" },
  { label: "About", target: "about" },
  { label: "Blog", target: "blog" },
  { label: "Contact", target: "contact" },
];

function PriorityBadge({ p }) {
  const c = PRIORITY_COLORS[p] || PRIORITY_COLORS["Month 4"];
  return (
    <span style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}`, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700, letterSpacing: 0.3 }}>
      {p}
    </span>
  );
}

function TypeTag({ type }) {
  const c = SECTION_TYPE_COLORS[type] || { bg: "#f3f4f6", text: "#374151" };
  return (
    <span style={{ background: c.bg, color: c.text, borderRadius: 12, padding: "1px 8px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
      {type}
    </span>
  );
}

function SectionRow({ s, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, overflow: "hidden" }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 16px", cursor: "pointer",
          background: open ? "#f0fdf4" : C.white, transition: "background 0.15s" }}>
        <span style={{ width: 24, height: 24, background: C.dark, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
        <span style={{ fontWeight: 600, fontSize: 13, color: C.ink, flex: 1 }}>{s.name}</span>
        <TypeTag type={s.type} />
        <span style={{ fontSize: 14, color: C.muted, marginLeft: 4 }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={{ background: "#f7fdf9", padding: "10px 16px 14px 52px", fontSize: 13, color: "#444", lineHeight: 1.6, borderTop: `1px dashed ${C.border}` }}>
          {s.desc}
        </div>
      )}
    </div>
  );
}

function PageCard({ page, isActive, onClick }) {
  const c = PRIORITY_COLORS[page.priority] || PRIORITY_COLORS["Month 4"];
  return (
    <div onClick={onClick} style={{
      background: isActive ? C.dark : C.white,
      border: isActive ? `2px solid ${C.dark}` : `2px solid ${C.border}`,
      borderRadius: 12, padding: "14px 16px", cursor: "pointer",
      transition: "all 0.2s", boxShadow: isActive ? `0 4px 16px rgba(7,94,84,0.25)` : "0 1px 4px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: 22, marginBottom: 6 }}>{page.icon}</div>
      <div style={{ fontWeight: 700, fontSize: 13, color: isActive ? C.white : C.ink }}>{page.label}</div>
      <div style={{ marginTop: 6 }}><PriorityBadge p={page.priority} /></div>
    </div>
  );
}

// Sitemap visual (top of page)
function SitemapDiagram({ setActive }) {
  const mvp = PAGES.filter(p => p.priority.startsWith("MVP") || p.priority === "Launch");
  const later = PAGES.filter(p => !p.priority.startsWith("MVP") && p.priority !== "Launch");

  return (
    <div style={{ background: C.white, borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: C.dark }}>🗺 Full Site Map</div>
        <div style={{ flex: 1, height: 1, background: C.border }} />
        <div style={{ display: "flex", gap: 10 }}>
          {[["MVP", "#dcfce7", "#166534"], ["Month 4", "#fef9c3", "#854d0e"], ["Month 6+", "#fee2e2", "#991b1b"]].map(([l, bg, tc]) => (
            <span key={l} style={{ background: bg, color: tc, borderRadius: 20, padding: "3px 12px", fontSize: 11, fontWeight: 700 }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Nav bar preview */}
      <div style={{ background: C.dark, borderRadius: 10, padding: "10px 20px", display: "flex", alignItems: "center", gap: 4, marginBottom: 20, flexWrap: "wrap" }}>
        <span style={{ color: C.green, fontWeight: 800, fontSize: 13, marginRight: 16 }}>WhatsAppAutomation.africa</span>
        {NAV_STRUCTURE.map(n => (
          <span key={n.label} style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, padding: "4px 10px", borderRadius: 6, cursor: "pointer" }}>{n.label}</span>
        ))}
        <span style={{ marginLeft: "auto", background: C.green, color: "#fff", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700 }}>📅 Book Strategy Call</span>
      </div>

      {/* Pages grid */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 11, color: C.muted, fontWeight: 700, textTransform: "uppercase", marginBottom: 10, letterSpacing: 1 }}>Launch Pages (MVP)</div>
        <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
          {PAGES.filter(p => p.priority === "MVP" || p.priority === "MVP (2 at launch)").map((page, i) => (
            <div key={page.id} style={{ display: "flex", alignItems: "center" }}>
              <div onClick={() => setActive(page.id)} style={{
                background: C.green, color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap"
              }}>
                {page.icon} {page.label}
              </div>
              {i < PAGES.filter(p => p.priority === "MVP" || p.priority === "MVP (2 at launch)").length - 1 &&
                <div style={{ width: 20, height: 1, background: C.green, opacity: 0.5 }} />}
            </div>
          ))}
        </div>
        {/* Subpages for industries */}
        <div style={{ marginLeft: 16, marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <div style={{ width: 1, background: C.border, height: "100%" }} />
          <span style={{ fontSize: 11, color: C.muted }}>↳ Industry pages at launch:</span>
          {["🏢 Real Estate", "🏥 Clinics"].map(p => (
            <span key={p} style={{ background: "#dcfce7", color: "#166534", borderRadius: 16, padding: "2px 10px", fontSize: 11, fontWeight: 600 }}>{p}</span>
          ))}
          <span style={{ fontSize: 11, color: C.muted, marginLeft: 4 }}>+ 4 more by Month 6</span>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Month 4+:</span>
        {PAGES.filter(p => p.priority === "Month 4").map(page => (
          <div key={page.id} onClick={() => setActive(page.id)} style={{
            background: "#fef9c3", color: "#854d0e", border: "1px solid #fde047", borderRadius: 8,
            padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", gap: 6
          }}>
            {page.icon} {page.label}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, fontSize: 12, color: C.muted, background: "#f7fdf9", borderRadius: 8, padding: "10px 14px", borderLeft: `3px solid ${C.green}` }}>
        <strong>Conversion Funnel:</strong> Home → Industry Page → Book Strategy Call &nbsp;|&nbsp; Blog → Industry Page → Book Strategy Call &nbsp;|&nbsp; All paths lead to one action.
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState(null);
  const [view, setView] = useState("sitemap"); // sitemap | page

  function openPage(id) {
    setActivePage(id);
    setView("page");
  }

  const page = PAGES.find(p => p.id === activePage);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: C.bg, minHeight: "100vh" }}>

      {/* ── Top bar ────────────────────────────── */}
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.teal} 100%)`, padding: "20px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ background: C.green, borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>💬</div>
          <div>
            <div style={{ color: C.white, fontWeight: 800, fontSize: 18, letterSpacing: -0.3 }}>WhatsAppAutomation.africa</div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontStyle: "italic" }}>Website Structure & Content Proposal</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button onClick={() => setView("sitemap")} style={{ padding: "7px 18px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, fontFamily: "inherit", background: view === "sitemap" ? C.green : "rgba(255,255,255,0.15)", color: "#fff" }}>🗺 Site Map</button>
            <button onClick={() => { setView("page"); }} style={{ padding: "7px 18px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, fontFamily: "inherit", background: view === "page" ? C.green : "rgba(255,255,255,0.15)", color: "#fff" }}>📄 Page Detail</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "28px 24px" }}>

        {/* ── SITE MAP VIEW ──────────────────────── */}
        {view === "sitemap" && (
          <div>
            <SitemapDiagram setActive={openPage} />

            {/* Page cards */}
            <div style={{ fontWeight: 800, fontSize: 16, color: C.dark, marginBottom: 16 }}>📄 All Pages — click for full content breakdown</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {PAGES.map(p => (
                <PageCard key={p.id} page={p} isActive={false} onClick={() => openPage(p.id)} />
              ))}
            </div>

            {/* Global design notes */}
            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: C.white, borderRadius: 14, padding: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight: 700, color: C.dark, marginBottom: 12, fontSize: 14 }}>🎨 Design System</div>
                {[
                  ["Primary", "#25D366 — WhatsApp Green"],
                  ["Dark", "#075E54 — Deep Teal"],
                  ["Font", "Clean sans-serif body · Bold display headings"],
                  ["Style", "Clean, professional, minimal — no clutter"],
                  ["Mobile", "Mobile-first (most EA SME owners browse on phone)"],
                  ["CTA", "One sticky CTA throughout: Book Strategy Call"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13 }}>
                    <span style={{ fontWeight: 700, color: C.muted, minWidth: 60 }}>{k}</span>
                    <span style={{ color: "#444" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: C.white, borderRadius: 14, padding: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight: 700, color: C.dark, marginBottom: 12, fontSize: 14 }}>📱 Mobile Priorities</div>
                {[
                  "Sticky CTA button always visible at bottom",
                  "Short, scannable text blocks",
                  "Expandable accordions for detail",
                  "Click-to-WhatsApp button prominent",
                  "Page load under 3s (compressed images)",
                  "Thumb-friendly tap targets (min 44px)",
                ].map(t => (
                  <div key={t} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start", fontSize: 13 }}>
                    <span style={{ color: C.green, fontWeight: 700 }}>✓</span>
                    <span style={{ color: "#444" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.teal})`, borderRadius: 14, padding: 20, marginTop: 16, color: "#fff" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>🚀 Recommended Launch Sequence</div>
              <div style={{ display: "flex", gap: 0, flexWrap: "wrap", alignItems: "center" }}>
                {["Home", "Services", "Real Estate Page", "Clinics Page", "Pricing", "About", "Book Strategy Call", "Privacy Policy"].map((s, i, arr) => (
                  <div key={s} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600 }}>{s}</span>
                    {i < arr.length - 1 && <span style={{ color: C.green, margin: "0 4px", fontWeight: 700 }}>→</span>}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 10 }}>Then expand: Blog (Month 4) → 4 more Industry pages → Logistics, Schools, E-commerce, Insurance</div>
            </div>
          </div>
        )}

        {/* ── PAGE DETAIL VIEW ──────────────────── */}
        {view === "page" && (
          <div>
            {/* Page selector */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 24 }}>
              {PAGES.map(p => (
                <PageCard key={p.id} page={p} isActive={p.id === activePage} onClick={() => setActivePage(p.id)} />
              ))}
            </div>

            {page ? (
              <div>
                {/* Page header */}
                <div style={{ background: C.dark, borderRadius: 14, padding: 24, color: "#fff", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ fontSize: 40 }}>{page.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontWeight: 800, fontSize: 22 }}>{page.label}</span>
                        <PriorityBadge p={page.priority} />
                      </div>
                      <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 10 }}>{page.goal}</div>
                      {page.cta !== "—" && (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, borderRadius: 20, padding: "6px 18px", fontSize: 13, fontWeight: 700 }}>
                          📣 Primary CTA: {page.cta}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Industry subpages */}
                {page.subpages && (
                  <div style={{ background: C.white, borderRadius: 14, padding: 20, marginBottom: 16, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
                    <div style={{ fontWeight: 700, color: C.dark, marginBottom: 14, fontSize: 14 }}>📁 Industry Sub-Pages</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                      {page.subpages.map(sub => (
                        <div key={sub.name} style={{ border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px", background: C.bg }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontSize: 18 }}>{sub.icon}</span>
                            <span style={{ fontWeight: 700, fontSize: 13, color: C.ink }}>{sub.name}</span>
                            <PriorityBadge p={sub.priority} />
                          </div>
                          <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{sub.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 12, fontSize: 12, color: C.muted, fontStyle: "italic" }}>
                      ↳ Each industry page uses the same section template below, with industry-specific copy and use cases.
                    </div>
                  </div>
                )}

                {/* Sections list */}
                <div style={{ background: C.white, borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 16 }}>
                  <div style={{ background: "#f0fdf4", padding: "14px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontWeight: 700, color: C.dark, fontSize: 14 }}>📐 Page Sections</span>
                    <span style={{ fontSize: 12, color: C.muted }}>{page.sections.length} sections — click to expand content notes</span>
                  </div>
                  {page.sections.map((s, i) => <SectionRow key={s.name} s={s} i={i} />)}
                </div>

                {/* Seed content for blog */}
                {page.seedContent && (
                  <div style={{ background: C.white, borderRadius: 14, padding: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 16 }}>
                    <div style={{ fontWeight: 700, color: C.dark, marginBottom: 12, fontSize: 14 }}>✍️ Recommended Seed Articles (Launch With)</div>
                    {page.seedContent.map((title, i) => (
                      <div key={title} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: i < page.seedContent.length - 1 ? `1px solid ${C.border}` : "none" }}>
                        <div style={{ width: 28, height: 28, background: C.dark, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                        <span style={{ fontSize: 14, color: C.ink }}>{title}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* SEO notes per page */}
                <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: "#92400e", marginBottom: 10, fontSize: 13 }}>🔍 SEO & Conversion Notes</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 12, color: "#78350f" }}>
                    {page.id === "home" && <>
                      <div>• Target keyword: "WhatsApp automation East Africa"</div>
                      <div>• Meta: 'Turn WhatsApp chaos into a sales system | EA SMEs'</div>
                      <div>• H1 must include core keyword</div>
                      <div>• Above-the-fold CTA must be visible without scroll on mobile</div>
                    </>}
                    {page.id === "services" && <>
                      <div>• Each service section = potential standalone landing page later</div>
                      <div>• Internal links to relevant industry pages throughout</div>
                      <div>• FAQ schema markup for voice search</div>
                      <div>• Target: "WhatsApp business automation service Kenya"</div>
                    </>}
                    {page.id === "industries" && <>
                      <div>• Each industry page = dedicated URL for SEO</div>
                      <div>• e.g. /industries/real-estate-whatsapp-automation</div>
                      <div>• Local keyword: "real estate WhatsApp automation Nairobi"</div>
                      <div>• Schema: LocalBusiness + FAQPage per industry</div>
                    </>}
                    {page.id === "pricing" && <>
                      <div>• Pricing page reduces unqualified leads</div>
                      <div>• Target: "WATI pricing East Africa", "WhatsApp bot cost Kenya"</div>
                      <div>• FAQ accordion improves dwell time and addresses objections</div>
                      <div>• Anchor links from homepage to pricing cards</div>
                    </>}
                    {page.id === "about" && <>
                      <div>• LinkedIn profile should mirror About page narrative</div>
                      <div>• MBA credential is a key trust signal — lead with it</div>
                      <div>• Author page schema for blog credibility</div>
                      <div>• Target: "WhatsApp automation consultant East Africa"</div>
                    </>}
                    {page.id === "strategy-call" && <>
                      <div>• This is the highest-value page — optimise load speed</div>
                      <div>• Intake form pre-qualifies leads before call</div>
                      <div>• No navigation distractions — minimal header on this page</div>
                      <div>• Thank-you page should confirm next steps clearly</div>
                    </>}
                    {page.id === "blog" && <>
                      <div>• 4 articles minimum at launch for credibility</div>
                      <div>• Each article ends with CTA to Book Strategy Call</div>
                      <div>• Target long-tail: "how to automate WhatsApp for clinic Kenya"</div>
                      <div>• Author byline (Mugarura Nelson, MBA) on every article</div>
                    </>}
                    {page.id === "contact" && <>
                      <div>• WhatsApp button is the highest-converting contact option</div>
                      <div>• Keep form under 6 fields for completion rate</div>
                      <div>• Response time expectation should be stated ("within 24 hours")</div>
                      <div>• Track form submissions as conversion goal in analytics</div>
                    </>}
                    {page.id === "legal" && <>
                      <div>• Required for WhatsApp Business API compliance</div>
                      <div>• Link in footer only — do not feature in main nav</div>
                      <div>• Reference WATI data processing in privacy policy</div>
                      <div>• Update annually or when services change</div>
                    </>}
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                  <button onClick={() => setView("sitemap")} style={{ background: C.dark, color: "#fff", border: "none", borderRadius: 20, padding: "8px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>← Back to Site Map</button>
                  {PAGES[PAGES.findIndex(p => p.id === activePage) + 1] && (
                    <button onClick={() => setActivePage(PAGES[PAGES.findIndex(p => p.id === activePage) + 1].id)}
                      style={{ background: C.green, color: "#fff", border: "none", borderRadius: 20, padding: "8px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                      Next Page: {PAGES[PAGES.findIndex(p => p.id === activePage) + 1].label} →
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: 60, color: C.muted }}>
                <div style={{ fontSize: 40 }}>👆</div>
                <div style={{ fontSize: 16, marginTop: 12 }}>Select a page above to see its full content breakdown</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
