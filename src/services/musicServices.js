export async function create(music) {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/musics", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(music)
        })

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return error
    }
}


export async function update(id, music) {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/musics/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(music)
        })

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return error
    }
}

export async function remove(id) {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/musics/" + id, {
            method: 'DELETE',

        })

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return error
    }
}