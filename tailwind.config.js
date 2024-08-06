/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        "orange-primary": "#f97316",
        "green-footer": "#45595b",
        "whastapp-green": "#25D366",
        "bg-main": "#f7f7f9",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Vietnam: ["Be Vietnam", "sans-serif"],
      },
      screens: {
        xsm: "540px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
