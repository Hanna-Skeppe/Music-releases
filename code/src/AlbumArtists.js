import React from 'react'

export const AlbumArtists = (props) => {
  if (props.artistIndex === 0) {
    return (
      <a
        className='album__artist-link'
        href={props.artistItem.external_urls.spotify}
      >
        {props.artistItem.name}
      </a>
    )
  } else if (props.artistIndex + 1 === props.numArtists) {
    return (
      <>
        {"  &  "}
        <a
          className='album__artist-link'
          href={props.artistItem.external_urls.spotify}
        >
          {props.artistItem.name}
        </a>
      </>
    )
  }
  return (
    <>
      {",  "}
      <a
        className='album__artist-link'
        href={props.artistItem.external_urls.spotify}
      >
        {props.artistItem.name}
      </a>
    </>
  )
}