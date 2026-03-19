import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { posts } from '../data/posts';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title="WhatsApp Automation Blog | Insights for African B2B" 
                description="Expert insights on WhatsApp automation, conversational AI, and customer experience trends for SMEs and enterprises in Kenya, Nigeria, and beyond."
            />

            {/* Hero Section */}
            <section className="section bg-light" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="badge badge-green animate-slide-up" style={{ marginBottom: 'var(--space-6)' }}>Insights & Resources</div>
                    <h1 className="animate-slide-up delay-100" style={{ marginBottom: 'var(--space-6)' }}>
                        The Future of <span className="text-green">Conversational Commerce</span> in Africa
                    </h1>
                    <p className="text-muted animate-slide-up delay-200" style={{ fontSize: '1.25rem' }}>
                        Expert guides, trend reports, and strategic playbooks to help your business scale with WhatsApp automation.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
                        {posts.map((post, idx) => (
                            <div key={post.slug} className="blog-card animate-slide-up" style={{ 
                                animationDelay: `${(idx + 1) * 100}ms`,
                                background: 'white',
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                border: '1px solid var(--color-border)',
                                transition: 'all var(--transition-normal)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <Link to={`/blog/${post.slug}`}>
                                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>
                                </Link>
                                <div style={{ padding: 'var(--space-6)' }}>
                                    <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-3)', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                                        <span style={{ color: 'var(--color-green-dark)', fontWeight: 700 }}>{post.category}</span>
                                        <span>•</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {post.date}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-4)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-green-dark)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-6)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-teal-dark)' }}>
                                        Read Article <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section" style={{ background: 'var(--color-teal-deep)', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Stay Ahead of the Curve</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-8)' }}>
                        Get WhatsApp automation insights for East African SMEs delivered to your inbox. No spam, just value.
                    </p>
                    <form style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center' }} onSubmit={e => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="your@email.com" 
                            style={{ 
                                padding: '0.875rem 1.5rem', 
                                borderRadius: 'var(--radius-full)', 
                                border: 'none', 
                                outline: 'none',
                                flex: '1 1 300px'
                            }} 
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>

            <style>{`
                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--color-green-light);
                }
            `}</style>
        </div>
    );
}
