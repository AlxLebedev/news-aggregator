const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WbebpackMd5Hash = require('webpack-md5-hash');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    stat: './src/js/statistic.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new WbebpackMd5Hash(),
    new SpriteLoaderPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      hash: true,
      template: './src/about.html',
      filename: 'about.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['stat'],
      hash: true,
      template: './src/statistic.html',
      filename: 'statistic.html',
      favicon: './src/static/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name][chunkhash].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
    ],
  },
};
