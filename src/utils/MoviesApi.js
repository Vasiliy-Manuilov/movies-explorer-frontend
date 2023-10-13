import { checkResponse } from './MainApi';

const BASE_URL = 'https://api.nomoreparties.co';
export function getMovies() {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

export function getAbsoluteImageUrl(relativeUrl) {
  return `${BASE_URL}${relativeUrl}`;
}
export function convertMovie(movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: getAbsoluteImageUrl(movie.image.url),
    trailerLink: movie.trailerLink,
    thumbnail: getAbsoluteImageUrl(movie.image.formats.thumbnail.url),
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
}
