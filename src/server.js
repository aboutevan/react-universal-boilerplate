import path from 'path';
import { Server } from 'http';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

// initialize the server
const app = new express();
const server = new Server(app);

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define folder used for static assets
app.use(express.static(path.join(__dirname, 'static')));

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
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
	if(err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})