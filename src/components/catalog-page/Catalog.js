

import { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext'
import { Card } from './Card';

export const Catalog = () => {
    const { musics } = useContext(MusicContext);
    return (
        <section id="catalogPage">
            <h1>All Albums</h1>

            {musics.length > 0 ? musics.map(x => <Card key={x._id} music={x} />)
                : <p>No Albums in Catalog!</p>}



            {/* <!--No albums in catalog--> */}


        </section>
    )
}
