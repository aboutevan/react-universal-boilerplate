import React from 'react';
import AlbumThumb from 'presentation/AlbumThumb/AlbumThumb';
import albums from 'data/albums';

const template = () => (
  <div className="index-page">
    <div className="index-page__albums">
      { albums.map((albumData, i) =>
        <div className="album-thumb__layout-block" key={i}>
          <AlbumThumb
            {...albumData}
          />
        </div>
      )}
    </div>
  </div>
);


export default template;
