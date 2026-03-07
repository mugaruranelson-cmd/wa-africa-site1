import { Link } from 'react-router-dom';
import { Building2, Stethoscope, Truck, GraduationCap, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

export default function IndustriesGrid() {
    const industries = [
        { name: 'Real Estate', icon: <Building2 size={24} />, desc: 'Property inquiry bots, viewing schedulers, and auto-brochures.', target: '/industries/real-estate', status: 'Launch' },
        { name: 'Clinics & Health', icon: <Stethoscope size={24} />, desc: 'Appointment booking, patient intake, and reminder flows.', target: '/industries/clinics', status: 'Launch' },
        { name: 'Logistics', icon: <Truck size={24} />, desc: 'Delivery tracking, COD updates, and automated routing.', target: '/industries/logistics', status: 'Launch' },
        { name: 'Education', icon: <GraduationCap size={24} />, desc: 'Admissions bots, fee reminders, and event invites.', target: '/industries/education', status: 'Launch' },
        { name: 'E-commerce', icon: <ShoppingBag size={24} />, desc: 'Order confirmations, abandoned carts, and upsells.', target: '/industries/ecommerce', status: 'Launch' },
        { name: 'Insurance', icon: <ShieldCheck size={24} />, desc: 'Quote automation, policy Q&A, and claim routing.', target: '/industries/insurance', status: 'Launch' }
    ];

    return (
        <section className="section">
            <div className="container">

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                    <div className="badge badge-green" style={{ marginBottom: 'var(--space-4)' }}>Built For Your Industry</div>
                    <h2>Specialized Automation Flows</h2>
                    <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.125rem' }}>
                        We don't just build generic bots. We design workflows tailored to the exact operational needs of your business sector.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
                    {industries.map((ind, idx) => (
                        <Link
                            key={idx}
                            to={ind.target}
                            style={{
                                display: 'block',
                                padding: 'var(--space-6)',
                                borderRadius: 'var(--radius-xl)',
                                background: 'white',
                                border: '1px solid var(--color-border)',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all var(--transition-normal)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            className="industry-card"
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                e.currentTarget.style.borderColor = 'var(--color-green-light)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                                <div style={{
                                    width: '48px', height: '48px',
                                    borderRadius: '12px',
                                    background: ind.status === 'Launch' ? 'var(--color-green)' : 'var(--color-bg-alt)',
                                    color: ind.status === 'Launch' ? 'white' : 'var(--color-teal-dark)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {ind.icon}
                                </div>
                                {ind.status === 'Soon' && (
                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', background: 'var(--color-bg-alt)', padding: '2px 8px', borderRadius: '12px' }}>Coming Soon</span>
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)', color: 'var(--color-ink)' }}>{ind.name}</h3>
                            <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-4)' }}>{ind.desc}</p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: ind.status === 'Launch' ? 'var(--color-green-dark)' : 'var(--color-muted)', fontWeight: 600, fontSize: '0.875rem' }}>
                                {ind.status === 'Launch' ? 'View Solutions' : 'Learn More'}
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
