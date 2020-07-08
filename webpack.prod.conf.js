const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf');

// const buildWebpackConfig = merge(common, {
//   mode: 'production',
//   plugins: []
// })

// module.exports = new Promise((resolve, reject) => {
//   resolve(buildWebpackConfig)
// })

module.exports = merge(common, {
  mode: 'production',
  plugins: []
});
