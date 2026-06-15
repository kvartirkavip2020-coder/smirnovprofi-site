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

      fontFamily: {
        sans: ["Arial", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        gold: "0 10px 30px rgba(212,175,55,0.25)",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
