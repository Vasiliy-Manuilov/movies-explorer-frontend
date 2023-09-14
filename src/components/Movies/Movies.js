import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import cards from '../../utils/films';
// import { useState } from "react";

function Movies() {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  return (
    <main className="movies">
      <SearchForm />  
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}                        
    </main>
  );
}

export default Movies;