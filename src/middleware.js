import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
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
}