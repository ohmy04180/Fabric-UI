// tailwind.config.js
// https://tailwindcss.com/docs/adding-custom-styles#removing-unused-custom-css
// https://tailwindcss.com/docs/theme
// https://tailwindcss.com/docs/configuration

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
