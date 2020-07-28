module.exports = {
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        }
      },
    ]
  }
};
