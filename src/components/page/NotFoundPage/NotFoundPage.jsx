import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import MainLayout from 'layout/MainLayout/MainLayout';

const NotFoundPage = () => (
  <MainLayout>
    <Helmet
      title="Page Not Found"
      meta={[
        { name: 'description', content: 'This page does not exist' },
      ]}
    />
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <Link className="button" to="/">Go back to the main page</Link>
    </div>
  </MainLayout>
);

export default NotFoundPage;
