const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);

const extendedColors = defaultColors;

Object.entries(allColors).forEach(([colorName, colors]) => {
  extendedColors[colorName] = colors;
  extendedColors[colorName.toLowerCase()] = colors; // tailwind classes should be all-lowercase, but the docs are using dromedarCase...
});

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
