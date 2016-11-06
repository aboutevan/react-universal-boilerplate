import path from 'path';
import express from 'express';
import middleware from './middleware'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './routes/routes';

const config = require('../webpack.config.js')
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;


// initialize the server
const app = new express();

// set locals
app.locals.env = env

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

if (env !== 'production') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // define folder used for static assets
  app.use(express.static(path.join(__dirname, 'static')));
} else {
  app.use(express.static(path.join(__dirname, 'static')));
}

// universal routing and rendering

app.get('*', middleware);

// start the server

app.listen(port, err => {
	if(err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})