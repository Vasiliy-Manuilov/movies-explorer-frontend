import { getMovies } from '../../utils/MoviesApi';
import { moviesCache } from '../../utils/MoviesCache';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesFragment } from '../MoviesFragment/MoviesFragment';
import Header from '../Header/Header';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Footer from '../Footer/Footer';
import { useSavedMovies } from '../Hooks/useSavedMovies';

function Movies() {
  const { isLoggedIn } = useCurrentUser();
  
  const { actionWithMovie } = useSavedMovies();

  const renderCard = (movie) => (
    <MoviesCard key={movie.id} card={movie} location={'movies'}>
      <button
        type='button'
        className={`card__button card__button${
          // isSaved(movie.id) ? '_active' : '_inactive'
          true ? '_active' : '_inactive'
        }`}
        onClick={() => actionWithMovie(movie)}
      />
    </MoviesCard>
  );

  return (
    <>
      <Header loggedIn={isLoggedIn} color='white' />
      <main>
        <MoviesFragment
          fetcher={getMovies}
          cache={moviesCache}
          renderCard={renderCard}
          location={'movies'}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
