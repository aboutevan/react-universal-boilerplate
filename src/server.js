import path from 'path';
import compression from 'compression';
import express from 'express';
import middleware from './middleware';
import { createSitemap } from 'sitemap';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 9000;

// initialize the server
const app = new express();
const sitemap = createSitemap({
  hostname: 'http://example.com',
  cacheTime: 600000,
  urls: [
    // {url: '/', changefreq: 'weekly', priority: 0.3},
    // {url: '/about', changefreq: 'weekly', priority: 0.3}
  ]
})

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

if (env !== 'production') {
  require('../tools/webpack/hot-module')(app, env);
  // get static assets
  app.use(express.static(path.join(__dirname, 'static', 'assets')));
} else {
  // get static assets and get compiled webpack paths
  app.use(express.static(path.join(__dirname, 'static', 'assets')));
  app.use(express.static(path.join(__dirname, 'static', 'compiled')));
}
app.use(compression())

// sitemap
app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

// universal routing and rendering
app.get('*', middleware);

// start the server
app.listen(port, err => {
	if(err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})

// proxy server to BrowserSync
if (env !== 'production') {
  const browserSync = require('browser-sync');
  browserSync.init({
    proxy: `localhost:${port}`,
    port: 3000,
    ui: {
      port: 3001,
      weinre: { port: 3333 },
    },
    open: false
  });
}

export default app;