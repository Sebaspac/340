import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Phone, Camera, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import SplitHeading from '@/components/SplitHeading';
import { useIsMobile } from '@/hooks/use-mobile';
import ctaWomen from '@/assets/cta-women.jpg';
import contactSofa from '@/assets/contact-sofa.jpg';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const services = [
  'Social Media Strategy',
  'Social Media Management',
  '1:1 Coaching',
  'Content & Copywriting',
  'Workshops',
  'Not sure yet',
];

const faqs = [
  {
    q: 'How long until we see results?',
    a: "Organic growth takes time, but you'll start noticing shifts in engagement within the first few months. Paid campaigns move faster, often within weeks.",
  },
  {
    q: 'What do we as a client need to provide?',
    a: "We'll send you an onboarding questionnaire before we kick things off. From there, we'll need access to your social media accounts and any brand assets you already have — think logos, fonts, brand colors, existing content. Don't have everything? No problem. We'll help you figure out what's missing.",
  },
  {
    q: 'Do you also create the visuals / imagery?',
    a: "Yes. We design graphics and templates, and handle basic video editing. The one thing we'll need from you: the raw images and footage. You know your brand best — we'll make it look the part.",
  },
  {
    q: 'In which languages do you work?',
    a: 'English, Dutch, German, and Spanish. Pick yours.',
  },
];

const pricingFaqs = [
  {
    q: 'Is there a minimum term?',
    a: "For social media management, we work with a minimum of 3 months. Social media takes time to build momentum, and we're not in the business of quick fixes. All other services have no minimum term.",
  },
  {
    q: 'What does onboarding look like?',
    a: 'We will have an introductory call with you to better understand your challenges and needs. Depending on which service we go through our questionnaire together or offer a flexible option to simply share it with you.',
  },
  {
    q: 'What happens if we want to cancel?',
    a: "For social media management, 30 days written notice is all we need. For one-off services like strategy, there's a 72-hour window after signing if you change your mind.",
  },
  {
    q: 'Do you guarantee results?',
    a: "Honestly? No, and we won't pretend otherwise. No one can guarantee specific numbers on social media. What we do guarantee is a strategy built to perform, continuous optimization based on real data, and full transparency throughout.",
  },
];

/* ─── FAQ Accordion item ─────────────────────────────────────────────────── */

const FaqItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderTop: '1px solid hsl(36 21% 95% / 0.08)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4"
        style={{ padding: 'clamp(1rem, 2vw, 1.4rem) 0' }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "'Kelson Sans BG', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)',
            letterSpacing: '0.01em',
            lineHeight: 1.35,
            color: open ? 'hsl(36 21% 95%)' : 'hsl(36 21% 95% / 0.75)',
            transition: 'color 0.3s ease',
            flex: 1,
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ flexShrink: 0, marginTop: 2 }}
        >
          <Plus size={16} color="hsl(354 100% 87%)" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(0.78rem, 0.95vw, 0.88rem)',
                lineHeight: 1.75,
                color: 'hsl(36 21% 95% / 0.55)',
                paddingBottom: 'clamp(1rem, 1.5vw, 1.3rem)',
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main component ─────────────────────────────────────────────────────── */

