import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from 'layout/Layout/Layout';
import IndexPage from 'page/IndexPage/IndexPage';

import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
