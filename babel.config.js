module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 2,
        },
        targets: {
          chrome: "79",
          ie: "11",
        },
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "MacoCore.jsxToJson", // 기본값은 React.createElement
        throwIfNamespace: false,
      },
    ],
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-shorthand-properties",
  ],
};
