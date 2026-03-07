import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openFaq, setOpenFaq] = useState(0);

    const tiers = [
        {
            name: "Starter",
            desc: "For small businesses needing basic WhatsApp structure.",
            price: "$1,200+",
            timeline: "1-2 Weeks",
            features: [
                "Official WhatsApp API Setup",
                "WATI / Inbox Configuration",
                "Basic Auto-Reply Rules",
                "Simple Welcome Flow",
                "1 Team Training Session"
            ],
            highlight: false,
            btnClass: "btn-outline text-ink border-border"
        },
        {
            name: "Growth",
            desc: "Comprehensive automation for businesses scaling operations.",
            price: "$2,500 - $4,000",
            timeline: "3-5 Weeks",
            features: [
                "Everything in Starter",
                "Advanced Interactive Bots",
                "Lead Qualification Funnels",
                "Automated Follow-up Sequences",
                "Basic CRM Integration",
                "30 Days Post-Launch Support"
            ],
            highlight: true,
            badge: "Most Popular",
            btnClass: "btn-primary"
        },
        {
            name: "Advanced",
            desc: "Custom architecture for high-volume, complex enterprise needs.",
            price: "$5,000+",
            timeline: "6-8+ Weeks",
            features: [
                "Everything in Growth",
                "Custom API Integrations (ERPs)",
                "Multi-Department Routing",
                "Complex Escalation Logic",
                "E-commerce/Booking Sync",
                "Dedicated Success Manager"
            ],
            highlight: false,
            btnClass: "btn-outline text-ink border-border"
        }
    ];

    const faqs = [
        { q: "Does this pricing include the WATI software subscription?", a: "No, our implementation fee is for the strategic design and technical build of your system. You will pay WATI (or your chosen provider) directly for their monthly software subscription and WhatsApp conversation charges." },
        { q: "What are WhatsApp conversation charges?", a: "Meta charges a few cents for every 24-hour conversation window initiated with a customer. There are different rates for Marketing, Utility, and Service conversations. We will estimate these costs for you during our strategy call." },
        { q: "Do you offer payment plans?", a: "Yes, standard projects are billed 50% upfront to commence work, and 50% upon successful deployment and handover." },
        { q: "Is ongoing support mandatory?", a: "No. After the inclusion period of your package, the system is yours to run. However, 80% of our clients opt for our Managed Operations retainer to continuously improve the bot flows and handle Meta compliance updates." },
        { q: "How long does implementation take?", a: "Starter packages take 1-2 weeks. Growth packages usually take 3-5 weeks depending on the complexity of your workflow approvals. Custom enterprise solutions require detailed scoping." }
    ];

    return (
        <div className="pricing-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>

            {/* Hero */}
            <section className="section" style={{ textAlign: 'center', background: 'linear-gradient(180deg, var(--color-bg-alt) 0%, white 100%)', paddingBottom: 'var(--space-16)' }}>
                <div className="container" style={{ maxWidth: '800px', marginBottom: 'var(--space-12)' }}>
                    <h1 className="text-dark animate-slide-up" style={{ marginBottom: 'var(--space-6)' }}>
                        Simple, Structured Pricing
                    </h1>
                    <p className="text-muted animate-slide-up delay-100" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)' }}>
                        We provide professional implementation and strategic architecture—not just software setup.
                    </p>
                </div>

                {/* Dashboard Illustration */}
                <div className="container animate-slide-up delay-200" style={{ maxWidth: '1000px' }}>
                    <div style={{
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                        background: 'white',
                        aspectRatio: '16/9', // to prevent reflow if image loads slow, though the generated image is square-ish. Let's not restrict aspect ratio too strictly if it looks bad. Actually, removing aspect ratio is safer to naturally fit the generated img.
                    }}>
                        <img src="/pricing-saas-dashboard.png" alt="WhatsApp Automation Analytics Dashboard" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
                        {tiers.map((tier, idx) => (
                            <div key={tier.name} style={{
                                background: tier.highlight ? 'var(--color-ink)' : 'white',
                                color: tier.highlight ? 'white' : 'var(--color-ink)',
                                borderRadius: 'var(--radius-2xl)',
                                padding: 'var(--space-8)',
                                boxShadow: tier.highlight ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                                border: tier.highlight ? '2px solid var(--color-green)' : '1px solid var(--color-border)',
                                position: 'relative',
                                transform: tier.highlight ? 'scale(1.02)' : 'scale(1)',
                                zIndex: tier.highlight ? 10 : 1
                            }} className="pricing-card">

                                {tier.badge && (
                                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-green)', color: 'white', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 1rem', borderRadius: '100px' }}>
                                        {tier.badge}
                                    </div>
                                )}

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'inherit' }}>{tier.name}</h3>
                                <p style={{ color: tier.highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)', fontSize: '0.9375rem', marginBottom: 'var(--space-6)', minHeight: '45px' }}>
                                    {tier.desc}
                                </p>

                                <div style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: `1px solid ${tier.highlight ? 'rgba(255,255,255,0.1)' : 'var(--color-border)'}` }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                                        <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1 }}>{tier.price}</span>
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: tier.highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)', marginTop: '0.5rem' }}>One-time build fee</div>
                                </div>

                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'var(--space-8)' }}>
                                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9375rem', fontWeight: 600 }}>
                                        <span style={{ color: tier.highlight ? 'var(--color-green-light)' : 'var(--color-teal)' }}>⏳</span>
                                        Timeline: {tier.timeline}
                                    </li>
                                    {tier.features.map((f, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: tier.highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-ink)' }}>
                                            <CheckCircle2 size={18} color={tier.highlight ? "var(--color-green)" : "var(--color-green)"} style={{ flexShrink: 0, marginTop: 2 }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/strategy" className={`btn ${tier.btnClass} w-full`} style={{ width: '100%', justifyContent: 'center' }}>
                                    Book Strategy Call
                                </Link>

                            </div>
                        ))}
                    </div>

                    {/* Managed Ops Add-on */}
                    <div style={{ marginTop: 'var(--space-12)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', background: 'var(--color-teal)' }}></span>
                                <span style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-teal)' }}>Optional Add-On</span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Managed Operations Retainer</h3>
                            <p className="text-muted" style={{ marginBottom: 0 }}>
                                We become your dedicated WhatsApp growth partner. From $300 - $3,000/mo depending on required analytics, A/B testing, and monthly flow refinements.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '1rem 1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink)' }}>$300 - $3,000</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>Per month</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Pricing Factors */}
            <section className="section bg-deep text-white">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ color: 'white' }}>Why We Don't Display Exact Prices</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>Every business has a unique operational structure. Your quote depends on:</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)' }}>
                        {[
                            "Number of departments needing access",
                            "Complexity of conversational logic",
                            "Required third-party API integrations",
                            "Volume of legacy data to migrate",
                            "Staff training requirements",
                            "Expected monthly message volume"
                        ].map((factor, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--color-green)' }}><Info size={20} /></div>
                                <div style={{ fontWeight: 500, fontSize: '0.9375rem' }}>{factor}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 600, fontSize: '1.0625rem', color: 'var(--color-ink)', fontFamily: 'inherit' }}
                                >
                                    {faq.q}
                                    {openFaq === i ? <ChevronUp size={20} color="var(--color-muted)" /> : <ChevronDown size={20} color="var(--color-muted)" />}
                                </button>
                                {openFaq === i && (
                                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-muted)', lineHeight: 1.6, borderTop: '1px solid var(--color-bg-alt)', paddingTop: '1.5rem' }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Get an Exact Estimate</h2>
                    <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-8)' }}>
                        Book a 30-minute strategy call. We'll map out your current bottlenecks and provide a clear automation roadmap with tailored pricing.
                    </p>
                    <Link to="/strategy" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book Your Strategy Call
                    </Link>
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) {
          .pricing-card { transform: scale(1) !important; }
        }
      `}</style>
        </div>
    );
}
