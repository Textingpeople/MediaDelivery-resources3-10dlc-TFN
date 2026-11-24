import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY, BORDER, TEXT_MUTED } from '@/lib/theme';

const assurances = [
  { icon: CheckCircle2, title: 'You choose', desc: 'Your assistant sends options. Nothing is booked until you say yes.' },
  { icon: CreditCard, title: 'You pay providers directly', desc: 'You pay airlines, hotels and other travel providers yourself. We do not store payment cards or make payments on your behalf.' },
  { icon: ShieldCheck, title: 'Private by default', desc: 'Your trip requests are never shared with your employer.' },
];

export default function ApproveSection() {
  return (
    <section style={{ background: IVORY }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>You approve every booking.</h2>
            <p className="leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
              Your assistant does the comparing and the legwork, but the decisions stay with you. Review the options, tell us which one you want, and we book it. Your assistant learns how you like to travel, so each trip starts further along than the last.
            </p>
            <ul className="space-y-4">
              {assurances.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm" style={{ color: TEXT_MUTED }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal mockup */}
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: NAVY }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-white/60 font-medium">My Travel Portal</span>
              <div />
            </div>
            <div className="p-5 space-y-3" style={{ background: IVORY }}>
              <div className="rounded-xl p-4" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}` }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Needs your approval</span>
                <p className="text-sm font-semibold mt-2 mb-1" style={{ color: NAVY }}>Denver, Mar 14–17 — 3 options</p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>Flights and hotels are ready to review. Tell your assistant which one to book.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Itinerary</span>
                <p className="text-sm font-semibold mt-2 mb-1" style={{ color: NAVY }}>Day 1 — Arrive and check in</p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>Addresses, times and confirmations in one place.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Confirmed</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>Dinner reservation — Friday, 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
