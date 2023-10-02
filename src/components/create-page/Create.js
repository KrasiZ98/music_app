import React from 'react'
import useFormCreate from '../../custom-hooks/hooks-forms/useFormCreate'
import { Notification } from '../error-box/Notification';

export const Create = () => {
  const { value, formError, onChange, onSubmit } = useFormCreate();
  return (
    <section className="createPage">
      {formError.name && <Notification error={formError.name} />}
      {formError.name && <Notification error={formError.imgUrl} />}
      {formError.name && <Notification error={formError.releaseDate} />}
      {formError.name && <Notification error={formError.artist} />}
      {formError.name && <Notification error={formError.genre} />}
      {formError.name && <Notification error={formError.description} />}

      <form onSubmit={onSubmit}>


        <legend>Add Album</legend>
        <div className="container">
          <label htmlFor="name" className="vhide">Album name</label>
          <input id="name" name="name" className="name" type="text" placeholder="Album name"
            onChange={onChange} value={value.name} />

          <label htmlFor="imgUrl" className="vhide">Image Url</label>
          <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" placeholder="Image Url"
            onChange={onChange} value={value.imgUrl} />

          <label htmlFor="price" className="vhide">Price</label>
          <input id="price" name="price" className="price" type="text" placeholder="Price"
            onChange={onChange} value={value.price} />

          <label htmlFor="releaseDate" className="vhide">Release date</label>
          <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" placeholder="Release date"
            onChange={onChange} value={value.releaseDate} />

          <label htmlFor="artist" className="vhide">Artist</label>
          <input id="artist" name="artist" className="artist" type="text" placeholder="Artist"
            onChange={onChange} value={value.artist} />

          <label htmlFor="genre" className="vhide">Genre</label>
          <input id="genre" name="genre" className="genre" type="text" placeholder="Genre"
            onChange={onChange} value={value.genre} />

          <label htmlFor="description" className="vhide">Description</label>
          <textarea name="description" className="description" placeholder="Description"
            onChange={onChange} value={value.description}></textarea>

          <button className="add-album" type="submit">Add New Album</button>
        </div>

      </form>
    </section>
  )
}
