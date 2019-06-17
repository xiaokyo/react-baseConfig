"use strict";

const { _csslocalIdentName } = require("./config/web.config");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 2
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    [
      "react-css-modules", //样式模块化styleName
      {
        generateScopedName: _csslocalIdentName,
        filetypes: {
          ".less": {
            syntax: "postcss-less"
          }
        }
      }
    ]
  ]
};
