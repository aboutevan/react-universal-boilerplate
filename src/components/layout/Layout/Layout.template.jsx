import React from 'react';
import { Link } from 'react-router';

const template = props => (
  <div className="app">
    <header>
      <Link to="/">
        <img src="/img/slayer_logo.png" role="presentation" className="Layout__logo" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
  </div>
);

template.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default template;
