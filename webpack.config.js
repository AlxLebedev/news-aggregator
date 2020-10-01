const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WbebpackMd5Hash = require('webpack-md5-hash');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.conf');
const prod = require('./webpack.prod.conf');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge({
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    stat: './src/js/statistic.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new WbebpackMd5Hash(),
    new SpriteLoaderPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      inject: false,
      hash: true,
      template: './src/about.html',
      filename: 'about.html',
      favicon: './src/static/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      chunks: ['stat'],
      inject: false,
      hash: true,
      template: './src/statistic.html',
      filename: 'statistic.html',
      favicon: './src/static/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name][chunkhash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          isDev ? {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          }
            : {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]',
              },
            },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } },
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
}, isDev ? dev : prod);
