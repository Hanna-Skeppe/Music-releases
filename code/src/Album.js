import React from 'react'
import { ReactComponent as Heart } from "./icons/heart.svg"
import { ReactComponent as Play } from "./icons/play.svg"
import { ReactComponent as Dots } from "./icons/dots.svg"
import { AlbumNameLink } from './AlbumNameLink'
import { AlbumArtists } from './AlbumArtists'

export const Album = (props) => {
  console.log('Album', props)
  return (
    <>
    <div className="album__cover">
      <img className="album__cover-image" src={props.albumImage} alt="album cover" />
      <div className="album__cover-overlay">
        <span className="album__heart-icon"><Heart /></span>
        <span className="album__play-icon"><Play /></span>
        <span className="album__dots-icon"><Dots /></span>
      </div>
    </div>
    <div className="album__text__wrapper"> 
      <AlbumNameLink 
        albumName={props.albumName}
        albumUrl={props.albumUrl}/>
      {/* <AlbumArtists />     */}
    </div>
    </>
  )
}