import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import {useSearchMovies} from "../Hooks/useSeachMovies";
import {LARGE_SCREEN_SIZE, MEDIUM_SCREEN_SIZE, SMALL_SCREEN_SIZE, useScreenSize} from "../Hooks/useScreenSize";
import {useMoviesPagination} from "../Hooks/useMoviesPagination";
import {useShortsMoviesFilter} from "../Hooks/useShortsMoviesFilter";

const limitsByScreenSize = {
  [LARGE_SCREEN_SIZE]: { limit: 16, paginationLimit: 4 },
  [MEDIUM_SCREEN_SIZE]: { limit: 8, paginationLimit: 2 },
  [SMALL_SCREEN_SIZE]: { limit: 5, paginationLimit: 1 },
}

const getInitialMovies = () => JSON.parse(localStorage.getItem('cards'))
const getInitialMoviesSearchText = () => localStorage.getItem('inputSearch')

function Movies() {
  const screenSize = useScreenSize()

  const { movies, isLoading, error, search } = useSearchMovies(moviesApi.getMovies, getInitialMovies)
  const { filteredMovies, setShortsOnly, shortsOnly } = useShortsMoviesFilter(movies)
  const { paginatedMovies, loadMore, hasMore } = useMoviesPagination(filteredMovies, limitsByScreenSize[screenSize])

  let errorText = ""
  if (error) errorText = error
  else if (filteredMovies && filteredMovies.length === 0) errorText = "Ничего не найдено"

  return (
    <main className='movies'>
      <SearchForm
        onSearch={search}
        getDefaultSearchText={getInitialMoviesSearchText}
        tumbler={shortsOnly}
        setTumbler={setShortsOnly}
      />
      {isLoading && <Preloader />}
      {errorText && !isLoading && <div className='movies__text-error'>{errorText}</div>}
      {!isLoading && paginatedMovies && (
        <MoviesCardList
          cards={paginatedMovies}
          showMoreCards={hasMore ? loadMore : undefined}
        />
      )}
    </main>
  );
}

export default Movies;
