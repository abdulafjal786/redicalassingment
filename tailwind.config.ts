import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}", // if you use singular folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Blue
        secondary: "#14B8A6", // Teal
        background: "#2563EB",
        text: "#111827",      // Dark Gray
        accent: "#F97316",    // Orange
      },
    },
  },
  plugins: [],
};

export default config;
