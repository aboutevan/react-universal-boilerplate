import React from 'react';
import { Link } from 'react-router';

const template = ({ id, name, image }) => (
  <Link to={`/album/${id}`}>
    <div>
      <h1>{name}</h1>
      <img src={`img/${image}`} role="presentation" />
    </div>
  </Link>
);


template.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default template;
