import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import CompanyInfo from '@/components/CompanyInfo';
import { BRAND, LEGAL_NAME } from '@/lib/siteConfig';
import { NAVY, ACCENT, ACCENT_BG, IVORY, BORDER, BTN_PRIMARY, TEXT, TEXT_MUTED } from '@/lib/theme';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: TEXT }}>
      <SiteNav />

      {/* Hero */}
      <section className="py-20" style={{ background: IVORY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT}33` }}>
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
            We make every trip easier to plan.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: TEXT_MUTED }}>
            {BRAND} is a travel planning benefit offered by employers. A dedicated assistant plans your personal trips so you can spend your time looking forward to them.
          </p>
          <p className="text-sm mt-4" style={{ color: TEXT_MUTED }}>{BRAND} is operated by {LEGAL_NAME}.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Our mission</h2>
              <p className="leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                Trip planning eats evenings and weekends. Comparing flights, reading hotel reviews and piecing together a schedule can take longer than the trip itself.
              </p>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>
                {BRAND} does that work as an employer benefit. Your assistant compares options, books what you approve, and keeps your itinerary and day-of updates in one place.
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}33` }}>
              <p className="text-lg font-semibold mb-2" style={{ color: NAVY }}>A benefit employees actually use</p>
              <p className="text-sm" style={{ color: TEXT_MUTED }}>Almost everyone travels. Having help with the planning gives employees real time back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: IVORY }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Privacy first', body: 'Your trip requests are never shared with your employer. What you ask us to plan stays between you and your assistant.' },
              { title: 'You stay in control', body: 'You approve every booking and pay travel providers directly. Nothing is booked without your say-so.' },
              { title: 'Follow-through', body: 'We stay with the trip from the first options to the day-of changes, so nothing is left hanging.' },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Company information</h2>
          <div className="text-left">
            <CompanyInfo />
          </div>
          <p className="text-sm mt-4" style={{ color: TEXT_MUTED }}>{BRAND} is operated by {LEGAL_NAME}, a Wyoming limited liability company.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
              Contact Us
            </Link>
            <Link href="/consultation" className={`px-6 py-3 rounded-xl text-sm font-semibold ${BTN_PRIMARY}`}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: IVORY }}>
        <Disclaimer />
      </section>

      <SiteFooter />
    </div>
  );
}
