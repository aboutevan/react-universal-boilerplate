import React from 'react';
import Header from 'presentation/Header/Header';
import Footer from 'presentation/Footer/Footer';
import Nav from 'presentation/Nav/Nav';

if (process.env.BROWSER) {
  require('./Layout.sass');
}

const Layout = props => (
  <div className="layout">
    <Nav />
    <Header />
    <div className="layout__content">{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
