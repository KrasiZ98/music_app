export const editValidation = (value) => {
    const error = {};

    if (value.name === '') {
        error.name = 'Name is required!!!';
    }
    if (value.imgUrl === '') {
        error.imgUrl = 'Image is required!!!';
    }
    if (value.price === '') {
        error.price = 'Price is required!!!';
    }
    if (value.releaseDate === '') {
        error.releaseDate = 'Date is required!!!';
    }
    if (value.artist === '') {
        error.artist = 'Artist is required!!!';
    }
    if (value.genre === '') {
        error.genre = 'Genre is required!!!';
    }
    if (value.description === '') {
        error.description = 'Description is required!!!';
    }

    return error;
}
