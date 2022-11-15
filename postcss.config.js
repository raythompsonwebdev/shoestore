module.exports = {
  syntax: "postcss-scss",
  plugins: [
    // eslint-disable-next-line global-require
    require("autoprefixer"),
    // eslint-disable-next-line global-require
    require("postcss-preset-env")({
      stage: 1,
    }),
  ],
};
