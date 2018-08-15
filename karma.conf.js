// Karma configuration
// Generated on Wed Aug 15 2018 23:09:21 GMT+0800 (CST)

// const path = require('path');
const _ = require('lodash');
const { rules } = require('./config/webpack.loaders');

const baseKarmaConf = (overrides) => {
  const customizer = (objValue, srcValue) => {
    if(_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
    return srcValue;
  };

  const baseConf = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_module/babel-polyfill/dist/polyfill.js',
      'test/unit/index.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-jasmine',
      'karma-webpack',
      'karma-spec-reporter',
      // 'karma-html-reporter',
      // 'karma-junit-reporter',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/unit/index.js': ['webpack', 'sourcemap'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['spec', 'junit', 'html', 'coverage-istanbul'],
    reporters: ['coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html'],
      fixWebpackSourcePahts: true,
      dir: 'tests/out/coverage/',
      'report-config': {
        html: {
          subdir: 'html',
        },
      },
      thresholds: {
        emitWaening: false,
        global: {
          statements: 90,
          line: 90,
          branches: 90,
          function: 90,
        },
      },
    },

    // htmlReporter: {
    //   outputDir: 'tests/out/unit',
    //   reportName: 'htmlReporter',
    //   namedFile: true,
    //   urlFriendlyName: true,
    // },

    // junitReporter: {
    //   outputDir: 'tests/out/unit',
    //   useBrowserName: false,
    //   outputFile: 'junitReport.xml',
    // },

    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
        chunks: false,
        hash: false,
      },
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // eslint-disable-next-line
    // logLevel: LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      devtool: 'eval',
      module: {
        rules: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
        }, {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }].concat(rules)
      },
    },
  };
  
  if (overrides) {
    return _.mergeWith(baseConf, overrides, customizer);
  }
  return baseConf;
};

module.exports = baseKarmaConf;
