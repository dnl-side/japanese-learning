export const VOCAB_ACCENT = "#7C3AED";
export const VOCAB_ACCENT_DEEP = "#5B21B6";
export const VOCAB_ACCENT_SOFT = "rgba(124,58,237,";
export const VOCAB_GRADIENT = "linear-gradient(135deg, #A78BFA 0%, #7C3AED 48%, #4C1D95 100%)";

export function glassCard(background = "rgba(255,255,255,0.86)") {
  return {
    background,
    border: "1px solid rgba(148,163,184,0.16)",
    boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
    backdropFilter: "blur(14px)",
  };
}

export function softBorder(alpha = 0.18) {
  return `1px solid rgba(124,58,237,${alpha})`;
}
