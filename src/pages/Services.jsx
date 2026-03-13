import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, UserPlus, Headset, Megaphone, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: "setup",
            icon: <Settings size={32} />,
            title: "Platform Setup & Configuration",
            desc: "Complete technical onboarding to the official WhatsApp Business API.",
            features: ["API onboarding & verification", "WATI / Inbox configuration", "Team routing logic setup", "Basic auto-reply bot", "Staff training session"],
            bestFor: "First-timers moving from WhatsApp Web",
            reverse: false,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "conversion",
            icon: <UserPlus size={32} />,
            title: "Lead Conversion Flows",
            desc: "Automated funnels designed to instantly qualify leads and book appointments.",
            features: ["Interactive qualification flows", "Dynamic routing to sales reps", "Automated follow-up triggers", "CRMs integration"],
            bestFor: "Real Estate, Insurance, Clinics",
            reverse: true,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "support",
            icon: <Headset size={32} />,
            title: "Automated Customer Support",
            desc: "Deflect repetitive questions and resolve issues instantly without human intervention.",
            features: ["Intelligent FAQ logic", "Self-serve appointment booking", "Seamless human escalation", "Delivery tracking flows"],
            bestFor: "E-commerce, Logistics, High-volume retail",
            reverse: false,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "marketing",
            icon: <Megaphone size={32} />,
            title: "Broadcast Marketing Campaigns",
            desc: "Reach thousands of customers instantly with 98% open rates.",
            features: ["Customer segmentation strategy", "Message template approvals", "Promotional campaign execution", "Cart abandonment re-engagement"],
            bestFor: "Retailers, Events, Recurring services",
            reverse: true,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "managed",
            icon: <Activity size={32} />,
            title: "Managed Operations & Growth",
            desc: "Ongoing partnership to continuously refine and optimize your WhatsApp channel.",
            features: ["Monthly strategy sessions", "Bot conversation refinement", "Analytics & ROI reporting", "New feature implementation"],
            bestFor: "Scaling businesses needing a dedicated technical partner",
            reverse: false,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const processSteps = ["Map", "Architect", "Configure", "Deploy", "Train", "Optimize"];

    return (
        <div className="services-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="WATI WhatsApp Automation Services" 
                description="From API onboarding to complex lead conversion funnels and automated customer support. We build the systems your East African SME needs to grow."
            />

            {/* Hero Section */}
            <section className="section" style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'calc(var(--space-32) + var(--space-8))',
                paddingBottom: 'calc(var(--space-32) + var(--space-12))',
                marginTop: 'calc(-1 * (var(--space-24) + var(--space-8)))' // Pull up to negate page padding
            }}>
                {/* Full Width Videowall Background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -2,
                    backgroundImage: 'url("/services-bg-dashboard.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.85) contrast(1.1)' // Increased brightness
                }}></div>

                {/* Lightened Gradient overlay: mostly transparent at top, solid white at bottom */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(13, 31, 27, 0.4) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 100%)'
                }}></div>

                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div className="badge animate-slide-up" style={{ marginBottom: 'var(--space-6)', background: 'rgba(13, 31, 27, 0.8)', color: 'var(--color-green-light)', border: '1px solid rgba(37, 211, 102, 0.4)', backdropFilter: 'blur(10px)', textShadow: 'none' }}>What We Do</div>
                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)', color: 'white', textShadow: '0 2px 25px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.4)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
                        WhatsApp Automation Services for <br /><span style={{ color: 'var(--color-green)' }}>SMEs in East Africa</span>
                    </h1>
                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)', color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(0,0,0,0.5)', fontWeight: 500 }}>
                        From initial API setup to complex lead conversion funnels, we build the structured systems your business needs to grow.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="section" style={{ paddingBottom: '0' }}>
                <div className="container">
                    {services.map((service, idx) => (
                        <div key={service.id} style={{
                            display: 'flex',
                            flexDirection: service.reverse ? 'row-reverse' : 'row',
                            flexWrap: 'wrap',
                            gap: 'var(--space-12)',
                            alignItems: 'center',
                            marginBottom: 'var(--space-24)'
                        }} className="service-row">

                            {/* Service Image */}
                            <div style={{ flex: '1 1 400px', position: 'relative' }}>
                                <div style={{
                                    borderRadius: 'var(--radius-2xl)',
                                    overflow: 'hidden',
                                    aspectRatio: '4/3',
                                    border: '1px solid var(--color-border)',
                                    boxShadow: 'var(--shadow-lg)',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    {/* Overlay Gradient */}
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 94, 84, 0.4), transparent)' }}></div>

                                    {/* Floating UI Element */}
                                    <div className="glass" style={{ position: 'absolute', bottom: '1rem', right: service.reverse ? 'auto' : '1rem', left: service.reverse ? '1rem' : 'auto', padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: 'var(--shadow-xl)' }}>
                                        <div style={{ width: 40, height: 40, background: 'var(--color-green-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-dark)' }}>{service.title.split(' ')[0]} Active</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>System Running</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div style={{ flex: '1 1 400px' }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: 16, background: 'var(--color-teal-dark)', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-6)'
                                }}>
                                    {service.icon}
                                </div>
                                <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '2rem' }}>{service.title}</h2>
                                <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-6)' }}>{service.desc}</p>

                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: 'var(--space-6)' }}>
                                    {service.features.map(f => (
                                        <li key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontWeight: 500, color: 'var(--color-ink)' }}>
                                            <CheckCircle2 size={20} color="var(--color-green)" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ background: 'var(--color-amber-bg)', color: '#B45309', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, display: 'inline-block' }}>
                                    💡 Ideal for: {service.bestFor}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology Step Flow */}
            <section className="section bg-deep text-white">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ color: 'white' }}>Our Implementation Process</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>A proven 6-step framework to transition you smoothly.</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
                        {processSteps.map((step, idx) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: '50%', background: 'rgba(37,211,102,0.1)', border: '2px solid var(--color-green)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--color-green-light)'
                                    }}>
                                        {idx + 1}
                                    </div>
                                    <div style={{ marginTop: '0.5rem', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{step}</div>
                                </div>
                                {idx !== processSteps.length - 1 && (
                                    <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.2)' }} className="hidden md:block"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dual CTA */}
            <section className="section" style={{ background: 'var(--color-bg)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ marginBottom: 'var(--space-6)' }}>Let's Design Your WhatsApp System</h2>
                    <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-8)' }}>
                        Every business is unique. Book a call to discuss which of our services align with your immediate growth goals.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy" className="btn btn-primary">Book Free Consultation</Link>
                        <Link to="/contact" className="btn btn-outline">Request a Demo</Link>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
          .service-row { flex-direction: column !important; }
        }
      `}</style>

        </div>
    );
}
