import { moviesCache } from '../../utils/MoviesCache';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Footer from '../Footer/Footer';
import { useSavedMovies } from '../Hooks/useSavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useSearchMovies } from '../Hooks/useSeachMovies';
import { useScreenSize } from '../Hooks/useScreenSize';
import { useMoviesPagination } from '../Hooks/useMoviesPagination';
import { limitsByScreenSize } from '../../utils/MoviesPaginationLimitsByScreen';
import './Movies.css';
import { useMovies } from '../Hooks/useMovies';
import { useEffect } from 'react';

function Movies() {
  const { isLoggedIn } = useCurrentUser();
  const { saveMovie, deleteMovie, isSaved, getSavedMovieByMovieId } =
    useSavedMovies();
  const screenSize = useScreenSize();

  const { movies, isLoading, isReloaded, error, reload } = useMovies();
  const { searchedMovies, search } = useSearchMovies(
    movies,
    moviesCache.getCachedSearchParams(),
    moviesCache.saveSearchParamsToCache
  );

  const handleSearch = (searchParams) => {
    if (!isReloaded) {
      reload();
    }
    search(searchParams);
  };

  const { paginatedMovies, loadMore, hasMore, reset } = useMoviesPagination(
    searchedMovies,
    limitsByScreenSize[screenSize]
  );

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [screenSize]);

  let errorText = '';
  if (error) errorText = error;
  else if (searchedMovies && searchedMovies.length === 0)
    errorText = 'Ничего не найдено';

  const renderCard = (movie) => {
    const saved = isSaved(movie.id);
    const handleClick = saved
      ? () => deleteMovie(getSavedMovieByMovieId(movie.id))
      : () => saveMovie(movie);

    return (
      <MoviesCard key={movie.id} card={movie} location={'movies'}>
        <button
          type='button'
          className={`card__button card__button${
            saved ? '_active' : '_inactive'
          }`}
          onClick={handleClick}
        />
      </MoviesCard>
    );
  };

  return (
    <>
      <Header loggedIn={isLoggedIn} color='white' />
      <main>
        <SearchForm
          onSearch={handleSearch}
          defaultSearchParams={moviesCache.getCachedSearchParams()}
          isQueryRequired
        />
        {isLoading && <Preloader />}
        {errorText && !isLoading && (
          <div className='movies__text-error'>{errorText}</div>
        )}
        {!isLoading && paginatedMovies && (
          <MoviesCardList
            cards={paginatedMovies}
            showMoreCards={hasMore ? loadMore : undefined}
            renderCard={renderCard}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
