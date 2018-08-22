// const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const webpackProdConfig = baseConfig;

webpackProdConfig.devtool = 'source-map';

// webpackProdConfig.plugins.push(
//   new webpack.optimize.UglifyJsPlugin({
//     sourceMap: true,
//     compress: {
//       warnings: false
//     }
//   })
// );

module.exports = webpackProdConfig;
