import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div className="nav">
    <div className="nav__inner">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
