/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        "primary-btn": "#E3B577",
      },
    },
  },
  plugins: [],
};
