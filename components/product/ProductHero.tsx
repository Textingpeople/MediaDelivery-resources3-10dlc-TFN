import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY, BTN_PRIMARY, TEXT_MUTED } from '@/lib/theme';

export default function ProductHero() {
  return (
    <section className="py-20" style={{ background: IVORY }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT}33` }}>
          The Product
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
          Your travel assistant. Your trip, planned.
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: TEXT_MUTED }}>
          ClearMyPath Assist is an employer-provided travel planning benefit. A dedicated travel assistant plans your personal trips by text or through the portal — comparing flight and hotel options, booking the choice you approve, building day-by-day itineraries, arranging reservations, rental cars and airport transfers, and sending day-of reminders and changes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/signup" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
            Book a Demo for Your Team
          </Link>
        </div>
      </div>
    </section>
  );
}
