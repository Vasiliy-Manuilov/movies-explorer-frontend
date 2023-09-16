import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedFilms from '../../utils/savedFilms';

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList cards={savedFilms} />
    </main>
  );
}

export default SavedMovies;
