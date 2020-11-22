const defaultColors = require(`tailwindcss/colors`);

defaultColors.transparent = 'transparent';
defaultColors.current = 'currentColor';

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production", // set to true to force purging
    content: [
      './static/**/*.html',
    ],
  },
  darkMode: 'media',
  theme: {
    colors: defaultColors,
    extend: {
    },
  },
  variants: {},
  plugins: [],
}
