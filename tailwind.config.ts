import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0 20px 40px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        spotlight: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        spotlight: "spotlight 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
