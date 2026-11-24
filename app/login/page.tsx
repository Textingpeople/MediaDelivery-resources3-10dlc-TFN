'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAVY, ACCENT, ACCENT_BG, IVORY, BORDER, BTN_PRIMARY, TEXT_MUTED, inputStyle, labelStyle } from '@/lib/theme';

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  // Front-end only: credentials are never stored, logged or sent anywhere.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setShowNotice(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: IVORY }}>
      <div className="w-full max-w-md">

        <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(12,26,46,0.08)' }}>
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${NAVY}, ${ACCENT})` }} />

          <div className="p-8 sm:p-10">
            <div className="flex justify-center mb-8">
              <Logo />
            </div>

            <h1 className="text-2xl font-bold mb-1 text-center" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Welcome back</h1>
            <p className="text-sm mb-8 text-center" style={{ color: TEXT_MUTED }}>Sign in to access your travel planning portal.</p>

            <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label htmlFor="login-email" className="block mb-1.5" style={labelStyle}>Work Email</label>
                <input id="login-email" type="email" name="email" placeholder="jane@company.com" style={inputStyle} />
              </div>

              <div>
                <label htmlFor="login-password" className="block mb-1.5" style={labelStyle}>Password</label>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPw ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPw(!showPw)}
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 ${BTN_PRIMARY}`}
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </button>

              {showNotice && (
                <p role="status" className="px-4 py-3 rounded-xl text-sm" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}`, color: NAVY }}>
                  Your ClearMyPath Assist portal opens once your employer&apos;s program is active. New here?{' '}
                  <Link href="/signup" className="font-semibold underline" style={{ color: ACCENT }}>Create your account</Link>.
                </p>
              )}
            </form>

            <div className="mt-6 pt-6 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
              <p className="text-sm" style={{ color: TEXT_MUTED }}>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                  Create one here →
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">Secured by ClearMyPath Assist</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          <Link href="/" className="hover:underline">← Back to home</Link>
        </p>
      </div>
    </div>
  );
}
