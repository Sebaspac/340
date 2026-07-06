/* Add-ons — real copy from the client handover, grouped into categories.
 * Per the layout PDF, the Add-ons block lives on the Social Media Management
 * service page (not the services overview). Shared here so both can import. */

export interface AddOnItem {
  name: string;
  text: string;
}

export interface AddOnCategory {
  category: string;
  items: AddOnItem[];
}

export const ADD_ONS_INTRO = 'Everything below is optional — scoped and priced in your intake call.';
export const ADD_ONS_OUTRO = 'Exact pricing is scoped in your intake call based on platforms, volume, and goals.';

export const ADD_ONS: AddOnCategory[] = [
  {
    category: 'CONTENT & CREATIVE',
    items: [
      { name: 'Copywriting', text: 'Platform-native captions, hooks, and copy written for you.' },
      { name: 'Content creation', text: 'Graphics, carousels, and visuals aligned to your brand.' },
      { name: 'Video editing', text: 'Short-form editing for Reels, TikTok, and Shorts.' },
    ],
  },
  {
    category: 'ENGAGEMENT & GROWTH',
    items: [
      { name: 'Community management', text: 'DMs, comments, and daily engagement handled for you.' },
      { name: 'Extra platforms', text: 'Extend management to a second or third platform.' },
      { name: 'Paid social / ads', text: 'Ad setup, copy, and performance management.' },
    ],
  },
  {
    category: 'SUPPORT & REPORTING',
    items: [
      { name: '24/7 emergency support', text: 'On-call response for urgent brand moments or crises.' },
      { name: 'Extra check-ins', text: 'Weekly or bi-weekly calls on top of your monthly base.' },
      { name: 'Competitor analysis', text: 'In-depth report on what your competitors are doing. (one-time)' },
    ],
  },
  {
    category: 'ONE-TIME SERVICES',
    items: [
      { name: 'Social media audit', text: 'Full review of your current presence, gaps, and opportunities. (one-time)' },
      { name: 'Profile optimisation', text: 'Bio, highlights, links, and first-impression polish across platforms. (one-time)' },
    ],
  },
];
