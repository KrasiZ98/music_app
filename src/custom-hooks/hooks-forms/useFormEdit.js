import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { MusicContext } from '../../context/MusicContext';
import { useParams } from 'react-router-dom';
import { editValidation } from '../../components/edit-page/editValidation';

export default function useFormEdit() {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { updateMusic, musics } = useContext(MusicContext);

    const currentMusic = musics.find(x => x._id === id);

    const [value, setValue] = useState({
        name: currentMusic.name,
        imgUrl: currentMusic.imgUrl,
        price: currentMusic.price,
        releaseDate: currentMusic.releaseDate,
        artist: currentMusic.artist,
        genre: currentMusic.genre,
        description: currentMusic.description,
        _ownerId: user._id,
        _id: currentMusic._id,
    });

    const [formError, setFormError] = useState({});

    function onChange(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = editValidation(value);
        setFormError(error);

        if (Object.values(error).length === 0) {
            updateMusic(id, value);
            setValue({
                name: '',
                imgUrl: '',
                price: '',
                releaseDate: '',
                artist: '',
                genre: '',
                description: '',
            })
        }
    }

    return { value, formError, onChange, onSubmit };
}
