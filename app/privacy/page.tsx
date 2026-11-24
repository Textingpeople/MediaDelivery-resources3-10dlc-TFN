import SampleMessages from '@/components/SampleMessages';
import { LegalLayout, H2, P, UL, A, Callout } from '@/components/legal/LegalUI';
import {
  BRAND, LEGAL_OPENING, NO_SHARING_SENTENCE, NO_SENSITIVE_TEXTS_SENTENCE, SUPPORT_EMAIL, PRIVACY_EMAIL,
  PHONE_DISPLAY, PHONE_TEL, LEGAL_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2,
} from '@/lib/siteConfig';
import { BORDER } from '@/lib/theme';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <P>
        This Privacy Policy explains how {LEGAL_OPENING} collects, uses and protects information when you use the {BRAND} travel planning service, this website and our text messaging program.
      </P>

      <H2>1. Information We Collect</H2>
      <UL>
        <li><strong>Account details:</strong> your name and work email, and the Company ID provided by your employer.</li>
        <li><strong>Mobile number (optional):</strong> collected only if you choose to receive texts.</li>
        <li><strong>Trip requests and preferences:</strong> details you choose to share with your assistant, such as destinations, dates and traveler names.</li>
        <li><strong>Technical information:</strong> basic device and browser information needed to operate the website.</li>
      </UL>
      <P>We do not collect passport numbers or payment cards.</P>

      <H2>2. How We Use Information</H2>
      <P>We use your information to plan your trips, send the updates and notices you have asked for, provide support, and keep the Service secure. If you opt in to promotional texts, we also use your mobile number to send them.</P>
      <Callout><strong>Your trip requests are never shared with your employer.</strong> Your employer&apos;s program administrator can confirm who has access to the benefit, but not where you travel or what you ask your assistant to plan.</Callout>

      <H2>3. Text Messaging (SMS)</H2>
      <P>
        If you opt in on the sign-up form, we send text messages from {BRAND}. There are two message types: <strong>account notifications</strong> (trip request confirmations, trip options and booking updates, itinerary reminders and account updates) and <strong>promotional messages</strong> (seasonal trip ideas and new features). Each has its own optional checkbox. Both are unchecked by default, opting in is not required to submit the form, and consent is not a condition of purchasing any products or services. Message frequency varies, and message and data rates may apply.
      </P>
      <P>
        Reply <strong>STOP</strong> to any message to opt out; you will receive one confirmation message. Reply <strong>HELP</strong> for help, or contact <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A> or <A href={PHONE_TEL}>{PHONE_DISPLAY}</A>. Carriers are not liable for delayed or undelivered messages.
      </P>
      <P>{NO_SENSITIVE_TEXTS_SENTENCE}</P>
      <SampleMessages level="h3" numbering="3.1" />
      <P><strong>{NO_SHARING_SENTENCE}</strong></P>

      <H2>4. Sharing of Information</H2>
      <P>We do not sell your personal information. We share trip details only with the travel providers you approve (for example, an airline or hotel we book for you) and when required by law. We do not share your trip requests with your employer. Mobile phone numbers and SMS opt-in data and consent are never shared with service providers or any other third parties for marketing or promotional purposes.</P>

      <H2>5. Security</H2>
      <P>We use reasonable administrative, technical and physical safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</P>

      <H2>6. Retention</H2>
      <P>We keep your information only as long as needed to provide the Service, meet legal obligations, resolve disputes and enforce our agreements. You can ask us to delete your information at any time, subject to those requirements.</P>

      <H2>7. Your Choices</H2>
      <UL>
        <li><strong>Text messages:</strong> reply STOP to any text to opt out. You can opt in to account notifications and promotional texts separately.</li>
        <li><strong>Access and deletion:</strong> contact us to access, correct or delete your information.</li>
        <li><strong>Email:</strong> contact us to change how we reach you by email.</li>
      </UL>

      <H2>8. Children</H2>
      <P>{BRAND} is not intended for anyone under 18, and we do not knowingly collect information from children under 18. If you believe a child has given us information, contact us and we will delete it.</P>

      <H2>9. Changes to This Policy</H2>
      <P>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new &quot;Last updated&quot; date.</P>

      <H2>10. Contact</H2>
      <P>Questions about privacy? Contact us:</P>
      <div className="rounded-2xl p-6 text-sm space-y-1 mb-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
        <p><strong>{LEGAL_NAME}</strong> d/b/a {BRAND}</p>
        <p>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
        <p>Privacy: <A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A></p>
        <p>Phone: <A href={PHONE_TEL}>{PHONE_DISPLAY}</A></p>
      </div>
    </LegalLayout>
  );
}
