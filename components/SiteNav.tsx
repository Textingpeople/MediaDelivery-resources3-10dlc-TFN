'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/lib/siteConfig';
import { NAVY, BORDER, BTN_PRIMARY } from '@/lib/theme';

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: '#fff', borderBottom: `1px solid ${BORDER}` }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: NAVY }}>{l.label}</Link>
            ))}
            <div className="w-px h-5" style={{ background: BORDER }} />
            <Link href="/login" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>Login</Link>
            <Link href="/signup" className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${BTN_PRIMARY}`}>Get Started</Link>
            <Link href="/consultation" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: NAVY }}>Book Demo</Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            style={{ color: NAVY }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 text-sm font-medium" style={{ color: NAVY }}>{l.label}</Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg text-sm font-semibold text-center" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>Login</Link>
            <Link href="/signup" onClick={() => setOpen(false)} className={`px-5 py-3 rounded-lg text-sm font-semibold text-center ${BTN_PRIMARY}`}>Get Started</Link>
            <Link href="/consultation" onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg text-sm font-semibold text-center text-white" style={{ background: NAVY }}>Book Demo</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
