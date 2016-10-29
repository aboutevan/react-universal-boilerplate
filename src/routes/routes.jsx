import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/layout/Layout/Layout';
import IndexPage from '../components/page/IndexPage/IndexPage';
import AthletePage from '../components/page/AthletePage/AthletePage';
import NotFoundPage from '../components/page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="athlete/:id" component={AthletePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
