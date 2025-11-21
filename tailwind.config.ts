import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#6366f1", // Indigo 500
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1e293b", // Slate 800
          foreground: "#f8fafc", // Slate 50
        },
        muted: {
          DEFAULT: "#334155", // Slate 700
          foreground: "#94a3b8", // Slate 400
        },
        accent: {
          DEFAULT: "#8b5cf6", // Violet 500
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
