import { useEffect } from 'react';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))', paddingBottom: 'var(--space-24)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                <h1 className="text-dark animate-slide-up" style={{ fontSize: '3rem', marginBottom: 'var(--space-8)', letterSpacing: '-0.02em' }}>Terms of Service</h1>

                <div className="animate-slide-up delay-100" style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>1. Agreement</h2>
                        <p>
                            By engaging the services of WhatsAppAutomation.africa (a trading name of Perlogy Technologies LLC LTD), you agree to these Terms of Service. These terms govern all services provided by WhatsAppAutomation.africa to its clients. If you do not agree to these terms, do not engage our services.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>2. Services</h2>
                        <p>
                            WhatsAppAutomation.africa provides WhatsApp automation consulting, strategy, implementation and managed operations services using the WATI platform and WhatsApp Business API. The specific scope of services delivered to each client is defined in the individual proposal and agreement signed at the commencement of each project.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>3. Payment Terms</h2>
                        <p>
                            Setup fees are invoiced at project commencement with payment required before implementation begins, unless otherwise agreed in writing. Monthly managed operations fees are invoiced at the start of each month. Late payments may result in suspension of services. All prices are quoted in USD unless otherwise specified. Clients are responsible for their own WATI subscription fees, which are billed directly by WATI.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>4. Intellectual Property</h2>
                        <p>
                            All automation flows, chatbot scripts, workflow designs and strategic documents created by WhatsAppAutomation.africa for a client become the property of the client upon receipt of full payment for those deliverables. WhatsAppAutomation.africa retains the right to use anonymised and non-identifying information about project approaches and outcomes for its own marketing and case study purposes, unless the client requests otherwise in writing.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--space-12)' }}>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>5. Client Responsibilities</h2>
                        <p>
                            The client is responsible for providing accurate business information necessary for implementation, ensuring their WhatsApp number is eligible for the WhatsApp Business API, complying with WhatsApp Business Policy and WATI's terms of service, obtaining any necessary consents from their customers for WhatsApp communication, and providing timely feedback and approvals during the implementation process. Delays caused by the client may affect the agreed implementation timeline.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-dark" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-teal-dark)' }}>6. Limitation of Liability</h2>
                        <p>
                            WhatsAppAutomation.africa is not responsible for changes to WhatsApp Business API policies, WATI platform updates or outages, or any business outcomes resulting from the use or non-use of automation systems. Our liability in any circumstance is limited to the value of fees paid for the specific service giving rise to the claim.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
