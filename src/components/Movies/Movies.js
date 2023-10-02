import { getMovies } from "../../utils/MoviesApi";
import { moviesCache } from "../../utils/MoviesCache";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesFragment } from "../MoviesFragment/MoviesFragment";
import Header from "../Header/Header";
import {useCurrentUser} from "../../contexts/CurrentUserContext";
import Footer from "../Footer/Footer";

function Movies() {
  const { currentUser } = useCurrentUser()

  const renderCard = (card) => <MoviesCard key={card.id} card={card}>
    <button
      type='button'
      className={`card__button card__button${
        true ? '_active' : '_inactive'
      }`}
      onClick={() => console.log("FAVOURITE")}
    />
  </MoviesCard>

  return <>
    <Header loggedIn={!!currentUser} color='white' />
    <main>
      <MoviesFragment
        fetcher={getMovies}
        cache={moviesCache}
        renderCard={renderCard}
      />
    </main>
    <Footer />
  </>
}

export default Movies;
