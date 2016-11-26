import React from 'react';
import AlbumMenu from 'presentation/AlbumMenu/AlbumMenu';
import albums from 'data/albums';

import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const template = ({ routeParams }) => {
  const album = albums.filter(data => data.id === routeParams.id)[0];
  if (!album) {
    return <NotFoundPage />;
  }
  const renderStats = () => {
    if (album.stats) {
      return (
        <div className="album-page__stats">
          {album.stats.certification ?
            <div className="album-page__stats-block">
              <p>Certifications: </p>
              <ul>
                {album.stats.certification.map(certification => (
                  <li key={certification.country}>
                    {certification.country} : {certification.status}
                  </li>
                ))}
              </ul>
            </div>
          : null}

          {album.stats.chart ?
            <div className="album-page__stats-block">
              <p>Charts: </p>
              <ul>
                {album.stats.chart.map(chart => (
                  <li key={chart.country}>{chart.country} : {chart.rank}</li>
                ))}
              </ul>
            </div>
          : null}

          {album.stats.sales ?
            <div className="album-page__stats-block">
              <p>Sales: </p>
              <ul>
                {album.stats.sales.map(sales => (
                  <li key={sales.country}>{sales.country} : {sales.total}</li>
                ))}
              </ul>
            </div>
          : null}
        </div>
      );
    }
    return null;
  };
  return (
    <div className="album-page">
      <div className="album-page__menu">
        <AlbumMenu albums={albums} />
      </div>
      <div className="album-page__image">
        <img src={`/img/${album.image}`} alt={album.name} />
      </div>
      <div className="album-page__info">
        <h2>{album.name}</h2>
        <h5>{album.release}</h5>
        <h5>Label: {album.label}</h5>
        <div
          className="album-page__description"
          dangerouslySetInnerHTML={{ __html: album.description }}
        />
        {renderStats()}
      </div>
    </div>
  );
};

template.propTypes = {
  routeParams: React.PropTypes.objectOf(React.PropTypes.string),
};

export default template;
