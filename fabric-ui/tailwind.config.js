// tailwind.config.js

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Pretendard','Segoe UI', 'Open Sans', 'Helvetica Neue'],
        'mono': ['Consolas', 'Menlo', 'Courier', 'monospace']
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
