import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura:      "#F2A7BB",
        "sakura-dark": "#C0566E",
        "red-japan": "#BC002D",
        ink:         "#1A1A2E",
        gold:        "#C9A84C",
        paper:       "#FAF8F5",
      },
      fontFamily: {
        jp:    ["Noto Sans JP", "sans-serif"],
        serif: ["Shippori Mincho", "serif"],
        mono:  ["DM Mono", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;