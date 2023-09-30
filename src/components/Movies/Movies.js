import { getMovies } from "../../utils/MoviesApi";
import { moviesCache } from "../../utils/MoviesCache";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesFragment } from "../MoviesFragment/MoviesFragment";

function Movies() {

  const renderCard = (card) => <MoviesCard key={card.id} card={card}>
    <button
      type='button'
      className={`card__button card__button${
        true ? '_active' : '_inactive'
      }`}
      onClick={() => console.log("FAVOURITE")}
    />
  </MoviesCard>

  return <main>
    <MoviesFragment
      fetcher={getMovies}
      cache={moviesCache}
      renderCard={renderCard}
    />
  </main>
}

export default Movies;
