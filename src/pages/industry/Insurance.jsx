import { useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

export default function Insurance() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problems = [
        "Agents spend hours answering policy questions that a structured FAQ bot could handle instantly",
        "Renewal follow-ups are manual, inconsistent and often too late",
        "Lead qualification is done conversation-by-conversation with no structure",
        "Claim enquiries arrive with no routing system — they go to whoever picks up first",
        "Your team cannot scale inquiry capacity without hiring more people"
    ];

    const solutions = [
        "Policy Q&A automation — instant answers to common coverage, premium and claims questions",
        "Lead qualification flows — capture intent, budget and product interest automatically",
        "Quote generation routing — qualified leads sent to the right agent with full context",
        "Renewal reminder sequences — automated outreach at 90, 60, 30 and 7 days before expiry",
        "Claims inquiry routing — initial claim details captured and routed to the correct team",
        "Customer onboarding flows — new policy holders guided through next steps automatically"
    ];

    return (
        <div className="industry-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="WhatsApp Automation for Insurance & Microfinance" 
                description="Automate policy queries, lead qualification, and renewal follow-ups for your East African financial firm."
            />

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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.25) contrast(1.1)'
                }}></div>

                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(13, 31, 27, 0.8) 0%, var(--color-bg) 100%)'
                }}></div>

                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div className="badge flex-center gap-2" style={{ marginBottom: 'var(--space-6)', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'inline-flex' }}>
                        <Shield size={16} /> INDUSTRY PAGE — INSURANCE & MICROFINANCE
                    </div>

                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)', color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
                        Automate Policy Queries, Lead Qualification and <span style={{ color: 'var(--color-green-light)' }}>Renewal Follow-Ups</span>
                    </h1>

                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-10)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                        Insurance and microfinance businesses depend on trust, timeliness and consistent communication. WhatsApp is how your customers reach you. Automation is how you respond at scale — without compromising the professionalism your clients expect.
                    </p>

                    <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Book a Free Insurance Automation Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="section bg-light" style={{ padding: 'var(--space-16) 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            The Problem
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
                    </div>

                </div>
            </section>

            {/* The Solution Section */}
            <section className="section" style={{ padding: 'var(--space-16) 0', background: '#F0F9F4' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            The Solution
                        </h2>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        padding: 'var(--space-12)',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid rgba(37, 211, 102, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-green)' }}></div>

                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}>
                            {solutions.map((solution, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start',
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '8px'
                                }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(37, 211, 102, 0.1)',
                                        color: 'var(--color-green)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '2px'
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span style={{ fontSize: '1.125rem', color: 'var(--color-ink)', lineHeight: 1.5, fontWeight: 500 }}>
                                        {solution}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* Investment Section */}
            <section className="section bg-light" style={{ padding: 'var(--space-16) 0' }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <div style={{
                        background: 'white',
                        padding: 'var(--space-8)',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--color-dark)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-muted)', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            INVESTMENT
                        </div>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-ink)', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                            Insurance and microfinance automation projects typically start from $2,000. Exact investment depends on product range, team size and inquiry complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="section" style={{ background: '#075E54', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', color: 'white' }}>Ready to Scale Your Firm?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-8)' }}>
                        Turn WhatsApp into your most reliable customer service & sales channel.
                    </p>
                    <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book Your Free Insurance Automation Call <ArrowRight style={{ marginLeft: 8 }} size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
