const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});
