'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../config/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(language) {
  return _react2.default.createElement(
    'html',
    { lang: language.lang },
    _react2.default.createElement(
      'head',
      null,
      'title'
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'content' })
    )
  );
};
// <html lang={language.lang}>
//   <head>
//     <link rel="stylesheet" type="type/css" href={`${SERVER_URL_LIB}/main.css`} />
//     <meta charSet="utf-8" />
//     <title>
//       Demo web
//     </title>
//     <script src={`${SERVER_URL_LIB}/vendor.js`} />
//   </head>
//   <body>
//     <div id="content" />
//     <script src={`${SERVER_URL_LIB}/main.Bundel.js`} />
//   </body>
// </html>);

exports.default = Home;