import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('../assets/hero.jpg')",
      },
    },
  },
  keyframes: {
    shimmer: {
      '100%': {
        transform: 'translateX(100%)',
      },
    },
  },
  plugins: [],
};
export default config;
