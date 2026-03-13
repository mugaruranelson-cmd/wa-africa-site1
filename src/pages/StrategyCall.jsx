import { useEffect, useState } from 'react';
import { Target, CheckCircle2, Shield, Calendar, Send, Settings, LineChart, MessageSquare } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import SEO from '../components/seo/SEO';

export default function StrategyCall() {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        industry: '',
        volume: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    const deliverableItems = [
        { icon: <Settings size={20} />, title: "Workflow Assessment", desc: "We review how your team currently handles WhatsApp." },
        { icon: <Target size={20} />, title: "Automation Roadmap", desc: "A bespoke blueprint of which flows you should automate." },
        { icon: <CheckCircle2 size={20} />, title: "Package Recommendation", desc: "Honest advice on the right WATI tier for your volume." },
        { icon: <LineChart size={20} />, title: "Investment Estimate", desc: "Clear pricing on implementation and ROI timeline." }
    ];

    return (
        <div className="strategy-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))', background: 'var(--color-bg)' }}>
            <SEO 
                title="Book a Free Strategy Call" 
                description="Schedule a 30-minute consultation with our WhatsApp automation experts. Let's map out your bottlenecks and design an intelligent system for your SME."
            />

            <div className="container" style={{ maxWidth: '1100px', marginBottom: 'var(--space-16)' }}>

                {/* Page Header */}
                <div className="text-center animate-slide-up" style={{ marginBottom: 'var(--space-12)' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 211, 102, 0.1)', color: 'var(--color-green)', padding: '0.5rem 1rem', borderRadius: '100px', fontWeight: 600, fontSize: '0.875rem', marginBottom: 'var(--space-4)' }}>
                        <Calendar size={16} /> Strategy Session
                    </div>
                    <h1 className="text-dark" style={{ fontSize: '3rem', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-4)' }}>
                        Book Your Free <span className="text-primary">WhatsApp Automation</span> Strategy Call
                    </h1>
                    <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                        A 30-minute deep dive into your operations to see if and how automated WhatsApp structures can drive your revenue.
                    </p>
                </div>

                <div className="grid-2 align-start" style={{ gap: 'var(--space-12)' }}>

                    {/* Left Col: Form / Success state */}
                    <div className="animate-slide-up delay-100" style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>

                        {formState === 'success' ? (
                            <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
                                <div style={{ width: 64, height: 64, background: 'var(--color-green)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-dark" style={{ marginBottom: '0.5rem' }}>Application Received!</h3>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    We've received your details. Please use the calendar widget below to select a time that works for you.
                                </p>
                                {/* Live Calendly Embed */}
                                <div style={{ background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}>
                                    <InlineWidget
                                        url="https://calendly.com/nelson-perlogy/30min"
                                        prefill={{
                                            name: formData.name,
                                            customAnswers: {
                                                a1: formData.business,
                                                a2: formData.message
                                            }
                                        }}
                                        styles={{
                                            height: '650px',
                                            width: '100%',
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-dark" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Tell us about your setup</h3>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'inherit' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Business Name *</label>
                                        <input
                                            type="text"
                                            required
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'inherit' }}
                                            value={formData.business}
                                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Industry *</label>
                                        <select
                                            required
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'inherit', background: 'white' }}
                                            value={formData.industry}
                                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                        >
                                            <option value="">Select industry...</option>
                                            <option value="real-estate">Real Estate</option>
                                            <option value="healthcare">Clinics & Healthcare</option>
                                            <option value="ecommerce">E-commerce</option>
                                            <option value="logistics">Logistics & Delivery</option>
                                            <option value="education">Schools & Education</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Weekly WhatsApp Initial Inquiries *</label>
                                    <select
                                        required
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'inherit', background: 'white' }}
                                        value={formData.volume}
                                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                                    >
                                        <option value="">Select volume...</option>
                                        <option value="low">Under 100/week (Mostly manual is okay)</option>
                                        <option value="medium">100 - 500/week (Feeling the strain)</option>
                                        <option value="high">500+/week (Drowning in messages)</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>What's your biggest current bottleneck?</label>
                                    <textarea
                                        rows="4"
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    {formState === 'submitting' ? 'Processing...' : (
                                        <>
                                            Proceed to Calendar <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Col: Value Prop & Trust */}
                    <div className="animate-slide-up delay-200">
                        <h3 className="text-dark" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>What you'll receive in 30 minutes:</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            {deliverableItems.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: 40, height: 40, background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-dark)' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--color-dark)', marginBottom: '0.25rem', fontSize: '1.125rem' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--color-muted)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Signals */}
                        <div style={{ background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>
                                <Shield size={18} color="var(--color-green)" />
                                Our Commitment
                            </h4>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--color-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>No hard sell or obligation. Even if we don't work together, you leave with a clear roadmap.</li>
                                <li>Any data you share is strictly confidential and never shared with third parties.</li>
                                <li>All calls led by experienced B2B CX architects.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
