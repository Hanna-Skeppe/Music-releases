import React from 'react'

export const AlbumNameLink = (props) => {

  console.log('albumname', props)
  return (
    <a className="album__name__link" href={props.albumUrl}>{props.albumName}</a>
  )
}