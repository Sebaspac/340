import sea1 from '@/assets/sea-1.jpg';
import sea2 from '@/assets/sea-2.jpg';
import sea3 from '@/assets/sea-3.jpg';
import sea4 from '@/assets/sea-4.jpg';

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  services: string;
  website?: string;
  headline: string;
  heroImg: string;
  intro: string;
  challenge: string;
  approach: string;
  resultText: string;
  stats: { value: string; label: string }[];
  visuals: [string, string];
  gallery: string[];
  cardImg: string;
  cardTag: string;
  cardStat: string;
  cardHeadline: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'studio-displays',
    client: 'Studio Displays',
    industry: 'Exhibit Design & Fabrication · NL',
    services: 'Social Media Strategy + Management + Meta Ads',
    website: 'studiodisplays.nl',
    headline: 'SOCIAL THAT CONVERTS.',
    heroImg: sea1,
    intro: 'Studio Displays had the craft. They needed the reach. In 90 days we turned a scattered social presence into their single biggest lead channel.',
    challenge: 'Studio Displays had recently begun new marketing efforts and managed multiple social media accounts — but without a clear direction and limited time and resources. While the brand is well-established in its industry, their online presence did not yet reflect the same level of creativity, quality, and impact that defines their physical work.',
    approach: 'We started with an intake call to map goals and pain points, followed by a full social media audit. From there we built a tailored strategy, optimised every channel, and took over day-to-day management — including Meta ad campaigns, monthly performance reviews, and KPI-driven creative iteration.',
    resultText: 'Within the first 90 days every key metric moved. Instagram views grew 9× and Facebook reach jumped from 115 to 9,500. Most importantly: inquiries from social increased meaningfully — social media became a genuine business channel, not a vanity project.',
    stats: [
      { value: '×9', label: 'Instagram views in 90 days' },
      { value: '36.78%', label: 'Engagement rate' },
      { value: '9,500', label: 'Facebook reach (was 115)' },
    ],
    visuals: [sea2, sea3],
    gallery: [sea1, sea2, sea3, sea4, sea1, sea2],
    cardImg: sea1,
    cardTag: 'Strategy + Management · NL',
    cardStat: '+420% Reach in 90 days',
    cardHeadline: 'SOCIAL\nTHAT\nCONVERTS.',
  },
  {
    slug: 'albanova',
    client: 'AlbaNova',
    industry: 'Intercultural Consulting · ES',
    services: 'Social Media Strategy + Content & Copywriting',
    headline: 'REACH. ENGAGE. GROW.',
    heroImg: sea2,
    intro: 'A new organisation needed to translate a strong brand identity into a social media presence that actually resonated — across languages, cultures, and audiences.',
    challenge: 'AlbaNova is a newly established organisation in its early development phase. After defining its brand identity with partnering agency New Edge, the next step was to translate that foundation into a clear and consistent social media presence that could work across multilingual and multicultural audiences.',
    approach: 'We built a strategy grounded in research and cultural understanding, positioning AlbaNova as a genuine bridge between cultures. We defined clear content pillars, developed a content calendar, and designed core brand assets: a master presentation template and a pitch deck built for investor and partner conversations.',
    resultText: 'AlbaNova launched with a coherent voice, a ready content strategy, and the assets to back it up. The groundwork is in place for sustained growth as the organisation scales.',
    stats: [
      { value: '36.78%', label: 'Engagement rate achieved' },
      { value: '3', label: 'Languages, one consistent voice' },
      { value: '100%', label: 'Brand asset delivery on time' },
    ],
    visuals: [sea3, sea4],
    gallery: [sea2, sea3, sea4, sea1, sea2, sea3],
    cardImg: sea2,
    cardTag: 'Strategy · ES',
    cardStat: '36.78% Engagement Rate',
    cardHeadline: 'REACH.\nENGAGE.\nGROW.',
  },
  {
    slug: 'galeria-eldorado',
    client: 'Galería Eldorado / Café Ordoñez',
    industry: 'Café & Retail · DE',
    services: 'Social Media Strategy',
    website: 'galeriaeldorado.de',
    headline: 'ESTRATEGIA QUE FUNCIONA.',
    heroImg: sea3,
    intro: 'A Colombian coffee café and concept store in Frankfurt — bringing culture, craft, and fair trade together. They needed a strategy that honoured both their roots and their audience.',
    challenge: 'Galería Eldorado operates at a unique intersection: café, gallery, and concept store, bridging Colombian culture and fair trade products with a German-speaking audience. Their social media wasn\'t capturing this complexity — posts lacked direction and the community wasn\'t growing.',
    approach: 'We developed a strategy focused on unifying the brand voice across all touchpoints. Through audience research we identified a shared mindset: people who care about origin stories, craft, and fair trade. We built content pillars around that mindset and created a framework the team could execute independently.',
    resultText: 'The strategy gave the team a clear, executable framework. Qualified lead generation improved significantly — the brand started attracting exactly the kind of customers who stay, come back, and bring others.',
    stats: [
      { value: '318', label: 'Qualified leads generated' },
      { value: '3 weeks', label: 'Strategy delivered in' },
      { value: '↑↑', label: 'Community growth & retention' },
    ],
    visuals: [sea4, sea1],
    gallery: [sea3, sea4, sea1, sea2, sea3, sea4],
    cardImg: sea3,
    cardTag: 'Strategy · DE',
    cardStat: '318 Qualified Leads',
    cardHeadline: 'ESTRATEGIA\nQUE\nFUNCIONA.',
  },
];

export default caseStudies;
