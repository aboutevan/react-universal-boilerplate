import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import routes from './components/routes';
import NotFoundPage from './components/page/NotFoundPage/NotFoundPage';

export default (req, res) => {
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
        const returnedPage = renderProps.routes[1].component.name
        markup = renderToString(<RouterContext {...renderProps} />);
        // 404
        if (returnedPage === 'NotFoundPage') {
          res.status(404);
        }
      }

      // reset Helmet meta to avoid memory leaks
      let head = Helmet.rewind();
      head.htmlAttributes
      head.title
      head.base
      head.meta
      head.link
      head.script
      head.style

      // render the index template with the embedded react markup
      return res.render('index', { markup, head })
    }
  );
}