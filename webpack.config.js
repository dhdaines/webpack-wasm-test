module.exports = {
  entry: './index.mjs',
  mode: 'development',
  devtool: false,
  output: {
    filename: './bundle.js',
    clean: true,
  },
  resolve: {
    fallback: {
      module: false,
    },
  },
};
