import { addMovie, deleteMovie } from '../../utils/MainApi';
// import { useCurrentUser } from '../Hooks/useCurrentUser';

export function useSavedMovies(fetcher) {
  // const { currentUser } = useCurrentUser();
  const actionWithMovie = (movie) => {
    console.log(movie)          
    if (false) {
      return deleteMovie(movie)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      return addMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,        
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  // isSaved(id) {
  //   return
  // }

  return {
    actionWithMovie,
  };
}
