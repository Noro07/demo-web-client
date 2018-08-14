import React from 'react';
import { SERVER_URL_LIB } from '../config/routes';

const Home = language => (
  <html lang={language.lang}>
    <head>
      <link rel="stylesheet" type="type/css" href={`${SERVER_URL_LIB}/main.css`} />
      <meta charSet="utf-8" />
      <title>
        Demo web
      </title>
      <script src={`${SERVER_URL_LIB}/vendor.js`} />
    </head>
    <body>
      <div id="content" />
      <script src={`${SERVER_URL_LIB}/main.Bundel.js`} />
    </body>
  </html>);

export default Home;
