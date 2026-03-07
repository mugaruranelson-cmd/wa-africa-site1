import { Link } from 'react-router-dom';
import { Compass, Settings, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

export default function ProcessBlock() {
    const steps = [
        {
            num: "01",
            title: "Understand Your Workflow",
            desc: "We analyse your WhatsApp inquiries, sales funnel and customer journey to design the right automation structure.",
            Icon: Compass
        },
        {
            num: "02",
            title: "Build Your Automation System",
            desc: "We secure WhatsApp API approval, configure your WATI workspace and build automation flows.",
            Icon: Settings
        },
        {
            num: "03",
            title: "Launch and Train Your Team",
            desc: "We deploy the system, train your team and ensure human handover works smoothly.",
            Icon: Rocket
        },
        {
            num: "04",
            title: "Optimise and Improve Results",
            desc: "We monitor analytics and continuously improve messaging to increase lead conversion.",
            Icon: TrendingUp
        }
    ];

    return (
        <section className="section bg-light" style={{ background: '#F8FAFC' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }}>
                        How We Turn WhatsApp Into a Structured Business System
                    </h2>
                    <p className="text-muted" style={{ fontSize: '1.25rem' }}>
                        A simple 4-step implementation process to automate your WhatsApp sales and customer support.
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 'var(--space-6)',
                    position: 'relative'
                }}>
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block step-connector" style={{
                        position: 'absolute',
                        top: '40px',
                        left: '12.5%',
                        right: '12.5%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--color-whatsapp) 15%, var(--color-whatsapp) 85%, transparent)',
                        opacity: 1,
                        zIndex: 0
                    }}></div>

                    {steps.map((step, idx) => {
                        const Icon = step.Icon;
                        return (
                            <div key={idx} className="process-step-card" style={{
                                position: 'relative',
                                zIndex: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'white',
                                borderRadius: '1rem',
                                padding: 'var(--space-8) var(--space-6)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                                {/* Desktop Line Dot Wrapper & Number Watermark */}
                                <div style={{
                                    position: 'relative',
                                    marginBottom: 'var(--space-6)',
                                    display: 'inline-flex',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        zIndex: 2,
                                        width: '48px', height: '48px',
                                        borderRadius: '0.75rem',
                                        background: 'rgba(37, 211, 102, 0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-whatsapp)'
                                    }}>
                                        <Icon size={24} />
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        zIndex: 1,
                                        top: '-20px',
                                        left: '20px',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 800,
                                        fontSize: '4.5rem',
                                        color: 'var(--color-ink)',
                                        lineHeight: 1,
                                        opacity: 0.04,
                                        pointerEvents: 'none'
                                    }}>
                                        {step.num}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', fontWeight: 600, color: 'var(--color-ink)' }}>{step.title}</h3>
                                <p className="text-muted" style={{
                                    fontSize: '0.9375rem',
                                    lineHeight: 1.5
                                }}>{step.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                    <Link to="/strategy-call" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.125rem' }}>
                        Book a Free Strategy Call
                        <ArrowRight size={20} />
                    </Link>
                </div>

            </div>

            <style>{`
                .process-step-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border-color: rgba(37, 211, 102, 0.3);
                }
                @media (max-width: 1024px) {
                    .hidden\\.lg\\:block, .step-connector { display: none !important; }
                }
            `}</style>
        </section>
    );
}
