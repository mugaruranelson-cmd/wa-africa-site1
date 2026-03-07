import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Stethoscope, Truck, ShoppingBag, GraduationCap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Industries() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const industries = [
        {
            id: "real-estate",
            icon: <Building2 size={32} />,
            title: "Real Estate",
            tagline: "Qualify buyers and schedule viewings 24/7.",
            desc: "Stop manually replying to 'is this available?' on WhatsApp. Let a bot qualify the lead's budget, send property brochures automatically, and book viewings into your calendar.",
            features: [
                "Automated property brochure dispatch",
                "Lead budget & timeline qualification",
                "Viewing scheduling integration",
                "Broadcast new listings to segmented buyers"
            ],
            color: "var(--color-teal)"
        },
        {
            id: "clinics",
            icon: <Stethoscope size={32} />,
            title: "Clinics & Health",
            tagline: "Reduce no-shows and automate patient intake.",
            desc: "Give patients a secure, instant way to book appointments, ask basic FAQs about services, and receive automated reminders before their visits.",
            features: [
                "Self-serve appointment booking",
                "Automated 24hr and 1hr reminders",
                "Basic service FAQ deflection (pricing, location)",
                "Post-visit feedback collection"
            ],
            color: "var(--color-green)"
        },
        {
            id: "logistics",
            icon: <Truck size={32} />,
            title: "Logistics & Delivery",
            tagline: "End-to-end tracking updates via WhatsApp.",
            desc: "Reduce your customer support ticket volume by 60% by allowing customers to track their packages, reschedule deliveries, and contact riders directly through automated WhatsApp flows.",
            features: [
                "Automated shipment status updates",
                "Delivery rescheduling flows",
                "Cash-on-delivery (COD) confirmation",
                "Live location sharing triggers"
            ],
            color: "var(--color-ink)"
        },
        {
            id: "ecommerce",
            icon: <ShoppingBag size={32} />,
            title: "E-commerce & Retail",
            tagline: "Recover abandoned carts with 90%+ open rates.",
            desc: "Transition from low-converting email campaigns to high-engagement WhatsApp messaging. Send customized offers, order confirmations, and VIP broadcasts.",
            features: [
                "Abandoned cart recovery messages",
                "Automated order & shipping confirmations",
                "Restock alerts for out-of-stock items",
                "Loyalty program management"
            ],
            color: "var(--color-amber)"
        },
        {
            id: "education",
            icon: <GraduationCap size={32} />,
            title: "Education & EdTech",
            tagline: "Streamline admissions and student messaging.",
            desc: "Handle the rush of admissions inquiries effortlessly. Pre-qualify prospective students, send fee structures, and broadcast event reminders to parents.",
            features: [
                "Admissions FAQ & document collection",
                "Fee payment reminders with links",
                "Event and webinar broadcasting",
                "Alumni engagement campaigns"
            ],
            color: "var(--color-teal-dark)"
        },
        {
            id: "insurance",
            icon: <Shield size={32} />,
            title: "Insurance",
            tagline: "Instant quote generation and claim routing.",
            desc: "Simplify the insurance process for your clients. Generate instant quotes based on interactive questionnaires and route claim submissions to the right department.",
            features: [
                "Interactive policy quote generation",
                "Automated renewal reminders",
                "First-notice-of-loss (FNOL) claim routing",
                "Policy document dispatch"
            ],
            color: "var(--color-gray-600)"
        }
    ];

    return (
        <div className="industries-page" style={{ background: '#FAFCFF', minHeight: '100vh', paddingBottom: 'var(--space-24)' }}>

            <section className="section" style={{
                paddingTop: 'calc(var(--space-32) + var(--space-8))',
                paddingBottom: 'var(--space-20)',
                background: 'radial-gradient(ellipse at top left, #E8F8F2 0%, #FAFCFF 70%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(400px, 1fr) 1fr',
                        gap: 'var(--space-12)',
                        alignItems: 'center'
                    }}>
                        {/* Text Content */}
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--space-6)',
                                background: 'rgba(37, 211, 102, 0.1)',
                                color: 'var(--color-green)',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '100px',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.02em',
                                textTransform: 'uppercase'
                            }} className="animate-slide-up">
                                Tailored Solutions
                            </div>
                            <h1 className="text-dark animate-slide-up delay-100" style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: 800,
                                letterSpacing: '-0.04em',
                                lineHeight: 1.05,
                                marginBottom: 'var(--space-6)'
                            }}>
                                Built for Your <br /><span style={{ color: 'var(--color-green)' }}>Specific Industry</span>
                            </h1>
                            <p className="text-muted animate-slide-up delay-200" style={{
                                fontSize: '1.25rem',
                                lineHeight: 1.6,
                                color: 'var(--color-ink)',
                                opacity: 0.8,
                                marginBottom: 'var(--space-8)'
                            }}>
                                We don't build generic bots. We design highly specialized automation flows that solve the exact operational bottlenecks in your sector.
                            </p>

                            <div className="animate-slide-up delay-300">
                                <Link to="/strategy" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.0625rem', borderRadius: '100px', fontWeight: 600 }}>
                                    Book Strategy Call
                                </Link>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="animate-slide-up delay-200" style={{ position: 'relative' }}>
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 24px 64px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.03)',
                                transform: 'perspective(1000px) rotateY(-5deg)',
                                transition: 'transform 0.5s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)';
                                }}>
                                <img
                                    src="/wati-workflow.png"
                                    alt="WATI WhatsApp Automation Workflow Builder"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />

                                {/* Decorative elements */}
                                <div style={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '-5%',
                                    width: '100px',
                                    height: '100px',
                                    background: 'var(--color-green)',
                                    filter: 'blur(60px)',
                                    opacity: 0.2,
                                    zIndex: -1
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern SaaS Cards Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: 'var(--space-8)'
                    }}>
                        {industries.map((ind, i) => (
                            <div key={ind.id} className="animate-slide-up" style={{
                                animationDelay: `${100 + i * 50}ms`,
                                background: '#FFFFFF',
                                borderRadius: '32px',
                                padding: 'var(--space-10)',
                                boxShadow: '0 12px 40px -12px rgba(0, 0, 0, 0.05)',
                                border: '1px solid rgba(0,0,0,0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(37, 211, 102, 0.15)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 12px 40px -12px rgba(0, 0, 0, 0.05)';
                                }}>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: 'var(--space-6)' }}>
                                    <div style={{
                                        width: 64, height: 64, borderRadius: '20px',
                                        background: 'rgba(37, 211, 102, 0.1)',
                                        color: 'var(--color-green)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        {ind.icon}
                                    </div>
                                    <h3 className="text-dark" style={{ fontSize: '1.75rem', marginBottom: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                                        {ind.title}
                                    </h3>
                                </div>

                                <div style={{ fontWeight: 600, color: 'var(--color-ink)', fontSize: '1.125rem', marginBottom: 'var(--space-4)', lineHeight: 1.4 }}>
                                    {ind.tagline}
                                </div>

                                <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--space-8)', lineHeight: 1.6, fontSize: '1rem' }}>
                                    {ind.desc}
                                </p>

                                <div style={{ marginTop: 'auto', background: '#F8FBFF', borderRadius: '20px', padding: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Key Use Cases</div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                        {ind.features.map(f => (
                                            <li key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-ink)', fontSize: '0.9375rem', opacity: 0.9 }}>
                                                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                                                <span style={{ lineHeight: 1.4 }}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to={
                                    ind.id === 'real-estate' ? '/industries/real-estate' :
                                        ind.id === 'clinics' ? '/industries/clinics' :
                                            ind.id === 'logistics' ? '/industries/logistics' :
                                                ind.id === 'education' ? '/industries/education' :
                                                    ind.id === 'ecommerce' ? '/industries/ecommerce' :
                                                        ind.id === 'insurance' ? '/industries/insurance' :
                                                            '/contact'
                                } style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    background: 'var(--color-ink)', color: 'white', fontWeight: 600,
                                    textDecoration: 'none', padding: '1.125rem 1.5rem', borderRadius: '100px',
                                    transition: 'background 0.2s ease, transform 0.2s ease',
                                    textAlign: 'center', fontSize: '1.0625rem'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'var(--color-green)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'var(--color-ink)';
                                    }}>
                                    Discuss your use case
                                    <ArrowRight size={18} />
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Industry CTA */}
            <section className="section" style={{ textAlign: 'center', paddingBottom: 'var(--space-16)', paddingTop: 'var(--space-8)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{
                        background: '#FFFFFF',
                        borderRadius: '40px',
                        padding: 'var(--space-16) var(--space-8)',
                        boxShadow: '0 12px 40px -12px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }} className="animate-slide-up delay-200">
                        <div style={{ width: 80, height: 80, background: 'rgba(37, 211, 102, 0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6)', color: 'var(--color-green)' }}>
                            <Building2 size={40} />
                        </div>
                        <h2 className="text-dark" style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Don't see your industry?</h2>
                        <p style={{ color: 'var(--color-ink)', opacity: 0.8, fontSize: '1.25rem', marginBottom: 'var(--space-10)', lineHeight: 1.6, maxWidth: '600px' }}>
                            If you have high conversation volume, we can likely automate it. We build custom API integrations for unique business models.
                        </p>
                        <Link to="/strategy" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', borderRadius: '100px', fontWeight: 700 }}>Book a Custom Discovery Call</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
