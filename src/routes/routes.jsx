import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/layout/Layout/Layout';
import IndexPage from '../components/page/IndexPage/IndexPage';

import AlbumPage from '../components/page/AlbumPage/AlbumPage';
import NotFoundPage from '../components/page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="album/:id" component={AlbumPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
