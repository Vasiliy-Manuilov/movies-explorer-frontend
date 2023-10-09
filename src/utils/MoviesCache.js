const createCache = ({ moviesKey, searchKey, shortsOnlyKey }) => {
    const saveMoviesToCache = (movies) => localStorage.setItem(moviesKey, JSON.stringify(movies));
    const getCachedMovies = () => JSON.parse(localStorage.getItem(moviesKey));
    const removeMoviesFromCache = () => localStorage.removeItem(moviesKey);

    const getCachedSearch = () => localStorage.getItem(searchKey);
    const saveSearchToCache = (searchQuery) => localStorage.setItem(searchKey, searchQuery);
    const removeSearchFromCache = () => localStorage.removeItem(searchKey);

    const getCachedShortsOnly = () => JSON.parse(localStorage.getItem(shortsOnlyKey)) || false;
    const saveShortsOnlyToCache = (tumbler) => localStorage.setItem(shortsOnlyKey, tumbler);    

    return {
        saveMoviesToCache,
        getCachedMovies,
        removeMoviesFromCache,
    
        saveSearchToCache,
        getCachedSearch,
        removeSearchFromCache,
    
        getCachedShortsOnly,
        saveShortsOnlyToCache,
    }
}

export const moviesCache = createCache({
    moviesKey: 'cards',
    searchKey: 'inputSearch',
    shortsOnlyKey: 'shortFilmsTumblerMovies'
});