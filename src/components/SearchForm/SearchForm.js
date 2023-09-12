import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search'>
      <div className='search__container'>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          required
        />
        <button type='submit' className='search__button' title='Найти'>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
