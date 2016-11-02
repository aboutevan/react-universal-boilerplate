import React from 'react';
// import AthletePreview from '../../presentation/AthletePreview/AthletePreview';
import AlbumThumb from '../../presentation/AlbumThumb/AlbumThumb';
import albums from '../../../data/athletes';

const IndexPage = () => (
  <div className="home">
    <div className="albums-selector">
      {/* albums.map(albumData => <AthletePreview key={albumData.id} {...albumData} />) */}
      { albums.map((albumData, i) =>
        <AlbumThumb
          key={i}
          {...albumData}
        />)}
    </div>
  </div>
);


export default IndexPage;
