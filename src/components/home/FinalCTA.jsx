import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="bg-ink text-white" style={{ padding: 'var(--space-24) 0', position: 'relative', overflow: 'hidden' }}>

            {/* Background elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(37,211,102,0.15) 0%, rgba(13,31,27,1) 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '1px', background: 'var(--color-teal-dark)', opacity: 0.5, zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                <div style={{
                    width: '64px', height: '64px',
                    background: 'var(--color-green)',
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white',
                    marginBottom: 'var(--space-6)',
                    transform: 'rotate(-10deg)'
                }}>
                    <MessageCircle size={32} weight="fill" />
                </div>

                <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '800px', marginBottom: 'var(--space-6)' }}>
                    Ready to turn WhatsApp into your <span style={{ color: 'var(--color-green-light)' }}>fastest growing sales channel?</span>
                </h2>

                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: 'var(--space-8)' }}>
                    Stop letting inquiries slip through the cracks. Join the top East African SMEs scaling their operations with verified automation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <Link to="/strategy" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Book Your Free Strategy Call
                        <ArrowRight size={20} />
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                        <span style={{ width: 8, height: 8, background: 'var(--color-green-light)', borderRadius: '50%' }}></span>
                        No obligation. Just a clear roadmap for your business.
                    </div>
                </div>

            </div>
        </section>
    );
}
