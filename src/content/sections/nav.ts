// Top navigation content — shared across all pages.
// Serializable: logo → AssetKey, links → href strings.

import type { AssetKey } from '@/content/assets';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavContent {
  logo: { src: AssetKey; alt: string; ariaLabel: string };
  leftLinks: NavLinkItem[];
  rightLinks: NavLinkItem[];
  bookNow: { label: string; href: string };
}

export const nav: NavContent = {
  logo: { src: 'logo-340-white', alt: '340', ariaLabel: '340 Consultancy — Home' },
  leftLinks: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about-us' },
    { label: 'SERVICES', href: '/services' },
  ],
  rightLinks: [
    { label: 'OUR WORK', href: '/work' },
    { label: 'UP2DATE', href: '/about' },
  ],
  bookNow: { label: 'BOOK NOW', href: '/contact' },
};
