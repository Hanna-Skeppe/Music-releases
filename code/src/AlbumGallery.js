import React from 'react'

import { Album } from './Album'

export const AlbumGallery = (props) => {
  return (
    <>
      <h2 className="album__gallery-header">{props.title}</h2>
      {props.data.map((album) => {
        return (
          <Album
            key={album.id}
            albumName={album.name}
            albumImage={album.images[1].url}
            albumUrl={album.external_urls.spotify}
            artists={album.artists}
            item={album} />
        )
      })}
    </>
  );
}