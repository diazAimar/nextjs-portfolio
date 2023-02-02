/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        HKGroteskBold: "'HKGrotesk-Bold'",
        NokiaFC22: "'NokiaFC22'",
        Abadon: "'Abadon'",
        NicoClean: "'NicoClean'",
        NicoPaint: "'NicoPaint'",
        NicoPups: "'NicoPups'",
        NicoBold: "'NicoBold'",
      },
    },
  },
  plugins: [],
};
