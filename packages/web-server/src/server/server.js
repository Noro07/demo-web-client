import express from 'express';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import Home from './Home';
import * as Routes from '../config/routes';
import enableMockServer from '../mock-server';

const app = express();

app.set('port', (process.env.PORT_WEBSERVER || 3000));

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack'); // eslint-disable-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
  const webpackConfig = require('../../webpack.config.dev'); // eslint-disable-line global-require
  const compiler = webpack(webpackConfig);
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

enableMockServer(app, process.env.ENABLE_MOCK === 'true');

app.get(Routes.SERVER_URL_BASE, (req, res) => {
  /* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
  const document = renderToString(<Home lang="en" />);
  res.status(200).send(`<!DOCTYPE html>${document}`);
});

app.use(Routes.SERVER_URL_LIB, express.static(path.join(__dirname, '../../lib')));

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
