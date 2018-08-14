const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const webpackDevConfig = baseConfig;

webpackDevConfig.devtool = 'cheap-module-eval-srouce-map';

webpackDevConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
);

webpackDevConfig.entry.main.push(
  'webpack-hot-moddleware/client?reload=true',
);

module.exports = webpackDevConfig;
