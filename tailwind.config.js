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
        "show-btn": "#D2B48C",
        "edit-btn": "#3C393B",
        "delete-btn": "#EA4744",
        card: "#F5F4F1",
      },
      colors: {
        primary: "#1B1A1A",
        secondary: "#331A15",
        tertiary: "#374151",
      },
    },
  },
  plugins: [],
};
