import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sunshine: {
          50: "#fff9db",
          100: "#fff2ad",
          300: "#ffd84d",
          400: "#f5bd18",
          500: "#e3a900"
        },
        ink: "#111111",
        cream: "#fffdf7",
        herb: "#50725a",
        clay: "#b45f36"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(17, 17, 17, 0.08)",
        glow: "0 16px 38px rgba(245, 189, 24, 0.24)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
