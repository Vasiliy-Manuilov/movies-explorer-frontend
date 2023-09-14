import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedFilms from '../../utils/savedFilms';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={savedFilms} />
    </>
  );
}

export default SavedMovies;
