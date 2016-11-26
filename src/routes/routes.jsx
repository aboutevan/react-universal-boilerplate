import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from 'layout/Layout/Layout';
import IndexPage from 'page/IndexPage/IndexPage';

import AlbumPage from 'page/AlbumPage/AlbumPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="album/:id" component={AlbumPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
