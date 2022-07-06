const sveltePreprocess = require('svelte-preprocess');
const webpack = require("webpack");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
    ],
  },
};
