import { getSavedMovies } from "../../utils/MainApi";
import { savedMoviesCache } from "../../utils/MoviesCache";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesFragment } from "../MoviesFragment/MoviesFragment";
import {useCurrentUser} from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {

  const { currentUser } = useCurrentUser()
  const renderCard = (card) => <MoviesCard key={card.id} card={card}>
    <button
      type='button'
      className='card__button card__button_delete'
      onClick={() => console.log("DELETE")}
    />
  </MoviesCard>

  return <>
    <Header loggedIn={!!currentUser} color='white' />
    <main>
      <MoviesFragment
        fetcher={getSavedMovies}
        cache={savedMoviesCache}
        renderCard={renderCard}
      />
    </main>
    <Footer />
  </>
}

export default SavedMovies;
