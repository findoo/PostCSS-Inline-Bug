import postcss from "rollup-plugin-postcss";
import postCssPresetEnv from "postcss-preset-env";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle-bug.js",
    format: "iife"
  },
  plugins: [
    postcss({
      modules: {
        generateScopedName: `[local]`
      },
      plugins: [postCssPresetEnv]
    })
  ]
};
