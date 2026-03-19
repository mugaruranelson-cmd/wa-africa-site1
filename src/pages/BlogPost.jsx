import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { posts } from '../data/posts';

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const shareUrl = window.location.href;

    return (
        <div className="blog-post-page" style={{ paddingTop: 'calc(var(--space-24) + var(--space-8))' }}>
            <SEO 
                title={`${post.title} | WhatsApp Automation Blog`} 
                description={post.excerpt}
                image={post.image}
            />

            {/* Post Header / Hero */}
            <section className="section" style={{ paddingBottom: 'var(--space-12)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-8)', color: 'var(--color-muted)', fontWeight: 600 }}>
                        <ArrowLeft size={18} /> Back to Insights
                    </Link>
                    
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <span className="badge badge-green">{post.category}</span>
                    </div>
                    
                    <h1 style={{ marginBottom: 'var(--space-8)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{post.title}</h1>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-green-dark)', border: '1px solid var(--color-border)' }}>
                                <User size={20} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-ink)' }}>{post.author}</div>
                                <div style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Lead Strategist</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                            <Calendar size={18} />
                            {post.date}
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }} className="share-links">
                            <button 
                                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--color-green-dark)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
                            >
                                <MessageCircle size={20} /> Share
                            </button>
                        </div>
                    </div>

                    <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: 'var(--space-12)' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', display: 'block' }} />
                    </div>
                </div>
            </section>

            {/* Post Content */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div 
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                    <div style={{ 
                        marginTop: 'var(--space-16)', 
                        paddingTop: 'var(--space-12)', 
                        borderTop: '1px solid var(--color-border)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ marginBottom: 'var(--space-6)' }}>What do you think?</h3>
                        <p className="text-muted" style={{ marginBottom: 'var(--space-8)' }}>
                            Join the conversation on LinkedIn or book a call to see how these trends apply to your business.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/strategy" className="btn btn-primary">Book Strategy Call</Link>
                            <Link to="/contact" className="btn btn-outline">Ask a Question</Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .post-content h2 {
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-teal-dark);
                }
                .post-content h3 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--color-ink);
                }
                .post-content p {
                    font-size: 1.125rem;
                    color: var(--color-text);
                    margin-bottom: 1.5rem;
                }
                .post-content ul, .post-content ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .post-content li {
                    font-size: 1.125rem;
                    margin-bottom: 0.75rem;
                    padding-left: 0.5rem;
                }
                .post-content strong {
                    color: var(--color-ink);
                }
                .post-content em {
                    color: var(--color-muted);
                }
                .post-content blockquote {
                    border-left: 4px solid var(--color-green);
                    padding: 1rem 1.5rem;
                    margin: 2rem 0;
                    background: var(--color-bg-alt);
                    font-style: italic;
                    color: var(--color-teal-dark);
                    border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
                }
            `}</style>
        </div>
    );
}
