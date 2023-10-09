import { useState } from 'react';
import { getSearchedMovies } from '../../utils/searchMovies';
import { moviesCache } from '../../utils/MoviesCache';
import { getMovies } from '../../utils/MoviesApi';

export function useSearchMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState(moviesCache.getCachedMovies);

  const search = async (searchQuery) => {
    setIsLoading(true);
    setError('');
    try {
      const movies = await getMovies();
      let searchedMovies = getSearchedMovies(movies, searchQuery);
      setMovies(searchedMovies);
      if (searchedMovies.length > 0) {
        moviesCache.saveMoviesToCache(searchedMovies);
        moviesCache.saveSearchToCache(searchQuery);
      }
    } catch (err) {
      setError(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
      moviesCache.removeMoviesFromCache();
      moviesCache.removeSearchFromCache();
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    movies,
    error,
    isLoading,
    search,
  };
}
