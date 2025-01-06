import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-ExtraB', 'sans-serif'],
        nunito: ['Nunito-Regular', 'sans-serif'],
        'nunito-black': ['Nunito-Black', 'sans-serif'],
        'nunito-bold': ['Nunito-Bold', 'sans-serif'],
        'nunito-italic': ['Nunito-Italic', 'sans-serif'],
      },
      colors: {
        primary: "#4b783d",
        secondary: "#137db9",
        tertiary: "#1f3668",
        error: "#e6242f",
        warning: "#c02135",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;