import {useState} from "react";

function getSearchedMovies(movies, searchQuery) {
    return movies.filter(
        ({nameRU, nameEN}) =>
            nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

export function useSearchMovies(fetcher, cache) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [movies, setMovies] = useState(cache.getCachedMovies)

    const search = async (searchQuery) => {
        setIsLoading(true);
        setError('');
        try {
            const movies = await fetcher();
            let filteredMovies = getSearchedMovies(movies, searchQuery);
            setMovies(filteredMovies);
            if (filteredMovies.length > 0) {
                cache.saveMoviesToCache(filteredMovies);
                cache.saveSearchToCache(searchQuery);
            }
        } catch (err) {
            setError(
                'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            );
            cache.removeMoviesFromCache()
            cache.removeSearchFromCache();
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
