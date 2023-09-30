import './MoviesCardList.css';

function MoviesCardList({ cards, showMoreCards, renderCard }) {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map(renderCard)}
      </ul>
        { showMoreCards && <div className='cards__button-container'>
            <button className='cards__button' type='button' onClick={showMoreCards}>
              Ещё
            </button>
      </div> }
    </section>
  );
}

export default MoviesCardList;
