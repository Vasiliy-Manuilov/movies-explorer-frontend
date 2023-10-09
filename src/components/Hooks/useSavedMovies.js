import {
  addMovie as apiAddMovie,
  deleteMovie as apiDeleteMovie,
  getSavedMovies,
} from '../../utils/MainApi';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import { convertMovie } from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

export function useSavedMovies() {
  const { savedMoviesArray, setSavedMoviesArray } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reloadSavedMovies();
    // eslint-disable-next-line
  }, []);

  const reloadSavedMovies = () => {
    setIsLoading(true);
    return getSavedMovies()
      .then((movies) => setSavedMoviesArray(movies))
      .finally(() => setIsLoading(false));
  };

  const getSavedMovieByMovieId = (movieId) => {
    return savedMoviesArray.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
  };

  const isSaved = (movieId) => {
    return savedMoviesArray.some(
      (savedMovie) => savedMovie.movieId === movieId
    );
  };

  const saveMovie = (movie) => {
    return apiAddMovie(convertMovie(movie))
      .then((savedMovie) => setSavedMoviesArray((arr) => [...arr, savedMovie]))
      .catch((err) => console.log(err));
  };

  function deleteMovie(movie) {
    return apiDeleteMovie(movie._id)
      .then(() =>
        setSavedMoviesArray((arr) =>
          arr.filter((item) => item._id !== movie._id)
        )
      )
      .catch((err) => console.log(err));
  }

  return {
    savedMovies: savedMoviesArray,
    getSavedMovieByMovieId,
    reloadSavedMovies,
    deleteMovie,
    saveMovie,
    isSaved,
    isLoading,
  };
}
