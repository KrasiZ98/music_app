import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetAll from "../custom-hooks/hooks-requests/useGetAll";
import * as musicServices from "../services/musicServices";

export const MusicContext = createContext();

const MusicContextProvider = (props) => {

    const navigate = useNavigate();

    const [musics, setMusics] = useGetAll([]);
    const [serverError, setServerError] = useState(null);

    async function createMusic(music) {
        const result = await musicServices.create(music);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setMusics(oldMusics => [...oldMusics, result]);
        navigate('/catalog');
    }


    async function updateMusic(id, music) {
        const result = await musicServices.update(id, music);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setMusics(musics.map(x => x._id === id ? result : x));
        navigate(`/details/${id}`);
    }

    async function deleteMusic(id) {
        await musicServices.remove(id);
        setMusics(musics.filter(x => x._id !== id));
        navigate('/catalog');
    }

    return (
        <MusicContext.Provider value={{ musics, createMusic, updateMusic, deleteMusic }}>
            {props.children}
        </MusicContext.Provider>
    )
}

export default MusicContextProvider;