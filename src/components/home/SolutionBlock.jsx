import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionBlock() {
    const benefits = [
        "Instant replies 24/7",
        "Pre-qualify leads automatically",
        "Route complex queries to human staff",
        "Recover abandoned conversations",
        "Send broadcast marketing campaigns",
        "Sync with your existing CRM",
        "Detailed analytics & reporting"
    ];

    return (
        <section className="section bg-deep text-white" style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Decorative Grid */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(var(--color-teal) 1px, transparent 1px), linear-gradient(90deg, var(--color-teal) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12)' }}>
                    <div className="badge badge-teal" style={{ marginBottom: 'var(--space-6)', background: 'rgba(255,255,255,0.1)', color: 'var(--color-green-light)' }}>
                        The Solution
                    </div>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>
                        Turn WhatsApp into a <span style={{ color: 'var(--color-green)' }}>Structured Machine</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem' }}>
                        We implement the official WhatsApp Business API with advanced automation flows tailored to your specific industry.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>

                    {/* Before/After Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

                        {/* Before */}
                        <div className="glass-dark" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(239, 68, 68, 0.3)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: -14, left: 24, background: 'var(--color-red)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Before</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                                {["Manual, slow replies", "Lost leads in one inbox", "No data or tracking"].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', opacity: 0.9 }}>
                                        <XCircle size={20} color="var(--color-red)" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 100%)',
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-green)',
                            position: 'relative',
                            boxShadow: '0 10px 30px -10px rgba(37, 211, 102, 0.3)'
                        }}>
                            <div style={{ position: 'absolute', top: -14, left: 24, background: 'var(--color-green)', color: 'var(--color-ink)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>After WA Africa</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                                {["Instant, 24/7 automated flows", "Smart routing to multiple agents", "Full analytics dashboard"].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontWeight: 600 }}>
                                        <CheckCircle2 size={20} color="var(--color-green-light)" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Checklist */}
                    <div className="glass-dark" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ color: 'white', marginBottom: 'var(--space-6)', fontSize: '1.5rem' }}>The Automation Advantage</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {benefits.map(benefit => (
                                <li key={benefit} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(37,211,102,0.1)', borderRadius: '50%', padding: '4px', color: 'var(--color-green)' }}>
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span style={{ fontSize: '1.0625rem', opacity: 0.9 }}>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: 'var(--space-8)' }}>
                            <Link to="/services" className="btn btn-primary" style={{ width: '100%' }}>Explore Our Services</Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
