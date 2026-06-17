import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF5F1",
        "bg-deep": "#F3E6DE",
        ink: "#2A1E28",
        "ink-soft": "#7C6770",
        gold: "#C79A5B",
        rose: "#D98A93",
        "rose-deep": "#c97580",
        sage: "#8FA88A",
        plum: "#5B3A4E",
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
        card: "0 24px 60px -30px rgba(42,30,40,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
