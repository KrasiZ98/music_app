import { useEffect, useState } from 'react'

export default function useGetById(id, defaultValue) {

    const [music, setMusic] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/musics/' + id)
            .then((response) => response.json())
            .then((result) => setMusic(result))
            .catch((error) => console.log(error));
    }, []);

    return [music, setMusic];
}
