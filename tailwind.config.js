module.exports = {
  mode: `jit`,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [
    // don't modify this preset if you don't know exactly what you're doing!
    require(`./extended-colors.preset.js`),
    // add your own presets below this line :)
  ],
  darkMode: `media`,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
