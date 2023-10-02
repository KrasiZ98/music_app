import { useEffect, useState } from 'react'

export default function useGetAll(defaultValue) {

    const [musics, setMusics] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/musics')
            .then((response) => response.json())
            .then((result) => setMusics(Object.values(result)))
            .catch((error) => console.log(error));
    }, []);

    return [musics, setMusics];
}
