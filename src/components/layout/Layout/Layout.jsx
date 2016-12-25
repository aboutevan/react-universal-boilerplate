import React from 'react';
import Header from 'presentation/Header/Header';
import Footer from 'presentation/Footer/Footer';

if (process.env.BROWSER) {
  require('./Layout.sass');
}

const Layout = props => (
  <div className="layout">
    <Header />
    <div className="layout__content">{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
