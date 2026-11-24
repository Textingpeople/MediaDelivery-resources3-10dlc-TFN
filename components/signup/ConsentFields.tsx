import Link from 'next/link';
import { BRAND } from '@/lib/siteConfig';
import { NAVY, ACCENT, ACCENT_BG, BORDER, TEXT_MUTED } from '@/lib/theme';

const TRANSACTIONAL_TEXT =
  'I agree to receive Transactional Account Notification SMS messages from ClearMyPath Assist, including trip request confirmations, booking updates, itinerary reminders and account updates. Reply STOP to opt out, reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not a condition of purchasing any products or services. See our';

const PROMOTIONAL_TEXT =
  'I agree to receive Promotional Marketing SMS messages from ClearMyPath Assist, including seasonal trip ideas and new features. Reply STOP to opt out, reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not a condition of purchasing any products or services. See our';

type Props = {
  smsTransactional: boolean;
  smsPromotional: boolean;
  termsAccepted: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inlineLink = { color: ACCENT, textDecoration: 'underline' } as const;
const boxStyle = { background: '#fff', border: `1px solid ${BORDER}` };
const checkboxStyle = { accentColor: ACCENT, width: 20, height: 20, marginTop: 2, flexShrink: 0 } as const;

function TermsPrivacyLinks() {
  return (
    <>
      <Link href="/terms" style={inlineLink}>Terms</Link> and{' '}
      <Link href="/privacy" style={inlineLink}>Privacy Policy</Link>.
    </>
  );
}

export default function ConsentFields({ smsTransactional, smsPromotional, termsAccepted, onChange }: Props) {
  return (
    <>
      {/* What we will text */}
      <div className="rounded-xl p-5" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}` }}>
        <h3 className="text-base font-semibold mb-2" style={{ color: NAVY }}>What {BRAND} will text you</h3>
        <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: NAVY }}>
          <li>Trip request confirmations</li>
          <li>Trip options and booking updates from your assistant</li>
          <li>Itinerary reminders</li>
          <li>Account updates</li>
          <li>Only if you opt in to promotional texts: seasonal trip ideas and new features</li>
        </ul>
      </div>

      {/* Transactional (optional, unchecked) */}
      <div className="rounded-xl p-5" style={boxStyle}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="smsTransactional" name="smsTransactional" checked={smsTransactional} onChange={onChange} style={checkboxStyle} />
          <label htmlFor="smsTransactional" className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            {TRANSACTIONAL_TEXT} <TermsPrivacyLinks />
          </label>
        </div>
      </div>

      {/* Promotional (optional, unchecked, separate) */}
      <div className="rounded-xl p-5" style={boxStyle}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="smsPromotional" name="smsPromotional" checked={smsPromotional} onChange={onChange} style={checkboxStyle} />
          <label htmlFor="smsPromotional" className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            {PROMOTIONAL_TEXT} <TermsPrivacyLinks />
          </label>
        </div>
      </div>

      {/* Terms (required) */}
      <div className="rounded-xl p-5" style={boxStyle}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={termsAccepted} onChange={onChange} style={checkboxStyle} />
          <label htmlFor="termsAccepted" className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            I agree to the <Link href="/terms" style={inlineLink}>Terms of Service</Link> and{' '}
            <Link href="/privacy" style={inlineLink}>Privacy Policy</Link>.
          </label>
        </div>
      </div>
    </>
  );
}
