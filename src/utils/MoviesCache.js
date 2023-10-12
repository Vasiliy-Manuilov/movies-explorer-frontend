const createCache = ({ moviesKey, searchParamsKey }) => {
  const saveMoviesToCache = (movies) =>
    localStorage.setItem(moviesKey, JSON.stringify(movies));
  const getCachedMovies = () => JSON.parse(localStorage.getItem(moviesKey));
  const removeMoviesFromCache = () => localStorage.removeItem(moviesKey);
  const getCachedSearchParams = () =>
    JSON.parse(localStorage.getItem(searchParamsKey));
  const saveSearchParamsToCache = (searchParams) =>
    localStorage.setItem(searchParamsKey, JSON.stringify(searchParams));

  return {
    saveMoviesToCache,
    getCachedMovies,
    removeMoviesFromCache,

    getCachedSearchParams,
    saveSearchParamsToCache,
  };
};

export const moviesCache = createCache({
  moviesKey: 'movies',
  searchParamsKey: 'searchParams',
});
