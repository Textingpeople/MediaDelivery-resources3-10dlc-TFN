import { Clock, UserCheck, Shield } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, BORDER, TEXT_MUTED } from '@/lib/theme';

const pillars = [
  { icon: Clock, title: 'Save hours on every trip', body: 'Skip the hours of comparing tabs and reviews.' },
  { icon: UserCheck, title: 'A dedicated assistant', body: 'One assistant who knows how you like to travel.' },
  { icon: Shield, title: 'Completely confidential', body: 'Your trips are private and never shared with your employer.' },
];

export default function TrustPillars() {
  return (
    <section style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Why employees love it</h2>
          <p className="text-lg" style={{ color: TEXT_MUTED }}>Built around your time, your preferences and your privacy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_BG }}>
                <Icon className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{title}</h3>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
