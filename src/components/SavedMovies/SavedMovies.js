import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSavedMovies } from '../Hooks/useSavedMovies';
import Preloader from '../Preloader/Preloader';
import { useSearchMovies } from '../Hooks/useSeachMovies';

function SavedMovies() {
  const { isLoggedIn } = useCurrentUser();
  const { deleteMovie, savedMovies, isLoading } = useSavedMovies();
  const { searchedMovies, search } = useSearchMovies(savedMovies, {
    query: '',
    shortsOnly: false,
  });

  let errorText = '';
  if (savedMovies.length === 0) {
    errorText = 'У вас нет сохраненных фильмов';
  } else if (searchedMovies && searchedMovies.length === 0) {
    errorText = 'Ничего не найдено';
  }

  const renderCard = (movie) => (
    <MoviesCard key={movie._id} card={movie}>
      <button
        type='button'
        className='card__button card__button_delete'
        onClick={() => deleteMovie(movie)}
      />
    </MoviesCard>
  );

  return (
    <>
      <Header loggedIn={isLoggedIn} color='white' />
      <main className='saved-movies'>
        <SearchForm onSearch={search} />
        {isLoading && <Preloader />}
        {errorText && !isLoading && (
          <div className='saved-movies__text-error'>{errorText}</div>
        )}
        {!isLoading && searchedMovies && (
          <MoviesCardList cards={searchedMovies} renderCard={renderCard} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
