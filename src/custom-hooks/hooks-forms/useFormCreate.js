import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { createValidation } from '../../components/create-page/createValidation';
import { MusicContext } from '../../context/MusicContext';

export default function useFormCreate() {

    const { user } = useContext(AuthContext);
    const { createMusic } = useContext(MusicContext);

    const [value, setValue] = useState({
        name: '',
        imgUrl: '',
        price: '',
        releaseDate: '',
        artist: '',
        genre: '',
        description: '',
        _ownerId: user._id,
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
        const error = createValidation(value);
        setFormError(error);

        if (Object.values(error).length === 0) {
            createMusic(value);
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
