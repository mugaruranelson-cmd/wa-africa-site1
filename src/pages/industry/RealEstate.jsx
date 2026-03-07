import { useEffect } from 'react';
import { Building2, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealEstate() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problems = [
        "Your agents are spending hours replying to WhatsApp messages instead of closing deals",
        "Buyers ask the same questions — price, location, availability — hundreds of times a week",
        "Leads come in during evenings and weekends and nobody follows up until it is too late",
        "There is no system to track which inquiries are serious and which are just browsing",
        "Property launches generate a flood of messages that overwhelm your entire team",
        "Brochures and property details are sent manually, one conversation at a time",
        "You have no visibility into which inquiries converted and which were lost — or why"
    ];

    return (
        <div className="industry-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>

            {/* Hero Section */}
            <section className="section" style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'calc(var(--space-24) + var(--space-8))',
                paddingBottom: 'calc(var(--space-24) + var(--space-12))',
                marginTop: 'calc(-1 * (var(--space-24) + var(--space-8)))'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -2,
                    backgroundImage: 'url("/real-estate-nairobi-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4) contrast(1.1)'
                }}></div>

                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(13, 31, 27, 0.7) 0%, var(--color-bg) 100%)'
                }}></div>

                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div className="badge flex-center gap-2" style={{ marginBottom: 'var(--space-6)', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'inline-flex' }}>
                        <Building2 size={16} /> INDUSTRY PAGE — REAL ESTATE
                    </div>

                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)', color: 'white', fontSize: '3rem', lineHeight: 1.1 }}>
                        Turn Property Inquiries Into <span style={{ color: 'var(--color-green-light)' }}>Qualified Buyers</span> <br />— Automatically
                    </h1>

                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-10)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                        Real estate inquiries in East Africa happen on WhatsApp. Hundreds of them, every week. But most agencies are still handling them manually — missing leads, losing speed, and watching deals go to faster competitors. We change that.
                    </p>

                    <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Book a Free Real Estate Automation Call
                        </Link>
                        <Link to="/contact" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="section bg-light" style={{ padding: 'var(--space-20) 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            Does This Sound Familiar?
                        </h2>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        padding: 'var(--space-12)',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            marginBottom: 'var(--space-12)'
                        }}>
                            {problems.map((problem, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start',
                                    paddingBottom: '1rem',
                                    borderBottom: idx !== problems.length - 1 ? '1px dashed var(--color-border-subtle)' : 'none'
                                }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        color: 'var(--color-red)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '4px'
                                    }}>
                                        <div style={{ width: 8, height: 8, background: 'currentColor', borderRadius: '50%' }}></div>
                                    </div>
                                    <span style={{ fontSize: '1.125rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                                        {problem}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div style={{
                            background: 'var(--color-bg)',
                            padding: 'var(--space-8)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--color-green)'
                        }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                REALITY CHECK
                            </div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-ink)', margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
                                In real estate, speed and structure win deals. The agency that responds in two minutes beats the one that responds in two hours — every time.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom CTA Block for Industry */}
            <section className="section" style={{ background: '#075E54', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', color: 'white' }}>Automate Your Agency Today</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-8)' }}>
                        Let us build a customized WhatsApp system for your real estate business that qualifies leads, dispatches brochures, and books viewings on autopilot.
                    </p>
                    <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book a Free Real Estate Automation Call <ArrowRight style={{ marginLeft: 8 }} size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
