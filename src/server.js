import path from 'path';
import compression from 'compression';
import express from 'express';
import middleware from './middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

// initialize the server
const app = new express();

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

if (env !== 'production') {
  const runHMR = require('../tools/webpack/hot-module')
  runHMR(app, env);
}
app.use(compression())
app.use(express.static(path.join(__dirname, 'static')));

// universal routing and rendering

app.get('*', middleware);

// start the server

app.listen(port, err => {
	if(err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})

export default app;