import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  posts: string[]; // Instagram post permalink URLs
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { instgrm?: any } }

const PINK = 'hsl(354 100% 87%)';
const OFFWHITE = 'hsl(36 21% 95%)';

const InstagramEmbeds: React.FC<Props> = ({ posts }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Inject Instagram embed.js once globally
  useEffect(() => {
    if (document.querySelector('script[data-ig-embed]')) return;
    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    s.setAttribute('data-ig-embed', 'true');
    document.body.appendChild(s);
  }, []);

  // Re-process embeds at staggered intervals so script-load races resolve
  useEffect(() => {
    const tries = [200, 600, 1500, 3000];
    const timers = tries.map((t) =>
      setTimeout(() => window.instgrm?.Embeds?.processEmbeds(), t)
    );
    return () => timers.forEach(clearTimeout);
  }, [posts]);

  // Vertical wheel → horizontal scroll
  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
    }
  }, []);

  // Track scroll: progress + nearest-card index
  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);

    // Determine the card closest to the visual center
    const center = el.scrollLeft + el.clientWidth / 2;
    const cards = el.querySelectorAll<HTMLElement>('[data-card-index]');
    let nearest = 0;
    let nearestDist = Infinity;
    cards.forEach((c) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = parseInt(c.dataset.cardIndex || '0', 10);
      }
    });
    setActiveIndex(nearest);
  }, []);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card-index]');
    const step = card ? card.offsetWidth + 32 /* gap */ : el.clientWidth * 0.6;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const total = posts.length;

  return (
    <div className="relative h-full w-full overflow-hidden bg-foreground">
      <style>{`
        .ig-track::-webkit-scrollbar { display: none; }
        .ig-track { scrollbar-width: none; -ms-overflow-style: none; }
        /* Strip Instagram embed's harsh white surround so cards sit on our dark canvas */
        .ig-track .instagram-media {
          background: ${OFFWHITE} !important;
          border: 0 !important;
          border-radius: 2px !important;
          box-shadow: none !important;
          margin: 0 !important;
        }
      `}</style>

      {/* ── Atmospheric background grain ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Track ── */}
      <div
        ref={trackRef}
        className="ig-track flex h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory items-center"
        style={{
          gap: 32,
          padding: '36px clamp(48px, 8vw, 120px) 80px',
          scrollSnapType: 'x mandatory',
          // Soft fade-in/-out at horizontal edges
          maskImage:
            'linear-gradient(to right, transparent 0px, #000 64px, #000 calc(100% - 64px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0px, #000 64px, #000 calc(100% - 64px), transparent 100%)',
        }}
        onScroll={onScroll}
        onWheel={onWheel}
      >
        {posts.map((url, i) => {
          const isActive = activeIndex === i;
          return (
            <motion.div
              key={url}
              data-card-index={i}
              className="snap-center shrink-0 relative flex flex-col"
              style={{ width: 'clamp(240px, 22vw, 300px)', height: '100%', justifyContent: 'center' }}
              animate={{
                scale: isActive ? 1 : 0.94,
                opacity: isActive ? 1 : 0.55,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Embed frame */}
              <div
                style={{
                  position: 'relative',
                  background: OFFWHITE,
                  borderRadius: 2,
                  boxShadow: isActive
                    ? '0 24px 60px -12px rgba(0,0,0,0.55), 0 0 0 1px hsl(354 100% 87% / 0.12)'
                    : '0 12px 36px -8px rgba(0,0,0,0.4)',
                  transition: 'box-shadow 0.55s ease',
                  overflow: 'hidden',
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  data-instgrm-captioned
                  style={{
                    margin: 0,
                    maxWidth: '100%',
                    minWidth: 200,
                    width: '100%',
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Bottom control cluster ── */}
      <div
        className="absolute z-10 flex items-center"
        style={{
          left: 'clamp(20px, 5vw, 56px)',
          right: 'clamp(20px, 5vw, 56px)',
          bottom: 22,
          gap: 24,
        }}
      >
        {/* Counter */}
        <div
          style={{
            fontFamily: "'Kelson Sans BG', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.32em',
            color: OFFWHITE,
          }}
        >
          <span style={{ color: PINK }}>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span style={{ color: 'hsl(36 21% 95% / 0.25)', margin: '0 10px' }}>/</span>
          <span style={{ color: 'hsl(36 21% 95% / 0.5)' }}>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Progress rail */}
        <div
          className="flex-1 relative"
          style={{ height: 1, background: 'hsl(36 21% 95% / 0.1)' }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: `${progress * 100}%`,
              background: PINK,
              transition: 'width 0.2s linear',
            }}
          />
          {/* Head dot */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `calc(${progress * 100}% - 3px)`,
              width: 6, height: 6,
              borderRadius: 9999,
              background: PINK,
              transform: 'translateY(-50%)',
              boxShadow: '0 0 12px hsl(354 100% 87% / 0.6)',
              transition: 'left 0.2s linear',
            }}
          />
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous post"
            onClick={() => scrollByCards(-1)}
            className="group flex items-center justify-center transition-transform"
            style={{
              width: 38, height: 38, borderRadius: 9999,
              background: 'transparent',
              border: '1px solid hsl(36 21% 95% / 0.18)',
              color: OFFWHITE,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'hsl(354 100% 87% / 0.12)';
              e.currentTarget.style.borderColor = 'hsl(354 100% 87% / 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'hsl(36 21% 95% / 0.18)';
            }}
          >
            <ArrowLeft size={14} />
          </button>
          <button
            aria-label="Next post"
            onClick={() => scrollByCards(1)}
            className="group flex items-center justify-center transition-transform"
            style={{
              width: 38, height: 38, borderRadius: 9999,
              background: 'transparent',
              border: '1px solid hsl(36 21% 95% / 0.18)',
              color: OFFWHITE,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'hsl(354 100% 87% / 0.12)';
              e.currentTarget.style.borderColor = 'hsl(354 100% 87% / 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'hsl(36 21% 95% / 0.18)';
            }}
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramEmbeds;
