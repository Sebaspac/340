import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface ScrollGalleryProps {
  images: string[];
}

const ScrollGallery: React.FC<ScrollGalleryProps> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const cursorX = useSpring(rawX, { stiffness: 220, damping: 24, mass: 0.4 });
  const cursorY = useSpring(rawY, { stiffness: 220, damping: 24, mass: 0.4 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    rawX.set(e.clientX);
    rawY.set(e.clientY);
    const rect = containerRef.current!.getBoundingClientRect();
    setGoRight(e.clientX - rect.left >= rect.width / 2);
  }, [rawX, rawY]);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const onClick = useCallback(() => {
    if (!trackRef.current) return;
    const amount = window.innerWidth * 0.82;
    trackRef.current.scrollBy({ left: goRight ? amount : -amount, behavior: 'smooth' });
  }, [goRight]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', background: '#000', cursor: 'none', overflow: 'hidden' }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={onClick}
    >
      <style>{`
        .sg-track::-webkit-scrollbar { display: none; }
        .sg-track { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="sg-track"
        onScroll={onScroll}
        style={{ display: 'flex', height: '100%', overflowX: 'auto', overflowY: 'hidden', gap: 3 }}
      >
        {images.map((src, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: 'clamp(300px, 75vw, 1080px)', height: '100%' }}>
            <img
              src={src}
              alt=""
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none' }}
            />
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          style={{ height: '100%', background: 'hsl(354 100% 87%)', transformOrigin: 'left', scaleX: progress }}
        />
      </div>

      {/* Image counter */}
      <div style={{
        position: 'absolute', bottom: 16, right: 24,
        fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.28)',
        pointerEvents: 'none',
      }}>
        {images.length} visuals
      </div>

      {/* Cursor */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0,
          x: cursorX, y: cursorY,
          translateX: '-50%', translateY: '-50%',
          pointerEvents: 'none', zIndex: 9999,
        }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
        transition={{ opacity: { duration: 0.12 }, scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
      >
        <div style={{
          width: 88, height: 88, borderRadius: '50%', background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={goRight ? 'right' : 'left'}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '2.6rem', lineHeight: 1, display: 'block', userSelect: 'none' }}
            >
              {goRight ? '👉' : '👈'}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollGallery;
