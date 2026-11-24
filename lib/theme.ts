// ClearMyPath Assist design tokens (navy / ocean blue)
export const NAVY = '#0C1A2E';
export const ACCENT = '#0369A1';
export const ACCENT_HOVER = '#075985';
export const ACCENT_BG = '#F0F9FF';
export const ACCENT_TINT = 'rgba(3,105,161,0.12)';
export const LIGHT_BLUE = '#7DD3FC';
export const IVORY = '#faf8f4';
export const BORDER = '#e8e4dc';
export const FOOTER_BG = '#0C1A2E';
export const MUTED = '#94a3b8';
export const TEXT = '#1E293B';
export const TEXT_MUTED = '#475569';

// Primary button: ocean blue, white text, darker blue on hover
export const BTN_PRIMARY = 'text-white bg-[#0369A1] hover:bg-[#075985] transition-colors';

export const inputStyle = {
  background: '#fff',
  border: `1px solid ${BORDER}`,
  color: TEXT,
  width: '100%',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '14px',
  outline: 'none',
} as const;

export const labelStyle = {
  color: TEXT_MUTED,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};
