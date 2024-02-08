/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        "3xl": "-1px -1px 75px 5px rgba(0,0,0,0.46)",
      },
    },
  },
  plugins: [],
};
