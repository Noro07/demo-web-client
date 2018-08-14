'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('react-dom/server');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _routes = require('../config/routes');

var Routes = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.PORT_WEBSERVER || 3000);

if (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack'); // eslint-disable-line global-require
  var webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  var webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
  var webpackConfig = require('../../webpack.config.dev'); // eslint-disable-line global-require
  var compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false, // redueces the amount of stuff in termianl
      'errors-only': true,
      hash: false,
      modules: false,
      reasons: false,
      warnings: false
    },
    publicPath: Routes.SERVER_URL_LIB // same as 'output.publishPath' in most case
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: false
  }));
}

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get(Routes.SERVER_URL_BASE, function (req, res) {
  /* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
  var document = (0, _server.renderToString)(_react2.default.createElement(_Home2.default, { lang: 'en' }));
  res.status(200).send('<!DOCTYPE html>' + document);
});

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/'); // eslint-disable-line no-console
});