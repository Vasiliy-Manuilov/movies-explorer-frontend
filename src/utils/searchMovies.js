export function getSearchedMovies(movies, searchQuery) {
  return movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nameEN.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
