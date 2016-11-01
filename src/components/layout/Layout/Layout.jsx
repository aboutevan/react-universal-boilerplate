import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('../../../core/sass/all.core.sass');
}

const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img role="presentation" src="/img/logo-judo-heroes.png" className="logo" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        Ts is the jhbjjjj
      </p>
    </footer>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};


export default Layout;
