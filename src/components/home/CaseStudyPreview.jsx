import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function CaseStudyPreview() {
    return (
        <section className="section bg-light">
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--space-4)' }}>
                    <span style={{ display: 'inline-block', width: '32px', height: '2px', background: 'var(--color-green)' }}></span>
                    <span style={{ color: 'var(--color-teal)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Featured Case Study</span>
                </div>

                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: 'var(--space-8)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>

                    <div>
                        <h2 style={{ fontSize: '2rem', lineHeight: 1.2, color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>
                            How <span style={{ color: 'var(--color-green-dark)' }}>Speed Queen Laundromat</span> Achieved 100% Positive Reviews
                        </h2>
                        <p style={{ color: 'var(--color-text)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                            By transforming an unmanaged inbox into a structured WATI automation flow, this Nairobi business achieved same-day delivery, 5+ daily automated bookings, and a 30% revenue increase.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/case-study/speed-queen-laundromat" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Read Full Case Study <ArrowRight size={18} />
                            </Link>
                            <a href={`/SpeedQueen_CaseStudy.pdf?v=${Date.now()}`} download="SpeedQueen_CaseStudy.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Download PDF
                            </a>
                        </div>
                    </div>

                    <div style={{ background: 'var(--color-bg-alt)', borderRadius: '16px', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <div style={{ display: 'flex', color: 'var(--color-amber)', marginBottom: '0.5rem' }}>
                                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
                            </div>
                            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-ink)' }}>100% Positive</div>
                            <div style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>Google Review Profile</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-green-dark)' }}>+30% Growth</div>
                            <div style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>Monthly Revenue Increase</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
