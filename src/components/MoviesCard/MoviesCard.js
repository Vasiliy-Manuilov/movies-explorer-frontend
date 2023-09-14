import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard({ card }) {
  const [addFavorite, setAddFavorite] = useState(false);

  function handleFavorite() {
    setAddFavorite(!addFavorite);
  }

  const { Location } = useLocation();
  return (
    <li className='card'>
      <img src={card.image} alt={card.title} className='card__image'></img>
      <div className='card__element'>
        <p className='card__title'>{card.title}</p>
        <div className='card__buttons'>
          {Location === '/saved-movies' ? (
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
      <p className='card__duration'>{card.duration}</p>
    </li>
  );
}

export default MoviesCard;
