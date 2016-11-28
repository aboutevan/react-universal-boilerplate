import React from 'react';
import Header from 'presentation/Header/Header';

if (process.env.BROWSER) {
  require('./Layout.sass');
}

const Layout = props => (
  <div className="layout">
    <Header />
    <div className="layout__content">{props.children}</div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
