module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["macros"];
  const exclude = ["**/*.stories.js", "*.stories.js"];

  return {
    presets,
    plugins,
    exclude,
  };
};
