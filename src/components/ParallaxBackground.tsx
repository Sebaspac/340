import React from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  opacity?: number;
  blur?: boolean;
  speed?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl,
  opacity = 0.1,
  blur = false,
  speed = 0.25,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const offset = rect.top * speed;
            ref.current.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={ref}
        className={`absolute inset-[-50%] bg-cover bg-center ${blur ? 'blur-sm' : ''}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity,
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
    </div>
  );
};

export default ParallaxBackground;
