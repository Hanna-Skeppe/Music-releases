import React from 'react'

export const AlbumNameLink = (props) => {
  return (
    <a className="album__name__link" href={props.albumUrl}>
      {props.albumName}
    </a>
  )
}