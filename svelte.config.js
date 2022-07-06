const sveltePreprocess = require("svelte-preprocess");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  }),
};
