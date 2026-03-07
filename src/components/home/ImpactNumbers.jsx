import { Zap, TrendingUp, Settings, Clock } from 'lucide-react';

export default function ImpactNumbers() {
    const stats = [
        {
            value: "Instant",
            label: "Response Time",
            desc: "Every message receives an instant reply — day or night.",
            Icon: Zap
        },
        {
            value: "+40%",
            label: "More Leads Converted",
            desc: "Faster replies convert more inquiries into paying customers.",
            Icon: TrendingUp
        },
        {
            value: "-60%",
            label: "Less Manual Work",
            desc: "Automation removes repetitive WhatsApp tasks from your team.",
            Icon: Settings
        },
        {
            value: "24/7",
            label: "Always Active",
            desc: "Your WhatsApp keeps responding even when your team is offline.",
            Icon: Clock
        }
    ];

    return (
        <section className="section" style={{ background: '#0F2C59', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, color: 'white' }}>
                        Automation That Delivers Real Business Results
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#BAE6FD' }}>
                        When WhatsApp conversations are structured and automated, businesses respond faster, convert more leads, and reduce manual workload.
                    </p>
                </div>

                {/* Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 'var(--space-6)'
                }}>
                    {stats.map((stat, idx) => {
                        const Icon = stat.Icon;
                        return (
                            <div key={idx} className="impact-stat-card" style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '1rem',
                                padding: 'var(--space-8) var(--space-6)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '0.5rem',
                                    background: 'rgba(37, 211, 102, 0.15)',
                                    display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center',
                                    color: '#25D366',
                                    marginBottom: 'var(--space-4)'
                                }}>
                                    <Icon size={20} />
                                </div>
                                <div style={{
                                    color: 'white',
                                    fontSize: '3rem',
                                    fontWeight: 800,
                                    fontFamily: 'var(--font-display)',
                                    lineHeight: 1,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.value}
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.label}
                                </h3>
                                <p style={{
                                    fontSize: '0.9375rem',
                                    lineHeight: 1.5,
                                    margin: 0,
                                    color: '#7DD3FC'
                                }}>
                                    {stat.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>

            <style>{`
                .impact-stat-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.06) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </section>
    );
}
