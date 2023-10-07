import { getSavedMovies } from '../../utils/MainApi';
import { savedMoviesCache } from '../../utils/MoviesCache';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesFragment } from '../MoviesFragment/MoviesFragment';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSavedMovies } from '../Hooks/useSavedMovies';

function SavedMovies() {
  const { isLoggedIn } = useCurrentUser();
  const { actionWithMovie } = useSavedMovies();

  const renderCard = (movie) => (    
    <MoviesCard key={movie.movieId} card={movie}>      
      <button
        type='button'
        className='card__button card__button_delete'
        onClick={() => actionWithMovie(movie._id)}
      />
    </MoviesCard>
  );

  return (
    <>
      <Header loggedIn={isLoggedIn} color='white' />
      <main>
        <MoviesFragment
          fetcher={getSavedMovies}
          cache={savedMoviesCache}
          renderCard={renderCard}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
