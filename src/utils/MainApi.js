export const BASE_URL = 'https://api.list-movies.nomoredomainsicu.ru/';

export async function checkResponse(res) {
  const data = await res.json()
  if (res.ok) {
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status}, ${data.message}`);
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
}

export function login(email, password) {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function logout() {
  return fetch(`${BASE_URL}signout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(checkResponse);
}

export function getUser() {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(checkResponse);
}

export function updateUser(name, email) {
  return fetch(`${BASE_URL}users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
}

export function addMovie(movie) {
  return fetch(`${BASE_URL}movies/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ movie }),
  }).then(checkResponse);
}

export function deleteMovie(movieId) {
  return fetch(`${BASE_URL}movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(checkResponse);
}

export function getSavedMovies() {
  return fetch(`${BASE_URL}movies/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(checkResponse); 
}
