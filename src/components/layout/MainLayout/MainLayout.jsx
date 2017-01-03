import React from 'react';
import Footer from 'presentation/Footer/Footer';

const MainLayout = props => (
  <div className="main-layout">
    <div className="main-layout__content">{props.children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default MainLayout;
