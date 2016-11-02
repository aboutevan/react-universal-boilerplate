import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/layout/Layout/Layout';
import IndexPage from '../components/page/IndexPage/IndexPage';
import Sample from '../components/presentation/Sample/Sample';
// import AthletePage from '../components/page/AthletePage/AthletePage';
// import NotFoundPage from '../components/page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="album/:id" component={Sample} />
    {/* <Route path="*" component={NotFoundPage} /> */}
  </Route>
);

export default routes;
