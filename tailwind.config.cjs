/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        discord: {
          blue: "#404EED",
          blurple: "#7289da",
          purple: "#5865d2",
          green: "#3ba55c",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
