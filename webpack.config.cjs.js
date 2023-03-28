const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.cjs",
  mode: "development",
  devtool: false,
  output: {
    filename: "./index.js",
    clean: true,
    path: path.resolve(__dirname, "dist-cjs"),
  },
  resolve: {
    fallback: {
      path: false,
      fs: false,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "*.wasm",
          to: "[name][ext]",
        },
      ],
    }),
  ],
};
