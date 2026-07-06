import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitHeading from '@/components/SplitHeading';
import InstagramEmbeds from '@/components/InstagramEmbeds';
import { useIsMobile } from '@/hooks/use-mobile';
import sea1 from '@/assets/sea-1.jpg';
import sea2 from '@/assets/sea-2.jpg';
import sea3 from '@/assets/sea-3.jpg';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  number: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'Blog post — TBD',
    excerpt: 'Topic to be confirmed. Short, sharp, strategy-led writing from the 340 team.',
    date: 'Coming soon',
    image: sea1,
    number: '01',
  },
  {
    id: 'blog-2',
    title: 'Blog post — TBD',
    excerpt: "Topic to be confirmed. We're kicking off with three short blogs.",
    date: 'Coming soon',
    image: sea2,
    number: '02',
  },
  {
    id: 'blog-3',
    title: 'Blog post — TBD',
    excerpt: 'Topic to be confirmed. Subscribe-free reads — straight to the point.',
    date: 'Coming soon',
    image: sea3,
    number: '03',
  },
];

// Latest posts from @340consultancy
const IG_POST_URLS = [
  'https://www.instagram.com/p/DUQdunhDFsE/',
  'https://www.instagram.com/p/DUaXkP0jNYR/',
  'https://www.instagram.com/p/DUIb6GIDB7b/',
  'https://www.instagram.com/p/DT71Q4YjAed/',
  'https://www.instagram.com/p/DTs8Tq1jCGS/',
  'https://www.instagram.com/p/DQCfrAljKla/',
  'https://www.instagram.com/p/DOYrFZvDBNB/',
  'https://www.instagram.com/p/DOWJNQKjO43/',
  'https://www.instagram.com/p/DNs9X6fWGyb/',
  'https://www.instagram.com/p/DNTW6r3MU_8/',
  'https://www.instagram.com/p/DMBIz8LsPm8/',
  'https://www.instagram.com/p/DLPwIVZMn-5/',
  'https://www.instagram.com/p/DLKSe8TMbx6/',
  'https://www.instagram.com/p/DK98ahwMy_c/',
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/* Horizontal 3-column accordion                                              */
/* ────────────────────────────────────────────────────────────────────────── */

const BlogAccordion: React.FC<{ items: BlogArticle[] }> = ({ items }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);
  const [readLinkHovered, setReadLinkHovered] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // ── Mobile: stack the cards full-width (no hover-to-expand on touch). Each
  //    card shows date + title + excerpt directly so nothing is hidden. ──
  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        {items.map((article, i) => {
          const isComingSoon = article.date === 'Coming soon';
          return (
            <button
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              className="relative w-full overflow-hidden text-left"
              style={{
                minHeight: 'clamp(190px, 30vh, 240px)',
                borderBottom: i < items.length - 1 ? '1px solid hsl(36 21% 95% / 0.08)' : 'none',
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none"
                style={{ filter: 'brightness(0.46) saturate(0.85)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, hsl(0 0% 0% / 0.85) 0%, hsl(0 0% 0% / 0.25) 50%, transparent 85%)' }}
              />
              <span
                className="absolute z-10 select-none"
                style={{ top: 18, right: 18, fontFamily: "'Kelson Sans BG', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.28em', color: 'hsl(36 21% 95% / 0.4)' }}
              >
                {article.number}
              </span>
              <div className="absolute z-10 flex flex-col" style={{ left: 'clamp(18px, 5vw, 28px)', right: 'clamp(18px, 5vw, 28px)', bottom: 'clamp(18px, 4vw, 28px)' }}>
                <p className="text-micro mb-2" style={{ color: 'hsl(354 100% 87%)', letterSpacing: '0.28em', fontFamily: "'Poppins', sans-serif", fontSize: 10 }}>
                  {isComingSoon ? 'COMING SOON' : article.date}
                </p>
                <h3 style={{ fontFamily: "'Kelson Sans BG', sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'hsl(36 21% 95%)', textTransform: 'uppercase', margin: 0 }}>
                  {article.title}
                </h3>
                <p style={{ marginTop: 8, fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', lineHeight: 1.6, color: 'hsl(36 21% 95% / 0.62)' }}>
                  {article.excerpt}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex h-full w-full" style={{ minHeight: 'inherit' }}>
      {items.map((article, i) => {
        const isHovered = hovered === i;
        const flexGrow = hovered === null ? 1 : isHovered ? 3 : 1;
        const isComingSoon = article.date === 'Coming soon';

        return (
          <button
            key={article.id}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(`/blog/${article.id}`)}
            className="relative h-full overflow-hidden text-left group focus:outline-none"
            style={{
              flex: `${flexGrow} 1 0`,
              transition: 'flex-grow 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              borderRight: i < items.length - 1 ? '1px solid hsl(36 21% 95% / 0.08)' : 'none',
              minWidth: 0,
            }}
          >
            {/* Background image */}
            <img
              src={article.image}
              alt={article.title}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover select-none"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
                filter: isHovered
                  ? 'brightness(0.58) saturate(1.08)'
                  : 'brightness(0.42) saturate(0.8)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease',
              }}
            />

            {/* Gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, hsl(0 0% 0% / 0.85) 0%, hsl(0 0% 0% / 0.25) 45%, transparent 80%)',
              }}
            />

            {/* Pink left border strip */}
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: 2,
                background: 'hsl(354 100% 87% / 0.7)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />

            {/* Number — top right */}
            <span
              className="absolute z-10 select-none"
              style={{
                top: 20,
                right: 20,
                fontFamily: "'Kelson Sans BG', sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.28em',
                color: 'hsl(36 21% 95% / 0.35)',
              }}
            >
              {article.number}
            </span>

            {/* Coming soon watermark monogram */}
            {isComingSoon && (
              <span
                className="absolute z-10 select-none pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: "'Kelson Sans BG', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.2rem, 3vw, 2.4rem)',
                  letterSpacing: '0.3em',
                  color: 'transparent',
                  WebkitTextStroke: '1px hsl(354 100% 87%)',
                  opacity: 0.22,
                  whiteSpace: 'nowrap',
                }}
              >
                BALD
              </span>
            )}

            {/* Bottom content */}
            <div
              className="absolute z-10 flex flex-col"
              style={{
                left: 'clamp(18px, 2vw, 28px)',
                right: 'clamp(18px, 2vw, 28px)',
                bottom: 'clamp(20px, 3vw, 32px)',
              }}
            >
              {/* Eyebrow / date — pink */}
              <p
                className="text-micro mb-3"
                style={{
                  color: 'hsl(354 100% 87%)',
                  letterSpacing: '0.28em',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                }}
              >
                {article.date}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Kelson Sans BG', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.6rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                  color: 'hsl(36 21% 95%)',
                  textTransform: 'uppercase',
                }}
              >
                {article.title}
              </h3>

              {/* Horizontal rule below title */}
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid hsl(36 21% 95% / 0.12)',
                  width: '100%',
                  marginTop: 10,
                  marginBottom: 0,
                }}
              />

              {/* Excerpt + Read — only visible on hover (height + opacity) */}
              <div
                style={{
                  maxHeight: isHovered ? 220 : 0,
                  opacity: isHovered ? 1 : 0,
                  overflow: 'hidden',
                  transition:
                    'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
                }}
              >
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.78rem',
                    lineHeight: 1.75,
                    color: 'hsl(36 21% 95% / 0.7)',
                  }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 mt-5"
                  onMouseEnter={() => setReadLinkHovered(i)}
                  onMouseLeave={() => setReadLinkHovered(null)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    color:
                      readLinkHovered === i
                        ? 'hsl(354 100% 87%)'
                        : 'hsl(36 21% 95%)',
                    transition: 'color 0.25s ease',
                  }}
                >
                  READ ARTICLE
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────── */
/* Text side                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

interface TextSideProps {
  eyebrow: string;
  headline: [string, string];
  body: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}

const TextSide: React.FC<TextSideProps> = ({ eyebrow, headline, body, ctaLabel, ctaHref, external }) => {
  const inner = (
    <>
      <span>{ctaLabel}</span>
      <ArrowRight className="w-4 h-4" />
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.85, ease: EASE }}
      className="flex flex-col justify-center bg-foreground overflow-hidden"
      style={{
        padding: 'clamp(1.5rem, 3.5vw, 3rem)',
        borderTop: 'none',
      }}
    >
      <p className="text-micro mb-3 tracking-[0.3em]">{eyebrow}</p>
      <SplitHeading
        line1={headline[0]}
        line2={headline[1]}
        size="clamp(1.6rem, 3.2vw, 2.8rem)"
        className="mb-4"
      />
      <p
        className="leading-[1.7] mb-6"
        style={{
          color: 'hsl(36 21% 95% / 0.65)',
          maxWidth: '32ch',
          fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)',
        }}
      >
        {body}
      </p>
      {external ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="btn-inline text-primary inline-flex items-center gap-2 self-start"
          style={{ color: 'hsl(354 100% 87%)' }}
        >
          {inner}
        </a>
      ) : (
        <Link
          to={ctaHref}
          className="btn-inline text-primary inline-flex items-center gap-2 self-start"
          style={{ color: 'hsl(354 100% 87%)' }}
        >
          {inner}
        </Link>
      )}
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────── */
/* Section                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

const BlogSection: React.FC = () => {
  // Each row exactly 50vh on desktop → both rows fit in one viewport.
  // On mobile, stack each cell with its own min-height for usable content.
  return (
    <section className="bg-foreground" aria-label="Blog and social posts">
      {/* ── Row 1: Blog accordion (left, 65%) | Text (right, 35%) ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-[65fr_35fr] md:h-[50vh]"
      >
        <div className="relative overflow-hidden md:h-full">
          <BlogAccordion items={blogArticles} />
        </div>
        <TextSide
          eyebrow="READ · LEARN"
          headline={['Our', 'Blogs']}
          body="Short, sharp reads on social media strategy, content, and growth — straight from the 340 team."
          ctaLabel="READ ALL ARTICLES"
          ctaHref="/blog"
        />
      </div>

      {/* Row separator */}
      <div style={{ height: 1, background: 'hsl(36 21% 95% / 0.08)' }} />

      {/* ── Row 2: Text (left, 35%) | Instagram embeds (right, 65%) ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-[35fr_65fr] md:h-[50vh]"
      >
        <TextSide
          eyebrow="LIVE · SOCIAL"
          headline={['Social', 'Posts']}
          body="Catch the latest from our feed — every post is a strategic decision, not a coincidence."
          ctaLabel="FOLLOW @340CONSULTANCY"
          ctaHref="https://instagram.com/340consultancy"
          external
        />
        <div className="relative overflow-hidden h-[60vh] md:h-full">
          <InstagramEmbeds posts={IG_POST_URLS} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
