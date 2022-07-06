const sveltePreprocess = require("svelte-preprocess");
const webpack = require("webpack");
const svelteConfig = require("./svelte.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            preprocess: svelteConfig.preprocess,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({filename: "styles.css"})],
};
