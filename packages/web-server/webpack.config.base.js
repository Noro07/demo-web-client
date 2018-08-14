const webpack = require('webpack');
const postcssPresentEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const path = require('path');
const postcssImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

const packagesDir = path.resolve(__dirname, '../../', 'packages');
const devModal = process.env.NODE_ENV === 'development';

const baseSassLoader = [{
  loader: 'css-loader',
}, {
  loader: 'postcss-loader',
  option: {
    plugin: () => [
      postcssPresentEnv({
        browsers: ['last 2 versions'],
      }),
      cssnano(),
      postcssImport(),
    ],
  },
}, {
  loader: 'sass-loader',
  options: {
    outputStyle: 'collapsed',
    // includePaths: [Path2D.resolve(__dirname, '../..', 'node_module')],
  },
}];

const sassLoaderPro = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: baseSassLoader,
});

const sassLoaderDev = [{
  loader: 'style-loader',
}, {
  loader: 'css-loader',
  options: {
    sourceMap: true,
  },
}, {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    outputStyle: 'collapsed',
    // includePaths: [Path2D.resolve(__dirname, '../..', 'node_module')],
  },
}];

const sassLoader = devModal ? sassLoaderDev : sassLoaderPro;

module.exports = {
  entry: {
    main: ['../web/src/index.jsx'],
    vendor: [
      'babel-polyfill', 'react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk',
    ],
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].Bundel.js',
    publicPath: '/lib/',
    sourceMapFilename: '[name].Bundle.map',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules|lib/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', '@babel/preset-env'],
          plugins: ['@babel/transform-runtime'],
        },
      },
    }, {
      test: /\.css$/,
      exclude: /node_module/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    }, {
      test: /\.scss$/,
      exclude: /node_module/,
      use: sassLoader,
    }, {
      test: /\.json$/,
      use: {
        loader: 'json-loader',
      },
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new ExtractTextPlugin({
      allChunks: false,
      filename: '[name].css',
      disable: devModal,
    }),
    // new StyleLintPlugin({
    //   context: packagesDir,
    //   emitErrors: true,
    //   failOnError: true,
    //   file: '**/*.s?(a|c)ss',
    //   syntax: 'scss',
    //   quiet: false,
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  // stats: {
  //   colors: true,
  //   chunks: false,
  //   'errors-only': true,
  //   hash: false,
  //   modules: false,
  //   reasons: false,
  //   warnings: false,
  // },
};
