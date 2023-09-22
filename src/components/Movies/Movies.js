import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

function Movies() {
  const [cards, setCards] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [inputErrorText, setInputErrorText] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [width, setWidth] = useState(document.documentElement.clientWidth);  
  const [visible, setVisible] = useState(0); 
  
  useEffect(() => {
    if (width > 865 ) {
      setVisible(16);
    } else if (width <= 865 && width > 600) {
      setVisible(8);
    } else if (width <= 600) {
      setVisible(5);
    }
  }, [width]);

  useEffect(() => {
    const handleResizeWindow = () =>
      setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', () => {setTimeout(() => {        
      handleResizeWindow ();
    }, 2000)});
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const searchFilms = async (inputSearch) => {
    if (!inputSearch) {
      setInputErrorText(true);
      return false;
    }
    setIsPreloader(true);
    setErrorText('');
    try {
      const data = await moviesApi.getMovies();
      let filterData = data.filter(
        ({ nameRU, nameEN }) =>
          nameRU.toLowerCase().includes(inputSearch.toLowerCase()) ||
          nameEN.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setCards(filterData);
      if (filterData.length === 0) {
        setErrorText('Ничего не найдено');
      }      
    } catch (err) {
      setErrorText(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
      console.error(err);
    } finally {
      setIsPreloader(false);
    }
  };

  return (
    <main className='movies'>
      <SearchForm
        onSearchClick={searchFilms}
        inputErrorText={inputErrorText}
        cancelingErrorText={setInputErrorText}
      />
      {isPreloader && <Preloader />}
      {errorText && <div className='movies__text-error'>{errorText}</div>}
      {!isPreloader && <MoviesCardList cards={cards} visible={visible} setVisible={setVisible} width={width} />}
    </main>
  );
}

export default Movies;
