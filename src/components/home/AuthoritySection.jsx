import { Award, ShieldCheck, PlayCircle } from 'lucide-react';

export default function AuthoritySection() {
    const testimonials = [
        { quote: "Our bookings went up 30% in the first month because we instantly answered inquiries even at 10 PM. The bot handles all the basic questions flawlessly.", author: "Clinic Director", company: "Nairobi Med" },
        { quote: "We used to have 3 people just replying 'availability' to property inquiries. Now the bot qualifies them and sends the brochure automatically.", author: "Sales Manager", company: "Prime Real Estate" },
        { quote: "The implementation was incredibly smooth. They understand the East African context and how our customers actually want to chat.", author: "Founder", company: "Retail Connect" }
    ];

    return (
        <section className="section bg-light">
            <div className="container">

                {/* Authority Strip */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-8)', marginBottom: 'var(--space-16)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '100px', boxShadow: 'var(--shadow-sm)' }}>
                        <Award size={20} color="var(--color-amber)" />
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-ink)' }}>MBA, B2B CX Research</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '100px', boxShadow: 'var(--shadow-sm)' }}>
                        <ShieldCheck size={20} color="var(--color-green)" />
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-ink)' }}>Official WATI Partner</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '100px', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ fontSize: '1.2rem' }}>🌍</span>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-ink)' }}>East Africa Focused Implementation</span>
                    </div>
                </div>

                {/* Testimonials */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>
                        Proven Results
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{ background: 'white', padding: 'var(--space-8) var(--space-6)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: -15, left: 'var(--space-6)', color: 'var(--color-teal)', opacity: 0.2 }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            </div>
                            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', fontStyle: 'italic', marginBottom: 'var(--space-6)', position: 'relative', zIndex: 10 }}>"{t.quote}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 800, color: 'var(--color-muted)' }}>{t.author[0]}</span>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--color-ink)', fontSize: '0.9375rem' }}>{t.author}</div>
                                    <div style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{t.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
