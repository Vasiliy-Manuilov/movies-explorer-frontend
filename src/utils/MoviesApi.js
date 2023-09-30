import { checkResponse } from "./MainApi";

export function getMovies() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse)
}
