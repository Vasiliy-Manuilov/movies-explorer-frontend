import { getMovies } from '../../utils/MoviesApi';
import { moviesCache } from '../../utils/MoviesCache';
import { useState } from 'react';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReloaded, setIsReloaded] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState(moviesCache.getCachedMovies());

  const reload = async () => {
    setIsLoading(true);
    setError('');
    try {
      const movies = await getMovies();
      setMovies(movies);
      moviesCache.saveMoviesToCache(movies);
      setIsReloaded(true);
    } catch (err) {
      setError(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
      moviesCache.removeMoviesFromCache();
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { movies, isLoading, isReloaded, reload, error };
};
