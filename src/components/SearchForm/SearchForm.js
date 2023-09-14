import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-film'>
      <form className='search'>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          required
        />
        <button type='submit' className='search__button'>
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
