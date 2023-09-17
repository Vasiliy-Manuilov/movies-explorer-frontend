import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard({ card }) { 
  const { pathname } = useLocation();
  const [addFavorite, setAddFavorite] = useState(false);

  function handleFavorite() {
    setAddFavorite(!addFavorite);
  }

  function getMovieDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${Math.trunc(mins % 60)}м`;
  } 

  return (
    <li className='card'>
      <a href={card.trailerLink} target='_blank' className='card__link' rel="noreferrer">
        <img src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className='card__image' />
      </a>
      <div className='card__element'>
        <p className='card__title'>{card.nameRU}</p>
        <div className='card__buttons'>
          {pathname === '/saved-movies' ? (
            <button
              type='button'
              className='card__button card__button_delete'
            />
          ) : (
            <button
              type='button'
              className={`card__button card__button${
                addFavorite ? '_active' : '_inactive'
              }`}
              onClick={handleFavorite}
            />
          )}
        </div>
      </div>
      <p className='card__duration'>{getMovieDuration(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
