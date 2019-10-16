module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3"
      }
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
}
