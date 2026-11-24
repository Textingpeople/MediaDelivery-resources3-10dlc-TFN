// Single source of truth for brand, company info, domain and shared legal copy.
export const BRAND = 'ClearMyPath Assist';
export const LEGAL_NAME = 'Media Delivery Solutions LLC';
export const DOMAIN = 'clearmypathassist.com';
export const WEBSITE_URL = `https://${DOMAIN}`;
export const SUPPORT_EMAIL = `support@${DOMAIN}`;
export const PRIVACY_EMAIL = `privacy@${DOMAIN}`;
export const LEGAL_EMAIL = `legal@${DOMAIN}`;
export const PHONE_DISPLAY = '(908) 399-8307';
export const PHONE_TEL = 'tel:+19083998307';
export const ADDRESS_LINE_1 = '9 Johnston Dr';
export const ADDRESS_LINE_2 = 'Bloomsbury, NJ 08804';
export const ADDRESS_COUNTRY = 'United States';
export const ADDRESS_ONE_LINE = '9 Johnston Dr, Bloomsbury, NJ 08804, United States';

export const HOURS = ['Monday – Friday, 8am – 8pm ET', 'Saturday, 9am – 5pm ET'];

// Demo Company ID accepted by the sign-up form (front-end only)
export const DEMO_COMPANY_ID = '1234';

export const LAST_UPDATED = 'November 24, 2026';

export const SITE_TITLE = 'ClearMyPath Assist | Travel Planning Assistance for Employees';
export const SITE_DESCRIPTION =
  'ClearMyPath Assist is an employee benefit that plans your personal trips — options, itineraries, reservations and day-of updates.';

export const FOOTER_TAGLINE = 'ClearMyPath Assist — travel planning for employees.';
export const COPYRIGHT_LINE =
  '© 2026 Media Delivery Solutions LLC. ClearMyPath Assist is operated by Media Delivery Solutions LLC.';

export const LEGAL_OPENING =
  'Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a ClearMyPath Assist ("we," "our," or "us")';

export const DISCLAIMER_LINE =
  'ClearMyPath Assist is a travel planning service, not a travel agency or airline. You book and pay travel providers directly; we do not store payment cards or make payments on your behalf.';

export const NO_SHARING_SENTENCE =
  'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const NO_SENSITIVE_TEXTS_SENTENCE =
  'Texts never include payment card numbers, account numbers, passwords or SSNs.';

export const SAMPLE_MESSAGES_INTRO =
  'The following are examples of the text messages ClearMyPath Assist may send:';

export type SampleMessageType = 'account' | 'promotional';

export const SAMPLE_MESSAGES: { type: SampleMessageType; text: string }[] = [
  {
    type: 'account',
    text: "ClearMyPath Assist: You're signed up for trip updates from your employer's travel planning benefit. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  },
  {
    type: 'account',
    text: `ClearMyPath Assist: Your trip options are ready: 3 flight and hotel picks for Denver, Mar 14–17. Review them at ${DOMAIN}. Reply STOP to opt out.`,
  },
  {
    type: 'account',
    text: 'ClearMyPath Assist: Reminder: your itinerary for tomorrow is in your portal. Check-in opens at 9am. Reply STOP to opt out.',
  },
  {
    type: 'promotional',
    text: `ClearMyPath Assist: Planning spring break? Send us your dates and we'll pull together options. Start at ${DOMAIN}. Reply STOP to opt out.`,
  },
  {
    type: 'promotional',
    text: `ClearMyPath Assist: New: shared trip plans you can send to everyone traveling with you. Try it at ${DOMAIN}. Reply STOP to opt out.`,
  },
];

export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = {
  employee: [
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Create Account' },
  ],
  company: [
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/consultation', label: 'Book a Demo' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sms-policy', label: 'SMS Policy' },
  ],
};
