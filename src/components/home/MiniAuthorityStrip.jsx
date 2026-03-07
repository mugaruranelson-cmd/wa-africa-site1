import { GraduationCap, ShieldCheck, MapPin } from 'lucide-react';

export default function MiniAuthorityStrip() {
    return (
        <section style={{
            background: 'var(--color-bg-alt)',
            padding: 'var(--space-8) 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)'
        }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 'var(--space-6)',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-ink)' }}>
                        <div style={{ background: '#E8F8F2', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-green)' }}>
                            <GraduationCap size={20} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>MBA-Trained Strategy</span>
                    </div>

                    <div style={{ width: '1px', height: '24px', background: 'var(--color-border)', display: 'none' }} className="desktop-divider"></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-ink)' }}>
                        <div style={{ background: '#E8F8F2', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-green)' }}>
                            <ShieldCheck size={20} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>WATI-Powered Infrastructure</span>
                    </div>

                    <div style={{ width: '1px', height: '24px', background: 'var(--color-border)', display: 'none' }} className="desktop-divider"></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-ink)' }}>
                        <div style={{ background: '#E8F8F2', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-green)' }}>
                            <MapPin size={20} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>East Africa SME Focus</span>
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-divider {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    );
}
