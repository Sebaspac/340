import React, { useState } from 'react';
import { toast } from 'sonner';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import YesCTA from '@/components/YesCTA';
import PageHero from '@/components/PageHero';
import SplitHeading from '@/components/SplitHeading';
import BlogSection from '@/components/BlogSection';
import { useIsMobile } from '@/hooks/use-mobile';
import up2dateImg from '@/assets/up2date.png';
import sea2 from '@/assets/sea-2.jpg';
import starterGuideImg from '@/assets/starterguide.png';

/* ─── Lead Magnet Section ──────────────────────────────────────────────────── */

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks! Check your inbox.');
    setEmail('');
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1.22fr_1fr]"
      style={{
        minHeight: isMobile ? 'auto' : 'clamp(480px, 56vh, 640px)',
      }}
    >
      {/* Right on mobile stacks below text; on desktop it's to the right */}
      {/* Left — text */}
      <div
        style={{
          background: 'hsl(0 0% 13%)',
          padding: 'clamp(2.5rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'hsl(354 100% 87%)',
            marginBottom: '1.25rem',
          }}
        >
          FREE DOWNLOAD
        </p>

        <SplitHeading
          line1="Your Free Social Media"
          line2="Content Calendar."
          size="clamp(1.8rem, 3.5vw, 3rem)"
        />

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.85rem',
            color: 'hsl(36 21% 95% / 0.6)',
            lineHeight: 1.75,
            marginTop: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '42ch',
          }}
        >
          Download our free social media content calendar and plan a full month of posts — the same framework our clients use to stay consistent and on-brand.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: 420 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email…"
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid hsl(36 21% 95% / 0.15)',
              padding: isMobile ? '0.95rem 1.4rem' : '0.85rem 1.4rem',
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '16px' : '0.85rem',
              color: 'hsl(36 21% 95%)',
              outline: 'none',
              borderRadius: 999,
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'hsl(354 100% 87%)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'hsl(36 21% 95% / 0.15)';
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'hsl(354 100% 87%)',
              color: 'hsl(0 0% 8%)',
              fontFamily: "'Kelson Sans BG', sans-serif",
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '1rem 1.4rem',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s ease',
              boxShadow: '0 4px 24px -4px hsl(354 100% 87% / 0.4)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            DOWNLOAD →
          </button>
        </form>
      </div>

      {/* Right — book cover full bleed */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: isMobile ? 'clamp(240px, 46vw, 340px)' : '100%',
          minHeight: isMobile ? undefined : 'clamp(280px, 40vh, 420px)',
          borderLeft: isMobile ? 'none' : '1px solid hsl(36 21% 95% / 0.06)',
          borderTop: isMobile ? '1px solid hsl(36 21% 95% / 0.06)' : 'none',
        }}
      >
        <img
          src={starterGuideImg}
          alt="Social Media Content Calendar"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />
      </div>
    </div>
  );
};

/* ─── Newsletter Section ───────────────────────────────────────────────────── */

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're in! 🎉");
    setEmail('');
  };

  return (
    <>
      {/* Top decorative line */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, hsl(36 21% 95% / 0.1) 50%, transparent)',
        }}
      />

      <section
        style={{
          background: 'hsl(0 0% 13%)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'hsl(354 100% 87%)',
            marginBottom: '1.5rem',
          }}
        >
          NEWSLETTER
        </p>

        <SplitHeading
          line1="Always stay"
          line2="up2date."
          size="clamp(2rem, 4.5vw, 3.8rem)"
          align="center"
        />

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.85rem',
            color: 'hsl(36 21% 95% / 0.45)',
            lineHeight: 1.75,
            maxWidth: '38ch',
            margin: '1.5rem auto 0',
            textAlign: 'center',
          }}
        >
          No spam. Just real insights, new blog posts and fresh social strategies — straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 440,
            margin: '2.5rem auto 0',
            gap: 0,
            alignItems: 'stretch',
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email…"
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid hsl(36 21% 95% / 0.15)',
              padding: isMobile ? '0.95rem 1.4rem' : '0.85rem 1.4rem',
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '16px' : '0.85rem',
              color: 'hsl(36 21% 95%)',
              outline: 'none',
              borderRadius: 999,
              boxSizing: 'border-box',
              marginBottom: '0.75rem',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'hsl(354 100% 87%)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'hsl(36 21% 95% / 0.15)';
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'hsl(354 100% 87%)',
              color: 'hsl(0 0% 8%)',
              fontFamily: "'Kelson Sans BG', sans-serif",
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '1rem 1.4rem',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              marginTop: 0,
              transition: 'opacity 0.2s ease',
              boxShadow: '0 4px 24px -4px hsl(354 100% 87% / 0.4)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            SUBSCRIBE →
          </button>
        </form>
      </section>

      {/* Bottom decorative line */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, hsl(36 21% 95% / 0.1) 50%, transparent)',
        }}
      />
    </>
  );
};

/* ─── Page ────────────────────────────────────────────────────────────────── */

const About: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'hsl(0 0% 13%)' }}>
      <TopNav />

      <PageHero
        title={[
          <>
            <span style={{ fontFamily: "'Kelson Sans BG', sans-serif" }}>UP</span>
            <span style={{ fontFamily: "'Kelson Sans BG', sans-serif", color: 'transparent', WebkitTextStroke: '1.5px hsl(354 100% 87%)' }}>2</span>
            <span style={{ fontFamily: "'Kelson Sans BG', sans-serif" }}>DATE</span>
          </>,
        ]}
        tagline="This agency is hot, fr."
        image={up2dateImg}
        noOverlay
      />

      {/* Divider — hero → lead magnet */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, hsl(36 21% 95% / 0.1) 50%, transparent)', margin: 'clamp(2.5rem, 6vw, 5rem) 0' }} />

      {/* Lead Magnet Bento */}
      <LeadMagnet />

      {/* Divider — lead magnet → blog */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, hsl(36 21% 95% / 0.1) 50%, transparent)', margin: 'clamp(2.5rem, 6vw, 5rem) 0' }} />

      {/* Blog Bento */}
      <BlogSection />

      <YesCTA />
      <Footer />
    </div>
  );
};

export default About;
