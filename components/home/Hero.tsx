import Link from 'next/link';
import { Compass, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, LIGHT_BLUE, BTN_PRIMARY } from '@/lib/theme';

export default function Hero() {
  return (
    <section style={{ background: NAVY }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(125,211,252,0.15)', color: LIGHT_BLUE }}>
              Exclusive Employee Benefit
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Your clear path{' '}
              <span style={{ color: LIGHT_BLUE }}>to every trip.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#cbd5e1' }}>
              Tell us where you&apos;re going, and your ClearMyPath assistant plans the rest — options, bookings you approve, itineraries and day-of updates. Available exclusively as an employee benefit.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/signup" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white hover:bg-white/10 transition-colors" style={{ border: '2px solid rgba(255,255,255,0.6)' }}>
                Login
              </Link>
              <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-colors" style={{ border: `2px solid ${LIGHT_BLUE}`, color: LIGHT_BLUE }}>
                For Employers — Book Demo
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-30" style={{ background: `linear-gradient(135deg, ${ACCENT}, transparent)` }} />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #12294a 0%, #0b4a73 100%)', border: '1px solid rgba(125,211,252,0.25)', minHeight: '380px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pb-32 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>More trips like this.</p>
                <p className="text-sm" style={{ color: '#bae6fd' }}>Less time comparing tabs. More time enjoying the trip.</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.97)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                    <MessageSquare className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>
                      Your travel assistant: 3 flight and hotel options for Denver, Mar 14–17 are ready, and I found a dinner spot near your hotel. Want me to hold the first option?
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-medium" style={{ color: ACCENT }}>Planned for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