const ContactFAQ: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const prefillName = (location.state as { name?: string } | null)?.name ?? '';

  const [form, setForm] = useState({
    name: prefillName,
    igHandle: '',
    email: '',
    interest: '',
    message: '',
    newsletter: false,
  });

  const [founderSrc, setFounderSrc] = useState<string>(contactSofa);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFounderSrc(url);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch shortly.");
    setForm({ name: '', igHandle: '', email: '', interest: '', message: '', newsletter: false });
  };

  useEffect(() => {
    if (prefillName) {
      const el = document.getElementById('contacto');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  /* Shared input style — bump to 16px on mobile to avoid iOS zoom */
  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid hsl(36 21% 95% / 0.12)',
    fontFamily: "'Poppins', sans-serif",
    fontSize: isMobile ? '16px' : 'clamp(0.82rem, 1vw, 0.9rem)',
    color: 'hsl(36 21% 95%)',
    padding: isMobile ? '0.9rem 0' : '1rem 0',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  return (
    <div style={{ background: 'hsl(0 0% 13%)', color: 'hsl(36 21% 95%)' }}>
      <TopNav />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                               */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          height: '88vh',
          background: 'hsl(0 0% 5%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Background photo — raw, no overlays */}
        <img
          src={contactSofa}
          alt=""
          aria-hidden
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 40%',
          }}
        />
        {/* Minimal bottom fade so text stays legible */}
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, transparent 0%, transparent 55%, hsl(0 0% 5% / 0.55) 82%, hsl(0 0% 5%) 100%)',
          }}
        />

        {/* Large 340 — right side, big watermark */}
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            right: '-2vw',
            transform: 'translateY(-50%)',
            fontFamily: "'Kelson Sans BG', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(14rem, 36vw, 28rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: '1.5px hsl(354 100% 87% / 0.14)',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          340
        </motion.span>

        {/* Content — bottom-anchored like all other PageHero pages */}
        <div
          style={{
            position: 'relative', zIndex: 10,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
            gap: 0,
            paddingBottom: '2rem',
            paddingLeft: '1.5rem', paddingRight: '1.5rem',
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'hsl(354 100% 87%)',
              marginBottom: '1rem',
            }}
          >
            GET IN TOUCH
          </motion.p>

          {/* Headline — one line */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Kelson Sans BG', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.6rem, 9vw, 6.5rem)',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: 'hsl(36 21% 95%)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            LET'S{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px hsl(354 100% 87%)' }}>TALK.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1rem, 4vw, 2rem)',
              color: 'hsl(36 21% 95% / 0.78)',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
              marginTop: '1.2rem',
            }}
          >
            This agency is hot, fr.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: '2.5rem' }}
          >
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.46rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'hsl(36 21% 95% / 0.22)' }}>SCROLL</span>
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, hsl(36 21% 95% / 0.5), transparent)', transformOrigin: 'top' }}
            />
          </motion.div>
        </div>

      </section>


      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* CONTACT FORM — visual, founders photo left, form right            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        id="contacto"
        style={{ background: 'hsl(0 0% 13%)', borderBottom: '1px solid hsl(36 21% 95% / 0.06)' }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ height: isMobile ? 'auto' : 'calc(100vh - 72px)', overflow: isMobile ? 'visible' : 'hidden' }}
        >
          {/* ── Left: Founders photo ── */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: isMobile ? 'clamp(260px, 44vh, 380px)' : '100%',
            }}
          >
            <img
              src={founderSrc}
              alt="340 Consultancy founders"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 20%',
              }}
            />

            {/* Gradient veil */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, hsl(0 0% 8% / 0.72) 0%, transparent 55%)',
              }}
            />

            {/* Contact links — bottom left, subtle */}
            <div
              style={{
                position: 'absolute',
                bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                left: 'clamp(1.5rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {[
                { Icon: Mail, label: 'info@340consultancy.com', href: 'mailto:info@340consultancy.com' },
                { Icon: Phone, label: '+31 6 13866189', href: 'tel:+31613866189' },
                { Icon: Instagram, label: '@340consultancy', href: 'https://instagram.com/340consultancy' },
                { Icon: Linkedin, label: '340 Consultancy', href: 'https://linkedin.com/company/340consultancy' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    opacity: 0.65,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.65'}
                >
                  <Icon size={11} color="hsl(354 100% 87%)" />
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'hsl(36 21% 95%)',
                  }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* ── Right: Form ── */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.8rem) clamp(1.5rem, 4vw, 4rem)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              borderLeft: '1px solid hsl(36 21% 95% / 0.06)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'hsl(354 100% 87%)',
                marginBottom: '0.6rem',
              }}
            >
              SCHREIB UNS
            </p>

            <SplitHeading
              line1="Send us"
              line2="a message."
              size="clamp(1.6rem, 2.8vw, 2.4rem)"
              className="mb-4"
            />

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0 2rem' }}>
                <div style={{ marginBottom: '0.9rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'hsl(36 21% 95% / 0.3)',
                      marginBottom: 8,
                    }}
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Linda Müller"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'hsl(354 100% 87% / 0.6)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'hsl(36 21% 95% / 0.12)')}
                  />
                </div>
                <div style={{ marginBottom: '0.9rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'hsl(36 21% 95% / 0.3)',
                      marginBottom: 8,
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@brand.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'hsl(354 100% 87% / 0.6)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'hsl(36 21% 95% / 0.12)')}
                  />
                </div>
              </div>

              {/* Instagram */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'hsl(36 21% 95% / 0.3)',
                    marginBottom: 8,
                  }}
                >
                  INSTAGRAM HANDLE <span style={{ opacity: 0.45 }}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="@yourbrand"
                  value={form.igHandle}
                  onChange={e => setForm({ ...form, igHandle: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'hsl(354 100% 87% / 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'hsl(36 21% 95% / 0.12)')}
                />
              </div>

              {/* Interest */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'hsl(36 21% 95% / 0.3)',
                    marginBottom: 8,
                  }}
                >
                  ICH BIN INTERESSIERT AN
                </label>
                <select
                  required
                  value={form.interest}
                  onChange={e => setForm({ ...form, interest: e.target.value })}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    color: form.interest ? 'hsl(36 21% 95%)' : 'hsl(36 21% 95% / 0.3)',
                    cursor: 'pointer',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'hsl(354 100% 87% / 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'hsl(36 21% 95% / 0.12)')}
                >
                  <option value="" style={{ background: 'hsl(0 0% 10%)', color: 'hsl(36 21% 95% / 0.4)' }}>
                    Wählen…
                  </option>
                  {services.map(s => (
                    <option key={s} value={s} style={{ background: 'hsl(0 0% 10%)', color: 'hsl(36 21% 95%)' }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'hsl(36 21% 95% / 0.3)',
                    marginBottom: 8,
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your brand and what you want to achieve…"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                    paddingTop: '0.8rem',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'hsl(354 100% 87% / 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'hsl(36 21% 95% / 0.12)')}
                />
              </div>

              {/* Newsletter opt-in */}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.7rem',
                  marginBottom: '1.4rem',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                {/* Custom checkbox */}
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '1px',
                    width: 14,
                    height: 14,
                    border: `1px solid ${form.newsletter ? 'hsl(354 100% 87%)' : 'hsl(36 21% 95% / 0.2)'}`,
                    borderRadius: 3,
                    background: form.newsletter ? 'hsl(354 100% 87%)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                >
                  {form.newsletter && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="hsl(0 0% 8%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={e => setForm({ ...form, newsletter: e.target.checked })}
                  style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                />
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.65rem',
                  lineHeight: 1.6,
                  color: 'hsl(36 21% 95% / 0.38)',
                  letterSpacing: '0.01em',
                }}>
                  I'd like to subscribe to the <span style={{ color: 'hsl(36 21% 95% / 0.6)' }}>340 Newsletter</span> — no spam, just real insights and fresh social strategies.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1.1rem 1.4rem',
                  background: 'hsl(354 100% 87%)',
                  border: 'none',
                  borderRadius: 999,
                  fontFamily: "'Kelson Sans BG', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'hsl(89 71% 15%)',
                  cursor: 'pointer',
                  transition: 'background 0.32s ease, color 0.32s ease, box-shadow 0.32s ease',
                  boxShadow: '0 4px 24px -4px hsl(354 100% 87% / 0.4)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = 'hsl(89 71% 15%)';
                  t.style.color = 'hsl(354 100% 87%)';
                  t.style.boxShadow = '0 4px 24px -4px hsl(89 71% 15% / 0.5)';
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = 'hsl(354 100% 87%)';
                  t.style.color = 'hsl(89 71% 15%)';
                  t.style.boxShadow = '0 4px 24px -4px hsl(354 100% 87% / 0.4)';
                }}
              >
                SEND MESSAGE →
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* FAQ — two columns side by side                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'hsl(0 0% 13%)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
          borderTop: 'none',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 'clamp(3rem, 6vw, 6rem)', maxWidth: 1280, margin: '0 auto' }}
        >
          {/* ── Left: You Asked ── */}
          <div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'hsl(354 100% 87%)',
                marginBottom: '1rem',
              }}
            >
              YOU ASKED
            </p>

            <SplitHeading
              line1="Questions"
              line2="Answered."
              size="clamp(1.8rem, 3vw, 2.6rem)"
              className="mb-8"
            />

            <div style={{ borderBottom: '1px solid hsl(36 21% 95% / 0.08)' }}>
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right: Pricing FAQ ── */}
          <div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'hsl(354 100% 87%)',
                marginBottom: '1rem',
              }}
            >
              PRICING & COMMITMENT
            </p>

            <SplitHeading
              line1="Pricing"
              line2="FAQ."
              size="clamp(1.8rem, 3vw, 2.6rem)"
              className="mb-8"
            />

            <div style={{ borderBottom: '1px solid hsl(36 21% 95% / 0.08)' }}>
              {pricingFaqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactFAQ;
