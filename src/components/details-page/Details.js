import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetById from '../../custom-hooks/hooks-requests/useGetById';
import { AuthContext } from '../../context/AuthContext';
import { MusicContext } from '../../context/MusicContext';

export const Details = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const { deleteMusic } = useContext(MusicContext);

  const [music, setMusic] = useGetById(id, []);
  const isOwner = music._ownerId === user._id;

  function onDelete() {
    const choice = window.confirm('Are you shure you want to delete this music?');
    if (choice === true) {
      deleteMusic(id);
    }
  }


  return (
    <section id="detailsPage">
      <div className="wrapper">
        <div className="albumCover">
          <img src={music.imgUrl} />
        </div>
        <div className="albumInfo">
          <div className="albumText">

            <h1>Name: {music.name}</h1>
            <h3>Artist: {music.artist}</h3>
            <h4>Genre: {music.genre}</h4>
            <h4>Price: ${music.price}</h4>
            <h4>Date: {music.releaseDate}</h4>
            <p>Description: {music.description}</p>
          </div>
          {/* <!-- Only for registered user and creator of the album--> */}

          {isOwner && <div className="actionBtn">
            <Link to={`/edit/${music._id}`} className="edit">Edit</Link>
            <button onClick={onDelete} className="remove">Delete</button>
          </div>}

        </div>
      </div>
    </section>
  )
}
