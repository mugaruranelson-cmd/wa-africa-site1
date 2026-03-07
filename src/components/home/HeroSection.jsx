import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Check, Play } from 'lucide-react';

export default function HeroSection() {
    const [showImageMode, setShowImageMode] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowImageMode(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section" style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'calc(var(--space-24) + var(--space-16))', // Account for navbar
            background: 'linear-gradient(135deg, var(--color-bg-alt) 0%, #E8F5E9 100%)'
        }}>
            {/* Background decorations */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,211,102,0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(18,140,126,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>

                    {/* Text Content */}
                    <div className="animate-slide-up">
                        <div className="badge badge-teal" style={{ marginBottom: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-green)' }} className="animate-pulse"></span>
                            WhatsApp Business API Masters
                        </div>

                        <h1 style={{ marginBottom: 'var(--space-6)', color: 'var(--color-ink)' }}>
                            Turn WhatsApp Into a <span style={{ color: 'var(--color-teal-dark)', display: 'inline-block', position: 'relative' }}>
                                Growth Engine
                                <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 12 }} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 9.5C45.5 -1.5 133.5 -2.5 197.5 9.5" stroke="var(--color-green)" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)', maxWidth: '540px' }}>
                            We build custom WhatsApp automation for East African SMEs. Stop losing leads, reduce manual replies, and scale your sales hands-free.
                        </p>

                        <div className="flex gap-4 items-center" style={{ flexWrap: 'wrap' }}>
                            <Link to="/strategy" className="btn btn-primary">
                                Book Free Strategy Call
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="btn btn-white" style={{ display: 'flex', gap: '8px', color: 'var(--color-teal-dark)' }}>
                                <Play size={18} fill="currentColor" />
                                See How It Works
                            </Link>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
                            {["Official API integration", "Done-for-you setup", "Local support"].map(benefit => (
                                <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                                    <div style={{ background: '#DCFCE7', color: '#166534', borderRadius: '50%', padding: '2px' }}><Check size={14} strokeWidth={3} /></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Concept - Phone Mockup Container */}
                    <div className="animate-slide-up delay-200 justify-center flex" style={{ position: 'relative' }}>
                        {/* Soft glow behind phone */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '280px', height: '580px', background: 'var(--color-green)', filter: 'blur(60px)', opacity: 0.15, borderRadius: 'var(--radius-full)' }}></div>

                        {/* Interactive Rotating Container (No transform here to prevent stacking context trap for mix-blend-mode) */}
                        <div style={{
                            width: '320px', height: '640px',
                            position: 'relative',
                        }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >

                            {/* Option 1: CSS Phone Mockup */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'var(--color-bg)',
                                borderRadius: '2.5rem',
                                boxShadow: '0 25px 50px -12px rgba(7, 94, 84, 0.25), 0 0 0 10px var(--color-ink)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                opacity: showImageMode ? 0 : 1,
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isHovered ? 'rotate(0deg) translateY(-10px)' : 'rotate(-2deg) translateY(0)',
                                transformOrigin: 'center center',
                                pointerEvents: showImageMode ? 'none' : 'auto',
                                zIndex: 10,
                            }}>
                                {/* Dynamic Island / Notch */}
                                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '28px', background: 'var(--color-ink)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 20 }}></div>

                                {/* Chat Header */}
                                <div style={{ background: 'var(--color-teal-dark)', padding: '2.5rem 1rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <MessageCircle size={24} color="var(--color-teal-dark)" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.2 }}>WA Africa Bot</div>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Online</div>
                                    </div>
                                </div>

                                {/* Chat Body Backdrop */}
                                <div style={{ flex: 1, background: '#E5DDD5', position: 'relative', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
                                    {/* Chat pattern overlay (simplified) */}
                                    <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '10px 10px', zIndex: 0 }}></div>

                                    {/* Messages Container (for continuous animation) */}
                                    <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                                        {/* Message 1 (Bot) */}
                                        <div className="glass animate-fade-in" style={{ alignSelf: 'flex-start', background: 'white', color: 'black', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderTopLeftRadius: 0, maxWidth: '85%', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                            Hi! Welcome to Modern Clinic. How can we help you today?
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.5rem' }}>
                                                <button style={{ background: '#F0F2F5', border: 'none', padding: '0.5rem', borderRadius: '4px', color: '#00A884', fontWeight: 600, fontSize: '0.8125rem', textAlign: 'center' }}>Book Appointment</button>
                                                <button style={{ background: '#F0F2F5', border: 'none', padding: '0.5rem', borderRadius: '4px', color: '#00A884', fontWeight: 600, fontSize: '0.8125rem', textAlign: 'center' }}>See Pricing</button>
                                            </div>
                                        </div>

                                        {/* Message 2 (User) */}
                                        <div className="animate-fade-in delay-200" style={{ alignSelf: 'flex-end', background: '#DCF8C6', color: 'black', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderTopRightRadius: 0, maxWidth: '85%', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginTop: '0.5rem' }}>
                                            Book Appointment
                                        </div>

                                        {/* Message 3 (Bot) */}
                                        <div className="glass animate-fade-in delay-400" style={{ alignSelf: 'flex-start', background: 'white', color: 'black', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderTopLeftRadius: 0, maxWidth: '85%', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                            Great! What specialty do you need?
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.5rem' }}>
                                                <span style={{ background: '#F0F2F5', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#00A884', fontWeight: 600 }}>Dentist</span>
                                                <span style={{ background: '#F0F2F5', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#00A884', fontWeight: 600 }}>Optician</span>
                                                <span style={{ background: '#F0F2F5', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#00A884', fontWeight: 600 }}>General</span>
                                            </div>
                                        </div>

                                        {/* Typing Indicator */}
                                        <div className="animate-fade-in delay-500" style={{ alignSelf: 'flex-end', background: '#DCF8C6', color: 'black', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderTopRightRadius: 0, display: 'flex', gap: '4px', alignItems: 'center' }}>
                                            <span style={{ width: 6, height: 6, background: 'var(--color-muted)', borderRadius: '50%', animation: 'float 1s infinite' }}></span>
                                            <span style={{ width: 6, height: 6, background: 'var(--color-muted)', borderRadius: '50%', animation: 'float 1s infinite 200ms' }}></span>
                                            <span style={{ width: 6, height: 6, background: 'var(--color-muted)', borderRadius: '50%', animation: 'float 1s infinite 400ms' }}></span>
                                        </div>

                                    </div>
                                </div>

                                {/* Chat Input fake bar */}
                                <div style={{ background: '#F0F0F0', padding: '0.5rem 1rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <div style={{ flex: 1, background: 'white', borderRadius: '20px', height: '36px', display: 'flex', alignItems: 'center', padding: '0 1rem', color: 'var(--color-muted)', fontSize: '0.875rem' }}>Type a message...</div>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                    </div>
                                </div>

                            </div>

                            {/* Option 2: Uploaded Image Mockup */}
                            <img
                                src="/phone_image_transparent.png"
                                alt="WATI Example"
                                style={{
                                    position: 'absolute',
                                    top: '50%', left: '50%',
                                    width: '125%', // Scaled up to counteract padding and match the phone body size
                                    height: '125%',
                                    objectFit: 'contain',
                                    opacity: showImageMode ? 1 : 0,
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: `translate(-50%, -50%) ${isHovered ? 'rotate(0deg) translateY(-10px)' : 'rotate(-2deg) translateY(0)'}`,
                                    transformOrigin: 'center center',
                                    pointerEvents: showImageMode ? 'auto' : 'none',
                                    filter: 'drop-shadow(0 25px 50px rgba(7, 94, 84, 0.25))',
                                    zIndex: 5,
                                }}
                            />

                        </div>

                        {/* Popout stats cards */}
                        <div className="glass animate-jump-laugh delay-100" style={{ position: 'absolute', top: '10%', right: '-15%', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ background: 'var(--color-green-light)', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Conversion Rate</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink)' }}>+45%</div>
                            </div>
                        </div>

                        <div className="glass animate-float delay-300" style={{ position: 'absolute', bottom: '20%', left: '-20%', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ background: 'var(--color-teal)', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Response Time</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink)' }}>Instant</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
