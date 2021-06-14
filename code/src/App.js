import React from 'react'
import { Header } from './Header'
import { Playlists } from './Playlists'
import { AlbumGallery } from './AlbumGallery'
import data from './data.json';
import stretchgoalData from './stretch-goal.json';

const releases = data.albums.items;
const albums = releases.filter((album) => album.album_type === 'album');
const singles = releases.filter((album) => album.album_type === 'single');
const playlists = stretchgoalData.playlists.items;

export const App = () => {

  return (
    <>
      <Header />
      <main className="app__grid">

        <Playlists playlists={playlists} />

        <section className="album__gallery-wrapper">
          <AlbumGallery
            title="Singles"
            data={singles} />
        </section>

        <section className="album__gallery-wrapper albums__wrapper">
          <AlbumGallery
            title="Albums"
            data={albums} />
        </section>

      </main>
    </>
  )
}

