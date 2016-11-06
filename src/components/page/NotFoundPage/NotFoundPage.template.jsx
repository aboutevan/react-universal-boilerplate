import React from 'react';
import { Link } from 'react-router';

const template = () => (
  <div className="not-found-page">
    <h1>404</h1>
    <h2>Page not found!</h2>
    <p>
      <Link to="/">Go back to the main page</Link>
    </p>
  </div>
);


export default template;