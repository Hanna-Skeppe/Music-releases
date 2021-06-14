import React from 'react'

export const PlaylistItem = (props) => {
  return (
    <div className="playlist__item">
      <a className="playlist__link" href={props.playlistUrl}>
        <img className="playlist__image" src={props.playlistImage} alt={props.name} />
      </a>
    </div>
  )
}
