import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Exact brand colors from prathamhospital.lovable.app ── */
        "teal-deep":  "#07576F",   /* oklch(0.36 0.06 210) */
        "teal":       "#0A80A8",   /* oklch(0.48 0.08 210) */
        "gold":       "#EEAA25",   /* oklch(0.78 0.14 82)  */
        "gold-soft":  "#F4C958",   /* oklch(0.88 0.09 85)  */

        /* ── Semantic surfaces ── */
        "bg":         "#EDF3F6",   /* oklch(0.965 0.012 220) */
        "fg":         "#223A47",   /* oklch(0.28  0.05  215) */
        "card-bg":    "#F0F5F8",   /* oklch(0.97  0.012 220) */
        "muted":      "#DDE8EE",   /* oklch(0.93  0.014 220) */
        "muted-fg":   "#536D7C",   /* oklch(0.48  0.04  215) */
        "border-c":   "#D4E2EA",   /* oklch(0.9   0.015 220) */

        /* ── Legacy aliases for existing component compatibility ── */
        "warm-white":     "#F0F5F8",
        "soft-pearl":     "#EDF3F6",
        "deep-ink":       "#07576F",
        "clinical-navy":  "#07576F",
        "healing-teal":   "#0A80A8",
        "aqua":           "#0A80A8",
        "soft-violet":    "#0A80A8",
        "sunrise-gold":   "#EEAA25",
        "gentle-coral":   "#D4896A",
        ink:              "#223A47",
        navy:             "#07576F",
        pearl:            "#EDF3F6",
        coral:            "#D4896A",
        violet:           "#0A80A8",
      },

      fontFamily: {
        sans:    ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)",   { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },

      spacing: { "18": "4.5rem", "30": "7.5rem" },

      borderRadius: {
        "xl":  "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        /* ── Neomorphism — exact oklch values converted ── */
        neo:          "6px 6px 18px rgba(173,197,210,0.55), -5px -5px 14px rgba(255,255,255,0.90)",
        "neo-hover":  "8px 8px 24px rgba(173,197,210,0.55), -6px -6px 18px rgba(255,255,255,0.90)",
        "neo-inset":  "inset 4px 4px 12px rgba(173,197,210,0.55), inset -4px -4px 10px rgba(255,255,255,0.90)",
        "neo-sm":     "3px 3px 10px rgba(173,197,210,0.55), -2px -2px 8px rgba(255,255,255,0.90)",
        "neo-dark":   "6px 6px 20px rgba(0,0,0,0.50), -3px -3px 10px rgba(60,110,130,0.25)",

        /* ── Glass / elevation ── */
        soft:     "0 2px 8px rgba(7,87,111,0.07), 0 1px 3px rgba(7,87,111,0.04)",
        card:     "0 8px 32px rgba(7,87,111,0.09), 0 2px 8px rgba(7,87,111,0.05)",
        elevated: "0 16px 48px rgba(7,87,111,0.13), 0 6px 16px rgba(7,87,111,0.07)",
        floating: "0 20px 64px rgba(7,87,111,0.18), 0 8px 20px rgba(7,87,111,0.10)",
        brand:    "0 18px 40px -12px rgba(7,87,111,0.60)",
        gold:     "0 4px 20px rgba(238,170,37,0.40), 0 2px 6px rgba(238,170,37,0.25)",

        /* ── Video frame ── */
        "video-frame": "0 24px 72px rgba(7,87,111,0.40), 0 8px 24px rgba(7,87,111,0.25)",

        "inner-soft": "inset 0 2px 6px rgba(7,87,111,0.06)",
      },

      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #07576F 0%, #0A80A8 45%, #EEAA25 100%)",
        "gradient-gold":  "linear-gradient(135deg, #EEAA25 0%, #F4C958 100%)",
        "gradient-teal":  "linear-gradient(135deg, #07576F 0%, #0A80A8 100%)",
      },

      backdropBlur: {
        xs: "6px", sm: "12px", md: "18px", lg: "24px", xl: "32px", "2xl": "48px",
      },

      maxWidth: {
        container: "1280px",
        "container-wide": "1440px",
      },

      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
        calm:   "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      zIndex: {
        header: "50", dropdown: "60", drawer: "70", dialog: "80", toast: "90",
      },

      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "gradient-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%":      { transform: "translate(3%, -3%) scale(1.05)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(238,170,37,0.40)" },
          "50%":      { boxShadow: "0 0 0 10px rgba(238,170,37,0)" },
        },
        "glow-brand": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(7,87,111,0.30)" },
          "50%":      { boxShadow: "0 0 40px rgba(10,128,168,0.50), 0 0 20px rgba(238,170,37,0.25)" },
        },
      },

      animation: {
        "fade-up":        "fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in":        "fade-in 0.4s ease both",
        "scale-in":       "scale-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-slow":     "float-slow 7s ease-in-out infinite",
        "gradient-drift": "gradient-drift 20s ease-in-out infinite",
        "shimmer":        "shimmer 2.4s linear infinite",
        "pulse-gold":     "pulse-gold 2.5s ease-in-out infinite",
        "glow-brand":     "glow-brand 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
