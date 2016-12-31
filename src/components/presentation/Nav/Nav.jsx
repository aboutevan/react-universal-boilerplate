import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div className="nav">
    <div className="nav__row">
      <div className="nav__col">
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
  </div>
);

export default Nav;
