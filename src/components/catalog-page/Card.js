import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ music }) => {
    return (
        <div className="card-box">
            <img src={music.imgUrl} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {music.name}</p>
                    <p className="artist">Artist: {music.artist}</p>
                    <p className="genre">Genre: {music.genre}</p>
                    <p className="price">Price: ${music.price}</p>
                    <p className="date">Release Date: {music.releaseDate}</p>
                </div>
                <div className="btn-group">
                    <Link to={`/details/${music._id}`} id="details">Details</Link>
                </div>
            </div>
        </div>
    )
}
