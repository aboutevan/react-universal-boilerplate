import React from 'react';
import { Link } from 'react-router';

const template = ({ id, name, image }) => (
  <div className="album-thumb">
    <Link to={`/album/${id}`}>
      <div className="album-thumb__inner">
        <img src={`img/${image}`} alt={name} />
        <h2>{name}</h2>
      </div>
    </Link>
  </div>
);

template.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default template;
