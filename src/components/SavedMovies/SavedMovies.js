import { getSavedMovies } from '../../utils/MainApi';
import { savedMoviesCache } from '../../utils/MoviesCache';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesFragment } from '../MoviesFragment/MoviesFragment';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const { isLoggedIn } = useCurrentUser();

  const renderCard = (card) => (
    <MoviesCard key={card.id} card={card}>
      <button
        type='button'
        className='card__button card__button_delete'
        onClick={() => console.log('DELETE')}
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
