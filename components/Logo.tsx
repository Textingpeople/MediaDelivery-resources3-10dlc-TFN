import Link from 'next/link';
import { BRAND } from '@/lib/siteConfig';
import { NAVY, ACCENT, LIGHT_BLUE } from '@/lib/theme';

// Text + SVG wordmark (no image file needed)
export default function Logo({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dark = variant === 'dark';
  const fontSize = size === 'lg' ? 26 : size === 'sm' ? 18 : 22;
  const markSize = size === 'lg' ? 40 : size === 'sm' ? 28 : 34;

  return (
    <Link href="/" aria-label={`${BRAND} home`} className="inline-flex items-center gap-2.5 flex-shrink-0">
      <span
        className="inline-flex items-center justify-center rounded-lg"
        style={{ width: markSize, height: markSize, background: dark ? NAVY : 'rgba(255,255,255,0.12)' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width={markSize * 0.62} height={markSize * 0.62} fill="none" stroke={dark ? LIGHT_BLUE : '#BAE6FD'} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19c0-5 4-4 6-7s0-6 5-7" />
          <circle cx="18.5" cy="4.5" r="1.8" />
          <circle cx="4" cy="19" r="1.2" />
        </svg>
      </span>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize, color: dark ? NAVY : '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
        ClearMyPath<span style={{ color: dark ? ACCENT : LIGHT_BLUE }}> Assist</span>
      </span>
    </Link>
  );
}
