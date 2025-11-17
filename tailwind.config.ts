import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7CB342",
          dark: "#558B2F",
          light: "#9CCC65",
        },
        secondary: {
          DEFAULT: "#1A237E",
          dark: "#0D1642",
          light: "#283593",
        },
        navy: {
          DEFAULT: "#0A1F44",
          light: "#1E3A5F",
          dark: "#050F22",
        },
      },
    },
  },
  plugins: [],
};
export default config;
