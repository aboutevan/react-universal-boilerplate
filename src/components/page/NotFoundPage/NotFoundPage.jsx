import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import MainLayout from 'layout/MainLayout/MainLayout';

const NotFoundPage = () => (
  <div className="not-found-page">
    <Helmet
      title="Page Not Found"
      meta={[
        { name: 'description', content: 'This page does not exist' },
      ]}
    />
    <MainLayout>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </MainLayout>
  </div>
);

export default NotFoundPage;
