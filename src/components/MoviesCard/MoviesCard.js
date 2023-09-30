import './MoviesCard.css';

function MoviesCard({ card, children }) { 

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
          { children }
        </div>
      </div>
      <p className='card__duration'>{getMovieDuration(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
