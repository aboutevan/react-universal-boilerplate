import React from 'react';
import { Link } from 'react-router';

const template = (props) => {
  const albums = props.albums;
  return (
    <nav className="album-menu">
      {albums.map(album => (
        <Link className="album-menu__link" to={`/album/${album.id}`} key={album.name}>
          {album.name}
        </Link>
      ))}
    </nav>
  );
};

template.propTypes = {
  albums: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.any)),
};

export default template;
