const home = 'http://192.168.0.106:9999/api';

export default {
    getAllMovies: () => {
        return fetch(`${home}/movie/`)
            .then(res => res.json());
    },
    getByCategory: (categoryId) => {
        return fetch(`${home}/movie/${categoryId}`)
            .then(res => res.json());
    },
    createMovie: (data) => {
        return fetch(`${home}/movie/`, {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(res => res.json());
    },
    deleteMovie: (movieId) => {
        return fetch(`${home}/movie/${movieId}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res.json());
    },
    streamMovie: (movieId) => {
        return fetch(`${home}/movie/stream/${movieId}`);
    },
    getCategories: () => {
        return fetch(`${home}/category/`)
            .then(res => res.json());
    },
    createCategory: (data) => {
        return fetch(`${home}/category/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(res => res.json());
    }
}