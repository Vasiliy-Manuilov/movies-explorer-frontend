import './MoviesFragment.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useSearchMovies } from '../Hooks/useSeachMovies';
import { useScreenSize } from '../Hooks/useScreenSize';
import { useMoviesPagination } from '../Hooks/useMoviesPagination';
import { useShortsMoviesFilter } from '../Hooks/useShortsMoviesFilter';
import { limitsByScreenSize } from '../../utils/MoviesPaginationLimitsByScreen';

export function MoviesFragment({ fetcher, cache, renderCard }) {
  const screenSize = useScreenSize();

  const { movies, isLoading, error, search } = useSearchMovies(
    fetcher,
    cache
  );

  const {
    filteredMovies,
    setShortsOnly,
    shortsOnly
  } = useShortsMoviesFilter(
    movies,
    cache.getCachedShortsOnly,
    cache.saveShortsOnlyToCache
  );

  const { paginatedMovies, loadMore, hasMore } = useMoviesPagination(
    filteredMovies,
    limitsByScreenSize[screenSize]
  );

  let errorText = '';
  if (error) errorText = error;
  else if (filteredMovies && filteredMovies.length === 0)
    errorText = 'Ничего не найдено';

  return <div calss="movies">
      <SearchForm
        onSearch={search}
        getDefaultSearchText={cache.getCachedSearch}
        tumbler={shortsOnly}
        setTumbler={setShortsOnly}
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
    </div>
}
