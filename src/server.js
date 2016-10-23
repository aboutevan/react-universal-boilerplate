import path from 'path';
import pug from 'pug';
const fs = require('fs');
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
require('babel-register')({
	presets: [ 'es2015', 'react' ]
});
const config = require('../webpack.config.js')
const env = process.env.NODE_ENV || 'development';
const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// const templatePath = require.resolve('./views/index.pug')
// const templateFn = require('pug').compileFile(templatePath)

// initialize the server
const app = new express();

// set locals
app.locals.env = env

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

if (development) {
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
	// const html = pug.renderFile('views/index.pug')
	// console.log(html)
  app.use(express.static(path.join(__dirname, 'static')));
}

// universal routing and rendering
app.get('*', (req, res) => {
	match(
		{ routes, location: req.url },
		(err, redirectLocation, renderProps) => {

			// if error display message
			if (err) {
				return res.status(500).send(err.message);
			}

			// in case of redirect propagate the redirect to browser
			if (redirectLocation) {
				return res.redirect(302, redirectLocation.pathName + redirectLocation.search);
			}

			let markup;
			if (renderProps) {
				// if the current route matched then renderProps
				markup = renderToString(<RouterContext {...renderProps} />);
			} else {
				// otherwise render 404
				markup = renderToString(<NotFoundPage />);
				res.status(404);
			}

			// render the index template with the embedded react markup
			return res.render('index', { markup })
		}
	);
});

// start the server

app.listen(port, err => {
	if(err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})