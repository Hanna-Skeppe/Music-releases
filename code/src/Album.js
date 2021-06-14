import React from 'react'
import { ReactComponent as Heart } from "./icons/heart.svg"
import { ReactComponent as Play } from "./icons/play.svg"
import { ReactComponent as Dots } from "./icons/dots.svg"
import { AlbumNameLink } from './AlbumNameLink'
import { AlbumArtists } from './AlbumArtists'

export const Album = (props) => {
  return (
    <>
      <article className="album__card">
        <div className="album__cover">
          <img className="album__cover-image" src={props.albumImage} alt="album cover" />
          <div className="album__cover-overlay">
            <span className="album__heart-icon"><Heart /></span>
            <span className="album__play-icon"><Play /></span>
            <span className="album__dots-icon"><Dots /></span>
          </div>
        </div>
        <div className="album__artistname-wrapper">
          <AlbumNameLink
            albumName={props.albumName}
            albumUrl={props.albumUrl}
          />
        </div>
        <div className="album__artistlinks-wrapper">
          {props.item.artists.map((artists, index) => {
            return (
              <AlbumArtists
                key={artists.id}
                artistItem={artists}
                artistIndex={index}
                numArtists={props.item.artists.length}
              />
            )
          })}
        </div>
      </article>
    </>
  )
}