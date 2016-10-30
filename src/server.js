import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import middleware from './middleware'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './routes/Routes';
import NotFoundPage from './components/page/NotFoundPage/NotFoundPage';

// require('babel-register')({
// 	presets: [ 'es2015', 'react' ]
// });

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
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
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