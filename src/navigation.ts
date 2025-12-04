import { createNavigation } from 'next-intl/navigation';

export const locales = ['en-US', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const localePrefix = 'as-needed';
export const defaultLocale = 'en-US';

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, localePrefix, defaultLocale });
