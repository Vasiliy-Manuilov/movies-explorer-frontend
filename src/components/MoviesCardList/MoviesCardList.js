import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
      <div className='cards__button-container'>
        <button className='cards__button' type='button'>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;