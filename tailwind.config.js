/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
