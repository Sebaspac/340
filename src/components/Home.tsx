import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HoverEyes from '@/components/HoverEyes';
import SplitHeading from '@/components/SplitHeading';
import YesCTA from '@/components/YesCTA';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import PhoneCinematicAnimation from '@/components/PhoneCinematicAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import sea1 from '@/assets/sea-1.jpg';
import ipadZebraImg from '@/assets/ipad-zebra.jpg';
import lindaNancyImg from '@/assets/linda-nancy-sofa.jpg';
import heroImg from '@/assets/founders-sofa.jpg';
import howWeWorkImg from '@/assets/how-we-work.jpg';
import ourServicesImg from '@/assets/our-services.jpg';
import sea2 from '@/assets/sea-2.jpg';
import sea3 from '@/assets/sea-3.jpg';
import sea4 from '@/assets/sea-4.jpg';
import identificacionVideo from '@/assets/identificacion-video.mp4';
import ParallaxBackground from '@/components/ParallaxBackground';
import { SplitTransition } from '@/components/ui/animated-scroll';
import ScrollAdventure from '@/components/ScrollAdventure';

const serviceCards = [
  { number: '01', title: 'SOCIAL MEDIA\nSTRATEGY', subtitle: 'Smart strategies and clear insights to help your business grow, reach the right audience and stand out.', originalName: 'From €650', href: '/services#services-bento', img: sea1 },
  { number: '02', title: 'SOCIAL MEDIA\nMANAGEMENT', subtitle: 'Keeping your channels active, engaged and connecting with your audience.', originalName: 'From €800', href: '/services#services-bento', img: sea2 },
  { number: '03', title: '1:1\nCOACHING', subtitle: 'We know social media inside out. Let us help you.', originalName: 'Custom proposal', href: '/services#services-bento', img: sea3 },
  { number: '04', title: 'CONTENT &\nCOPYWRITING', subtitle: 'Words and visuals that tell your story, spark attention and drive action.', originalName: 'Custom proposal', href: '/services#services-bento', img: sea4 },
];

