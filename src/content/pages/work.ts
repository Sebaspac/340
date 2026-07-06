// Our Work page (single type). Serializable: images → AssetKey, text verbatim.

import type { AssetKey } from '@/content/assets';

export interface WorkClient {
  initials: string;
  color: string;
  name: string;
}

export interface WorkStat {
  value: string;
  label: string;
  client: string;
}

export interface WorkCaseCard {
  slug: string | null;
  client: string;
  tag: string;
  /** Multi-line headline (rendered with white-space: pre-line) — keep the \n. */
  headline: string;
  stat: string;
  img: AssetKey;
}

export interface WorkContent {
  hero: {
    image: AssetKey;
    headline: { lead: string; accent: string };
    subtitle: string;
    scrollLabel: string;
  };
  clients: WorkClient[];
  stats: WorkStat[];
  cases: {
    eyebrow: string;
    heading: { lead: string; accent: string };
    viewLabel: string;
    cards: WorkCaseCard[];
  };
}

export const work: WorkContent = {
  hero: {
    image: 'work-hero',
    headline: { lead: 'OUR ', accent: 'WORK' },
    subtitle: 'This agency is hot, fr.',
    scrollLabel: 'SCROLL',
  },
  clients: [
    { initials: 'SD', color: '#3d2b1f', name: 'Studio Displays' },
    { initials: 'AN', color: '#1c2c1e', name: 'AlbaNova' },
    { initials: 'GE', color: '#26202f', name: 'Galería Eldorado' },
    { initials: 'BC', color: '#1e2830', name: 'Bloom Collective' },
    { initials: 'MV', color: '#2a1d1d', name: 'Maison Verde' },
    { initials: 'YB', color: '#1f2830', name: 'Your Brand*' },
    { initials: 'HC', color: '#24201c', name: 'House Co.' },
    { initials: 'TF', color: '#1c2020', name: 'The Founders Co.' },
  ],
  stats: [
    { value: '+420%', label: 'Reach in 90 days', client: 'Studio Displays' },
    { value: '36.78%', label: 'Engagement rate', client: 'AlbaNova' },
    { value: '318', label: 'Qualified leads', client: 'Galería Eldorado' },
    { value: '0 → 16K', label: 'Reach growth', client: 'Bloom Collective' },
    { value: '+86%', label: 'Engagement uplift', client: 'Bloom Collective' },
    { value: '1.8K', label: 'Saves / month', client: 'Maison Verde' },
    { value: '4×', label: 'Follower growth', client: 'Client' },
    { value: '↑ 92%', label: 'Profile visits', client: 'Client' },
  ],
  cases: {
    eyebrow: 'RESULTS THAT MATTER',
    heading: { lead: 'Case ', accent: 'Studies' },
    viewLabel: 'VIEW CASE',
    cards: [
      { slug: 'galeria-eldorado', client: 'Galería Eldorado', tag: 'Strategy · DE', headline: 'ESTRATEGIA\nQUE\nFUNCIONA.', stat: '318 Qualified Leads', img: 'sea-3' },
      { slug: null, client: 'Bloom Collective', tag: 'Content + Copy · EN', headline: 'FROM 0\nTO 16K\nREACH.', stat: '+86% Engagement', img: 'sea-4' },
      { slug: null, client: 'Maison Verde', tag: 'Management · NL', headline: 'CONTENT\nWITH\nPURPOSE.', stat: '1.8K Saves / Month', img: 'sea-2' },
    ],
  },
};
