import { useEffect } from 'react';
import { Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

export default function Clinics() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problems = [
        "Your reception team spends most of the day on WhatsApp — and still cannot keep up",
        "Patients ask the same questions about fees, services and opening hours dozens of times daily",
        "Appointment reminders are sent manually — and no-shows still happen constantly",
        "Booking requests come in overnight and go unanswered until the next morning",
        "Lab result notifications, pre-consultation instructions and follow-ups are all done by hand",
        "Staff are overwhelmed and patients experience long waits for basic responses"
    ];

    const solutions = [
        "Appointment booking — patients book directly via WhatsApp, 24 hours a day",
        "Instant booking confirmation with clinic location, parking guidance and preparation instructions",
        "Automated appointment reminders — 24 hours before and on the morning of the appointment"
    ];

    return (
        <div className="industry-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="WhatsApp Automation for Clinics & Healthcare" 
                description="Reduce missed appointments and automate patient communication for your medical practice in East Africa with WATI."
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000")',
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
                        <Stethoscope size={16} /> INDUSTRY PAGE — CLINICS & HEALTHCARE
                    </div>

                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)', color: 'white', fontSize: '3.5rem', lineHeight: 1.1 }}>
                        Fewer Missed Appointments. Faster Responses. <span style={{ color: 'var(--color-green-light)' }}>Happier Patients.</span>
                    </h1>

                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-10)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                        Most private clinics in East Africa rely on WhatsApp for appointment booking, patient queries and follow-ups. But when everything is handled manually, the cracks show — missed reminders, overwhelmed reception staff, and patients who feel ignored. We help you fix that with structured automation.
                    </p>

                    <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Book a Free Clinic Automation Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="section bg-light" style={{ padding: 'var(--space-16) 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            Sound Familiar?
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
                            borderLeft: '4px solid var(--color-red)'
                        }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                THE COST
                            </div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-ink)', margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
                                Every missed appointment is lost revenue. Every slow response is a patient who might book elsewhere. In healthcare, responsiveness builds trust — and trust builds a practice.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* The Solution Section */}
            <section className="section" style={{ padding: 'var(--space-16) 0', background: '#F0F9F4' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            A WhatsApp Automation System Designed for Clinics
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
                            We implement a structured WhatsApp automation system that handles your most common patient interactions automatically — freeing your team to focus on the patients in front of them, not the messages on their phone.
                        </p>
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

                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-green-dark)', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            WHAT YOUR SYSTEM HANDLES
                        </div>

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

            {/* Bottom CTA Block */}
            <section className="section" style={{ background: '#075E54', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', color: 'white' }}>Ready to Modernize Your Clinic?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-8)' }}>
                        Let's map out exactly how much time and money a WhatsApp automation system can save your healthcare practice.
                    </p>
                    <Link to="/strategy-call" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book a Free Clinic Automation Call <ArrowRight style={{ marginLeft: 8 }} size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