const faqs = [
  { q: 'How long until we see results?', a: "Organic growth takes time, but you'll start noticing shifts in engagement within the first few months. Paid campaigns move faster, often within weeks." },
  { q: 'What do we as a client need to provide?', a: "We'll send you an onboarding questionnaire before we kick things off. From there, we'll need access to your social media accounts and any brand assets you already have — think logos, fonts, brand colors, existing content. Don't have everything? No problem. We'll help you figure out what's missing and how to fill the gaps." },
  { q: 'Do you also create the visuals / imagery?', a: "Yes. We design graphics and templates, and handle basic video editing. The one thing we'll need from you: the raw images and footage. You know your brand best — we'll make it look the part." },
  { q: 'In which languages do you work?', a: 'English, Dutch, German, and Spanish. Pick yours.' },
  { q: 'Is there a minimum term?', a: "For social media management, we work with a minimum of 3 months. Social media takes time to build momentum, and we're not in the business of quick fixes. All other services have no minimum term." },
  { q: 'What does onboarding look like?', a: 'We will have an introductory call with you to better understand your challenges and needs. Depending on which service we go through our questionnaire together or offer a flexible option to simply share the questionnaire with you allowing you to complete it in your own time.' },
  { q: 'What happens if we want to cancel?', a: "We get it — things change. For social media management, 30 days written notice is all we need. For one-off services like strategy, there's a 72-hour window after signing if you change your mind. After that, we'll already be deep in the work and full payment applies." },
  { q: 'Do you also handle ads (paid social)?', a: "Ads advisory is included in our social media strategy. If you want us to fully manage and create your ads (running campaigns and producing the creative) that's available as an add-on." },
  { q: 'Do you guarantee results?', a: "Honestly? No, and we won't pretend otherwise. No one can guarantee specific numbers on social media, and anyone who does should raise a red flag. What we do guarantee is a strategy built to perform, continuous optimization based on real data, and full transparency throughout." },
  { q: "What if we don't like the strategy or content?", a: "We build in a mid-project check-in specifically to avoid this. Halfway through, we sit down together to review the direction and make sure everything is on track before we finalize anything. So by the time you see the finished strategy, it shouldn't come as a surprise — it should feel exactly right." },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div>
      {/* HERO — Brand Burgundy, outlined "340" motif, pink accents */}
      <section id="hero-bg" className="relative w-full overflow-hidden" style={{ height: isMobile ? '92vh' : '88vh', background: 'hsl(0 0% 5%)' }}>
        {/* ── Hero photo ── */}
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 35%', opacity: 0.55 }}
        />
        {/* ── Dark gradient overlay — strong at top, lighter at mid, deep at bottom ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, hsl(0 0% 5% / 0.45) 0%, hsl(0 0% 5% / 0.1) 40%, hsl(0 0% 5% / 0.6) 75%, hsl(0 0% 5%) 100%)',
          }}
        />

        {/* ── Outlined "340" — same size/position as all other pages ── */}
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
            WebkitTextStroke: '1.5px hsl(354 100% 87% / 0.42)',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 1,
          }}
        >
          340
        </motion.span>

        {/* ── Grain overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* ── Bottom: Eyebrow + Headline + Services strip + Scroll indicator ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 text-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 'clamp(1.2rem, 3vh, 2rem)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            gap: 0,
          }}
        >
          {/* Eyebrow — Cormorant italic pink */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            style={{
              fontFamily: "'Montserrat', serif",
              fontStyle: 'italic',
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              color: 'hsl(354 100% 87%)',
              marginBottom: '0.75rem',
            }}
          >
            Social media, but make it strategic.
          </motion.p>

          {/* Headline — same style as PageHero */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Kelson Sans BG', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.3rem, 9vw, 6.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: 'hsl(36 21% 95%)' }}>EVERYONE WANTS</span>
            <span style={{ display: 'block' }}>
              <span style={{ color: 'hsl(36 21% 95%)' }}>MORE </span>
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px hsl(354 100% 87%)' }}>REACH</span>
            </span>
          </motion.h1>

          {/* Hairline separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 'clamp(18rem, 60vw, 52rem)',
              height: 1,
              background: 'linear-gradient(90deg, transparent, hsl(354 100% 87% / 0.2) 50%, transparent)',
              marginTop: 'clamp(0.9rem, 2vh, 1.4rem)',
              marginBottom: 0,
              transformOrigin: 'center',
            }}
          />

          {/* Services strip */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(8px, 2vw, 24px)',
              rowGap: '0.5rem',
              marginTop: 'clamp(0.7rem, 1.5vh, 1rem)',
              flexWrap: 'wrap',
              maxWidth: '100%',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
          >
            {[
              { name: 'Social Media Strategy', slug: 'strategy' },
              { name: 'Social Media Management', slug: 'management' },
              { name: '1:1 Coaching', slug: 'coaching' },
              { name: 'Content & Copywriting', slug: 'content' },
              { name: 'Workshops', slug: 'workshops' },
            ].map(({ name, slug }, i) => (
              <React.Fragment key={i}>
                {i > 0 && !isMobile && (
                  <span style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.12)', display: 'block', flexShrink: 0 }} />
                )}
                <Link
                  to={`/services/${slug}`}
                  style={{ textAlign: 'center', flexShrink: 0, textDecoration: 'none', padding: isMobile ? '4px 2px' : 0 }}
                >
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: isMobile ? '9px' : 'clamp(7px, 0.9vw, 10px)',
                    color: 'hsl(354 100% 87% / 0.85)',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                  }}>{name}</p>
                </Link>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Scroll indicator — in flow, below services strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              marginTop: 'clamp(0.7rem, 1.8vh, 1.2rem)',
            }}
          >
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '0.52rem',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'hsl(36 21% 95% / 0.22)',
            }}>
              SCROLL
            </span>
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 1,
                height: 28,
                background: 'linear-gradient(to bottom, hsl(36 21% 95% / 0.5), transparent)',
                transformOrigin: 'top',
              }}
            />
          </motion.div>
        </div>

      </section>

      {/* 340 KNOWS THE WAY */}
      <SplitTransition
        rightImage={ipadZebraImg}
        rightImagePosition="50% 40%"
        leftContent={
          <div className="max-w-md">
            <p className="text-micro mb-4 tracking-[0.3em]">THE 340 WAY</p>
            <SplitHeading
              line1="340 knows"
              line2="the way."
              size="clamp(2rem, 4.5vw, 3.8rem)"
              className="mb-6"
            />
            <p className="text-sm md:text-base text-background/70 leading-[1.8] mb-4">
              Since day one we've turned scattered social presence into clear-eyed strategy that actually moves the numbers. We're the boutique consultancy for brands tired of guessing — and tired of agencies that burn through budget on vanity posts.
            </p>
            <p className="text-sm md:text-base text-background/70 leading-[1.8] mb-4">
              So let's talk — without you having to ask for a discount 🤝
            </p>
            <p className="font-serif-elegant italic text-base md:text-lg text-background">
              Because 340 doesn't cost. It compounds.
            </p>
          </div>
        }
      />

      {/* FOUNDERS + APPROACH + SERVICES — single ScrollAdventure, 3 pages */}
      <ScrollAdventure
        pages={[
          {
            leftBgImage: ourServicesImg,
            leftBgImagePosition: '50% 55%',
            rightBgImage: null,
            leftContent: null,
            rightContent: (
              <div className="max-w-lg w-full">
                <p className="text-micro mb-4 tracking-[0.3em]">INVEST IN YOUR GROWTH</p>
                <SplitHeading
                  line1="Our"
                  line2="Services"
                  size="clamp(2.5rem, 6vw, 5rem)"
                  className="mb-10"
                />
                <div className="space-y-px w-full" style={{ background: 'hsl(var(--background) / 0.08)' }}>
                  {[
                    { num: '01', name: 'STRATEGY', price: 'From €650', tag: 'One-off', href: '/services#services-bento' },
                    { num: '02', name: 'MANAGEMENT', price: 'From €800', tag: 'Min. 3 months', href: '/services#services-bento' },
                    { num: '03', name: '1:1 COACHING', price: 'Custom', tag: 'Flexible', href: '/services#services-bento' },
                    { num: '04', name: 'CONTENT & COPY', price: 'Custom', tag: 'Add-on', href: '/services#services-bento' },
                  ].map((s) => (
                    <Link
                      key={s.num}
                      to={s.href}
                      className="group flex items-center justify-between px-5 py-4 bg-foreground transition-colors duration-200 hover:bg-background/5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-micro text-background/20 w-5">{s.num}</span>
                        <span style={{ fontFamily: 'Kelson Sans BG, sans-serif', fontSize: 'clamp(16px, 2vw, 24px)', color: 'hsl(var(--background))', letterSpacing: '0.05em' }}>{s.name}</span>
                        <span className="text-micro text-background/30">{s.tag}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-micro font-bold" style={{ color: 'hsl(354 100% 87%)' }}>{s.price}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-background/20 group-hover:text-background/60 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/services" className="btn-inline text-secondary inline-flex items-center gap-2">
                    <span>VIEW ALL SERVICES & PRICING</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ),
          },
          {
            leftBgImage: lindaNancyImg,
            leftBgImagePosition: '50% 20%',
            leftBgImageGrayscale: true,
            rightBgImage: null,
            leftContent: null,
            rightContent: (
              <div className="max-w-lg">
                <p className="text-micro mb-4 tracking-[0.3em]">MEET THE FOUNDERS</p>
                <SplitHeading
                  line1="Nancy &"
                  line2="Linda"
                  size="clamp(2.5rem, 6vw, 5rem)"
                  className="mb-8"
                />
                <p className="font-serif-elegant italic text-base md:text-lg text-secondary mb-6">
                  Two best friends who turned a missing room number into a boutique social media consultancy.
                </p>
                <p className="text-sm md:text-base text-background/60 leading-[1.8]">
                  Nancy adds media strategy and operational precision across NL and EN. Linda brings bold creative ideas and a global perspective across DE, EN and ES. Together they deliver exactly what big agencies can't: personal, strategic, results-driven social media.
                </p>
                <p className="text-xs text-background/30 mt-6">Co-founders · EN · NL · DE · ES</p>
                <div className="mt-8">
                  <Link to="/about-us" className="btn-inline text-secondary inline-flex items-center gap-2">
                    <span>MEET THE TEAM</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ),
          },
          {
            leftBgImage: null,
            rightBgImage: howWeWorkImg,
            rightBgImagePosition: '50% 35%',
            leftContent: (
              <div className="max-w-xl w-full">
                <p className="text-micro mb-4 tracking-[0.3em]">OUR APPROACH</p>
                <SplitHeading
                  line1="How we"
                  line2="Work."
                  size="clamp(2.2rem, 5vw, 4rem)"
                  className="mb-8"
                />

                {/* 4 approach cards — 2x2 grid */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-8"
                  style={{ background: 'hsl(var(--background) / 0.08)' }}
                >
                  {[
                    {
                      num: '01',
                      title: 'Boutique by design',
                      body: 'Small client roster on purpose. Every brand gets our full attention — not a junior account manager and a template.',
                    },
                    {
                      num: '02',
                      title: 'Strategy first, always',
                      body: 'We never start creating before we understand your brand. Every post is rooted in a plan built specifically for you.',
                    },
                    {
                      num: '03',
                      title: 'Multilingual reach',
                      body: 'EN, NL, DE and ES. Your audience speaks different languages — so does your content.',
                    },
                    {
                      num: '04',
                      title: 'Radical transparency',
                      body: 'You always know what we\'re doing and why. Clear reporting, honest check-ins, no black-box agency magic.',
                    },
                  ].map((c) => (
                    <div key={c.num} className="bg-foreground p-5 md:p-6">
                      <span className="text-micro text-primary/60 mb-2 block">{c.num}</span>
                      <p
                        style={{
                          fontFamily: "'Kelson Sans BG', sans-serif",
                          fontWeight: 700,
                          fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                          color: 'hsl(36 21% 95%)',
                          letterSpacing: '0.01em',
                          lineHeight: 1.2,
                          marginBottom: '0.55rem',
                        }}
                      >
                        {c.title}
                      </p>
                      <p
                        className="leading-[1.6]"
                        style={{ color: 'hsl(36 21% 95% / 0.55)', fontSize: 'clamp(0.72rem, 0.85vw, 0.82rem)' }}
                      >
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Languages strip */}
                <div className="flex items-center gap-5">
                  <p
                    className="text-micro shrink-0"
                    style={{ color: 'hsl(36 21% 95% / 0.5)', maxWidth: '8rem', lineHeight: 1.4 }}
                  >
                    WE WORK IN<br />4 LANGUAGES
                  </p>
                  <div
                    className="flex-1 grid grid-cols-4 gap-px"
                    style={{ background: 'hsl(var(--background) / 0.08)' }}
                  >
                    {[
                      { code: 'EN', label: 'English' },
                      { code: 'NL', label: 'Nederlands' },
                      { code: 'DE', label: 'Deutsch' },
                      { code: 'ES', label: 'Español' },
                    ].map((l) => (
                      <div key={l.code} className="bg-foreground py-3 px-3 text-center">
                        <p
                          style={{
                            fontFamily: "'Kelson Sans BG', sans-serif",
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'hsl(354 100% 87%)',
                            letterSpacing: '0.1em',
                            lineHeight: 1,
                            marginBottom: 4,
                          }}
                        >
                          {l.code}
                        </p>
                        <p
                          className="text-micro"
                          style={{ color: 'hsl(36 21% 95% / 0.45)', letterSpacing: '0.18em' }}
                        >
                          {l.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ),
            rightContent: null,
          },
        ]}
      />

      {/* CASE STUDIES — Zwetschke card grid */}
      <section className="bg-foreground">
        <div className="container-wide pt-16 md:pt-28 pb-16 md:pb-20">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-micro mb-4 tracking-[0.3em] text-primary">RESULTS THAT MATTER</p>
              <SplitHeading
                line1="Case"
                line2="Studies"
                size="clamp(2.5rem, 6vw, 5rem)"
              />
            </div>
            <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-micro text-primary/60 hover:text-primary transition-colors duration-300 pb-1">
              <span>SEE ALL WORK</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card grid */}
          <div className="flex flex-col gap-px" style={{ background: 'hsl(var(--background) / 0.12)' }}>
          {/* 3 case cards — single uniform grid */}
          <div className="flex flex-col md:flex-row gap-px">
            {[
              {
                client: 'Studio Displays',
                tag: 'Strategy + Management · NL',
                headline: 'SOCIAL\nTHAT\nCONVERTS.',
                stat: '+420% Reach in 90 days',
                img: sea1,
                slug: 'studio-displays',
              },
              {
                client: 'AlbaNova',
                tag: 'Strategy · ES',
                headline: 'REACH.\nENGAGE.\nGROW.',
                stat: '36.78% Engagement Rate',
                img: sea2,
                slug: 'albanova',
              },
              {
                client: 'Galería Eldorado',
                tag: 'Coaching · DE',
                headline: 'ESTRATEGIA\nQUE\nFUNCIONA.',
                stat: '318 Qualified Leads',
                img: sea3,
                slug: 'galeria-eldorado',
              },
            ].map((card, i) => (
              <HoverEyes key={i} style={{ flex: 1 }} onClick={() => navigate(`/work/${card.slug}`)}>
                <motion.div
                  className="relative overflow-hidden group"
                  style={{ minHeight: 'clamp(300px, 44vh, 480px)', height: '100%' }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Background image */}
                  <img
                    src={card.img}
                    alt={card.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: 'brightness(0.55) saturate(0.8)' }}
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.72) 100%)',
                  }} />
                  {/* Client tag — top left */}
                  <div className="absolute top-7 left-7 z-10">
                    <p style={{
                      fontSize: '9px', color: 'rgba(255,255,255,0.55)',
                      letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                    }}>{card.client}</p>
                    <p style={{
                      fontSize: '8px', color: 'rgba(255,255,255,0.32)',
                      letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '3px',
                    }}>{card.tag}</p>
                  </div>
                  {/* Stat pill — top right */}
                  <div className="absolute top-7 right-7 z-10" style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    padding: '5px 11px',
                    borderRadius: 999,
                  }}>
                    <p style={{
                      fontSize: '8.5px', color: 'rgba(255,255,255,0.85)',
                      letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
                    }}>{card.stat}</p>
                  </div>
                  {/* Headline — bottom left */}
                  <div className="absolute bottom-7 left-7 right-7 z-10">
                    <p style={{
                      fontFamily: 'Kelson Sans BG, sans-serif',
                      fontSize: 'clamp(28px, 3.6vw, 56px)',
                      color: '#fff',
                      lineHeight: 0.92,
                      letterSpacing: '0.02em',
                      whiteSpace: 'pre-line',
                      textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                    }}>{card.headline}</p>
                  </div>
                </motion.div>
              </HoverEyes>
            ))}
          </div>

        </div>

          {/* Mobile CTA */}
          <div className="md:hidden pt-8">
            <Link to="/work" className="btn-inline text-secondary inline-flex items-center gap-2">
              <span>SEE ALL CASE STUDIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK CHECK — IS THIS FOR ME? */}
      <section className="bg-foreground" style={{ paddingTop: 'clamp(1.6rem, 3vw, 2.6rem)', paddingBottom: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
        <div className="container-wide">
          <p className="text-micro mb-4 tracking-[0.3em] text-primary">IS THIS FOR ME?</p>
          <SplitHeading
            line1="You're in the"
            line2="right place if..."
            size="clamp(1.8rem, 4vw, 3.2rem)"
            className="mb-5"
          />

          {/* 2/3 + 1/3 layout */}
          <div className="flex flex-col lg:flex-row gap-px" style={{ background: 'hsl(var(--background) / 0.08)' }}>
            {/* Left — 2/3: the 4 points */}
            <div className="lg:w-2/3 flex flex-col bg-foreground">
              {[
                "You want social media that actually drives business, not just vanity metrics.",
                "You're tired of posting without direction and seeing little return.",
                "You need a clear strategy before investing more time or budget.",
                "You want experts who understand your goals, not generic templates.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  style={{
                    gap: 'clamp(0.9rem, 2vw, 2rem)',
                    padding: 'clamp(0.55rem, 1.1vw, 0.95rem) clamp(1.1rem, 2vw, 1.8rem)',
                    borderTop: i === 0 ? 'none' : '1px solid hsl(var(--background) / 0.1)',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}>
                  <span
                    aria-hidden
                    style={{
                      fontFamily: "'Kelson Sans BG', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(1.3rem, 2vw, 1.9rem)',
                      lineHeight: 1,
                      color: 'transparent',
                      WebkitTextStroke: '1.2px hsl(354 100% 87% / 0.75)',
                      flexShrink: 0,
                      width: 'clamp(2rem, 3.2vw, 2.8rem)',
                      paddingTop: '0.05em',
                    }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="text-background/75"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 'clamp(0.88rem, 1vw, 1.04rem)',
                      lineHeight: 1.5,
                      maxWidth: '46ch',
                      margin: 0,
                    }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right — 1/3: cinematic phone animation */}
            <div className="lg:w-1/3 bg-foreground flex items-center justify-center relative overflow-hidden" style={{ minHeight: 'clamp(240px, 34vh, 380px)' }}>
              <PhoneCinematicAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BLOG */}
      <BlogSection />

      {/* CTA */}
      <YesCTA />
    </div>
  );
};

export default Home;
