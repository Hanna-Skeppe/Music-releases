import React from 'react'
import { PlaylistItem } from './PlaylistItem'

export const Playlists = (props) => {
  return (
    <aside className="playlists__container">
      <h2 className="playlist__header">Playlists</h2>
      {props.playlists.map((playlist) => {
        return (
          <PlaylistItem
            key={playlist.id}
            name={playlist.name}
            playlistImage={playlist.images[0].url}
            playlistUrl={playlist.external_urls.spotify}
          />
        )
      })}
    </aside>
  )
}