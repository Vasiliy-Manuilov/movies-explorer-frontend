import { getSavedMovies } from "../../utils/MainApi";
import { savedMoviesCache } from "../../utils/MoviesCache";
import MoviesCard from "../MoviesCard/MoviesCard";
import { MoviesFragment } from "../MoviesFragment/MoviesFragment";

function SavedMovies() {
  const renderCard = (card) => <MoviesCard key={card.id} card={card}>
    <button
      type='button'
      className='card__button card__button_delete'
      onClick={() => console.log("DELETE")}
    />
  </MoviesCard>

  return <main>
    <MoviesFragment
      fetcher={getSavedMovies}
      cache={savedMoviesCache}
      renderCard={renderCard}
    />
  </main>
}

export default SavedMovies;
