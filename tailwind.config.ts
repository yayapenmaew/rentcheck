import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-deep": "#FBEEF3",
        ink: "#1B2255",
        "ink-soft": "#6E739C",
        pink: "#FF5C8A",
        "pink-deep": "#E0467D",
        plum: "#11163C",
        card: "#FFFFFF",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        lg: "22px",
        md: "14px",
      },
      boxShadow: {
        card: "0 24px 60px -30px rgba(27,34,85,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
