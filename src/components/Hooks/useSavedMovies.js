import {
  addMovie as apiAddMovie,
  deleteMovie as apiDeleteMovie,
} from '../../utils/MainApi';
import { convertMovie } from '../../utils/MoviesApi';
import { useContext } from 'react';
import { GlobalStorageContext } from '../../contexts/GlobalStorageContext';

export function useSavedMovies() {
  const context = useContext(GlobalStorageContext);

  if (!context) {
    throw new Error('Контекст глобального хранилища не определен');
  }

  const {
    data: savedMovies,
    isLoading,
    setData: setSavedMovies,
  } = context.savedMoviesRequest;

  const getSavedMovieByMovieId = (movieId) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movieId);
  };

  const isSaved = (movieId) => {
    return savedMovies.some((savedMovie) => savedMovie.movieId === movieId);
  };

  const saveMovie = (movie) => {
    return apiAddMovie(convertMovie(movie))
      .then((savedMovie) => setSavedMovies((arr) => [...arr, savedMovie]))
      .catch((err) => console.log(err));
  };

  function deleteMovie(movie) {
    return apiDeleteMovie(movie._id)
      .then(() =>
        setSavedMovies((arr) => arr.filter((item) => item._id !== movie._id))
      )
      .catch((err) => console.log(err));
  }

  return {
    savedMovies,
    getSavedMovieByMovieId,
    deleteMovie,
    saveMovie,
    isSaved,
    isLoading,
  };
}
