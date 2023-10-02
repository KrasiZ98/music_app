import React from 'react'
import useFormEdit from '../../custom-hooks/hooks-forms/useFormEdit'

export const Edit = () => {
  const { value, formError, onChange, onSubmit } = useFormEdit();
  return (
    <section className="editPage">
    <form onSubmit={onSubmit}>
    
            <legend>Edit Album</legend>

            <div className="container">
                <label htmlFor="name" className="vhide">Album name</label>
                <input id="name" name="name" className="name" type="text"
                onChange={onChange} value={value.name} />

                <label htmlFor="imgUrl" className="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" 
                onChange={onChange} value={value.imgUrl}/>

                <label htmlFor="price" className="vhide">Price</label>
                <input id="price" name="price" className="price" type="text"
                onChange={onChange} value={value.price} />

                <label htmlFor="releaseDate" className="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" className="releaseDate" type="text"
                onChange={onChange} value={value.releaseDate} />

                <label htmlFor="artist" className="vhide">Artist</label>
                <input id="artist" name="artist" className="artist" type="text" 
                onChange={onChange} value={value.artist}/>

                <label htmlFor="genre" className="vhide">Genre</label>
                <input id="genre" name="genre" className="genre" type="text"
                onChange={onChange} value={value.genre} />

                <label htmlFor="description" className="vhide">Description</label>
                <textarea name="description" className="description" rows="10"
                    cols="10"
                    onChange={onChange} value={value.description}></textarea>

                <button className="edit-album" type="submit">Edit Album</button>
            </div>
        
    </form>
</section>
  )
}
