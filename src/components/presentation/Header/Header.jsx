import React from 'react';
import Nav from 'presentation/Nav/Nav';

const Header = () => (
  <div className="header">
    <Nav />
    <img className="header__logo" src="img/react-logo.png" role="presentation" />
  </div>
);

export default Header;
