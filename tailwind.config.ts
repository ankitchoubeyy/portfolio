import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Primary": ["Righteous", "sans-serif"],
        "Secondary": ["Montserrat", "sans-serif"],
        "Tertiary": ["Roboto", "sans-serif"],
        "Quaternary": ["Nunito Sans", "serif"],
      },
      keyframes: {
        colorChange: {
          '0%,': { backgroundColor: '#cd475d' }, // Blue
          '25%': { backgroundColor: '#ec6313' },     // Orange
          '50%': { backgroundColor: '#cd475d' },     // Orange
          '75%': { backgroundColor: '#cd475d' },     // Orange
        },
      },
      animation: {
        'color-change': 'colorChange 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
