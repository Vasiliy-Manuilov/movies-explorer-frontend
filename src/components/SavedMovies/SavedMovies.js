import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import { useShortsMoviesFilter } from '../Hooks/useShortsMoviesFilter';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSavedMovies } from '../Hooks/useSavedMovies';
import { useSearchSavedMovies } from '../Hooks/useSearchSavedMovies';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {
  const { isLoggedIn } = useCurrentUser();
  const { deleteMovie, savedMovies, isLoading } = useSavedMovies();
  const { searchedMovies, search } = useSearchSavedMovies(savedMovies);
  const { filteredMovies, setShortsOnly, shortsOnly } =
    useShortsMoviesFilter(searchedMovies, false);

  let errorText = '';
  if (savedMovies.length === 0) {
    errorText = 'У вас нет сохраненных фильмов';
  } else if (filteredMovies && filteredMovies.length === 0) {
    errorText = 'Ничего не найдено';
  }

  const renderCard = (movie) => (
    <MoviesCard key={movie.movieId} card={movie}>
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
        <SearchForm
          onSearch={search}
          tumbler={shortsOnly}
          setTumbler={setShortsOnly}
        />
        {isLoading && <Preloader />}
        {errorText && !isLoading && (
          <div className='saved-movies__text-error'>{errorText}</div>
        )}
        {!isLoading && filteredMovies && (
          <MoviesCardList cards={filteredMovies} renderCard={renderCard} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
