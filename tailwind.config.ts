import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          hover: "#B8962E",
        },
        graphite: {
          DEFAULT: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
