// ─────────────────────────────────────────────────────────────────────────────
// Asset registry — single source of truth for every image / media reference.
//
// Components reference assets by a stable kebab-case key via `img("key")`.
// Swapping an image = change exactly one line here. CMS migration maps each
// key → a media field.
//
// NOTE: keys are serializable strings. Content modules under src/content/**
// store the KEY (e.g. "founders-sofa"), never the imported URL.
// ─────────────────────────────────────────────────────────────────────────────

import contactSofa from '@/assets/contact-sofa.jpg';
import ctaWomen from '@/assets/cta-women.jpg';
import deskWork from '@/assets/desk-work.jpg';
import foundersSofa from '@/assets/founders-sofa.jpg';
import founders from '@/assets/founders.jpg';
import howWeWork from '@/assets/how-we-work.jpg';
import identificacionVideo from '@/assets/identificacion-video.mp4';
import ipadZebra from '@/assets/ipad-zebra.jpg';
import lindaNancySofa from '@/assets/linda-nancy-sofa.jpg';
import lindaNancy from '@/assets/linda-nancy.jpg';
import linda from '@/assets/linda.jpg';
import logo340White from '@/assets/logo-340-white.png';
import logo340 from '@/assets/logo-340.png';
import nancyWide from '@/assets/nancy-wide.png';
import ourServices from '@/assets/our-services.jpg';
import sea1 from '@/assets/sea-1.jpg';
import sea2 from '@/assets/sea-2.jpg';
import sea3 from '@/assets/sea-3.jpg';
import sea4 from '@/assets/sea-4.jpg';
import servicesHero from '@/assets/services-hero.jpg';
import starterguide from '@/assets/starterguide.png';
import up2date from '@/assets/up2date.png';
import workHero from '@/assets/work-hero.jpg';

export const assets = {
  'contact-sofa': contactSofa,
  'cta-women': ctaWomen,
  'desk-work': deskWork,
  'founders-sofa': foundersSofa,
  founders: founders,
  'how-we-work': howWeWork,
  'identificacion-video': identificacionVideo,
  'ipad-zebra': ipadZebra,
  'linda-nancy-sofa': lindaNancySofa,
  'linda-nancy': lindaNancy,
  linda: linda,
  'logo-340-white': logo340White,
  'logo-340': logo340,
  'nancy-wide': nancyWide,
  'our-services': ourServices,
  'sea-1': sea1,
  'sea-2': sea2,
  'sea-3': sea3,
  'sea-4': sea4,
  'services-hero': servicesHero,
  starterguide: starterguide,
  up2date: up2date,
  'work-hero': workHero,
} as const;

export type AssetKey = keyof typeof assets;

/** Resolve a stable asset key to its bundled URL. */
export const img = (key: AssetKey): string => assets[key];
