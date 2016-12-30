import React from 'react';
import Header from 'presentation/Header/Header';
import Footer from 'presentation/Footer/Footer';
import Nav from 'presentation/Nav/Nav';

const MainLayout = props => (
  <div className="main-layout">
    <Nav />
    <Header />
    <div className="main-layout__content">{props.children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default MainLayout;
