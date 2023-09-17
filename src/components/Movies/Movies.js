import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
// import cards from '../../utils/films';
import { useState, useEffect } from "react";

function Movies() {
  const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((cards) => {        
        setCards(cards);
        console.log(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className='movies'>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}
    </main>
  );
}

export default Movies;
