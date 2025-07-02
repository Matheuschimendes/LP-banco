import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fff5fa",
          100: "#ffe2ef",
          200: "#ffc5db",
          300: "#ff9fbe",
          400: "#ff71a2",
          500: "#f53984", // Cor principal Flash
          600: "#dc2275",
          700: "#b51760",
          800: "#8e124c",
          900: "#6e0e3b",
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};

export default config;
