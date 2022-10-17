/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        japanese: ["Noto Sans JP", "sans-serif"],
        english: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
