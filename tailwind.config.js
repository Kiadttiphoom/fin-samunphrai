/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-amber-400/20',
    'bg-green-400/20',
    'bg-teal-400/20',
    'bg-pink-400/20',
    'bg-lime-400/20',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
