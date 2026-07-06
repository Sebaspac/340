import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'site_authenticated';

const PasswordGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = import.meta.env.VITE_SITE_PASSWORD as string | undefined;
    if (correct && password === correct) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 2500);
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'hsl(0 0% 5%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background "340" watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Kelson Sans BG', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(22rem, 55vw, 62rem)',
          lineHeight: 0.8,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1.5px hsl(354 100% 87% / 0.06)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        340
      </div>

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 400, padding: '0 2rem', textAlign: 'center' }}
      >
        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Kelson Sans BG', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: 'hsl(36 21% 95%)',
            marginBottom: '0.25rem',
          }}
        >
          340
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{
            fontFamily: "'Montserrat', serif",
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'hsl(354 100% 87%)',
            letterSpacing: '0.04em',
            marginBottom: '3rem',
          }}
        >
          Social Media Consultancy
        </motion.p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, hsl(36 21% 95% / 0.12) 50%, transparent)',
            marginBottom: '2.5rem',
          }}
        />

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '0.55rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'hsl(36 21% 95% / 0.3)',
            marginBottom: '1.5rem',
          }}
        >
          PRIVATE PREVIEW
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.55 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Passwort eingeben…"
            autoFocus
            style={{
              width: '100%',
              background: 'transparent',
              border: `1px solid ${error ? 'hsl(354 100% 87% / 0.6)' : 'hsl(36 21% 95% / 0.15)'}`,
              padding: '0.9rem 1.4rem',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              color: 'hsl(36 21% 95%)',
              outline: 'none',
              borderRadius: 999,
              textAlign: 'center',
              letterSpacing: '0.1em',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = 'hsl(354 100% 87% / 0.5)'; }}
            onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = 'hsl(36 21% 95% / 0.15)'; }}
          />

          <AnimatePresence>
            {error && (
              <motion.p
                key="err"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.7rem',
                  color: 'hsl(354 100% 87%)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Falsches Passwort
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            style={{
              width: '100%',
              background: 'hsl(354 100% 87%)',
              color: 'hsl(0 0% 8%)',
              fontFamily: "'Kelson Sans BG', sans-serif",
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              padding: '1rem 1.4rem',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
              boxShadow: '0 4px 28px -4px hsl(354 100% 87% / 0.35)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            ZUGANG →
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default PasswordGate;
