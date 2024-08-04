/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#81c408",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
