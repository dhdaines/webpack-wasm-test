const path = require('path');

module.exports = {
  entry: './index.mjs',
  mode: 'development',
  devtool: false,
  output: {
    filename: './bundle.js',
    clean: true,
    path: path.resolve(__dirname, "dist-es6"),
  },
  resolve: {
    fallback: {
      module: false,
    },
  },
};
