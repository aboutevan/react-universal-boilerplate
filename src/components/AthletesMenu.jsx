import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

const AthletesMenu = () => (
  <nav className="athletes-menu">
    {athletes.map(menuAthlete => (
      <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
        {menuAthlete.name}
      </Link>
    ))}
  </nav>
);


export default AthletesMenu;
