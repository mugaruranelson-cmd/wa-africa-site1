import { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))', paddingBottom: 'var(--space-24)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                <h1 className="text-dark animate-slide-up" style={{ fontSize: '3rem', marginBottom: 'var(--space-8)', letterSpacing: '-0.02em' }}>Privacy Policy</h1>

                <div className="animate-slide-up delay-100" style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>1. Who We Are</h2>
                        <p>
                            WhatsAppAutomation.africa is a trading name of Perlogy Technologies LLC LTD, a business registered in Kenya. We provide WhatsApp automation consulting and implementation services for SMEs in East Africa. Our registered address is Nairobi, Kenya. You can contact us at info@perlogy.africa.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>2. What Information We Collect</h2>
                        <p style={{ marginBottom: '1rem' }}>We collect the following types of information:</p>
                        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>Contact information you provide when completing our intake form, contact form or booking a strategy call — including your name, business name, email address, WhatsApp number and industry.</li>
                            <li>Usage information collected automatically when you visit our website, including your IP address, browser type, pages visited and time spent on the site, via Google Analytics.</li>
                            <li>Communication records from WhatsApp, email and other channels when you contact us directly.</li>
                            <li>Client business information provided during onboarding and implementation, including workflow details, team structures and customer communication patterns — used solely to deliver our services.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>3. How We Use Your Information</h2>
                        <p style={{ marginBottom: '1rem' }}>We use the information we collect to:</p>
                        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                            <li>Respond to your inquiries and provide the services you have requested</li>
                            <li>Prepare for and conduct your strategy call</li>
                            <li>Deliver and improve our automation implementation services</li>
                            <li>Send you relevant follow-up communications related to your project or inquiry</li>
                            <li>Send our newsletter or insights content, if you have subscribed (you can unsubscribe at any time)</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        <p>
                            We do not sell your personal information to third parties. We do not use your information for purposes other than those described above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>4. Third-Party Services</h2>
                        <p style={{ marginBottom: '1rem' }}>To deliver our services, we work with the following third-party platforms. Each has its own privacy policy and data practices:</p>
                        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><strong>WATI (Clare.AI Ltd)</strong> — WhatsApp Business API platform used to implement and manage automation for our clients. Data processed through WATI is subject to WATI's Privacy Policy.</li>
                            <li><strong>Google Analytics</strong> — Used to understand how visitors interact with our website. Google Analytics collects anonymised usage data.</li>
                            <li><strong>Calendly or TidyCal</strong> — Used for strategy call scheduling. Booking data is processed by these platforms in accordance with their respective privacy policies.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
