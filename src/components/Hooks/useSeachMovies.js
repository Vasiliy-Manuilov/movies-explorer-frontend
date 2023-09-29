import {useState} from "react";

function getSearchedMovies(movies, searchQuery) {
    return movies.filter(
        ({nameRU, nameEN}) =>
            nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

export function useSearchMovies(fetcher, getInitialMovies) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [movies, setMovies] = useState(getInitialMovies)

    const search = async (searchQuery) => {
        setIsLoading(true);
        setError('');
        try {
            const movies = await fetcher();
            let filteredMovies = getSearchedMovies(movies, searchQuery);
            setMovies(filteredMovies);
            if (filteredMovies.length > 0) {
                localStorage.setItem('cards', JSON.stringify(filteredMovies));
                localStorage.setItem('inputSearch', searchQuery);
            }
        } catch (err) {
            setError(
                'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            );
            localStorage.removeItem('inputSearch');
            localStorage.removeItem('cards');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        movies,
        error,
        isLoading,
        search
    }
}
