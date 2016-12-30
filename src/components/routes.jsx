import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Wrapper from 'layout/Wrapper/Wrapper';
import IndexPage from 'page/IndexPage/IndexPage';
import AboutPage from 'page/AboutPage/AboutPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const routes = (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={IndexPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
