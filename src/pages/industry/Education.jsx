import { useEffect } from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

export default function Education() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problems = [
        "Your admissions team is overwhelmed with WhatsApp inquiries during enrolment periods",
        "Parents ask the same questions about fees, schedules and admission requirements daily",
        "Prospective student follow-ups are inconsistent — many fall through the cracks",
        "Event reminders and parent notifications are sent manually one message at a time",
        "Document collection is chaotic — applicants send the wrong things or send nothing at all",
        "No structured tracking of which inquiries are serious applications and which are just browsing"
    ];

    const solutions = [
        "Admissions inquiry bot — captures prospective student details and interest immediately",
        "Document checklist automation — applicants receive exactly what they need to submit",
        "Fee structure Q&A — payment schedules, bursaries and deadlines answered automatically",
        "Event invitation and reminder flows — sent to the right parent segments automatically",
        "Enrolment period broadcast campaigns — reach your full prospective student database",
        "Application status follow-ups — keep applicants engaged throughout the process"
    ];

    return (
        <div className="industry-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="WhatsApp Automation for Schools & Education" 
                description="Automate admissions, fee queries, and parent communication for your educational institution in East Africa."
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.3) contrast(1.1)'
                }}></div>

                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(13, 31, 27, 0.75) 0%, var(--color-bg) 100%)'
                }}></div>

                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div className="badge flex-center gap-2" style={{ marginBottom: 'var(--space-6)', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'inline-flex' }}>
                        <GraduationCap size={16} /> INDUSTRY PAGE — SCHOOLS & COLLEGES
                    </div>

                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)', color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
                        Automate Admissions, Fee Queries and Parent Communication
                        <br />
                        <span style={{ color: 'var(--color-green-light)' }}>— Without Adding Staff</span>
                    </h1>

                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-10)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                        Private schools and colleges in East Africa receive hundreds of WhatsApp messages every week — admission inquiries, fee questions, parent updates, event reminders. Most of it is handled manually, inconsistently, and at the cost of your administration team's time and focus. We build automation that handles it properly.
                    </p>

                    <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Book a Free Education Automation Call
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
                            Education automation projects typically start from $1,500. Exact investment depends on institution size, daily inquiry volume and communication complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="section" style={{ background: '#075E54', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-8)', color: 'white' }}>Ready to Modernise Your School?</h2>
                    <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book Your Free Education Automation Call <ArrowRight style={{ marginLeft: 8 }} size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
