import { Link } from 'react-router-dom';
import { MessageCircle, Linkedin, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-deep" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-6)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-12)', marginBottom: 'var(--space-16)' }}>

                {/* Brand & Mission */}
                <div>
                    <Link to="/" style={{ display: 'block', marginLeft: '-3rem', marginTop: '-2rem', marginBottom: '-2rem' }}>
                        <img
                            src="/waafrica_logo_transparent.png"
                            alt="WhatsAppAutomation.africa Logo"
                            className="footer-logo"
                            style={{ width: 'auto', objectFit: 'contain' }}
                        />
                    </Link>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', marginBottom: 'var(--space-6)' }}>
                        We help East African SMEs turn WhatsApp into a structured growth system. Increase conversions, reduce workload, and scale effortlessly.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://www.linkedin.com/company/whatsappautomation-africa" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61586875852383" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
                            <Facebook size={20} />
                        </a>
                        <a href="https://x.com/WA_Africa26" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
                            <Twitter size={20} />
                        </a>
                        <Link to="/contact" style={{ color: 'white', opacity: 0.8, transition: 'opacity var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: 'var(--space-4)' }}>Solutions</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>WhatsApp Setup & Config</Link></li>
                        <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Lead Conversion Bots</Link></li>
                        <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Customer Support Flows</Link></li>
                        <li><Link to="/pricing" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Pricing & Packages</Link></li>
                        <li><Link to="/industries" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Industry Use Cases</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: 'var(--space-4)' }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>About Us</Link></li>
                        <li><Link to="/blog" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Resources & Blog</Link></li>
                        <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>Contact</Link></li>
                        <li><Link to="/strategy" style={{ color: 'var(--color-green-light)', fontWeight: 600, fontSize: '0.9375rem' }}>Book Strategy Call →</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: 'var(--space-4)' }}>Contact</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>
                            <MessageCircle size={18} style={{ color: 'var(--color-green)' }} />
                            <span>+254 792 651 241<br /><span style={{ fontSize: '0.8rem', opacity: 0.8 }}>WhatsApp Available</span></span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>
                            <Mail size={18} style={{ color: 'var(--color-green)' }} />
                            <span>info@perlogy.africa</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>
                            <MapPin size={18} style={{ color: 'var(--color-green)' }} />
                            <span>Nairobi, Kenya<br /><span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Serving East Africa</span></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-6)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', margin: 0 }}>
                    © {new Date().getFullYear()} WhatsAppAutomation.africa. A Perlogy Technologies Initiative. All rights reserved.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Privacy Policy</Link>
                    <Link to="/terms-of-service" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Terms of Service</Link>
                </div>
            </div>
            <style>{`
                .footer-logo {
                    height: 200px;
                    transition: height 0.3s ease;
                }
                @media (max-width: 768px) {
                    .footer-logo {
                        height: 150px;
                    }
                }
            `}</style>
        </footer>
    );
}
