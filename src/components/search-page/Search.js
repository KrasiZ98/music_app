import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MusicContext } from '../../context/MusicContext';
import { Card } from '../catalog-page/Card';

export const Search = () => {
    const [value, setValue] = useState('');
    const { musics } = useContext(MusicContext);
    const [albums, setAlbums] = useState({});

    function onShearch() {
        const filterAlbums = musics.filter(x => x.name.toLowerCase().includes(value.toLocaleLowerCase()) ||
            x.artist.toLowerCase().includes(value.toLocaleLowerCase()) || x.genre.toLowerCase().includes(value.toLocaleLowerCase()))
        setAlbums(filterAlbums);

    }

    return (
        <section id="searchPage">
            <h1>Search by Name</h1>

            <div className="search">
                <input onChange={(e) => setValue(e.target.value)} id="search-input" type="text" name="search" placeholder="Enter desired albums's name" />
                <button onClick={onShearch} className="button-list">Search</button>
            </div>

            <h2>Results:</h2>

            {/* <!--Show after click Search button--> */}
            {albums.length > 0 && albums.map(x => <Card key={x._id} music={x} />)}
        </section>
    )
}
