module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production", // set to true to force purging
    content: [
      './static/**/*.html',
    ],
  },
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [],
}
