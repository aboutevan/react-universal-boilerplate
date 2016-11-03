import React from 'react';
import { Link } from 'react-router';

const template = () => (
  <div className="header">
    <div className="header__logo">
      <Link to="/">
        <img src="/img/slayer_logo.png" role="presentation" />
      </Link>
    </div>
  </div>
);

export default template;
