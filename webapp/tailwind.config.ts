import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        tinos: ["var(--font-serif)"],
        playfair: ["var(--font-playfair-display)"],
        "gravitas-one": ["var(--font-gravitas-one)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
