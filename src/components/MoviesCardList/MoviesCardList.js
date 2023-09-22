import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, visible, setVisible, width }) {
  const showMoreCards = () => {
    if (width > 865) {
      setVisible((preValue) => preValue + 4);
    } else if (width < 865 && width > 600) {
      setVisible((preValue) => preValue + 2);
    } else if (width < 600) {
      setVisible((preValue) => preValue + 1);
    }
  };

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.slice(0, visible).map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
      <div className='cards__button-container'>
        <button className='cards__button' type='button' onClick={showMoreCards}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
