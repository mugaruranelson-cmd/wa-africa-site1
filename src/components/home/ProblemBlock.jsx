import { Users, Clock, Moon, Inbox, HelpCircle, Activity } from 'lucide-react';

export default function ProblemBlock() {
    const problems = [
        {
            icon: <Users size={28} />,
            title: "Missed Leads",
            desc: "Inquiries go unanswered because you can't be fast enough."
        },
        {
            icon: <Clock size={28} />,
            title: "Slow Replies",
            desc: "Customers wait hours for a reply, and book elsewhere."
        },
        {
            icon: <Activity size={28} />,
            title: "Staff Overload",
            desc: "Your team is burned out playing message catch-up."
        },
        {
            icon: <Moon size={28} />,
            title: "Overnight Silence",
            desc: "Messages arrive after hours, but nobody responds until the next day. By morning, the customer may already have chosen another business."
        },
        {
            icon: <HelpCircle size={28} />,
            title: "Repeated Questions",
            desc: "Answering 'Where are you located?' 50 times a day."
        },
        {
            icon: <Inbox size={28} />,
            title: "Manual Follow-ups",
            desc: "Losing potential revenue because you forgot to check back."
        }
    ];

    return (
        <section className="section" style={{ background: '#F1F5F9' }}>
            <div className="container">

                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>
                        Are you losing business in the <span className="text-red">WhatsApp Chaos?</span>
                    </h2>
                    <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                        In East Africa, WhatsApp is often the first place customers contact a business. When those conversations become chaotic and rely on human speed alone, bottlenecks form—frustrating customers and costing you lost opportunities.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-6)'
                }}>
                    {problems.map((problem, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: 'white',
                                padding: 'var(--space-8) var(--space-6)',
                                borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--color-border-subtle)',
                                transition: 'all var(--transition-normal)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                cursor: 'default'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                e.currentTarget.style.borderColor = 'var(--color-red-bg)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                            }}
                        >
                            <div style={{
                                width: '56px', height: '56px',
                                borderRadius: '16px',
                                background: 'var(--color-red-bg)',
                                color: 'var(--color-red)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {problem.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{problem.title}</h3>
                            <p className="text-muted" style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.5 }}>{problem.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
