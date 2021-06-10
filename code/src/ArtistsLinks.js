import React from 'react'

// Here we specify the separation between artists with a "," or an "&"
// The ArtistLinks component is then imported in MusicElements.
const ArtistsLinks = props => {
  if (props.artistIndex === 0) {
    return (
      <a
        className="artist-info"
        href={props.item.external_urls.spotify}
        rel="noopener noreferrer"
      >
        {props.item.name}
      </a>
    )
  } else if (props.artistIndex === props.artistLength - 1) {
    return (
      <>
        {" & "}
        <a
          className="artist-info"
          href={props.item.external_urls.spotify}
          rel="noopener noreferrer"
        >
          {props.item.name}
        </a>
      </>
    )
  }
  return (
    <>
      {", "}
      <a
        className="artist-info"
        href={props.item.external_urls.spotify}
        rel="noopener noreferrer"
      >
        {props.item.name}
      </a>
    </>
  )
}
export default ArtistsLinks