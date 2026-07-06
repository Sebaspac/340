import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/* ─── Types ───────────────────────────────────────────────── */

export interface PackageTier {
  name: string;
  price: string;
  tag: string;
  highlighted?: boolean;
  features: string[];
}

export interface ServiceDrawerData {
  key: string;
  label: string;
  eyebrow: string;
  img: string;
  tagline: string;
  price: string;
  priceNote?: string;
  body: string;
  facts: { label: string; value: string }[];
  includes?: string[];
  packages?: PackageTier[];
}

/* ─── Component ───────────────────────────────────────────── */

interface Props {
  service: ServiceDrawerData | null;
  onClose: () => void;
}

const modalSpring = { type: 'spring' as const, stiffness: 260, damping: 30 };

const ServiceDrawer: React.FC<Props> = ({ service, onClose }) => {
  const reduced = useReducedMotion();
  const [ctaHovered, setCtaHovered] = useState(false);

  const isCustomPrice =
    !service ||
    service.price === 'Custom' ||
    service.price === 'Upon request';

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [service]);

  /* Escape key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.26 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
          onClick={onClose}
        >
          {/* ── Modal ── */}
          <motion.div
            key="modal"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.97 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
            transition={reduced ? { duration: 0.18 } : modalSpring}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col overflow-hidden"
            style={{
              width: 'min(820px, 95vw)',
              maxHeight: '92vh',
              background: 'hsl(36 21% 95%)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.22)',
              borderRadius: 20,
            }}
          >

            {/* ── Image Header ── */}
            <div
              className="relative flex-shrink-0 overflow-hidden"
              style={{ height: '24vh', minHeight: 165 }}
            >
              <motion.img
                src={service.img}
                alt={service.label}
                className="w-full h-full object-cover"
                initial={{ scale: 1.07 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(0 0% 5%) 0%, transparent 52%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 42%)' }} />

              {/* Close — top-left */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 left-4 flex items-center justify-center focus:outline-none"
                style={{
                  width: 36, height: 36,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  cursor: 'pointer', borderRadius: 10,
                  transition: 'opacity 0.18s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <X size={14} color="white" />
              </button>

              {/* Eyebrow — top-right */}
              <p
                className="absolute top-4 right-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.56rem', letterSpacing: '0.26em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)',
                  background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(8px)',
                  padding: '5px 12px', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 999,
                }}
              >
                {service.eyebrow}
              </p>

              {/* Title — bottom-left */}
              <motion.p
                className="absolute bottom-5 left-6 text-white"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                style={{
                  fontFamily: "'Kelson Sans BG', sans-serif",
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                  lineHeight: 1.0, whiteSpace: 'pre-line',
                }}
              >
                {service.label}
              </motion.p>
            </div>

            {/* ── Facts Strip ── */}
            <div
              className="flex-shrink-0 grid grid-cols-4"
              style={{ background: 'hsl(0 0% 10%)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              {service.facts.map((f, i) => (
                <div
                  key={f.label}
                  className="px-3 py-4 text-center"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                >
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.48rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'hsl(354 100% 87%)', marginBottom: 5 }}>
                    {f.label}
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.82)', textTransform: 'uppercase' }}>
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Scrollable content ── */}
            <div className="flex-1 overflow-y-auto" style={{ padding: 'clamp(1.4rem, 3vw, 2rem)' }}>

              {/* Body paragraph */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.83rem', lineHeight: 1.85,
                  color: 'hsl(0 0% 13% / 0.56)',
                  marginBottom: '1.75rem', maxWidth: '62ch',
                }}
              >
                {service.body}
              </p>

              {/* ── Service Details Card ── */}
              <div
                style={{
                  background: 'white',
                  border: '1px solid hsl(0 0% 13% / 0.08)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}
              >
                {/* Card header: name + price */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '1.5rem 1.5rem 1.2rem',
                    gap: '1.5rem',
                  }}
                >
                  {/* Left — title + tagline */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Kelson Sans BG', sans-serif",
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                        color: 'hsl(0 0% 13%)',
                        lineHeight: 1.05, whiteSpace: 'pre-line',
                        marginBottom: '0.45rem',
                      }}
                    >
                      {service.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.72rem', lineHeight: 1.6,
                        color: 'hsl(0 0% 13% / 0.44)',
                        maxWidth: '34ch',
                      }}
                    >
                      {service.tagline}
                    </p>
                  </div>

                  {/* Right — price */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    {!isCustomPrice ? (
                      <>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.46rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'hsl(0 0% 13% / 0.3)', marginBottom: '0.2rem' }}>
                          STARTING FROM
                        </p>
                        <p style={{ fontFamily: "'Kelson Sans BG', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1, color: 'hsl(354 100% 87%)' }}>
                          {service.price}
                        </p>
                        {service.priceNote && (
                          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.46rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(0 0% 13% / 0.3)', marginTop: '0.2rem' }}>
                            {service.priceNote}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.46rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'hsl(0 0% 13% / 0.3)', marginBottom: '0.3rem' }}>
                          PRICING
                        </p>
                        <p style={{ fontFamily: "'Kelson Sans BG', sans-serif", fontSize: '1.4rem', lineHeight: 1, color: 'hsl(354 100% 87%)' }}>
                          Tailored
                        </p>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.46rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(0 0% 13% / 0.3)', marginTop: '0.2rem' }}>
                          to your needs
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'hsl(0 0% 13% / 0.07)', margin: '0 1.5rem' }} />

                {/* Checklist */}
                {service.includes && (
                  <ul
                    style={{
                      padding: '1.25rem 1.5rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                      gap: '0.55rem 2.5rem',
                    }}
                  >
                    {service.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.55rem',
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.78rem', lineHeight: 1.55,
                          color: 'hsl(0 0% 13% / 0.68)',
                        }}
                      >
                        <Check
                          size={13}
                          style={{ color: 'hsl(354 100% 87%)', flexShrink: 0, marginTop: 2 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Divider */}
                <div style={{ height: 1, background: 'hsl(0 0% 13% / 0.07)', margin: '0 1.5rem' }} />

                {/* CTA row */}
                <div
                  style={{
                    padding: '1.2rem 1.5rem',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem',
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={onClose}
                    onMouseEnter={() => setCtaHovered(true)}
                    onMouseLeave={() => setCtaHovered(false)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '12px 28px',
                      fontFamily: "'Poppins', sans-serif", fontWeight: 700,
                      fontSize: '0.68rem', letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: ctaHovered ? 'hsl(354 100% 87%)' : 'hsl(89 71% 15%)',
                      background: ctaHovered ? 'hsl(89 71% 15%)' : 'hsl(354 100% 87%)',
                      border: 'none',
                      textDecoration: 'none',
                      transition: 'background 0.32s ease, color 0.32s ease',
                      borderRadius: 999,
                      boxShadow: ctaHovered
                        ? '0 4px 18px -4px hsl(89 71% 15% / 0.35)'
                        : '0 4px 14px -4px hsl(354 100% 87% / 0.4)',
                    }}
                  >
                    BOOK A FREE CALL <ArrowUpRight size={13} />
                  </Link>

                  <button
                    onClick={onClose}
                    style={{
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'hsl(0 0% 13% / 0.28)', padding: '4px 0',
                      transition: 'color 0.18s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0 0% 13% / 0.55)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0 0% 13% / 0.28)')}
                  >
                    CLOSE
                  </button>
                </div>
              </div>

              {/* Language note */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.55rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(0 0% 13% / 0.26)',
                  paddingBottom: '2rem',
                }}
              >
                Available in EN · NL · DE · ES
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDrawer;
