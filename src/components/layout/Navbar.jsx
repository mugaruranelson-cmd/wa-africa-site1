import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all var(--transition-normal)',
                padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
                background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 60 }}>
                    <img
                        src="/waafrica_logo_transparent.png"
                        alt="WhatsAppAutomation.africa Logo"
                        className="nav-logo"
                        style={{ width: 'auto', objectFit: 'contain' }}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    fontSize: '0.9375rem',
                                    fontWeight: 600,
                                    color: location.pathname === link.path ? 'var(--color-green-dark)' : 'var(--color-text)',
                                    transition: 'color var(--transition-fast)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/contact" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)' }}>
                            Contact
                        </Link>
                        <Link to="/strategy" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9375rem' }}>
                            Book Strategy Call
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        background: 'transparent', border: 'none', color: 'var(--color-ink)',
                        cursor: 'pointer', zIndex: 60, display: 'none'
                    }}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'var(--color-bg)', zIndex: 50,
                    paddingTop: '5rem', display: 'flex', flexDirection: 'column', px: '1.5rem'
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name} to={link.path}
                                style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '1rem 0' }} />
                        <Link to="/contact" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)' }}>
                            Contact Us
                        </Link>
                        <Link to="/strategy" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Book Strategy Call
                        </Link>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-logo {
          height: 300px;
          margin-top: -120px;
          margin-bottom: -120px;
          transition: height 0.3s ease;
        }
        @media (max-width: 768px) {
          .nav-logo {
            height: 200px;
            margin-top: -70px;
            margin-bottom: -70px;
          }
        }
      `}</style>
        </header>
    );
}
