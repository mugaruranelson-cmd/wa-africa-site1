import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, Settings, ArrowUpRight, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const approachSteps = [
        { icon: <Search size={24} />, title: "Analyze", desc: "We map your current conversational bottlenecks and identify lost revenue gaps." },
        { icon: <Settings size={24} />, title: "Architect", desc: "We design a custom logical flow tailored to your specific operational needs." },
        { icon: <ArrowUpRight size={24} />, title: "Deploy", desc: "Build, test, and launch the WATI infrastructure with minimal disruption." },
        { icon: <Target size={24} />, title: "Optimize", desc: "Continuous refinement based on actual customer interaction data." }
    ];

    const differentiators = [
        { title: "Business-First Thinking", desc: "We don't just 'install software'. We look at your workflow, sales processes, and customer journey first." },
        { title: "SME-Focused", desc: "Built specifically for teams of 5-50 people who need structure but don't want enterprise complexity." },
        { title: "Local Market Knowledge", desc: "Deep understanding of East African consumer behavior, mobile-money integration, and conversational habits." },
        { title: "Practical Automation", desc: "No AI gimmicks. We build deterministic, reliable flows that actually solve operations problems." }
    ];

    return (
        <div className="about-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="About Us"
                description="We blend human strategy with advanced AI-driven WhatsApp automation. Learn how our East African roots power scalable automation systems for SMEs."
            />

            {/* Hero */}
            <section className="section" style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'calc(var(--space-32) + var(--space-8))',
                paddingBottom: 'calc(var(--space-32) + var(--space-8))',
                marginTop: 'calc(-1 * (var(--space-24) + var(--space-8)))' // Pull up to negate page padding
            }}>
                {/* AI Collaboration Background (Simulated Video via Panning) */}
                <div style={{
                    position: 'absolute',
                    inset: '-10%', // Make it slightly larger so it can pan without showing edges
                    zIndex: -2,
                    backgroundImage: 'url("/ai-collaboration-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6) contrast(1.1)',
                    animation: 'panBackground 20s ease-in-out infinite alternate'
                }}></div>

                {/* Dark/Green Gradient overlay for readable text and blend */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(13, 31, 27, 0.8) 0%, rgba(255,255,255,1) 100%)'
                }}></div>

                <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
                    <div className="animate-slide-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 211, 102, 0.2)', color: 'var(--color-green-light)', padding: '0.5rem 1.25rem', borderRadius: '100px', fontWeight: 700, fontSize: '0.875rem', marginBottom: 'var(--space-6)', border: '1px solid rgba(37, 211, 102, 0.4)', backdropFilter: 'blur(10px)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--color-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-green)', animation: 'pulse 2s infinite' }}></span>
                        AI-Powered Collaboration
                    </div>
                    <h1 className="animate-slide-up delay-100" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-6)', color: 'white', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                        Moving Your Business Forward with <br /><span className="text-green" style={{ whiteSpace: 'nowrap' }}>Intelligent Automation</span>
                    </h1>
                    <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
                        We blend human strategy with advanced AI-driven WhatsApp automation. We don't just build chatbots; we build structured, intelligent systems that scale your operations without losing the human touch.
                    </p>
                </div>

                <style>{`
                    @keyframes panBackground {
                        0% { transform: scale(1.05) translate(0, 0); }
                        50% { transform: scale(1.1) translate(-2%, 2%); }
                        100% { transform: scale(1.05) translate(2%, -1%); }
                    }
                    @keyframes pulse {
                        0% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(1.5); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                `}</style>
            </section>

            {/* Our Mission */}
            <section className="section bg-white text-center">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-dark" style={{ marginBottom: 'var(--space-6)' }}>Our Mission</h2>
                    <p className="text-muted delay-100 animate-slide-up" style={{ fontSize: '1.25rem', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                        To help SMEs across East Africa automate their WhatsApp operations — improving response speed, increasing lead conversion, and reducing manual workload through structured automation systems designed around each business's unique process.
                    </p>
                    <div className="delay-200 animate-slide-up" style={{ padding: 'var(--space-6) var(--space-8)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-xl)', borderLeft: '4px solid var(--color-green)' }}>
                        <p className="text-dark" style={{ fontSize: '1.125rem', lineHeight: 1.7, margin: 0, fontWeight: 500, fontStyle: 'italic' }}>
                            "We believe that automation is not a luxury for large enterprises. It is a practical growth tool for any serious SME — and it should be accessible, well-designed and properly supported."
                        </p>
                    </div>
                </div>
            </section>
            {/* Partnership Image Banner */}
            <section className="section bg-white" style={{ paddingTop: 0, paddingBottom: 'var(--space-16)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="animate-slide-up delay-300" style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                        aspectRatio: '21/9',
                        position: 'relative'
                    }}>
                        <img src="/about-partnership.png" alt="Successful Business Partnership in an East African Office" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,31,27,0.7) 0%, transparent 60%)', zIndex: 1 }}></div>
                        <div style={{ position: 'absolute', bottom: 'var(--space-6)', left: 'var(--space-8)', zIndex: 2 }}>
                            <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.75rem', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Partners in Growth</h3>
                            <p style={{ color: 'var(--color-green-light)', margin: 0, fontSize: '1.125rem', fontWeight: 500, textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>Building strong automation foundations together.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Reality */}
            <section className="section" style={{ paddingBottom: 'calc(var(--space-24) * 1.5)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-12)', alignItems: 'center' }}>
                        <div className="animate-slide-up">
                            <h2 className="text-dark" style={{ marginBottom: 'var(--space-6)', lineHeight: 1.2 }}>The Business Communication Reality in East Africa</h2>
                            <p className="text-muted" style={{ marginBottom: 'var(--space-4)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                In Kenya, Uganda, Tanzania and Rwanda, WhatsApp is not just a messaging app. It is the primary channel through which customers ask questions, place orders, book appointments, raise complaints and make purchasing decisions.
                            </p>
                            <p className="text-muted" style={{ marginBottom: 'var(--space-6)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                Most businesses understand this. What most have not yet done is build a system around it. <strong style={{ color: 'var(--color-teal-dark)' }}>Manual processes limit growth. Structured automation creates the capacity to scale.</strong>
                            </p>
                        </div>
                        <div className="animate-slide-up delay-200" style={{ position: 'relative' }}>
                            <div style={{ background: 'var(--color-teal-dark)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                                <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'var(--color-green)', borderRadius: '50%', opacity: 0.15, filter: 'blur(50px)' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', marginTop: 0, color: 'var(--color-green-light)', fontWeight: 700 }}>Why You Need a System</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    {[
                                        "Customers expect responses within minutes — not hours",
                                        "Sales conversations happen on chat — not email, not phone calls",
                                        "Support requests arrive 24 hours a day, seven days a week",
                                        "Most businesses are still responding manually, one message at a time"
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <CheckCircle2 size={24} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.5, fontSize: '1.0625rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Profile & Authority */}
            <section className="section bg-light" style={{ background: '#F8FBFF' }}>
                <div className="container" style={{ maxWidth: '1440px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-16)', alignItems: 'center' }}>
                        {/* Left Col: Photo placeholder */}
                        <div className="animate-slide-up" style={{
                            aspectRatio: '1/1',
                            background: '#e5ebd9',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                        }}>
                            <img
                                src="/nelson-mugarura.png"
                                alt="Nelson Mugarura, MBA"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-6)', background: 'linear-gradient(to top, rgba(7,94,84,0.95), transparent)' }}>
                                <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.5rem', fontWeight: 800 }}>Nelson Mugarura, MBA</h3>
                                <div style={{ color: 'var(--color-green-light)', fontWeight: 700, fontSize: '0.9375rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founder & Lead Architect</div>
                            </div>
                        </div>

                        {/* Right Col: Bio & MBA mapping */}
                        <div className="animate-slide-up delay-100" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>

                            <div style={{ display: 'inline-block', marginBottom: 'var(--space-6)' }}>
                                <span style={{
                                    background: 'var(--color-green)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase'
                                }}>
                                    Meet the Founder
                                </span>
                            </div>

                            <h2 className="text-dark" style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem', lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 800 }}>
                                Built on Enterprise-Grade Strategy, Designed for SMEs
                            </h2>

                            <p className="text-muted" style={{ marginBottom: 'var(--space-10)', fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--color-ink)', opacity: 0.8 }}>
                                WhatsAppAutomation.africa is not a chatbot agency. It is led by an MBA-trained business strategist whose research at the University of East London focused on B2B Customer Experience Management in Multinational Organisations in Emerging Markets. We apply the same structured CX frameworks used by multinationals to help East African SMEs automate with clarity and precision.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
                                {[
                                    "MBA — University of East London (UK)",
                                    "B2B Customer Experience Research",
                                    "WATI-Powered Automation",
                                    "East Africa SME Focus"
                                ].map((badge, idx) => (
                                    <div key={idx} style={{
                                        background: '#E8F8F2',
                                        borderLeft: '4px solid var(--color-green)',
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        fontSize: '0.9375rem',
                                        fontWeight: 700,
                                        color: 'var(--color-dark)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        lineHeight: 1.3
                                    }}>
                                        {badge}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section bg-deep text-white">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <h2 style={{ color: 'white' }}>Our Engineering Philosophy</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>Business improvement over software installation.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }} className="approach-grid">
                        {approachSteps.map((step, idx) => (
                            <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                                <div style={{ width: 48, height: 48, background: 'rgba(37, 211, 102, 0.1)', color: 'var(--color-green)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    {step.icon}
                                </div>
                                <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{idx + 1}. {step.title}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 0 }}>
                                    {step.desc}
                                </p>
                                {/* Arrow connector */}
                                {idx < 3 && (
                                    <div className="step-arrow" style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-green)', opacity: 0.5, zIndex: 10 }}>
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiation */}
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 className="text-dark text-center" style={{ marginBottom: 'var(--space-12)' }}>What Makes Us Different</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-8)' }}>
                        {differentiators.map((diff, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 color="var(--color-green)" size={24} style={{ flexShrink: 0, marginTop: '3px' }} />
                                <div>
                                    <h4 className="text-dark" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{diff.title}</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{diff.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-light" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="container text-center" style={{ maxWidth: '700px' }}>
                    <h2 className="text-dark" style={{ marginBottom: 'var(--space-4)' }}>If your business depends on WhatsApp, it deserves structure.</h2>
                    <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-8)' }}>
                        Join the leading WhatsApp automation partner for East African SMEs.
                    </p>
                    <Link to="/strategy" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book Free Consultation
                    </Link>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
          .approach-grid { grid-template-columns: 1fr 1fr !important; }
          .step-arrow { display: none; }
        }
        @media (max-width: 600px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
