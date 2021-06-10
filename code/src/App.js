import React from 'react'
import data from './data.json'
import MusicHeader from './MusicHeader'
import MusicElement from './MusicElement'
import Footer from 'Footer'

//This is the file where we import all our components!
export const App = () => {
  return (
    <section>
      <MusicHeader />
      <div className="album-wrapper">
        {data.albums.items.map((album) => (
          <MusicElement
            key={album.id}
            image={album.images[1].url}
            albumName={album.name}
            albumUrl={album.external_urls.spotify}
            item={album}
          />
        ))}
      </div>
      <Footer />
    </section>
  )
}

