import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Briefcase, Download } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function CaseStudySpeedQueen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingBottom: 'var(--space-16)' }}>
            <SEO 
                title="Speed Queen Laundromat Case Study | WATI Automation" 
                description="Learn how Speed Queen Laundromat in Nairobi achieved 100% positive Google reviews and 30% revenue growth with WhatsApp automation."
            />

            {/* Header Area */}
            <div style={{ background: 'var(--color-ink)', color: 'var(--color-bg)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
                <div className="container">
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-green-light)', textDecoration: 'none', marginBottom: 'var(--space-8)', fontSize: '0.9375rem', fontWeight: 600 }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-4)' }}>
                        <p style={{ color: 'var(--color-green-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', margin: 0 }}>
                            Case Study
                        </p>

                        <a href={`/SpeedQueen_CaseStudy.pdf?v=${Date.now()}`} download="SpeedQueen_CaseStudy.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--color-bg)', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                            <Download size={16} /> Download Full PDF
                        </a>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: 'var(--color-bg)', marginBottom: 'var(--space-6)', maxWidth: '900px' }}>
                        How Speed Queen Laundromat Achieved <span style={{ color: 'var(--color-green)' }}>100% Positive Google Reviews</span> with WhatsApp Automation
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span>Nairobi, Kenya</span>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <span>Laundry & Dry Cleaning Services</span>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <span>Powered by WATI</span>
                    </p>
                </div>
            </div>

            {/* Quick Facts Table */}
            <div className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10, marginBottom: 'var(--space-16)' }}>
                <div style={{ background: 'var(--color-surface)', borderRadius: '16px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Client</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-text)' }}>Speed Queen Laundromat</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Industry</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-text)' }}>Laundry & Dry Cleaning</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Location</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-text)' }}>Nairobi, Kenya</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Platform</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-text)' }}>WATI (WhatsApp Business API)</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Partner</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-text)' }}>WhatsAppAutomation.Africa</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr' }}>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-teal-dark)', borderRight: '1px solid var(--color-border)' }}>Result</div>
                        <div style={{ padding: '1rem 1.5rem', color: 'var(--color-ink)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle2 size={18} style={{ color: 'var(--color-green-dark)' }} /> 100% Positive Google Reviews</span>
                            <span style={{ opacity: 0.3 }}>|</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><TrendingUp size={18} style={{ color: 'var(--color-green-dark)' }} /> 30% Revenue Growth</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container" style={{ maxWidth: '800px' }}>

                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg-alt)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: 'var(--space-6)' }}>
                    <div style={{ background: 'var(--color-green)', color: 'var(--color-bg)', fontWeight: 800, fontSize: '1.25rem', padding: '0.75rem 1.5rem' }}>
                        01
                    </div>
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', padding: '0 1.5rem', margin: 0 }}>Executive Summary</h2>
                </div>

                <div style={{ color: 'var(--color-text)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: 'var(--space-12)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Speed Queen Laundromat, a busy laundry and dry-cleaning service in Nairobi, Kenya, was losing customers to a problem that many small businesses across East Africa face: an unmanaged, invisible WhatsApp inbox. Customer orders were placed, complaints were raised, and riders were contacted — all completely outside the owner's visibility. The result was slow turnarounds, unresolved complaints, and a team too overwhelmed to focus on delivering great service.
                    </p>
                    <p>
                        WhatsAppAutomation.Africa implemented the WATI platform, transforming Speed Queen's WhatsApp channel into a structured, automated customer experience system. Within a short period, the business moved from chaos to control — achieving same-day delivery, 5+ bookings per day, a 30% revenue increase, and a Google review profile that is 100% positive.
                    </p>
                </div>

                {/* Decorative End */}
                <div style={{ display: 'flex', height: '16px', borderRadius: '8px', overflow: 'hidden', width: '100%', marginBottom: 'var(--space-16)' }}>
                    <div style={{ flex: 1, background: 'var(--color-green-light)' }}></div>
                    <div style={{ flex: 1, background: 'var(--color-teal)' }}></div>
                    <div style={{ flex: 1, background: 'var(--color-ink)' }}></div>
                    <div style={{ flex: 1, background: 'var(--color-amber)' }}></div>
                </div>

                {/* Call to Action Inside Post */}
                <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border-subtle)', borderRadius: '16px', padding: 'var(--space-8)', textAlign: 'center', marginTop: 'var(--space-12)' }}>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--color-ink)', marginBottom: 'var(--space-2)' }}>Ready for similar results?</h3>
                    <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--space-6)', maxWidth: '500px', margin: '0 auto var(--space-6) auto' }}>
                        Stop losing leads in an unmanaged inbox. Let's design a custom WhatsApp automation flow for your business.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/strategy" className="btn btn-primary">
                            Book Your Free Strategy Call
                        </Link>
                        <a href={`/SpeedQueen_CaseStudy.pdf?v=${Date.now()}`} download="SpeedQueen_CaseStudy.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={18} /> Download Case Study PDF
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
